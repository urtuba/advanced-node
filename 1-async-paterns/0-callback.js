// ASYNC CALLBACK
function hideString(str, done) {
  process.nextTick(() => {
    done(str.replace(/[a-zA-Z]/g, "*"));
  });
}

// hideString("Hello World", (hidden) => {
//   console.log(hidden);
// });

// ERROR HANDLING
var delayWithError = (seconds, callback) => {
  if (seconds > 3) {
    throw new Error("The delay is too long");
  } else {
    setTimeout(
      () => callback(null, "the long delay has ended"),
      seconds * 1000
    );
  }
};

// delayWithError(2, (error, message) => {
//   if (error) {
//     console.log(error.message);
//   } else {
//     console.log(message);
//   }
// });
