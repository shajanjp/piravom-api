const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addressSchema = require('./address.server.model.js').addressSchema;

let userSchema = new Schema({
  full_name: String,
  about: String,
  address: addressSchema,
  badges: {
    type: Schema.ObjectId,
    ref: 'badge',
  },
  permissions: [String],
  phone: String,
  email: String,
});

mongoose.model('user', userSchema);
