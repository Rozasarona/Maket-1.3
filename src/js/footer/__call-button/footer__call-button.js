let buttons = document.querySelectorAll('.footer__call-button, .header__call-button');
let modalWindow = document.querySelector('.request-call-modal');
let blur = document.querySelector('.blur');
let html = document.querySelector('html');
let body = document.querySelector('body');

buttons.forEach(button=>button.addEventListener('click', () => {
    blur.classList.add('blur_visible');
    modalWindow.classList.add('request-call-modal_visible');
    html.classList.add('no-scroll');
    body.classList.add('no-scroll');
}));

