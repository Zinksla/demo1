const http=rquire('http')
const fs=require('fs')
const urllib=url('url')
//主要用于解析post数据
const querystring=require('querystring')
//主要要用于解析URL数据
var server= http.createServer(function(req,res){

//url---req
var obj=urllib.parse(erq.url,true);

var url =obj.pathname;
const get = obj.query;

//post--req
	var str=''//接受数据
	//data---一段数据分多次到达
	req.on('data',function(data){})
	console.log('第${i++}次受到数据')
	str+=data;
	//end---数据全部到达
	req.on('end',function(){
		const post =querystring.parse(str)
	
		console.log(url,get,post)
	})




})
server.listen(8989)

