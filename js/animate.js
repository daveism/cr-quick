
//start animation
var doAnimate;
$("input[value=doAnimate]").click(function( event ) {
  if(doAnimate){
    doAnimate = false;
  }else{
    doAnimate = true;
    map.addLayer(Date_WMS1);
  }

  cnt=2;
  maxCnt=5;

//animation (yes a bit of a hack)
  (function next() {
      if (!doAnimate) return;
      setTimeout(function() {
            if(cnt===1){
              map.removeLayer(Date_WMS2)
              map.removeLayer(Date_WMS3)
              map.removeLayer(Date_WMS4)
              map.removeLayer(Date_WMS5)
              map.addLayer(Date_WMS1)
            }
            if(cnt===2){
              map.removeLayer(Date_WMS1)
              map.removeLayer(Date_WMS3)
              map.removeLayer(Date_WMS4)
              map.removeLayer(Date_WMS5)
              map.addLayer(Date_WMS2)
            }
            if(cnt===3){
              map.removeLayer(Date_WMS1)
              map.removeLayer(Date_WMS2)
              map.removeLayer(Date_WMS4)
              map.removeLayer(Date_WMS5)
              map.addLayer(Date_WMS3)
            }
            if(cnt===4){
              map.removeLayer(Date_WMS1)
              map.removeLayer(Date_WMS2)
              map.removeLayer(Date_WMS3)
              map.removeLayer(Date_WMS5)
              map.addLayer(Date_WMS4)
            }
            if(cnt===5){
              map.removeLayer(Date_WMS1)
              map.removeLayer(Date_WMS2)
              map.removeLayer(Date_WMS3)
              map.removeLayer(Date_WMS4)
              map.addLayer(Date_WMS5)
            }
                        cnt++;
            if(cnt===maxCnt){cnt=1}
          next();
      }, 5000);
  })();
});
