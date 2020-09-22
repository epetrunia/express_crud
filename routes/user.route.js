const express = require('express');
const {
  createUser,
  updateUser,
  getUserById,
  getAllUsers,
  removeUserById,
} = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post('/user', createUser);
userRouter.get('/users', getAllUsers);
userRouter
  .route('/users/:userId')
  .put(updateUser)
  .get(getUserById)
  .delete(removeUserById);

module.exports = userRouter;
