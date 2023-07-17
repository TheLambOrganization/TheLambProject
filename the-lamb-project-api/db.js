const { Client } = require("pg");
const { getDatabaseUri } = require("./config");
require("colors");

const db = new Client({ connectionString: getDatabaseUri() });
db.connect((err) => {
  if (err) {
    console.error("connection error".red, err.stack);
  } else {
    console.log("Succesffuly connected to postgres db!".blue);
  }
});

module.exports = db;
