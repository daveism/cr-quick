$("#toogle-time").css("visibility", "visible");

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

//set overlays for map
var timeLayers = {
  "datewms1":Date_WMS1,
  "datewms2":Date_WMS2,
  "datewms3":Date_WMS3,
  "datewms4":Date_WMS4,
  "datewms5":Date_WMS5
};

overlayMaps.push(timeLayers);
