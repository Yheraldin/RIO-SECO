ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32718").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_c_shp_1 = new ol.format.GeoJSON();
var features_c_shp_1 = format_c_shp_1.readFeatures(json_c_shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_c_shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_shp_1.addFeatures(features_c_shp_1);
var lyr_c_shp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_shp_1, 
                style: style_c_shp_1,
                interactive: true,
                title: '<img src="styles/legend/c_shp_1.png" /> c_shp'
            });
var lyr_c_acc_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_acc_2.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [458262.000000, 8686564.750000, 475262.000000, 8710477.250000]
                            })
                        });
var lyr_c_cauce_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_cauce",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_cauce_3.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [458262.000000, 8686564.750000, 475262.000000, 8710477.250000]
                            })
                        });
var format_c_curvas_4 = new ol.format.GeoJSON();
var features_c_curvas_4 = format_c_curvas_4.readFeatures(json_c_curvas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_c_curvas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_curvas_4.addFeatures(features_c_curvas_4);
var lyr_c_curvas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_curvas_4, 
                style: style_c_curvas_4,
                interactive: true,
                title: '<img src="styles/legend/c_curvas_4.png" /> c_curvas'
            });
var lyr_c_fill_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_fill_5.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [458262.000000, 8686564.750000, 475262.000000, 8710477.250000]
                            })
                        });
var lyr_c_reclass_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_reclass",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_reclass_6.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [458262.000000, 8686564.750000, 475262.000000, 8710477.250000]
                            })
                        });
var format_c_rios_7 = new ol.format.GeoJSON();
var features_c_rios_7 = format_c_rios_7.readFeatures(json_c_rios_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_c_rios_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_rios_7.addFeatures(features_c_rios_7);
var lyr_c_rios_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_rios_7, 
                style: style_c_rios_7,
                interactive: true,
                title: '<img src="styles/legend/c_rios_7.png" /> c_rios'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_c_shp_1.setVisible(true);lyr_c_acc_2.setVisible(true);lyr_c_cauce_3.setVisible(true);lyr_c_curvas_4.setVisible(true);lyr_c_fill_5.setVisible(true);lyr_c_reclass_6.setVisible(true);lyr_c_rios_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_c_shp_1,lyr_c_acc_2,lyr_c_cauce_3,lyr_c_curvas_4,lyr_c_fill_5,lyr_c_reclass_6,lyr_c_rios_7];
lyr_c_shp_1.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', 'Área': 'Área', 'Perímetro': 'Perímetro', });
lyr_c_curvas_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CONTOUR': 'CONTOUR', 'LENGTH': 'LENGTH', });
lyr_c_rios_7.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_c_shp_1.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'TextEdit', 'NAME': 'TextEdit', 'Área': 'TextEdit', 'Perímetro': 'TextEdit', });
lyr_c_curvas_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CONTOUR': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_c_rios_7.set('fieldImages', {'SEGMENT_ID': '', 'NODE_A': '', 'NODE_B': '', 'BASIN': '', 'ORDER': '', 'ORDER_CELL': '', 'LENGTH': '', });
lyr_c_shp_1.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', 'Área': 'no label', 'Perímetro': 'no label', });
lyr_c_curvas_4.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CONTOUR': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_7.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});