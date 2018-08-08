const joi = require('joi');
// const mongoId = joi.string().length(24);

const storeInsertSchema = joi.object().keys({

  title: joi.string().allow('').optional(),
});

exports.validateInsertStore = function(req, res, next) {
  joi.validate(req.body, storeInsertSchema, {'stripUnknown': true}, function(err, validated) {
    if (err) {
return res.status(500).json({
        'errors': err.details[0].message,
      });
} else {
      res.locals.store = validated;
      return next();
    }
  });
};
