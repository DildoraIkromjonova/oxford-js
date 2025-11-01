export function displayStopwatch(stopwatch, hour, minute, second, millisecond) {
  let h = hour < 10 ? `0${hour}` : hour;
  let m = minute < 10 ? `0${minute}` : minute;
  let s = second < 10 ? `0${second}` : second;

  stopwatch.innerHTML = `${h}:${m}:${s}.<span>${millisecond}</span>`;
}


 