function togglemode() {
  const html = document.documentElement
  html.classList.toggle("ligth")
  // pegar a tag  img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("ligth")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
