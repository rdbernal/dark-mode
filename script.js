const themeButton = document.querySelector(".container");

const themeStatus = document.querySelector(".button");

const mainTheme = document.querySelector(".main");

function themeTransition() {
  themeButton.classList.toggle("container-active");
  themeStatus.classList.toggle("dark");
  mainTheme.classList.toggle("main-active");
}

themeButton.addEventListener("click", themeTransition);
