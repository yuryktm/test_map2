function MapBuilder() {   
    
    var ICON_SIZE = [24, 50];
    var ICON_ANCHOR = [12, 50];

    //var ICON_SIZE = [33, 67];
    //var ICON_ANCHOR = [16, 67];

    //var ICON_SIZE = [24, 50];//[33, 67];//[49, 100];//[29, 83];//[49, 125];
    //var ICON_ANCHOR = [12, 50];//[16, 67];//[24, 100];//[14, 83];//[25, 125];

    var getIcon = function(type) {
        var icon = L.icon({
            iconUrl: getIconUrlByType(type),
            iconSize: ICON_SIZE,
            iconAnchor: ICON_ANCHOR,
        });

        return icon;
    };

    var getIconUrlByType = function(type) {
        var result;
        switch (type) {
        case "zn1":
            result = 'img/zn200x98.gif';
            break;
        case "zn2":
            result = 'img/zn200x98.gif';
            break;
        default:
            result = 'img/zn200x98.gif';
            break;
        }
        return result;
    };
    
    var _map = L.map('map',{ zoomControl: false }).setView([59.930088, 30.325166], 12);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(_map);
   // L.control.zoom();

    var _dataProvider = new DataProvider();
    //var points = dataProvider.getPoints();
    var _lGroup;
    var _markers = [];
    
    return {
        addMarkers: function (type) {

            if (_lGroup && _lGroup.getLayers() > 0) { return; }

            //if (gMarkers.length > 0) {
            //    map.removeLayer(gMarkers);
            //}

            if (_markers.length <= 0) {
                var points = _dataProvider.getPointsByType(type);

                for (var i = 0; i < points.length; i++) {
                    _markers.push(L.marker(points[i].point, { icon: getIcon(points[i]) }));
                }
            }

            _lGroup = L.layerGroup(_markers).addTo(_map);
            
        },

        addMarker: function(point) {
            var icon = L.icon({
                iconUrl: getIconUrlByType(point.type),
                iconSize: ICON_SIZE,
                iconAnchor: ICON_ANCHOR,
            });
            L.marker(point.point, { icon: icon }).addTo(_map);
        },
        
        removeMarkers: function () {
            if (_lGroup.hasLayer) {
                _map.removeLayer(_markers);
                _lGroup.clearLayers();
            }
        }
    };
}