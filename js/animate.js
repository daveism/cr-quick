$("#toogle-ani").css("visibility", "visible");
$("#setAnimation").css("visibility", "visible");

var cnt=1;
var maxCnt=5;

//set speed in seconds from user input
var seconds = $("#animationSeconds").val()
if (seconds <= 0){
  seconds = 1;
}
if (seconds >= 25 ){
  seconds = 25;
}

var millSeconds = seconds * 1000;

var getLayerFromObj = function(cnt){
  for(var x = 1; x <= overlayMaps.length; x++){
    var mapLayer = overlayMaps[x]['datewms' + cnt]
    if(mapLayer){
      return mapLayer;
      break;
    }
  }
}

//turn off all animation layers
var turnOffall = function(){
  for(var i = 1; i <= maxCnt; i++){

    //uncheck
    $('#image'+i).prop('checked', false);

    //get layer
    //var mapLayer = overlayMaps[2]['datewms' + i]
    var mapLayer = getLayerFromObj(i);

    //remove layer
    map.removeLayer(mapLayer);
  }
}

//start animation
var doAnimate;
$("input[value=doAnimate]").click(function( event ) {
  if(doAnimate){
    doAnimate = false;
  }else{

    //do first image imediatly
    map.addLayer(Date_WMS1);
    $('#image1').prop('checked', true);

    //start animation in millSeconds
    doAnimate = true;
    cnt++;
  }



  //animation
  (function next() {
      if (!doAnimate) return;

      setTimeout(function() {
        //turn all layers off
        turnOffall();

        //turn on and check current layer
        $('#image'+cnt).prop('checked', true);
        var mapLayer = getLayerFromObj(cnt);
        map.addLayer(mapLayer);
        //increment count
        cnt++;

        //reset if at max
        if(cnt===maxCnt+1){
          cnt=1
        }

        next();
      }, ($("#animationSeconds").val() * 1000) );
  })();
});
