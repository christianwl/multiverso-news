const btnDark = document.getElementById("btn-dark");
const icon = btnDark.querySelector("i")

document.addEventListener('DOMContentLoaded', () => {
  icon.classList.toggle("fa-sun");
})

btnDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
});
