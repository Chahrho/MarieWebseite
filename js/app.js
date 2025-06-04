const images = new Map();

let image1 = document.getElementById("1");
let image2 = document.getElementById("2");
let image3 = document.getElementById("3");
let image4 = document.getElementById("4");
let image5 = document.getElementById("5")
let image6 = document.getElementById("6");
let image7 = document.getElementById("7");
let image8 = document.getElementById("8");

const imagesStyle = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8
];

images.set(image1,"Stierblut");
images.set(image2,"Heimat");
images.set(image3,"Die tanzenden Spermien");
images.set(image4,"Jungle");
images.set(image5,"Skyline");
images.set(image6,"Tropical_garden");
images.set(image7,"Summer 99 Lucky Strike Limited Edition");
images.set(image8,"Diversity");



let text = document.getElementById("text")

for (const [key, value] of images){
  key.addEventListener("mouseenter", () =>{


    text.innerHTML = value;

    for (let i = 0; i < imagesStyle.length;i++){
      imagesStyle.at(i).style.opacity = "0.5";
    }
    switch (key){
      case image1:
        image1.style.opacity = "1.0";
        break;
      case image2:
        image2.style.opacity = "1.0";
        break;
      case image3:
        image3.style.opacity = "1.0";
        break;
      case image4:
        image4.style.opacity = "1.0";
        break;
      case image5:
        image5.style.opacity = "1.0";
        break;
      case image6:
        image6.style.opacity = "1.0";
        break;
      case image7:
        image7.style.opacity = "1.0";
        break;
      case image8:
        image8.style.opacity = "1.0";
        break;

    }
  })

  key.addEventListener("mouseleave", () =>{
    text.innerHTML = "";
    for (let i = 0; i < imagesStyle.length;i++){
      imagesStyle.at(i).style.opacity = "1.0";
    }

  })
}




