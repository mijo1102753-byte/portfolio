const headerToggle = document.querySelector("#headerToggle");
const headerNav = document.querySelector(".header_nav");

headerToggle.addEventListener("click", () => {
  headerNav.classList.toggle("show");
});
