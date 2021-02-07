const db = require("../models/");

module.exports = {
  userSignUp: async function (req, res) {
    try {
      const user = await db.User.create(req.body);
      const token = await user.generateAuthToken();
      res.send({ user, token });
    } catch (err) {
      res.status(422).json({ errors: err.errors });
    }
  },

  userLogin: async function (req, res) {
    try {
      const user = await db.User.findByCredentials(
        req.body.username,
        req.body.password
      );
      const token = await user.generateAuthToken();
      res.status(200).json({ user, token });
    } catch (e) {
      res.status(404).json({ error: "Login failed" });
    }
  },

  updateUser: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
