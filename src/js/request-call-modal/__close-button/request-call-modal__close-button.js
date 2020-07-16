let buttons = document.querySelectorAll('.request-call-modal__close-button, .blur');
let modalWindow = document.querySelector('.request-call-modal');
let blur = document.querySelector('.blur');
let html = document.querySelector('html');
let body = document.querySelector('body');

buttons.forEach(button=>button.addEventListener('click', () => {
    blur.classList.remove('blur_visible');
    modalWindow.classList.remove('request-call-modal_visible');
    html.classList.remove('no-scroll');
    body.classList.remove('no-scroll');
}));
