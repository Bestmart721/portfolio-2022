const passport = require('passport');

module.exports = (app) => {
  app.get( // Hook into Passport JS middleware on /auth/google (log in attempt)
    '/auth/google',
    passport.authenticate('google', { // Redirects us to google OAuth
      scope: ['profile', 'email']
    })
  );

  app.get( // Hook into Passport JS middleware on /auth/google/callback
    '/auth/google/callback', //                         (after log in)
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/'); // Send us back to landing page
    }
  );

  app.get(
    '/api/logout',
    (req, res) => {
      req.logout();
      res.redirect('/'); // Send us back to landing pages
    }
  );

  app.get(
    '/api/currentuser',
    (req, res) => {
      res.send(req.user);
    }
  );
};
