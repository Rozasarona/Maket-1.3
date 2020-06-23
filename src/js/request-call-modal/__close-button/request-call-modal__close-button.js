let buttons = document.querySelectorAll('.request-call-modal__close-button, .blur');
let modalWindow = document.querySelector('.request-call-modal');
let blur = document.querySelector('.blur');

buttons.forEach(button=>button.addEventListener('click', () => {
    blur.classList.remove('blur_visible');
    modalWindow.classList.remove('request-call-modal_visible');
}));
