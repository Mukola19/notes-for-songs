const UserService = require("../service/user-service")

class UserControles {
  async registration(req, res, next) {
    try {
      const { email, password, displayName } = req.body
      const user = await UserService.registration( email, password, displayName )
      res.cookie('refreshToken',user.tokens.refreshToken, { maxAge : 30 * 24 *60 *60 * 1000, httpOnly: true} )
      res.json(user)
    } catch (e) {
      next(e)
    }
  }



  async login(req, res, next) {
    try {
      const { email, password } = req.body
      const user = await UserService.login( email, password)
      res.cookie('refreshToken', user.tokens.refreshToken, { maxAge : 30 * 24 *60 *60 * 1000, httpOnly: true} )
      res.json(user)
    } catch (e) {
      next(e)
    }
  }


  async logout(req, res, next) {
    try {
      const { refreshToken} = req.cookies
      const token = await UserService.logout(refreshToken)
      res.clearCookie("refreshToken")
      res.json(token)
    } catch (e) {
      next(e)
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken} = req.cookies
      const user = await UserService.refresh(refreshToken)
      res.cookie('refreshToken', user.tokens.refreshToken, { maxAge : 30 * 24 *60 *60 * 1000, httpOnly: true} )
      res.json(user)
    } catch (e) {
      next(e)
    }
  }




}

module.exports = new UserControles()
