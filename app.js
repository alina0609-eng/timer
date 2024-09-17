const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
// A variable to store the ID of the interval created by setInterval
let intervalId;
//variable to store passed seconds
let time = 0;

function formatTime(seconds) {
  //calculates time
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
//formates time 
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  //start timer from set interval
  intervalId = setInterval(() => {
    time++;
    //interval that calls a function every 1 sec
    timerDisplay.textContent = formatTime(time);
  }, 1000);

  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
}

function stopTimer() {
  //clear interval stops the timer
  clearInterval(intervalId);

  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

function resetTimer() {
  //stops the timer
  clearInterval(intervalId);
  //resets time variable to 0
  time = 0;
  //updates the timer display to show 00000
  timerDisplay.textContent = formatTime(time);

  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);