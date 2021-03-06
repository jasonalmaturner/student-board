var Express = require('express'),
	app = Express(),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	linkedInStrategy = require('passport-linkedin').Strategy,
	session = require('express-session'),
	mongoose = require('mongoose'),
	env = require('./server-assets/env/vars'),
	mongoUri = 'mongodb://localhost:27017/student-board',
	connection = mongoose.connection,
	port = env.expressPort;

var studentController = require('./server-assets/controllers/student-controller');

// Am I gonna want to findOrCreate by email address?
passport.use(new linkedInStrategy({
	consumerKey: env.linkedIn.APIKey,
	consumerSecret: env.linkedIn.secretKey,
	callbackURL: "http://127.0.0.1:9001/auth/linkedin/callback"
},
	function(token, tokenSecret, profile, done) {
		User.findOrCreate({ linkedinId: profile.id}, function (err, user) {
			return done(err, user);
		});
	}
));

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


app.get('/api/students', studentController.getAll);


app.all('*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
})

mongoose.connect(mongoUri);

connection.once('open', function(){
	console.log('Connected to the Database at: ' + mongoUri)
})

app.listen(port, function(){
	console.log('Now listening on port ' + port);
})