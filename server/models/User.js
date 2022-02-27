const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: { type: String, required: true },
  photoName: { type: String, default:'' },
  songs: [{ type: Types.ObjectId, ref: "Song" }],
  // categories: [{ type: Types.ObjectId, ref: "Category" }],
})



module.exports = model('User', schema)