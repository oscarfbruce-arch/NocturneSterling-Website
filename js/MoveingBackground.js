sessionStorage.setItem("step",8000);
let step = Number(sessionStorage.getItem("step")) || 0;
let speed = 5;
let delay = 100;
let backHightPx = 20460;

animate() {
  step = (step + speed) % (backHightPx);
  sessionStorage.setItem("step",step);
  document.documentElement.style.setProperty('--step', step + 'px');
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);