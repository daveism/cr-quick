var tmsFolder = 'https://s3.amazonaws.com/mytms/curtms/';
var dataFolder = './data/';
var dataFolder = 'https://raw.githubusercontent.com/daveism/cr-quick/gh-pages/data/';

//animation image 1
var Date_WMS1 = L.tileLayer.wms("http://landsatfact-data-dev.nemac.org/lsf-cr-swir-allchange?AOI_ID=368", {
  layers: 'SWIR-archiveMaskForForestCloud',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  maxZoom: 15,
  opacity: 0.65
});

//animation image 2
var Date_WMS2 = L.tileLayer.wms("http://landsatfact-data-dev.nemac.org/lsf-cr-swir-allchange?AOI_ID=369", {
  layers: 'SWIR-archiveMaskForForestCloud',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  maxZoom: 15,
  opacity: 0.65
});

//animation image 3
var Date_WMS3 = L.tileLayer.wms("http://landsatfact-data-dev.nemac.org/lsf-cr-swir-allchange?AOI_ID=372", {
  layers: 'SWIR-archiveMaskForForestCloud',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  maxZoom: 15,
  opacity: 0.65
});

//animation image 4
var Date_WMS4 = L.tileLayer.wms("http://landsatfact-data-dev.nemac.org/lsf-cr-swir-allchange?AOI_ID=370", {
  layers: 'SWIR-archiveMaskForForestCloud',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  maxZoom: 15,
  opacity: 0.65
});

//animation image 5
var Date_WMS5 = L.tileLayer.wms("http://landsatfact-data-dev.nemac.org/lsf-cr-swir-allchange?AOI_ID=371", {
  layers: 'SWIR-archiveMaskForForestCloud',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  maxZoom: 15,
  opacity: 0.65
});

//swir wms
var swirwms  = L.tileLayer.betterWms("http://landsatfact-data-dev.nemac.org/lsf-cr-swir-allchange?AOI_ID=368", {
  layers: 'swir-archiveMaskForForestCloud',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  maxZoom: 15,
  opacity: 0.65
});

//ndvi wms
var ndviwms = L.tileLayer.betterWms("http://landsatfact-data-dev.nemac.org/lsf-cr-ndvi?AOI_ID=368", {
  layers: 'ndvi-archiveMaskForForestCloud',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  maxZoom: 15,
  opacity: 0.65
});

//ndmi wms
var ndmiwms = L.tileLayer.betterWms("http://landsatfact-data-dev.nemac.org/lsf-cr-ndmi?AOI_ID=368", {
  layers: 'ndmi-archiveMaskForForestCloud',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  maxZoom: 15,
  opacity: 0.65
});

//map box simple map
var basicMap = L.tileLayer('http://api.tiles.mapbox.com/v3/daveism.oo0p88l4/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 15
})

//map box sat
var image = L.tileLayer('http://api.tiles.mapbox.com/v3/daveism.oo0o5k97/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 15
})

//ndvi tms
var ndvi = L.tileLayer(tmsFolder + 'ndvi_tms/{z}/{x}/{y}.png', {
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  tms:true,
  maxZoom: 15,
  opacity: 0.65
})

//ndmi tms
var ndmi = L.tileLayer(tmsFolder +  'ndmi_tms/{z}/{x}/{y}.png', {
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  tms:true,
  maxZoom: 15,
  opacity: 0.65
})

//swir tms
var swir = L.tileLayer(tmsFolder + 'swir_tms/{z}/{x}/{y}.png', {
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  tms:true,
  maxZoom: 15,
  opacity: 0.65
});

//set base map
var baseMaps = {
  "map": basicMap,
  "sat": image
};

//set basics for map
var map = L.map('map',{
  center: [36.730,-81.859],
  zoom: 13,
  layers: [image],
  crs: 	L.CRS.EPSG900913
});

//set overlays for map
var overlayMaps = {
  "NDVI": ndvi,
  "NDMI": ndmi,
  "SWIR": swir,
  "SWIR(wms)":swirwms,
  "NDMI(wms)":ndmiwms,
  "NDVI(wms)":ndviwms,
  "datewms1":Date_WMS1,
  "datewms2":Date_WMS2,
  "datewms3":Date_WMS3,
  "datewms4":Date_WMS4,
  "datewms5":Date_WMS5
};

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
      }, 3000);
  })();
});

//toggle overlay layers
$( "input[type=checkbox]" ).click(function( event ) {
  layerClicked = window[event.target.value];
  if (map.hasLayer(layerClicked)) {
    map.removeLayer(layerClicked);
  }
  else{
    map.addLayer(layerClicked);
  } ;
});


//toggle change geosjson layer
$( "#changeLyr[type=button]" ).click(function( event ) {
  if (map.hasLayer(geojsonLayer)) {
    map.removeLayer(geojsonLayer);
  }
  else{
    map.addLayer(geojsonLayer);
  } ;
});

//base map toggle
$( ".btn-group label" ).click(function( event ) {
  if(this.id == 'basesat'){
    map.addLayer(image);
    image.bringToBack();
    map.removeLayer(basicMap);
  }
  if(this.id == 'basemap'){
    basicMap.addTo(map);
    map.addLayer(basicMap);
    basicMap.bringToBack();
    map.removeLayer(image);
  }
});

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
  }else{curpoint=1}
}
