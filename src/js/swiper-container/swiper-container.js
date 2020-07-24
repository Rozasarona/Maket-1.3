import Swiper, {Pagination} from 'swiper';
Swiper.use([Pagination]);

if (window.innerWidth < 1120) {
    let mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        pagination: {
        el: '.swiper-pagination',
        }
    });
}