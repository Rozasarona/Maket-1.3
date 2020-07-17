let buttons = document.querySelectorAll('.header__close-button, .blur');
let menu = document.querySelector('.sidebarcontainer');
let blur = document.querySelector('.blur');

buttons.forEach(button => button.addEventListener('click', () => {
    menu.classList.remove('sidebarcontainer_visible');
    blur.classList.remove('blur_visible');
    
}));








