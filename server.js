var Express = require('express'),
	app = Express(),
	bodyParser = require('body-parser');


var	port = 9090;

app.use(Express.static(__dirname + '/public'));


app.all('*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
})

app.listen(port, function(){
	console.log('Now listening on port ' + port);
})

