// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        videoId: 'n3xyyIc_AEA', // 최초 재생할 유튜브 영상 id
        playerVars: {
            autoplay: true, // 자동 재생 유무
            loop: true, // 반복 재생 유무
            playlist: 'n3xyyIc_AEA' // 반복 재생할 유튜브 영상 id 목록
        },
        events: {
            onReady: function(event){
                event.target.mute() // 음소거
            }
        }
    });
}

// 랜덤함수 사용하기
function random(min, max) {
    // `.toFixed()`를 통해 반환되는 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 반환
    return parseFloat((Math.random()*(max-min)+min).toFixed(2))
}

// youtube icon ani
function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1, // repeat: -1 => 무한반복
        yoyo: true,
        ease: "power1.inOut",
        delay: random(0, delay)
    })
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', 0.5, 15)
floatingObject('.floating3', 1.5, 20)

