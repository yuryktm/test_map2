$( document ).ready(function() {
    init(viewModel());
});

function init(model){

    for(var item in model.show){
        $("#panel-showing #" + item).addClass("grayImg");
        console.log(model.show[item].name);
    }

    for(var item in model.conf){
        $("#panel-configuring #" + item).addClass("grayImg");
        console.log(model.show[item].name);
    }

    for(var item in model.add){
        $("#panel-adding #" + item).addClass("grayImg");
        console.log(model.show[item].name);
    }


    $("#3_11").click(function(){

        var item = $("#3_11");
        if(item.hasClass("grayImg")){
            item.removeClass('grayImg');
        }
        else{
            item.addClass('grayImg');
        }




    });

    //$("#3_12").click(function(){
    //
    //});
    //3_13
};




