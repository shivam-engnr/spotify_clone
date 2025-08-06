let audio = new Audio("assets/audio/sample.mp3");

const playBtn = document.querySelector(".player-control-icon.play");
const progressBar = document.querySelector(".progress-bar");
const currTime = document.querySelector(".curr-time");
const totalTime = document.querySelector(".tot-time");

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

audio.addEventListener("loadedmetadata", () => {
    totalTime.textContent = formatTime(audio.duration);
    progressBar.max = audio.duration;
});

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.src = "asset/pause_icon.png";
    } else {
        audio.pause();
        playBtn.src = "asset/player_icon3.png";
    }
});

audio.addEventListener("timeupdate", () => {
    progressBar.value = audio.currentTime;
    currTime.textContent = formatTime(audio.currentTime);
});

progressBar.addEventListener("input", () => {
    audio.currentTime = progressBar.value;
});
