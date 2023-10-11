function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleTooltip() {
  const tooltip = document.getElementById("tooltip");
  tooltip.style.visibility = tooltip.style.visibility === "visible" ? "hidden" : "visible";
  tooltip.style.opacity = tooltip.style.opacity === "1" ? "0" : "1";
}


