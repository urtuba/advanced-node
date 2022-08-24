const { PassThrough, Duplex } = require("stream");

const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("video.mp4");
const writeStream = createWriteStream("video-copy.mp4");

class Throttle extends Duplex {
  constructor(ms) {
    super();
    this.delay = ms;
  }

  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }

  _read() {}

  _final() {
    this.push(null);
  }
}

const report = new PassThrough(); // used as pipeline from read stream to write stream
const throttle = new Throttle(90);

var total = 0;
report.on("data", (chunk) => {
  total += chunk.length;
  console.log("BYTES: ", total);
});

readStream
  .pipe(report)
  .pipe(throttle)
  .pipe(writeStream)
  .on("error", (err) => console.error);
