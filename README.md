# WMJSZip.js [![Build Status](https://api.travis-ci.org/legokichi/WMJSZip.js.png)](http://travis-ci.org/legokichi/WMJSZip.js)

[![npm](https://nodei.co/npm/legokichi.wmjszip.js.png?downloads=true&stars=true)](https://nodei.co/npm/legokichi.wmjszip.js/)

[JSZip](http://stuk.github.io/jszip/) wrapper for WebModule.

## Document

- [WebModule.JSZip.js wiki](https://github.com/legokichi/WMJSZip.js/wiki/WMJSZip)
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [WebModule](https://github.com/uupaa/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))


## How to use

### Browser

```js
<script src="lib/WMJSZip.js">
<script>
console.log( WMJSZip );
</script>
```

### WebWorkers

```js
importScripts("lib/WMJSZip.js");

console.log( WMJSZip );
```

### Node.js

```js
var WMJSZip = require("lib/WMJSZip.js");

console.log( WMJSZip );
```
