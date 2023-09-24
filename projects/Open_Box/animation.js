window.onload = function(){
  setTimeout(function() {
    console.log('Page is loaded');
    document.getElementById('view1').classList.add('fade-in');
    document.getElementById('view2').classList.add('fade-in');

    
  }, 100);
};


// const view1 = document.getElementById("view1")
// const view2 = document.getElementById("view2");
// const view3 = document.getElementById("view3");






// const controller2 = new ScrollMagic.Controller();
// let scene2 = new ScrollMagic.Scene({
//   // duration: '5000%',
//   triggerElement: view2,
//   triggerHook: 0.6
  
// })
//   .addIndicators()
//   .setClassToggle('#view2', 'fade-in')
//   .addTo(controller2);


// const controller3 = new ScrollMagic.Controller();
// let scene3 = new ScrollMagic.Scene({
//   // duration: '5000%',
//   triggerElement: view3,
//   triggerHook: .4,
//   // offset: 500
  
// })
//   .addIndicators()
//   .setClassToggle('#view3', 'fade-in')
//   .addTo(controller3);


function getPosition(element) {
  var yPosition = 0;

  while(element) {
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
  }

  return yPosition;
}



var videoTarget = $('#video');
  var duration = videoTarget.height();
  var video = $('#video').get(0);
  var progressvalue = 0;
  var vid_height = 0;
  var currentTime = 0;
  var videoLength;
  var offsetTop;


  const view2 = document.getElementById("view2");
  const main = document.getElementById("main");
  // offsetTop = view2.getBoundingClientRect().top;
  offsetTop = getPosition(view2);
  


  var video = $('#video').get(0);
  
  video.onloadedmetadata = function() {
    console.log('metadata loaded!');
    videoheight = video.offsetHeight;
    videoLength = video.duration;
    
    console.log(videoheight, videoLength, offsetTop);


    var controller = new ScrollMagic.Controller();
  
  
        // create a scene
        var scene = new ScrollMagic.Scene({
          duration: 4*duration*1.1,
          triggerElement: view2, 
          triggerHook: 0.5,
          offset: (videoheight/2)
        })
        .setPin(view2)
        .addTo(controller)
        // .addIndicators()
        .on("progress", function(e) {
        progressvalue = Math.floor(100 * e.progress);
        });


        const view3 = document.getElementById("view3");

        const controller2 = new ScrollMagic.Controller();
        let scene2 = new ScrollMagic.Scene({
        triggerElement: view2,
        offset: 4*duration*1.1 + (videoheight/2),
        triggerHook: 0.5

        })
          // .addIndicators()
          .setClassToggle('#view3', 'fade-in')
          .addTo(controller2);

  };



        let accelamount = 0.2;
  let delay = 0;

  setInterval(() => {
  delay += (progressvalue -delay) * accelamount;
  console.log(progressvalue, delay, vid_height);
  
  video.currentTime = videoLength* delay/100 -0.03;
  },20);



  

  
      
      
  video.src="./hinge_animation_FFMPEG.mp4";
  

 

