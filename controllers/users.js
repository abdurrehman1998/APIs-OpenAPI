const User=require('../models/user');
exports.createUser = function (req, res, next) {
  const user = new User (req.body);

  user.save (function (err) {
    if (err) {
      next (err);
    } else {
      res.json (user);
    }
  });
};

exports.updateUser = function (req, res, next) {
  User.findByIdAndUpdate (req.body._id, req.body, {new: true}, function (
    err,
    user
  ) {
    if (err) {
      next (err);
    } else {
      res.json (user);
    }
  });
};

exports.deleteUser = function (req, res, next) {
  req.user.remove (function (err) {
    if (err) {
      next (err);
    } else {
      res.json (req.user);
    }
  });
};

exports.getAllUsers = function (req, res, next) {
  User.find (function (err, users) {
    if (err) {
      next (err);
    } else {
      res.json (users);
    }
  });
};

exports.getOneUser = function (req, res) {
  res.json (req.user);
};

exports.getByIdUser = function (req, res, next, id) {
  User.findOne ({_id: id}, function (err, user) {
    if (err) {
      next (err);
    } else {
      req.user = user;
      next ();
    }
  });
};
