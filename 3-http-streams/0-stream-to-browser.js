const { createServer } = require("http");
const { stat, createReadStream } = require("fs");
const { promisify } = require("util");

const FILE_NAME = "../2-streams/video.mp4";
const PORT = 3000;

const fileInfo = promisify(stat);

createServer(async (req, res) => {
  const { size } = await fileInfo(FILE_NAME);
  res.writeHead(200, { "Content-Length": size, "Content-Type": "video/mp4" });
  createReadStream(FILE_NAME).pipe(res);
}).listen(PORT, () => console.log(`Server is listening on ${PORT}`));
