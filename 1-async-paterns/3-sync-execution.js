var fs = require("fs");
var beep = () => process.stdout.write("\x07");

const doStuffSequentially = () => {
  console.log("starting");
  setTimeout(() => {
    console.log("waiting");
    setTimeout(() => {
      console.log("waiting more");
      fs.writeFile("file.txt", "Sample File...", (error) => {
        if (error) {
          console.log(error);
        } else {
          beep();
          console.log("file.txt created");
          setTimeout(() => {
            beep();
            fs.unlink("file.txt", (error) => {
              if (error) {
                console.log(error);
              } else {
                console.log("file.txt deleted");
                console.log("done");
              }
            });
          }, 1000);
        }
      });
    }, 1000);
  }, 1000);
};

doStuffSequentially();
