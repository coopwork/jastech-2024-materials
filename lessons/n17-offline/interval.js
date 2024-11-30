import { setHello } from "./app.js";

export function getInterval(text, seconds = 10) {
  let sec = seconds;

  const interval = setInterval(() => {
    setHello(`${text}: ${sec}`);
    // setHello(text + ': ' + sec)
    sec--

    if (sec <= 0) {
      clearInterval(interval);
    }
  }, 1000);
}