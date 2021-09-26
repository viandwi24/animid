document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown')
  dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector('.menu')
    const toggle = (event) => {
      event.stopPropagation()
      if (menu.classList.contains('show')) {
        const animate = menu.animate([
          { opacity: 1, transform: 'translateY(0) translateX(0%) scale(1)' },
          { opacity: 0, transform: 'translateY(-30px) translateX(20%) scale(0.5)' }
        ], {
          duration: 200,
          easing: 'ease-in-out'
        })
        animate.onfinish = () => menu.classList.toggle('show')
      } else {
        menu.classList.add('show')
        menu.animate([
          { opacity: 0, transform: 'translateY(-30px) translateX(20%) scale(0.5)' },
          { opacity: 1, transform: 'translateY(0) translateX(0%) scale(1)' }
        ], {
          duration: 200,
          easing: 'ease-in-out'
        })
      }
    }
    document.addEventListener('click', function(event) {
      if (menu.classList.contains('show')) {
        toggle(event)
      }
    })
    dropdown.addEventListener('click', function(event) {
      toggle(event)
    })
  })
})
