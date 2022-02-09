// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background: #ffe600;\n    min-height: 100vh;\n}\n\n.skin {\n    position: relative;\n}\n\n@keyframes wave {\n    0% {transform: rotate(15deg);}\n    100% {transform: rotate(-15deg);}\n}\n\n.nose {\n    width: 0px;\n    height: 0px;\n    border: 16px solid black;\n    border-color: black transparent transparent;\n    margin-left: -16px;\n    border-radius: 50%;\n    position: relative;\n    left: 50%;\n    margin-left: -16px;\n    top: -16px; \n    top: 145px;\n    animation: wave 1s infinite linear alternate;\n}\n\n.eye {\n    position: absolute;\n    border: 2px solid black;\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    left: 50%;\n    margin-left: -25px;\n    top: 100px;\n    background: #2e2e2e;\n}\n\n.eye.left {\n    transform: translateX(-100px);\n}\n\n.eye.right {\n    transform: translateX(100px);\n}\n\n@keyframes eye {\n    0% {top: 2px; left: 4px;}\n    12.5% {top:1px; left: 6px;}\n    25% {top: 0px; left: 8px;}\n    37.5% {top: -1px; left: 10px;}\n    50% {top: -2px; left: 12px;}\n    62.5% {top: -1px; left: 14px;}\n    75% {top: 0px; left: 16px;}\n    87.5% {top: 1px;left: 18px;}\n    100% {top: 2px;left: 20px;}\n}\n\n.eye::after {\n    content: '';\n    display: block;\n    border: 2px solid black;\n    border-radius: 50%;\n    width: 18px;\n    height: 18px;\n    background: white;\n    position: absolute;\n    top: 2px;\n    left: 4px;\n    animation: 1s eye infinite alternate;\n}\n\n.mouth {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    top: 170px;\n}\n\n.mouth .up .lip {\n    position: absolute;\n    border: 2px solid black;\n    width: 80px;\n    height: 26px;\n    top: -2px;\n    left: 50%;\n    border-top: none;\n    margin-left: -40px;\n    background: #ffe600;\n    z-index: 5;\n}\n\n.mouth .up .lip.left {\n    position: absolute;\n    border-bottom-left-radius: 40px 25px;\n    border-right: none;\n    transform: translate(-51%) rotate(-18deg);\n}\n\n.mouth .up .lip.right {\n    position: absolute;\n    border-bottom-right-radius: 40px 25px;\n    border-left: none;\n    transform: translate(51%) rotate(18deg);\n}\n\n.mouth .down {\n    position: absolute;\n    height: 120px;\n    width: 100%;\n    overflow: hidden;\n    top: 1px;\n}\n\n.mouth .down .yuan1 {\n    position: absolute;\n    height: 600px;\n    width: 100px;\n    bottom: 0;\n    left: 50%;\n    margin-left: -50px;\n    border: 2px solid black;\n    border-radius: 300px/900px;\n    background-color: #990513;\n    overflow: hidden;\n}\n\n.mouth .up::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    width: 10px;\n    height: 10px;\n    left: 50%;\n    margin-left: -5px;\n    background: #ffe600;\n    z-index: 6;\n}\n\n@keyframes down {\n    0% {height: 120px;}\n    100% {height: 0;}\n}\n\n.mouth:hover>.down {\n    animation: 1s down alternate forwards;\n}\n\n.mouth .down .yuan2 {\n    position: absolute;\n    bottom: -218px;\n    width: 120px;\n    height: 300px;\n    z-index: 2;\n    left: 50%;\n    margin-left: -60px;\n    border-radius: 220px;\n    background: #fc4a62;\n}\n\n.face {\n    width: 68px;\n    height: 68px;\n    border: 2px solid black;\n    position: absolute;\n    top: 200px;\n    left: 50%;\n    border-radius: 50%;\n    margin-left: -34px;\n    background: #fc0d1c;\n}\n\n.face.left {\n    transform: translateX(-150px);\n}\n\n.face.right {\n    transform: translateX(150px)\n}\n";
var n = 0;
demo.innerHTML = string.substring(0, n);
demo2.innerText = string.substring(0, n);
var id = setInterval(function () {
  n++;

  if (n > string.length) {
    window.clearInterval(id);
  }

  demo.innerHTML = string.substring(0, n);
  demo2.innerText = string.substring(0, n);
  demo2.scrollTop = demo2.scrollHeight;
}, 0);
},{}],"C:/Users/Huerf/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61823" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Huerf/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map