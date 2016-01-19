var tmsFolder = '../curtms/';
var dataFolder = './data';
// https://raw.githubusercontent.com/daveism/daveisms-assets/master/';

var map = L.tileLayer('http://api.tiles.mapbox.com/v3/daveism.oo0p88l4/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 15
})


var image = L.tileLayer('http://api.tiles.mapbox.com/v3/daveism.oo0o5k97/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 15
})


var ndvi = L.tileLayer(tmsFolder + 'ndvi_tms/{z}/{x}/{y}.png', {
  attribution: 'CR image <a href="http://www.landsatfact.com">LSF</a>',
  tms:true,
  maxZoom: 15,
  opacity: 0.65
})


var ndmi = L.tileLayer(tmsFolder + 'ndmi_tms/{z}/{x}/{y}.png', {
  attribution: 'CR image <a href="http://www.landsatfact.com">LSF</a>',
  tms:true,
  maxZoom: 15,
  opacity: 0.65
})

var swir = L.tileLayer(tmsFolder + 'swir_tms/{z}/{x}/{y}.png', {
  attribution: 'CR image <a href="http://www.landsatfact.com">LSF</a>',
  tms:true,
  maxZoom: 15,
  opacity: 0.65
});

var baseMaps = {
    "map": map,
    "sat": image
};

var map = L.map('map',{
  center: [36.730,-81.859],
  zoom: 13,
  layers: [map,image]
});

var overlayMaps = {
    "NDVI": ndvi,
    "NDMI": ndmi,
    "SWIR": swir
};

var ctrl =  L.control.layers(baseMaps, overlayMaps).addTo(map);

//map.fitBounds(overlayMaps);

$( "input[type=checkbox]" ).click(function( event ) {
    layerClicked = window[event.target.value];
    //alert(JSON.stringify(layerClicked));
    // map.removeLayer(ndvi);
    // map.removeLayer(ndmi);
    // map.removeLayer(swir);
    if (map.hasLayer(layerClicked)) {
       map.removeLayer(layerClicked);
    }
    else{

       map.addLayer(layerClicked);
    } ;
 });

 $( ".btn-group [type=button]" ).click(function( event ) {
    map.removeLayer(image);
   if(this.value == 'sat'){
         map.addLayer(image);
         map.removeLayer(map);
   }
   if(this.value == 'map'){
         map.addLayer(map);
         map.removeLayer(image);
   }
  });

  var changeCount = 0
  var curpoint = 0
  var geoJSON = '';

$.getJSON(dataFolder + "swir_areas.geojson", function(response) {
    console.log("response", response);
    var geojsonLayer = new L.GeoJSON(response);
    geojsonLayer.addTo(map);
    geoJSON = response;
    changeCount = geoJSON.features.length;
});

var getNextChange = function(){
  if(curpoint=>changeCount){
    curpoint++;
    $("#currval").html('Change Feaute:' + curpoint)
    //var t = geoJSON.features[curpoint]
    var centroidPt = turf.centroid(geoJSON.features[curpoint]);
    console.log(JSON.stringify(centroidPt))
    map.setView([ centroidPt.geometry.coordinates[1] , centroidPt.geometry.coordinates[0]],15);
  }
}

var getPevChange = function(){
  if(curpoint >=  0){
    curpoint--;
    $("#currval").html('Change Feauture:&nbsp;&nbsp;' + curpoint)
    var centroidPt = turf.centroid(geoJSON.features[curpoint]);
    console.log(JSON.stringify(centroidPt))
    map.setView([ centroidPt.geometry.coordinates[1] , centroidPt.geometry.coordinates[0]],15);
  }
}
