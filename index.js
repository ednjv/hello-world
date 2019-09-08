const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// my config
const { setDb } = require("./config/db");
const { createUsersTable } = require("./init/create-table");
const { setRoutes } = require("./config/routes");

const port = 5000;

// set db connection
const db = setDb();

// init
createUsersTable(db);

app.set("views", __dirname + "/views"); // set express to look in this folder to render our view
app.set("view engine", "ejs"); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set routes
setRoutes(app, db);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
