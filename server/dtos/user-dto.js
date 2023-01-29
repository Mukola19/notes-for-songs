module.exports = class UserDto {
  id
  email
  displayName
  photoUrl
  isActivated
  
  constructor(model) {
    this.id = model._id
    this.email = model.email
    this.displayName = model.displayName

    model.photoName
    ? this.photoUrl = process.env.SERVER_URL + model.photoName
    : this.photoUrl = ''
    this.isActivated = model.isActivated
  
  }
}

