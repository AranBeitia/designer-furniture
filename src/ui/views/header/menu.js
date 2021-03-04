const button = document.getElementById('burguer')
const menu = document.getElementById('menu')

button.addEventListener('click', () => {
  menu.classList.toggle('active')
  button.classList.toggle('active')
} )
