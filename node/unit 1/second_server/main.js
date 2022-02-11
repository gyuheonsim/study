const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer();


const getJSONString = (obj) => {
    return JSON.stringify(obj, null, 2);
};

app.on("request", (req, res)=>{
    var body=[];
    req.on("data", (bodyData)=>{
        body.push(bodyData);
    });
    req.on("end",()=>{
        body = Buffer.concat(body).toString();
        console.log(`request body contents: ${body}`);
    });
    
    console.log(`method: ${getJSONString(req.url)}`);
    console.log(`URL: ${getJSONString(req.url)}`);
    console.log(`Headers: ${getJSONString(req.url)}`);

    res.writeHead(httpStatus.OK,{
        "content-Type": "text/html"
    });

    let responseMessage = "<h1>This will show</h1>";
    res.end(responseMessage);
});
app.listen(port);
console.log("server has started listening");