$("#toogle-wms").css("visibility", "visible");

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


//set overlays for map
var wmsLayers = {
  "SWIR(wms)":swirwms,
  "NDMI(wms)":ndmiwms,
  "NDVI(wms)":ndviwms
};

overlayMaps.push(wmsLayers);
