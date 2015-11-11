var model;
var mapBuilder;

$( document ).ready(function() {

    $("#map").css('width', window.innerWidth + "px").css('height', window.innerHeight + "px");

    model = viewModel()
    mapBuilder = MapBuilder();
    init();
});

//инициализация
function init(){

    //открытия закрытия панели
    $("#open-right-menu-btn").click(function(){
        //hide right menu
        $('.right-menu').css("display", "none");
        //show right panel
        $('.right-panel').css("left", "0px");

    });
    $("#close-right-panel").click(function(){
        //hide right menu
        $('.right-menu').css("display", "inline");
        //hide right panel
        $('.right-panel').css("left", "-30%");
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
};

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



