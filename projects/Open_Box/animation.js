

const view1 = document.getElementById("view1")
const view2 = document.getElementById("view2");
const view3 = document.getElementById("view3");


const video = view2.querySelector("video");



const controller2 = new ScrollMagic.Controller();
let scene2 = new ScrollMagic.Scene({
  // duration: '5000%',
  triggerElement: view2,
  triggerHook: 0.6
  
})
  .addIndicators()
  .setClassToggle('#view2', 'fade-in')
  .addTo(controller2);


const controller3 = new ScrollMagic.Controller();
let scene3 = new ScrollMagic.Scene({
  // duration: '5000%',
  triggerElement: view3,
  triggerHook: .4,
  // offset: 500
  
})
  .addIndicators()
  .setClassToggle('#view3', 'fade-in')
  .addTo(controller3);



const controller1 = new ScrollMagic.Controller();
let scene1 = new ScrollMagic.Scene({
  duration: '100%',
  triggerElement: view2,
  triggerHook: 0,
  offset: 100
  
  
})
  .addIndicators()
  .setPin(view2)
  .addTo(controller1);

let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene1.on('update', e => {
  scrollpos = (e.scrollPos - e.startPos) / 700;

});




setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos, delay);
  video.currentTime = delay;
},90);
 

