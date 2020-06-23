if (window.innerWidth <= 768) {
    let mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: window.innerWidth / 256,
        loop: true,
        pagination: {
        el: '.swiper-pagination'
        }
    });
}