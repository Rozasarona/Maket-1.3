import '../scss/style.scss';
import './header/__menu-button/header__menu-button';
import './header/__close-button/header__close-button';
import './request-call-modal/__close-button/request-call-modal__close-button';
import './footer/__call-button/footer__call-button';
import './brands/__expand-link/brands__expand-link';
import './gadgets/__expand-link/gadgets__expand-link';
import './content/__expand-link/content__expand-link';

if (window.innerWidth <= 768) {
  let mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: window.innerWidth / 256,
    loop: true,
    pagination: {
    el: '.swiper-pagination'
    }
  });
}
