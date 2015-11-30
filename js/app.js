﻿var model;
var mapBuilder;

$( document ).ready(function() {

    $("#map").css('width', window.innerWidth + "px").css('height', window.innerHeight + "px");

    model = viewModel()
    mapBuilder = MapBuilder();
    init();
});

//инициализация
function init(){
    $(window).resize(function() {
        $("#map").css('width', window.innerWidth + "px").css('height', window.innerHeight + "px");
    });

    function panelOpen(type){
        //hide left menu
        $('.left-menu').css("display", "none");
        //show left panel
        $('.left-panel').css("left", "0px");
        $(type).css("display", "inline");
    };

    function panelClose(){
        //hide left menu
        $('.left-menu').css("display", "inline");
        //hide left panel
        $('.left-panel').css("left", "-496px");
        $(".panel-body-settings").css("display", "none");
        $(".panel-body-info").css("display", "none");
    };

    //открытия закрытия панели left-panel
    $("#open-left-menu-btn").click(function(){
        panelOpen(".panel-body-settings");
        $(".panel-heading h1").text("Настройки");
    });
    $("#close-left-panel").click(function(){
        panelClose();
    });

    //открытия закрытия панели left-panel-info
    $("#info-left-menu-btn").click(function(){
        panelOpen(".panel-body-info");
        $(".panel-heading h1").text("Данные о маршруте")
    });

    //инициализация знаков на панели
    //данные берем из модели - model
    for(var i in model.show){

        $("#panel-showing #" + i).addClass("grayImg").addClass("grayImgNone");
    }

    for(var c in model.conf){
        $("#panel-configuring #" + c).addClass("grayImg").addClass("grayImgNone");

        if(!model.conf[c].disableInput){
            $("#panel-configuring #i" + c).val(model.conf[c].value);
        }else{
            $("#panel-configuring #i" + c).css("display", "none");
        }
    }

    for(var a in model.add){
        $("#panel-adding #" + a).addClass("grayImg").addClass("grayImgNone");

        if(!model.add[a].disableInput){
            $("#panel-adding #i" + a).val(model.add[a].value);
        }else{
            $("#panel-adding #i" + a).css("display", "none");
        }
    }

    //оброботчик на измения в полях под знаками
    $(".tab-content input").change(function(e) {
        var id = e.currentTarget.id;
        var value = e.currentTarget.value;
        model.updateSignValue(id, value);
    });

    $("#btnApplyConf").click(function(){
        console.log("Conf");
    });

    $("#btnApplyAdd").click(function(){
        console.log("Add");
    });
};

//показывает открыта панель добавление да/нет
function addTabIsOpen(){
    return $("a[aria-expanded='true']").attr('href') === "#panel-adding";
}

//обработчик клик по знаку
//mode === "mode2" -- режим работы картинок для вкладок добавление
function imgClick(mode){
    var id = this.event.currentTarget.id;
    var  item  = $("#" + id);

    //убираем задаем серый фон для знаков
    if(item.hasClass("grayImg")){//установка состояние выбран
        item.removeClass('grayImg').removeClass("grayImgNone");
        //пдейт модели
        model.updateSignState(id, true);

        // режим работы картинок для вкладки добавление
        if(mode === "mode2"){
            //для вкладке добавление
            if(id.indexOf("a",0)>=0){
                var arr = $("#panel-adding img");
                arr.each(function(i, item){
                    if(!(item.id == id)){
                        $(item).addClass("grayImg").addClass("grayImgNone");
                        model.updateSignState(id, false);
                    }
                });
            }
        }
    }
    else{//установка состояния не выбран
        item.addClass('grayImg');
        item.mouseout(function(event){
            item.addClass("grayImgNone");
            item.unbind(event);
        });
        model.updateSignState(id, false);
    }
}



