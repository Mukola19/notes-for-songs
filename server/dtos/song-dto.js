module.exports = class SongDto {
  id
  name
  body

  constructor(model) {
    this.id = model._id
    this.name = model.name
    this.body = model.body
  }
}
