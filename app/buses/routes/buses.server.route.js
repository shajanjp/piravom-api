const express = require('express');
const router = express.Router();
const busController = require('../controllers/buses.server.controller.js');
const busValidator = require('../libraries/buses.server.validation.js');

router.route('/')
.post(busValidator.validateInsertBus, busController.insertBus)
.get(busController.getBuses);

router.route('/:bus_id')
.put(busValidator.validateInsertBus, busController.updateBus)
.get(busController.getBus)
.delete(busController.removeBus)

router.param('bus_id', busController.busbyId)

module.exports = router;