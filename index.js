const express = require('express');
const path = require('path');
var url = require('url');
var fs = require('fs');

const appPage = express();

appPage.get('/*',function(req,res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end(fs.readFileSync('page_not_found.html'));
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
});


appPage.listen(30000, () => {
    console.log('Server page started on port 30000');
});

