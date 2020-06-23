let button = document.querySelector('.header__menu-button');
let menu = document.querySelector('.sidebarcontainer');
let blur = document.querySelector('.blur');

button.addEventListener('click', () => {
    menu.classList.add('sidebarcontainer_visible');
    blur.classList.add('blur_visible');
});