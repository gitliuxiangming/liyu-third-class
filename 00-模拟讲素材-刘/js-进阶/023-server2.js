var http = require('http');
var fs=require('fs');

var server = http.createServer(function(req,res){
	res.setHeader('Content-Type','text/html;charset=UTF-8');
	if(req.url == '/favicon.ico'){
		res.end('/favicon.ico');
	}
	var filepath='./'+req.url;
	fs.readFile(filepath,function(err,date){
		if(err){			
			console.log('err:::'+err);
			res.statusCode=404;
			res.end('file is not found');
		}else{
			res.statusCode=200;
			res.end(date);	
		}
	})
});

server.listen(3000,'127.0.0.1',function(){
	console.log('server is running at http://127.0.0.1');
});