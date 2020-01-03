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
});
