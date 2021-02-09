const jwt = require("jsonwebtoken");
const db = require("../models/");

const auth = async (req, res, next) => {

  try {
    // verify token from coming in request header.
    const token = req.header("Authorization");
    const decoded = jwt.verify(token, "shhhhh");
     // find the user related to the id , decoded above
    const user = await db.User.findById(decoded._id);

    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({ error: "authentication failed" });
  }
};
module.exports = auth;
