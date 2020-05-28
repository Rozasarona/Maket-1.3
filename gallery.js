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
    let myLink = document.querySelector('.additional__link .link');
    let myImg = expandButton.querySelector('img');

    expandButton.addEventListener('click', function() {       
      myImg.classList.add('additional__icon');
      if (myLink.innerHTML === "Показать все") {
          myLink.innerHTML = "Скрыть";
          myImg.classList.add('additional__icon');
          containerElement.style.height = "unset";
      } else {
        myLink.innerHTML = "Показать все";
        myImg.classList.remove('additional__icon');
        containerElement.style.height = "";
      }
    });

    