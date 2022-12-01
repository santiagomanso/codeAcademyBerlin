var aside = document.getElementById('aside')
var navOpen = document.getElementById('navOpen')
var navClose = document.getElementById('navClose')

navOpen.addEventListener('click', () => {
  aside.classList.remove('-translate-x-full')
})
navClose.addEventListener('click', () => {
  aside.classList.add('-translate-x-full')
})
