QUnit.test("add test", function (assert) {
    var acc = add(1).add(2).add(3).add(4);
    var acc1 = add(1).add(2);
    var acc2 = acc1.add(1).add(2);

    assert.strictEqual(acc + 5, 15, "Passed!");
    assert.strictEqual(acc1 + 1, 4, "Passed!");
    assert.strictEqual(acc2 + 1, 7, "Passed!");

});
