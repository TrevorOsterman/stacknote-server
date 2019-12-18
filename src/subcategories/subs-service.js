const knex = require("knex");
const subsService = {
  createSub(knex, newSub) {
    return knex
      .insert(newSub)
      .into("subcategories")
      .returning("*")
      .then(rows => {
        return rows[0];
      });
  },

  getAllSubs(knex) {
    return knex.select("*").from("subcategories");
  },

  updateSub(knex, id, updatedSub) {
    return knex("subcategories")
      .where({ id })
      .update(updatedSub);
  },

  deleteSub(knex, id) {
    return knex("subcategories")
      .where({ id })
      .delete();
  }
};

module.exports = subsService;
