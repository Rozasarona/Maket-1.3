let buttons = document.querySelectorAll('.footer__message-button, .header__message-button');
let modalWindow = document.querySelector('.feedback-modal');
let blur = document.querySelector('.blur');
let html = document.querySelector('html');
let body = document.querySelector('body');

buttons.forEach(button=>button.addEventListener('click', () => {
    blur.classList.add('blur_visible');
    modalWindow.classList.add('feedback-modal_visible');
    html.classList.add('no-scroll');
    body.classList.add('no-scroll');
}));