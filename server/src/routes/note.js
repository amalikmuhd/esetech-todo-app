const _ = require('lodash');
const { Note, validate } = require('../model/Note');
const express = require('express');
const router = express.Router();

// Get all notes
router.get('/getAllNotes', async (req, res) => {
  const notes = await Note.find();
  res.send({ data: notes });
});

// Add a new note
router.post('/addNote', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const existingNote = await Note.findOne({ taskName: req.body.taskName });
  if (existingNote)
    return res.status(400).send('Note with this taskName already exists.');

  const note = new Note(_.pick(req.body, ['taskName']));
  await note.save();

  res.send({ message: 'success', data: 'Note created' });
});

// Update a note
router.put('/updateNote/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const note = await Note.findByIdAndUpdate(
    req.params.id,
    { taskName: req.body.taskName },
    { new: true }
  );

  if (!note) return res.status(404).send('Note not found.');

  res.send({ message: 'success', data: 'Note updated' });
});

// Delete a note
router.delete('/deleteNote/:id', async (req, res) => {
  const note = await Note.findByIdAndRemove(req.params.id);

  if (!note) return res.status(404).send('Note not found.');

  res.send({ message: 'success', data: 'Note deleted' });
});

module.exports = router;
