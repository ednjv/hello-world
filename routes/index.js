module.exports = {
  getHomePage: (req, res, db) => {
    let query = "SELECT * FROM `users` ORDER BY id ASC";

    db.query(query, (err, result) => {
      if (err) {
        res.redirect("/");
      }

      res.render("index.ejs", {
        title: "Welcome to Users Page | View Users",
        users: result
      });
    });
  }
};
