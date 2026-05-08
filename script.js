const weddingDate = new Date("May 17, 2026 10:00:00").getTime();

const timer = setInterval(() => {

  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = `
      <h2>🎉 Wedding Started 🎉</h2>
    `;
  }

}, 1000);

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {

  if(bgMusic.paused) {
    bgMusic.play();
    musicBtn.innerText = "⏸ Pause Music";
  } else {
    bgMusic.pause();
    musicBtn.innerText = "🎵 Play Celebration Music";
  }

});
