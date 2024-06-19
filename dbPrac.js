const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/prac.db");
const mainTable = () => {
  const dbCheck = db.all(
    "SELECT name FROM sqlite_master WHERE type='table' AND name='prac'",
    (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
      if (data.length > 0) {
        console.log("이미 존재함");
      } else {
        console.log("존재하지 않음");
        createDB("prac");
      }
    }
  );
  const createDB = (tableName) => {
    //같이 할 때는 run, 다시 할 때는 prepare 무슨 의미인지 조사해보자
    db.run(
      `CREATE TABLE ${tableName}(id integer, name text not null,address text not null)`
    );
  };
  // createDB("prac");
};
mainTable();
