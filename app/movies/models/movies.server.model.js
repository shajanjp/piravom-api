const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let movieSchema = new Schema({
  title: String,
  description: String,
  thumbnail: String,
  teatre: {
    type: Schema.ObjectId,
    ref: 'place',
  },
  shows: [String],
  screen: Number,
});

mongoose.model('movie', movieSchema);
