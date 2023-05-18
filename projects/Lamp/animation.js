

const intro = document.querySelector(".intro");
const mainWind = document.getElementById("main");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

// const wrapperWind = document.getElementById("inner")
// var y = document.getElementById("i1").offsetTop;
// var hhhh = wrapperWind.offsetTop;

const y = intro.offsetTop;
const h = window.innerHeight;
const hhh = video.offsetHeight;
const hh = mainWind.offsetTop;

const video_offset = 0;




const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
  duration: '50%',
  // offset: video_offset,
  triggerElement: intro,
  triggerHook: 0.
  
})
  // .addIndicators()
  .setPin(intro)
  .addTo(controller);





// const textAnim  = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});
// let scene2 = new ScrollMagic.Scene({
//   duration: 3000,
//   triggerElemnt: intro,
//   triggerHook: 0
// })
// .setTween(textAnim)
// .addTo(controller);

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
 

