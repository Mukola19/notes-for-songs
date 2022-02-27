module.exports = class UserDto {
  id
  email
  displayName
  photoUrl

  constructor(model) {
    this.id = model._id
    this.email = model.email
    this.displayName = model.displayName
    if(model.photoName) {
    this.photoUrl = model.photoName + process.env.SERVER_URL
    }
    this.photoUrl = null
  }
}

