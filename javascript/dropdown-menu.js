let button = document.getElementById("navbar-dropdown-button");
let menu = document.getElementById("dropdown-menu");

if (
  button.addEventListener("click", () => {
    if (menu.style.display == "none" || menu.style.display == "") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  })
);
