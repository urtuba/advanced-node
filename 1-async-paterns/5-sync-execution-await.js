var fs = require("fs");
var { promisify } = require("util");

var beep = () => process.stdout.write("\x07");
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var delay = (seconds) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(seconds), seconds * 1000);
  });

const doStuffSequentially = async () => {
  console.log("starting");
  await delay(1);
  console.log("waiting");
  await delay(1);
  console.log("waiting more");
  await writeFile("file.txt", "Sample File...");
  beep();
  console.log("file.txt created");
  await delay(1);
  beep();
  await unlink("file.txt");
  console.log("file.txt deleted");
  console.log("done");
};

doStuffSequentially();
