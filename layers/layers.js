var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Habilitados2019ITrimestre_1 = new ol.format.GeoJSON();
var features_Habilitados2019ITrimestre_1 = format_Habilitados2019ITrimestre_1.readFeatures(json_Habilitados2019ITrimestre_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Habilitados2019ITrimestre_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Habilitados2019ITrimestre_1.addFeatures(features_Habilitados2019ITrimestre_1);
var lyr_Habilitados2019ITrimestre_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Habilitados2019ITrimestre_1, 
                style: style_Habilitados2019ITrimestre_1,
                interactive: true,
                title: '<img src="styles/legend/Habilitados2019ITrimestre_1.png" /> Habilitados 2019 I Trimestre'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Habilitados2019ITrimestre_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Habilitados2019ITrimestre_1];
lyr_Habilitados2019ITrimestre_1.set('fieldAliases', {'Codigo_Solicitud': 'Codigo_Solicitud', 'Concesionaria': 'Concesionaria', 'Fecha_Habilitacion': 'Fecha_Habilitacion', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Direccion': 'Direccion', });
lyr_Habilitados2019ITrimestre_1.set('fieldImages', {'Codigo_Solicitud': '', 'Concesionaria': '', 'Fecha_Habilitacion': '', 'Latitud': '', 'Longitud': '', 'Provincia': '', 'Distrito': '', 'Direccion': '', });
lyr_Habilitados2019ITrimestre_1.set('fieldLabels', {'Codigo_Solicitud': 'inline label', 'Concesionaria': 'inline label', 'Fecha_Habilitacion': 'inline label', 'Latitud': 'inline label', 'Longitud': 'inline label', 'Provincia': 'inline label', 'Distrito': 'inline label', 'Direccion': 'inline label', });
lyr_Habilitados2019ITrimestre_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});