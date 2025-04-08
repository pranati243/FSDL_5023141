const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("Promise fulfilled!");
    } else {
      reject("Promise rejected!");
    }
  });
  
  promise.then(result => {
    console.log(result); // Success message
  });
  