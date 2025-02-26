// 1. Get DOM elements
const modeDisplay = document.getElementById('mode');
const timeDisplay = document.getElementById('display');

// 2. Initialize timer state
let workTime = 25 * 60; // 25 minutes in seconds
let breakTime = 5 * 60; // 5 minutes in seconds
let timeLeft = workTime;
let isWork = true;
let isRunning = false;
let intervalId = null;

// 3. Function to format time
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// 4. Function to update display
function updateDisplay() {
  timeDisplay.textContent = formatTime(timeLeft);
  modeDisplay.textContent = isWork ? 'Work' : 'Break';
}

// 5. Function to start the timer
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(() => {
      timeLeft--;
      
      if (timeLeft < 0) {
        isWork = !isWork;
        timeLeft = isWork ? workTime : breakTime;
        alert(isWork ? 'Work time!' : 'Break time!');
      }
      
      updateDisplay();
    }, 1000);
  }
}

// 6. Function to pause the timer
function pauseTimer() {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
}

// 7. Function to reset the timer
function resetTimer() {
  clearInterval(intervalId);
  isRunning = false;
  isWork = true;
  timeLeft = workTime;
  updateDisplay();
}

// 8. Initial display
updateDisplay();