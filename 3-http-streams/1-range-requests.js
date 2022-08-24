// ./0-stream-to-browser.js serves video, but it cannot handle range requests
// range requests are necessary to search in video

const { createServer } = require("http");
const { stat, createReadStream } = require("fs");
const { promisify } = require("util");

const FILE_NAME = "../2-streams/video.mp4";
const PORT = 3000;

const fileInfo = promisify(stat);

createServer(async (req, res) => {
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
}).listen(PORT, () => console.log(`Server is listening on ${PORT}`));
