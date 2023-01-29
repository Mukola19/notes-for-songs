const User = require('../models/User')
const tokenService = require('../service/token-service')
const fileService = require('../service/file-service')
const mailSevice = require('../service/mail-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../ApiError/ApiError')
const { hash, compare } = require('bcryptjs')
const { v4 } = require('uuid')

class UserService {
  async registration(email, password, displayName) {
    const candidate = await User.findOne({ email })
    if (candidate) {
      throw ApiError.badRequest('Такий користач вже є')
    }
    const hashPassword = await hash(password, 5)
    const activationLink = v4()
    await mailSevice.sendActiationMail(email, `${process.env.SERVER_URL}api/user/activate/${activationLink}` )


    const userData = await User.create({
      email,
      password: hashPassword,
      displayName,
      activationLink
    })


    const user = new UserDto(userData)

    const tokens = await tokenService.generateTokens({ ...user })
    await tokenService.saveToken(user.id, tokens.refreshToken)

    return { tokens, ...user }
  }

  async login(email, password) {
    const candidate = await User.findOne({ email })
    if (!candidate) throw ApiError.unauthorized()

    const hashPassword = await compare(password, candidate.password)
    if (!hashPassword)  throw ApiError.badRequest('Неправельний пароль')

    const user = new UserDto(candidate)

    const tokens = await tokenService.generateTokens({ ...user })
    await tokenService.saveToken(user.id, tokens.refreshToken)

    return { tokens, ...user }
  }

  async logout(refreshToken) {
    await tokenService.removeToken(refreshToken)
    return { message: 'Ви вийшли' }
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.unauthorized()
    }

    const userData = tokenService.validateRefreshToken(refreshToken)
    const token = await tokenService.findToken(refreshToken)

    if (!userData || !token) {
      throw ApiError.unauthorized()
    }
    const user = await User.findOne({ _id: userData.id })
    const userDto = new UserDto(user) // id, email, role, isActivation
    const tokens = tokenService.generateTokens({ ...userDto })

    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return { tokens, ...userDto }
  }


  async activate(activationLink) {
    const user = await User.findOne({ activationLink })
    if(!user) throw ApiError.badRequest('Некоректе посилання активація')
    user.isActivated = true
    await user.save()


  }

  async setPhoto(userId, photo) {
    const photoName = await fileService.add(photo)

    const user = await User.findById(userId)

    if (user.photoName) {
      fileService.delete(user.photoName)
    }

    user.photoName = photoName
    user.save()

    return { photoUrl: process.env.SERVER_URL + photoName }
  }

  async deletePhoto(userId) {
    const user = await User.findById(userId)

    if (!user.photoName) {
      throw ApiError.badRequest('У вас немає фото')
    }
    fileService.delete(user.photoName)

    user.photoName = ''
    user.save()

    return { message: 'Фото видалено' }
  }
}

module.exports = new UserService()
