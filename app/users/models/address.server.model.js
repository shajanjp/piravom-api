const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let addressSchema = new Schema({
  street: String,
  city: String,
  landmark: String,
  pincode: String,
  state: String,
  country: String,
  phone: String,
});

module.exports = {
  addressSchema,
};
