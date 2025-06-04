

let image1 = document.getElementById("1");
let image2 = document.getElementById("2");
let image3 = document.getElementById("3");
let image4 = document.getElementById("4");
let image5 = document.getElementById("5")
let image6 = document.getElementById("6");
let image7 = document.getElementById("7");
let image8 = document.getElementById("8");

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8
];

let text = document.getElementById("text")

for (let i = 0; i < images.length; i++){
  let image = images.at(i);

  image.addEventListener("mouseenter", () => {
    text.innerText = image.src;
  })

}




