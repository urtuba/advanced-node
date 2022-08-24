const { createReadStream, createWriteStream } = require("fs");

/* PART I */
// This is built-in equivalent to the example in 5-backpressure.js

// const readStream = createReadStream("video.mp4");
// const writeStream = createWriteStream("video-copy.mp4");

// readStream.pipe(writeStream).on("error", console.error);

/* PART II */
// Any read stream can be piped to any write stream.

const writeStream = createWriteStream("./file.txt");
process.stdin.pipe(writeStream).on("error", console.error);
