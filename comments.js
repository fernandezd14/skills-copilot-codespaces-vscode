// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var qs = require('querystring');

var server = http.createServer(function(request, response){
  var urlParsed = url.parse(request.url, true);
  var pathname = urlParsed.pathname;
  var query = urlParsed.query;
  var filePath = '.' + pathname;

  if (request.method == 'GET' && pathname == '/comment'){
    fs.readFile(filePath, 'utf8', function(err, data){
      if (err){
        response.writeHead(404);
        response.end('File not found');
      }
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(data);
    });
  } else if (request.method == 'POST' && pathname =
