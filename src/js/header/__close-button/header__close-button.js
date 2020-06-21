let button = document.querySelector('.header__close-button');
let container = document.querySelector('.container');
let menu = document.querySelector('.sidebarcontainer');

button.addEventListener('click', () => {
    container.classList.remove('container_hidden');
    menu.classList.remove('sidebarcontainer_visible');
});