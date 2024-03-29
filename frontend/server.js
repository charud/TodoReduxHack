var express = require('express');
var Fetcher = require('fetchr');
var bodyParser = require('body-parser');
var TaskService = require('./src/js/services/TaskService');
var app = express();

// Static files .js, .css, index.html
app.use(express.static(__dirname + '/dist'));

// Fetcher for making requests from the client
// body-parser middleware is required by Fetcher
app.use(bodyParser.json());
app.use('/api-proxy', Fetcher.middleware());
Fetcher.registerService(TaskService);

// Start server
var port = process.env.PORT || 5001;
app.listen(port, function() {
	console.log('Node Server listening at http://localhost:' + port);
});
