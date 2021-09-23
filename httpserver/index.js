const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end('hello');
    } else if (req.url == "/getTimeStories") {
        fs.readFile(`${__dirname}/TimeApi/sample.json`, "utf-8", (err, data) => {

            console.log(data);
            res.end(data);
        })
    }
    else {

        res.end("<h1>404 error pages.page doesnt exist</h1>")
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
})