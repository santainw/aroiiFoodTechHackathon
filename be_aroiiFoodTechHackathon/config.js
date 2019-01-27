module.exports = {
  facebookAuth: {
    clientID: "365458537324374",
    clientSecret: "56c2e11a33a2424336e6ea2a551c13d8",
    callbackURL: "http://localhost:4000/api/auth/facebook/callback",
    profileURL:
      "https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email"
  },

  googleAuth: {
    clientID:
      "579233697782-7skoqdt4av7fcm1hdpm96u15cu5nvfi3.apps.googleusercontent.com",
    clientSecret: "rqJIcReAjjKVdRE9825CI6pO",
    callbackURL: "http://localhost:4000/auth/google/callback"
  },
  db: {
    connectMongoDB: 'mongodb://localhost:27017/aroii'
  }
};
