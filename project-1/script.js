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

function copyClip() {
    
    const copyText = document.getElementById("cPlusPlusCode");
    const storage = document.createElement('textarea');
    const message = "Código copiado!"

    storage.value = copyText.innerHTML;
    copyText.appendChild(storage);
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    copyText.removeChild(storage);

    alert(message)
}

