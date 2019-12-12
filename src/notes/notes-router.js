const express = require("express");
const notesRouter = express.Router();
const bodyParser = express.json();
const uuid = require("uuid/v4");
const notesService = require("./notes-service.js");
const path = require("path");

notesRouter.route("/api/notes");

module.exports = notesRouter;
