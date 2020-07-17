import openModalWindow from '../../openModalWindow';

let buttons = document.querySelectorAll('.footer__call-button, .header__call-button');
buttons.forEach(button => button.addEventListener('click', openModalWindow('request-call-modal', 'request-call-modal_visible')));



