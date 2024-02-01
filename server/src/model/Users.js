const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const { JWT_PRIVATE_KEY } = process.env;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 255,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
    },
    name: {
      type: String,
      minlength: 4,
      maxlength: 100,
    },
  },
  {
    collection: 'users',
  }
);

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ id: this._id }, JWT_PRIVATE_KEY);
};

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
    name: Joi.string().min(4).max(100),
  };
  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
