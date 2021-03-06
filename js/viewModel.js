function viewModel(){
    var model = {
        //Отображение вкладка
        show: {
            //Знаки
            "s3_4": new Sign("3_4", 0, false),
            "s3_11": new Sign("3_11", 0, false),
            "s3_12": new Sign("3_12",0, false),
            "s3_13": new Sign("3_13", 0, false),
            "s3_14": new Sign("3_14", 0, false),
            "s3_15": new Sign("3_15", 0, false),
            "s3_32": new Sign("3_32", 0, false),
            "s3_33": new Sign("3_33", 0, false),
            //знаки дорог
            "s5_1": new Sign("5_1", 0, false),
            "s7_11": new Sign("7_11", 0, false),
            "s7_12": new Sign("7_12", 0, false)
        }
        ,
        //Конфигурирование
        conf: {
            "c3_4": new Sign("3_4", 0, false, true),
            "c3_11": new Sign("3_11", 7, false, false),
            "c3_12": new Sign("3_12", 6, false, false),
            "c3_13": new Sign("3_13", 4.5, false, false),
            "c3_14": new Sign("3_14", 2.7, false, false),
            "c3_15": new Sign("3_15", 10, false, false),
            "c3_32": new Sign("3_32", 0, false, false),
            "c3_33": new Sign("3_33", 0, false, true)
        },
        //Добавление
        add: {
            "a3_4": new Sign("3_4", 0, false, true),
            "a3_11": new Sign("3_11", 7, false, false),
            "a3_12": new Sign("3_12", 6, false, false),
            "a3_13": new Sign("3_13", 4.5, false, false),
            "a3_14": new Sign("3_14", 2.7, false, false),
            "a3_15": new Sign("3_15", 10, false, false),
            "a3_32": new Sign("3_32", 0, false, true),
            "a3_33": new Sign("3_33", 0, false, true)
        }
    }

    model.updateSignState = function(id, checked){

        if(model.add[id]){
            model.add[id].checked = checked;
        }

        if(model.conf[id]){
            model.conf[id].checked = checked;
        }

        if(model.show[id]){
            model.show[id].checked = checked;

            if(id === "s3_4"){
                if(checked){
                    mapBuilder.addMarkers("zn1");
                }

                if(!checked){
                    mapBuilder.removeMarkers();
                }
            }
        }
    };

    model.updateSignValue = function(id, value){

        if(isNaN(value)){ return;}

        var sign = id.replace("i","");
        var val = parseFloat(value);

        if(model.conf.hasOwnProperty(sign)){
            model.conf[sign].value = val;
        }

        if(model.add.hasOwnProperty(sign)){
            model.conf[sign].value = val;
        }
    };

    //' метод который возврщает выделенные знаки с их значениями из вкладки конфигурирование'
    model.getConfSelectedSign = function(){
        var result = [];
        for(var sign in this.conf){
            if (this.conf.hasOwnProperty(sign) && this.conf[sign].checked) {
                var s = {'name': this.conf[sign].name, 'value': this.conf[sign].value};
                result.push(s);
            }
        }
        return result;
    };

    viewModel = function(){
        return model;
    }

    return viewModel();
}

//модель знака,
//название, значение, выбран/нет, отключен текст бокс/нет
function Sign(name, value, checked, disableInput){
    this.name =  name;
    this.value = value;
    this.checked = checked ;
    this.disableInput = disableInput;
}


