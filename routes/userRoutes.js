const { findAll } = require("../controllers/usersController");
const userController = require("../controllers/usersController");
module.exports = function (app) {
  // fetch user details with post method for login not get method in order to hind the confidential details which otherwise will have been visible in the url.
  app.post("/api/login", userController.userLogin);
  // post route for signup
  app.post("/api/signUp", userController.userSignUp);
  app.put("/api/user", userController.updateUser);
};
