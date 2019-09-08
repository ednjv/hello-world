const { getHomePage } = require("../routes/index");
const {
  addUserPage,
  addUser,
  deleteUser,
  editUser,
  editUserPage
} = require("../routes/user");

module.exports = {
  setRoutes: (app, db) => {
    app.get("/", (req, res) => {
      getHomePage(req, res, db);
    });
    app.get("/add", (req, res) => {
      addUserPage(req, res, db);
    });
    app.get("/edit/:id", (req, res) => {
      editUserPage(req, res, db);
    });
    app.get("/delete/:id", (req, res) => {
      deleteUser(req, res, db);
    });
    app.post("/add", (req, res) => {
      addUser(req, res, db);
    });
    app.post("/edit/:id", (req, res) => {
      editUser(req, res, db);
    });
  }
};
