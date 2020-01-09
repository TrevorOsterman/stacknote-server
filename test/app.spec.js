const knex = require("knex");
const app = require("../src/app");

describe("App", () => {
  let db;
  before("make knex instance", () => {
    const db = knex({
      client: "pg",
      connection: "postgresql://TrevorOsterman@localhost/StackNote"
    });
    app.set("db", db);
  });

  it("GET /api/notes responds with 200 containing an array", () => {
    return supertest(app)
      .get("/api/notes")
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an("array");
      });
  });
  it("POST /api/notes/ responds with 201 and creates an object", () => {
    const newNote = {
      id: "180bf2e4-f8d2-4484-bfef-e047575a537f",
      subcategory_id: "ff337cb2-1ec3-43fd-9dd3-f9501073553b",
      content: "test"
    };
    return supertest(app)
      .post("/api/notes")
      .send(newNote)
      .expect(201);
  });
  it("DELETE /api/notes responds with 204", () => {
    const deleteNote = {
      note_id: "180bf2e4-f8d2-4484-bfef-e047575a537f"
    };
  });

  it("GET /api/subcategories responds with 200 containing an array", () => {
    return supertest(app)
      .get("/api/subcategories")
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an("array");
      });
  });
  it("POST /api/subcategories/ responds with 201 and creates an object", () => {
    const newSub = {
      id: "df12863b-af99-40cb-b47d-63e2c77ea387",
      subcategory_name: "Object Oriented Programming (OOP)",
      category_id: "4"
    };
    return supertest(app)
      .post("/api/subcategories")
      .send(newSub)
      .expect(201);
  });
  it("PATCH /api/subcategories responds with 202", () => {
    const updateSub = {
      sub_id: "df12863b-af99-40cb-b47d-63e2c77ea387",
      content: "Updated Sub"
    };
  });
  it("DELETE /api/subcategories responds with 204", () => {
    const deleteSub = {
      sub_id: "df12863b-af99-40cb-b47d-63e2c77ea387"
    };
  });
});
