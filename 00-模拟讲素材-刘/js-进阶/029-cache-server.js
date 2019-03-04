/*
	可以响应并返回文件
	处理GET请求+POST请求
 */

var http = require('http');
var fs   = require('fs');
var url = require('url');

var server = http.createServer(function(req,res){
	var urlStr = req.url;
	console.log(req.method);
	console.log('req.url:::',urlStr);
	if(urlStr == '/favicon.ico'){
		res.end('favicon.ico');
	}
	if(req.method == 'POST'){
		// res.end('post data...');
		var body = '';
		req.on('data',function(chunk){
			body += chunk;
		});
		req.on('end',function(){
			console.log('get post data::',body);
			//根据数据做处理....
			res.end(body);
		})
	}else if(req.method == 'GET'){
		if(urlStr.search(/\?/) != -1){
			var parm = url.parse(urlStr,true).query;
			//根据数据做处理....
			var json = JSON.stringify(parm);
			res.end(json);
		}
		if(/\.css$/.test(urlStr)){
			res.setHeader('Content-Type','text/css');
			//设置缓存有效时间
			var time = new Date(Date.now()+10000);
			//将时间转换成为GMT格式（注意这里必须是GMT格式，GMT +0800 中国标准时间不能使用）
			var timeString = time.toGMTString();
			console.log(timeString);
			console.log(typeof timeString);
			res.setHeader('Expires',timeString);//Expires的值必须是GMT格式
			// res.setHeader('Cache-Control','max-age=15');

		}
		var filePath = './'+urlStr;
		fs.readFile(filePath,function(err,data){
			if(!err){
				res.end(data);
			}else{
				res.statusCode = 404;
				res.end('not found');
			}
		});
	}else{
		res.end('ok');
	}

});

server.listen(3000,'127.0.0.1',function(){
	console.log("Sever is running at http://127.0.0.1:3000");
})