let buttons = document.querySelectorAll('.header__close-button, .blur');
let menu = document.querySelector('.sidebarcontainer');
let blur = document.querySelector('.blur');

buttons.forEach(button => button.addEventListener('click', () => {
    blur.classList.remove('blur_visible');
    menu.classList.remove('sidebarcontainer_visible');
}));








