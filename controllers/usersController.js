const db = require("../models/");

module.exports = {
  userSignUp: function (req, res) {
    db.User.create(req.body)
      .then((data) => {
        console.log(data);
        res.status(200).json({
          _id: data._id,
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
          email: data.email,
          created: data.created,
        });
      })
      .catch((err) => {
        res.status(422).json({errors:err.errors});
      });
  },

  userLogin: async function (req, res) {

    try{
      const user = await db.User.findByCredentials(req.body.username, req.body.password);
      res.status(200).json({ status: "successful" });
    }catch(e){
      res.status(404).json({ status: "failed" });
    }
  },



  updateUser: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
