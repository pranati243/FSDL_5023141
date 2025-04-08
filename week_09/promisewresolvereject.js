function randomPromise() {
    return new Promise((resolve, reject) => {
      const num = Math.random();
      if (num > 0.5) {
        resolve("Success! Number is greater than 0.5");
      } else {
        reject("Failure! Number is less than or equal to 0.5");
      }
    });
  }
  
  randomPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error));
  