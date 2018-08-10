const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addressSchema = require('../../users/models/address.server.model.js').addressSchema;

let storeSchema = new Schema({
  title: String,
  about: String,
  category: [String],
  owners: [{
    type: Schema.ObjectId,
    ref: 'user',
  }],
  address: addressSchema,
  open: {
    day: Number,
    time: Number,
  },
  logo: String,
  photos: [String],
  phone: String,
  website: String,
  email: String,
});

mongoose.model('store', storeSchema);
