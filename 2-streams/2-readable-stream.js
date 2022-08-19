const { decode } = require("punycode");
var { Readable } = require("stream");

const options1 = {};
const options2 = { encoding: "UTF-8" };
const options3 = { objectMode: true };

class StreamFromArray extends Readable {
  constructor(array, opts) {
    super(opts);
    this.array = array;
    this.index = 0;
  }

  _read() {
    if (this.array.length > 0) {
      this.push(this.array.shift());
      this.index++;
    } else {
      this.push(null);
    }
  }
}

var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

var defaultStream = new StreamFromArray(months, options1);
var stringStream = new StreamFromArray(months, options2);
var objectStream = new StreamFromArray(
  months.map((month, index) => Object({ index, month })),
  options3
);

// defaultStream.on("data", (chunk) => console.log(chunk));
// defaultStream.on("end", () => console.log("End of stream"));

// stringStream.on("data", (chunk) => console.log(chunk));
// stringStream.on("end", () => console.log("End of stream"));

// objectStream.on("data", (chunk) => console.log(chunk));
// objectStream.on("end", () => console.log("End of stream"));
