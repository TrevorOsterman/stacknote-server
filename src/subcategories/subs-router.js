const express = require("express");
const subsRouter = express.Router();
const bodyParser = express.json();
const uuid = require("uuid/v4");
const subsService = require("./subs-service.js");
const path = require("path");

subsRouter
  .route("/api/subcategories")
  .get((req, res, next) => {
    subsService
      .getAllSubs(req.app.get("db"))
      .then(subs => {
        res.status(200).json(subs);
      })
      .catch(err => {
        next(err);
      });
  })
  .post(bodyParser, (req, res, next) => {
    const { subcategory_name, category_id } = req.body;
    const newSub = { subcategory_name, category_id };

    subsService
      .createSub(req.app.get("db"), newSub)
      .then(sub => {
        res.status(201).json(sub);
      })
      .catch(next);
  });

subsRouter
  .route("/api/subcategories/:sub_id")
  .patch(bodyParser, (req, res, next) => {
    const { subcategory_name } = req.body;
    const updatedSub = { subcategory_name };

    subsService
      .updateSub(req.app.get("db"), req.params.sub_id, updatedSub)
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    subsService
      .deleteSub(req.app.get("db"), req.params.sub_id)
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = subsRouter;
