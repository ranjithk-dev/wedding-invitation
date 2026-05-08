const weddingDate = new Date("May 17, 2026 10:00:00").getTime();

const x = setInterval(function () {

  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `⏳ ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds Left`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "🎉 Wedding Started 🎉";
  }

}, 1000);

function playMusic() {
  document.getElementById("bgMusic").play();
}
