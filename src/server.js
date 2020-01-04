require("dotenv").config();
const { PORT, DATABASE_URL } = require("./config");

const knex = require("knex");
const cors = require("cors");
const app = require("./app");
app.use(cors());

const db = knex({
  client: "pg",
  connection: DATABASE_URL
});

console.log(DATABASE_URL);

app.set("db", db);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
