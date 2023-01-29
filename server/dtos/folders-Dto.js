module.exports = class FolderDto {
  id
  name
  description
  constructor(model) {
    this.id = model._id
    this.name = model.name
    this.description = model.description
  }
}
