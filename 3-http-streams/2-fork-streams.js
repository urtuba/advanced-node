const { createServer } = require("http");
const { stat, createReadStream, createWriteStream } = require("fs");
const { promisify } = require("util");

const FILE_NAME = "../2-streams/video.mp4";
const PORT = 3000;

const fileInfo = promisify(stat);

const serveVideo = async (req, res) => {
  const { size } = await fileInfo(FILE_NAME);
  const range = req.headers.range;

  if (range) {
    let [start, end] = range.replace(/bytes=/, "").split("-");
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : size - 1;

    res.writeHead(200, {
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-Type": "video/mp4",
    });
    createReadStream(FILE_NAME, { start, end }).pipe(res);
  } else {
    res.writeHead(200, { "Content-Length": size, "Content-Type": "video/mp4" });
    createReadStream(FILE_NAME).pipe(res);
  }
};

createServer((req, res) => {
  if (req.method === "POST") {
    console.log(req.headers);
    req.pipe(res);
    // req.pipe(process.stdout);
    req.pipe(createWriteStream("./upload.file"));
  } else if (req.url === "/video") {
    serveVideo(req, res);
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      '<form enctype="multipart/form-data" method="POST" action="/"><input type="file" name="upload-file" /><button>POST</button></form>'
    );
  }
}).listen(PORT, () => console.log(`Server is listening on ${PORT}`));
