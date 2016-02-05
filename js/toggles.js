
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
