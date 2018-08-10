const joi = require('joi');
const mongoId = joi.string().length(24);

const addressSchema = require('../../users/libraries/users.server.validation.js').addressSchema;

const storeInsertSchema = joi.object().keys({
  title: joi.string().max(128).allow('').optional().default(''),
  about: joi.string().max(128).allow('').optional().default(''),
  category: joi.array().items(joi.string().max(32).optional()).optional().default([]),
  owners: joi.array().items(mongoId).optional().default([]),
  address: addressSchema,
  open: joi.object().keys({
    day: joi.number(),
    time: joi.number(),
  }),
  logo: joi.string().max(128).allow('').optional().default(''),
  photos: joi.array().items(joi.string()).optional().default([]),
  phone: joi.string().max(128).allow('').optional().default(''),
  website: joi.string().max(128).allow('').optional().default(''),
  email: joi.string().max(128).allow('').optional().default(''),
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
