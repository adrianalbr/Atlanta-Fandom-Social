const db = require("../models/");

module.exports = {
  create: function (req, res) {
    //During signup interest and followers should be blank
    req.body.interests=[];
    req.body.followers=[];
    db.User.create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(422).json(err);
      });
  },

  findAll: function (req, res) {
    db.User.find(req.query)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(404).json(err);
      });
  },
};
