let buttons = document.querySelectorAll('.feedback-modal__close-button, .blur');
let modalWindow = document.querySelector('.feedback-modal');
let blur = document.querySelector('.blur');

buttons.forEach(button=>button.addEventListener('click', () => {
    blur.classList.remove('blur_visible');
    modalWindow.classList.remove('feedback-modal_visible');
}));
