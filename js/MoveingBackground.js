sessionStorage.setItem("step",0);
let step = Number(sessionStorage.getItem("step")) || 0;
let speed = 50;
let backHightPx = 20460;

const animate = () => {
  step = (step + speed) % (backHightPx);
  document.documentElement.style.setProperty('--step', step + 'px');
  requestAnimationFrame(animate);
}

window.addEventListener(BeforeUnloadEvent, () => {
sessionStorage.setItem("step",step)
})
requestAnimationFrame(animate);