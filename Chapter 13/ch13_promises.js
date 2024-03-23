let myPromise = new Promise ((resolve, reject) => {
  let downloadDone = true;

  if (downloadDone) {
    resolve(successMessage = "Your download has been completed");
  } else {
    reject (errorMessage = "Your download has failed");
  };
});

myPromise
  .then(() => {
    console.log(successMessage);
  })
  .catch(() => {
    console.log(errorMessage);
  });

  console.log(myPromise)