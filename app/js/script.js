const menu = document.querySelector(".header__navbar");
const body = document.querySelector("body");

document.addEventListener("click", (e) => {
  //open or close menu on btn click
  if (e.target.matches(".cta-btn")) {
    menu.classList.toggle("slide-in");
    blurBackground();
  }

  //close menu when clicked outside of menu
  if(e.target.matches(".overlay.activated")) {
    menu.classList.remove("slide-in")
    blurBackground()
  }

  const isDropdownBtn = e.target.matches("[data-dropdown-btn]");

  //if we are already in dropdown do nothing
  if (!isDropdownBtn && e.target.closest("[data-dropdown]") != null) return;

  //toggle dropdown
  let currentDropdown;
  if (isDropdownBtn) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    //if active dropdown is currently opened, do nothing
    if (dropdown === currentDropdown) return;
    //else if its not, close dropdown
    dropdown.classList.remove("active");
  });
});

//adds black background on body when sidemenu is active
function blurBackground() {
  if (menu.classList.contains("slide-in")) {
    document.querySelector(".overlay").classList.add("activated")
    body.style.overflow = "hidden";
  } else {
    document.querySelector(".overlay").classList.remove("activated")
    body.style.overflow = "initial";
  }
}
