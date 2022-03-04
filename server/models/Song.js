const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  name: { type: String, required: true },
  body: { type: String, required: true },
  folder: { type: Types.ObjectId, ref: 'Folder' },
  owner: { type: Types.ObjectId, ref: 'User' },

})



module.exports = model('Song', schema)