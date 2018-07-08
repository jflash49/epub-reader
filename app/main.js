var fs = require("fs");
var FileReader = require("filereader");
var extractjs = require("./js/extract.js");
var http = require('http');
var path = require("path");

var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT;
var serverUrl = process.env.IP;

var cities = [{name: 'Delhi', country: 'India'}, {name: 'New York', country: 'USA'}, {name: 'London', country:'England'}];

var app = express();
var index = fs.readFileSync('./index.html'); 

app.use(express.static('./'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(request, response){
    response.sendfile(path.join(__dirname + index), "text/html");
});

app.get('/load_directory', function (request, response){
    var con = request.body;
    var library = "src/books";
    var content ="<ul class='book_dir'>\n";
    
    fs.readdir(library, function(err, files) {
      if (err) throw err;
      files.forEach(function (data){
          content+= "<li><a class='books' href='#'>" + data + "</a></li>\n";
      });
    
     content+= "</ul>";
     response.send(content);
 });
 
 app.get('/load_tmp', function (request, response){
   var con = request;
   extractjs.ejsread(con.query['data']);
   var content = extractjs.container('tmp/')
   response.send(content);
 });
  
  console.log(content)
 });


app.listen(port, function(){
	console.log("Listening on port 3000...");
});

app.set('port', process.env.PORT || 3000);
app.set('ip', serverUrl);

