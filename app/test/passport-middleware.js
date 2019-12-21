const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const { User } = require('../db/postgres')

passport.use('local', new LocalStrategy({
  usernameField: 'firstName',
  passwordField: 'lastName'
}, (username, password, done) => {
  User.findOne({ where: {firstName: username} })
    .then((user) => {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      return done(null, user);
    })
    .catch(done)
}))


// module.exports = passport.authenticate(['api-key', 'local'], {session: false})
module.exports = passport.authenticate(['local'], {session: false})
