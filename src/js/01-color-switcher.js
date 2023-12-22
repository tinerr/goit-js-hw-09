const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

startBtn.addEventListener('click', () => {
  buttonDisabled(startBtn, stopBtn);
  timerId = setInterval(() => {
    return (document.body.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    )
      .toString(16)
      .padStart(6, 0)}`);
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  buttonDisabled(stopBtn, startBtn);
  clearInterval(timerId);
});
buttonDisabled(stopBtn, startBtn);
function buttonDisabled(on, off) {
  on.disabled = true;
  off.disabled = false;
}
