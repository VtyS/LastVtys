
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    fs.readFile('deprem.html', function(err, data){
        
        res.write(data);

        res.end();
})
}


);

server.listen(8000);