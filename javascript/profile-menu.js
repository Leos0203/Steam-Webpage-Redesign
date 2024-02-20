let profileButton = document.getElementById("navbar-profile");
let profileMenu = document.getElementById("profile-menu");

if (
  profileButton.addEventListener("click", () => {
    if (
      profileMenu.style.visibility == "hidden" ||
      profileMenu.style.visibility == ""
    ) {
      profileMenu.style.visibility = "visible";
    } else {
      profileMenu.style.visibility = "hidden";
    }
  })
);
