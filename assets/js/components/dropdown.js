export function initDropdown () {
  const dropdowns = document.querySelectorAll('.dropdown')
  dropdowns.forEach(dropdown => {
    let menu = dropdown.querySelector('.menu')

    const outsideElementOnClick = (event) => {
      if (menu.classList.contains('show')) {
        toggle(event)
      }
    }
    const dropdownOnClick = (event) => {
      toggle(event)
    }

    //
    try {
      const dropdownClone = dropdown.cloneNode(true)
      dropdown.parentNode.replaceChild(dropdownClone, dropdown)
      dropdown = dropdownClone

      const menuClone = menu.cloneNode(true)
      menu.parentNode.replaceChild(menuClone, menu)
      menu = dropdown.querySelector('.menu')
    } catch (error) {
    }

    //
    const toggle = (event) => {
      event.stopPropagation()
      if (menu.classList.contains('show')) {
        const animate = menu.animate([
          { opacity: 1, transform: 'translateY(0) translateX(0%) scale(1)' },
          { opacity: 0, transform: 'translateY(-30%) translateX(20%) scale(0.5)' }
        ], {
          duration: 200,
          easing: 'ease-in-out'
        })
        animate.onfinish = () => menu.classList.remove('show')
      } else {
        menu.classList.add('show')
        menu.animate([
          { opacity: 0, transform: 'translateY(-30%) translateX(20%) scale(0.5)' },
          { opacity: 1, transform: 'translateY(0) translateX(0%) scale(1)' }
        ], {
          duration: 200,
          easing: 'ease-in-out'
        })
      }
    }

    //
    document.removeEventListener('click', outsideElementOnClick)
    dropdown.removeEventListener('click', dropdownOnClick)
    document.addEventListener('click', outsideElementOnClick)
    dropdown.addEventListener('click', dropdownOnClick)
  })
}
