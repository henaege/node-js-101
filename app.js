
let http = require('http');
// include the fs module. fs = file MediaKeySystemAccess. Part of core! yay!
let fs = require("fs");

let server = http.createServer((req, res)=> {
    console.log("Someone connected to the server!");
    console.log(req.url);
    if (req.url == '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        var theHomePageHTML = fs.readFileSync('./homePage.html');
    } else if (req.url == '/movie-app'){
        res.writeHead(200, {'content-type': 'text/html'});
        var theHomePageHTML = fs.readFileSync('../../unit2/movie-app/index.html');
    } else if (req.url == '/js/scripts.js'){
        res.writeHead(200, {'content-type': 'application/javascript'});
        var theHomePageHTML = fs.readFileSync('../../unit2/movie-app/js/scripts.js');
    } else if (req.url == '/js/config.js'){
        res.writeHead(200, {'content-type': 'application/javascript'});
        var theHomePageHTML = fs.readFileSync('../../unit2/movie-app/js/config.js');
    } else if (req.url == '/css/style.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        var theHomePageHTML = fs.readFileSync('../../unit2/movie-app/css/style.css');
    }

    res.end(theHomePageHTML);
});

// tell the server we created above to listen on port 8000.
// When someone makes an http request to port 8000 our callback will fire


server.listen(8000);
console.log("Server is listening to for HTTP traffic on Port 8000...");