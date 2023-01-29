const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  name: { type: String, required: true },
  body: { type: String, required: true },
  description: { type: String, default: '' },
  folderId: { type: Types.ObjectId, ref: 'Folder' },
  userId: { type: Types.ObjectId, ref: 'User' },

})



module.exports = model('Song', schema)