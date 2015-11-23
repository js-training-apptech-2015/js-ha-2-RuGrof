function bind(fn, ctx) {

    var aArgs = Array.prototype.slice.call(arguments, 2);
    return function () {
        return fn.apply(ctx, aArgs.concat(Array.prototype.slice.call(arguments)));
    };
}
