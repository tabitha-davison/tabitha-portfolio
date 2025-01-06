window.onload = function(){
  setTimeout(function() {
    console.log('Page is loaded');
    document.getElementById('view1').classList.add('fade-in');
    
  }, 100);
};







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








  


  var video = $('#video').get(0);
  
  video.onloadedmetadata = function() {




    console.log('metadata loaded!');


    videoheight = video.offsetHeight;
    videoLength = video.duration;
    offsetTop = view1.scrollTop;
    
    console.log(videoheight, videoLength, offsetTop);


    var controller = new ScrollMagic.Controller();
  
  
        // create a scene
        var scene = new ScrollMagic.Scene({
          duration: 6*duration,
          triggerElement: view2, 
          triggerHook: 0.5,
          offset: videoheight/2
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
        offset: 6*duration + (videoheight/2),
        triggerHook: 0.5
        })
          // .addIndicators()
          .setClassToggle('#view3', 'fade-in')
          .addTo(controller);

        };


        let accelamount = 0.2;
  let delay = 0;

  setInterval(() => {
  delay += (progressvalue -delay) * accelamount;
  console.log(progressvalue, delay, vid_height);
  
  video.currentTime = videoLength * delay/100 - 0.01;
  },20);


 
  

  
      
      
  video.src="./gs_animation3_FFMPEG.mp4";
  
 

