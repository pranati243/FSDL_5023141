function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  function processUserInput(callback) {
    const name = "Pranati";
    setTimeout(() => {
      callback(name); // Called after 2 seconds
    }, 2000);
  }
  
  processUserInput(greet);
  