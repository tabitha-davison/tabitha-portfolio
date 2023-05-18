

const view1 = document.getElementById("view1")
const video = view1.querySelector("video");




const controller2 = new ScrollMagic.Controller();
let scene2 = new ScrollMagic.Scene({
  // duration: '5000%',
  triggerElement: view1,
  triggerHook: 0.5
  
})
  .addIndicators()
  .setClassToggle('#view1', 'fade-in')
  .addTo(controller2);






const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
  duration: '50%',

  triggerElement: view1,
  triggerHook: 0.1
  
})
  .addIndicators()
  .setPin(view1)
  .addTo(controller);



let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = (e.scrollPos - e.startPos) / 300;


});




setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos, delay);
  video.currentTime = delay;
},90);
 

