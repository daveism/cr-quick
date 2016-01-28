var tmsFolder = 'file:///Users/daveism/curtms/';
var dataFolder = './data/';
var dataFolder = 'https://raw.githubusercontent.com/daveism/cr-quick/gh-pages/data/';

var Date_WMS1 = L.tileLayer.wms("http://landsatfact-data-dev.nemac.org/lsf-cr-swir-threshold?AOI_ID=327", {
  layers: 'SWIR-archiveCloudGap',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  maxZoom: 15
});

var Date_WMS2 = L.tileLayer.wms("http://landsatfact-data-dev.nemac.org/lsf-cr-swir-allchange?AOI_ID=328", {
  layers: 'SWIR-archiveCloudGap',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  maxZoom: 15
});

var Date_WMS3 = L.tileLayer.wms("http://landsatfact-data-dev.nemac.org/lsf-cr-swir-allchange?AOI_ID=329", {
  layers: 'SWIR-archiveCloudGap',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  maxZoom: 15
});


var swirwms = L.tileLayer.wms("http://landsatfact-data-dev.nemac.org/lsf-cr-swir-allchange?AOI_ID=290", {
  layers: 'swir-archiveCloudGap',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  maxZoom: 15
});

var ndviwms = L.tileLayer.wms("http://landsatfact-data-dev.nemac.org/lsf-cr-ndvi?AOI_ID=290", {
  layers: 'ndvi-archiveCloudGap',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  maxZoom: 15
});

var ndmiwms = L.tileLayer.wms("http://landsatfact-data-dev.nemac.org/lsf-cr-ndmi?AOI_ID=290", {
  layers: 'ndmi-archiveCloudGap',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  maxZoom: 15
});

var basicMap = L.tileLayer('http://api.tiles.mapbox.com/v3/daveism.oo0p88l4/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 15
})

var image = L.tileLayer('http://api.tiles.mapbox.com/v3/daveism.oo0o5k97/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 15
})

var ndvi = L.tileLayer(tmsFolder + 'ndvi_tms/{z}/{x}/{y}.png', {
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  tms:true,
  maxZoom: 15,
  opacity: 0.65
})

var ndmi = L.tileLayer(tmsFolder + 'ndmi_tms/{z}/{x}/{y}.png', {
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  tms:true,
  maxZoom: 15,
  opacity: 0.65
})

var swir = L.tileLayer(tmsFolder + 'swir_tms/{z}/{x}/{y}.png', {
  attribution: '<a href="http://www.landsatfact.com">Landsat FACT</a>',
  tms:true,
  maxZoom: 15,
  opacity: 0.65
});

var baseMaps = {
  "map": basicMap,
  "sat": image
};

var map = L.map('map',{
  center: [36.730,-81.859],
  zoom: 13,
  layers: [image],
  crs: 	L.CRS.EPSG900913
});

var overlayMaps = {
  "NDVI": ndvi,
  "NDMI": ndmi,
  "SWIR": swir,
  "SWIR(wms)":swirwms,
  "NDMI(wms)":ndmiwms,
  "NDVI(wms)":ndviwms,
  "datewms1":Date_WMS1,
  "datewms2":Date_WMS2,
  "datewms3":Date_WMS3
};
var doAnimate;
$("input[value=doAnimate]").click(function( event ) {
  if(doAnimate){
    doAnimate = false;
  }else{
    doAnimate = true;
    map.addLayer(Date_WMS1);
  }

  cnt=2;
  maxCnt=3;

  (function next() {
      if (!doAnimate) return;
      setTimeout(function() {
            if(cnt===1){
              map.removeLayer(Date_WMS3)
              map.removeLayer(Date_WMS2)
              map.addLayer(Date_WMS1)
            }
            if(cnt===2){
              map.removeLayer(Date_WMS1)
              map.removeLayer(Date_WMS3)
              map.addLayer(Date_WMS2)
            }
            if(cnt===3){
              map.removeLayer(Date_WMS1)
              map.removeLayer(Date_WMS2)
              map.addLayer(Date_WMS3)
            }
            cnt++;
            if(cnt===maxCnt){cnt=1}
          next();
      }, 3000);
  })();
});

$( "input[type=checkbox]" ).click(function( event ) {
  layerClicked = window[event.target.value];
  if (map.hasLayer(layerClicked)) {
    map.removeLayer(layerClicked);
  }
  else{
    map.addLayer(layerClicked);
  } ;
});


//change geosjson layer
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
    map.removeLayer(basicMap);
  }
  if(this.id == 'basemap'){
    basicMap.addTo(map);
    map.addLayer(basicMap);
    map.removeLayer(image);
  }
});

var changeCount = 0
var curpoint = 0
var geoJSON = '';
var geojsonLayer;

$.getJSON(dataFolder + "swir_areas.geojson", function(response) {
  console.log("response", response);
  geojsonLayer = new L.GeoJSON(response);
  geojsonLayer.addTo(map);
  geoJSON = response;
  changeCount = geoJSON.features.length;
  map.removeLayer(geojsonLayer);
});

var getNextChange = function(){
  if(curpoint=>changeCount){
    curpoint++;
    $("#currval").html('<b>Change Feauture:</b>&nbsp;&nbsp;' + curpoint)
    areaPush();
    var centroidPt = turf.centroid(geoJSON.features[curpoint]);
    console.log(JSON.stringify(centroidPt))
    map.setView([ centroidPt.geometry.coordinates[1] , centroidPt.geometry.coordinates[0]],15);
  }
}

var getPevChange = function(){
  if(curpoint >=  0){
    curpoint--;
    $("#currval").html('Change Feauture:&nbsp;&nbsp;' + curpoint)

    areaPop();
    var centroidPt = turf.centroid(geoJSON.features[curpoint]);
    console.log(JSON.stringify(centroidPt))
    map.setView([ centroidPt.geometry.coordinates[1] , centroidPt.geometry.coordinates[0]],15);
  }
}


var areaPush = function(){
  var area = turf.area(geoJSON.features[curpoint]);
  console.log(area);
  if(area<5001){
    curpoint++;
    areaPush()
  }
}

var areaPop = function(){
  var area = turf.area(geoJSON.features[curpoint]);
  console.log(area);
  if(area<5001){
    curpoint--;
    areaPop()
  }
}
//$("input[value=Date_WMS3]").click()
