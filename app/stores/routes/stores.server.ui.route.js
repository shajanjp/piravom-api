const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const storeController = require('../controllers/stores.server.controller.js');
const storeValidator = require('../libraries/stores.server.validation.js');

router.route('/')
.post(storeValidator.validateInsertStore, storeController.insertStore)
.get(storeController.getStores);

router.route('/:storeId')
.put(storeValidator.validateInsertStore, storeController.updateStore)
.get(storeController.getStore)
.delete(storeController.removeStore);

router.param('storeId', storeController.storebyId);

module.exports = router;
