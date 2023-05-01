let menuLinks = document.querySelector('#menu-links')
let hamburgerMenu = document.querySelector('#hamburger-menu')

hamburgerMenu.addEventListener('click', clickMenu)

function clickMenu() {
    if (menuLinks.style.display == 'flex') {
        menuLinks.style.display = 'none'
    }
    else {
        menuLinks.style.display = 'flex'
    }
}

