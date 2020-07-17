import openModalWindow from '../../openModalWindow';

let buttons = document.querySelectorAll('.footer__message-button, .header__message-button');
buttons.forEach(button => button.addEventListener('click', openModalWindow('feedback-modal', 'feedback-modal_visible')));

