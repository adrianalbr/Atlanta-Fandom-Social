const db = require("../models/");

module.exports = {
  userSignUp: function (req, res) {
    //During signup interest and followers should be blank
    req.body.interests = [];
    req.body.followers = [];
    db.User.create(req.body)
      .then((data) => {
        console.log(data);
        res
          .status(200)
          .json({
            _id: data._id,
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            email: data.email,
            created: data.created,
          });
      })
      .catch((err) => {
        res.status(422).json(err);
      });
  },

  userLogin: function (req, res) {
    let userId = req.body.username;
    let password = req.body.password;
    db.User.findOne({
      username: userId,
      password: password,
    })
      .then((data) => {
        res.status(200).json({ status: "successful" });
      })
      .catch((err) => {
        res.status(404).json(err);
      });
  },
};
