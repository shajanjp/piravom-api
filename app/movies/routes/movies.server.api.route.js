const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const movieController = require('../controllers/movies.server.controller.js');
const movieValidator = require('../libraries/movies.server.validation.js');

router.route('/')
.post(movieValidator.validateInsertMovie, movieController.insertMovie)
.get(movieController.getMovies);

router.route('/:movieId')
.put(movieValidator.validateInsertMovie, movieController.updateMovie)
.get(movieController.getMovie)
.delete(movieController.removeMovie);

router.param('movieId', movieController.moviebyId);

module.exports = router;
