
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    
    if (req.url=='/'){
        fs.readFile('deprem.html', function(err, data){
        
            res.write(data);
    
            res.end();
    });
    }
    if (req.url=='/tokat-60'){
        fs.readFile('hd.jpg', function(err, data){
        
            res.write(data);
    
            res.end();
    });
}

    console.log(req.url);

    
});

server.listen(8000);