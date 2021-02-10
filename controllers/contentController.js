const db = require("../models/");

module.exports = {
  findByAuthor: function (req, res) {
    console.log("Find by author");
    db.Content.find({ author: req.user._id })
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findAll: function (req, res) {
    db.Content.find(req.query)
      .populate("author")
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    console.log(req.params.id);
    db.Content.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    console.log("in conrnt controller create all");
    console.log(req.body);
    const content = req.body;
    content.author = req.user._id;
    db.Content.create(content)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Content.findByIdAndUpdate(req.para.id, req.body, {new:true})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // findOneAndUpdate
  remove: function (req, res) {
    db.Content.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
