const { Schema, model } = require('mongoose')

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: { type: String, required: true },
  photoName: { type: String, default:'' },
  isActivated: { type: Boolean, default: false},
  activationLink: { type: String }
})



module.exports = model('User', schema)