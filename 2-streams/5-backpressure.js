const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("video.mp4");
const writeStream = createWriteStream("video-copy.mp4", {
  //   highWaterMark: 1024 * 1024, // Like a buffer size in bytes (1MB)
});

readStream.on("data", (chunk) => {
  const result = writeStream.write(chunk);
  if (!result) {
    console.log("backpressure");
    readStream.pause();
  }
});

readStream.on("error", (err) => {
  console.log("ERROR");
  console.error(err);
});

readStream.on("end", () => {
  writeStream.end();
});

writeStream.on("drain", () => {
  console.log("drain");
  readStream.resume();
});

// NOTE: stdout is a writable stream

writeStream.on("close", (err) => {
  process.stdout.write("File copied successfully!\n");
});
