const swiper = new Swiper('.bannerSwiper', {
  loop: true, // 무한 루프 설정
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
  slidesPerView: 3, 
  spaceBetween: 10,

  // 반응형 구간 설정
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  },

  // 재생/정지 버튼 이벤트 처리
  on: {
    init: function () {
      const playButton = document.querySelector('.swiper-button-play');
      const pauseButton = document.querySelector('.swiper-button-pause');

      playButton.addEventListener('click', () => {
        swiper.autoplay.start();
      });

      pauseButton.addEventListener('click', () => {
        swiper.autoplay.stop();
      });
    }
  }
});


