module.exports = {
  createUsersTable(db) {
    const query = `CREATE TABLE IF NOT EXISTS users (
        id int(5) NOT NULL AUTO_INCREMENT,
        first_name varchar(255) NOT NULL,
        last_name varchar(255) NOT NULL,
        email varchar(20) UNIQUE NOT NULL,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1; `;

    db.query(query, (err, result) => {
      if (err) {
        throw err;
      }

      console.log("table created successfully");
    });
  }
};
