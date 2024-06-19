const db = require("sqlite3").verbose();
const sqlite3 = new db.Database("./database/prac.db");
// sqlite3.run("CREATE TABLE zootopia(id interger, name text not null)");
const insert = sqlite3.prepare("INSERT INTO zootopia (id, name) VALUES (?,?)");
insert.run("1", "김보미");
insert.finalize();
sqlite3.all("SELECT * FROM zootopia", (err, rows) => {
  if (err) {
    console.log(err);
  }
  rows.forEach((rows) => {
    console.log(`${rows.id} : ${rows.name}`);
  });
});
