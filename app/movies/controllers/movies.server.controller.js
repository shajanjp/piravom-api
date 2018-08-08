const Movie = require('mongoose').model('movie');
// const movieValidation = require('../libraries/movies.server.validation.js');

exports.moviebyId = (req, res, next, movieId) => {
  Movie.findOne({_id: movieId})
  .then((movieFound) => {
    res.locals.movieId = movieFound._id;
    next();
  })
  .catch((err) => {
    return res.status(404).json({
      'message': 'Movie not found!',
      'errors': err,
    });
  });
};

exports.insertMovie = (req, res) => {
  let newMovie = new Movie(res.locals.movie);
  newMovie.save()
  .then((movieSaved) => {
    return res.status(201).json(movieSaved);
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.getMovies = (req, res) => {
  Movie.find({})
  .then((movieList) => {
    return res.status(200).json(movieList);
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.updateMovie = (req, res) => {
  Movie.update({_id: res.locals.movieId}, res.locals.movie, {safe: true})
  .then((movieUpdated) => {
    return res.status(200).json({});
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.getMovie = (req, res) => {
  Movie.findOne({_id: res.locals.movieId}).exec()
  .then((movieFound) => {
    return res.status(200).json(movieFound);
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.removeMovie = (req, res) => {
  Movie.remove({_id: res.locals.movieId})
  .then((movieRemoved) => {
    return res.status(200).json({});
  })
  .catch((err) => {
    return res.satus(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};
