const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let storeSchema = new Schema({
  title: String,
});

mongoose.model('store', storeSchema);
