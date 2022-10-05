/* 292 */ 
const badgeEl = document.querySelector('.badges');

window.addEventListener("scroll", function(){
    console.log(window.scrollY); //스크롤값 확인하기
    if(760<window.scrollY){
        // badgeEl.style.display='none';
        gsap.toString(badgeEl,0.6,{
            opacity:0,
            display:'none'
        })
    }else{
        // badgeEl.style.display='block';
        gsap.toString(badgeEl,0.6,{
            opacity:1,
            display:'block'
        })
    }
 });

 /* gsap.to(요소, 시간, 속성) */8``
 const fadeEl = document.querySelector('.fadeln');
 delayy:(fadeEl), 1,{

 }