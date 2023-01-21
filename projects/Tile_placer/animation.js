const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");


const section = document.querySelector("section");
const end = section.querySelector("h1");

const video_offset = 3400;


const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
  duration: 1100,
  offset: video_offset,
  triggerElemnt: intro,
  triggerHook: 0.5
  
})
  .addIndicators()
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
  scrollpos = (e.scrollPos - video_offset) / 1000;

  console.log(e);
});




setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);
  video.currentTime = delay;
}, 80);
 

