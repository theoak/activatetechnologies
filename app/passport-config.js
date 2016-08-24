const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport){
  passport.use(new LocalStrategy(
    function(username, password, done) {
      if (username === "alex@activatetechnologies.co.uk" && password === "activate098"){
        console.log("correct");
        return done(null, [])
      }
      else {
        console.log("incorrect");
        return done(null, false)
      }
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, "serialized");
  });

  // used to deserialize the user
  passport.deserializeUser(function(str, done) {
      done(null, "deserialized");
  });
}