const mysql = require("mysql");

module.exports = {
  setDb: () => {
    const db = mysql.createConnection({
      host: "localhost",
      user: "user",
      password: "password",
      database: "hello-world"
    });

    db.connect(err => {
      if (err) {
        throw err;
      }

      console.log("Connected to database");
    });

    return db;
  }
};
