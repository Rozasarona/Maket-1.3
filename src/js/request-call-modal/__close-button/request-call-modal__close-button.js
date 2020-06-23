let buttons = document.querySelectorAll('.request-call-modal__close-button');
let modalWindow = document.querySelector('.request-call-modal');
let container = document.querySelector('.page-container');

buttons.forEach(button=>button.addEventListener('click', () => {
    container.classList.remove('page-container_hidden');
    modalWindow.classList.remove('request-call-modal_visible');
}));