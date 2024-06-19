const db = require("sqlite3").verbose();
const sqlite3 = new db.Database("./database/prac.db");
sqlite3.run("CREATE TABLE zootopia(id interger, name text not null)");
