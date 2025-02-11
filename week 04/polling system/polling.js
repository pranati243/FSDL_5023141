document.getElementById("pollForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const pollChoices = document.getElementsByName("language");
    let selectedChoice;
  
    for (let i = 0; i < pollChoices.length; i++) {
      if (pollChoices[i].checked) {
        selectedChoice = pollChoices[i].value;
        break;
      }
    }
  
    if (selectedChoice) {
      document.getElementById("result").innerHTML = `You voted for: ${selectedChoice}`;
    } else {
      document.getElementById("result").innerHTML = "Please select a language to vote.";
    }
  });
  