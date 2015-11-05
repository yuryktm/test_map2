function DataProvider() {
    var data = createPoints();

    function createPoints() {
            var result = [];

            result.push(new Point([59.930088, 30.325166], "zn2"));
            result.push(new Point([59.95, 30.35], "zn1"));
            result.push(new Point([59.96, 30.36], "zn1"));
            result.push(new Point([59.97, 30.37], "zn2"));

            return result;
    };

    this.loadPoints = function () {
        //this.data = 
    };

    this.getPoints = function () {
        return data;
    };

    this.getPointsByType = function(type) {
        var result = [];

        for (var i = 0; i < data.length; i++) {
            if (data[i].type === type) {
                result.push(data[i]);
            }
        }

        return result;
    };
}