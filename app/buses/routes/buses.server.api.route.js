const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const busController = require('../controllers/buses.server.controller.js');
const busValidator = require('../libraries/buses.server.validation.js');

router.route('/')
.post(busValidator.validateInsertBus, busController.insertBus)
.get(busController.getBusesAPI);

router.route('/:busId')
.put(busValidator.validateInsertBus, busController.updateBus)
.get(busController.getBus)
.delete(busController.removeBus);

router.param('busId', busController.busbyId);

module.exports = router;
