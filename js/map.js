

var tmsFolder = 'https://s3.amazonaws.com/mytms/curtms/';
var dataFolder = './data/';
var dataFolder = 'https://raw.githubusercontent.com/daveism/cr-quick/gh-pages/data/';

//overlays varriables
var ndvi;
var ndmi;
var swir;
var swirwms;
var ndmiwms;
var ndviwms;
var Date_WMS1;
var Date_WMS2;
var Date_WMS3;
var Date_WMS4;
var Date_WMS5;


var overlayMaps = []

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

//set base map
var baseMaps = {
  "map": basicMap,
  "sat": image
};

//set basics for map
var map = L.map('map',{
  center: [34.269,-87.830],
  zoom: 13,
  layers: [image],
  crs: 	L.CRS.EPSG900913
});
