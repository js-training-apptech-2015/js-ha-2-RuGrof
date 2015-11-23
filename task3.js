var add = (function () {
    var plus = function (l, r) { return l + r; };

    return function add() {
        var sum = Array.prototype.reduce.call(arguments, plus, 0);

        var result = add.bind(null, sum);

        result.add = result;
        result.valueOf = Number.prototype.valueOf.bind(sum);

        return result;
    }
})();
