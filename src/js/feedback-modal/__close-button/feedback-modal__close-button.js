let buttons = document.querySelectorAll('.feedback-modal__close-button');
let modalWindow = document.querySelector('.feedback-modal');
let container = document.querySelector('.page-container');

buttons.forEach(button=>button.addEventListener('click', () => {
    container.classList.remove('page-container_hidden');
    modalwindow.classList.remove('feedback-modal_visible');
}));


