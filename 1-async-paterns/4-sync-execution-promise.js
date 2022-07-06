var fs = require("fs");
var { promisify } = require("util");

var beep = () => process.stdout.write("\x07");
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var delay = (seconds) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(seconds), seconds * 1000);
  });

const doStuffSequentially = () =>
  Promise.resolve()
    .then(() => console.log("starting"))
    .then(() => delay(1))
    .then(() => "waiting")
    .then(console.log)
    .then(() => delay(1))
    .then(() => "waiting more")
    .then(console.log)
    .then(() => writeFile("file.txt", "Sample File..."))
    .then(beep)
    .then(() => "file.txt created")
    .then(console.log)
    .then(() => delay(1))
    .then(beep)
    .then(() => unlink("file.txt"))
    .then(() => "file.txt deleted")
    .then(console.log)
    .catch((error) => console.error(error));

doStuffSequentially().then(() => console.log("done"));
