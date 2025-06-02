const images = [
  "img/Index5/B-IN-Frau_sein-Ton.jpg",
  "img/Index5/B-IN-Frau_sein-Karton.jpg",
  "img/Index5/B-IN-Puppenspiel.jpg",
  "img/Index5/B-IN-Mein_Lebens-Baum-Traum.jpg",
  "img/Index5/B-IN-bewegt.jpg",
  "img/Index5/B-IN-die_Kraft_in_mir0.jpg",
  "img/Index5/B-IN-orange_Lebensglueck.jpg",
  "img/Index5/B-IN-uebermuetig_durch_die_Luefte0.jpg"
]

let currentIndex = 0;
const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");
let currentimage = document.getElementById("sliderImage");


nextButton.addEventListener("click", () => {
  if (currentIndex >= images.length - 1){
    currentIndex = images.length - 1;
    showImage(currentIndex);
  }else{
    currentIndex++;
    showImage(currentIndex);
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex <= 0){
    currentIndex = 0;
    showImage(currentIndex);
  }else{
    currentIndex--;
    showImage(currentIndex);
  }
})

function showImage(Index){
  currentimage.src = images.at(Index);
}
