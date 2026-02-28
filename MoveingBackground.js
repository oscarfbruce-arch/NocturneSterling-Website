let step = 0;
let backHightPx = 20460

setInterval(() => {
step = (step + 1) % (101)
  document.documentElement.style.setProperty('step', step + '%');
  console.log("step:" + step);
}, 100)