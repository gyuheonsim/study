const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
fs = require("fs");

const getViewUrl = (url) =>{
    return `views${url}.html`;
};

const routeMap = {
    "/": "views/index.html"
};

http.createServer((req, res) => {
    console.log("REceived an incoming request");

    let viewUrl = getViewUrl(req.url);
    fs.readFile(viewUrl, (error, data) =>{
        if (error){
            res.writeHead(httpStatus.NOT_FOUND);
            res.write("<h1>FILE NOT FOUND</h1>");
        }else{
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/html"
            });
            res.write(data);
        }
        res.end();
    });
    // res.writeHead(httpStatus.OK, {
    //     "Content-Type": "text/html"
    // });
    // if (routeMap[req.url]){
    //     fs.readFile(routeMap[req.url], (error, data)=>{
    //         res.write(data);
    //         res.end();
    //     })
    // }else{
    //     res.end("<h1>sorry not found.</h1>");
    // }
    // let responseMessage = "<h1>Hello, Universe</h1>";
    // response.write(responseMessage);
    // response.end();
    // console.log(`Sent a Response: ${responseMessage}`);
}).listen(port);
console.log(`the server has started and is listening on port number: ${port}`);
