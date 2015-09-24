// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var express = require ('express');
var app = express();

var jsonData = {count: 12, message: 'hey'};

app.get('/', function(req, res) {
	//res.sendfile takes and absolute path to the file you want to SEND
	res.sendFile(_dirname + '/index.html', function(err) { 	//optional checking for error function
			res.status(500).send(err); //setting a status code for example but can be what you want. 
		}
	})
});


app.get('/data' function(req, res) {
	res.json(jsonData);
});



