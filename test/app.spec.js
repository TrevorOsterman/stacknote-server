const app = require("../src/app");

describe("App", () => {
  it("GET /api/notes responds with 200 containing an array", () => {
    return supertest(app)
      .get("/api/notes")
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an("array");
      });
  });
});
