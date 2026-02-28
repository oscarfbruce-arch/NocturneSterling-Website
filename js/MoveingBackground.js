let step = 0;
let speed = 1;
let delay = 100;
let backHightPx = 20460

setInterval(() => {
step = (step + speed) % (101)
  document.documentElement.style.setProperty('step', step + '%');
  console.log("step:" + step);
}, delay)