$("#toogle-ani").css("visibility", "visible");

//turn off all animation layers
var turnOffall = function(){
  map.removeLayer(Date_WMS1);
  $('#image1').prop('checked', false);

  map.removeLayer(Date_WMS2);
  $('#image2').prop('checked', false);

  map.removeLayer(Date_WMS3);
  $('#image3').prop('checked', false);

  map.removeLayer(Date_WMS4);
  $('#image4').prop('checked', false);

  map.removeLayer(Date_WMS5);
  $('#image5').prop('checked', false) ;
}

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

  cnt=1;
  maxCnt=5;

//animation (yes a bit of a hack)
  (function next() {
      if (!doAnimate) return;
      setTimeout(function() {
            if(cnt===1){
              turnOffall();
              map.addLayer(Date_WMS1);
              $('#image1').prop('checked', true);
            }
            if(cnt===2){
              turnOffall();
              map.addLayer(Date_WMS2);
              $('#image2').prop('checked', true);
            }
            if(cnt===3){
              turnOffall();
              map.removeLayer(Date_WMS1);
              $('#image3').prop('checked', true);
            }
            if(cnt===4){
              turnOffall();
              map.addLayer(Date_WMS4)
              $('#image4').prop('checked', true);
            }
            if(cnt===5){
              turnOffall();
              map.addLayer(Date_WMS5);
              $('#image5').prop('checked', true);
            }
            cnt++;
            if(cnt===maxCnt+1){
              cnt=1
            }
          next();
      }, 3500);
  })();
});
