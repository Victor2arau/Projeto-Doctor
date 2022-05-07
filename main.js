function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

 
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// function ScrollReveal() {
//   var options = {
//     reveal: function() {}
//   }

//   return options
// }

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration:1500,
  // aqui vc bota o nome do que quer que apareça primeiro, e só pode quebrar a linha se for utilizado (``).
}).reveal('#home, #home img, #home .stats, #services, #services header, #services, #services card, #about, #about header, #about .content');