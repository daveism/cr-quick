
#!/bin/bash

tms='../curtms'
folder='../Downloads/lsfdata4/products'
data='./data'
processfolder='./processingdata'

rm $data/*.tif
rm $data/*.geojson
rm $processfolder/*.tif
rm $processfolder/*.geojson

#clouds
gdal_merge.py -n 0 -o $processfolder/cloud_all.tif $folder/cloud_mask/*.tif

#ndvi
gdal_merge.py -n 0 -o $processfolder/ndvi_all.tif $folder/ndvi/*.tif
gdal_calc.py -A $processfolder/ndvi_all.tif -B $processfolder/cloud_all.tif  --A_band=1 --B_band=1 --outfile=$processfolder/ndvi_noclouds_all.tif --calc="A*B"
gdaldem color-relief -of GTiff $processfolder/ndvi_noclouds_all.tif $data/ndvicolor.txt $processfolder/ndvi_color.tif

#ndvi
gdal_merge.py -n 0 -o $processfolder/ndmi_all.tif $folder/ndmi/*.tif
gdal_calc.py -A $processfolder/ndmi_all.tif -B $processfolder/cloud_all.tif  --A_band=1 --B_band=1 --outfile=$processfolder/ndmi_noclouds_all.tif --calc="A*B"
gdaldem color-relief -of GTiff $processfolder/ndmi_noclouds_all.tif  $data/ndmicolor.txt $processfolder/ndmi_color.tif

#swir
gdal_merge.py -n 0 -o $processfolder/swir_all.tif $folder/swir/*.tif
gdal_calc.py -A $processfolder/swir_all.tif -B $processfolder/cloud_all.tif  --A_band=1 --B_band=1 --outfile=$processfolder/swir_noclouds_all.tif --calc="A*B"
gdaldem color-relief -of GTiff $processfolder/swir_noclouds_all.tif  $data/swircolor.txt $processfolder/swir_color.tif

gdal_calc.py -A $processfolder/swir_noclouds_all.tif  --A_band=1  --outfile=$processfolder/swir_big.tif --calc="255*(A>168)" --NoDataValue=0
gdal_polygonize.py $processfolder/swir_big.tif -f 'GeoJSON' $processfolder/swir_areas_raw.geojson -8
ogr2ogr -f 'GeoJSON' $data/swir_areas.geojson $processfolder/swir_areas_raw.geojson  -t_srs EPSG:4326

#create local TMS tile map server
#does not really need a server
gdal2tiles.py -w 'leaflet' -r lanczos -z 5-9 -a 255 $processfolder/ndvi_color.tif $tms/ndvi_tms/ &
gdal2tiles.py -w 'leaflet' -r lanczos -z 5-9 -a 255 $processfolder/ndmi_color.tif $tms/ndmi_tms/ &
gdal2tiles.py -w 'leaflet' -r lanczos -z 5-9 -a 255 $processfolder/swir_color.tif $tms/swir_tms/ &

gdal2tiles.py -w 'leaflet' -r lanczos -z 10  -a 255 $processfolder/ndvi_color.tif $tms/ndvi_tms/ &
gdal2tiles.py -w 'leaflet' -r lanczos -z 10  -a 255 $processfolder/ndmi_color.tif $tms/ndmi_tms/ &
gdal2tiles.py -w 'leaflet' -r lanczos -z 10  -a 255 $processfolder/swir_color.tif $tms/swir_tms/ &

gdal2tiles.py -w 'leaflet' -r lanczos -z 11  -a 255 $processfolder/ndvi_color.tif $tms/ndvi_tms/ &
gdal2tiles.py -w 'leaflet' -r lanczos -z 11  -a 255 $processfolder/ndmi_color.tif $tms/ndmi_tms/ &
gdal2tiles.py -w 'leaflet' -r lanczos -z 11  -a 255 $processfolder/swir_color.tif $tms/swir_tms/ &

gdal2tiles.py -w 'leaflet' -r lanczos -z 12  -a 255 $processfolder/ndvi_color.tif $tms/ndvi_tms/ &
gdal2tiles.py -w 'leaflet' -r lanczos -z 12  -a 255 $processfolder/ndmi_color.tif $tms/ndmi_tms/ &
gdal2tiles.py -w 'leaflet' -r lanczos -z 12  -a 255 $processfolder/swir_color.tif $tms/swir_tms/ &

gdal2tiles.py -w 'leaflet' -r lanczos -z 13  -a 255 $processfolder/ndvi_color.tif $tms/ndvi_tms/ &
gdal2tiles.py -w 'leaflet' -r lanczos -z 13  -a 255 $processfolder/ndmi_color.tif $tms/ndmi_tms/ &
gdal2tiles.py -w 'leaflet' -r lanczos -z 13  -a 255 $processfolder/swir_color.tif $tms/swir_tms/ &

gdal2tiles.py -w 'leaflet' -r lanczos -z 14  -a 255 $processfolder/ndvi_color.tif $tms/ndvi_tms/ &
gdal2tiles.py -w 'leaflet' -r lanczos -z 14  -a 255 $processfolder/ndmi_color.tif $tms/ndmi_tms/ &
gdal2tiles.py -w 'leaflet' -r lanczos -z 14  -a 255 $processfolder/swir_color.tif $tms/swir_tms/ &

gdal2tiles.py -w 'leaflet' -r lanczos -z 15  -a 255 $processfolder/ndvi_color.tif $tms/ndvi_tms/ &
gdal2tiles.py -w 'leaflet' -r lanczos -z 15  -a 255 $processfolder/ndmi_color.tif $tms/ndmi_tms/ &
gdal2tiles.py -w 'leaflet' -r lanczos -z 15  -a 255 $processfolder/swir_color.tif $tms/swir_tms/ &
