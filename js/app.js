$(document).ready(function () {

    $("#map").css('width', window.innerWidth + "px").css('height', window.innerHeight + "px");
    var mapBuilder = MapBuilder();

    $("#rsgsign504").click(function () {
        mapBuilder.addMarkers("zn1");
    });
    
    $("#rsgsign510").click(function () {
        mapBuilder.removeMarkers();
    });
    
});


