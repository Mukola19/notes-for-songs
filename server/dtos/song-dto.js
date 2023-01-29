module.exports = class SongDto {
  id
  name
  body
  description

  constructor(model) {
    this.id = model._id
    this.name = model.name
    this.body = model.body
    this.description = model.description
  }
}
