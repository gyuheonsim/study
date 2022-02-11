const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
fs = require("fs");

const sendErrorRes = res =>{
    res.writeHead(httpStatus.NOT_FOUND, {
        "Content-Type": "text/html"
    });
    res.write("<h1>File Not Found!</h1>");
    res.end();
};

http.createServer((req, res)=>{
    let url = req.url;
    if (url.indexOf(".html")!==-1){
        res.writeHead(httpStatus.OK,{
            "Content-Type": "text/html"
        });
        customReadFile(`./views${url}`, res);
    } else if (url.indexOf(".js")!==-1){
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/javascript"
        });
        customReadFile(`./views${url}`, res);
    } else if (url.indexOf(".css")!==-1){
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/css"
        });
        customReadFile(`./views${url}`, res);
    } else if (url.indexOf(".png")!==-1){
        res.writeHead(httpStatus.OK, {
            "Content-Type": "image/png"
        });
        customReadFile(`./views${url}`, res);
    } else{
        sendErrorRes(res);
    }
}).listen(port);
console.log(`the server has started and is listening on port number: ${port}`);


const customReadFile = (file_path, res) =>{
    if (fs.existsSync(file_path)){
        fs.readFile(file_path, (error, data) => {
            if (error) {
                console.log(error);
                sendErrorRes(res);
                return;
            }
            res.write(data);
            res.end()
        });
    } else{
        sendErrorRes(res);
    }
};