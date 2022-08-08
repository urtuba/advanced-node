var fs = require("fs");
var { promisify } = require("util");

var writeFile = promisify(fs.writeFile);
var readdir = promisify(fs.readdir);
var unlink = promisify(fs.unlink);
var delay = (seconds) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(seconds), seconds * 1000);
  });

Promise.all([
  writeFile("readme.md", "Hello, World!"),
  delay(1),
  writeFile("readme.txt", "Hello, World!"),
  delay(3),
  writeFile("readme.json", '{"hello": "world"}'),
])
  .then(() => readdir(__dirname))
  .then((files) => {
    files
      .filter(
        (file) =>
          file.endsWith(".md") ||
          file.endsWith(".txt") ||
          file.endsWith(".json")
      )
      .forEach((file) => {
        unlink(file);
      });
  })
  .then(console.log);
