const fs = require("fs");

module.exports = {
  addUserPage: (req, res, db) => {
    res.render("add-user.ejs", {
      title: "Welcome to Users Page | Add a new user",
      message: ""
    });
  },
  addUser: (req, res, db) => {
    let message = "";
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;

    let emailQuery = `SELECT * FROM users WHERE email = '${email}'`;

    db.query(emailQuery, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (result.length > 0) {
        message = "Email already exists";
        res.render("add-user.ejs", {
          message,
          title: "Welcome to Users Page | Add a new user"
        });
      } else {
        let query = `INSERT INTO users (first_name, last_name, email)
          VALUES ('${first_name}', '${last_name}', '${email}')`;

        db.query(query, (err, result) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.redirect("/");
        });
      }
    });
  },
  editUserPage: (req, res, db) => {
    let userId = req.params.id;
    let query = `SELECT * FROM users WHERE id = ${userId}`;

    db.query(query, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.render("edit-user.ejs", {
        title: "Edit User",
        user: result[0],
        message: ""
      });
    });
  },
  editUser: (req, res, db) => {
    let userId = req.params.id;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;

    let query = `UPDATE users SET first_name = '${first_name}', last_name = '${last_name}'
      WHERE users.id = ${userId}`;

    db.query(query, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.redirect("/");
    });
  },
  deleteUser: (req, res, db) => {
    let userId = req.params.id;
    let deleteUserQuery = `DELETE FROM users WHERE id = ${userId}`;
    db.query(deleteUserQuery, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.redirect("/");
    });
  }
};
