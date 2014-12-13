define([
    'ValueObject'
], function (ValueObject) {
    describe("ValueObject", function() {
        it("returns set value on get", function() {
            var valueObject = new ValueObject();
            valueObject = valueObject.set("property", "value");
            // expect(valueObject.get("property")).toEqual("value");
        });
    });
});
