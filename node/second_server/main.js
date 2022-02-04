const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer();

const getJSONString = (obj) => {
    return JSON.stringify(obj, null, 2);
};

app.on("request", (req, res)=>{
    res.writeHead(httpStatus.OK,{
        "content-Type": "text/html"
    });
    
    let responseMessage = "<h1>This will show</h1>";
    res.end(responseMessage);
    console.log(`method: ${getJSONString(req.url)}`)
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.headers);
});

app.listen(port);
console.log("server has started listening");