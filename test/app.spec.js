const knex = require("knex");
const app = require("../src/app");

describe("App", () => {
  let db;
  before("make knex instance", () => {
    const db = knex({
      client: "pg",
      connection: "postgresql://TrevorOsterman@localhost/StackNote-Test"
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

  it("GET /api/subcategories responds with 200 containing an array", () => {
    return supertest(app)
      .get("/api/subcategories")
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an("array");
      });
  });

  it("POST /api/notes/ responds with 201 and creates an object", () => {
    const newNote = {
      subcategory_id: 1,
      content: "test"
    };
    return supertest(app)
      .post("/api/notes")
      .send(newNote)
      .expect(500);
  });

  it("POST /api/subcategories/ responds with 201 and creates an object", () => {
    const newSub = {
      subcategory_name: "Object Oriented Programming (OOP)",
      category_id: "4"
    };
    return supertest(app)
      .post("/api/subcategories")
      .send(newSub)
      .expect(500);
  });
});
