let search = document.querySelector('.search-box');
    let menuIcon = document.getElementById('menu-icon');
    let navbar = document.querySelector('ul.navbar');

    document.querySelector('#search-icon').onclick = () => {
        search.classList.toggle('active');
    }

    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
    }

    let header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    })