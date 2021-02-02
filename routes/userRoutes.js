const { findAll } = require("../controllers/usersController");
const userController = require("../controllers/usersController");
module.exports = function (app) {
  app.get("/api/user", userController.findAll);
  app.post("/api/signUp", userController.create);
};
