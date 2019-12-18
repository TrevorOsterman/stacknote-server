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
