const images = [
  "img/Index7/B-BLIND-blind_sehend.jpg",
  "img/Index7/B-BLIND-Menschenmenge.jpg",
  "img/Index7/B-BLIND-von_blind_zu_sehend0.jpg",
  "img/Index7/B-BLIND-watching_you_blind0.jpg",
]

let currentIndex = 0;
const nextBtn = document.getElementById("nextBtn");
let img = document.getElementById("img");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
  if(currentIndex >= images.length - 1) {
    currentIndex = images.length - 1;
    showImage(currentIndex);
  }else{
    currentIndex++;
    ShowImage(currentIndex);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex <= 0) {
    currentIndex = 0;
    ShowImage(currentIndex);
  }else{
    currentIndex--;
    ShowImage(currentIndex);
  }
});

function ShowImage(Index){
  img.src = images.at(Index)
}
