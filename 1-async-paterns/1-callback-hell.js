// CALLBACK HELL
var delay = (seconds, callback) => {
  setTimeout(callback, seconds * 1000);
};

// delay(1, () => {
//   console.log("1 second passed");
//   delay(2, () => {
//     console.log("2 seconds passed");
//     delay(3, () => {
//       console.log("3 seconds passed");
//     });
//   });
// });

// PROMISE
var delayWithPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("the long delay has ended");
    }, seconds * 1000);
  });

// delayWithPromise(1)
//   .then(console.log)
//   .then(() => 72)
//   .then((number) => console.log(`The number is ${number}`));

// PROMISE REJECTION
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
