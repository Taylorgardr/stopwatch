window.onload = function() {
  let minutes = 00;
  let seconds = 00;
  let tens = 00;
  
  let appendMinutes = document.getElementById("minutes");
  let appendSeconds = document.getElementById("seconds");
  let appendTens = document.getElementById("milliseconds");
  
  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");

  let Interval;
  
  //---functions to start, stop, reset ---//
  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function() {
    clearInterval(Interval);
  };

  buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
    }
    
    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }
  }
};
