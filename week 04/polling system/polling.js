let votes = {
    JavaScript: 0,
    Python: 0,
    Java: 0,
    Cpp: 0
  };
  
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
      votes[selectedChoice]++;
      updateVoteDisplay();
      document.getElementById("result").innerHTML = `You voted for: ${selectedChoice}`;
    } else {
      document.getElementById("result").innerHTML = "Please select a language to vote.";
    }
  });
  
  function updateVoteDisplay() {
    document.getElementById("jsVotes").innerText = `${votes.JavaScript} votes`;
    document.getElementById("pythonVotes").innerText = `${votes.Python} votes`;
    document.getElementById("javaVotes").innerText = `${votes.Java} votes`;
    document.getElementById("cppVotes").innerText = `${votes.Cpp} votes`;
  }
  