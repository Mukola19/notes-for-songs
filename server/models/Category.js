const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
  name: { type: String, required: true },
  songs: [{ type: Types.ObjectId, ref: "Song" }],
})



module.exports = model('Category', schema)