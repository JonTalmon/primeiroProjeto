function toggleMode() {
  const html = document.documentElement
  // if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  // } else {
  //  html.classList.add('light')
  // }
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light-eu.png")
  } else {
    img.setAttribute("src", "./assets/avatar-eu.png")
  }
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Minha foto de perfil, com uma estética mais escura para contrastar com o tema"
    )
  } else {
    img.setAttribute(
      "alt",
      "Minha foto de perfil, com uma estética mais clara para contrastar com o tema"
    )
  }
}
