'use strict'

const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport){
  passport.use(new LocalStrategy(
    function(username, password, done) {
      if (username === "kickabout"
            && password === "activate098"){
        return done(null, {code: 'kickabout'})
      }
      if (username === "uwe"
            && password === "password"){
        return done(null, {code: 'uwe'})
      }
      if (username === "ucl"
            && password === "password"){
        return done(null, {code: 'ucl'})
      }
      if (username === "sheffield_hallam"
            && password === "password"){
        return done(null, {code: 'sheffieldHallam'})
      }
      if (username === "kings"
            && password === "password"){
        return done(null, {code: 'kings'})
      }
      if (username === "salford"
            && password === "password"){
        return done(null, {code: 'salford'})
      }
      if (username === "liverpool"
            && password === "password"){
        return done(null, {code: 'liverpool'})
      }
      if (username === "roehampton"
            && password === "password"){
        return done(null, {code: 'roehampton'})
      }
      if (username === "bedfordshire"
            && password === "password"){
        return done(null, {code: 'bedfordshire'})
      }
      if (username === "ssees"
            && password === "password"){
        return done(null, {code: 'ssees'})
      }
      if (username === "hertfordshire"
            && password === "password"){
        return done(null, {code: 'hertfordshire'})
      }
      if (username === "entrepreneurs"
            && password === "password"){
        return done(null, {code: 'entrepreneurs'})
      }
      if (username === "lacrosse"
            && password === "password"){
        return done(null, {code: 'lacrosse'})
      }
      if (username === "parkour"
            && password === "password"){
        return done(null, {code: 'parkour'})
      }
      if (username === "birmingham"
            && password === "password"){
        return done(null, {code: 'birmingham'})
      }
      if (username === "birmingham_basketball"
            && password === "password"){
        return done(null, {code: 'birmingham_basketball'})
      }
      if (username === "hull"
            && password === "password"){
        return done(null, {code: 'hull'})
      }
      if (username === "wegeek"
            && password === "password"){
        return done(null, {code: 'wegeek'})
      }
      if (username === "ani"
            && password === "password"){
        return done(null, {code: 'ani'})
      }
      else {
        return done(null, false)
      }
    }
  ));

  passport.serializeUser(function(code, done) {
    done(null, code);
  });

  passport.deserializeUser(function(code, done) {
    done(null, code);
  });
}
