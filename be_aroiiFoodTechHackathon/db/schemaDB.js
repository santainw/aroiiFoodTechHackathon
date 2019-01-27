var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var config = require("../config");

var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: String,
  phoneNumber: String,
  nationality: String,
  gender: String,
  dateOfBirth: Date,
  facebookProvider: {
    id: String,
    select: false
  },
  googleProvider: {
    id: String,
    select: false
  }
});

mongoose.model("Users", UserSchema);

mongoose.connect(
  config.db.connectMongoDB,
  // config.get("userMongoDB"),
  { useNewUrlParser: true },
  function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Connect Database Success..");
    }
  }
);
