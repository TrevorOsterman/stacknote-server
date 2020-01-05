const knex = require("knex");
const notesService = {
  getAllNotes(knex) {
    return knex
      .select(
        "notes.id",
        "content",
        "subcategory_name",
        "subcategory_id",
        "category_name",
        "category_id",
        "note_created"
      )
      .from("notes")
      .innerJoin("subcategories", "notes.subcategory_id", "subcategories.id")
      .innerJoin("categories", "subcategories.category_id", "categories.id")
      .orderBy("subcategory_id", "asc");
  },

  createNote(knex, newNote) {
    return knex
      .insert(newNote)
      .into("notes")
      .returning("*")
      .then(rows => {
        return rows[0];
      });
  },

  updateNote(knex, id, newText) {
    return knex("notes")
      .where({ id })
      .update(newText)
      .orderBy("subcategory_id", "asc");
  },

  deleteNote(knex, id) {
    return knex("notes")
      .where({ id })
      .delete();
  }
};

module.exports = notesService;
