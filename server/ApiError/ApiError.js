class ApiError extends Error {
  status
  message
  
  constructor(status, message) {
    super()
    this.status = status
    this.message = message
  }

  static badRequest(message) {
    return new ApiError(400, message)
  }

  static unauthorized() {
    return new ApiError(401, 'Не авторизовані')
  }

  static forbidden() {
    return new ApiError(403, message || 'Відсутній доступ')
  }

  static notFound() {
    return new ApiError(404, message || 'Не знайдено')
  }

  static internal() {
    return new ApiError(500,  'Помилка сервера')
  }
}

module.exports = ApiError
