var ModuleTestWMJSZip = (function(global) {

var _runOnNode = "process" in global;
var _runOnWorker = "WorkerLocation" in global;
var _runOnBrowser = "document" in global;

return new Test("WMJSZip", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       false,
        button:     true,
        both:       true, // test the primary module and secondary module
    }).add([
        test_WMJSZip,
    ]).run().clone();

function test_WMJSZip(test, pass, miss) {
     var zipObj = new WMJSZip();
     var expected = "R0lGODdhBQAFAIACAAAAAP/eACwAAAAABQAFAAACCIwPkWerClIBADs="
     zipObj.file("smile.gif", expected, {base64: true});
     var base64 = zipObj.generate({DEFLATE: "DEFLATE"});
     var arraybuffer = zipObj.load(base64, {base64: true}).file("smile.gif").asArrayBuffer();
     var reader = new FileReader();
     reader.readAsDataURL(new Blob([arraybuffer], {mimeType:"image/gif"}));
     reader.onloadend = function(ev){
        var actuary = reader.result.replace(/data\:\;base64\,(.+)/, "$1");
        console.log(actuary, expected);
        if (actuary === expected) {
            test.done(pass());
        } else {
            test.done(miss());
        }
     }
}

})((this || 0).self || global);
