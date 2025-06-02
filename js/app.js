const images = [
  "img/Index4/B-BEI-Die_tanzenden_Spermien.jpg",
  "img/Index4/B-BEI-diversity.jpg",
  "img/Index4/B-BEI-Heimat-NEU3.jpg",
  "img/Index4/B-BEI-jungle.jpg",
  "img/Index4/B-BEI-skyline.jpg",
  "img/Index4/B-BEI-Stierblut-NEU.jpg",
  "img/Index4/B-BEI-summer_99_-_Lucky_Strike_Limited_Edition.jpg",
  "img/Index4/B-BEI-tropical_garden_NEU.jpg",
  "img/Index4/cat.jpg"
];

let currentIndex = 0;
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
let currentImage = document.getElementById("sliderImage");


prevButton.addEventListener("click",() => {
  if (currentIndex > 0){
    currentIndex--;
    showImage(currentIndex);
  }else{

  }

});


nextButton.addEventListener("click",() => {
  if (currentIndex <= images.length - 1){
    currentIndex++;
    showImage(currentIndex);
  }else{
    currentIndex = images.length - 1;
    showImage(currentIndex);
  }
});


function showImage(Index){
  currentImage.src = images.at(Index);
}
