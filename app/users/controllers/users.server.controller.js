const User = require('mongoose').model('user');

exports.userbyId = (req, res, next, userId) => {
  User.findOne({_id: userId})
  .then((userFound) => {
    res.locals.userId = userFound._id;
    next();
  })
  .catch((err) => {
    return res.status(404).json({
      'message': 'User not found!',
      'errors': err,
    });
  });
};

exports.insertUser = (req, res) => {
  let newUser = new User(res.locals.user);
  newUser.save()
  .then((userSaved) => {
    return res.status(201).json(userSaved);
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.getUsers = (req, res) => {
  User.find({})
  .then((userList) => {
    return res.status(200).json(userList);
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.updateUser = (req, res) => {
  User.update({_id: res.locals.userId}, res.locals.user, {safe: true})
  .then((userUpdated) => {
    return res.status(200).json({});
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.getUser = (req, res) => {
  User.findOne({_id: res.locals.userId}).exec()
  .then((userFound) => {
    return res.status(200).json(userFound);
  })
  .catch((err) => {
    return res.status(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};

exports.removeUser = (req, res) => {
  User.remove({_id: res.locals.userId})
  .then((userRemoved) => {
    return res.status(200).json({});
  })
  .catch((err) => {
    return res.satus(500).json({
      'message': 'Internal error',
      'errors': err,
    });
  });
};
