import { getInterval } from "./interval.js";
import { getHello } from "./app.js";
import { getTimeoutHello } from "./timeout.js";
import { data } from "./mock.js";
import { renderData } from "./render-data.js";

document.addEventListener('DOMContentLoaded', () => {

  getHello('Hello it\'s my app');

  getTimeoutHello('Hello with timeout');

  getInterval('Start', 15);


  data.forEach((item) => {
    renderData(item);
  });


  // let array = [1, 2, 3, 4, 5];

  // for (let i = 0; i < array.length; i++) {
  //   const element = array[i];
  //   console.log(element);
  // }

  // for (let i = 0; i < array.length; ++i) {
  //   const element = array[i];
  //   console.log(element);
  // }

});