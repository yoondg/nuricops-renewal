var swipe = new Swiper(".snsSwiper", {
    slidesPerView: 3, // 기본 보여지는 슬라이드 개수
    spaceBetween: 30, // 슬라이드 간 간격
    centeredSlides: true, // 활성화된 슬라이드 가운데 위치
    initialSlide: 1,
    loop: true, // 무한 루프 설정
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 768px 이하 화면에서는 한 개의 슬라이드만 보이도록 설정
      768: {
        slidesPerView: 1, // 작은 화면에서 슬라이드 1개 보임
        spaceBetween: 10, // 작은 화면에서 슬라이드 간격 줄임
      },
      1024: {
        slidesPerView: 3, // 데스크탑에서 슬라이드 3개 보임
        spaceBetween: 30, // 데스크탑에서 슬라이드 간격
      },
    },
  });





