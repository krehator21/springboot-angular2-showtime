var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var app = express();
var upload =multer({dest:'./uploads'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/api', function (req, res) {
    res.end('The amazing file catcher example');
});

app.post("/api", multer({dest: "./uploads/"}).array("uploads", 12), function(req, res) {
    console.log(file.originalname + ' is starting ...');
    res.send(req.files);
    console.log(file.fieldname + ' uploaded to  ' + file.path)
});

var server = app.listen(3001, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server listening at http://%s:%s', host, port);
});
