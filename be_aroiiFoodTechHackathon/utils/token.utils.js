var jwt = require("jsonwebtoken");

var createToken = function(auth) {
  return jwt.sign(
    {
      id: auth.id
    },
    "unknown-project",
    {
      expiresIn: 60 * 60 * 1
    }
  );
};

module.exports = {
  generateToken: function(req, res, next) {
    req.token = createToken(req.resMsg.datas);
    return next();
  },
  sendMsg: function(req, res) {
    res.setHeader("x-access-token", req.token);
    return res.status(200).json(req.resMsg);
  },
  decodedJWT: function(token) {
    return jwt.decode(token);
  }
};
