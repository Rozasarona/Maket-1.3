import '../scss/style.scss';
import './header/__menu-button/header__menu-button';
import './header/__close-button/header__close-button';
import './request-call-modal/__close-button/request-call-modal__close-button';
import './footer/__call-button/footer__call-button';


if (window.innerWidth <= 768) {
  let mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: window.innerWidth / 256,
    loop: true,
    pagination: {
    el: '.swiper-pagination'
    }
  });
}

let expandButton = document.querySelector('#expand');
let containerElement = document.querySelector('.swiper-container');

expandButton.addEventListener('click', function() {
  if (expandButton.innerHTML === "Показать все") {
    expandButton.innerHTML = "Скрыть";
    expandButton.classList.add('expandlink_upside-down');
    containerElement.style.height = "unset";
  } else {
    expandButton.innerHTML = "Показать все";
    expandButton.classList.remove('expandlink_upside-down');
    containerElement.style.height = "";
  }
});
