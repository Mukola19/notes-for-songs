class ApiError extends Error {
  constructor(status, message) {
    super()
    this.status = status
    this.message = message
  }

  static errStatus400(message) {
    return new ApiError(400, message)
  }

  static errStatus401() {
    return new ApiError(401, 'Не авторизовані')
  }
}

module.exports = ApiError
