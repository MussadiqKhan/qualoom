var el = document.getElementById("menu")
console.log("hi1")

if (el) {
  document.getElementById("menu").addEventListener("click", addClass)
  console.log("hi")
}

function addClass() {
  console.log("hi2")

  document.getElementById("UL").classList.toggle("active")
}
