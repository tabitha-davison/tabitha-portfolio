






// function getPosition(element) {
//   var yPosition = 0;

//   while(element) {
//       yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
//       element = element.offsetParent;
//   }

//   return yPosition;
// }



var videoTarget = $('#video');
  var duration = videoTarget.height();
  var video = $('#video').get(0);
  var progressvalue = 0;
  var vid_height = 0;
  var currentTime = 0;
  var videoLength;
  var offsetTop;


  const view1 = document.getElementById("view1");
  const view2 = document.getElementById("view2");
  const main = document.getElementById("main");
  // offsetTop = view2.getBoundingClientRect().top;
  // offsetTop = getPosition(view1);








  


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
          triggerElement: view1, 
          triggerHook: 0.5,
          offset: videoheight/2
        })
        .setPin(view1)
        .addTo(controller)
        .addIndicators()
        .on("progress", function(e) {
        progressvalue = Math.floor(100 * e.progress);
        });


        let accelamount = 0.5;
  let delay = 0;

  setInterval(() => {
  delay += (progressvalue -delay) * accelamount;
  console.log(progressvalue, delay, vid_height);
  
  video.currentTime = videoLength * delay/100;
  },90);


  };
  

  
      
      
  video.src="./gsvideo.mp4";
  
 

