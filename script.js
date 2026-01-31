const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");

openMenu.onclick = () => {
  menu.style.display = "flex";
};

closeMenu.onclick = () => {
  menu.style.display = "none";
};
