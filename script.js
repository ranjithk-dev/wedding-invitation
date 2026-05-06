// Countdown Timer
const weddingDate = new Date("May 17, 2026 10:00:00").getTime();

const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Wedding Started!";
    }
}, 1000);

// Music Play
function playMusic() {
    document.getElementById("bg-music").play();
}
