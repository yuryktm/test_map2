function viewModel(){
    var model = {
        //Отображение вкладка
        show: {
            //Знаки
            "s3_4": new Sign("3_4"),
            "s3_11": new Sign("3_11"),
            "s3_12": new Sign("3_12"),
            "s3_13": new Sign("3_13"),
            "s3_14": new Sign("3_14"),
            "s3_15": new Sign("3_15"),
            "s3_32": new Sign("3_32"),
            "s3_33": new Sign("3_33"),
        }
        ,
        //Конфигурирование
        conf: {
            "c3_4": new Sign("3_4", 0, false, true),
            "c3_11": new Sign("3_11", 7, false, false),
            "c3_12": new Sign("3_12", 6, false, false),
            "c3_13": new Sign("3_13", 4,5, false, false),
            "c3_14": new Sign("3_14", 2,7, false, false),
            "c3_15": new Sign("3_15", 10, false, false),
            "c3_32": new Sign("3_32", 0, false, false),
            "c3_33": new Sign("3_33", 0, false, true),
        },
        //Добавление
        add: {
            "a3_4": new Sign("3_4", 0, false, true),
            "a3_11": new Sign("3_11", 7, false, false),
            "a3_12": new Sign("3_12", 6, false, false),
            "a3_13": new Sign("3_13", 4,5, false, false),
            "a3_14": new Sign("3_14", 2,7, false, false),
            "a3_15": new Sign("3_15", 10, false, false),
            "a3_32": new Sign("3_32", 0, false, true),
            "a3_33": new Sign("3_33", 0, false, true),
        }
    }

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

