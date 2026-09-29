var wms_layers = [];


        var lyr_Imagesatellite_0 = new ol.layer.Tile({
            'title': 'Image satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Centroide_1 = new ol.format.GeoJSON();
var features_Centroide_1 = format_Centroide_1.readFeatures(json_Centroide_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroide_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroide_1.addFeatures(features_Centroide_1);
var lyr_Centroide_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centroide_1, 
                style: style_Centroide_1,
                popuplayertitle: 'Centroide',
                interactive: true,
                title: '<img src="styles/legend/Centroide_1.png" /> Centroide'
            });

lyr_Imagesatellite_0.setVisible(true);lyr_Centroide_1.setVisible(true);
var layersList = [lyr_Imagesatellite_0,lyr_Centroide_1];
lyr_Centroide_1.set('fieldAliases', {'id': 'id', });
lyr_Centroide_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Centroide_1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Centroide_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});