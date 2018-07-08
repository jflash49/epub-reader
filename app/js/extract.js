var fs = require("fs");
var unzip = require("unzip");
var path = require("path");
var parseString = require('xml2js').parseString;
const util =  require('util');
//var libxmljs = require("libxmljs"); 


function addtolibrary(book){
    var lib = "src/books/";
    var output= path.join(lib,book);
    var source = fs.createReadStream(book);
    fs.exists(output,function(exists){
            if(exists)console.log("File Exists");
            var dest = fs.createWriteStream(output);
             source.pipe(dest,function(err){
                if(err)throw err;
                    console.log("File added to library");
        });
    });
    //fs.createWriteStream(lib,book).setDefaultEncoding(false);
}

exports.ejsread = function read(file){
    var odir = "tmp/"+file.substr(0,file.indexOf("."));
    if (!(fs.existsSync(odir))) {
        fs.createReadStream(file).pipe(unzip.Extract({ path: odir }));
    }
   
}
//output();
// addtolibrary("example.txt");
//read("feedbooks_book_81.epub");

exports.loaddir = function load_directory(){
    var library = "src/books";
    var content = "<table>";
    fs.readdir(library, function(err, items) {
         if (err) throw err;
    //console.log(items);
    for (var i=0; i<items.length; i++) {
      //  console.log("<tr><td>"+items[i]+"</td></tr>");
        content += '<tr><td>' + items[i]  +  i + '</td></tr>';
    }
    content += "</table>";
    console.log (content);
    return content;
    //document.getElementsByClassName('.pageLeftMenu').innerhtml(content);
    //$('.pageLeftMenu').append(content);
 });
}

function load_book(tmp){
    fs.readdir(tmp, function(err, items) {
         if (err) throw err;
    console.log(items);
    for (var i=0; i<items.length; i++) {
        console.log("<tr><td>"+items[i]+"</td></tr>");
       /* fs.stat(items[i], function(err,stats){
            if (err) throw err;
            if(stats && stats.isDirectory()){
                load_book(tmp+items[i]);
                 console.log(items[i]);
            } });*/
    }
    });
}
//module.exports = load_directory();

function getbook (folder){
    var book =""+ folder;
    var files = fs.readdirSync(folder);
    for(var i in files){
        book += files[i];
    }
            //console.log(book);
    return book;
}
exports.container = function getcontainer (folder){
    var META = "META-INF/container.xml";
    var dir = getbook(folder);
    var nw_path = path.join(dir,META);
    var fl = fs.readFileSync(nw_path, "utf-8");
    var filetype;
    var fpath;
    var medtype = "";
    parseString(fl, function (err, result) {
         if (err) throw err;
        filetype = result['container']['rootfiles'][0];
        fpath = filetype['rootfile'][0]['$']['full-path'];
        medtype = filetype['rootfile'][0]['$']['media-type']
    });
    var pages = getPages(dir,path.join(dir,fpath));
   // console.log(path.join(dir, fpath));
    return (pages);
  
}

function getPages(dir,OPS){
    var fl = fs.readFileSync(OPS,"utf-8");
   
    var bk = [];
    var book = [];
    var page = [];
    var manifest ;
    var top ;
    //console.log(fl);
    dir = path.join(dir,'OPS');
    //var css_img = GetData(dir);
     parseString(fl, function (err, result) {
         if (err) throw err;
         manifest = result['package']['manifest'];
         //console.log(JSON.stringify(manifest[0]['item'][1]));
         
         top = manifest[0]['item'][0];
         for(var i = 0; i< manifest[0]['item'].length; i++){
             //fpr (var x = 0; i<manifest)
             var item = manifest[0]['item'][i];
             bk.push(fs.readFileSync(path.join(dir,item['$']['href']),"utf-8"));
             
         }
         //console.log(JSON.stringify(top['$']['href']))
     });
       
      var out = fs.readFileSync(path.join(dir,top['$']['href']),"utf-8");
      book.push(new Array(out,bk,dir));
      return book;
     // console.log(bk);
     // console.log(out);
}


//getcontainer("tmp/");
