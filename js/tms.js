
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

//set overlays for map
var overlayMaps = {
  "NDVI": ndvi,
  "NDMI": ndmi,
  "SWIR": swir,
  "SWIR(wms)":swirwms,
  "NDMI(wms)":ndmiwms,
  "NDVI(wms)":ndviwms
};
