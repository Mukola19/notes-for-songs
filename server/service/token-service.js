const { sign, verify } = require('jsonwebtoken')
const Token = require('../models/Token')

class TokenService {
  generateTokens({isActivation, ...payload}) {
    const accessToken = sign(payload, process.env.SECRET_ACCESS_JWT, {
      expiresIn: '1h',
    })
    const refreshToken = sign(payload, process.env.SECRET_REFRESH_JWT, {
      expiresIn: '30d',
    })
    return {
      accessToken,
      refreshToken,
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({ user: userId })

    if (tokenData) {
      tokenData.refreshToken = refreshToken
      return tokenData.save()
    }

    const token = await Token.create({ user:userId, refreshToken })
    return token
  }

  async removeToken(refreshToken) {
    const tokenData = await Token.deleteOne({ refreshToken })
    return tokenData
  }

  validateRefreshToken(token) {
    try {
      const dataToken = verify(token, process.env.SECRET_REFRESH_JWT)
      return dataToken
    } catch (e) {
      return null
    }
  }

  validateAccessToken(token) {
    const dataToken = verify(token, process.env.SECRET_ACCESS_JWT)


    try {
      return dataToken
    } catch (e) {
      return null
    }
  }

  async findToken(refreshToken) {
    const tokenData = await Token.findOne({ refreshToken })
    return tokenData
  }
}

module.exports = new TokenService()

// SECRET_REFRESH_JWT
