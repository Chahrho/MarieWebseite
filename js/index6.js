const images = [
  "img/Index6/B-MIT-unique0.jpg",
  "img/Index6/B-MIT-Fantasien0.jpg",
  "img/Index6/B-MIT-Klein-st-kunstwerk.jpg",
  "img/Index6/B-MIT-crowded.jpg",
  "img/Index6/B-MIT-Leichtigkeit.jpg",
  "img/Index6/B-MIT-Beschwingtheit0.jpg",
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
