const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let busSchema = new Schema({
  title: String,
  toPlaces: [String],
  startTime: Number,
  busType: String,
  busTags: [String],
});

mongoose.model('bus', busSchema);