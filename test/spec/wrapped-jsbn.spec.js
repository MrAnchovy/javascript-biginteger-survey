

if (Container === undefined) {
    var Container = {
        classes: {}
    };
}

importWrappedJsbn(Container.classes);

describe("The wrapped jsbn class", function() {

    var BigJsbn = Container.classes.BigJsbn;
    var size = "10000"; // 10000, 100, 40, 20, 10

    beforeEach(function() {
    });

    it("can create a big integer with " + size + " decimal digits from a string", function() {
        var aString = data[size][0];
        var a = new BigJsbn(aString);
        expect(a.toString()).toBe(aString);
    });

    it("can add and subtract big integers with " + size + " decimal digits", function() {
        var aString = data[size][0];
        var a = new BigJsbn(aString);
        var b = new BigJsbn(data[size][1]);
        var c = new BigJsbn(data[size][2]);
        var x = a.add(b);
        var y = a.add(c);
        var z = b.add(c);
        x = x.add(y).subtract(z).subtract(a);
        expect(x.toString()).toBe(aString);
    });

    it("can multiply big integers with " + size + " decimal digits", function() {
        var aString = data[size][0];
        var a = new BigJsbn(aString);
        var b = new BigJsbn(data[size][1]);
        var x = a.multiply(b);
        var y = b.multiply(a);
        expect(x.toString()).toBe(y.toString());
    });

    it("can divide big integers with " + size + " decimal digits", function() {
        var aString = data[size][0];
        var a = new BigJsbn(aString);
        var b = new BigJsbn(data[size][1]);
        var x = a.multiply(b).add(new BigJsbn("654321"));
        var y = x.divmod(a);
        expect(y[0].toString()).toBe(b.toString());
        expect(y[1].toString()).toBe("654321");
    });
});

