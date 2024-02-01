const bcrypt = require('bcryptjs');
const _ = require('lodash');
const { User, validate } = require('../model/Users');
const express = require('express');
const sendMail = require('../utils/sendMail');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user)
    return res.status(400).send({ message: 'User already registered.' });

  user = new User(_.pick(req.body, ['email', 'password']));

  // hasing the password
  const salt = await bcrypt.genSalt(10);
  // reseting the password
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  // sendMail(user.email);

  res.send({ message: 'success', data: 'User created' });
});

router.post('/login', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send({ message: 'Invalid email or password.' });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send({ message: 'Invalid email or password.' });

  // const token = jwt.sign({ _id: user._id }, config.get('jwtPrivateKey'));
  const token = user.generateAuthToken();

  res.send({ message: 'success', data: token });
});

module.exports = router;
