var timerInterval;
var stopwatchInterval;
var timerSeconds = 0;
var stopwatchSeconds = 0;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerSeconds = 0;
    updateTimer();
}

function updateTimer() {
    var hours = Math.floor(timerSeconds / 3600);
    var minutes = Math.floor((timerSeconds % 3600) / 60);
    var seconds = timerSeconds % 60;
    
    hours = padTime(hours);
    minutes = padTime(minutes);
    seconds = padTime(seconds);
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
    
    timerSeconds++;
}

function padTime(time) {
    return (time < 10 ? "0" : "") + time;
}

function startStopwatch() {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    updateStopwatch();
}

function updateStopwatch() {
    var hours = Math.floor(stopwatchSeconds / 3600);
    var minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    var seconds = stopwatchSeconds % 60;
    
    hours = padTime(hours);
    minutes = padTime(minutes);
    seconds = padTime(seconds);
    
    document.getElementById("stopwatch").innerHTML = hours + ":" + minutes + ":" +
    seconds;
    
    stopwatchSeconds++;
}