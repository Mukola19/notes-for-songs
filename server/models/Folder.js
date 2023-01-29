const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  userId: { type: Types.ObjectId, ref: 'User' },


})



module.exports = model('Folder', schema)