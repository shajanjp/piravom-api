const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let badgeSchema = new Schema({
  title: String,
  description: String,
  points: Number,
});

mongoose.model('badge', badgeSchema);
