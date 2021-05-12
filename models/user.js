const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  links: [{ tipe: Types.ObjectId }],
});

module.exports = model('User', schema);
