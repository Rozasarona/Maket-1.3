let buttons = document.querySelectorAll('.footer__call-button, .header__call-button');
let container = document.querySelector('.page-container');
let modalWindow = document.querySelector('.request-call-modal');

buttons.forEach(button=>button.addEventListener('click', () => {
    container.classList.add('page-container_hidden');
    modalWindow.classList.add('request-call-modal_visible');
}));

