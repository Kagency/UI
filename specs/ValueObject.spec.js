define([
    'ValueObject'
], function (ValueObject) {

    var TestObject = function () {
        this.property = null;
        this.secondProperty = null;

        ValueObject.apply(this, arguments);
    };
    TestObject.prototype = ValueObject.prototype;

    describe("ValueObject", function() {
        it("returns set value on get", function() {
            var valueObject = new TestObject();
            valueObject = valueObject.set("property", "value");
            expect(valueObject.get("property")).toEqual("value");
        });

        it("returns set second property", function() {
            var valueObject = new TestObject();
            valueObject = valueObject.set("property", "value");
            valueObject = valueObject.set("secondProperty", "value");

            expect(valueObject.get("property")).toEqual("value");
            expect(valueObject.get("secondProperty")).toEqual("value");
        });

        it("fails on get on unknown property", function() {
            var valueObject = new TestObject();
            expect(function () {
                valueObject.get("unknown");
            }).toThrow(new Error("Property unknown is undefined."));
        });

        it("fails on set on unknown property", function() {
            var valueObject = new TestObject();
            expect(function () {
                valueObject.set("unknown");
            }).toThrow(new Error("Property unknown is undefined."));
        });

        it("does not change original value on changed property", function() {
            var original = new TestObject(),
                copy = original.set("property", "value");

            expect(original.property).toBeNull();
            expect(copy.get("property")).toEqual("value");
        });

        it("does not change original value on changed property", function() {
            var original = new TestObject(),
                copy;

            original = original.set("property", "value");
            copy = original.set("property", "new value");

            expect(original.get("property")).toEqual("value");
            expect(copy.get("property")).toEqual("new value");
        });

        it("init sets all passed properties", function() {
            var valueObject = new TestObject({
                    property: "value"
                });

            expect(valueObject.get("property")).toEqual("value");
        });

        it("fails on init on unknown property", function() {
            expect(function () {
                var valueObject = new TestObject({
                    unknown: "value"
                });
                // This line is just to make JSHint happy, should never
                // actually be executed:
                valueObject.get("property");
            }).toThrow(new Error("Property unknown is undefined."));
        });

        it("extracts a clean value object", function() {
            var valueObject = new TestObject({
                property: "value"
            });

            expect(valueObject.values()).toEqual({property: "value", secondProperty: null});
        });
    });
});
