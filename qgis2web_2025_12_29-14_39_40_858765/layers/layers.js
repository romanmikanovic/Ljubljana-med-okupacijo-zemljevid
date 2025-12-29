var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_OF_1 = new ol.format.GeoJSON();
var features_OF_1 = format_OF_1.readFeatures(json_OF_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OF_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OF_1.addFeatures(features_OF_1);
var lyr_OF_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OF_1, 
                style: style_OF_1,
                popuplayertitle: 'OF',
                interactive: true,
                title: '<img src="styles/legend/OF_1.png" /> OF'
            });
var format_Nasilnaakcija_2 = new ol.format.GeoJSON();
var features_Nasilnaakcija_2 = format_Nasilnaakcija_2.readFeatures(json_Nasilnaakcija_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nasilnaakcija_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nasilnaakcija_2.addFeatures(features_Nasilnaakcija_2);
var lyr_Nasilnaakcija_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nasilnaakcija_2, 
                style: style_Nasilnaakcija_2,
                popuplayertitle: 'Nasilna akcija',
                interactive: true,
                title: '<img src="styles/legend/Nasilnaakcija_2.png" /> Nasilna akcija'
            });
var format_Potspominovintovaritva_3 = new ol.format.GeoJSON();
var features_Potspominovintovaritva_3 = format_Potspominovintovaritva_3.readFeatures(json_Potspominovintovaritva_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potspominovintovaritva_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potspominovintovaritva_3.addFeatures(features_Potspominovintovaritva_3);
var lyr_Potspominovintovaritva_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potspominovintovaritva_3, 
                style: style_Potspominovintovaritva_3,
                popuplayertitle: 'Pot spominov in tovarištva',
                interactive: true,
                title: '<img src="styles/legend/Potspominovintovaritva_3.png" /> Pot spominov in tovarištva'
            });
var format_Skladia_4 = new ol.format.GeoJSON();
var features_Skladia_4 = format_Skladia_4.readFeatures(json_Skladia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Skladia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Skladia_4.addFeatures(features_Skladia_4);
var lyr_Skladia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Skladia_4, 
                style: style_Skladia_4,
                popuplayertitle: 'Skladišča',
                interactive: true,
                title: '<img src="styles/legend/Skladia_4.png" /> Skladišča'
            });
var format_Podpora_5 = new ol.format.GeoJSON();
var features_Podpora_5 = format_Podpora_5.readFeatures(json_Podpora_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Podpora_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Podpora_5.addFeatures(features_Podpora_5);
var lyr_Podpora_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Podpora_5, 
                style: style_Podpora_5,
                popuplayertitle: 'Podpora',
                interactive: true,
                title: '<img src="styles/legend/Podpora_5.png" /> Podpora'
            });
var format_Demonstracije_6 = new ol.format.GeoJSON();
var features_Demonstracije_6 = format_Demonstracije_6.readFeatures(json_Demonstracije_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Demonstracije_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Demonstracije_6.addFeatures(features_Demonstracije_6);
var lyr_Demonstracije_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Demonstracije_6, 
                style: style_Demonstracije_6,
                popuplayertitle: 'Demonstracije',
                interactive: true,
                title: '<img src="styles/legend/Demonstracije_6.png" /> Demonstracije'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_OF_1,lyr_Nasilnaakcija_2,lyr_Potspominovintovaritva_3,lyr_Skladia_4,lyr_Podpora_5,lyr_Demonstracije_6,],
                                fold: 'open',
                                title: 'group1'});

lyr_OpenStreetMap_0.setVisible(true);lyr_OF_1.setVisible(true);lyr_Nasilnaakcija_2.setVisible(true);lyr_Potspominovintovaritva_3.setVisible(true);lyr_Skladia_4.setVisible(true);lyr_Podpora_5.setVisible(true);lyr_Demonstracije_6.setVisible(true);
var layersList = [group_group1];
lyr_OF_1.set('fieldAliases', {'id': 'id', 'dogodek': 'dogodek', '2': '2', });
lyr_Nasilnaakcija_2.set('fieldAliases', {'id': 'id', 'Dogodek': 'Dogodek', });
lyr_Potspominovintovaritva_3.set('fieldAliases', {'id': 'id', });
lyr_Skladia_4.set('fieldAliases', {'id': 'id', '1': '1', });
lyr_Podpora_5.set('fieldAliases', {'id': 'id', '1': '1', });
lyr_Demonstracije_6.set('fieldAliases', {'id': 'id', '1': '1', });
lyr_OF_1.set('fieldImages', {'id': 'TextEdit', 'dogodek': 'TextEdit', '2': 'TextEdit', });
lyr_Nasilnaakcija_2.set('fieldImages', {'id': 'TextEdit', 'Dogodek': 'TextEdit', });
lyr_Potspominovintovaritva_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Skladia_4.set('fieldImages', {'id': 'TextEdit', '1': 'TextEdit', });
lyr_Podpora_5.set('fieldImages', {'id': 'TextEdit', '1': 'TextEdit', });
lyr_Demonstracije_6.set('fieldImages', {'id': 'TextEdit', '1': 'TextEdit', });
lyr_OF_1.set('fieldLabels', {'id': 'no label', 'dogodek': 'no label', '2': 'no label', });
lyr_Nasilnaakcija_2.set('fieldLabels', {'id': 'no label', 'Dogodek': 'no label', });
lyr_Potspominovintovaritva_3.set('fieldLabels', {'id': 'no label', });
lyr_Skladia_4.set('fieldLabels', {'id': 'no label', '1': 'no label', });
lyr_Podpora_5.set('fieldLabels', {'id': 'no label', '1': 'no label', });
lyr_Demonstracije_6.set('fieldLabels', {'id': 'no label', '1': 'no label', });
lyr_Demonstracije_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});