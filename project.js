const img = document.getElementById("toggleImage");
const section = document.getElementById("comment");

img.addEventListener("click", () => {
  section.classList.toggle("comment");
});

const heart = document.getElementById("heart");
let isLiked = false; // start unliked

heart.addEventListener("click", function() {
  if (isLiked) {
    heart.src = "./assets/empty_heart.png";
  } else {
    heart.src = "./assets/heart.png";
  }
  isLiked = !isLiked;
});
