const jwt = require("jsonwebtoken");
const db = require("../models/");

const auth = async (req, res, next) => {
  console.log("middle ware");

  try {
    // verify token from coming in request header.
    console.log(req.header("Authorization"));
    const token = req.header("Authorization");
    const decoded = jwt.verify(token, "shhhhh");
    console.log(decoded);
    // find the user related to the id , decoded above
    const user = await db.User.findById(decoded._id);
    console.log(user);

    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({ error: "authentication failed" });
  }
};
module.exports = auth;
