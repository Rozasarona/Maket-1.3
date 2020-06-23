let buttons = document.querySelectorAll('.footer__message-button, .header__message-button');
let modalWindow = document.querySelector('.feedback-modal');
let blur = document.querySelector('.blur');

buttons.forEach(button=>button.addEventListener('click', () => {
    blur.classList.add('blur_visible');
    modalWindow.classList.add('feedback-modal_visible');
}));