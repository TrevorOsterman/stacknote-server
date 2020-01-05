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
    return knex
      .select("*")
      .from("subcategories")
      .orderBy("sub_created", "asc");
  },

  updateSub(knex, id, updatedSub) {
    return knex("subcategories")
      .where({ id })
      .update(updatedSub);
  },

  deleteSub(knex, id) {
    const subNotes = knex("notes");
    console.log(subNotes);
    return knex("subcategories")
      .where({ id })
      .delete();
  }
};

module.exports = subsService;
