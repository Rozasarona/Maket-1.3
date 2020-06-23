let buttons = document.querySelectorAll('.footer__call-button, .header__call-button');
let modalWindow = document.querySelector('.request-call-modal');
let blur = document.querySelector('.blur');

buttons.forEach(button=>button.addEventListener('click', () => {
    blur.classList.add('blur_visible');
    modalWindow.classList.add('request-call-modal_visible');
}));

