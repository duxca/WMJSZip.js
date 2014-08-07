var ModuleTestWebModule.Zip = (function(global) {

var _runOnNode = "process" in global;
var _runOnWorker = "WorkerLocation" in global;
var _runOnBrowser = "document" in global;

return new Test("WebModule.Zip", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        button:     true,
        both:       true, // test the primary module and secondary module
    }).add([
        testWebModule.Zip_value,
        testWebModule.Zip_isNumber,
        testWebModule.Zip_isInteger,
    ]).run().clone();

function testWebModule.Zip_value(test, pass, miss) {

    var result = new WebModule.Zip(123.4).value();

    if (result === 123.4) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testWebModule.Zip_isNumber(test, pass, miss) {

    var result = [
            new WebModule.Zip(123.4).isNumber(),  // true
            new WebModule.Zip(123.0).isNumber()   // true
        ];

    if (!/false/.test(result.join())) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testWebModule.Zip_isInteger(test, pass, miss) {

    var result = [
           !new WebModule.Zip(123.4).isInteger(), // !false -> true
            new WebModule.Zip(123.0).isInteger()  // true
        ];

    if (!/false/.test(result.join())) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

})((this || 0).self || global);

