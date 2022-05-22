const navmenu = document.getElementById('nav-menu'),
    togglemenu = document.getElementById('toggle-menu'),   
    closemenu = document.getElementById('close-menu')

    togglemenu.addEventListener('click', () => {
        navmenu.classList.toggle('show')
    })
    closemenu.addEventListener('click', () => {
        navmenu.classList.remove('show')
    })