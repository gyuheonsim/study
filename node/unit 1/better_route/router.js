const httpStatus = require("http-status-codes"),
htmlContentType = {
    "Content-Type": "text/html"
},
routes = {
    "GET": {
        "/info": (req, res) => {
            res.writeHead(httpStatus.OK,{
                "Content-Type": "text/plain"
            });
            res.end("Welcome to the Info Page");
        }
    },
    'Post':{}
};

exports.handle = (req, res) =>{
    try
}