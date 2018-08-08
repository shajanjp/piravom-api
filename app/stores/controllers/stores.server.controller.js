const Store = require('mongoose').model('store');

exports.storebyId = (req, res, next, storeId) => {
  Store.findOne({_id: storeId})
  .then((storeFound) => {
    res.locals.storeId = storeFound._id;
    next();
  })
  .catch((err) => {
    return res.status(404).json({
      'message': 'Store not found!',
      'errors': err,
    });
  });
};

exports.insertStore = (req, res) => {
  let newStore = new Store(res.locals.store);
  newStore.save()
  .then((storeSaved) => {
    return res.status(201).json(storeSaved);
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.getStores = (req, res) => {
  Store.find({})
  .then((storeList) => {
    return res.status(200).json(storeList);
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.updateStore = (req, res) => {
  Store.update({_id: res.locals.storeId}, res.locals.store, {safe: true})
  .then((storeUpdated) => {
    return res.status(200).json({});
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.getStore = (req, res) => {
  Store.findOne({_id: res.locals.storeId}).exec()
  .then((storeFound) => {
    return res.status(200).json(storeFound);
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.removeStore = (req, res) => {
  Store.remove({_id: res.locals.storeId})
  .then((storeRemoved) => {
    return res.status(200).json({});
  })
  .catch((err) => {
    return res.satus(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};
