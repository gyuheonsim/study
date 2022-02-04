const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer((request, response) => {
    console.log("REceived an incoming request");
    response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    
    let responseMessage = "<h1>Hello, Universe</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`Sent a Response: ${responseMessage}`);
});

app.listen(port);
console.log(`the server has started and is listening on port number: ${port}`);
