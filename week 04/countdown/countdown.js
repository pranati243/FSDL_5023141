let countdownDate;
let interval;

function startCountdown() {
  // Get the selected event date and time
  let eventDateTime = document.getElementById("eventDateTime").value;

  if (!eventDateTime) {
    alert("Please select a valid event date and time.");
    return;
  }

  // Convert the selected datetime to a timestamp (milliseconds)
  countdownDate = new Date(eventDateTime).getTime();

  clearInterval(interval); // Clear any existing intervals before starting a new one

  interval = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    if (distance <= 0) {
      clearInterval(interval);
      document.getElementById("timer").innerHTML = "EXPIRED";
    } else {
      let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
      let months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML = `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
}

function resetCountdown() {
  clearInterval(interval);
  document.getElementById("eventDateTime").value = '';
  document.getElementById("timer").innerHTML = "00y 00m 00d 00h 00m 00s";
}
