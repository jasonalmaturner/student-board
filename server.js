var Express = require('express'),
	app = Express(),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	linkedInStrategy = require('passport-linkedin'),
	session = require('express-session'),
	env = require('./server-assets/env/vars'),
	port = env.expressPort;


passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

app.use(Express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({ secret: env.expressSecret }));
app.use(passport.initialize());
app.use(passport.session());


app.all('*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
})

app.listen(port, function(){
	console.log('Now listening on port ' + port);
})

