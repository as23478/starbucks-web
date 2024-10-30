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
        // badgeEl.style.display = 'none'
        gsap.to(badgeEl, .6, {opacity: 0, display: 'none'})
    } else{
        // 배지 표시
        // badgeEl.style.display = 'block'
        gsap.to(badgeEl, .6, {opacity: 1, display: 'block'})
    }
}, 300));
// _.throttle(함수, 시간)
// gsap.to(요소, 지속시간, 옵션)

