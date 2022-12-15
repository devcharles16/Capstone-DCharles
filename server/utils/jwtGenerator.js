const jwt = require("jsonwebtoken");
require("dotenv").config(); //allow access to environment variables

function jwtGenerator(user_id) {
  //create payload and set user to user_id
  const payload = {
    user: user_id
  };
//take in payload and secret password and sign token
  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1hr" });
}

module.exports = jwtGenerator;