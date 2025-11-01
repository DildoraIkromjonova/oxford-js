import { displayStopwatch } from './selector.js'

export function initStopwatch() {
  const stopwatch = document.querySelector(".stopwatch");
  const startBtn = document.querySelector('[data-timer="start"]');
  const stopBtn = document.querySelector('[data-timer="stop"]');
  const resetBtn = document.querySelector('[data-timer="reset"]');

  let hour = 0;
  let minute = 0;
  let second = 0;
  let millisecond = 0;

  let interval;
  let isStarted = false;

  if (!isStarted) {
    stopBtn.disabled = true;
  }

  startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    isStarted = true;
    stopBtn.disabled = false;

    interval = setInterval(() => {
      millisecond++;

      if (millisecond === 10) {
        millisecond = 0;
        second++;
      }

      if (second === 60) {
        second = 0;
        minute++;
      }

      if (minute === 60) {
        minute = 0;
        hour++;
      }

      displayStopwatch(stopwatch, hour, minute, second, millisecond);
    }, 100);
  });

  stopBtn.addEventListener("click", () => {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(interval);
    isStarted = false;
  });

  resetBtn.addEventListener("click", () => {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;

    clearInterval(interval);
    displayStopwatch(stopwatch, hour, minute, second, millisecond);
    startBtn.disabled = false;
    stopBtn.disabled = true;
  });


  displayStopwatch(stopwatch, hour, minute, second, millisecond);
}