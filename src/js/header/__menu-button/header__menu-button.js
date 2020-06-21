let button = document.querySelector('.header__menu-button');
let menu = document.querySelector('.sidebarcontainer');
let container = document.querySelector('.container');

button.addEventListener('click', () => {
    menu.classList.add('sidebarcontainer_visible');
    container.classList.add('container_hidden');
});