let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let display = document.getElementById('display');

let sec = 0;
let mins = 0;
let hrs = 0;
let stopWatchInterval;

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    stopBtn.style.display = "block";
    stopWatchInterval = setInterval(() => {
        sec++;
        if (sec > 60) {
            mins++;
            sec = 0;
        }
        display.innerText = `${hrs < 10 ? "0" + hrs : hrs}:${mins < 10 ? "0" + mins : mins}:${sec < 10 ? "0" + sec : sec}`;
    }, 10);
});

stopBtn.addEventListener("click", () => {
    startBtn.style.display = "block";
    stopBtn.style.display = "none";
    clearInterval(stopWatchInterval);
    display.innerText = `${hrs < 10 ? "0" + hrs : hrs}:${mins < 10 ? "0" + mins : mins}:${sec < 10 ? "0" + sec : sec}`;
});