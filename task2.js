function rebind(fn, ctx) {

    var aArgs = Array.prototype.slice.call(arguments, 2);
    var result;
    if (fn.original === undefined) {
        result = function(){
            return fn.apply(ctx, aArgs.concat(Array.prototype.slice.call(arguments)));
        };
        result.original = fn;
    }else{
        result = function(){
            return fn.original.apply(ctx, aArgs.concat(Array.prototype.slice.call(arguments)));
        };
        result.original = fn.original;
    }
    return result;

}
