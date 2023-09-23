window.onload = function(){
  setTimeout(function() {
    console.log('Page is loaded');
    document.getElementById('view1').classList.add('fade-in');
    
  }, 100);






};

  var videoTarget = $('#video');
  var duration = videoTarget.height();
  var video = $('#video').get(0);
  video.currentTime =  0;
  var progressvalue = 0;
  var vid_height = 0;
  var currentTime = 0;
  var videoLength;
  
  var video = $('#video').get(0);
  
  video.onloadedmetadata = function() {
    console.log('metadata loaded!');
    videoheight = video.offsetHeight;
    videoLength = this.duration;
    


    var controller = new ScrollMagic.Controller();
  
  
        // create a scene
        var scene = new ScrollMagic.Scene({
          duration: 4*duration,
          triggerElement: view1, 
          triggerHook: 0.5,
          offset: (videoheight/2)
        })
        .setPin('.project')
        .addTo(controller)
        // .addIndicators()
        .on("progress", function(e) {
        progressvalue = Math.floor(100 * e.progress);
        });




        const view3 = document.getElementById("view3");
        const controller2 = new ScrollMagic.Controller();
        let scene2 = new ScrollMagic.Scene({
        triggerElement: view1,
        offset: 4*duration + (videoheight/2),
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
  
  video.currentTime = videoLength* delay/100 -0.01;
  },20);
      
      

  video.src="./lamp_animation_FFMPEG.mp4";
  





  
 

