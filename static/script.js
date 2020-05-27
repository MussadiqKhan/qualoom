var el = document.getElementById("menu")

if (el) {
  document.getElementById("menu").addEventListener("click", addClass)
}

function addClass() {
  document.getElementById("UL").classList.toggle("active")
}
