var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Users = mongoose.model("Users");
var rcode = require("../../utils/code.utils");

/* GET users listing. */
router.get("/me", function(req, res, next) {
  // console.log(decodedJWT(""));
  Users.findById(req.decoded.id, function(err, el) {
    if (err) return res.status(500).json(rcode.code("500", "", err));

    let buildMsg = rcode.code("200", el, "");
    return res.json(buildMsg);
  });
});

/* GET users listing. */
router.put("/me", function(req, res, next) {
  Users.findByIdAndUpdate(req.decoded.id, req.body, function(err, el) {
    if (err) return res.status(500).json(rcode.code("500", "", err));

    let buildMsg = rcode.code("200", el, "");
    return res.json(buildMsg);
  });
});

module.exports = router;
