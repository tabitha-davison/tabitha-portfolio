const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");


const section = document.querySelector("section");
const end = section.querySelector("h1");


const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
  duration: 1000,
  triggerElemnt: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);


const textAnim  = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});
let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElemnt: intro,
  triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;

  console.log(e);
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);
  video.currentTime = delay;
}, 33.3);
 


// const html = document.documentElement;
// const canvas = document.querySelector('.airpods-scrolling');
// const context = canvas.getContext("2d");


// const currentFrame = index => (
// //   `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
// `./lamp/lamp_${index.toString().padStart(4, '0')}.jpg`
// )
// const frameCount = 65;
// canvas.width=1920;
// canvas.height=1080;
// const img = new Image()
// img.src = currentFrame(1);
// img.onload=function(){
//   context.drawImage(img, 0, 0);
// }

// const preloadImages = () => {
//   for (let i = 1; i < frameCount; i++) {
//     const img = new Image();
//     img.src = currentFrame(i);
//   }
// };




// const updateImage = index => {
//   img.src = currentFrame(index);
//   context.drawImage(img, 0, 0);
// }

// window.addEventListener('scroll', () => {  
//   const scrollTop = html.scrollTop;
//   const maxScrollTop = html.scrollHeight - window.innerHeight;
//   const scrollFraction = scrollTop / maxScrollTop;
//   const frameIndex = Math.min(
//     frameCount - 1,
//     Math.ceil(scrollFraction * frameCount)
//   );
  
//   requestAnimationFrame(() => updateImage(frameIndex + 1))
// });

// preloadImages()