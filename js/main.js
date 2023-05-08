const badgeEl = document.querySelector('.badges');
window.addEventListener('scroll', _.throttle(function() {
  if(window.scrollY > 500) {
    //배지 숨기기
    // badgeEl.style.display = 'none';
    // 애니메이션을 동작시키는 함수 gsap.to(요소, 지속시간(초단위), 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to('#to-top', .2, {
      x:0
    });

  } else {
    //배지 보이기
    // badgeEl.style.display = 'block';

    // _.throttle(함수, 시간(밀리세컨드)) : 단위 시간별로 함수를 실행한다.
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });

    gsap.to('#to-top', .2, {
      x:100
    });
  }
}, 300));


const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7,{
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1) * 0.7,
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination:{
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



// PROMOTION 슬라이드 토글
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    // 숨김
    promotionEl.classList.add('hide');
  } else {
    // 보임
    promotionEl.classList.remove('hide');
  }
});


// YOUTUBE COVER
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, 
    random(1.5, 2.5),
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0,delay)
    }
  );
}
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min.toFixed(2)));
}

floatingObject('.floating1', 1, 1.5);
floatingObject('.floating2', .5, 1.5);
floatingObject('.floating3', 1.5, 2.0);

// SCROLL MAGIC
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});