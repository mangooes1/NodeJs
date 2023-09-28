// backend processing in node for server requests.(without js)

const http = require("http");
const server = http.createServer((req,res) => {   // creating a server and using request and respond requests.
 res.statusCode = 200;     // 200 means successful connection  
 res.setHeader("content-type", "text/plain"); // describing the response
 res.end('hello'); // what the user is getting back
}); 
server.listen(3000,"127.0.0.1",( ) =>{ // url path of the host name : 127.0.0.1 //function which calls on the console whenthe server starts
           console.log("server running..")
}); // listen on http://localhost : 3000 or 127.0.0.1:3000/caleb.html