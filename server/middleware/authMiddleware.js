const ApiError = require("../ApiError/ApiError")
const tokenService = require("../service/token-service")

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next()
  }

  try {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) {
      return next(ApiError.unauthorized())
    }


    const decoded = tokenService.validateAccessToken(token)
    if (!decoded) {
      next(ApiError.unauthorized())
    }




    req.user = decoded
    next()
  } catch (e) {
    next(ApiError.unauthorized())
  }
}
