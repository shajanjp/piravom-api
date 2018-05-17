const joi = require('joi');
const mongoId = joi.string().length(24);

const busInsertSchema = joi.object().keys({
  
  title: joi.string().allow('').optional(),
});

exports.validateInsertBus = function (req, res, next) {
  joi.validate(req.body, busInsertSchema, { 'stripUnknown': true }, function (err, validated) {
    if(err)
      return res.status(500).json({ 
        "errors": err.details[0].message
      });
    else {
      res.locals.bus = validated;
      return next();
    }
  });
}