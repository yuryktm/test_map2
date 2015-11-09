function viewModel(){
    var model = {
        show: {
            "3_4": new Sign("3_4"),
            "3_11": new Sign("3_11"),
            "3_12": new Sign("3_12"),
            "3_13": new Sign("3_13"),
            "3_14": new Sign("3_14"),
            "3_15": new Sign("3_15"),
            "3_33": new Sign("3_33"),
        }
        ,
        conf: {
            "3_4": new Sign("3_4", 11),
            "3_11": new Sign("3_11", 22),
            "3_12": new Sign("3_12", 622),
            "3_13": new Sign("3_13", 422),
            "3_14": new Sign("3_14", 222),
            "3_15": new Sign("3_15", 212),
            "3_33": new Sign("3_33", 2),
        },
        add: {
            "3_4": new Sign("3_4", 11),
            "3_11": new Sign("3_11", 22),
            "3_12": new Sign("3_12", 622),
            "3_13": new Sign("3_13", 422),
            "3_14": new Sign("3_14", 222),
            "3_15": new Sign("3_15", 212),
            "3_33": new Sign("3_33", 2),
        }
    }

    viewModel = function(){
        return model;
    }

    return viewModel();
}

function Sign(name, value){
    this.name =  name;
    this.value = value;
}
