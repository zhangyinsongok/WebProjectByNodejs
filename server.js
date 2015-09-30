var http = require('http');

http.createServer(function(request,response){
	console.log('%s','New Request');
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('Hello Anna!');
	response.end();
}).listen(8000)
