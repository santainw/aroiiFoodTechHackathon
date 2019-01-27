var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var rcode = require("./code.utils");

var authen = function(req, res, next) {
  var buildMsgRes;
  var token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  // console.log(req.headers);
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, "unknown-project", function(err, decoded) {
      if (err) {
        buildMsgRes = rcode.code("401", "", "Failed to authenticate token.");
        // buildMsgRes = {
        //   status: "Unauthorized",
        //   code: 401,
        //   devMessage: "Failed to authenticate token."
        // };
        return res.json(buildMsgRes);
        // return res.redirect('/');
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
    buildMsgRes = rcode.code("401", "", "Failed to authenticate token..");
    return res.json(buildMsgRes);
  }
};

module.exports = authen;
