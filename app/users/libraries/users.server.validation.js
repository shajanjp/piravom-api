const joi = require('joi');
// const mongoId = joi.string().length(24);

const userInsertSchema = joi.object().keys({
  title: joi.string().allow('').optional(),
});

function validateInsertUser(req, res, next) {
  joi.validate(req.body, userInsertSchema, {'stripUnknown': true}, function(err, validated) {
    if (err) {
return res.status(500).json({
        'errors': err.details[0].message,
      });
} else {
      res.locals.user = validated;
      return next();
    }
  });
}

const addressSchema = joi.object().keys({
  title: joi.string().allow('').optional(),
  street: joi.string().allow('').optional(),
  city: joi.string().allow('').optional(),
  landmark: joi.string().allow('').optional(),
  pincode: joi.string().allow('').optional(),
  state: joi.string().allow('').optional(),
  country: joi.string().allow('').optional(),
  phone: joi.string().allow('').optional(),
});


module.exports = {
  addressSchema,
  validateInsertUser,
};
