const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const newUser = await User.createUser(body);
    res.status(201).send(newUser);
  } catch (e) {
    next(e);
  }
};

module.exports.updateUser = async (req, res, next) => {
  const {
    params: { userId },
  } = req;
  try {
    const user = await User.findById(userId);

    if (user) {
      const updatedUser = await user.update(req.body);
      return res.status(200).send(updatedUser);
    }
    res.status(404).send({ message: 'User not found' });
  } catch (e) {
    next(e);
  }
};

module.exports.getUserById = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  try {
    const user = await User.findById(userId);

    if (user) {
      return res.status(200).send(user);
    }
    res.status(404).send({ message: 'User not found' });
  } catch (e) {
    next(e);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (e) {
    next(e);
  }
};

module.exports.removeUserById = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  try {
    const result = await User.removeById(userId);

    if (result) {
      res.status(204).send();
    }
    res.status(404).send({ message: 'User not found' });
  } catch (e) {
    next(e);
  }
};
