const images = [
  "img/Index8/B-INST-a_man_in_the_mirror.jpg",
  "img/Index8/B-INST-a_woman_in_the_mirror.jpg",
  "img/Index8/B-INST-the_animal_farm.jpg",
  "img/Index8/B-INST-Du_hast_die_Wahl0.jpg",
  "img/Index8/B-INST-gefuelltes_Blatt-NEU.jpg",
  "img/Index8/B-INST-Des_Glueck_in_der_Schale_2.jpg",
  "img/Index8/B-INST-herzhaft_wachsen.jpg",
  "img/Index8/B-INST-stop_and_go.jpg",
 "img/Index8/B-INST-STOP_and_go_1.jpg",
  "img/Index8/B-INST-stop_AND_go_2.jpg",
  "img/Index8/B-INST-stop_and_GO_3.jpg",
  "img/Index8/B-INST-the_wall_neu.jpg",
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
