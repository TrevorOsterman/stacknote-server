require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const { CLIENT_ORIGIN } = require("./config");
const notesRouter = require("./notes/notes-router.js");
const subsRouter = require("./subcategories/subs-router.js");

const app = express();
app.use(cors());
const morganOption = process.env.NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(helmet());

app.use(notesRouter);
app.use(subsRouter);

app.use(function errorHandler(error, req, res, next) {
  let response;
  if ((NODE_ENV === "production") === "production") {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
