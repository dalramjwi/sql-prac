const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./database/index.db");
db.run(
  `INSERT INTO student(name,email) VALUES('test','test@gmail.com')`,
  function (err) {
    if (err) {
      return console.log(err.message);
    }
  }
);
db.close();
