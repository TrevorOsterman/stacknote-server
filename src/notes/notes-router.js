const express = require("express");
const notesRouter = express.Router();
const bodyParser = express.json();
const uuid = require("uuid/v4");
const notesService = require("./notes-service.js");
const path = require("path");

notesRouter
  .route("/api/notes")
  .get((req, res, next) => {
    const knex = req.app.get("db");
    notesService
      .getAllNotes(knex)
      .then(notes => {
        res.status(200).json(notes);
      })
      .catch(err => {
        next(err);
      });
  })
  .post(bodyParser, (req, res, next) => {
    const { content, subcategory_id } = req.body;
    const newNote = { content, subcategory_id };

    notesService
      .createNote(req.app.get("db"), newNote)
      .then(note => {
        res
          .status(201)
          .json(note)
          .done();
      })
      .catch(next);
  });

notesRouter
  .route("/api/notes/:note_id")
  .patch(bodyParser, (req, res, next) => {
    const { content } = req.body;
    const updatedNote = { content };

    notesService
      .updateNote(req.app.get("db"), req.params.note_id, updatedNote)
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    notesService
      .deleteNote(req.app.get("db"), req.params.note_id)
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = notesRouter;
