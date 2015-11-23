QUnit.test("bind test", function (assert) {
    var o = {
        x: 1,
        foo: function (a, b) {
            return this.x + a + b;
        }
    };
    var f1 = o.foo.bind({
        x: 2
    }, 1);
    var f2 = bind(o.foo, {
        x: 2
    }, 1);
    var f3 = bind(bind(o.foo, {
        x: 2
    }), {}, 1);
    assert.strictEqual(f1(5), f2(5), "Passed!");
    assert.strictEqual(f1(5), f3(5), "Passed!");


});
