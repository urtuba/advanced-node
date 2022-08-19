const fs = require("fs");

const readStream = fs.createReadStream("video.mp4");

readStream.on("data", (chunk) => {
  console.log(`CHUNK W/ SIZE: ${chunk.length}\n`, chunk);
});

readStream.on("end", () => {
  console.log("END OF STREAM");
});

readStream.on("error", (err) => {
  console.log("ERROR");
  console.error(err);
});

// NOTE: stdin is a readable stream

// process.stdin.on("data", (chunk) => {
//   var text = chunk.toString().trim();
//   console.log(`You typed: ${text}`);
// });

readStream.pause();

console.log(
  "Use any text to continue reading next chunk of data from the stream.\n",
  'Type "read all" to read all data from the stream.\n',
  'Type "exit" to exit the program.\n'
);

process.stdin.on("data", (chunk) => {
  if (chunk.toString().trim() === "read all") {
    readStream.resume();
  }
  if (chunk.toString().trim() === "exit") {
    process.exit();
  }
  readStream.read();
});
