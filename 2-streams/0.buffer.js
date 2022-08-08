var fs = require("fs");
var http = require("http");
var file = "video.mp4";

http
  .createServer((req, res) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 Not Found");
      } else {
        res.writeHead(200, { "Content-Type": "video/mp4" });
        res.end(data);
      }
    });
  })
  .listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
  });
