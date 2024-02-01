const Joi = require('joi');
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 255,
    },
  },
  {
    collection: 'note',
  }
);

const Note = mongoose.model('Note', noteSchema);

function validateUser(note) {
  const schema = {
    taskName: Joi.string().min(2).max(255),
  };
  return Joi.validate(note, schema);
}

exports.Note = Note;
exports.validate = validateUser;
