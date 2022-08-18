const { decode } = require("punycode");
var { Readable } = require("stream");

const options1 = {};
const options2 = { encoding: "UTF-8" };

class StreamFromArray extends Readable {
  constructor(array) {
    super(options3);
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

var monthStream = new StreamFromArray(months);

monthStream.on("data", (chunk) => console.log(chunk));
monthStream.on("end", () => console.log("End of stream"));
