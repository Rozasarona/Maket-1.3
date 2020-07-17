import Swiper from 'swiper';

if (window.innerWidth <= 768) {
    let mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        }
    });
}