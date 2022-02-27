const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
  name: { type: String, required: true },
  body: { type: String, required: true },
  // categoria: { type: Types.ObjectId, ref: "Categoria" },
  owner: { type: Types.ObjectId, ref: "User" },

})



module.exports = model('Song', schema)