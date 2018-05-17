const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let busSchema = new Schema({
  title: String,
});

mongoose.model('bus', busSchema);