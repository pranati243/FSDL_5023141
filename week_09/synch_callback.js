function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  function processUserInput(callback) {
    const name = "Alice";
    callback(name); // Call immediately
  }
  
  processUserInput(greet);
  