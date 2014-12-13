define([
    'ValueObject'
], function (ValueObject) {
    describe("ValueObject", function() {
        it("returns set value on get", function() {
            var valueObject = new ValueObject();
            valueObject = valueObject.set("property", "value");
            expect(valueObject.get("property")).toEqual("value");
        });

        it("does not change original value on changed property", function() {
            var original = new ValueObject(),
                copy = original.set("property", "value");

            expect(original.property).toBeUndefined();
            expect(copy.get("property")).toEqual("value");
        });

        it("does not change original value on changed property", function() {
            var original = new ValueObject(),
                copy;

            original = original.set("property", "value");
            copy = original.set("property", "new value");

            expect(original.get("property")).toEqual("value");
            expect(copy.get("property")).toEqual("new value");
        });

        it("init sets all passed properties", function() {
            var valueObject = new ValueObject({
                    property: "value"
                });

            expect(valueObject.get("property")).toEqual("value");
        });
    });
});
