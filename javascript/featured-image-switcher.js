let featured_image = document.getElementById("featured-image");
let infobar_images = document.getElementsByClassName("featured-infobar-image");
infobar_images = Array.from(infobar_images);
let heading = document.getElementById("featured-infobar-heading");
let price = document.getElementById("featured-infobar-price");

const left_button = document.getElementById("featured-left-button");
const right_button = document.getElementById("featured-right-button");
const default_path = "images/Featured Images/";

left_button.addEventListener("click", () => {
  let split_name = featured_image.src.split("/");
  split_name = split_name[split_name.length - 1];
  let path = "";

  if (split_name == "outlast2.jpg") {
    path = "COD/cod.jpg";
    heading.innerText = "Call of Duty Modern Warfare 2";
    price.innerHTML = "&dollar;59.99";
    featured_image.src = default_path + path;

    infobar_images.forEach(async (image) => {
      image.src = default_path + "COD/Infobar Images/cod_2.jpg";
    });
  } else if (split_name == "cod.jpg") {
    path = "TF2/tf2.jpg";
    heading.innerText = "Team Fortress 2";
    price.innerHTML = "Free";
    featured_image.src = default_path + path;

    infobar_images.forEach(async (image) => {
      image.src = default_path + "TF2/Infobar Images/tf2_2.jpg";
    });
  } else if (split_name == "tf2.jpg") {
    path = "Outlast/outlast2.jpg";
    heading.innerText = "Outlast 2";
    price.innerHTML = "&dollar;9.99";
    featured_image.src = default_path + path;

    infobar_images.forEach(async (image) => {
      image.src = default_path + "Outlast/Infobar Images/outlast_2-2.jpg";
    });
  }
});

right_button.addEventListener("click", () => {
  let split_name = featured_image.src.split("/");
  split_name = split_name[split_name.length - 1];
  let path = "";

  if (split_name == "outlast2.jpg") {
    path = "TF2/tf2.jpg";
    heading.innerText = "Team Fortress 2";
    price.innerHTML = "Free";
    featured_image.src = default_path + path;

    infobar_images.forEach(async (image) => {
      image.src = default_path + "TF2/Infobar Images/tf2_2.jpg";
    });
  } else if (split_name == "cod.jpg") {
    path = "Outlast/outlast2.jpg";
    heading.innerText = "Outlast 2";
    price.innerHTML = "&dollar;9.99";
    featured_image.src = default_path + path;

    infobar_images.forEach(async (image) => {
      image.src = default_path + "Outlast/Infobar Images/outlast_2-2.jpg";
    });
  } else if (split_name == "tf2.jpg") {
    path = "COD/cod.jpg";
    heading.innerText = "Call of Duty Modern Warfare 2";
    price.innerHTML = "&dollar;59.99";
    featured_image.src = default_path + path;

    infobar_images.forEach(async (image) => {
      image.src = default_path + "COD/Infobar Images/cod_2.jpg";
    });
  }
});
