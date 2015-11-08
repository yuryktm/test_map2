$(document).ready(function () {

    $("#map").css('width', window.innerWidth + "px").css('height', window.innerHeight + "px");
    var mapBuilder = MapBuilder();

    $("#rsgsign504").click(function () {
        mapBuilder.addMarkers("zn1");
    });
    
    $("#rsgsign510").click(function () {
        mapBuilder.removeMarkers();
    });

    /**************************************************************************************************/


    $("#open-right-menu-btn").click(function(){
        //hide right menu
        $('.right-menu').css("display", "none");
        //show right panel
        $('.right-panel').css("display", "inline");

    });

    $("#close-right-panel").click(function(){
        //hide right menu
        $('.right-menu').css("display", "inline");
        //show right panel
        $('.right-panel').css("display", "none");
    });

});


