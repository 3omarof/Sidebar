

const sideBar = document.querySelector("aside");
const toggleButton = document.querySelector(".toggle-btn");

function toggleSidebar() {
  sideBar.classList.toggle("close");
  toggleButton.classList.toggle("closed");
}
