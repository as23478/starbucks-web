const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    // 발생내용 logic 작성
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
   searchEl.classList.add('focused');
   searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function(){
   searchEl.classList.remove('focused');
   searchInputEl.setAttribute('placeholder', '');
});


// badge scroll
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){
        // 배지 숨기기
        gsap.to(badgeEl, .6, {opacity: 0, display: 'none'})
        // 하단 to-top버튼 보이기
        gsap.to('#to-top', .2, {x: 0})
    } else{
        // 배지 표시
        gsap.to(badgeEl, .6, {opacity: 1, display: 'block'})
        // 하단 to-top버튼 숨기기
        gsap.to('#to-top', .2, {x: 100})
    }
}, 300));
// _.throttle(함수, 시간)
// gsap.to(요소, 지속시간, 옵션)

// 하단 to-top버튼 동작
const toTopEl = document.querySelector('#to-top')
toTopEl.addEventListener('click', function(){
    gsap.to(window, .8, {scrollTo: 0})
})



// visual fade-in 효과
const fadeEl = document.querySelectorAll('.visual .fade-in')
fadeEl.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {delay: (index+1)*.7, opacity: 1})
})



// starbucks promotions
const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
const expandBtn = document.querySelector('.expand')
let isHidePromotion = true
expandBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        // 숨김 처리
        promotionEl.classList.add('hide')
        promotionToggleBtn.innerText = 'expand_circle_down'
    } else{
        // 보임 처리
        promotionEl.classList.remove('hide')
        promotionToggleBtn.innerText = 'arrow_circle_up'
    }
})


// swiper
new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
})

// promotion swiper
// let slideSetting = {
let slide_p = new Swiper('.promotion .swiper', {
    slidesPerView: 3, // 한번에 보여주는 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데부터 시작
    loop: true,
    autoplay: {delay: 3000},
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택
        clickable: true // 사용자의 페이지 번호 요소 제어
      },
      navigation: {
        nextEl: ".promotion .swiper-button-next",
        prevEl: ".promotion .swiper-button-prev"
      }
})
// const slide_p = new Swiper('.promotion .swiper', slideSetting)

// awards swiper
new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        nextEl: ".awards .swiper-button-next",
        prevEl: ".awards .swiper-button-prev"
      }
})


// 
const playEl = document.querySelector('.notice .play')
let aa = true
playEl.addEventListener('click', function(){
    aa = !aa
    if(aa){
        // 일시정지
        playEl.innerText = 'play_arrow'
        slide_p.autoplay = false
        // slideSetting = {
        //     slidesPerView: 3, spaceBetween: 10, centeredSlides: true, loop: true, pagination: {el: '.promotion .swiper-pagination', clickable: true}, navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
        //     autoplay: false
        // }
    } else{
        // 재생
        playEl.innerText = 'pause'
        slide_p.autoplay = {delay: 3000}
        // slideSetting = {
        //     slidesPerView: 3, spaceBetween: 10, centeredSlides: true, loop: true, pagination: {el: '.promotion .swiper-pagination', clickable: true}, navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
        //     autoplay: {delay: 3000}
        // }
    }
})


// scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({ // 감시할 장면(scene) 추가
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소 지정
            triggerHook: .8 // 감시하는 요소가 뷰포터의 어떤 지점(80%)에 왔을 때 실행되는지
        })
        .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스를 추가
        .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면 할당하면서 실행(!필수)
})


// 올해 년도 구하기
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()

