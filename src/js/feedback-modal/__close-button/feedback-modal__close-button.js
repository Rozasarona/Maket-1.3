let buttons = document.querySelectorAll('.feedback-modal__close-button, .blur');
let modalWindow = document.querySelector('.feedback-modal');
let blur = document.querySelector('.blur');
let html = document.querySelector('html');
let body = document.querySelector('body');

buttons.forEach(button=>button.addEventListener('click', () => {
    blur.classList.remove('blur_visible');
    modalWindow.classList.remove('feedback-modal_visible');
    html.classList.remove('no-scroll');
    body.classList.remove('no-scroll');
}));
