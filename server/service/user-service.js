const User = require("../models/User")
const fileService = require("../service/file-service")
const tokenService = require("../service/token-service")
const UserDto = require("../dtos/user-dto")
const ApiError = require("../ApiError/ApiError")
const { hash, compare } = require("bcryptjs")
const { v4 } = require("uuid")

class UserService {
  async registration(email, password, displayName) {
    const candidate = await User.findOne({ email })
    if (candidate) {
      throw ApiError.errStatus400("Такий користач вже є")
    }
    const hashPassword = await hash(password, 5)

    const userData = await User.create({
      email,
      password: hashPassword,
      displayName,
    })

    const user = new UserDto(userData)

    const tokens = await tokenService.generateTokens({ ...user })
    await tokenService.saveToken(user.id, tokens.refreshToken)

    return { tokens, ...user }
  }




  async login(email, password) {
    const candidate = await User.findOne({ email })
    if (!candidate) {
      throw ApiError.errStatus401()
    }
    const hashPassword = await compare(password, candidate.password)
    if (!hashPassword) {
      throw ApiError.errStatus400("Неправельний пароль")
    }

    const user = new UserDto(candidate)

    const tokens = await tokenService.generateTokens({ ...user })
    await tokenService.saveToken(user.id, tokens.refreshToken)

    return { tokens, ...user }
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken)
    return token
  }




  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.errStatus401()
    }

    const userData = tokenService.validateRefreshToken(refreshToken)
    const token = await tokenService.findToken(refreshToken)

    if (!userData || !token) {
      throw ApiError.errStatus401()
    }
    const user = await User.findOne({ _id: userData.id })


    const userDto = new UserDto(user) // id, email, role, isActivation
    const tokens = tokenService.generateTokens({ ...userDto })

    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return { tokens, ...userDto }
  }





}

module.exports = new UserService()
