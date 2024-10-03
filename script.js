var timer;
var running = false;
var time = 0;

function startStop() {
    if (!running) {
        timer = setInterval(updateDisplay, 1000);
        running = true;
    } else {
        clearInterval(timer);
        running = false;
    }
}

function reset() {
    clearInterval(timer);
    running = false;
    time = 0;
    document.getElementById('display').innerText = "00:00:00";
}

function updateDisplay() {
    time++;
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor((time % 3600) / 60);
    var seconds = time % 60;

    document.getElementById('display').innerText =
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}