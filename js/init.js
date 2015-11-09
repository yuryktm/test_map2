$( document ).ready(function() {
    model = viewModel()
    init();
});

var model;

function init(){

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

function imgClick(mode){
    var id = this.event.currentTarget.id;
    var  item  = $("#" + id);

    if(item.hasClass("grayImg")){
        item.removeClass('grayImg').removeClass("grayImgNone");
        //model.changeItem(id, true);
        // режим работы картинок для вкладок добавление, конфигурирование
        if(mode === "mode2"){
            //для вкладке добавление
            if(id.indexOf("a",0)>=0){
               var arr = $("#panel-adding img");
               arr.each(function(i, item){
                   if(!item.id == id){
                       $(item).addClass("grayImg").addClass("grayImgNone");
                   }
                });
            }
            //для вкладке конфигурирование
            if(id.indexOf("c",0) >= 0){
                $("#panel-configuring #" + c).addClass("grayImg").addClass("grayImgNone");
            }
        }
    }
    else{
        item.addClass('grayImg');
        item.mouseout(function(event){
            item.addClass("grayImgNone");
            item.unbind(event);
        });
    }
}



