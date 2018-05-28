const joi = require('joi');
const mongoId = joi.string().length(24);

const busInsertSchema = joi.object().keys({
  title: joi.string().allow('').optional(),
  toPlaces: joi.array().items(joi.string().allow('').optional()).optional().default([]),
  startTime: joi.number().optional(),
  boardingPlace: joi.string().allow('').max(32).optional(),
  busTags: joi.array().items(joi.string().allow('').max(16).optional()).optional().default([]),  
  dow: joi.array().items(joi.number().min(1).max(7).optional()).optional().default([]),
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