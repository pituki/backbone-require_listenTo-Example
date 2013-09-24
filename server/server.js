// DEPENDENCIES
// ============
var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 8001),
    server = module.exports = express();

// SERVER CONFIGURATION
// ====================
server.configure(function() {

  server.use(express["static"](__dirname + "/../public"));

  server.use(express.errorHandler({

    dumpExceptions: true,

    showStack: true

  }));

  server.use(express.bodyParser())

  server.use(server.router);

});
var delayedCall = function(req, res){
	res.writeHead(200, { 'Content-Type': 'application/json'});
	setTimeout(function(){
		var json = require("./data/sample.json");
		console.log(json);
		res.end(JSON.stringify(json));

	}, 1000);
};
var delayedCall2 = function(req, res){
	res.writeHead(200, { 'Content-Type': 'application/json'});
	setTimeout(function(){
		var json = require("./data/sample2.json");
		console.log(json);
		res.end(JSON.stringify(json));

	}, 3000);
};
server.get( '/rest/data', delayedCall );
server.get( '/rest/data2', delayedCall2 );


// SERVER
// ======

// Start Node.js Server
http.createServer(server).listen(port);

console.log('Welcome to Backbone-Require-Boilerplate!\n\nPlease go to http://localhost:' + port + ' to start using Require.js and Backbone.js');