var express = require("express");
var router = express.Router();
var passport = require("passport");
var config = require("../../config");
var rcode = require("../../utils/code.utils");
var { generateToken, sendMsg } = require("../../utils/token.utils");
require("../../utils/passport.utils")();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post(
  "/facebook",
  passport.authenticate("facebook-token", { session: false }),
  function(req, res, next) {
    if (!req.user) {
      return res.status(401).json(rcode.code("401", "", ""));
    }
    let buildMsg = rcode.code("200", req.user, "");
    req.resMsg = buildMsg;
    next();
    // return res.json(buildMsg);
    // req.auth = {
    //   id: req.user.id
    // };
  },
  generateToken,
  sendMsg
);

module.exports = router;
