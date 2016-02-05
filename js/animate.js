$("#toogle-ani").css("visibility", "visible");

//start animation
var doAnimate;
$("input[value=doAnimate]").click(function( event ) {
  if(doAnimate){
    doAnimate = false;
  }else{
    doAnimate = true;
    map.addLayer(Date_WMS1);
    $('#image1').prop('checked', true);
  }

  cnt=2;
  maxCnt=5;

//animation (yes a bit of a hack)
  (function next() {
      if (!doAnimate) return;
      setTimeout(function() {
            if(cnt===1){
              map.removeLayer(Date_WMS2);
              $('#image2').prop('checked', false);
              map.removeLayer(Date_WMS3);
              $('#image3').prop('checked', false);
              map.removeLayer(Date_WMS4);
              $('#image4').prop('checked', false);
              map.removeLayer(Date_WMS5);
              $('#image5').prop('checked', false);
              map.addLayer(Date_WMS1);
              $('#image1').prop('checked', true);

            }
            if(cnt===2){
              map.removeLayer(Date_WMS1);
              $('#image1').prop('checked', false);
              map.removeLayer(Date_WMS3);
              $('#image3').prop('checked', false);
              map.removeLayer(Date_WMS4);
              $('#image4').prop('checked', false);
              map.removeLayer(Date_WMS5);
              $('#image5').prop('checked', false);
              map.addLayer(Date_WMS2);
              $('#image2').prop('checked', true);
            }
            if(cnt===3){
              map.removeLayer(Date_WMS1)
              $('#image1').prop('checked', false);
              map.removeLayer(Date_WMS2)
              $('#image2').prop('checked', false);
              map.removeLayer(Date_WMS4)
              $('#image4').prop('checked', false);
              map.removeLayer(Date_WMS5)
              $('#image5').prop('checked', false);
              map.addLayer(Date_WMS3)
              $('#image3').prop('checked', true);
            }
            if(cnt===4){
              map.removeLayer(Date_WMS1)
              $('#image1').prop('checked', false);
              map.removeLayer(Date_WMS2)
              $('#image2').prop('checked', false);
              map.removeLayer(Date_WMS3)
              $('#image3').prop('checked', false);
              map.removeLayer(Date_WMS5)
              $('#image5').prop('checked', false);
              map.addLayer(Date_WMS4)
              $('#image4').prop('checked', true);
            }
            if(cnt===5){
              map.removeLayer(Date_WMS1)
              $('#image1').prop('checked', false);
              map.removeLayer(Date_WMS2)
              $('#image2').prop('checked', false);
              map.removeLayer(Date_WMS3)
              $('#image3').prop('checked', false);
              map.removeLayer(Date_WMS4)
              $('#image4').prop('checked', false);
              map.addLayer(Date_WMS5)
              $('#image5').prop('checked', true);
            }
                        cnt++;
            if(cnt===maxCnt){cnt=1}
          next();
      }, 5000);
  })();
});
