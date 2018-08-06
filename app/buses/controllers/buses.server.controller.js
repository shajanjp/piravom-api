const Bus = require('mongoose').model('bus');
// const busValidation = require('../libraries/buses.server.validation.js');

exports.busbyId = (req, res, next, busId) => {
  Bus.findOne({_id: busId})
  .then((busFound) => {
    res.locals.busId = busFound._id;
    next();
  })
  .catch((err) => {
    return res.status(404).json({
      'message': 'Bus not found!',
      'errors': err,
    });
  });
};

exports.insertBus = (req, res) => {
  let newBus = new Bus(res.locals.bus);
  newBus.save()
  .then((busSaved) => {
    return res.status(201).json(busSaved);
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.getBuses = (req, res) => {
  Bus.find({})
  .then((busList) => {
    return res.status(200).json(busList);
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.updateBus = (req, res) => {
  Bus.update({_id: res.locals.busId}, res.locals.bus, {safe: true})
  .then((busUpdated) => {
    return res.status(200).json({});
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.getBus = (req, res) => {
  Bus.findOne({_id: res.locals.busId}).exec()
  .then((busFound) => {
    return res.status(200).json(busFound);
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.removeBus = (req, res) => {
  Bus.remove({_id: res.locals.busId})
  .then((busRemoved) => {
    return res.status(200).json({});
  })
  .catch((err) => {
    return res.satus(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};
