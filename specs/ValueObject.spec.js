define([
    'ValueObject'
], function (ValueObject) {
    describe("ValueObject", function() {
        it("Get returns set value", function() {
            var valueObject = new ValueObject();
            valueObject = valueObject.set("property", "value");
            expect(valueObject.get("property")).toEqual("value");
        });
    });
});
