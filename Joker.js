var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2, /*一次嗅出一個影片*/
    spaceBetween: 20,
    slidesPerGroup: 1, /*每按一次切換，只會換一個影片*/ 
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

  const floatAnimation = () => {
    const tlCan = new TimelineMax({repeat:-1, yoyo:true});
    /*{repeat:-1, yoyo:true} 
      =>infinite  =>reserve
    */
   tlCan
       //move top left
   .to('#mask1', 3, { y:'-=30', x:'+=20',  rotation:'-=2', ease:Power1.easeInOut})
   
       //move down right
   .to('#mask1', 2, { y:'+=30', x:'-=20', rotation:'-=2', ease:Power1.easeInOut})
   
   
   .to('#mask1', 3, { y:'-=20',  x:'-=40', rotation:'+=2', ease:Power1.easeInOut})
   
   .to('#mask1', 3, { y:'+=20',  rotation:'+=2', ease:Power1.easeInOut})
   
   
   .to('#mask1', 3, { y:'-=30', ease:Power1.easeInOut})
      
   .to('#mask1', 3, { y:'+=60',x:"-=10", ease:Power1.easeInOut})
   
   
   .to('#mask1', 3, { y:'-=30', x:"+=4" ,ease:Power1.easeInOut})
      
   .to('#mask1', 3, { y:'+=50', ease:Power1.easeInOut})
   
   
   .to('#mask1', 2, { y:'-=10', x:"+=15", ease:Power1.easeInOut})
      
   .to('#mask1', 2, { y:'-=30', x:'+=20', ease:Power1.easeInOut})

 TweenLite.to(tlCan, 27, {ease:Power1.easeInOut})

}
floatAnimation();

const floatAnimation2 = () => {
    const tlCan = new TimelineMax({repeat:-1, yoyo:true});
    /*Can Animation*/
   tlCan
       //move top left
   .to('#mask2', 3, { y:'+=20', x:'+=40',  rotation:'-=8', ease:Power1.easeInOut})
   
       //move down right
   .to('#mask2', 2, { y:'-=50', x:'-=20', rotation:'+=10', ease:Power1.easeInOut})
   
   
   .to('#mask2', 3, { y:'+=20',  x:'-=40', rotation:'+=2', ease:Power1.easeInOut})
   
   .to('#mask2', 3, { y:'-=40',  rotation:'+=8', ease:Power1.easeInOut})
   
   
   .to('#mask2', 3, { y:'+=50', ease:Power1.easeInOut})
      
   .to('#mask2', 3, { y:'+=30',x:"-=10", ease:Power1.easeInOut})
   
   
   .to('#mask2', 3, { y:'-=30', x:"+=4" ,rotation:'+=10' ,ease:Power1.easeInOut})
      
   .to('#mask2', 3, { y:'+=10',  x:"+=10", rotation:'-=8',ease:Power1.easeInOut})
   
   
   .to('#mask2', 2, { y:'+=20', ease:Power1.easeInOut})
      
   .to('#mask1', 2, { y:'+=20', x:'+=20', ease:Power1.easeInOut})

 TweenLite.to(tlCan, 27, {ease:Power1.easeInOut})

}
floatAnimation2();

let catalog = document.getElementById("catalog");
let open = document.getElementById("open");
let close = document.getElementById("close");

open.addEventListener("click", function(){
    catalog.style.top ="0";
})
close.addEventListener("click", function(){
  catalog.style.top= "-100vh";
})
