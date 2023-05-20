

const view1 = document.getElementById("view1")
const video = view1.querySelector("video");



window.onload = function(){
  setTimeout(function() {
    console.log('Page is loaded');
    document.getElementById('view1').classList.add('fade-in');

  }, 100);
  
  
};








const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
  duration: '50%',
  offset: 50,
  triggerElement: view1,
  triggerHook: 0.1
  
})
  // .addIndicators()
  .setPin(view1)
  .addTo(controller);



let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = (e.scrollPos - e.startPos) / 200;


});




setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos, delay);
  video.currentTime = delay;
},90);
 

