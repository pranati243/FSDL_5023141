let countdownDate = new Date().getTime() + 3600 * 1000; // Set to 1 hour from now

function startCountdown() {
  let interval = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    if (distance <= 0) {
      clearInterval(interval);
      document.getElementById("timer").innerHTML = "EXPIRED";
    } else {
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    }
  }, 1000);
}