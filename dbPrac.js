const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/prac.db");
const mainTable = () => {
  // const dbCheck = db.all
  const createDB = () => {
    //같이 할 때는 run, 다시 할 때는 prepare 무슨 의미인지 조사해보자
    db.run("CREATE TABLE ");
  };
};
