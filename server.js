
// require is a buiolt-in nodejs method that includes a module.
// That module can be:
// 1. part of core, in which case we do nothing
// 2. from the npm store, written by someone else. require will look inside node module
// 3. a module WE wrote, which requires a path

let http = require("http");
// console.log(http);

let server = http.createServer(function(request, response) {
    // console.log(request);
    response.writeHead(418, {
        'content-type': 'text/html'
    });
    response.write("<h1>Hello Visitor, this is YOUR node server.</h1>");
    response.end();
})

// server is created above and came from the create server methos of the http object. It includes a request and a response in the ForEachCallback... but also has a listen method.
server.listen(8000);
console.log("NodeJs is listening for connections on port 8000");