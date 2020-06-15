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
