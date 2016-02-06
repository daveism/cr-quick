$("#toogle-change").css("visibility", "visible");
$("#loading").css("visibility", "visible");

//set overlays for map
var overlayMaps = {
  "NDVI": ndvi,
  "NDMI": ndmi,
  "SWIR": swir,
  "SWIR(wms)":swirwms,
  "NDMI(wms)":ndmiwms,
  "NDVI(wms)":ndviwms
};


//set varriables for navigateing change
var changeCount = 0
var curpoint = 0
var geoJSON = '';
var geojsonLayer;

//hide map
$("#map").css("visibility", "hidden");

$.getJSON(dataFolder + "swir_areas.geojson", function(response) {

  //load geojson
  geojsonLayer = new L.GeoJSON(response);
  geojsonLayer.addTo(map);
  geoJSON = response;
  changeCount = geoJSON.features.length;

  //get and zoom to center of all change features
  var centroidPt = turf.centroid(geoJSON);
  map.setView([ centroidPt.geometry.coordinates[1] , centroidPt.geometry.coordinates[0]],10);
  map.removeLayer(geojsonLayer);

  //once geojson is loaded un hide map and hide loading
  $("#loading").css("visibility", "hidden");
  $("#map").css("visibility", "visible");
});

//function to move to next change area
var getNextChange = function(){
  if(curpoint >= changeCount){
    curpoint = 0;
  }

  if(curpoint <= changeCount){
    curpoint++;
    $("#currval").html('<b>Change Feauture:</b>&nbsp;&nbsp;' + curpoint + ' of ' + changeCount)

    areaPush();

    //get centroid of next point
    var centroidPt = turf.centroid(geoJSON.features[curpoint]);
    console.log(JSON.stringify(centroidPt))
    map.setView([ centroidPt.geometry.coordinates[1] , centroidPt.geometry.coordinates[0]],15);
  }
}

//function to move to previous change area
var getPevChange = function(){
  if(curpoint <= 0){
    curpoint = changeCount;
  }
  if(curpoint >=  0){
    curpoint--;
    $("#currval").html('Change Feauture:&nbsp;&nbsp;' + curpoint + ' of ' + changeCount)

    areaPop();

    //get centroid of previous point
    var centroidPt = turf.centroid(geoJSON.features[curpoint]);
    console.log(JSON.stringify(centroidPt))
    map.setView([ centroidPt.geometry.coordinates[1] , centroidPt.geometry.coordinates[0]],15);
  }
}

//function to check area and increment count foward
// for navigating change areas
var areaPush = function(){
  //get area from the current feature
  var area = turf.area(geoJSON.features[curpoint]);
  //get square meters from the acre vaule
  var skipSize = $("#inputSkipMeters").val()/0.00024711;
  //don't increment past max features
  if(area<skipSize){
    curpoint++;
    areaPush()
  }
}

//function to check area and increment count backward
// for navigating change areas
var areaPop = function(){
  //get area from the current feature
  var area = turf.area(geoJSON.features[curpoint]);
  //get square meters from the acre vaule
  var skipSize = $("#inputSkipMeters").val()/0.00024711;
  if(area<skipSize){
    curpoint--;
    areaPop()
  }
}
