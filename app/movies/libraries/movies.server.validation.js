const joi = require('joi');
const mongoId = joi.string().length(24);

const movieInsertSchema = joi.object().keys({
  title: joi.string().allow('').optional(),
  description: joi.string().allow('').optional(),
  thumbnail: joi.string().allow('').optional(),
  teatre: mongoId,
  shows: joi.array().items(joi.string().allow('').optional()).optional().default([]),
  screen: joi.number().min(1).max(16).optional(),
});

exports.validateInsertMovie = function(req, res, next) {
  joi.validate(req.body, movieInsertSchema, {'stripUnknown': true}, function(err, validated) {
    if (err) {
return res.status(500).json({
        'errors': err.details[0].message,
      });
} else {
      res.locals.movie = validated;
      return next();
    }
  });
};
