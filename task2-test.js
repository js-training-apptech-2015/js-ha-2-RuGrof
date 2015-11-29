QUnit.test("rebind test", function (assert) {
    var o = {
        x: 1,
        foo: function (a, b) {
            //console.log(arguments, this.x);
            return this.x + a + b;
        }
    };
    var f1 = rebind(o.foo, {
        x: 2
    });
    var f2 = rebind(f1, {
        x: 3
    });
    assert.strictEqual(f1(1,1), 4, "Passed!");
    assert.strictEqual(f2(1,1), 5, "Passed!");
    var f2 = rebind(f1, {
        x: 4
    });
    assert.strictEqual(f2(1,1), 6, "Passed!");

});
