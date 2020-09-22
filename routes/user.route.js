const express = require('express');
const {
  validateCreatedUser,
  validateUpdatedUser,
} = require('../middleware/userValidation');
const {
  createUser,
  updateUser,
  getUserById,
  getAllUsers,
  removeUserById,
} = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post('/user', validateCreatedUser, createUser);
userRouter.get('/users', getAllUsers);
userRouter
  .route('/users/:userId')
  .put(validateUpdatedUser, updateUser)
  .get(getUserById)
  .delete(removeUserById);

module.exports = userRouter;
