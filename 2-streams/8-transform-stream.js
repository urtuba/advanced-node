const { Transform } = require("stream");

class SquareStream extends Transform {
  _transform(chunk, encoding, callback) {
    const number = Number(chunk);
    const square = number ** 2;
    this.push(square.toString() + "\n");
    callback();
  }

  _flush(callback) {
    this.push("ups");
    callback();
  }
}

var squareStream = new SquareStream();

process.stdin.pipe(squareStream).pipe(process.stdout);
