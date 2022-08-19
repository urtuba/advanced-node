const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("video.mp4");
const writeStream = createWriteStream("video-copy.mp4");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

readStream.on("error", (err) => {
  console.log("ERROR");
  console.error(err);
});

readStream.on("end", () => {
  writeStream.end();
});

// NOTE: stdout is a writable stream

writeStream.on("close", (err) => {
  process.stdout.write("File copied successfully!\n");
});
