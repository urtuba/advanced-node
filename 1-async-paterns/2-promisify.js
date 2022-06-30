var fs = require("fs");
var { promisify } = require("util");

var delay = (seconds, callback) => {
  if (seconds > 3) {
    throw new Error("The delay is too long");
  }
  setTimeout(() => callback(null, "the long delay has ended"), seconds * 1000);
};

// delay(2, (error, message) => {
//   if (error) {
//     console.log(error.message);
//   } else {
//     console.log(message);
//   }
// });

var promiseDelay = promisify(delay);

// promiseDelay(5)
//   .then(console.log)
//   .catch((error) => console.error(error));

var writeFile = promisify(fs.writeFile);

writeFile("sample.txt", "This is a sample")
  .then(() => console.log("File created"))
  .catch((error) => console.error(error));
