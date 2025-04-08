const promise = new Promise((resolve, reject) => {
    const success = false;
    if (success) {
      resolve("Promise fulfilled!");
    } else {
      reject("Promise rejected!");
    }
  });
  
  promise
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error); // Rejection message
    });
  