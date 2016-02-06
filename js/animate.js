$("#toogle-ani").css("visibility", "visible");

var cnt=1;
var maxCnt=5;

//set speed in seconds
var seconds = 3.5
var millSeconds = seconds * 1000;

//turn off all animation layers
var turnOffall = function(){
  for(var i = 1; i <= maxCnt; i++){

    //uncheck
    $('#image'+i).prop('checked', false);
    //get layer
    var mapLayer = overlayMaps['datewms' + i]
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
        var mapLayer = overlayMaps['datewms' + cnt]
        map.addLayer(mapLayer);
        //increment count
        cnt++;

        //reset if at max
        if(cnt===maxCnt+1){
          cnt=1
        }

        next();
      }, millSeconds);
  })();
});
