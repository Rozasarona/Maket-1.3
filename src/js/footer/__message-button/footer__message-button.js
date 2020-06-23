let buttons = document.querySelectorAll('.footer__message-button, .header__message-button');
let container = document.querySelector('.page-container');
let modalWindow = document.querySelector('.feedback-modal');

buttons.forEach(button=>button.addEventListener('click', () => {
    container.classList.add('page-container_hidden');
    modalWindow.classList.add('feedback-modal_visible');
}));