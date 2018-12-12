        var map = L.map('map', {
            zoomControl:true, maxZoom:28, minZoom:1
        }).fitBounds([[51.19627668003685,-7.748671530564334],[53.53344277440277,-0.5424754799636715]]);
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('A project from <a href="https://thesatorilab.com/">The Satori Lab</a> | <a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');
        var bounds_group = new L.featureGroup([]);
            L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);
        function setBounds() {
        }
        function pop_Proprtionvisitsbydesktop_0(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2"> Name: ' + (feature.properties['ctyua15nm'] !== null ? Autolinker.link(String(feature.properties['ctyua15nm'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Visits by desktop: ' + (feature.properties['DeskNum'] !== null ? Autolinker.link(String(feature.properties['DeskNum'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Visits by mobile: ' + (feature.properties['MobiNum'] !== null ? Autolinker.link(String(feature.properties['MobiNum'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Visits by tablet: ' + (feature.properties['TablNum'] !== null ? Autolinker.link(String(feature.properties['TablNum'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Av visits per head: ' + (feature.properties['ViHeNum'] !== null ? Autolinker.link(String(feature.properties['ViHeNum'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400, minWidth: 200});
        }

        function style_Proprtionvisitsbydesktop_0_0(feature) {
            if (feature.properties['DeskNum'] >= 0.000000 && feature.properties['DeskNum'] <= 0.104000 ) {
                return {
                pane: 'pane_Proprtionvisitsbydesktop_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,255,0.0)',
            }
            }
            if (feature.properties['DeskNum'] >= 0.104000 && feature.properties['DeskNum'] <= 0.208000 ) {
                return {
                pane: 'pane_Proprtionvisitsbydesktop_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(219,198,222,0.25098039215686274)',
            }
            }
            if (feature.properties['DeskNum'] >= 0.208000 && feature.properties['DeskNum'] <= 0.312000 ) {
                return {
                pane: 'pane_Proprtionvisitsbydesktop_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(182,141,188,0.5019607843137255)',
            }
            }
            if (feature.properties['DeskNum'] >= 0.312000 && feature.properties['DeskNum'] <= 0.416000 ) {
                return {
                pane: 'pane_Proprtionvisitsbydesktop_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(145,84,154,0.7490196078431373)',
            }
            }
            if (feature.properties['DeskNum'] >= 0.416000 && feature.properties['DeskNum'] <= 0.520000 ) {
                return {
                pane: 'pane_Proprtionvisitsbydesktop_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(108,27,120,1.0)',
            }
            }
        }
        map.createPane('pane_Proprtionvisitsbydesktop_0');
        map.getPane('pane_Proprtionvisitsbydesktop_0').style.zIndex = 400;
        map.getPane('pane_Proprtionvisitsbydesktop_0').style['mix-blend-mode'] = 'normal';
        var layer_Proprtionvisitsbydesktop_0 = new L.geoJson(json_Proprtionvisitsbydesktop_0, {
            attribution: '',
            pane: 'pane_Proprtionvisitsbydesktop_0',
            onEachFeature: pop_Proprtionvisitsbydesktop_0,
            style: style_Proprtionvisitsbydesktop_0_0,
        });
        bounds_group.addLayer(layer_Proprtionvisitsbydesktop_0);
        // map.addLayer(layer_Proprtionvisitsbydesktop_0);
        function pop_Proprtionvisitsbymobilecopy_1(feature, layer) {
             var popupContent = '<table>\
                    <tr>\
                        <td colspan="2"> Name: ' + (feature.properties['ctyua15nm'] !== null ? Autolinker.link(String(feature.properties['ctyua15nm'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Visits by desktop: ' + (feature.properties['DeskNum'] !== null ? Autolinker.link(String(feature.properties['DeskNum'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Visits by mobile: ' + (feature.properties['MobiNum'] !== null ? Autolinker.link(String(feature.properties['MobiNum'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Visits by tablet: ' + (feature.properties['TablNum'] !== null ? Autolinker.link(String(feature.properties['TablNum'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Av visits per head: ' + (feature.properties['ViHeNum'] !== null ? Autolinker.link(String(feature.properties['ViHeNum'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Proprtionvisitsbymobilecopy_1_0(feature) {
            if (feature.properties['MobiNum'] >= 0.000000 && feature.properties['MobiNum'] <= 0.126000 ) {
                return {
                pane: 'pane_Proprtionvisitsbymobilecopy_1',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,255,0.0)',
            }
            }
            if (feature.properties['MobiNum'] >= 0.126000 && feature.properties['MobiNum'] <= 0.252000 ) {
                return {
                pane: 'pane_Proprtionvisitsbymobilecopy_1',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(219,198,222,0.25098039215686274)',
            }
            }
            if (feature.properties['MobiNum'] >= 0.252000 && feature.properties['MobiNum'] <= 0.378000 ) {
                return {
                pane: 'pane_Proprtionvisitsbymobilecopy_1',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(182,141,188,0.5019607843137255)',
            }
            }
            if (feature.properties['MobiNum'] >= 0.378000 && feature.properties['MobiNum'] <= 0.504000 ) {
                return {
                pane: 'pane_Proprtionvisitsbymobilecopy_1',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(145,84,154,0.7490196078431373)',
            }
            }
            if (feature.properties['MobiNum'] >= 0.504000 && feature.properties['MobiNum'] <= 0.630000 ) {
                return {
                pane: 'pane_Proprtionvisitsbymobilecopy_1',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(108,27,120,1.0)',
            }
            }
        }
        map.createPane('pane_Proprtionvisitsbymobilecopy_1');
        map.getPane('pane_Proprtionvisitsbymobilecopy_1').style.zIndex = 401;
        map.getPane('pane_Proprtionvisitsbymobilecopy_1').style['mix-blend-mode'] = 'normal';
        var layer_Proprtionvisitsbymobilecopy_1 = new L.geoJson(json_Proprtionvisitsbymobilecopy_1, {
            attribution: '',
            pane: 'pane_Proprtionvisitsbymobilecopy_1',
            onEachFeature: pop_Proprtionvisitsbymobilecopy_1,
            style: style_Proprtionvisitsbymobilecopy_1_0,
        });
        bounds_group.addLayer(layer_Proprtionvisitsbymobilecopy_1);
       // map.addLayer(layer_Proprtionvisitsbymobilecopy_1);
        function pop_Proprtionvisitsbytabletcopy_2(feature, layer) {
           var popupContent = '<table>\
                    <tr>\
                        <td colspan="2"> Name: ' + (feature.properties['ctyua15nm'] !== null ? Autolinker.link(String(feature.properties['ctyua15nm'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Visits by desktop: ' + (feature.properties['DeskNum'] !== null ? Autolinker.link(String(feature.properties['DeskNum'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Visits by mobile: ' + (feature.properties['MobiNum'] !== null ? Autolinker.link(String(feature.properties['MobiNum'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Visits by tablet: ' + (feature.properties['TablNum'] !== null ? Autolinker.link(String(feature.properties['TablNum'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Av visits per head: ' + (feature.properties['ViHeNum'] !== null ? Autolinker.link(String(feature.properties['ViHeNum'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Proprtionvisitsbytabletcopy_2_0(feature) {
            if (feature.properties['TablNum'] >= 0.000000 && feature.properties['TablNum'] <= 0.034000 ) {
                return {
                pane: 'pane_Proprtionvisitsbytabletcopy_2',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,255,0.0)',
            }
            }
            if (feature.properties['TablNum'] >= 0.034000 && feature.properties['TablNum'] <= 0.068000 ) {
                return {
                pane: 'pane_Proprtionvisitsbytabletcopy_2',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(219,198,222,0.25098039215686274)',
            }
            }
            if (feature.properties['TablNum'] >= 0.068000 && feature.properties['TablNum'] <= 0.102000 ) {
                return {
                pane: 'pane_Proprtionvisitsbytabletcopy_2',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(182,141,188,0.5019607843137255)',
            }
            }
            if (feature.properties['TablNum'] >= 0.102000 && feature.properties['TablNum'] <= 0.136000 ) {
                return {
                pane: 'pane_Proprtionvisitsbytabletcopy_2',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(145,84,154,0.7490196078431373)',
            }
            }
            if (feature.properties['TablNum'] >= 0.136000 && feature.properties['TablNum'] <= 0.170000 ) {
                return {
                pane: 'pane_Proprtionvisitsbytabletcopy_2',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(108,27,120,1.0)',
            }
            }
        }
        map.createPane('pane_Proprtionvisitsbytabletcopy_2');
        map.getPane('pane_Proprtionvisitsbytabletcopy_2').style.zIndex = 402;
        map.getPane('pane_Proprtionvisitsbytabletcopy_2').style['mix-blend-mode'] = 'normal';
        var layer_Proprtionvisitsbytabletcopy_2 = new L.geoJson(json_Proprtionvisitsbytabletcopy_2, {
            attribution: '',
            pane: 'pane_Proprtionvisitsbytabletcopy_2',
            onEachFeature: pop_Proprtionvisitsbytabletcopy_2,
            style: style_Proprtionvisitsbytabletcopy_2_0,
        });
        bounds_group.addLayer(layer_Proprtionvisitsbytabletcopy_2);
       // map.addLayer(layer_Proprtionvisitsbytabletcopy_2);
        function pop_Avannualvisitsperhead_3(feature, layer) {
             var popupContent = '<table>\
                    <tr>\
                        <td colspan="2"> Name: ' + (feature.properties['ctyua15nm'] !== null ? Autolinker.link(String(feature.properties['ctyua15nm'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Visits by desktop: ' + (feature.properties['DeskNum'] !== null ? Autolinker.link(String(feature.properties['DeskNum'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Visits by mobile: ' + (feature.properties['MobiNum'] !== null ? Autolinker.link(String(feature.properties['MobiNum'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Visits by tablet: ' + (feature.properties['TablNum'] !== null ? Autolinker.link(String(feature.properties['TablNum'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Av visits per head: ' + (feature.properties['ViHeNum'] !== null ? Autolinker.link(String(feature.properties['ViHeNum'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Avannualvisitsperhead_3_0(feature) {
            if (feature.properties['ViHeNum'] >= 0.000000 && feature.properties['ViHeNum'] <= 3.600000 ) {
                return {
                pane: 'pane_Avannualvisitsperhead_3',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,255,0.0)',
            }
            }
            if (feature.properties['ViHeNum'] >= 3.600000 && feature.properties['ViHeNum'] <= 7.200000 ) {
                return {
                pane: 'pane_Avannualvisitsperhead_3',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(219,198,222,0.25098039215686274)',
            }
            }
            if (feature.properties['ViHeNum'] >= 7.200000 && feature.properties['ViHeNum'] <= 10.800000 ) {
                return {
                pane: 'pane_Avannualvisitsperhead_3',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(182,141,188,0.5019607843137255)',
            }
            }
            if (feature.properties['ViHeNum'] >= 10.800000 && feature.properties['ViHeNum'] <= 14.400000 ) {
                return {
                pane: 'pane_Avannualvisitsperhead_3',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(145,84,154,0.7490196078431373)',
            }
            }
            if (feature.properties['ViHeNum'] >= 14.400000 && feature.properties['ViHeNum'] <= 18.000000 ) {
                return {
                pane: 'pane_Avannualvisitsperhead_3',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(108,27,120,1.0)',
            }
            }
        }
        map.createPane('pane_Avannualvisitsperhead_3');
        map.getPane('pane_Avannualvisitsperhead_3').style.zIndex = 403;
        map.getPane('pane_Avannualvisitsperhead_3').style['mix-blend-mode'] = 'normal';
        var layer_Avannualvisitsperhead_3 = new L.geoJson(json_Avannualvisitsperhead_3, {
            attribution: '',
            pane: 'pane_Avannualvisitsperhead_3',
            onEachFeature: pop_Avannualvisitsperhead_3,
            style: style_Avannualvisitsperhead_3_0,
        });
        bounds_group.addLayer(layer_Avannualvisitsperhead_3);
        map.addLayer(layer_Avannualvisitsperhead_3);
        var baseMaps = {};
        L.control.layers(baseMaps,{'Av annual visits per head <br /><table><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Avannualvisitsperhead_3_000036000.png" /></td><td> 0.000 - 3.600 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Avannualvisitsperhead_3_360072001.png" /></td><td> 3.600 - 7.200 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Avannualvisitsperhead_3_7200108002.png" /></td><td> 7.200 - 10.800 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Avannualvisitsperhead_3_10800144003.png" /></td><td> 10.800 - 14.400 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Avannualvisitsperhead_3_14400180004.png" /></td><td> 14.400 - 18.000 </td></tr></table>': layer_Avannualvisitsperhead_3,'Proprtion visits by tablet<br /><table><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbytabletcopy_2_0000030.png" /></td><td> 0.00 - 0.03 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbytabletcopy_2_0030071.png" /></td><td> 0.03 - 0.07 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbytabletcopy_2_0070102.png" /></td><td> 0.07 - 0.10 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbytabletcopy_2_0100143.png" /></td><td> 0.10 - 0.14 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbytabletcopy_2_0140174.png" /></td><td> 0.14 - 0.17 </td></tr></table>': layer_Proprtionvisitsbytabletcopy_2,'Proprtion visits by mobile<br /><table><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbymobilecopy_1_0000130.png" /></td><td> 0.00 - 0.13 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbymobilecopy_1_0130251.png" /></td><td> 0.13 - 0.25 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbymobilecopy_1_0250382.png" /></td><td> 0.25 - 0.38 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbymobilecopy_1_0380503.png" /></td><td> 0.38 - 0.50 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbymobilecopy_1_0500634.png" /></td><td> 0.50 - 0.63 </td></tr></table>': layer_Proprtionvisitsbymobilecopy_1,'Proprtion visits by desktop<br /><table><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbydesktop_0_00000010400.png" /></td><td> 0.0000 - 0.1040 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbydesktop_0_01040020801.png" /></td><td> 0.1040 - 0.2080 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbydesktop_0_02080031202.png" /></td><td> 0.2080 - 0.3120 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbydesktop_0_03120041603.png" /></td><td> 0.3120 - 0.4160 </td></tr><tr><td style="text-align: center;"><img src="https://thesatorilab.github.io/LAWebsites/alpha-wales-18/legend/Proprtionvisitsbydesktop_0_04160052004.png" /></td><td> 0.4160 - 0.5200 </td></tr></table>': layer_Proprtionvisitsbydesktop_0,},{collapsed:false}).addTo(map);
        setBounds();