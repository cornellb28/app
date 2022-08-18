/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/balanced-match/index.js":
/*!**********************************************!*\
  !*** ./node_modules/balanced-match/index.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = balanced;

function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);
  var r = range(a, b, str);
  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;

function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    if (a === b) {
      return [ai, bi];
    }

    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [begs.pop(), bi];
      } else {
        beg = begs.pop();

        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [left, right];
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/electron-squirrel-startup/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/electron-squirrel-startup/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(/*! path */ "path");

var spawn = (__webpack_require__(/*! child_process */ "child_process").spawn);

var debug = __webpack_require__(/*! debug */ "./node_modules/electron-squirrel-startup/node_modules/debug/src/index.js")('electron-squirrel-startup');

var app = (__webpack_require__(/*! electron */ "electron").app);

var run = function (args, done) {
  var updateExe = path.resolve(path.dirname(process.execPath), '..', 'Update.exe');
  debug('Spawning `%s` with args `%s`', updateExe, args);
  spawn(updateExe, args, {
    detached: true
  }).on('close', done);
};

var check = function () {
  if (process.platform === 'win32') {
    var cmd = process.argv[1];
    debug('processing squirrel command `%s`', cmd);
    var target = path.basename(process.execPath);

    if (cmd === '--squirrel-install' || cmd === '--squirrel-updated') {
      run(['--createShortcut=' + target + ''], app.quit);
      return true;
    }

    if (cmd === '--squirrel-uninstall') {
      run(['--removeShortcut=' + target + ''], app.quit);
      return true;
    }

    if (cmd === '--squirrel-obsolete') {
      app.quit();
      return true;
    }
  }

  return false;
};

module.exports = check();

/***/ }),

/***/ "./node_modules/electron-squirrel-startup/node_modules/debug/src/browser.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/electron-squirrel-startup/node_modules/debug/src/browser.js ***!
  \**********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/electron-squirrel-startup/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/***/ }),

/***/ "./node_modules/electron-squirrel-startup/node_modules/debug/src/debug.js":
/*!********************************************************************************!*\
  !*** ./node_modules/electron-squirrel-startup/node_modules/debug/src/debug.js ***!
  \********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/electron-squirrel-startup/node_modules/ms/index.js");
/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];
/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};
/**
 * Previous log timestamp.
 */

var prevTime;
/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}
/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */


function createDebug(namespace) {
  function debug() {
    // disabled?
    if (!debug.enabled) return;
    var self = debug; // set `diff` timestamp

    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr; // turn the `arguments` into a proper Array

    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    } // apply any `formatters` transformations


    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];

      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

        args.splice(index, 1);
        index--;
      }

      return match;
    }); // apply env-specific formatting (colors, etc.)

    exports.formatArgs.call(self, args);
    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace); // env-specific initialization logic for debug instances

  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}
/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */


function enable(namespaces) {
  exports.save(namespaces);
  exports.names = [];
  exports.skips = [];
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings

    namespaces = split[i].replace(/\*/g, '.*?');

    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}
/**
 * Disable debug output.
 *
 * @api public
 */


function disable() {
  exports.enable('');
}
/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */


function enabled(name) {
  var i, len;

  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }

  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }

  return false;
}
/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */


function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),

/***/ "./node_modules/electron-squirrel-startup/node_modules/debug/src/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/electron-squirrel-startup/node_modules/debug/src/index.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */
if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = __webpack_require__(/*! ./browser.js */ "./node_modules/electron-squirrel-startup/node_modules/debug/src/browser.js");
} else {
  module.exports = __webpack_require__(/*! ./node.js */ "./node_modules/electron-squirrel-startup/node_modules/debug/src/node.js");
}

/***/ }),

/***/ "./node_modules/electron-squirrel-startup/node_modules/debug/src/node.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/electron-squirrel-startup/node_modules/debug/src/node.js ***!
  \*******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */
var tty = __webpack_require__(/*! tty */ "tty");

var util = __webpack_require__(/*! util */ "util");
/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */


exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/electron-squirrel-startup/node_modules/debug/src/debug.js");
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
    return k.toUpperCase();
  }); // coerce string value into JS value

  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;else if (/^(no|off|false|disabled)$/i.test(val)) val = false;else if (val === 'null') val = null;else val = Number(val);
  obj[prop] = val;
  return obj;
}, {});
/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function () {}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')();
}

var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
}
/**
 * Map %o to `util.inspect()`, all on a single line.
 */


exports.formatters.o = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts).split('\n').map(function (str) {
    return str.trim();
  }).join(' ');
};
/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */


exports.formatters.O = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';
    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = new Date().toUTCString() + ' ' + name + ' ' + args[0];
  }
}
/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */


function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  return process.env.DEBUG;
}
/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */


function createWritableStdioStream(fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap'); // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty'; // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726

      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }

      break;

    case 'FILE':
      var fs = __webpack_require__(/*! fs */ "fs");

      stream = new fs.SyncWriteStream(fd, {
        autoClose: false
      });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = __webpack_require__(/*! net */ "net");

      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      }); // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd

      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe'; // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726

      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }

      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  } // For supporting legacy API we put the FD here.


  stream.fd = fd;
  stream._isStdio = true;
  return stream;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */


function init(debug) {
  debug.inspectOpts = {};
  var keys = Object.keys(exports.inspectOpts);

  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}
/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */


exports.enable(load());

/***/ }),

/***/ "./node_modules/electron-squirrel-startup/node_modules/ms/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/electron-squirrel-startup/node_modules/ms/index.js ***!
  \*************************************************************************/
/***/ ((module) => {

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, n, name) {
  if (ms < n) {
    return;
  }

  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }

  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),

/***/ "./node_modules/fs.realpath/index.js":
/*!*******************************************!*\
  !*** ./node_modules/fs.realpath/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = realpath;
realpath.realpath = realpath;
realpath.sync = realpathSync;
realpath.realpathSync = realpathSync;
realpath.monkeypatch = monkeypatch;
realpath.unmonkeypatch = unmonkeypatch;

var fs = __webpack_require__(/*! fs */ "fs");

var origRealpath = fs.realpath;
var origRealpathSync = fs.realpathSync;
var version = process.version;
var ok = /^v[0-5]\./.test(version);

var old = __webpack_require__(/*! ./old.js */ "./node_modules/fs.realpath/old.js");

function newError(er) {
  return er && er.syscall === 'realpath' && (er.code === 'ELOOP' || er.code === 'ENOMEM' || er.code === 'ENAMETOOLONG');
}

function realpath(p, cache, cb) {
  if (ok) {
    return origRealpath(p, cache, cb);
  }

  if (typeof cache === 'function') {
    cb = cache;
    cache = null;
  }

  origRealpath(p, cache, function (er, result) {
    if (newError(er)) {
      old.realpath(p, cache, cb);
    } else {
      cb(er, result);
    }
  });
}

function realpathSync(p, cache) {
  if (ok) {
    return origRealpathSync(p, cache);
  }

  try {
    return origRealpathSync(p, cache);
  } catch (er) {
    if (newError(er)) {
      return old.realpathSync(p, cache);
    } else {
      throw er;
    }
  }
}

function monkeypatch() {
  fs.realpath = realpath;
  fs.realpathSync = realpathSync;
}

function unmonkeypatch() {
  fs.realpath = origRealpath;
  fs.realpathSync = origRealpathSync;
}

/***/ }),

/***/ "./node_modules/fs.realpath/old.js":
/*!*****************************************!*\
  !*** ./node_modules/fs.realpath/old.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var pathModule = __webpack_require__(/*! path */ "path");

var isWindows = process.platform === 'win32';

var fs = __webpack_require__(/*! fs */ "fs"); // JavaScript implementation of realpath, ported from node pre-v6


var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);

function rethrow() {
  // Only enable in debug mode. A backtrace uses ~1000 bytes of heap space and
  // is fairly slow to generate.
  var callback;

  if (DEBUG) {
    var backtrace = new Error();
    callback = debugCallback;
  } else callback = missingCallback;

  return callback;

  function debugCallback(err) {
    if (err) {
      backtrace.message = err.message;
      err = backtrace;
      missingCallback(err);
    }
  }

  function missingCallback(err) {
    if (err) {
      if (process.throwDeprecation) throw err; // Forgot a callback but don't know where? Use NODE_DEBUG=fs
      else if (!process.noDeprecation) {
        var msg = 'fs: missing callback ' + (err.stack || err.message);
        if (process.traceDeprecation) console.trace(msg);else console.error(msg);
      }
    }
  }
}

function maybeCallback(cb) {
  return typeof cb === 'function' ? cb : rethrow();
}

var normalize = pathModule.normalize; // Regexp that finds the next partion of a (partial) path
// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']

if (isWindows) {
  var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
} else {
  var nextPartRe = /(.*?)(?:[\/]+|$)/g;
} // Regex to find the device root, including trailing slash. E.g. 'c:\\'.


if (isWindows) {
  var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
} else {
  var splitRootRe = /^[\/]*/;
}

exports.realpathSync = function realpathSync(p, cache) {
  // make p is absolute
  p = pathModule.resolve(p);

  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
    return cache[p];
  }

  var original = p,
      seenLinks = {},
      knownHard = {}; // current character position in p

  var pos; // the partial path so far, including a trailing slash if any

  var current; // the partial path without a trailing slash (except when pointing at a root)

  var base; // the partial path scanned in the previous round, with slash

  var previous;
  start();

  function start() {
    // Skip over roots
    var m = splitRootRe.exec(p);
    pos = m[0].length;
    current = m[0];
    base = m[0];
    previous = ''; // On windows, check that the root exists. On unix there is no need.

    if (isWindows && !knownHard[base]) {
      fs.lstatSync(base);
      knownHard[base] = true;
    }
  } // walk down the path, swapping out linked pathparts for their real
  // values
  // NB: p.length changes.


  while (pos < p.length) {
    // find the next part
    nextPartRe.lastIndex = pos;
    var result = nextPartRe.exec(p);
    previous = current;
    current += result[0];
    base = previous + result[1];
    pos = nextPartRe.lastIndex; // continue if not a symlink

    if (knownHard[base] || cache && cache[base] === base) {
      continue;
    }

    var resolvedLink;

    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
      // some known symbolic link.  no need to stat again.
      resolvedLink = cache[base];
    } else {
      var stat = fs.lstatSync(base);

      if (!stat.isSymbolicLink()) {
        knownHard[base] = true;
        if (cache) cache[base] = base;
        continue;
      } // read the link if it wasn't read before
      // dev/ino always return 0 on windows, so skip the check.


      var linkTarget = null;

      if (!isWindows) {
        var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);

        if (seenLinks.hasOwnProperty(id)) {
          linkTarget = seenLinks[id];
        }
      }

      if (linkTarget === null) {
        fs.statSync(base);
        linkTarget = fs.readlinkSync(base);
      }

      resolvedLink = pathModule.resolve(previous, linkTarget); // track this, if given a cache.

      if (cache) cache[base] = resolvedLink;
      if (!isWindows) seenLinks[id] = linkTarget;
    } // resolve the link, then start over


    p = pathModule.resolve(resolvedLink, p.slice(pos));
    start();
  }

  if (cache) cache[original] = p;
  return p;
};

exports.realpath = function realpath(p, cache, cb) {
  if (typeof cb !== 'function') {
    cb = maybeCallback(cache);
    cache = null;
  } // make p is absolute


  p = pathModule.resolve(p);

  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
    return process.nextTick(cb.bind(null, null, cache[p]));
  }

  var original = p,
      seenLinks = {},
      knownHard = {}; // current character position in p

  var pos; // the partial path so far, including a trailing slash if any

  var current; // the partial path without a trailing slash (except when pointing at a root)

  var base; // the partial path scanned in the previous round, with slash

  var previous;
  start();

  function start() {
    // Skip over roots
    var m = splitRootRe.exec(p);
    pos = m[0].length;
    current = m[0];
    base = m[0];
    previous = ''; // On windows, check that the root exists. On unix there is no need.

    if (isWindows && !knownHard[base]) {
      fs.lstat(base, function (err) {
        if (err) return cb(err);
        knownHard[base] = true;
        LOOP();
      });
    } else {
      process.nextTick(LOOP);
    }
  } // walk down the path, swapping out linked pathparts for their real
  // values


  function LOOP() {
    // stop if scanned past end of path
    if (pos >= p.length) {
      if (cache) cache[original] = p;
      return cb(null, p);
    } // find the next part


    nextPartRe.lastIndex = pos;
    var result = nextPartRe.exec(p);
    previous = current;
    current += result[0];
    base = previous + result[1];
    pos = nextPartRe.lastIndex; // continue if not a symlink

    if (knownHard[base] || cache && cache[base] === base) {
      return process.nextTick(LOOP);
    }

    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
      // known symbolic link.  no need to stat again.
      return gotResolvedLink(cache[base]);
    }

    return fs.lstat(base, gotStat);
  }

  function gotStat(err, stat) {
    if (err) return cb(err); // if not a symlink, skip to the next path part

    if (!stat.isSymbolicLink()) {
      knownHard[base] = true;
      if (cache) cache[base] = base;
      return process.nextTick(LOOP);
    } // stat & read the link if not read before
    // call gotTarget as soon as the link target is known
    // dev/ino always return 0 on windows, so skip the check.


    if (!isWindows) {
      var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);

      if (seenLinks.hasOwnProperty(id)) {
        return gotTarget(null, seenLinks[id], base);
      }
    }

    fs.stat(base, function (err) {
      if (err) return cb(err);
      fs.readlink(base, function (err, target) {
        if (!isWindows) seenLinks[id] = target;
        gotTarget(err, target);
      });
    });
  }

  function gotTarget(err, target, base) {
    if (err) return cb(err);
    var resolvedLink = pathModule.resolve(previous, target);
    if (cache) cache[base] = resolvedLink;
    gotResolvedLink(resolvedLink);
  }

  function gotResolvedLink(resolvedLink) {
    // resolve the link, then start over
    p = pathModule.resolve(resolvedLink, p.slice(pos));
    start();
  }
};

/***/ }),

/***/ "./node_modules/glob/common.js":
/*!*************************************!*\
  !*** ./node_modules/glob/common.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.setopts = setopts;
exports.ownProp = ownProp;
exports.makeAbs = makeAbs;
exports.finish = finish;
exports.mark = mark;
exports.isIgnored = isIgnored;
exports.childrenIgnored = childrenIgnored;

function ownProp(obj, field) {
  return Object.prototype.hasOwnProperty.call(obj, field);
}

var fs = __webpack_require__(/*! fs */ "fs");

var path = __webpack_require__(/*! path */ "path");

var minimatch = __webpack_require__(/*! minimatch */ "./node_modules/glob/node_modules/minimatch/minimatch.js");

var isAbsolute = (__webpack_require__(/*! path */ "path").isAbsolute);

var Minimatch = minimatch.Minimatch;

function alphasort(a, b) {
  return a.localeCompare(b, 'en');
}

function setupIgnores(self, options) {
  self.ignore = options.ignore || [];
  if (!Array.isArray(self.ignore)) self.ignore = [self.ignore];

  if (self.ignore.length) {
    self.ignore = self.ignore.map(ignoreMap);
  }
} // ignore patterns are always in dot:true mode.


function ignoreMap(pattern) {
  var gmatcher = null;

  if (pattern.slice(-3) === '/**') {
    var gpattern = pattern.replace(/(\/\*\*)+$/, '');
    gmatcher = new Minimatch(gpattern, {
      dot: true
    });
  }

  return {
    matcher: new Minimatch(pattern, {
      dot: true
    }),
    gmatcher: gmatcher
  };
}

function setopts(self, pattern, options) {
  if (!options) options = {}; // base-matching: just use globstar for that.

  if (options.matchBase && -1 === pattern.indexOf("/")) {
    if (options.noglobstar) {
      throw new Error("base matching requires globstar");
    }

    pattern = "**/" + pattern;
  }

  self.silent = !!options.silent;
  self.pattern = pattern;
  self.strict = options.strict !== false;
  self.realpath = !!options.realpath;
  self.realpathCache = options.realpathCache || Object.create(null);
  self.follow = !!options.follow;
  self.dot = !!options.dot;
  self.mark = !!options.mark;
  self.nodir = !!options.nodir;
  if (self.nodir) self.mark = true;
  self.sync = !!options.sync;
  self.nounique = !!options.nounique;
  self.nonull = !!options.nonull;
  self.nosort = !!options.nosort;
  self.nocase = !!options.nocase;
  self.stat = !!options.stat;
  self.noprocess = !!options.noprocess;
  self.absolute = !!options.absolute;
  self.fs = options.fs || fs;
  self.maxLength = options.maxLength || Infinity;
  self.cache = options.cache || Object.create(null);
  self.statCache = options.statCache || Object.create(null);
  self.symlinks = options.symlinks || Object.create(null);
  setupIgnores(self, options);
  self.changedCwd = false;
  var cwd = process.cwd();
  if (!ownProp(options, "cwd")) self.cwd = path.resolve(cwd);else {
    self.cwd = path.resolve(options.cwd);
    self.changedCwd = self.cwd !== cwd;
  }
  self.root = options.root || path.resolve(self.cwd, "/");
  self.root = path.resolve(self.root); // TODO: is an absolute `cwd` supposed to be resolved against `root`?
  // e.g. { cwd: '/test', root: __dirname } === path.join(__dirname, '/test')

  self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd);
  self.nomount = !!options.nomount;

  if (process.platform === "win32") {
    self.root = self.root.replace(/\\/g, "/");
    self.cwd = self.cwd.replace(/\\/g, "/");
    self.cwdAbs = self.cwdAbs.replace(/\\/g, "/");
  } // disable comments and negation in Minimatch.
  // Note that they are not supported in Glob itself anyway.


  options.nonegate = true;
  options.nocomment = true; // always treat \ in patterns as escapes, not path separators

  options.allowWindowsEscape = true;
  self.minimatch = new Minimatch(pattern, options);
  self.options = self.minimatch.options;
}

function finish(self) {
  var nou = self.nounique;
  var all = nou ? [] : Object.create(null);

  for (var i = 0, l = self.matches.length; i < l; i++) {
    var matches = self.matches[i];

    if (!matches || Object.keys(matches).length === 0) {
      if (self.nonull) {
        // do like the shell, and spit out the literal glob
        var literal = self.minimatch.globSet[i];
        if (nou) all.push(literal);else all[literal] = true;
      }
    } else {
      // had matches
      var m = Object.keys(matches);
      if (nou) all.push.apply(all, m);else m.forEach(function (m) {
        all[m] = true;
      });
    }
  }

  if (!nou) all = Object.keys(all);
  if (!self.nosort) all = all.sort(alphasort); // at *some* point we statted all of these

  if (self.mark) {
    for (var i = 0; i < all.length; i++) {
      all[i] = self._mark(all[i]);
    }

    if (self.nodir) {
      all = all.filter(function (e) {
        var notDir = !/\/$/.test(e);
        var c = self.cache[e] || self.cache[makeAbs(self, e)];
        if (notDir && c) notDir = c !== 'DIR' && !Array.isArray(c);
        return notDir;
      });
    }
  }

  if (self.ignore.length) all = all.filter(function (m) {
    return !isIgnored(self, m);
  });
  self.found = all;
}

function mark(self, p) {
  var abs = makeAbs(self, p);
  var c = self.cache[abs];
  var m = p;

  if (c) {
    var isDir = c === 'DIR' || Array.isArray(c);
    var slash = p.slice(-1) === '/';
    if (isDir && !slash) m += '/';else if (!isDir && slash) m = m.slice(0, -1);

    if (m !== p) {
      var mabs = makeAbs(self, m);
      self.statCache[mabs] = self.statCache[abs];
      self.cache[mabs] = self.cache[abs];
    }
  }

  return m;
} // lotta situps...


function makeAbs(self, f) {
  var abs = f;

  if (f.charAt(0) === '/') {
    abs = path.join(self.root, f);
  } else if (isAbsolute(f) || f === '') {
    abs = f;
  } else if (self.changedCwd) {
    abs = path.resolve(self.cwd, f);
  } else {
    abs = path.resolve(f);
  }

  if (process.platform === 'win32') abs = abs.replace(/\\/g, '/');
  return abs;
} // Return true, if pattern ends with globstar '**', for the accompanying parent directory.
// Ex:- If node_modules/** is the pattern, add 'node_modules' to ignore list along with it's contents


function isIgnored(self, path) {
  if (!self.ignore.length) return false;
  return self.ignore.some(function (item) {
    return item.matcher.match(path) || !!(item.gmatcher && item.gmatcher.match(path));
  });
}

function childrenIgnored(self, path) {
  if (!self.ignore.length) return false;
  return self.ignore.some(function (item) {
    return !!(item.gmatcher && item.gmatcher.match(path));
  });
}

/***/ }),

/***/ "./node_modules/glob/glob.js":
/*!***********************************!*\
  !*** ./node_modules/glob/glob.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Approach:
//
// 1. Get the minimatch set
// 2. For each pattern in the set, PROCESS(pattern, false)
// 3. Store matches per-set, then uniq them
//
// PROCESS(pattern, inGlobStar)
// Get the first [n] items from pattern that are all strings
// Join these together.  This is PREFIX.
//   If there is no more remaining, then stat(PREFIX) and
//   add to matches if it succeeds.  END.
//
// If inGlobStar and PREFIX is symlink and points to dir
//   set ENTRIES = []
// else readdir(PREFIX) as ENTRIES
//   If fail, END
//
// with ENTRIES
//   If pattern[n] is GLOBSTAR
//     // handle the case where the globstar match is empty
//     // by pruning it out, and testing the resulting pattern
//     PROCESS(pattern[0..n] + pattern[n+1 .. $], false)
//     // handle other cases.
//     for ENTRY in ENTRIES (not dotfiles)
//       // attach globstar + tail onto the entry
//       // Mark that this entry is a globstar match
//       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $], true)
//
//   else // not globstar
//     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
//       Test ENTRY against pattern[n]
//       If fails, continue
//       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
//
// Caveat:
//   Cache all stats and readdirs results to minimize syscall.  Since all
//   we ever care about is existence and directory-ness, we can just keep
//   `true` for files, and [children,...] for directories, or `false` for
//   things that don't exist.
module.exports = glob;

var rp = __webpack_require__(/*! fs.realpath */ "./node_modules/fs.realpath/index.js");

var minimatch = __webpack_require__(/*! minimatch */ "./node_modules/glob/node_modules/minimatch/minimatch.js");

var Minimatch = minimatch.Minimatch;

var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits.js");

var EE = (__webpack_require__(/*! events */ "events").EventEmitter);

var path = __webpack_require__(/*! path */ "path");

var assert = __webpack_require__(/*! assert */ "assert");

var isAbsolute = (__webpack_require__(/*! path */ "path").isAbsolute);

var globSync = __webpack_require__(/*! ./sync.js */ "./node_modules/glob/sync.js");

var common = __webpack_require__(/*! ./common.js */ "./node_modules/glob/common.js");

var setopts = common.setopts;
var ownProp = common.ownProp;

var inflight = __webpack_require__(/*! inflight */ "./node_modules/inflight/inflight.js");

var util = __webpack_require__(/*! util */ "util");

var childrenIgnored = common.childrenIgnored;
var isIgnored = common.isIgnored;

var once = __webpack_require__(/*! once */ "./node_modules/once/once.js");

function glob(pattern, options, cb) {
  if (typeof options === 'function') cb = options, options = {};
  if (!options) options = {};

  if (options.sync) {
    if (cb) throw new TypeError('callback provided to sync glob');
    return globSync(pattern, options);
  }

  return new Glob(pattern, options, cb);
}

glob.sync = globSync;
var GlobSync = glob.GlobSync = globSync.GlobSync; // old api surface

glob.glob = glob;

function extend(origin, add) {
  if (add === null || typeof add !== 'object') {
    return origin;
  }

  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
}

glob.hasMagic = function (pattern, options_) {
  var options = extend({}, options_);
  options.noprocess = true;
  var g = new Glob(pattern, options);
  var set = g.minimatch.set;
  if (!pattern) return false;
  if (set.length > 1) return true;

  for (var j = 0; j < set[0].length; j++) {
    if (typeof set[0][j] !== 'string') return true;
  }

  return false;
};

glob.Glob = Glob;
inherits(Glob, EE);

function Glob(pattern, options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = null;
  }

  if (options && options.sync) {
    if (cb) throw new TypeError('callback provided to sync glob');
    return new GlobSync(pattern, options);
  }

  if (!(this instanceof Glob)) return new Glob(pattern, options, cb);
  setopts(this, pattern, options);
  this._didRealPath = false; // process each pattern in the minimatch set

  var n = this.minimatch.set.length; // The matches are stored as {<filename>: true,...} so that
  // duplicates are automagically pruned.
  // Later, we do an Object.keys() on these.
  // Keep them as a list so we can fill in when nonull is set.

  this.matches = new Array(n);

  if (typeof cb === 'function') {
    cb = once(cb);
    this.on('error', cb);
    this.on('end', function (matches) {
      cb(null, matches);
    });
  }

  var self = this;
  this._processing = 0;
  this._emitQueue = [];
  this._processQueue = [];
  this.paused = false;
  if (this.noprocess) return this;
  if (n === 0) return done();
  var sync = true;

  for (var i = 0; i < n; i++) {
    this._process(this.minimatch.set[i], i, false, done);
  }

  sync = false;

  function done() {
    --self._processing;

    if (self._processing <= 0) {
      if (sync) {
        process.nextTick(function () {
          self._finish();
        });
      } else {
        self._finish();
      }
    }
  }
}

Glob.prototype._finish = function () {
  assert(this instanceof Glob);
  if (this.aborted) return;
  if (this.realpath && !this._didRealpath) return this._realpath();
  common.finish(this);
  this.emit('end', this.found);
};

Glob.prototype._realpath = function () {
  if (this._didRealpath) return;
  this._didRealpath = true;
  var n = this.matches.length;
  if (n === 0) return this._finish();
  var self = this;

  for (var i = 0; i < this.matches.length; i++) this._realpathSet(i, next);

  function next() {
    if (--n === 0) self._finish();
  }
};

Glob.prototype._realpathSet = function (index, cb) {
  var matchset = this.matches[index];
  if (!matchset) return cb();
  var found = Object.keys(matchset);
  var self = this;
  var n = found.length;
  if (n === 0) return cb();
  var set = this.matches[index] = Object.create(null);
  found.forEach(function (p, i) {
    // If there's a problem with the stat, then it means that
    // one or more of the links in the realpath couldn't be
    // resolved.  just return the abs value in that case.
    p = self._makeAbs(p);
    rp.realpath(p, self.realpathCache, function (er, real) {
      if (!er) set[real] = true;else if (er.syscall === 'stat') set[p] = true;else self.emit('error', er); // srsly wtf right here

      if (--n === 0) {
        self.matches[index] = set;
        cb();
      }
    });
  });
};

Glob.prototype._mark = function (p) {
  return common.mark(this, p);
};

Glob.prototype._makeAbs = function (f) {
  return common.makeAbs(this, f);
};

Glob.prototype.abort = function () {
  this.aborted = true;
  this.emit('abort');
};

Glob.prototype.pause = function () {
  if (!this.paused) {
    this.paused = true;
    this.emit('pause');
  }
};

Glob.prototype.resume = function () {
  if (this.paused) {
    this.emit('resume');
    this.paused = false;

    if (this._emitQueue.length) {
      var eq = this._emitQueue.slice(0);

      this._emitQueue.length = 0;

      for (var i = 0; i < eq.length; i++) {
        var e = eq[i];

        this._emitMatch(e[0], e[1]);
      }
    }

    if (this._processQueue.length) {
      var pq = this._processQueue.slice(0);

      this._processQueue.length = 0;

      for (var i = 0; i < pq.length; i++) {
        var p = pq[i];
        this._processing--;

        this._process(p[0], p[1], p[2], p[3]);
      }
    }
  }
};

Glob.prototype._process = function (pattern, index, inGlobStar, cb) {
  assert(this instanceof Glob);
  assert(typeof cb === 'function');
  if (this.aborted) return;
  this._processing++;

  if (this.paused) {
    this._processQueue.push([pattern, index, inGlobStar, cb]);

    return;
  } //console.error('PROCESS %d', this._processing, pattern)
  // Get the first [n] parts of pattern that are all strings.


  var n = 0;

  while (typeof pattern[n] === 'string') {
    n++;
  } // now n is the index of the first one that is *not* a string.
  // see if there's anything else


  var prefix;

  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      this._processSimple(pattern.join('/'), index, cb);

      return;

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null;
      break;

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's 'absolute' like /foo/bar,
      // or 'relative' like '../baz'
      prefix = pattern.slice(0, n).join('/');
      break;
  }

  var remain = pattern.slice(n); // get the list of entries.

  var read;
  if (prefix === null) read = '.';else if (isAbsolute(prefix) || isAbsolute(pattern.map(function (p) {
    return typeof p === 'string' ? p : '[*]';
  }).join('/'))) {
    if (!prefix || !isAbsolute(prefix)) prefix = '/' + prefix;
    read = prefix;
  } else read = prefix;

  var abs = this._makeAbs(read); //if ignored, skip _processing


  if (childrenIgnored(this, read)) return cb();
  var isGlobStar = remain[0] === minimatch.GLOBSTAR;
  if (isGlobStar) this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb);else this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb);
};

Glob.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar, cb) {
  var self = this;

  this._readdir(abs, inGlobStar, function (er, entries) {
    return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
  });
};

Glob.prototype._processReaddir2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
  // if the abs isn't a dir, then nothing can match!
  if (!entries) return cb(); // It will only match dot entries if it starts with a dot, or if
  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.

  var pn = remain[0];
  var negate = !!this.minimatch.negate;
  var rawGlob = pn._glob;
  var dotOk = this.dot || rawGlob.charAt(0) === '.';
  var matchedEntries = [];

  for (var i = 0; i < entries.length; i++) {
    var e = entries[i];

    if (e.charAt(0) !== '.' || dotOk) {
      var m;

      if (negate && !prefix) {
        m = !e.match(pn);
      } else {
        m = e.match(pn);
      }

      if (m) matchedEntries.push(e);
    }
  } //console.error('prd2', prefix, entries, remain[0]._glob, matchedEntries)


  var len = matchedEntries.length; // If there are no matched entries, then nothing matches.

  if (len === 0) return cb(); // if this is the last remaining pattern bit, then no need for
  // an additional stat *unless* the user has specified mark or
  // stat explicitly.  We know they exist, since readdir returned
  // them.

  if (remain.length === 1 && !this.mark && !this.stat) {
    if (!this.matches[index]) this.matches[index] = Object.create(null);

    for (var i = 0; i < len; i++) {
      var e = matchedEntries[i];

      if (prefix) {
        if (prefix !== '/') e = prefix + '/' + e;else e = prefix + e;
      }

      if (e.charAt(0) === '/' && !this.nomount) {
        e = path.join(this.root, e);
      }

      this._emitMatch(index, e);
    } // This was the last one, and no stats were needed


    return cb();
  } // now test all matched entries as stand-ins for that part
  // of the pattern.


  remain.shift();

  for (var i = 0; i < len; i++) {
    var e = matchedEntries[i];
    var newPattern;

    if (prefix) {
      if (prefix !== '/') e = prefix + '/' + e;else e = prefix + e;
    }

    this._process([e].concat(remain), index, inGlobStar, cb);
  }

  cb();
};

Glob.prototype._emitMatch = function (index, e) {
  if (this.aborted) return;
  if (isIgnored(this, e)) return;

  if (this.paused) {
    this._emitQueue.push([index, e]);

    return;
  }

  var abs = isAbsolute(e) ? e : this._makeAbs(e);
  if (this.mark) e = this._mark(e);
  if (this.absolute) e = abs;
  if (this.matches[index][e]) return;

  if (this.nodir) {
    var c = this.cache[abs];
    if (c === 'DIR' || Array.isArray(c)) return;
  }

  this.matches[index][e] = true;
  var st = this.statCache[abs];
  if (st) this.emit('stat', e, st);
  this.emit('match', e);
};

Glob.prototype._readdirInGlobStar = function (abs, cb) {
  if (this.aborted) return; // follow all symlinked directories forever
  // just proceed as if this is a non-globstar situation

  if (this.follow) return this._readdir(abs, false, cb);
  var lstatkey = 'lstat\0' + abs;
  var self = this;
  var lstatcb = inflight(lstatkey, lstatcb_);
  if (lstatcb) self.fs.lstat(abs, lstatcb);

  function lstatcb_(er, lstat) {
    if (er && er.code === 'ENOENT') return cb();
    var isSym = lstat && lstat.isSymbolicLink();
    self.symlinks[abs] = isSym; // If it's not a symlink or a dir, then it's definitely a regular file.
    // don't bother doing a readdir in that case.

    if (!isSym && lstat && !lstat.isDirectory()) {
      self.cache[abs] = 'FILE';
      cb();
    } else self._readdir(abs, false, cb);
  }
};

Glob.prototype._readdir = function (abs, inGlobStar, cb) {
  if (this.aborted) return;
  cb = inflight('readdir\0' + abs + '\0' + inGlobStar, cb);
  if (!cb) return; //console.error('RD %j %j', +inGlobStar, abs)

  if (inGlobStar && !ownProp(this.symlinks, abs)) return this._readdirInGlobStar(abs, cb);

  if (ownProp(this.cache, abs)) {
    var c = this.cache[abs];
    if (!c || c === 'FILE') return cb();
    if (Array.isArray(c)) return cb(null, c);
  }

  var self = this;
  self.fs.readdir(abs, readdirCb(this, abs, cb));
};

function readdirCb(self, abs, cb) {
  return function (er, entries) {
    if (er) self._readdirError(abs, er, cb);else self._readdirEntries(abs, entries, cb);
  };
}

Glob.prototype._readdirEntries = function (abs, entries, cb) {
  if (this.aborted) return; // if we haven't asked to stat everything, then just
  // assume that everything in there exists, so we can avoid
  // having to stat it a second time.

  if (!this.mark && !this.stat) {
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      if (abs === '/') e = abs + e;else e = abs + '/' + e;
      this.cache[e] = true;
    }
  }

  this.cache[abs] = entries;
  return cb(null, entries);
};

Glob.prototype._readdirError = function (f, er, cb) {
  if (this.aborted) return; // handle errors, and cache the information

  switch (er.code) {
    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205

    case 'ENOTDIR':
      // totally normal. means it *does* exist.
      var abs = this._makeAbs(f);

      this.cache[abs] = 'FILE';

      if (abs === this.cwdAbs) {
        var error = new Error(er.code + ' invalid cwd ' + this.cwd);
        error.path = this.cwd;
        error.code = er.code;
        this.emit('error', error);
        this.abort();
      }

      break;

    case 'ENOENT': // not terribly unusual

    case 'ELOOP':
    case 'ENAMETOOLONG':
    case 'UNKNOWN':
      this.cache[this._makeAbs(f)] = false;
      break;

    default:
      // some unusual error.  Treat as failure.
      this.cache[this._makeAbs(f)] = false;

      if (this.strict) {
        this.emit('error', er); // If the error is handled, then we abort
        // if not, we threw out of here

        this.abort();
      }

      if (!this.silent) console.error('glob error', er);
      break;
  }

  return cb();
};

Glob.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar, cb) {
  var self = this;

  this._readdir(abs, inGlobStar, function (er, entries) {
    self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
  });
};

Glob.prototype._processGlobStar2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
  //console.error('pgs2', prefix, remain[0], entries)
  // no entries means not a dir, so it can never have matches
  // foo.txt/** doesn't match foo.txt
  if (!entries) return cb(); // test without the globstar, and with every child both below
  // and replacing the globstar.

  var remainWithoutGlobStar = remain.slice(1);
  var gspref = prefix ? [prefix] : [];
  var noGlobStar = gspref.concat(remainWithoutGlobStar); // the noGlobStar pattern exits the inGlobStar state

  this._process(noGlobStar, index, false, cb);

  var isSym = this.symlinks[abs];
  var len = entries.length; // If it's a symlink, and we're in a globstar, then stop

  if (isSym && inGlobStar) return cb();

  for (var i = 0; i < len; i++) {
    var e = entries[i];
    if (e.charAt(0) === '.' && !this.dot) continue; // these two cases enter the inGlobStar state

    var instead = gspref.concat(entries[i], remainWithoutGlobStar);

    this._process(instead, index, true, cb);

    var below = gspref.concat(entries[i], remain);

    this._process(below, index, true, cb);
  }

  cb();
};

Glob.prototype._processSimple = function (prefix, index, cb) {
  // XXX review this.  Shouldn't it be doing the mounting etc
  // before doing stat?  kinda weird?
  var self = this;

  this._stat(prefix, function (er, exists) {
    self._processSimple2(prefix, index, er, exists, cb);
  });
};

Glob.prototype._processSimple2 = function (prefix, index, er, exists, cb) {
  //console.error('ps2', prefix, exists)
  if (!this.matches[index]) this.matches[index] = Object.create(null); // If it doesn't exist, then just mark the lack of results

  if (!exists) return cb();

  if (prefix && isAbsolute(prefix) && !this.nomount) {
    var trail = /[\/\\]$/.test(prefix);

    if (prefix.charAt(0) === '/') {
      prefix = path.join(this.root, prefix);
    } else {
      prefix = path.resolve(this.root, prefix);
      if (trail) prefix += '/';
    }
  }

  if (process.platform === 'win32') prefix = prefix.replace(/\\/g, '/'); // Mark this as a match

  this._emitMatch(index, prefix);

  cb();
}; // Returns either 'DIR', 'FILE', or false


Glob.prototype._stat = function (f, cb) {
  var abs = this._makeAbs(f);

  var needDir = f.slice(-1) === '/';
  if (f.length > this.maxLength) return cb();

  if (!this.stat && ownProp(this.cache, abs)) {
    var c = this.cache[abs];
    if (Array.isArray(c)) c = 'DIR'; // It exists, but maybe not how we need it

    if (!needDir || c === 'DIR') return cb(null, c);
    if (needDir && c === 'FILE') return cb(); // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
  }

  var exists;
  var stat = this.statCache[abs];

  if (stat !== undefined) {
    if (stat === false) return cb(null, stat);else {
      var type = stat.isDirectory() ? 'DIR' : 'FILE';
      if (needDir && type === 'FILE') return cb();else return cb(null, type, stat);
    }
  }

  var self = this;
  var statcb = inflight('stat\0' + abs, lstatcb_);
  if (statcb) self.fs.lstat(abs, statcb);

  function lstatcb_(er, lstat) {
    if (lstat && lstat.isSymbolicLink()) {
      // If it's a symlink, then treat it as the target, unless
      // the target does not exist, then treat it as a file.
      return self.fs.stat(abs, function (er, stat) {
        if (er) self._stat2(f, abs, null, lstat, cb);else self._stat2(f, abs, er, stat, cb);
      });
    } else {
      self._stat2(f, abs, er, lstat, cb);
    }
  }
};

Glob.prototype._stat2 = function (f, abs, er, stat, cb) {
  if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
    this.statCache[abs] = false;
    return cb();
  }

  var needDir = f.slice(-1) === '/';
  this.statCache[abs] = stat;
  if (abs.slice(-1) === '/' && stat && !stat.isDirectory()) return cb(null, false, stat);
  var c = true;
  if (stat) c = stat.isDirectory() ? 'DIR' : 'FILE';
  this.cache[abs] = this.cache[abs] || c;
  if (needDir && c === 'FILE') return cb();
  return cb(null, c, stat);
};

/***/ }),

/***/ "./node_modules/glob/node_modules/brace-expansion/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/glob/node_modules/brace-expansion/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var balanced = __webpack_require__(/*! balanced-match */ "./node_modules/balanced-match/index.js");

module.exports = expandTop;
var escSlash = '\0SLASH' + Math.random() + '\0';
var escOpen = '\0OPEN' + Math.random() + '\0';
var escClose = '\0CLOSE' + Math.random() + '\0';
var escComma = '\0COMMA' + Math.random() + '\0';
var escPeriod = '\0PERIOD' + Math.random() + '\0';

function numeric(str) {
  return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash).split('\\{').join(escOpen).split('\\}').join(escClose).split('\\,').join(escComma).split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\').split(escOpen).join('{').split(escClose).join('}').split(escComma).join(',').split(escPeriod).join('.');
} // Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}


function parseCommaParts(str) {
  if (!str) return [''];
  var parts = [];
  var m = balanced('{', '}', str);
  if (!m) return str.split(',');
  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');
  p[p.length - 1] += '{' + body + '}';
  var postParts = parseCommaParts(post);

  if (post.length) {
    p[p.length - 1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);
  return parts;
}

function expandTop(str) {
  if (!str) return []; // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}

  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function embrace(str) {
  return '{' + str + '}';
}

function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}

function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];
  var m = balanced('{', '}', str);
  if (!m) return [str]; // no need to expand pre, since it is guaranteed to be free of brace-sets

  var pre = m.pre;
  var post = m.post.length ? expand(m.post, false) : [''];

  if (/\$$/.test(m.pre)) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + '{' + m.body + '}' + post[k];
      expansions.push(expansion);
    }
  } else {
    var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
    var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
    var isSequence = isNumericSequence || isAlphaSequence;
    var isOptions = m.body.indexOf(',') >= 0;

    if (!isSequence && !isOptions) {
      // {a},b}
      if (m.post.match(/,.*\}/)) {
        str = m.pre + '{' + m.body + escClose + m.post;
        return expand(str);
      }

      return [str];
    }

    var n;

    if (isSequence) {
      n = m.body.split(/\.\./);
    } else {
      n = parseCommaParts(m.body);

      if (n.length === 1) {
        // x{{a,b}}y ==> x{a}y x{b}y
        n = expand(n[0], false).map(embrace);

        if (n.length === 1) {
          return post.map(function (p) {
            return m.pre + n[0] + p;
          });
        }
      }
    } // at this point, n is the parts, and we know it's not a comma set
    // with a single entry.


    var N;

    if (isSequence) {
      var x = numeric(n[0]);
      var y = numeric(n[1]);
      var width = Math.max(n[0].length, n[1].length);
      var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
      var test = lte;
      var reverse = y < x;

      if (reverse) {
        incr *= -1;
        test = gte;
      }

      var pad = n.some(isPadded);
      N = [];

      for (var i = x; test(i, y); i += incr) {
        var c;

        if (isAlphaSequence) {
          c = String.fromCharCode(i);
          if (c === '\\') c = '';
        } else {
          c = String(i);

          if (pad) {
            var need = width - c.length;

            if (need > 0) {
              var z = new Array(need + 1).join('0');
              if (i < 0) c = '-' + z + c.slice(1);else c = z + c;
            }
          }
        }

        N.push(c);
      }
    } else {
      N = [];

      for (var j = 0; j < n.length; j++) {
        N.push.apply(N, expand(n[j], false));
      }
    }

    for (var j = 0; j < N.length; j++) {
      for (var k = 0; k < post.length; k++) {
        var expansion = pre + N[j] + post[k];
        if (!isTop || isSequence || expansion) expansions.push(expansion);
      }
    }
  }

  return expansions;
}

/***/ }),

/***/ "./node_modules/glob/node_modules/minimatch/lib/path.js":
/*!**************************************************************!*\
  !*** ./node_modules/glob/node_modules/minimatch/lib/path.js ***!
  \**************************************************************/
/***/ ((module) => {

const isWindows = typeof process === 'object' && process && process.platform === 'win32';
module.exports = isWindows ? {
  sep: '\\'
} : {
  sep: '/'
};

/***/ }),

/***/ "./node_modules/glob/node_modules/minimatch/minimatch.js":
/*!***************************************************************!*\
  !*** ./node_modules/glob/node_modules/minimatch/minimatch.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const minimatch = module.exports = (p, pattern, options = {}) => {
  assertValidPattern(pattern); // shortcut: comments match nothing.

  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false;
  }

  return new Minimatch(pattern, options).match(p);
};

module.exports = minimatch;

const path = __webpack_require__(/*! ./lib/path.js */ "./node_modules/glob/node_modules/minimatch/lib/path.js");

minimatch.sep = path.sep;
const GLOBSTAR = Symbol('globstar **');
minimatch.GLOBSTAR = GLOBSTAR;

const expand = __webpack_require__(/*! brace-expansion */ "./node_modules/glob/node_modules/brace-expansion/index.js");

const plTypes = {
  '!': {
    open: '(?:(?!(?:',
    close: '))[^/]*?)'
  },
  '?': {
    open: '(?:',
    close: ')?'
  },
  '+': {
    open: '(?:',
    close: ')+'
  },
  '*': {
    open: '(?:',
    close: ')*'
  },
  '@': {
    open: '(?:',
    close: ')'
  }
}; // any single thing other than /
// don't need to escape / when using new RegExp()

const qmark = '[^/]'; // * => any number of characters

const star = qmark + '*?'; // ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.

const twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'; // not a ^ or / followed by a dot,
// followed by anything, any number of times.

const twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'; // "abc" -> { a:true, b:true, c:true }

const charSet = s => s.split('').reduce((set, c) => {
  set[c] = true;
  return set;
}, {}); // characters that need to be escaped in RegExp.


const reSpecials = charSet('().*{}+?[]^$\\!'); // characters that indicate we have to add the pattern start

const addPatternStartSet = charSet('[.('); // normalizes slashes.

const slashSplit = /\/+/;

minimatch.filter = (pattern, options = {}) => (p, i, list) => minimatch(p, pattern, options);

const ext = (a, b = {}) => {
  const t = {};
  Object.keys(a).forEach(k => t[k] = a[k]);
  Object.keys(b).forEach(k => t[k] = b[k]);
  return t;
};

minimatch.defaults = def => {
  if (!def || typeof def !== 'object' || !Object.keys(def).length) {
    return minimatch;
  }

  const orig = minimatch;

  const m = (p, pattern, options) => orig(p, pattern, ext(def, options));

  m.Minimatch = class Minimatch extends orig.Minimatch {
    constructor(pattern, options) {
      super(pattern, ext(def, options));
    }

  };

  m.Minimatch.defaults = options => orig.defaults(ext(def, options)).Minimatch;

  m.filter = (pattern, options) => orig.filter(pattern, ext(def, options));

  m.defaults = options => orig.defaults(ext(def, options));

  m.makeRe = (pattern, options) => orig.makeRe(pattern, ext(def, options));

  m.braceExpand = (pattern, options) => orig.braceExpand(pattern, ext(def, options));

  m.match = (list, pattern, options) => orig.match(list, pattern, ext(def, options));

  return m;
}; // Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c


minimatch.braceExpand = (pattern, options) => braceExpand(pattern, options);

const braceExpand = (pattern, options = {}) => {
  assertValidPattern(pattern); // Thanks to Yeting Li <https://github.com/yetingli> for
  // improving this regexp to avoid a ReDOS vulnerability.

  if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
    // shortcut. no need to expand.
    return [pattern];
  }

  return expand(pattern);
};

const MAX_PATTERN_LENGTH = 1024 * 64;

const assertValidPattern = pattern => {
  if (typeof pattern !== 'string') {
    throw new TypeError('invalid pattern');
  }

  if (pattern.length > MAX_PATTERN_LENGTH) {
    throw new TypeError('pattern is too long');
  }
}; // parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.


const SUBPARSE = Symbol('subparse');

minimatch.makeRe = (pattern, options) => new Minimatch(pattern, options || {}).makeRe();

minimatch.match = (list, pattern, options = {}) => {
  const mm = new Minimatch(pattern, options);
  list = list.filter(f => mm.match(f));

  if (mm.options.nonull && !list.length) {
    list.push(pattern);
  }

  return list;
}; // replace stuff like \* with *


const globUnescape = s => s.replace(/\\(.)/g, '$1');

const regExpEscape = s => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

class Minimatch {
  constructor(pattern, options) {
    assertValidPattern(pattern);
    if (!options) options = {};
    this.options = options;
    this.set = [];
    this.pattern = pattern;
    this.windowsPathsNoEscape = !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;

    if (this.windowsPathsNoEscape) {
      this.pattern = this.pattern.replace(/\\/g, '/');
    }

    this.regexp = null;
    this.negate = false;
    this.comment = false;
    this.empty = false;
    this.partial = !!options.partial; // make the set of regexps etc.

    this.make();
  }

  debug() {}

  make() {
    const pattern = this.pattern;
    const options = this.options; // empty patterns and comments match nothing.

    if (!options.nocomment && pattern.charAt(0) === '#') {
      this.comment = true;
      return;
    }

    if (!pattern) {
      this.empty = true;
      return;
    } // step 1: figure out negation, etc.


    this.parseNegate(); // step 2: expand braces

    let set = this.globSet = this.braceExpand();
    if (options.debug) this.debug = (...args) => console.error(...args);
    this.debug(this.pattern, set); // step 3: now we have a set, so turn each one into a series of path-portion
    // matching patterns.
    // These will be regexps, except in the case of "**", which is
    // set to the GLOBSTAR object for globstar behavior,
    // and will not contain any / characters

    set = this.globParts = set.map(s => s.split(slashSplit));
    this.debug(this.pattern, set); // glob --> regexps

    set = set.map((s, si, set) => s.map(this.parse, this));
    this.debug(this.pattern, set); // filter out everything that didn't compile properly.

    set = set.filter(s => s.indexOf(false) === -1);
    this.debug(this.pattern, set);
    this.set = set;
  }

  parseNegate() {
    if (this.options.nonegate) return;
    const pattern = this.pattern;
    let negate = false;
    let negateOffset = 0;

    for (let i = 0; i < pattern.length && pattern.charAt(i) === '!'; i++) {
      negate = !negate;
      negateOffset++;
    }

    if (negateOffset) this.pattern = pattern.substr(negateOffset);
    this.negate = negate;
  } // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.


  matchOne(file, pattern, partial) {
    var options = this.options;
    this.debug('matchOne', {
      'this': this,
      file: file,
      pattern: pattern
    });
    this.debug('matchOne', file.length, pattern.length);

    for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
      this.debug('matchOne loop');
      var p = pattern[pi];
      var f = file[fi];
      this.debug(pattern, p, f); // should be impossible.
      // some invalid regexp stuff in the set.

      /* istanbul ignore if */

      if (p === false) return false;

      if (p === GLOBSTAR) {
        this.debug('GLOBSTAR', [pattern, p, f]); // "**"
        // a/**/b/**/c would match the following:
        // a/b/x/y/z/c
        // a/x/y/z/b/c
        // a/b/x/b/x/c
        // a/b/c
        // To do this, take the rest of the pattern after
        // the **, and see if it would match the file remainder.
        // If so, return success.
        // If not, the ** "swallows" a segment, and try again.
        // This is recursively awful.
        //
        // a/**/b/**/c matching a/b/x/y/z/c
        // - a matches a
        // - doublestar
        //   - matchOne(b/x/y/z/c, b/**/c)
        //     - b matches b
        //     - doublestar
        //       - matchOne(x/y/z/c, c) -> no
        //       - matchOne(y/z/c, c) -> no
        //       - matchOne(z/c, c) -> no
        //       - matchOne(c, c) yes, hit

        var fr = fi;
        var pr = pi + 1;

        if (pr === pl) {
          this.debug('** at the end'); // a ** at the end will just swallow the rest.
          // We have found a match.
          // however, it will not swallow /.x, unless
          // options.dot is set.
          // . and .. are *never* matched by **, for explosively
          // exponential reasons.

          for (; fi < fl; fi++) {
            if (file[fi] === '.' || file[fi] === '..' || !options.dot && file[fi].charAt(0) === '.') return false;
          }

          return true;
        } // ok, let's see if we can swallow whatever we can.


        while (fr < fl) {
          var swallowee = file[fr];
          this.debug('\nglobstar while', file, fr, pattern, pr, swallowee); // XXX remove this slice.  Just pass the start index.

          if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
            this.debug('globstar found match!', fr, fl, swallowee); // found a match.

            return true;
          } else {
            // can't swallow "." or ".." ever.
            // can only swallow ".foo" when explicitly asked.
            if (swallowee === '.' || swallowee === '..' || !options.dot && swallowee.charAt(0) === '.') {
              this.debug('dot detected!', file, fr, pattern, pr);
              break;
            } // ** swallows a segment, and continue.


            this.debug('globstar swallow a segment, and continue');
            fr++;
          }
        } // no match was found.
        // However, in partial mode, we can't say this is necessarily over.
        // If there's more *pattern* left, then

        /* istanbul ignore if */


        if (partial) {
          // ran out of file
          this.debug('\n>>> no match, partial?', file, fr, pattern, pr);
          if (fr === fl) return true;
        }

        return false;
      } // something other than **
      // non-magic patterns just have to match exactly
      // patterns with magic have been turned into regexps.


      var hit;

      if (typeof p === 'string') {
        hit = f === p;
        this.debug('string match', p, f, hit);
      } else {
        hit = f.match(p);
        this.debug('pattern match', p, f, hit);
      }

      if (!hit) return false;
    } // Note: ending in / means that we'll get a final ""
    // at the end of the pattern.  This can only match a
    // corresponding "" at the end of the file.
    // If the file ends in /, then it can only match a
    // a pattern that ends in /, unless the pattern just
    // doesn't have any more for it. But, a/b/ should *not*
    // match "a/b/*", even though "" matches against the
    // [^/]*? pattern, except in partial mode, where it might
    // simply not be reached yet.
    // However, a/b/ should still satisfy a/*
    // now either we fell off the end of the pattern, or we're done.


    if (fi === fl && pi === pl) {
      // ran out of pattern and filename at the same time.
      // an exact hit!
      return true;
    } else if (fi === fl) {
      // ran out of file, but still had pattern left.
      // this is ok if we're doing the match as part of
      // a glob fs traversal.
      return partial;
    } else
      /* istanbul ignore else */
      if (pi === pl) {
        // ran out of pattern, still have file left.
        // this is only acceptable if we're on the very last
        // empty segment of a file with a trailing slash.
        // a/* should match a/b/
        return fi === fl - 1 && file[fi] === '';
      } // should be unreachable.

    /* istanbul ignore next */


    throw new Error('wtf?');
  }

  braceExpand() {
    return braceExpand(this.pattern, this.options);
  }

  parse(pattern, isSub) {
    assertValidPattern(pattern);
    const options = this.options; // shortcuts

    if (pattern === '**') {
      if (!options.noglobstar) return GLOBSTAR;else pattern = '*';
    }

    if (pattern === '') return '';
    let re = '';
    let hasMagic = !!options.nocase;
    let escaping = false; // ? => one single character

    const patternListStack = [];
    const negativeLists = [];
    let stateChar;
    let inClass = false;
    let reClassStart = -1;
    let classStart = -1;
    let cs;
    let pl;
    let sp; // . and .. never match anything that doesn't start with .,
    // even when options.dot is set.

    const patternStart = pattern.charAt(0) === '.' ? '' // anything
    // not (start or / followed by . or .. followed by / or end)
    : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))' : '(?!\\.)';

    const clearStateChar = () => {
      if (stateChar) {
        // we had some state-tracking character
        // that wasn't consumed by this pass.
        switch (stateChar) {
          case '*':
            re += star;
            hasMagic = true;
            break;

          case '?':
            re += qmark;
            hasMagic = true;
            break;

          default:
            re += '\\' + stateChar;
            break;
        }

        this.debug('clearStateChar %j %j', stateChar, re);
        stateChar = false;
      }
    };

    for (let i = 0, c; i < pattern.length && (c = pattern.charAt(i)); i++) {
      this.debug('%s\t%s %s %j', pattern, i, re, c); // skip over any that are escaped.

      if (escaping) {
        /* istanbul ignore next - completely not allowed, even escaped. */
        if (c === '/') {
          return false;
        }

        if (reSpecials[c]) {
          re += '\\';
        }

        re += c;
        escaping = false;
        continue;
      }

      switch (c) {
        /* istanbul ignore next */
        case '/':
          {
            // Should already be path-split by now.
            return false;
          }

        case '\\':
          clearStateChar();
          escaping = true;
          continue;
        // the various stateChar values
        // for the "extglob" stuff.

        case '?':
        case '*':
        case '+':
        case '@':
        case '!':
          this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c); // all of those are literals inside a class, except that
          // the glob [!a] means [^a] in regexp

          if (inClass) {
            this.debug('  in class');
            if (c === '!' && i === classStart + 1) c = '^';
            re += c;
            continue;
          } // if we already have a stateChar, then it means
          // that there was something like ** or +? in there.
          // Handle the stateChar, then proceed with this one.


          this.debug('call clearStateChar %j', stateChar);
          clearStateChar();
          stateChar = c; // if extglob is disabled, then +(asdf|foo) isn't a thing.
          // just clear the statechar *now*, rather than even diving into
          // the patternList stuff.

          if (options.noext) clearStateChar();
          continue;

        case '(':
          if (inClass) {
            re += '(';
            continue;
          }

          if (!stateChar) {
            re += '\\(';
            continue;
          }

          patternListStack.push({
            type: stateChar,
            start: i - 1,
            reStart: re.length,
            open: plTypes[stateChar].open,
            close: plTypes[stateChar].close
          }); // negation is (?:(?!js)[^/]*)

          re += stateChar === '!' ? '(?:(?!(?:' : '(?:';
          this.debug('plType %j %j', stateChar, re);
          stateChar = false;
          continue;

        case ')':
          if (inClass || !patternListStack.length) {
            re += '\\)';
            continue;
          }

          clearStateChar();
          hasMagic = true;
          pl = patternListStack.pop(); // negation is (?:(?!js)[^/]*)
          // The others are (?:<pattern>)<type>

          re += pl.close;

          if (pl.type === '!') {
            negativeLists.push(pl);
          }

          pl.reEnd = re.length;
          continue;

        case '|':
          if (inClass || !patternListStack.length) {
            re += '\\|';
            continue;
          }

          clearStateChar();
          re += '|';
          continue;
        // these are mostly the same in regexp and glob

        case '[':
          // swallow any state-tracking char before the [
          clearStateChar();

          if (inClass) {
            re += '\\' + c;
            continue;
          }

          inClass = true;
          classStart = i;
          reClassStart = re.length;
          re += c;
          continue;

        case ']':
          //  a right bracket shall lose its special
          //  meaning and represent itself in
          //  a bracket expression if it occurs
          //  first in the list.  -- POSIX.2 2.8.3.2
          if (i === classStart + 1 || !inClass) {
            re += '\\' + c;
            continue;
          } // handle the case where we left a class open.
          // "[z-a]" is valid, equivalent to "\[z-a\]"
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.


          cs = pattern.substring(classStart + 1, i);

          try {
            RegExp('[' + cs + ']');
          } catch (er) {
            // not a valid class!
            sp = this.parse(cs, SUBPARSE);
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]';
            hasMagic = hasMagic || sp[1];
            inClass = false;
            continue;
          } // finish up the class.


          hasMagic = true;
          inClass = false;
          re += c;
          continue;

        default:
          // swallow any state char that wasn't consumed
          clearStateChar();

          if (reSpecials[c] && !(c === '^' && inClass)) {
            re += '\\';
          }

          re += c;
          break;
      } // switch

    } // for
    // handle the case where we left a class open.
    // "[abc" is valid, equivalent to "\[abc"


    if (inClass) {
      // split where the last [ was, and escape it
      // this is a huge pita.  We now have to re-walk
      // the contents of the would-be class to re-translate
      // any characters that were passed through as-is
      cs = pattern.substr(classStart + 1);
      sp = this.parse(cs, SUBPARSE);
      re = re.substr(0, reClassStart) + '\\[' + sp[0];
      hasMagic = hasMagic || sp[1];
    } // handle the case where we had a +( thing at the *end*
    // of the pattern.
    // each pattern list stack adds 3 chars, and we need to go through
    // and escape any | chars that were passed through as-is for the regexp.
    // Go through and escape them, taking care not to double-escape any
    // | chars that were already escaped.


    for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
      let tail;
      tail = re.slice(pl.reStart + pl.open.length);
      this.debug('setting tail', re, pl); // maybe some even number of \, then maybe 1 \, followed by a |

      tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, (_, $1, $2) => {
        /* istanbul ignore else - should already be done */
        if (!$2) {
          // the | isn't already escaped, so escape it.
          $2 = '\\';
        } // need to escape all those slashes *again*, without escaping the
        // one that we need for escaping the | character.  As it works out,
        // escaping an even number of slashes can be done by simply repeating
        // it exactly after itself.  That's why this trick works.
        //
        // I am sorry that you have to see this.


        return $1 + $1 + $2 + '|';
      });
      this.debug('tail=%j\n   %s', tail, tail, pl, re);
      const t = pl.type === '*' ? star : pl.type === '?' ? qmark : '\\' + pl.type;
      hasMagic = true;
      re = re.slice(0, pl.reStart) + t + '\\(' + tail;
    } // handle trailing things that only matter at the very end.


    clearStateChar();

    if (escaping) {
      // trailing \\
      re += '\\\\';
    } // only need to apply the nodot start if the re starts with
    // something that could conceivably capture a dot


    const addPatternStart = addPatternStartSet[re.charAt(0)]; // Hack to work around lack of negative lookbehind in JS
    // A pattern like: *.!(x).!(y|z) needs to ensure that a name
    // like 'a.xyz.yz' doesn't match.  So, the first negative
    // lookahead, has to look ALL the way ahead, to the end of
    // the pattern.

    for (let n = negativeLists.length - 1; n > -1; n--) {
      const nl = negativeLists[n];
      const nlBefore = re.slice(0, nl.reStart);
      const nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
      let nlAfter = re.slice(nl.reEnd);
      const nlLast = re.slice(nl.reEnd - 8, nl.reEnd) + nlAfter; // Handle nested stuff like *(*.js|!(*.json)), where open parens
      // mean that we should *not* include the ) in the bit that is considered
      // "after" the negated section.

      const openParensBefore = nlBefore.split('(').length - 1;
      let cleanAfter = nlAfter;

      for (let i = 0; i < openParensBefore; i++) {
        cleanAfter = cleanAfter.replace(/\)[+*?]?/, '');
      }

      nlAfter = cleanAfter;
      const dollar = nlAfter === '' && isSub !== SUBPARSE ? '$' : '';
      re = nlBefore + nlFirst + nlAfter + dollar + nlLast;
    } // if the re is not "" at this point, then we need to make sure
    // it doesn't match against an empty path part.
    // Otherwise a/* will match a/, which it should not.


    if (re !== '' && hasMagic) {
      re = '(?=.)' + re;
    }

    if (addPatternStart) {
      re = patternStart + re;
    } // parsing just a piece of a larger pattern.


    if (isSub === SUBPARSE) {
      return [re, hasMagic];
    } // skip the regexp for non-magical patterns
    // unescape anything in it, though, so that it'll be
    // an exact match against a file etc.


    if (!hasMagic) {
      return globUnescape(pattern);
    }

    const flags = options.nocase ? 'i' : '';

    try {
      return Object.assign(new RegExp('^' + re + '$', flags), {
        _glob: pattern,
        _src: re
      });
    } catch (er)
    /* istanbul ignore next - should be impossible */
    {
      // If it was an invalid regular expression, then it can't match
      // anything.  This trick looks for a character after the end of
      // the string, which is of course impossible, except in multi-line
      // mode, but it's not a /m regex.
      return new RegExp('$.');
    }
  }

  makeRe() {
    if (this.regexp || this.regexp === false) return this.regexp; // at this point, this.set is a 2d array of partial
    // pattern strings, or "**".
    //
    // It's better to use .match().  This function shouldn't
    // be used, really, but it's pretty convenient sometimes,
    // when you just want to work with a regex.

    const set = this.set;

    if (!set.length) {
      this.regexp = false;
      return this.regexp;
    }

    const options = this.options;
    const twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
    const flags = options.nocase ? 'i' : ''; // coalesce globstars and regexpify non-globstar patterns
    // if it's the only item, then we just do one twoStar
    // if it's the first, and there are more, prepend (\/|twoStar\/)? to next
    // if it's the last, append (\/twoStar|) to previous
    // if it's in the middle, append (\/|\/twoStar\/) to previous
    // then filter out GLOBSTAR symbols

    let re = set.map(pattern => {
      pattern = pattern.map(p => typeof p === 'string' ? regExpEscape(p) : p === GLOBSTAR ? GLOBSTAR : p._src).reduce((set, p) => {
        if (!(set[set.length - 1] === GLOBSTAR && p === GLOBSTAR)) {
          set.push(p);
        }

        return set;
      }, []);
      pattern.forEach((p, i) => {
        if (p !== GLOBSTAR || pattern[i - 1] === GLOBSTAR) {
          return;
        }

        if (i === 0) {
          if (pattern.length > 1) {
            pattern[i + 1] = '(?:\\\/|' + twoStar + '\\\/)?' + pattern[i + 1];
          } else {
            pattern[i] = twoStar;
          }
        } else if (i === pattern.length - 1) {
          pattern[i - 1] += '(?:\\\/|' + twoStar + ')?';
        } else {
          pattern[i - 1] += '(?:\\\/|\\\/' + twoStar + '\\\/)' + pattern[i + 1];
          pattern[i + 1] = GLOBSTAR;
        }
      });
      return pattern.filter(p => p !== GLOBSTAR).join('/');
    }).join('|'); // must match entire pattern
    // ending in a * or ** will make it less strict.

    re = '^(?:' + re + ')$'; // can match anything, as long as it's not this.

    if (this.negate) re = '^(?!' + re + ').*$';

    try {
      this.regexp = new RegExp(re, flags);
    } catch (ex)
    /* istanbul ignore next - should be impossible */
    {
      this.regexp = false;
    }

    return this.regexp;
  }

  match(f, partial = this.partial) {
    this.debug('match', f, this.pattern); // short-circuit in the case of busted things.
    // comments, etc.

    if (this.comment) return false;
    if (this.empty) return f === '';
    if (f === '/' && partial) return true;
    const options = this.options; // windows: need to use /, not \

    if (path.sep !== '/') {
      f = f.split(path.sep).join('/');
    } // treat the test path as a set of pathparts.


    f = f.split(slashSplit);
    this.debug(this.pattern, 'split', f); // just ONE of the pattern sets in this.set needs to match
    // in order for it to be valid.  If negating, then just one
    // match means that we have failed.
    // Either way, return on the first hit.

    const set = this.set;
    this.debug(this.pattern, 'set', set); // Find the basename of the path by looking for the last non-empty segment

    let filename;

    for (let i = f.length - 1; i >= 0; i--) {
      filename = f[i];
      if (filename) break;
    }

    for (let i = 0; i < set.length; i++) {
      const pattern = set[i];
      let file = f;

      if (options.matchBase && pattern.length === 1) {
        file = [filename];
      }

      const hit = this.matchOne(file, pattern, partial);

      if (hit) {
        if (options.flipNegate) return true;
        return !this.negate;
      }
    } // didn't get any hits.  this is success if it's a negative
    // pattern, failure otherwise.


    if (options.flipNegate) return false;
    return this.negate;
  }

  static defaults(def) {
    return minimatch.defaults(def).Minimatch;
  }

}

minimatch.Minimatch = Minimatch;

/***/ }),

/***/ "./node_modules/glob/sync.js":
/*!***********************************!*\
  !*** ./node_modules/glob/sync.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = globSync;
globSync.GlobSync = GlobSync;

var rp = __webpack_require__(/*! fs.realpath */ "./node_modules/fs.realpath/index.js");

var minimatch = __webpack_require__(/*! minimatch */ "./node_modules/glob/node_modules/minimatch/minimatch.js");

var Minimatch = minimatch.Minimatch;

var Glob = (__webpack_require__(/*! ./glob.js */ "./node_modules/glob/glob.js").Glob);

var util = __webpack_require__(/*! util */ "util");

var path = __webpack_require__(/*! path */ "path");

var assert = __webpack_require__(/*! assert */ "assert");

var isAbsolute = (__webpack_require__(/*! path */ "path").isAbsolute);

var common = __webpack_require__(/*! ./common.js */ "./node_modules/glob/common.js");

var setopts = common.setopts;
var ownProp = common.ownProp;
var childrenIgnored = common.childrenIgnored;
var isIgnored = common.isIgnored;

function globSync(pattern, options) {
  if (typeof options === 'function' || arguments.length === 3) throw new TypeError('callback provided to sync glob\n' + 'See: https://github.com/isaacs/node-glob/issues/167');
  return new GlobSync(pattern, options).found;
}

function GlobSync(pattern, options) {
  if (!pattern) throw new Error('must provide pattern');
  if (typeof options === 'function' || arguments.length === 3) throw new TypeError('callback provided to sync glob\n' + 'See: https://github.com/isaacs/node-glob/issues/167');
  if (!(this instanceof GlobSync)) return new GlobSync(pattern, options);
  setopts(this, pattern, options);
  if (this.noprocess) return this;
  var n = this.minimatch.set.length;
  this.matches = new Array(n);

  for (var i = 0; i < n; i++) {
    this._process(this.minimatch.set[i], i, false);
  }

  this._finish();
}

GlobSync.prototype._finish = function () {
  assert.ok(this instanceof GlobSync);

  if (this.realpath) {
    var self = this;
    this.matches.forEach(function (matchset, index) {
      var set = self.matches[index] = Object.create(null);

      for (var p in matchset) {
        try {
          p = self._makeAbs(p);
          var real = rp.realpathSync(p, self.realpathCache);
          set[real] = true;
        } catch (er) {
          if (er.syscall === 'stat') set[self._makeAbs(p)] = true;else throw er;
        }
      }
    });
  }

  common.finish(this);
};

GlobSync.prototype._process = function (pattern, index, inGlobStar) {
  assert.ok(this instanceof GlobSync); // Get the first [n] parts of pattern that are all strings.

  var n = 0;

  while (typeof pattern[n] === 'string') {
    n++;
  } // now n is the index of the first one that is *not* a string.
  // See if there's anything else


  var prefix;

  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      this._processSimple(pattern.join('/'), index);

      return;

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null;
      break;

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's 'absolute' like /foo/bar,
      // or 'relative' like '../baz'
      prefix = pattern.slice(0, n).join('/');
      break;
  }

  var remain = pattern.slice(n); // get the list of entries.

  var read;
  if (prefix === null) read = '.';else if (isAbsolute(prefix) || isAbsolute(pattern.map(function (p) {
    return typeof p === 'string' ? p : '[*]';
  }).join('/'))) {
    if (!prefix || !isAbsolute(prefix)) prefix = '/' + prefix;
    read = prefix;
  } else read = prefix;

  var abs = this._makeAbs(read); //if ignored, skip processing


  if (childrenIgnored(this, read)) return;
  var isGlobStar = remain[0] === minimatch.GLOBSTAR;
  if (isGlobStar) this._processGlobStar(prefix, read, abs, remain, index, inGlobStar);else this._processReaddir(prefix, read, abs, remain, index, inGlobStar);
};

GlobSync.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar) {
  var entries = this._readdir(abs, inGlobStar); // if the abs isn't a dir, then nothing can match!


  if (!entries) return; // It will only match dot entries if it starts with a dot, or if
  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.

  var pn = remain[0];
  var negate = !!this.minimatch.negate;
  var rawGlob = pn._glob;
  var dotOk = this.dot || rawGlob.charAt(0) === '.';
  var matchedEntries = [];

  for (var i = 0; i < entries.length; i++) {
    var e = entries[i];

    if (e.charAt(0) !== '.' || dotOk) {
      var m;

      if (negate && !prefix) {
        m = !e.match(pn);
      } else {
        m = e.match(pn);
      }

      if (m) matchedEntries.push(e);
    }
  }

  var len = matchedEntries.length; // If there are no matched entries, then nothing matches.

  if (len === 0) return; // if this is the last remaining pattern bit, then no need for
  // an additional stat *unless* the user has specified mark or
  // stat explicitly.  We know they exist, since readdir returned
  // them.

  if (remain.length === 1 && !this.mark && !this.stat) {
    if (!this.matches[index]) this.matches[index] = Object.create(null);

    for (var i = 0; i < len; i++) {
      var e = matchedEntries[i];

      if (prefix) {
        if (prefix.slice(-1) !== '/') e = prefix + '/' + e;else e = prefix + e;
      }

      if (e.charAt(0) === '/' && !this.nomount) {
        e = path.join(this.root, e);
      }

      this._emitMatch(index, e);
    } // This was the last one, and no stats were needed


    return;
  } // now test all matched entries as stand-ins for that part
  // of the pattern.


  remain.shift();

  for (var i = 0; i < len; i++) {
    var e = matchedEntries[i];
    var newPattern;
    if (prefix) newPattern = [prefix, e];else newPattern = [e];

    this._process(newPattern.concat(remain), index, inGlobStar);
  }
};

GlobSync.prototype._emitMatch = function (index, e) {
  if (isIgnored(this, e)) return;

  var abs = this._makeAbs(e);

  if (this.mark) e = this._mark(e);

  if (this.absolute) {
    e = abs;
  }

  if (this.matches[index][e]) return;

  if (this.nodir) {
    var c = this.cache[abs];
    if (c === 'DIR' || Array.isArray(c)) return;
  }

  this.matches[index][e] = true;
  if (this.stat) this._stat(e);
};

GlobSync.prototype._readdirInGlobStar = function (abs) {
  // follow all symlinked directories forever
  // just proceed as if this is a non-globstar situation
  if (this.follow) return this._readdir(abs, false);
  var entries;
  var lstat;
  var stat;

  try {
    lstat = this.fs.lstatSync(abs);
  } catch (er) {
    if (er.code === 'ENOENT') {
      // lstat failed, doesn't exist
      return null;
    }
  }

  var isSym = lstat && lstat.isSymbolicLink();
  this.symlinks[abs] = isSym; // If it's not a symlink or a dir, then it's definitely a regular file.
  // don't bother doing a readdir in that case.

  if (!isSym && lstat && !lstat.isDirectory()) this.cache[abs] = 'FILE';else entries = this._readdir(abs, false);
  return entries;
};

GlobSync.prototype._readdir = function (abs, inGlobStar) {
  var entries;
  if (inGlobStar && !ownProp(this.symlinks, abs)) return this._readdirInGlobStar(abs);

  if (ownProp(this.cache, abs)) {
    var c = this.cache[abs];
    if (!c || c === 'FILE') return null;
    if (Array.isArray(c)) return c;
  }

  try {
    return this._readdirEntries(abs, this.fs.readdirSync(abs));
  } catch (er) {
    this._readdirError(abs, er);

    return null;
  }
};

GlobSync.prototype._readdirEntries = function (abs, entries) {
  // if we haven't asked to stat everything, then just
  // assume that everything in there exists, so we can avoid
  // having to stat it a second time.
  if (!this.mark && !this.stat) {
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      if (abs === '/') e = abs + e;else e = abs + '/' + e;
      this.cache[e] = true;
    }
  }

  this.cache[abs] = entries; // mark and cache dir-ness

  return entries;
};

GlobSync.prototype._readdirError = function (f, er) {
  // handle errors, and cache the information
  switch (er.code) {
    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205

    case 'ENOTDIR':
      // totally normal. means it *does* exist.
      var abs = this._makeAbs(f);

      this.cache[abs] = 'FILE';

      if (abs === this.cwdAbs) {
        var error = new Error(er.code + ' invalid cwd ' + this.cwd);
        error.path = this.cwd;
        error.code = er.code;
        throw error;
      }

      break;

    case 'ENOENT': // not terribly unusual

    case 'ELOOP':
    case 'ENAMETOOLONG':
    case 'UNKNOWN':
      this.cache[this._makeAbs(f)] = false;
      break;

    default:
      // some unusual error.  Treat as failure.
      this.cache[this._makeAbs(f)] = false;
      if (this.strict) throw er;
      if (!this.silent) console.error('glob error', er);
      break;
  }
};

GlobSync.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar) {
  var entries = this._readdir(abs, inGlobStar); // no entries means not a dir, so it can never have matches
  // foo.txt/** doesn't match foo.txt


  if (!entries) return; // test without the globstar, and with every child both below
  // and replacing the globstar.

  var remainWithoutGlobStar = remain.slice(1);
  var gspref = prefix ? [prefix] : [];
  var noGlobStar = gspref.concat(remainWithoutGlobStar); // the noGlobStar pattern exits the inGlobStar state

  this._process(noGlobStar, index, false);

  var len = entries.length;
  var isSym = this.symlinks[abs]; // If it's a symlink, and we're in a globstar, then stop

  if (isSym && inGlobStar) return;

  for (var i = 0; i < len; i++) {
    var e = entries[i];
    if (e.charAt(0) === '.' && !this.dot) continue; // these two cases enter the inGlobStar state

    var instead = gspref.concat(entries[i], remainWithoutGlobStar);

    this._process(instead, index, true);

    var below = gspref.concat(entries[i], remain);

    this._process(below, index, true);
  }
};

GlobSync.prototype._processSimple = function (prefix, index) {
  // XXX review this.  Shouldn't it be doing the mounting etc
  // before doing stat?  kinda weird?
  var exists = this._stat(prefix);

  if (!this.matches[index]) this.matches[index] = Object.create(null); // If it doesn't exist, then just mark the lack of results

  if (!exists) return;

  if (prefix && isAbsolute(prefix) && !this.nomount) {
    var trail = /[\/\\]$/.test(prefix);

    if (prefix.charAt(0) === '/') {
      prefix = path.join(this.root, prefix);
    } else {
      prefix = path.resolve(this.root, prefix);
      if (trail) prefix += '/';
    }
  }

  if (process.platform === 'win32') prefix = prefix.replace(/\\/g, '/'); // Mark this as a match

  this._emitMatch(index, prefix);
}; // Returns either 'DIR', 'FILE', or false


GlobSync.prototype._stat = function (f) {
  var abs = this._makeAbs(f);

  var needDir = f.slice(-1) === '/';
  if (f.length > this.maxLength) return false;

  if (!this.stat && ownProp(this.cache, abs)) {
    var c = this.cache[abs];
    if (Array.isArray(c)) c = 'DIR'; // It exists, but maybe not how we need it

    if (!needDir || c === 'DIR') return c;
    if (needDir && c === 'FILE') return false; // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
  }

  var exists;
  var stat = this.statCache[abs];

  if (!stat) {
    var lstat;

    try {
      lstat = this.fs.lstatSync(abs);
    } catch (er) {
      if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
        this.statCache[abs] = false;
        return false;
      }
    }

    if (lstat && lstat.isSymbolicLink()) {
      try {
        stat = this.fs.statSync(abs);
      } catch (er) {
        stat = lstat;
      }
    } else {
      stat = lstat;
    }
  }

  this.statCache[abs] = stat;
  var c = true;
  if (stat) c = stat.isDirectory() ? 'DIR' : 'FILE';
  this.cache[abs] = this.cache[abs] || c;
  if (needDir && c === 'FILE') return false;
  return c;
};

GlobSync.prototype._mark = function (p) {
  return common.mark(this, p);
};

GlobSync.prototype._makeAbs = function (f) {
  return common.makeAbs(this, f);
};

/***/ }),

/***/ "./node_modules/inflight/inflight.js":
/*!*******************************************!*\
  !*** ./node_modules/inflight/inflight.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wrappy = __webpack_require__(/*! wrappy */ "./node_modules/wrappy/wrappy.js");

var reqs = Object.create(null);

var once = __webpack_require__(/*! once */ "./node_modules/once/once.js");

module.exports = wrappy(inflight);

function inflight(key, cb) {
  if (reqs[key]) {
    reqs[key].push(cb);
    return null;
  } else {
    reqs[key] = [cb];
    return makeres(key);
  }
}

function makeres(key) {
  return once(function RES() {
    var cbs = reqs[key];
    var len = cbs.length;
    var args = slice(arguments); // XXX It's somewhat ambiguous whether a new callback added in this
    // pass should be queued for later execution if something in the
    // list of callbacks throws, or if it should just be discarded.
    // However, it's such an edge case that it hardly matters, and either
    // choice is likely as surprising as the other.
    // As it happens, we do go ahead and schedule it for later execution.

    try {
      for (var i = 0; i < len; i++) {
        cbs[i].apply(null, args);
      }
    } finally {
      if (cbs.length > len) {
        // added more in the interim.
        // de-zalgo, just in case, but don't call again.
        cbs.splice(0, len);
        process.nextTick(function () {
          RES.apply(null, args);
        });
      } else {
        delete reqs[key];
      }
    }
  });
}

function slice(args) {
  var length = args.length;
  var array = [];

  for (var i = 0; i < length; i++) array[i] = args[i];

  return array;
}

/***/ }),

/***/ "./node_modules/inherits/inherits.js":
/*!*******************************************!*\
  !*** ./node_modules/inherits/inherits.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

try {
  var util = __webpack_require__(/*! util */ "util");
  /* istanbul ignore next */


  if (typeof util.inherits !== 'function') throw '';
  module.exports = util.inherits;
} catch (e) {
  /* istanbul ignore next */
  module.exports = __webpack_require__(/*! ./inherits_browser.js */ "./node_modules/inherits/inherits_browser.js");
}

/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function () {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

/***/ }),

/***/ "./node_modules/node-id3/index.js":
/*!****************************************!*\
  !*** ./node_modules/node-id3/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs */ "fs");

const ID3Definitions = __webpack_require__(/*! ./src/ID3Definitions */ "./node_modules/node-id3/src/ID3Definitions.js");

const ID3Frames = __webpack_require__(/*! ./src/ID3Frames */ "./node_modules/node-id3/src/ID3Frames.js");

const ID3Util = __webpack_require__(/*! ./src/ID3Util */ "./node_modules/node-id3/src/ID3Util.js");
/*
**  Used specification: http://id3.org/id3v2.3.0
*/

/**
 * Write passed tags to a file/buffer
 * @param tags - Object containing tags to be written
 * @param filebuffer - Can contain a filepath string or buffer
 * @param fn - (optional) Function for async version
 * @returns {boolean|Buffer|Error}
 */


module.exports.write = function (tags, filebuffer, fn) {
  let completeTag = this.create(tags);

  if (filebuffer instanceof Buffer) {
    filebuffer = this.removeTagsFromBuffer(filebuffer) || filebuffer;
    let completeBuffer = Buffer.concat([completeTag, filebuffer]);

    if (fn && typeof fn === 'function') {
      fn(null, completeBuffer);
      return;
    } else {
      return completeBuffer;
    }
  }

  if (fn && typeof fn === 'function') {
    try {
      fs.readFile(filebuffer, function (err, data) {
        if (err) {
          fn(err);
          return;
        }

        data = this.removeTagsFromBuffer(data) || data;
        let rewriteFile = Buffer.concat([completeTag, data]);
        fs.writeFile(filebuffer, rewriteFile, 'binary', err => {
          fn(err);
        });
      }.bind(this));
    } catch (err) {
      fn(err);
    }
  } else {
    try {
      let data = fs.readFileSync(filebuffer);
      data = this.removeTagsFromBuffer(data) || data;
      let rewriteFile = Buffer.concat([completeTag, data]);
      fs.writeFileSync(filebuffer, rewriteFile, 'binary');
      return true;
    } catch (err) {
      return err;
    }
  }
};
/**
 * Creates a buffer containing the ID3 Tag
 * @param tags - Object containing tags to be written
 * @param fn fn - (optional) Function for async version
 * @returns {Buffer}
 */


module.exports.create = function (tags, fn) {
  let frames = []; //  Create & push a header for the ID3-Frame

  const header = Buffer.alloc(10);
  header.fill(0);
  header.write("ID3", 0); //File identifier

  header.writeUInt16BE(0x0300, 3); //Version 2.3.0  --  03 00

  header.writeUInt16BE(0x0000, 5); //Flags 00
  //Last 4 bytes are used for header size, but have to be inserted later, because at this point, its size is not clear.

  frames.push(header);
  frames = frames.concat(this.createBuffersFromTags(tags)); //  Calculate frame size of ID3 body to insert into header

  let totalSize = 0;
  frames.forEach(frame => {
    totalSize += frame.length;
  }); //  Don't count ID3 header itself

  totalSize -= 10; //  ID3 header size uses only 7 bits of a byte, bit shift is needed

  let size = ID3Util.encodeSize(totalSize); //  Write bytes to ID3 frame header, which is the first frame

  frames[0].writeUInt8(size[0], 6);
  frames[0].writeUInt8(size[1], 7);
  frames[0].writeUInt8(size[2], 8);
  frames[0].writeUInt8(size[3], 9);

  if (fn && typeof fn === 'function') {
    fn(Buffer.concat(frames));
  } else {
    return Buffer.concat(frames);
  }
};
/**
 * Returns array of buffers created by tags specified in the tags argument
 * @param tags - Object containing tags to be written
 * @returns {Array}
 */


module.exports.createBuffersFromTags = function (tags) {
  let frames = [];
  if (!tags) return frames;
  const rawObject = Object.keys(tags).reduce((acc, val) => {
    if (ID3Definitions.FRAME_IDENTIFIERS.v3[val] !== undefined) {
      acc[ID3Definitions.FRAME_IDENTIFIERS.v3[val]] = tags[val];
    } else {
      acc[val] = tags[val];
    }

    return acc;
  }, {});
  Object.keys(rawObject).forEach((specName, index) => {
    let frame; // Check if invalid specName

    if (specName.length !== 4) {
      return;
    }

    if (ID3Frames[specName] !== undefined) {
      frame = ID3Frames[specName].create(rawObject[specName], 3, this);
    } else if (specName.startsWith('T')) {
      frame = ID3Frames.GENERIC_TEXT.create(specName, rawObject[specName], 3);
    } else if (specName.startsWith('W')) {
      if (ID3Util.getSpecOptions(specName, 3).multiple && rawObject[specName] instanceof Array && rawObject[specName].length > 0) {
        frame = Buffer.alloc(0); // deduplicate array

        for (let url of [...new Set(rawObject[specName])]) {
          frame = Buffer.concat([frame, ID3Frames.GENERIC_URL.create(specName, url, 3)]);
        }
      } else {
        frame = ID3Frames.GENERIC_URL.create(specName, rawObject[specName], 3);
      }
    }

    if (frame instanceof Buffer) {
      frames.push(frame);
    }
  });
  return frames;
};
/**
 * Read ID3-Tags from passed buffer/filepath
 * @param filebuffer - Can contain a filepath string or buffer
 * @param options - (optional) Object containing options
 * @param fn - (optional) Function for async version
 * @returns {boolean}
 */


module.exports.read = function (filebuffer, options, fn) {
  if (!options || typeof options === 'function') {
    fn = fn || options;
    options = {};
  }

  if (!fn || typeof fn !== 'function') {
    if (typeof filebuffer === "string" || filebuffer instanceof String) {
      filebuffer = fs.readFileSync(filebuffer);
    }

    return this.getTagsFromBuffer(filebuffer, options);
  } else {
    if (typeof filebuffer === "string" || filebuffer instanceof String) {
      fs.readFile(filebuffer, function (err, data) {
        if (err) {
          fn(err, null);
        } else {
          fn(null, this.getTagsFromBuffer(data, options));
        }
      }.bind(this));
    } else {
      fn(null, this.getTagsFromBuffer(filebuffer, options));
    }
  }
};
/**
 * Update ID3-Tags from passed buffer/filepath
 * @param tags - Object containing tags to be written
 * @param filebuffer - Can contain a filepath string or buffer
 * @param options - (optional) Object containing options
 * @param fn - (optional) Function for async version
 * @returns {boolean|Buffer|Error}
 */


module.exports.update = function (tags, filebuffer, options, fn) {
  if (!options || typeof options === 'function') {
    fn = fn || options;
    options = {};
  }

  const rawTags = Object.keys(tags).reduce((acc, val) => {
    if (ID3Definitions.FRAME_IDENTIFIERS.v3[val] !== undefined) {
      acc[ID3Definitions.FRAME_IDENTIFIERS.v3[val]] = tags[val];
    } else {
      acc[val] = tags[val];
    }

    return acc;
  }, {});

  const updateFn = currentTags => {
    currentTags = currentTags.raw || {};
    Object.keys(rawTags).map(specName => {
      const options = ID3Util.getSpecOptions(specName, 3);
      const cCompare = {};

      if (options.multiple && currentTags[specName] && rawTags[specName]) {
        if (options.updateCompareKey) {
          currentTags[specName].forEach((cTag, index) => {
            cCompare[cTag[options.updateCompareKey]] = index;
          });
        }

        if (!(rawTags[specName] instanceof Array)) rawTags[specName] = [rawTags[specName]];
        rawTags[specName].forEach((rTag, index) => {
          const comparison = cCompare[rTag[options.updateCompareKey]];

          if (comparison !== undefined) {
            currentTags[specName][comparison] = rTag;
          } else {
            currentTags[specName].push(rTag);
          }
        });
      } else {
        currentTags[specName] = rawTags[specName];
      }
    });
    return currentTags;
  };

  if (!fn || typeof fn !== 'function') {
    return this.write(updateFn(this.read(filebuffer, options)), filebuffer);
  } else {
    this.read(filebuffer, (err, currentTags) => {
      this.write(updateFn(this.read(filebuffer, options)), filebuffer, fn);
    });
  }
};

module.exports.getTagsFromBuffer = function (filebuffer, options) {
  let framePosition = ID3Util.getFramePosition(filebuffer);

  if (framePosition === -1) {
    return this.getTagsFromFrames([], 3, options);
  }

  const frameSize = ID3Util.decodeSize(filebuffer.slice(framePosition + 6, framePosition + 10)) + 10;
  let ID3Frame = Buffer.alloc(frameSize + 1);
  filebuffer.copy(ID3Frame, 0, framePosition); //ID3 version e.g. 3 if ID3v2.3.0

  let ID3Version = ID3Frame[3];
  const tagFlags = ID3Util.parseTagHeaderFlags(ID3Frame);
  let extendedHeaderOffset = 0;

  if (tagFlags.extendedHeader) {
    if (ID3Version === 3) {
      extendedHeaderOffset = 4 + filebuffer.readUInt32BE(10);
    } else if (ID3Version === 4) {
      extendedHeaderOffset = ID3Util.decodeSize(filebuffer.slice(10, 14));
    }
  }

  let ID3FrameBody = Buffer.alloc(frameSize - 10 - extendedHeaderOffset);
  filebuffer.copy(ID3FrameBody, 0, framePosition + 10 + extendedHeaderOffset);
  let frames = this.getFramesFromID3Body(ID3FrameBody, ID3Version, options);
  return this.getTagsFromFrames(frames, ID3Version, options);
};

module.exports.getFramesFromID3Body = function (ID3FrameBody, ID3Version, options = {}) {
  let currentPosition = 0;
  let frames = [];

  if (!ID3FrameBody || !(ID3FrameBody instanceof Buffer)) {
    return frames;
  }

  let identifierSize = 4;
  let textframeHeaderSize = 10;

  if (ID3Version === 2) {
    identifierSize = 3;
    textframeHeaderSize = 6;
  }

  while (currentPosition < ID3FrameBody.length && ID3FrameBody[currentPosition] !== 0x00) {
    let bodyFrameHeader = Buffer.alloc(textframeHeaderSize);
    ID3FrameBody.copy(bodyFrameHeader, 0, currentPosition);
    let decodeSize = false;

    if (ID3Version === 4) {
      decodeSize = true;
    }

    let bodyFrameSize = ID3Util.getFrameSize(bodyFrameHeader, decodeSize, ID3Version);

    if (bodyFrameSize + 10 > ID3FrameBody.length - currentPosition) {
      break;
    }

    const specName = bodyFrameHeader.toString('utf8', 0, identifierSize);

    if (options.exclude instanceof Array && options.exclude.includes(specName) || options.include instanceof Array && !options.include.includes(specName)) {
      currentPosition += bodyFrameSize + textframeHeaderSize;
      continue;
    }

    const frameHeaderFlags = ID3Util.parseFrameHeaderFlags(bodyFrameHeader, ID3Version);
    let bodyFrameBuffer = Buffer.alloc(bodyFrameSize);
    ID3FrameBody.copy(bodyFrameBuffer, 0, currentPosition + textframeHeaderSize + (frameHeaderFlags.dataLengthIndicator ? 4 : 0)); //  Size of sub frame + its header

    currentPosition += bodyFrameSize + textframeHeaderSize;
    frames.push({
      name: specName,
      flags: frameHeaderFlags,
      body: frameHeaderFlags.unsynchronisation ? ID3Util.processUnsynchronisedBuffer(bodyFrameBuffer) : bodyFrameBuffer
    });
  }

  return frames;
};

module.exports.getTagsFromFrames = function (frames, ID3Version, options = {}) {
  let tags = {};
  let raw = {};
  frames.forEach((frame, index) => {
    const specName = ID3Version === 2 ? ID3Definitions.FRAME_IDENTIFIERS.v3[ID3Definitions.FRAME_INTERNAL_IDENTIFIERS.v2[frame.name]] : frame.name;
    const identifier = ID3Version === 2 ? ID3Definitions.FRAME_INTERNAL_IDENTIFIERS.v2[frame.name] : ID3Definitions.FRAME_INTERNAL_IDENTIFIERS.v3[frame.name];

    if (!specName || !identifier) {
      return;
    }

    let decoded;

    if (ID3Frames[specName]) {
      decoded = ID3Frames[specName].read(frame.body, ID3Version, this);
    } else if (specName.startsWith('T')) {
      decoded = ID3Frames.GENERIC_TEXT.read(frame.body, ID3Version);
    } else if (specName.startsWith('W')) {
      decoded = ID3Frames.GENERIC_URL.read(frame.body, ID3Version);
    }

    if (decoded) {
      if (ID3Util.getSpecOptions(specName, ID3Version).multiple) {
        if (!options.onlyRaw) {
          if (!tags[identifier]) tags[identifier] = [];
          tags[identifier].push(decoded);
        }

        if (!options.noRaw) {
          if (!raw[specName]) raw[specName] = [];
          raw[specName].push(decoded);
        }
      } else {
        if (!options.onlyRaw) {
          tags[identifier] = decoded;
        }

        if (!options.noRaw) {
          raw[specName] = decoded;
        }
      }
    }
  });
  if (options.onlyRaw) return raw;
  if (options.noRaw) return tags;
  tags.raw = raw;
  return tags;
};
/**
 * Checks and removes already written ID3-Frames from a buffer
 * @param data - Buffer
 * @returns {boolean|Buffer}
 */


module.exports.removeTagsFromBuffer = function (data) {
  let framePosition = ID3Util.getFramePosition(data);

  if (framePosition === -1) {
    return data;
  }

  let hSize = Buffer.from([data[framePosition + 6], data[framePosition + 7], data[framePosition + 8], data[framePosition + 9]]);

  if ((hSize[0] | hSize[1] | hSize[2] | hSize[3]) & 0x80) {
    //  Invalid tag size (msb not 0)
    return false;
  }

  if (data.length >= framePosition + 10) {
    const size = ID3Util.decodeSize(data.slice(framePosition + 6, framePosition + 10));
    return Buffer.concat([data.slice(0, framePosition), data.slice(framePosition + size + 10)]);
  } else {
    return data;
  }
};
/**
 * Checks and removes already written ID3-Frames from a file
 * @param filepath - Filepath to file
 * @param fn - (optional) Function for async usage
 * @returns {boolean|Error}
 */


module.exports.removeTags = function (filepath, fn) {
  if (!fn || typeof fn !== 'function') {
    let data;

    try {
      data = fs.readFileSync(filepath);
    } catch (e) {
      return e;
    }

    let newData = this.removeTagsFromBuffer(data);

    if (!newData) {
      return false;
    }

    try {
      fs.writeFileSync(filepath, newData, 'binary');
    } catch (e) {
      return e;
    }

    return true;
  } else {
    fs.readFile(filepath, function (err, data) {
      if (err) {
        fn(err);
      }

      let newData = this.removeTagsFromBuffer(data);

      if (!newData) {
        fn(err);
        return;
      }

      fs.writeFile(filepath, newData, 'binary', function (err) {
        if (err) {
          fn(err);
        } else {
          fn(false);
        }
      });
    }.bind(this));
  }
};

module.exports.Promise = {
  write: (tags, file) => {
    return new Promise((resolve, reject) => {
      this.write(tags, file, (err, ret) => {
        if (err) reject(err);else resolve(ret);
      });
    });
  },
  update: (tags, file) => {
    return new Promise((resolve, reject) => {
      this.update(tags, file, (err, ret) => {
        if (err) reject(err);else resolve(ret);
      });
    });
  },
  create: tags => {
    return new Promise(resolve => {
      this.create(tags, buffer => {
        resolve(buffer);
      });
    });
  },
  read: (file, options) => {
    return new Promise((resolve, reject) => {
      this.read(file, options, (err, ret) => {
        if (err) reject(err);else resolve(ret);
      });
    });
  },
  removeTags: filepath => {
    return new Promise((resolve, reject) => {
      this.removeTags(filepath, err => {
        if (err) reject(err);else resolve();
      });
    });
  }
};

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/dbcs-codec.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/dbcs-codec.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var Buffer = (__webpack_require__(/*! safer-buffer */ "./node_modules/safer-buffer/safer.js").Buffer); // Multibyte codec. In this scheme, a character is represented by 1 or more bytes.
// Our codec supports UTF-16 surrogates, extensions for GB18030 and unicode sequences.
// To save memory and loading time, we read table files only when requested.


exports._dbcs = DBCSCodec;
var UNASSIGNED = -1,
    GB18030_CODE = -2,
    SEQ_START = -10,
    NODE_START = -1000,
    UNASSIGNED_NODE = new Array(0x100),
    DEF_CHAR = -1;

for (var i = 0; i < 0x100; i++) UNASSIGNED_NODE[i] = UNASSIGNED; // Class DBCSCodec reads and initializes mapping tables.


function DBCSCodec(codecOptions, iconv) {
  this.encodingName = codecOptions.encodingName;
  if (!codecOptions) throw new Error("DBCS codec is called without the data.");
  if (!codecOptions.table) throw new Error("Encoding '" + this.encodingName + "' has no data."); // Load tables.

  var mappingTable = codecOptions.table(); // Decode tables: MBCS -> Unicode.
  // decodeTables is a trie, encoded as an array of arrays of integers. Internal arrays are trie nodes and all have len = 256.
  // Trie root is decodeTables[0].
  // Values: >=  0 -> unicode character code. can be > 0xFFFF
  //         == UNASSIGNED -> unknown/unassigned sequence.
  //         == GB18030_CODE -> this is the end of a GB18030 4-byte sequence.
  //         <= NODE_START -> index of the next node in our trie to process next byte.
  //         <= SEQ_START  -> index of the start of a character code sequence, in decodeTableSeq.

  this.decodeTables = [];
  this.decodeTables[0] = UNASSIGNED_NODE.slice(0); // Create root node.
  // Sometimes a MBCS char corresponds to a sequence of unicode chars. We store them as arrays of integers here. 

  this.decodeTableSeq = []; // Actual mapping tables consist of chunks. Use them to fill up decode tables.

  for (var i = 0; i < mappingTable.length; i++) this._addDecodeChunk(mappingTable[i]); // Load & create GB18030 tables when needed.


  if (typeof codecOptions.gb18030 === 'function') {
    this.gb18030 = codecOptions.gb18030(); // Load GB18030 ranges.
    // Add GB18030 common decode nodes.

    var commonThirdByteNodeIdx = this.decodeTables.length;
    this.decodeTables.push(UNASSIGNED_NODE.slice(0));
    var commonFourthByteNodeIdx = this.decodeTables.length;
    this.decodeTables.push(UNASSIGNED_NODE.slice(0)); // Fill out the tree

    var firstByteNode = this.decodeTables[0];

    for (var i = 0x81; i <= 0xFE; i++) {
      var secondByteNode = this.decodeTables[NODE_START - firstByteNode[i]];

      for (var j = 0x30; j <= 0x39; j++) {
        if (secondByteNode[j] === UNASSIGNED) {
          secondByteNode[j] = NODE_START - commonThirdByteNodeIdx;
        } else if (secondByteNode[j] > NODE_START) {
          throw new Error("gb18030 decode tables conflict at byte 2");
        }

        var thirdByteNode = this.decodeTables[NODE_START - secondByteNode[j]];

        for (var k = 0x81; k <= 0xFE; k++) {
          if (thirdByteNode[k] === UNASSIGNED) {
            thirdByteNode[k] = NODE_START - commonFourthByteNodeIdx;
          } else if (thirdByteNode[k] === NODE_START - commonFourthByteNodeIdx) {
            continue;
          } else if (thirdByteNode[k] > NODE_START) {
            throw new Error("gb18030 decode tables conflict at byte 3");
          }

          var fourthByteNode = this.decodeTables[NODE_START - thirdByteNode[k]];

          for (var l = 0x30; l <= 0x39; l++) {
            if (fourthByteNode[l] === UNASSIGNED) fourthByteNode[l] = GB18030_CODE;
          }
        }
      }
    }
  }

  this.defaultCharUnicode = iconv.defaultCharUnicode; // Encode tables: Unicode -> DBCS.
  // `encodeTable` is array mapping from unicode char to encoded char. All its values are integers for performance.
  // Because it can be sparse, it is represented as array of buckets by 256 chars each. Bucket can be null.
  // Values: >=  0 -> it is a normal char. Write the value (if <=256 then 1 byte, if <=65536 then 2 bytes, etc.).
  //         == UNASSIGNED -> no conversion found. Output a default char.
  //         <= SEQ_START  -> it's an index in encodeTableSeq, see below. The character starts a sequence.

  this.encodeTable = []; // `encodeTableSeq` is used when a sequence of unicode characters is encoded as a single code. We use a tree of
  // objects where keys correspond to characters in sequence and leafs are the encoded dbcs values. A special DEF_CHAR key
  // means end of sequence (needed when one sequence is a strict subsequence of another).
  // Objects are kept separately from encodeTable to increase performance.

  this.encodeTableSeq = []; // Some chars can be decoded, but need not be encoded.

  var skipEncodeChars = {};
  if (codecOptions.encodeSkipVals) for (var i = 0; i < codecOptions.encodeSkipVals.length; i++) {
    var val = codecOptions.encodeSkipVals[i];
    if (typeof val === 'number') skipEncodeChars[val] = true;else for (var j = val.from; j <= val.to; j++) skipEncodeChars[j] = true;
  } // Use decode trie to recursively fill out encode tables.

  this._fillEncodeTable(0, 0, skipEncodeChars); // Add more encoding pairs when needed.


  if (codecOptions.encodeAdd) {
    for (var uChar in codecOptions.encodeAdd) if (Object.prototype.hasOwnProperty.call(codecOptions.encodeAdd, uChar)) this._setEncodeChar(uChar.charCodeAt(0), codecOptions.encodeAdd[uChar]);
  }

  this.defCharSB = this.encodeTable[0][iconv.defaultCharSingleByte.charCodeAt(0)];
  if (this.defCharSB === UNASSIGNED) this.defCharSB = this.encodeTable[0]['?'];
  if (this.defCharSB === UNASSIGNED) this.defCharSB = "?".charCodeAt(0);
}

DBCSCodec.prototype.encoder = DBCSEncoder;
DBCSCodec.prototype.decoder = DBCSDecoder; // Decoder helpers

DBCSCodec.prototype._getDecodeTrieNode = function (addr) {
  var bytes = [];

  for (; addr > 0; addr >>>= 8) bytes.push(addr & 0xFF);

  if (bytes.length == 0) bytes.push(0);
  var node = this.decodeTables[0];

  for (var i = bytes.length - 1; i > 0; i--) {
    // Traverse nodes deeper into the trie.
    var val = node[bytes[i]];

    if (val == UNASSIGNED) {
      // Create new node.
      node[bytes[i]] = NODE_START - this.decodeTables.length;
      this.decodeTables.push(node = UNASSIGNED_NODE.slice(0));
    } else if (val <= NODE_START) {
      // Existing node.
      node = this.decodeTables[NODE_START - val];
    } else throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + addr.toString(16));
  }

  return node;
};

DBCSCodec.prototype._addDecodeChunk = function (chunk) {
  // First element of chunk is the hex mbcs code where we start.
  var curAddr = parseInt(chunk[0], 16); // Choose the decoding node where we'll write our chars.

  var writeTable = this._getDecodeTrieNode(curAddr);

  curAddr = curAddr & 0xFF; // Write all other elements of the chunk to the table.

  for (var k = 1; k < chunk.length; k++) {
    var part = chunk[k];

    if (typeof part === "string") {
      // String, write as-is.
      for (var l = 0; l < part.length;) {
        var code = part.charCodeAt(l++);

        if (0xD800 <= code && code < 0xDC00) {
          // Decode surrogate
          var codeTrail = part.charCodeAt(l++);
          if (0xDC00 <= codeTrail && codeTrail < 0xE000) writeTable[curAddr++] = 0x10000 + (code - 0xD800) * 0x400 + (codeTrail - 0xDC00);else throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + chunk[0]);
        } else if (0x0FF0 < code && code <= 0x0FFF) {
          // Character sequence (our own encoding used)
          var len = 0xFFF - code + 2;
          var seq = [];

          for (var m = 0; m < len; m++) seq.push(part.charCodeAt(l++)); // Simple variation: don't support surrogates or subsequences in seq.


          writeTable[curAddr++] = SEQ_START - this.decodeTableSeq.length;
          this.decodeTableSeq.push(seq);
        } else writeTable[curAddr++] = code; // Basic char

      }
    } else if (typeof part === "number") {
      // Integer, meaning increasing sequence starting with prev character.
      var charCode = writeTable[curAddr - 1] + 1;

      for (var l = 0; l < part; l++) writeTable[curAddr++] = charCode++;
    } else throw new Error("Incorrect type '" + typeof part + "' given in " + this.encodingName + " at chunk " + chunk[0]);
  }

  if (curAddr > 0xFF) throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + chunk[0] + ": too long" + curAddr);
}; // Encoder helpers


DBCSCodec.prototype._getEncodeBucket = function (uCode) {
  var high = uCode >> 8; // This could be > 0xFF because of astral characters.

  if (this.encodeTable[high] === undefined) this.encodeTable[high] = UNASSIGNED_NODE.slice(0); // Create bucket on demand.

  return this.encodeTable[high];
};

DBCSCodec.prototype._setEncodeChar = function (uCode, dbcsCode) {
  var bucket = this._getEncodeBucket(uCode);

  var low = uCode & 0xFF;
  if (bucket[low] <= SEQ_START) this.encodeTableSeq[SEQ_START - bucket[low]][DEF_CHAR] = dbcsCode; // There's already a sequence, set a single-char subsequence of it.
  else if (bucket[low] == UNASSIGNED) bucket[low] = dbcsCode;
};

DBCSCodec.prototype._setEncodeSequence = function (seq, dbcsCode) {
  // Get the root of character tree according to first character of the sequence.
  var uCode = seq[0];

  var bucket = this._getEncodeBucket(uCode);

  var low = uCode & 0xFF;
  var node;

  if (bucket[low] <= SEQ_START) {
    // There's already a sequence with  - use it.
    node = this.encodeTableSeq[SEQ_START - bucket[low]];
  } else {
    // There was no sequence object - allocate a new one.
    node = {};
    if (bucket[low] !== UNASSIGNED) node[DEF_CHAR] = bucket[low]; // If a char was set before - make it a single-char subsequence.

    bucket[low] = SEQ_START - this.encodeTableSeq.length;
    this.encodeTableSeq.push(node);
  } // Traverse the character tree, allocating new nodes as needed.


  for (var j = 1; j < seq.length - 1; j++) {
    var oldVal = node[uCode];
    if (typeof oldVal === 'object') node = oldVal;else {
      node = node[uCode] = {};
      if (oldVal !== undefined) node[DEF_CHAR] = oldVal;
    }
  } // Set the leaf to given dbcsCode.


  uCode = seq[seq.length - 1];
  node[uCode] = dbcsCode;
};

DBCSCodec.prototype._fillEncodeTable = function (nodeIdx, prefix, skipEncodeChars) {
  var node = this.decodeTables[nodeIdx];
  var hasValues = false;
  var subNodeEmpty = {};

  for (var i = 0; i < 0x100; i++) {
    var uCode = node[i];
    var mbCode = prefix + i;
    if (skipEncodeChars[mbCode]) continue;

    if (uCode >= 0) {
      this._setEncodeChar(uCode, mbCode);

      hasValues = true;
    } else if (uCode <= NODE_START) {
      var subNodeIdx = NODE_START - uCode;

      if (!subNodeEmpty[subNodeIdx]) {
        // Skip empty subtrees (they are too large in gb18030).
        var newPrefix = mbCode << 8 >>> 0; // NOTE: '>>> 0' keeps 32-bit num positive.

        if (this._fillEncodeTable(subNodeIdx, newPrefix, skipEncodeChars)) hasValues = true;else subNodeEmpty[subNodeIdx] = true;
      }
    } else if (uCode <= SEQ_START) {
      this._setEncodeSequence(this.decodeTableSeq[SEQ_START - uCode], mbCode);

      hasValues = true;
    }
  }

  return hasValues;
}; // == Encoder ==================================================================


function DBCSEncoder(options, codec) {
  // Encoder state
  this.leadSurrogate = -1;
  this.seqObj = undefined; // Static data

  this.encodeTable = codec.encodeTable;
  this.encodeTableSeq = codec.encodeTableSeq;
  this.defaultCharSingleByte = codec.defCharSB;
  this.gb18030 = codec.gb18030;
}

DBCSEncoder.prototype.write = function (str) {
  var newBuf = Buffer.alloc(str.length * (this.gb18030 ? 4 : 3)),
      leadSurrogate = this.leadSurrogate,
      seqObj = this.seqObj,
      nextChar = -1,
      i = 0,
      j = 0;

  while (true) {
    // 0. Get next character.
    if (nextChar === -1) {
      if (i == str.length) break;
      var uCode = str.charCodeAt(i++);
    } else {
      var uCode = nextChar;
      nextChar = -1;
    } // 1. Handle surrogates.


    if (0xD800 <= uCode && uCode < 0xE000) {
      // Char is one of surrogates.
      if (uCode < 0xDC00) {
        // We've got lead surrogate.
        if (leadSurrogate === -1) {
          leadSurrogate = uCode;
          continue;
        } else {
          leadSurrogate = uCode; // Double lead surrogate found.

          uCode = UNASSIGNED;
        }
      } else {
        // We've got trail surrogate.
        if (leadSurrogate !== -1) {
          uCode = 0x10000 + (leadSurrogate - 0xD800) * 0x400 + (uCode - 0xDC00);
          leadSurrogate = -1;
        } else {
          // Incomplete surrogate pair - only trail surrogate found.
          uCode = UNASSIGNED;
        }
      }
    } else if (leadSurrogate !== -1) {
      // Incomplete surrogate pair - only lead surrogate found.
      nextChar = uCode;
      uCode = UNASSIGNED; // Write an error, then current char.

      leadSurrogate = -1;
    } // 2. Convert uCode character.


    var dbcsCode = UNASSIGNED;

    if (seqObj !== undefined && uCode != UNASSIGNED) {
      // We are in the middle of the sequence
      var resCode = seqObj[uCode];

      if (typeof resCode === 'object') {
        // Sequence continues.
        seqObj = resCode;
        continue;
      } else if (typeof resCode == 'number') {
        // Sequence finished. Write it.
        dbcsCode = resCode;
      } else if (resCode == undefined) {
        // Current character is not part of the sequence.
        // Try default character for this sequence
        resCode = seqObj[DEF_CHAR];

        if (resCode !== undefined) {
          dbcsCode = resCode; // Found. Write it.

          nextChar = uCode; // Current character will be written too in the next iteration.
        } else {// TODO: What if we have no default? (resCode == undefined)
          // Then, we should write first char of the sequence as-is and try the rest recursively.
          // Didn't do it for now because no encoding has this situation yet.
          // Currently, just skip the sequence and write current char.
        }
      }

      seqObj = undefined;
    } else if (uCode >= 0) {
      // Regular character
      var subtable = this.encodeTable[uCode >> 8];
      if (subtable !== undefined) dbcsCode = subtable[uCode & 0xFF];

      if (dbcsCode <= SEQ_START) {
        // Sequence start
        seqObj = this.encodeTableSeq[SEQ_START - dbcsCode];
        continue;
      }

      if (dbcsCode == UNASSIGNED && this.gb18030) {
        // Use GB18030 algorithm to find character(s) to write.
        var idx = findIdx(this.gb18030.uChars, uCode);

        if (idx != -1) {
          var dbcsCode = this.gb18030.gbChars[idx] + (uCode - this.gb18030.uChars[idx]);
          newBuf[j++] = 0x81 + Math.floor(dbcsCode / 12600);
          dbcsCode = dbcsCode % 12600;
          newBuf[j++] = 0x30 + Math.floor(dbcsCode / 1260);
          dbcsCode = dbcsCode % 1260;
          newBuf[j++] = 0x81 + Math.floor(dbcsCode / 10);
          dbcsCode = dbcsCode % 10;
          newBuf[j++] = 0x30 + dbcsCode;
          continue;
        }
      }
    } // 3. Write dbcsCode character.


    if (dbcsCode === UNASSIGNED) dbcsCode = this.defaultCharSingleByte;

    if (dbcsCode < 0x100) {
      newBuf[j++] = dbcsCode;
    } else if (dbcsCode < 0x10000) {
      newBuf[j++] = dbcsCode >> 8; // high byte

      newBuf[j++] = dbcsCode & 0xFF; // low byte
    } else if (dbcsCode < 0x1000000) {
      newBuf[j++] = dbcsCode >> 16;
      newBuf[j++] = dbcsCode >> 8 & 0xFF;
      newBuf[j++] = dbcsCode & 0xFF;
    } else {
      newBuf[j++] = dbcsCode >>> 24;
      newBuf[j++] = dbcsCode >>> 16 & 0xFF;
      newBuf[j++] = dbcsCode >>> 8 & 0xFF;
      newBuf[j++] = dbcsCode & 0xFF;
    }
  }

  this.seqObj = seqObj;
  this.leadSurrogate = leadSurrogate;
  return newBuf.slice(0, j);
};

DBCSEncoder.prototype.end = function () {
  if (this.leadSurrogate === -1 && this.seqObj === undefined) return; // All clean. Most often case.

  var newBuf = Buffer.alloc(10),
      j = 0;

  if (this.seqObj) {
    // We're in the sequence.
    var dbcsCode = this.seqObj[DEF_CHAR];

    if (dbcsCode !== undefined) {
      // Write beginning of the sequence.
      if (dbcsCode < 0x100) {
        newBuf[j++] = dbcsCode;
      } else {
        newBuf[j++] = dbcsCode >> 8; // high byte

        newBuf[j++] = dbcsCode & 0xFF; // low byte
      }
    } else {// See todo above.
    }

    this.seqObj = undefined;
  }

  if (this.leadSurrogate !== -1) {
    // Incomplete surrogate pair - only lead surrogate found.
    newBuf[j++] = this.defaultCharSingleByte;
    this.leadSurrogate = -1;
  }

  return newBuf.slice(0, j);
}; // Export for testing


DBCSEncoder.prototype.findIdx = findIdx; // == Decoder ==================================================================

function DBCSDecoder(options, codec) {
  // Decoder state
  this.nodeIdx = 0;
  this.prevBytes = []; // Static data

  this.decodeTables = codec.decodeTables;
  this.decodeTableSeq = codec.decodeTableSeq;
  this.defaultCharUnicode = codec.defaultCharUnicode;
  this.gb18030 = codec.gb18030;
}

DBCSDecoder.prototype.write = function (buf) {
  var newBuf = Buffer.alloc(buf.length * 2),
      nodeIdx = this.nodeIdx,
      prevBytes = this.prevBytes,
      prevOffset = this.prevBytes.length,
      seqStart = -this.prevBytes.length,
      // idx of the start of current parsed sequence.
  uCode;

  for (var i = 0, j = 0; i < buf.length; i++) {
    var curByte = i >= 0 ? buf[i] : prevBytes[i + prevOffset]; // Lookup in current trie node.

    var uCode = this.decodeTables[nodeIdx][curByte];

    if (uCode >= 0) {// Normal character, just use it.
    } else if (uCode === UNASSIGNED) {
      // Unknown char.
      // TODO: Callback with seq.
      uCode = this.defaultCharUnicode.charCodeAt(0);
      i = seqStart; // Skip one byte ('i' will be incremented by the for loop) and try to parse again.
    } else if (uCode === GB18030_CODE) {
      if (i >= 3) {
        var ptr = (buf[i - 3] - 0x81) * 12600 + (buf[i - 2] - 0x30) * 1260 + (buf[i - 1] - 0x81) * 10 + (curByte - 0x30);
      } else {
        var ptr = (prevBytes[i - 3 + prevOffset] - 0x81) * 12600 + ((i - 2 >= 0 ? buf[i - 2] : prevBytes[i - 2 + prevOffset]) - 0x30) * 1260 + ((i - 1 >= 0 ? buf[i - 1] : prevBytes[i - 1 + prevOffset]) - 0x81) * 10 + (curByte - 0x30);
      }

      var idx = findIdx(this.gb18030.gbChars, ptr);
      uCode = this.gb18030.uChars[idx] + ptr - this.gb18030.gbChars[idx];
    } else if (uCode <= NODE_START) {
      // Go to next trie node.
      nodeIdx = NODE_START - uCode;
      continue;
    } else if (uCode <= SEQ_START) {
      // Output a sequence of chars.
      var seq = this.decodeTableSeq[SEQ_START - uCode];

      for (var k = 0; k < seq.length - 1; k++) {
        uCode = seq[k];
        newBuf[j++] = uCode & 0xFF;
        newBuf[j++] = uCode >> 8;
      }

      uCode = seq[seq.length - 1];
    } else throw new Error("iconv-lite internal error: invalid decoding table value " + uCode + " at " + nodeIdx + "/" + curByte); // Write the character to buffer, handling higher planes using surrogate pair.


    if (uCode >= 0x10000) {
      uCode -= 0x10000;
      var uCodeLead = 0xD800 | uCode >> 10;
      newBuf[j++] = uCodeLead & 0xFF;
      newBuf[j++] = uCodeLead >> 8;
      uCode = 0xDC00 | uCode & 0x3FF;
    }

    newBuf[j++] = uCode & 0xFF;
    newBuf[j++] = uCode >> 8; // Reset trie node.

    nodeIdx = 0;
    seqStart = i + 1;
  }

  this.nodeIdx = nodeIdx;
  this.prevBytes = seqStart >= 0 ? Array.prototype.slice.call(buf, seqStart) : prevBytes.slice(seqStart + prevOffset).concat(Array.prototype.slice.call(buf));
  return newBuf.slice(0, j).toString('ucs2');
};

DBCSDecoder.prototype.end = function () {
  var ret = ''; // Try to parse all remaining chars.

  while (this.prevBytes.length > 0) {
    // Skip 1 character in the buffer.
    ret += this.defaultCharUnicode;
    var bytesArr = this.prevBytes.slice(1); // Parse remaining as usual.

    this.prevBytes = [];
    this.nodeIdx = 0;
    if (bytesArr.length > 0) ret += this.write(bytesArr);
  }

  this.prevBytes = [];
  this.nodeIdx = 0;
  return ret;
}; // Binary search for GB18030. Returns largest i such that table[i] <= val.


function findIdx(table, val) {
  if (table[0] > val) return -1;
  var l = 0,
      r = table.length;

  while (l < r - 1) {
    // always table[l] <= val < table[r]
    var mid = l + (r - l + 1 >> 1);
    if (table[mid] <= val) l = mid;else r = mid;
  }

  return l;
}

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/dbcs-data.js":
/*!******************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/dbcs-data.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
 // Description of supported double byte encodings and aliases.
// Tables are not require()-d until they are needed to speed up library load.
// require()-s are direct to support Browserify.

module.exports = {
  // == Japanese/ShiftJIS ====================================================
  // All japanese encodings are based on JIS X set of standards:
  // JIS X 0201 - Single-byte encoding of ASCII + ¥ + Kana chars at 0xA1-0xDF.
  // JIS X 0208 - Main set of 6879 characters, placed in 94x94 plane, to be encoded by 2 bytes. 
  //              Has several variations in 1978, 1983, 1990 and 1997.
  // JIS X 0212 - Supplementary plane of 6067 chars in 94x94 plane. 1990. Effectively dead.
  // JIS X 0213 - Extension and modern replacement of 0208 and 0212. Total chars: 11233.
  //              2 planes, first is superset of 0208, second - revised 0212.
  //              Introduced in 2000, revised 2004. Some characters are in Unicode Plane 2 (0x2xxxx)
  // Byte encodings are:
  //  * Shift_JIS: Compatible with 0201, uses not defined chars in top half as lead bytes for double-byte
  //               encoding of 0208. Lead byte ranges: 0x81-0x9F, 0xE0-0xEF; Trail byte ranges: 0x40-0x7E, 0x80-0x9E, 0x9F-0xFC.
  //               Windows CP932 is a superset of Shift_JIS. Some companies added more chars, notably KDDI.
  //  * EUC-JP:    Up to 3 bytes per character. Used mostly on *nixes.
  //               0x00-0x7F       - lower part of 0201
  //               0x8E, 0xA1-0xDF - upper part of 0201
  //               (0xA1-0xFE)x2   - 0208 plane (94x94).
  //               0x8F, (0xA1-0xFE)x2 - 0212 plane (94x94).
  //  * JIS X 208: 7-bit, direct encoding of 0208. Byte ranges: 0x21-0x7E (94 values). Uncommon.
  //               Used as-is in ISO2022 family.
  //  * ISO2022-JP: Stateful encoding, with escape sequences to switch between ASCII, 
  //                0201-1976 Roman, 0208-1978, 0208-1983.
  //  * ISO2022-JP-1: Adds esc seq for 0212-1990.
  //  * ISO2022-JP-2: Adds esc seq for GB2313-1980, KSX1001-1992, ISO8859-1, ISO8859-7.
  //  * ISO2022-JP-3: Adds esc seq for 0201-1976 Kana set, 0213-2000 Planes 1, 2.
  //  * ISO2022-JP-2004: Adds 0213-2004 Plane 1.
  //
  // After JIS X 0213 appeared, Shift_JIS-2004, EUC-JISX0213 and ISO2022-JP-2004 followed, with just changing the planes.
  //
  // Overall, it seems that it's a mess :( http://www8.plala.or.jp/tkubota1/unicode-symbols-map2.html
  'shiftjis': {
    type: '_dbcs',
    table: function () {
      return __webpack_require__(/*! ./tables/shiftjis.json */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/shiftjis.json");
    },
    encodeAdd: {
      '\u00a5': 0x5C,
      '\u203E': 0x7E
    },
    encodeSkipVals: [{
      from: 0xED40,
      to: 0xF940
    }]
  },
  'csshiftjis': 'shiftjis',
  'mskanji': 'shiftjis',
  'sjis': 'shiftjis',
  'windows31j': 'shiftjis',
  'ms31j': 'shiftjis',
  'xsjis': 'shiftjis',
  'windows932': 'shiftjis',
  'ms932': 'shiftjis',
  '932': 'shiftjis',
  'cp932': 'shiftjis',
  'eucjp': {
    type: '_dbcs',
    table: function () {
      return __webpack_require__(/*! ./tables/eucjp.json */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/eucjp.json");
    },
    encodeAdd: {
      '\u00a5': 0x5C,
      '\u203E': 0x7E
    }
  },
  // TODO: KDDI extension to Shift_JIS
  // TODO: IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
  // TODO: IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.
  // == Chinese/GBK ==========================================================
  // http://en.wikipedia.org/wiki/GBK
  // We mostly implement W3C recommendation: https://www.w3.org/TR/encoding/#gbk-encoder
  // Oldest GB2312 (1981, ~7600 chars) is a subset of CP936
  'gb2312': 'cp936',
  'gb231280': 'cp936',
  'gb23121980': 'cp936',
  'csgb2312': 'cp936',
  'csiso58gb231280': 'cp936',
  'euccn': 'cp936',
  // Microsoft's CP936 is a subset and approximation of GBK.
  'windows936': 'cp936',
  'ms936': 'cp936',
  '936': 'cp936',
  'cp936': {
    type: '_dbcs',
    table: function () {
      return __webpack_require__(/*! ./tables/cp936.json */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/cp936.json");
    }
  },
  // GBK (~22000 chars) is an extension of CP936 that added user-mapped chars and some other.
  'gbk': {
    type: '_dbcs',
    table: function () {
      return (__webpack_require__(/*! ./tables/cp936.json */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/cp936.json").concat)(__webpack_require__(/*! ./tables/gbk-added.json */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/gbk-added.json"));
    }
  },
  'xgbk': 'gbk',
  'isoir58': 'gbk',
  // GB18030 is an algorithmic extension of GBK.
  // Main source: https://www.w3.org/TR/encoding/#gbk-encoder
  // http://icu-project.org/docs/papers/gb18030.html
  // http://source.icu-project.org/repos/icu/data/trunk/charset/data/xml/gb-18030-2000.xml
  // http://www.khngai.com/chinese/charmap/tblgbk.php?page=0
  'gb18030': {
    type: '_dbcs',
    table: function () {
      return (__webpack_require__(/*! ./tables/cp936.json */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/cp936.json").concat)(__webpack_require__(/*! ./tables/gbk-added.json */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/gbk-added.json"));
    },
    gb18030: function () {
      return __webpack_require__(/*! ./tables/gb18030-ranges.json */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/gb18030-ranges.json");
    },
    encodeSkipVals: [0x80],
    encodeAdd: {
      '€': 0xA2E3
    }
  },
  'chinese': 'gb18030',
  // == Korean ===============================================================
  // EUC-KR, KS_C_5601 and KS X 1001 are exactly the same.
  'windows949': 'cp949',
  'ms949': 'cp949',
  '949': 'cp949',
  'cp949': {
    type: '_dbcs',
    table: function () {
      return __webpack_require__(/*! ./tables/cp949.json */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/cp949.json");
    }
  },
  'cseuckr': 'cp949',
  'csksc56011987': 'cp949',
  'euckr': 'cp949',
  'isoir149': 'cp949',
  'korean': 'cp949',
  'ksc56011987': 'cp949',
  'ksc56011989': 'cp949',
  'ksc5601': 'cp949',
  // == Big5/Taiwan/Hong Kong ================================================
  // There are lots of tables for Big5 and cp950. Please see the following links for history:
  // http://moztw.org/docs/big5/  http://www.haible.de/bruno/charsets/conversion-tables/Big5.html
  // Variations, in roughly number of defined chars:
  //  * Windows CP 950: Microsoft variant of Big5. Canonical: http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT
  //  * Windows CP 951: Microsoft variant of Big5-HKSCS-2001. Seems to be never public. http://me.abelcheung.org/articles/research/what-is-cp951/
  //  * Big5-2003 (Taiwan standard) almost superset of cp950.
  //  * Unicode-at-on (UAO) / Mozilla 1.8. Falling out of use on the Web. Not supported by other browsers.
  //  * Big5-HKSCS (-2001, -2004, -2008). Hong Kong standard. 
  //    many unicode code points moved from PUA to Supplementary plane (U+2XXXX) over the years.
  //    Plus, it has 4 combining sequences.
  //    Seems that Mozilla refused to support it for 10 yrs. https://bugzilla.mozilla.org/show_bug.cgi?id=162431 https://bugzilla.mozilla.org/show_bug.cgi?id=310299
  //    because big5-hkscs is the only encoding to include astral characters in non-algorithmic way.
  //    Implementations are not consistent within browsers; sometimes labeled as just big5.
  //    MS Internet Explorer switches from big5 to big5-hkscs when a patch applied.
  //    Great discussion & recap of what's going on https://bugzilla.mozilla.org/show_bug.cgi?id=912470#c31
  //    In the encoder, it might make sense to support encoding old PUA mappings to Big5 bytes seq-s.
  //    Official spec: http://www.ogcio.gov.hk/en/business/tech_promotion/ccli/terms/doc/2003cmp_2008.txt
  //                   http://www.ogcio.gov.hk/tc/business/tech_promotion/ccli/terms/doc/hkscs-2008-big5-iso.txt
  // 
  // Current understanding of how to deal with Big5(-HKSCS) is in the Encoding Standard, http://encoding.spec.whatwg.org/#big5-encoder
  // Unicode mapping (http://www.unicode.org/Public/MAPPINGS/OBSOLETE/EASTASIA/OTHER/BIG5.TXT) is said to be wrong.
  'windows950': 'cp950',
  'ms950': 'cp950',
  '950': 'cp950',
  'cp950': {
    type: '_dbcs',
    table: function () {
      return __webpack_require__(/*! ./tables/cp950.json */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/cp950.json");
    }
  },
  // Big5 has many variations and is an extension of cp950. We use Encoding Standard's as a consensus.
  'big5': 'big5hkscs',
  'big5hkscs': {
    type: '_dbcs',
    table: function () {
      return (__webpack_require__(/*! ./tables/cp950.json */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/cp950.json").concat)(__webpack_require__(/*! ./tables/big5-added.json */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/big5-added.json"));
    },
    encodeSkipVals: [0xa2cc]
  },
  'cnbig5': 'big5hkscs',
  'csbig5': 'big5hkscs',
  'xxbig5': 'big5hkscs'
};

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
 // Update this array if you add/rename/remove files in this directory.
// We support Browserify by skipping automatic module discovery and requiring modules directly.

var modules = [__webpack_require__(/*! ./internal */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/internal.js"), __webpack_require__(/*! ./utf32 */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/utf32.js"), __webpack_require__(/*! ./utf16 */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/utf16.js"), __webpack_require__(/*! ./utf7 */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/utf7.js"), __webpack_require__(/*! ./sbcs-codec */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/sbcs-codec.js"), __webpack_require__(/*! ./sbcs-data */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/sbcs-data.js"), __webpack_require__(/*! ./sbcs-data-generated */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/sbcs-data-generated.js"), __webpack_require__(/*! ./dbcs-codec */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/dbcs-codec.js"), __webpack_require__(/*! ./dbcs-data */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/dbcs-data.js")]; // Put all encoding/alias/codec definitions to single object and export it.

for (var i = 0; i < modules.length; i++) {
  var module = modules[i];

  for (var enc in module) if (Object.prototype.hasOwnProperty.call(module, enc)) exports[enc] = module[enc];
}

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/internal.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/internal.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Buffer = (__webpack_require__(/*! safer-buffer */ "./node_modules/safer-buffer/safer.js").Buffer); // Export Node.js internal encodings.


module.exports = {
  // Encodings
  utf8: {
    type: "_internal",
    bomAware: true
  },
  cesu8: {
    type: "_internal",
    bomAware: true
  },
  unicode11utf8: "utf8",
  ucs2: {
    type: "_internal",
    bomAware: true
  },
  utf16le: "ucs2",
  binary: {
    type: "_internal"
  },
  base64: {
    type: "_internal"
  },
  hex: {
    type: "_internal"
  },
  // Codec.
  _internal: InternalCodec
}; //------------------------------------------------------------------------------

function InternalCodec(codecOptions, iconv) {
  this.enc = codecOptions.encodingName;
  this.bomAware = codecOptions.bomAware;
  if (this.enc === "base64") this.encoder = InternalEncoderBase64;else if (this.enc === "cesu8") {
    this.enc = "utf8"; // Use utf8 for decoding.

    this.encoder = InternalEncoderCesu8; // Add decoder for versions of Node not supporting CESU-8

    if (Buffer.from('eda0bdedb2a9', 'hex').toString() !== '💩') {
      this.decoder = InternalDecoderCesu8;
      this.defaultCharUnicode = iconv.defaultCharUnicode;
    }
  }
}

InternalCodec.prototype.encoder = InternalEncoder;
InternalCodec.prototype.decoder = InternalDecoder; //------------------------------------------------------------------------------
// We use node.js internal decoder. Its signature is the same as ours.

var StringDecoder = (__webpack_require__(/*! string_decoder */ "string_decoder").StringDecoder);

if (!StringDecoder.prototype.end) // Node v0.8 doesn't have this method.
  StringDecoder.prototype.end = function () {};

function InternalDecoder(options, codec) {
  this.decoder = new StringDecoder(codec.enc);
}

InternalDecoder.prototype.write = function (buf) {
  if (!Buffer.isBuffer(buf)) {
    buf = Buffer.from(buf);
  }

  return this.decoder.write(buf);
};

InternalDecoder.prototype.end = function () {
  return this.decoder.end();
}; //------------------------------------------------------------------------------
// Encoder is mostly trivial


function InternalEncoder(options, codec) {
  this.enc = codec.enc;
}

InternalEncoder.prototype.write = function (str) {
  return Buffer.from(str, this.enc);
};

InternalEncoder.prototype.end = function () {}; //------------------------------------------------------------------------------
// Except base64 encoder, which must keep its state.


function InternalEncoderBase64(options, codec) {
  this.prevStr = '';
}

InternalEncoderBase64.prototype.write = function (str) {
  str = this.prevStr + str;
  var completeQuads = str.length - str.length % 4;
  this.prevStr = str.slice(completeQuads);
  str = str.slice(0, completeQuads);
  return Buffer.from(str, "base64");
};

InternalEncoderBase64.prototype.end = function () {
  return Buffer.from(this.prevStr, "base64");
}; //------------------------------------------------------------------------------
// CESU-8 encoder is also special.


function InternalEncoderCesu8(options, codec) {}

InternalEncoderCesu8.prototype.write = function (str) {
  var buf = Buffer.alloc(str.length * 3),
      bufIdx = 0;

  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i); // Naive implementation, but it works because CESU-8 is especially easy
    // to convert from UTF-16 (which all JS strings are encoded in).

    if (charCode < 0x80) buf[bufIdx++] = charCode;else if (charCode < 0x800) {
      buf[bufIdx++] = 0xC0 + (charCode >>> 6);
      buf[bufIdx++] = 0x80 + (charCode & 0x3f);
    } else {
      // charCode will always be < 0x10000 in javascript.
      buf[bufIdx++] = 0xE0 + (charCode >>> 12);
      buf[bufIdx++] = 0x80 + (charCode >>> 6 & 0x3f);
      buf[bufIdx++] = 0x80 + (charCode & 0x3f);
    }
  }

  return buf.slice(0, bufIdx);
};

InternalEncoderCesu8.prototype.end = function () {}; //------------------------------------------------------------------------------
// CESU-8 decoder is not implemented in Node v4.0+


function InternalDecoderCesu8(options, codec) {
  this.acc = 0;
  this.contBytes = 0;
  this.accBytes = 0;
  this.defaultCharUnicode = codec.defaultCharUnicode;
}

InternalDecoderCesu8.prototype.write = function (buf) {
  var acc = this.acc,
      contBytes = this.contBytes,
      accBytes = this.accBytes,
      res = '';

  for (var i = 0; i < buf.length; i++) {
    var curByte = buf[i];

    if ((curByte & 0xC0) !== 0x80) {
      // Leading byte
      if (contBytes > 0) {
        // Previous code is invalid
        res += this.defaultCharUnicode;
        contBytes = 0;
      }

      if (curByte < 0x80) {
        // Single-byte code
        res += String.fromCharCode(curByte);
      } else if (curByte < 0xE0) {
        // Two-byte code
        acc = curByte & 0x1F;
        contBytes = 1;
        accBytes = 1;
      } else if (curByte < 0xF0) {
        // Three-byte code
        acc = curByte & 0x0F;
        contBytes = 2;
        accBytes = 1;
      } else {
        // Four or more are not supported for CESU-8.
        res += this.defaultCharUnicode;
      }
    } else {
      // Continuation byte
      if (contBytes > 0) {
        // We're waiting for it.
        acc = acc << 6 | curByte & 0x3f;
        contBytes--;
        accBytes++;

        if (contBytes === 0) {
          // Check for overlong encoding, but support Modified UTF-8 (encoding NULL as C0 80)
          if (accBytes === 2 && acc < 0x80 && acc > 0) res += this.defaultCharUnicode;else if (accBytes === 3 && acc < 0x800) res += this.defaultCharUnicode;else // Actually add character.
            res += String.fromCharCode(acc);
        }
      } else {
        // Unexpected continuation byte
        res += this.defaultCharUnicode;
      }
    }
  }

  this.acc = acc;
  this.contBytes = contBytes;
  this.accBytes = accBytes;
  return res;
};

InternalDecoderCesu8.prototype.end = function () {
  var res = 0;
  if (this.contBytes > 0) res += this.defaultCharUnicode;
  return res;
};

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/sbcs-codec.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/sbcs-codec.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var Buffer = (__webpack_require__(/*! safer-buffer */ "./node_modules/safer-buffer/safer.js").Buffer); // Single-byte codec. Needs a 'chars' string parameter that contains 256 or 128 chars that
// correspond to encoded bytes (if 128 - then lower half is ASCII). 


exports._sbcs = SBCSCodec;

function SBCSCodec(codecOptions, iconv) {
  if (!codecOptions) throw new Error("SBCS codec is called without the data."); // Prepare char buffer for decoding.

  if (!codecOptions.chars || codecOptions.chars.length !== 128 && codecOptions.chars.length !== 256) throw new Error("Encoding '" + codecOptions.type + "' has incorrect 'chars' (must be of len 128 or 256)");

  if (codecOptions.chars.length === 128) {
    var asciiString = "";

    for (var i = 0; i < 128; i++) asciiString += String.fromCharCode(i);

    codecOptions.chars = asciiString + codecOptions.chars;
  }

  this.decodeBuf = Buffer.from(codecOptions.chars, 'ucs2'); // Encoding buffer.

  var encodeBuf = Buffer.alloc(65536, iconv.defaultCharSingleByte.charCodeAt(0));

  for (var i = 0; i < codecOptions.chars.length; i++) encodeBuf[codecOptions.chars.charCodeAt(i)] = i;

  this.encodeBuf = encodeBuf;
}

SBCSCodec.prototype.encoder = SBCSEncoder;
SBCSCodec.prototype.decoder = SBCSDecoder;

function SBCSEncoder(options, codec) {
  this.encodeBuf = codec.encodeBuf;
}

SBCSEncoder.prototype.write = function (str) {
  var buf = Buffer.alloc(str.length);

  for (var i = 0; i < str.length; i++) buf[i] = this.encodeBuf[str.charCodeAt(i)];

  return buf;
};

SBCSEncoder.prototype.end = function () {};

function SBCSDecoder(options, codec) {
  this.decodeBuf = codec.decodeBuf;
}

SBCSDecoder.prototype.write = function (buf) {
  // Strings are immutable in JS -> we use ucs2 buffer to speed up computations.
  var decodeBuf = this.decodeBuf;
  var newBuf = Buffer.alloc(buf.length * 2);
  var idx1 = 0,
      idx2 = 0;

  for (var i = 0; i < buf.length; i++) {
    idx1 = buf[i] * 2;
    idx2 = i * 2;
    newBuf[idx2] = decodeBuf[idx1];
    newBuf[idx2 + 1] = decodeBuf[idx1 + 1];
  }

  return newBuf.toString('ucs2');
};

SBCSDecoder.prototype.end = function () {};

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/sbcs-data-generated.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/sbcs-data-generated.js ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
 // Generated data for sbcs codec. Don't edit manually. Regenerate using generation/gen-sbcs.js script.

module.exports = {
  "437": "cp437",
  "737": "cp737",
  "775": "cp775",
  "850": "cp850",
  "852": "cp852",
  "855": "cp855",
  "856": "cp856",
  "857": "cp857",
  "858": "cp858",
  "860": "cp860",
  "861": "cp861",
  "862": "cp862",
  "863": "cp863",
  "864": "cp864",
  "865": "cp865",
  "866": "cp866",
  "869": "cp869",
  "874": "windows874",
  "922": "cp922",
  "1046": "cp1046",
  "1124": "cp1124",
  "1125": "cp1125",
  "1129": "cp1129",
  "1133": "cp1133",
  "1161": "cp1161",
  "1162": "cp1162",
  "1163": "cp1163",
  "1250": "windows1250",
  "1251": "windows1251",
  "1252": "windows1252",
  "1253": "windows1253",
  "1254": "windows1254",
  "1255": "windows1255",
  "1256": "windows1256",
  "1257": "windows1257",
  "1258": "windows1258",
  "28591": "iso88591",
  "28592": "iso88592",
  "28593": "iso88593",
  "28594": "iso88594",
  "28595": "iso88595",
  "28596": "iso88596",
  "28597": "iso88597",
  "28598": "iso88598",
  "28599": "iso88599",
  "28600": "iso885910",
  "28601": "iso885911",
  "28603": "iso885913",
  "28604": "iso885914",
  "28605": "iso885915",
  "28606": "iso885916",
  "windows874": {
    "type": "_sbcs",
    "chars": "€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
  },
  "win874": "windows874",
  "cp874": "windows874",
  "windows1250": {
    "type": "_sbcs",
    "chars": "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
  },
  "win1250": "windows1250",
  "cp1250": "windows1250",
  "windows1251": {
    "type": "_sbcs",
    "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
  },
  "win1251": "windows1251",
  "cp1251": "windows1251",
  "windows1252": {
    "type": "_sbcs",
    "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
  },
  "win1252": "windows1252",
  "cp1252": "windows1252",
  "windows1253": {
    "type": "_sbcs",
    "chars": "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
  },
  "win1253": "windows1253",
  "cp1253": "windows1253",
  "windows1254": {
    "type": "_sbcs",
    "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
  },
  "win1254": "windows1254",
  "cp1254": "windows1254",
  "windows1255": {
    "type": "_sbcs",
    "chars": "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
  },
  "win1255": "windows1255",
  "cp1255": "windows1255",
  "windows1256": {
    "type": "_sbcs",
    "chars": "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"
  },
  "win1256": "windows1256",
  "cp1256": "windows1256",
  "windows1257": {
    "type": "_sbcs",
    "chars": "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"
  },
  "win1257": "windows1257",
  "cp1257": "windows1257",
  "windows1258": {
    "type": "_sbcs",
    "chars": "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
  },
  "win1258": "windows1258",
  "cp1258": "windows1258",
  "iso88591": {
    "type": "_sbcs",
    "chars": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
  },
  "cp28591": "iso88591",
  "iso88592": {
    "type": "_sbcs",
    "chars": " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
  },
  "cp28592": "iso88592",
  "iso88593": {
    "type": "_sbcs",
    "chars": " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙"
  },
  "cp28593": "iso88593",
  "iso88594": {
    "type": "_sbcs",
    "chars": " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙"
  },
  "cp28594": "iso88594",
  "iso88595": {
    "type": "_sbcs",
    "chars": " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ"
  },
  "cp28595": "iso88595",
  "iso88596": {
    "type": "_sbcs",
    "chars": " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"
  },
  "cp28596": "iso88596",
  "iso88597": {
    "type": "_sbcs",
    "chars": " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
  },
  "cp28597": "iso88597",
  "iso88598": {
    "type": "_sbcs",
    "chars": " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
  },
  "cp28598": "iso88598",
  "iso88599": {
    "type": "_sbcs",
    "chars": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
  },
  "cp28599": "iso88599",
  "iso885910": {
    "type": "_sbcs",
    "chars": " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ"
  },
  "cp28600": "iso885910",
  "iso885911": {
    "type": "_sbcs",
    "chars": " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
  },
  "cp28601": "iso885911",
  "iso885913": {
    "type": "_sbcs",
    "chars": " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’"
  },
  "cp28603": "iso885913",
  "iso885914": {
    "type": "_sbcs",
    "chars": " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ"
  },
  "cp28604": "iso885914",
  "iso885915": {
    "type": "_sbcs",
    "chars": " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
  },
  "cp28605": "iso885915",
  "iso885916": {
    "type": "_sbcs",
    "chars": " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"
  },
  "cp28606": "iso885916",
  "cp437": {
    "type": "_sbcs",
    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
  },
  "ibm437": "cp437",
  "csibm437": "cp437",
  "cp737": {
    "type": "_sbcs",
    "chars": "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "
  },
  "ibm737": "cp737",
  "csibm737": "cp737",
  "cp775": {
    "type": "_sbcs",
    "chars": "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "
  },
  "ibm775": "cp775",
  "csibm775": "cp775",
  "cp850": {
    "type": "_sbcs",
    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
  },
  "ibm850": "cp850",
  "csibm850": "cp850",
  "cp852": {
    "type": "_sbcs",
    "chars": "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "
  },
  "ibm852": "cp852",
  "csibm852": "cp852",
  "cp855": {
    "type": "_sbcs",
    "chars": "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "
  },
  "ibm855": "cp855",
  "csibm855": "cp855",
  "cp856": {
    "type": "_sbcs",
    "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ "
  },
  "ibm856": "cp856",
  "csibm856": "cp856",
  "cp857": {
    "type": "_sbcs",
    "chars": "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "
  },
  "ibm857": "cp857",
  "csibm857": "cp857",
  "cp858": {
    "type": "_sbcs",
    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
  },
  "ibm858": "cp858",
  "csibm858": "cp858",
  "cp860": {
    "type": "_sbcs",
    "chars": "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
  },
  "ibm860": "cp860",
  "csibm860": "cp860",
  "cp861": {
    "type": "_sbcs",
    "chars": "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
  },
  "ibm861": "cp861",
  "csibm861": "cp861",
  "cp862": {
    "type": "_sbcs",
    "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
  },
  "ibm862": "cp862",
  "csibm862": "cp862",
  "cp863": {
    "type": "_sbcs",
    "chars": "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
  },
  "ibm863": "cp863",
  "csibm863": "cp863",
  "cp864": {
    "type": "_sbcs",
    "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�"
  },
  "ibm864": "cp864",
  "csibm864": "cp864",
  "cp865": {
    "type": "_sbcs",
    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
  },
  "ibm865": "cp865",
  "csibm865": "cp865",
  "cp866": {
    "type": "_sbcs",
    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "
  },
  "ibm866": "cp866",
  "csibm866": "cp866",
  "cp869": {
    "type": "_sbcs",
    "chars": "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "
  },
  "ibm869": "cp869",
  "csibm869": "cp869",
  "cp922": {
    "type": "_sbcs",
    "chars": " ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"
  },
  "ibm922": "cp922",
  "csibm922": "cp922",
  "cp1046": {
    "type": "_sbcs",
    "chars": "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"
  },
  "ibm1046": "cp1046",
  "csibm1046": "cp1046",
  "cp1124": {
    "type": "_sbcs",
    "chars": " ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ"
  },
  "ibm1124": "cp1124",
  "csibm1124": "cp1124",
  "cp1125": {
    "type": "_sbcs",
    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "
  },
  "ibm1125": "cp1125",
  "csibm1125": "cp1125",
  "cp1129": {
    "type": "_sbcs",
    "chars": " ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
  },
  "ibm1129": "cp1129",
  "csibm1129": "cp1129",
  "cp1133": {
    "type": "_sbcs",
    "chars": " ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�"
  },
  "ibm1133": "cp1133",
  "csibm1133": "cp1133",
  "cp1161": {
    "type": "_sbcs",
    "chars": "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ "
  },
  "ibm1161": "cp1161",
  "csibm1161": "cp1161",
  "cp1162": {
    "type": "_sbcs",
    "chars": "€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
  },
  "ibm1162": "cp1162",
  "csibm1162": "cp1162",
  "cp1163": {
    "type": "_sbcs",
    "chars": " ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
  },
  "ibm1163": "cp1163",
  "csibm1163": "cp1163",
  "maccroatian": {
    "type": "_sbcs",
    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
  },
  "maccyrillic": {
    "type": "_sbcs",
    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
  },
  "macgreek": {
    "type": "_sbcs",
    "chars": "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"
  },
  "maciceland": {
    "type": "_sbcs",
    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
  },
  "macroman": {
    "type": "_sbcs",
    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
  },
  "macromania": {
    "type": "_sbcs",
    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
  },
  "macthai": {
    "type": "_sbcs",
    "chars": "«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู﻿​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����"
  },
  "macturkish": {
    "type": "_sbcs",
    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ"
  },
  "macukraine": {
    "type": "_sbcs",
    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
  },
  "koi8r": {
    "type": "_sbcs",
    "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
  },
  "koi8u": {
    "type": "_sbcs",
    "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
  },
  "koi8ru": {
    "type": "_sbcs",
    "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
  },
  "koi8t": {
    "type": "_sbcs",
    "chars": "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
  },
  "armscii8": {
    "type": "_sbcs",
    "chars": " �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"
  },
  "rk1048": {
    "type": "_sbcs",
    "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
  },
  "tcvn": {
    "type": "_sbcs",
    "chars": "\u0000ÚỤ\u0003ỪỬỮ\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010ỨỰỲỶỸÝỴ\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ"
  },
  "georgianacademy": {
    "type": "_sbcs",
    "chars": "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
  },
  "georgianps": {
    "type": "_sbcs",
    "chars": "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
  },
  "pt154": {
    "type": "_sbcs",
    "chars": "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
  },
  "viscii": {
    "type": "_sbcs",
    "chars": "\u0000\u0001Ẳ\u0003\u0004ẴẪ\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013Ỷ\u0015\u0016\u0017\u0018Ỹ\u001a\u001b\u001c\u001dỴ\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ"
  },
  "iso646cn": {
    "type": "_sbcs",
    "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
  },
  "iso646jp": {
    "type": "_sbcs",
    "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
  },
  "hproman8": {
    "type": "_sbcs",
    "chars": " ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�"
  },
  "macintosh": {
    "type": "_sbcs",
    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
  },
  "ascii": {
    "type": "_sbcs",
    "chars": "��������������������������������������������������������������������������������������������������������������������������������"
  },
  "tis620": {
    "type": "_sbcs",
    "chars": "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
  }
};

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/sbcs-data.js":
/*!******************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/sbcs-data.js ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
 // Manually added data to be used by sbcs codec in addition to generated one.

module.exports = {
  // Not supported by iconv, not sure why.
  "10029": "maccenteuro",
  "maccenteuro": {
    "type": "_sbcs",
    "chars": "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
  },
  "808": "cp808",
  "ibm808": "cp808",
  "cp808": {
    "type": "_sbcs",
    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ "
  },
  "mik": {
    "type": "_sbcs",
    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
  },
  "cp720": {
    "type": "_sbcs",
    "chars": "\x80\x81éâ\x84à\x86çêëèïî\x8d\x8e\x8f\x90\u0651\u0652ô¤ـûùءآأؤ£إئابةتثجحخدذرزسشص«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ضطظعغفµقكلمنهوىي≡\u064b\u064c\u064d\u064e\u064f\u0650≈°∙·√ⁿ²■\u00a0"
  },
  // Aliases of generated encodings.
  "ascii8bit": "ascii",
  "usascii": "ascii",
  "ansix34": "ascii",
  "ansix341968": "ascii",
  "ansix341986": "ascii",
  "csascii": "ascii",
  "cp367": "ascii",
  "ibm367": "ascii",
  "isoir6": "ascii",
  "iso646us": "ascii",
  "iso646irv": "ascii",
  "us": "ascii",
  "latin1": "iso88591",
  "latin2": "iso88592",
  "latin3": "iso88593",
  "latin4": "iso88594",
  "latin5": "iso88599",
  "latin6": "iso885910",
  "latin7": "iso885913",
  "latin8": "iso885914",
  "latin9": "iso885915",
  "latin10": "iso885916",
  "csisolatin1": "iso88591",
  "csisolatin2": "iso88592",
  "csisolatin3": "iso88593",
  "csisolatin4": "iso88594",
  "csisolatincyrillic": "iso88595",
  "csisolatinarabic": "iso88596",
  "csisolatingreek": "iso88597",
  "csisolatinhebrew": "iso88598",
  "csisolatin5": "iso88599",
  "csisolatin6": "iso885910",
  "l1": "iso88591",
  "l2": "iso88592",
  "l3": "iso88593",
  "l4": "iso88594",
  "l5": "iso88599",
  "l6": "iso885910",
  "l7": "iso885913",
  "l8": "iso885914",
  "l9": "iso885915",
  "l10": "iso885916",
  "isoir14": "iso646jp",
  "isoir57": "iso646cn",
  "isoir100": "iso88591",
  "isoir101": "iso88592",
  "isoir109": "iso88593",
  "isoir110": "iso88594",
  "isoir144": "iso88595",
  "isoir127": "iso88596",
  "isoir126": "iso88597",
  "isoir138": "iso88598",
  "isoir148": "iso88599",
  "isoir157": "iso885910",
  "isoir166": "tis620",
  "isoir179": "iso885913",
  "isoir199": "iso885914",
  "isoir203": "iso885915",
  "isoir226": "iso885916",
  "cp819": "iso88591",
  "ibm819": "iso88591",
  "cyrillic": "iso88595",
  "arabic": "iso88596",
  "arabic8": "iso88596",
  "ecma114": "iso88596",
  "asmo708": "iso88596",
  "greek": "iso88597",
  "greek8": "iso88597",
  "ecma118": "iso88597",
  "elot928": "iso88597",
  "hebrew": "iso88598",
  "hebrew8": "iso88598",
  "turkish": "iso88599",
  "turkish8": "iso88599",
  "thai": "iso885911",
  "thai8": "iso885911",
  "celtic": "iso885914",
  "celtic8": "iso885914",
  "isoceltic": "iso885914",
  "tis6200": "tis620",
  "tis62025291": "tis620",
  "tis62025330": "tis620",
  "10000": "macroman",
  "10006": "macgreek",
  "10007": "maccyrillic",
  "10079": "maciceland",
  "10081": "macturkish",
  "cspc8codepage437": "cp437",
  "cspc775baltic": "cp775",
  "cspc850multilingual": "cp850",
  "cspcp852": "cp852",
  "cspc862latinhebrew": "cp862",
  "cpgr": "cp869",
  "msee": "cp1250",
  "mscyrl": "cp1251",
  "msansi": "cp1252",
  "msgreek": "cp1253",
  "msturk": "cp1254",
  "mshebr": "cp1255",
  "msarab": "cp1256",
  "winbaltrim": "cp1257",
  "cp20866": "koi8r",
  "20866": "koi8r",
  "ibm878": "koi8r",
  "cskoi8r": "koi8r",
  "cp21866": "koi8u",
  "21866": "koi8u",
  "ibm1168": "koi8u",
  "strk10482002": "rk1048",
  "tcvn5712": "tcvn",
  "tcvn57121": "tcvn",
  "gb198880": "iso646cn",
  "cn": "iso646cn",
  "csiso14jisc6220ro": "iso646jp",
  "jisc62201969ro": "iso646jp",
  "jp": "iso646jp",
  "cshproman8": "hproman8",
  "r8": "hproman8",
  "roman8": "hproman8",
  "xroman8": "hproman8",
  "ibm1051": "hproman8",
  "mac": "macintosh",
  "csmacintosh": "macintosh"
};

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/utf16.js":
/*!**************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/utf16.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var Buffer = (__webpack_require__(/*! safer-buffer */ "./node_modules/safer-buffer/safer.js").Buffer); // Note: UTF16-LE (or UCS2) codec is Node.js native. See encodings/internal.js
// == UTF16-BE codec. ==========================================================


exports.utf16be = Utf16BECodec;

function Utf16BECodec() {}

Utf16BECodec.prototype.encoder = Utf16BEEncoder;
Utf16BECodec.prototype.decoder = Utf16BEDecoder;
Utf16BECodec.prototype.bomAware = true; // -- Encoding

function Utf16BEEncoder() {}

Utf16BEEncoder.prototype.write = function (str) {
  var buf = Buffer.from(str, 'ucs2');

  for (var i = 0; i < buf.length; i += 2) {
    var tmp = buf[i];
    buf[i] = buf[i + 1];
    buf[i + 1] = tmp;
  }

  return buf;
};

Utf16BEEncoder.prototype.end = function () {}; // -- Decoding


function Utf16BEDecoder() {
  this.overflowByte = -1;
}

Utf16BEDecoder.prototype.write = function (buf) {
  if (buf.length == 0) return '';
  var buf2 = Buffer.alloc(buf.length + 1),
      i = 0,
      j = 0;

  if (this.overflowByte !== -1) {
    buf2[0] = buf[0];
    buf2[1] = this.overflowByte;
    i = 1;
    j = 2;
  }

  for (; i < buf.length - 1; i += 2, j += 2) {
    buf2[j] = buf[i + 1];
    buf2[j + 1] = buf[i];
  }

  this.overflowByte = i == buf.length - 1 ? buf[buf.length - 1] : -1;
  return buf2.slice(0, j).toString('ucs2');
};

Utf16BEDecoder.prototype.end = function () {
  this.overflowByte = -1;
}; // == UTF-16 codec =============================================================
// Decoder chooses automatically from UTF-16LE and UTF-16BE using BOM and space-based heuristic.
// Defaults to UTF-16LE, as it's prevalent and default in Node.
// http://en.wikipedia.org/wiki/UTF-16 and http://encoding.spec.whatwg.org/#utf-16le
// Decoder default can be changed: iconv.decode(buf, 'utf16', {defaultEncoding: 'utf-16be'});
// Encoder uses UTF-16LE and prepends BOM (which can be overridden with addBOM: false).


exports.utf16 = Utf16Codec;

function Utf16Codec(codecOptions, iconv) {
  this.iconv = iconv;
}

Utf16Codec.prototype.encoder = Utf16Encoder;
Utf16Codec.prototype.decoder = Utf16Decoder; // -- Encoding (pass-through)

function Utf16Encoder(options, codec) {
  options = options || {};
  if (options.addBOM === undefined) options.addBOM = true;
  this.encoder = codec.iconv.getEncoder('utf-16le', options);
}

Utf16Encoder.prototype.write = function (str) {
  return this.encoder.write(str);
};

Utf16Encoder.prototype.end = function () {
  return this.encoder.end();
}; // -- Decoding


function Utf16Decoder(options, codec) {
  this.decoder = null;
  this.initialBufs = [];
  this.initialBufsLen = 0;
  this.options = options || {};
  this.iconv = codec.iconv;
}

Utf16Decoder.prototype.write = function (buf) {
  if (!this.decoder) {
    // Codec is not chosen yet. Accumulate initial bytes.
    this.initialBufs.push(buf);
    this.initialBufsLen += buf.length;
    if (this.initialBufsLen < 16) // We need more bytes to use space heuristic (see below)
      return ''; // We have enough bytes -> detect endianness.

    var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
    this.decoder = this.iconv.getDecoder(encoding, this.options);
    var resStr = '';

    for (var i = 0; i < this.initialBufs.length; i++) resStr += this.decoder.write(this.initialBufs[i]);

    this.initialBufs.length = this.initialBufsLen = 0;
    return resStr;
  }

  return this.decoder.write(buf);
};

Utf16Decoder.prototype.end = function () {
  if (!this.decoder) {
    var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
    this.decoder = this.iconv.getDecoder(encoding, this.options);
    var resStr = '';

    for (var i = 0; i < this.initialBufs.length; i++) resStr += this.decoder.write(this.initialBufs[i]);

    var trail = this.decoder.end();
    if (trail) resStr += trail;
    this.initialBufs.length = this.initialBufsLen = 0;
    return resStr;
  }

  return this.decoder.end();
};

function detectEncoding(bufs, defaultEncoding) {
  var b = [];
  var charsProcessed = 0;
  var asciiCharsLE = 0,
      asciiCharsBE = 0; // Number of ASCII chars when decoded as LE or BE.

  outer_loop: for (var i = 0; i < bufs.length; i++) {
    var buf = bufs[i];

    for (var j = 0; j < buf.length; j++) {
      b.push(buf[j]);

      if (b.length === 2) {
        if (charsProcessed === 0) {
          // Check BOM first.
          if (b[0] === 0xFF && b[1] === 0xFE) return 'utf-16le';
          if (b[0] === 0xFE && b[1] === 0xFF) return 'utf-16be';
        }

        if (b[0] === 0 && b[1] !== 0) asciiCharsBE++;
        if (b[0] !== 0 && b[1] === 0) asciiCharsLE++;
        b.length = 0;
        charsProcessed++;

        if (charsProcessed >= 100) {
          break outer_loop;
        }
      }
    }
  } // Make decisions.
  // Most of the time, the content has ASCII chars (U+00**), but the opposite (U+**00) is uncommon.
  // So, we count ASCII as if it was LE or BE, and decide from that.


  if (asciiCharsBE > asciiCharsLE) return 'utf-16be';
  if (asciiCharsBE < asciiCharsLE) return 'utf-16le'; // Couldn't decide (likely all zeros or not enough data).

  return defaultEncoding || 'utf-16le';
}

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/utf32.js":
/*!**************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/utf32.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var Buffer = (__webpack_require__(/*! safer-buffer */ "./node_modules/safer-buffer/safer.js").Buffer); // == UTF32-LE/BE codec. ==========================================================


exports._utf32 = Utf32Codec;

function Utf32Codec(codecOptions, iconv) {
  this.iconv = iconv;
  this.bomAware = true;
  this.isLE = codecOptions.isLE;
}

exports.utf32le = {
  type: '_utf32',
  isLE: true
};
exports.utf32be = {
  type: '_utf32',
  isLE: false
}; // Aliases

exports.ucs4le = 'utf32le';
exports.ucs4be = 'utf32be';
Utf32Codec.prototype.encoder = Utf32Encoder;
Utf32Codec.prototype.decoder = Utf32Decoder; // -- Encoding

function Utf32Encoder(options, codec) {
  this.isLE = codec.isLE;
  this.highSurrogate = 0;
}

Utf32Encoder.prototype.write = function (str) {
  var src = Buffer.from(str, 'ucs2');
  var dst = Buffer.alloc(src.length * 2);
  var write32 = this.isLE ? dst.writeUInt32LE : dst.writeUInt32BE;
  var offset = 0;

  for (var i = 0; i < src.length; i += 2) {
    var code = src.readUInt16LE(i);
    var isHighSurrogate = 0xD800 <= code && code < 0xDC00;
    var isLowSurrogate = 0xDC00 <= code && code < 0xE000;

    if (this.highSurrogate) {
      if (isHighSurrogate || !isLowSurrogate) {
        // There shouldn't be two high surrogates in a row, nor a high surrogate which isn't followed by a low
        // surrogate. If this happens, keep the pending high surrogate as a stand-alone semi-invalid character
        // (technically wrong, but expected by some applications, like Windows file names).
        write32.call(dst, this.highSurrogate, offset);
        offset += 4;
      } else {
        // Create 32-bit value from high and low surrogates;
        var codepoint = (this.highSurrogate - 0xD800 << 10 | code - 0xDC00) + 0x10000;
        write32.call(dst, codepoint, offset);
        offset += 4;
        this.highSurrogate = 0;
        continue;
      }
    }

    if (isHighSurrogate) this.highSurrogate = code;else {
      // Even if the current character is a low surrogate, with no previous high surrogate, we'll
      // encode it as a semi-invalid stand-alone character for the same reasons expressed above for
      // unpaired high surrogates.
      write32.call(dst, code, offset);
      offset += 4;
      this.highSurrogate = 0;
    }
  }

  if (offset < dst.length) dst = dst.slice(0, offset);
  return dst;
};

Utf32Encoder.prototype.end = function () {
  // Treat any leftover high surrogate as a semi-valid independent character.
  if (!this.highSurrogate) return;
  var buf = Buffer.alloc(4);
  if (this.isLE) buf.writeUInt32LE(this.highSurrogate, 0);else buf.writeUInt32BE(this.highSurrogate, 0);
  this.highSurrogate = 0;
  return buf;
}; // -- Decoding


function Utf32Decoder(options, codec) {
  this.isLE = codec.isLE;
  this.badChar = codec.iconv.defaultCharUnicode.charCodeAt(0);
  this.overflow = [];
}

Utf32Decoder.prototype.write = function (src) {
  if (src.length === 0) return '';
  var i = 0;
  var codepoint = 0;
  var dst = Buffer.alloc(src.length + 4);
  var offset = 0;
  var isLE = this.isLE;
  var overflow = this.overflow;
  var badChar = this.badChar;

  if (overflow.length > 0) {
    for (; i < src.length && overflow.length < 4; i++) overflow.push(src[i]);

    if (overflow.length === 4) {
      // NOTE: codepoint is a signed int32 and can be negative.
      // NOTE: We copied this block from below to help V8 optimize it (it works with array, not buffer).
      if (isLE) {
        codepoint = overflow[i] | overflow[i + 1] << 8 | overflow[i + 2] << 16 | overflow[i + 3] << 24;
      } else {
        codepoint = overflow[i + 3] | overflow[i + 2] << 8 | overflow[i + 1] << 16 | overflow[i] << 24;
      }

      overflow.length = 0;
      offset = _writeCodepoint(dst, offset, codepoint, badChar);
    }
  } // Main loop. Should be as optimized as possible.


  for (; i < src.length - 3; i += 4) {
    // NOTE: codepoint is a signed int32 and can be negative.
    if (isLE) {
      codepoint = src[i] | src[i + 1] << 8 | src[i + 2] << 16 | src[i + 3] << 24;
    } else {
      codepoint = src[i + 3] | src[i + 2] << 8 | src[i + 1] << 16 | src[i] << 24;
    }

    offset = _writeCodepoint(dst, offset, codepoint, badChar);
  } // Keep overflowing bytes.


  for (; i < src.length; i++) {
    overflow.push(src[i]);
  }

  return dst.slice(0, offset).toString('ucs2');
};

function _writeCodepoint(dst, offset, codepoint, badChar) {
  // NOTE: codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations.
  if (codepoint < 0 || codepoint > 0x10FFFF) {
    // Not a valid Unicode codepoint
    codepoint = badChar;
  } // Ephemeral Planes: Write high surrogate.


  if (codepoint >= 0x10000) {
    codepoint -= 0x10000;
    var high = 0xD800 | codepoint >> 10;
    dst[offset++] = high & 0xff;
    dst[offset++] = high >> 8; // Low surrogate is written below.

    var codepoint = 0xDC00 | codepoint & 0x3FF;
  } // Write BMP char or low surrogate.


  dst[offset++] = codepoint & 0xff;
  dst[offset++] = codepoint >> 8;
  return offset;
}

;

Utf32Decoder.prototype.end = function () {
  this.overflow.length = 0;
}; // == UTF-32 Auto codec =============================================================
// Decoder chooses automatically from UTF-32LE and UTF-32BE using BOM and space-based heuristic.
// Defaults to UTF-32LE. http://en.wikipedia.org/wiki/UTF-32
// Encoder/decoder default can be changed: iconv.decode(buf, 'utf32', {defaultEncoding: 'utf-32be'});
// Encoder prepends BOM (which can be overridden with (addBOM: false}).


exports.utf32 = Utf32AutoCodec;
exports.ucs4 = 'utf32';

function Utf32AutoCodec(options, iconv) {
  this.iconv = iconv;
}

Utf32AutoCodec.prototype.encoder = Utf32AutoEncoder;
Utf32AutoCodec.prototype.decoder = Utf32AutoDecoder; // -- Encoding

function Utf32AutoEncoder(options, codec) {
  options = options || {};
  if (options.addBOM === undefined) options.addBOM = true;
  this.encoder = codec.iconv.getEncoder(options.defaultEncoding || 'utf-32le', options);
}

Utf32AutoEncoder.prototype.write = function (str) {
  return this.encoder.write(str);
};

Utf32AutoEncoder.prototype.end = function () {
  return this.encoder.end();
}; // -- Decoding


function Utf32AutoDecoder(options, codec) {
  this.decoder = null;
  this.initialBufs = [];
  this.initialBufsLen = 0;
  this.options = options || {};
  this.iconv = codec.iconv;
}

Utf32AutoDecoder.prototype.write = function (buf) {
  if (!this.decoder) {
    // Codec is not chosen yet. Accumulate initial bytes.
    this.initialBufs.push(buf);
    this.initialBufsLen += buf.length;
    if (this.initialBufsLen < 32) // We need more bytes to use space heuristic (see below)
      return ''; // We have enough bytes -> detect endianness.

    var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
    this.decoder = this.iconv.getDecoder(encoding, this.options);
    var resStr = '';

    for (var i = 0; i < this.initialBufs.length; i++) resStr += this.decoder.write(this.initialBufs[i]);

    this.initialBufs.length = this.initialBufsLen = 0;
    return resStr;
  }

  return this.decoder.write(buf);
};

Utf32AutoDecoder.prototype.end = function () {
  if (!this.decoder) {
    var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
    this.decoder = this.iconv.getDecoder(encoding, this.options);
    var resStr = '';

    for (var i = 0; i < this.initialBufs.length; i++) resStr += this.decoder.write(this.initialBufs[i]);

    var trail = this.decoder.end();
    if (trail) resStr += trail;
    this.initialBufs.length = this.initialBufsLen = 0;
    return resStr;
  }

  return this.decoder.end();
};

function detectEncoding(bufs, defaultEncoding) {
  var b = [];
  var charsProcessed = 0;
  var invalidLE = 0,
      invalidBE = 0; // Number of invalid chars when decoded as LE or BE.

  var bmpCharsLE = 0,
      bmpCharsBE = 0; // Number of BMP chars when decoded as LE or BE.

  outer_loop: for (var i = 0; i < bufs.length; i++) {
    var buf = bufs[i];

    for (var j = 0; j < buf.length; j++) {
      b.push(buf[j]);

      if (b.length === 4) {
        if (charsProcessed === 0) {
          // Check BOM first.
          if (b[0] === 0xFF && b[1] === 0xFE && b[2] === 0 && b[3] === 0) {
            return 'utf-32le';
          }

          if (b[0] === 0 && b[1] === 0 && b[2] === 0xFE && b[3] === 0xFF) {
            return 'utf-32be';
          }
        }

        if (b[0] !== 0 || b[1] > 0x10) invalidBE++;
        if (b[3] !== 0 || b[2] > 0x10) invalidLE++;
        if (b[0] === 0 && b[1] === 0 && (b[2] !== 0 || b[3] !== 0)) bmpCharsBE++;
        if ((b[0] !== 0 || b[1] !== 0) && b[2] === 0 && b[3] === 0) bmpCharsLE++;
        b.length = 0;
        charsProcessed++;

        if (charsProcessed >= 100) {
          break outer_loop;
        }
      }
    }
  } // Make decisions.


  if (bmpCharsBE - invalidBE > bmpCharsLE - invalidLE) return 'utf-32be';
  if (bmpCharsBE - invalidBE < bmpCharsLE - invalidLE) return 'utf-32le'; // Couldn't decide (likely all zeros or not enough data).

  return defaultEncoding || 'utf-32le';
}

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/utf7.js":
/*!*************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/utf7.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var Buffer = (__webpack_require__(/*! safer-buffer */ "./node_modules/safer-buffer/safer.js").Buffer); // UTF-7 codec, according to https://tools.ietf.org/html/rfc2152
// See also below a UTF-7-IMAP codec, according to http://tools.ietf.org/html/rfc3501#section-5.1.3


exports.utf7 = Utf7Codec;
exports.unicode11utf7 = 'utf7'; // Alias UNICODE-1-1-UTF-7

function Utf7Codec(codecOptions, iconv) {
  this.iconv = iconv;
}

;
Utf7Codec.prototype.encoder = Utf7Encoder;
Utf7Codec.prototype.decoder = Utf7Decoder;
Utf7Codec.prototype.bomAware = true; // -- Encoding

var nonDirectChars = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;

function Utf7Encoder(options, codec) {
  this.iconv = codec.iconv;
}

Utf7Encoder.prototype.write = function (str) {
  // Naive implementation.
  // Non-direct chars are encoded as "+<base64>-"; single "+" char is encoded as "+-".
  return Buffer.from(str.replace(nonDirectChars, function (chunk) {
    return "+" + (chunk === '+' ? '' : this.iconv.encode(chunk, 'utf16-be').toString('base64').replace(/=+$/, '')) + "-";
  }.bind(this)));
};

Utf7Encoder.prototype.end = function () {}; // -- Decoding


function Utf7Decoder(options, codec) {
  this.iconv = codec.iconv;
  this.inBase64 = false;
  this.base64Accum = '';
}

var base64Regex = /[A-Za-z0-9\/+]/;
var base64Chars = [];

for (var i = 0; i < 256; i++) base64Chars[i] = base64Regex.test(String.fromCharCode(i));

var plusChar = '+'.charCodeAt(0),
    minusChar = '-'.charCodeAt(0),
    andChar = '&'.charCodeAt(0);

Utf7Decoder.prototype.write = function (buf) {
  var res = "",
      lastI = 0,
      inBase64 = this.inBase64,
      base64Accum = this.base64Accum; // The decoder is more involved as we must handle chunks in stream.

  for (var i = 0; i < buf.length; i++) {
    if (!inBase64) {
      // We're in direct mode.
      // Write direct chars until '+'
      if (buf[i] == plusChar) {
        res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.

        lastI = i + 1;
        inBase64 = true;
      }
    } else {
      // We decode base64.
      if (!base64Chars[buf[i]]) {
        // Base64 ended.
        if (i == lastI && buf[i] == minusChar) {
          // "+-" -> "+"
          res += "+";
        } else {
          var b64str = base64Accum + this.iconv.decode(buf.slice(lastI, i), "ascii");
          res += this.iconv.decode(Buffer.from(b64str, 'base64'), "utf16-be");
        }

        if (buf[i] != minusChar) // Minus is absorbed after base64.
          i--;
        lastI = i + 1;
        inBase64 = false;
        base64Accum = '';
      }
    }
  }

  if (!inBase64) {
    res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
  } else {
    var b64str = base64Accum + this.iconv.decode(buf.slice(lastI), "ascii");
    var canBeDecoded = b64str.length - b64str.length % 8; // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.

    base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.

    b64str = b64str.slice(0, canBeDecoded);
    res += this.iconv.decode(Buffer.from(b64str, 'base64'), "utf16-be");
  }

  this.inBase64 = inBase64;
  this.base64Accum = base64Accum;
  return res;
};

Utf7Decoder.prototype.end = function () {
  var res = "";
  if (this.inBase64 && this.base64Accum.length > 0) res = this.iconv.decode(Buffer.from(this.base64Accum, 'base64'), "utf16-be");
  this.inBase64 = false;
  this.base64Accum = '';
  return res;
}; // UTF-7-IMAP codec.
// RFC3501 Sec. 5.1.3 Modified UTF-7 (http://tools.ietf.org/html/rfc3501#section-5.1.3)
// Differences:
//  * Base64 part is started by "&" instead of "+"
//  * Direct characters are 0x20-0x7E, except "&" (0x26)
//  * In Base64, "," is used instead of "/"
//  * Base64 must not be used to represent direct characters.
//  * No implicit shift back from Base64 (should always end with '-')
//  * String must end in non-shifted position.
//  * "-&" while in base64 is not allowed.


exports.utf7imap = Utf7IMAPCodec;

function Utf7IMAPCodec(codecOptions, iconv) {
  this.iconv = iconv;
}

;
Utf7IMAPCodec.prototype.encoder = Utf7IMAPEncoder;
Utf7IMAPCodec.prototype.decoder = Utf7IMAPDecoder;
Utf7IMAPCodec.prototype.bomAware = true; // -- Encoding

function Utf7IMAPEncoder(options, codec) {
  this.iconv = codec.iconv;
  this.inBase64 = false;
  this.base64Accum = Buffer.alloc(6);
  this.base64AccumIdx = 0;
}

Utf7IMAPEncoder.prototype.write = function (str) {
  var inBase64 = this.inBase64,
      base64Accum = this.base64Accum,
      base64AccumIdx = this.base64AccumIdx,
      buf = Buffer.alloc(str.length * 5 + 10),
      bufIdx = 0;

  for (var i = 0; i < str.length; i++) {
    var uChar = str.charCodeAt(i);

    if (0x20 <= uChar && uChar <= 0x7E) {
      // Direct character or '&'.
      if (inBase64) {
        if (base64AccumIdx > 0) {
          bufIdx += buf.write(base64Accum.slice(0, base64AccumIdx).toString('base64').replace(/\//g, ',').replace(/=+$/, ''), bufIdx);
          base64AccumIdx = 0;
        }

        buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.

        inBase64 = false;
      }

      if (!inBase64) {
        buf[bufIdx++] = uChar; // Write direct character

        if (uChar === andChar) // Ampersand -> '&-'
          buf[bufIdx++] = minusChar;
      }
    } else {
      // Non-direct character
      if (!inBase64) {
        buf[bufIdx++] = andChar; // Write '&', then go to base64 mode.

        inBase64 = true;
      }

      if (inBase64) {
        base64Accum[base64AccumIdx++] = uChar >> 8;
        base64Accum[base64AccumIdx++] = uChar & 0xFF;

        if (base64AccumIdx == base64Accum.length) {
          bufIdx += buf.write(base64Accum.toString('base64').replace(/\//g, ','), bufIdx);
          base64AccumIdx = 0;
        }
      }
    }
  }

  this.inBase64 = inBase64;
  this.base64AccumIdx = base64AccumIdx;
  return buf.slice(0, bufIdx);
};

Utf7IMAPEncoder.prototype.end = function () {
  var buf = Buffer.alloc(10),
      bufIdx = 0;

  if (this.inBase64) {
    if (this.base64AccumIdx > 0) {
      bufIdx += buf.write(this.base64Accum.slice(0, this.base64AccumIdx).toString('base64').replace(/\//g, ',').replace(/=+$/, ''), bufIdx);
      this.base64AccumIdx = 0;
    }

    buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.

    this.inBase64 = false;
  }

  return buf.slice(0, bufIdx);
}; // -- Decoding


function Utf7IMAPDecoder(options, codec) {
  this.iconv = codec.iconv;
  this.inBase64 = false;
  this.base64Accum = '';
}

var base64IMAPChars = base64Chars.slice();
base64IMAPChars[','.charCodeAt(0)] = true;

Utf7IMAPDecoder.prototype.write = function (buf) {
  var res = "",
      lastI = 0,
      inBase64 = this.inBase64,
      base64Accum = this.base64Accum; // The decoder is more involved as we must handle chunks in stream.
  // It is forgiving, closer to standard UTF-7 (for example, '-' is optional at the end).

  for (var i = 0; i < buf.length; i++) {
    if (!inBase64) {
      // We're in direct mode.
      // Write direct chars until '&'
      if (buf[i] == andChar) {
        res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.

        lastI = i + 1;
        inBase64 = true;
      }
    } else {
      // We decode base64.
      if (!base64IMAPChars[buf[i]]) {
        // Base64 ended.
        if (i == lastI && buf[i] == minusChar) {
          // "&-" -> "&"
          res += "&";
        } else {
          var b64str = base64Accum + this.iconv.decode(buf.slice(lastI, i), "ascii").replace(/,/g, '/');
          res += this.iconv.decode(Buffer.from(b64str, 'base64'), "utf16-be");
        }

        if (buf[i] != minusChar) // Minus may be absorbed after base64.
          i--;
        lastI = i + 1;
        inBase64 = false;
        base64Accum = '';
      }
    }
  }

  if (!inBase64) {
    res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
  } else {
    var b64str = base64Accum + this.iconv.decode(buf.slice(lastI), "ascii").replace(/,/g, '/');
    var canBeDecoded = b64str.length - b64str.length % 8; // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.

    base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.

    b64str = b64str.slice(0, canBeDecoded);
    res += this.iconv.decode(Buffer.from(b64str, 'base64'), "utf16-be");
  }

  this.inBase64 = inBase64;
  this.base64Accum = base64Accum;
  return res;
};

Utf7IMAPDecoder.prototype.end = function () {
  var res = "";
  if (this.inBase64 && this.base64Accum.length > 0) res = this.iconv.decode(Buffer.from(this.base64Accum, 'base64'), "utf16-be");
  this.inBase64 = false;
  this.base64Accum = '';
  return res;
};

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/lib/bom-handling.js":
/*!***************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/lib/bom-handling.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var BOMChar = '\uFEFF';
exports.PrependBOM = PrependBOMWrapper;

function PrependBOMWrapper(encoder, options) {
  this.encoder = encoder;
  this.addBOM = true;
}

PrependBOMWrapper.prototype.write = function (str) {
  if (this.addBOM) {
    str = BOMChar + str;
    this.addBOM = false;
  }

  return this.encoder.write(str);
};

PrependBOMWrapper.prototype.end = function () {
  return this.encoder.end();
}; //------------------------------------------------------------------------------


exports.StripBOM = StripBOMWrapper;

function StripBOMWrapper(decoder, options) {
  this.decoder = decoder;
  this.pass = false;
  this.options = options || {};
}

StripBOMWrapper.prototype.write = function (buf) {
  var res = this.decoder.write(buf);
  if (this.pass || !res) return res;

  if (res[0] === BOMChar) {
    res = res.slice(1);
    if (typeof this.options.stripBOM === 'function') this.options.stripBOM();
  }

  this.pass = true;
  return res;
};

StripBOMWrapper.prototype.end = function () {
  return this.decoder.end();
};

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/lib/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/lib/index.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Buffer = (__webpack_require__(/*! safer-buffer */ "./node_modules/safer-buffer/safer.js").Buffer);

var bomHandling = __webpack_require__(/*! ./bom-handling */ "./node_modules/node-id3/node_modules/iconv-lite/lib/bom-handling.js"),
    iconv = module.exports; // All codecs and aliases are kept here, keyed by encoding name/alias.
// They are lazy loaded in `iconv.getCodec` from `encodings/index.js`.


iconv.encodings = null; // Characters emitted in case of error.

iconv.defaultCharUnicode = '�';
iconv.defaultCharSingleByte = '?'; // Public API.

iconv.encode = function encode(str, encoding, options) {
  str = "" + (str || ""); // Ensure string.

  var encoder = iconv.getEncoder(encoding, options);
  var res = encoder.write(str);
  var trail = encoder.end();
  return trail && trail.length > 0 ? Buffer.concat([res, trail]) : res;
};

iconv.decode = function decode(buf, encoding, options) {
  if (typeof buf === 'string') {
    if (!iconv.skipDecodeWarning) {
      console.error('Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding');
      iconv.skipDecodeWarning = true;
    }

    buf = Buffer.from("" + (buf || ""), "binary"); // Ensure buffer.
  }

  var decoder = iconv.getDecoder(encoding, options);
  var res = decoder.write(buf);
  var trail = decoder.end();
  return trail ? res + trail : res;
};

iconv.encodingExists = function encodingExists(enc) {
  try {
    iconv.getCodec(enc);
    return true;
  } catch (e) {
    return false;
  }
}; // Legacy aliases to convert functions


iconv.toEncoding = iconv.encode;
iconv.fromEncoding = iconv.decode; // Search for a codec in iconv.encodings. Cache codec data in iconv._codecDataCache.

iconv._codecDataCache = {};

iconv.getCodec = function getCodec(encoding) {
  if (!iconv.encodings) iconv.encodings = __webpack_require__(/*! ../encodings */ "./node_modules/node-id3/node_modules/iconv-lite/encodings/index.js"); // Lazy load all encoding definitions.
  // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.

  var enc = iconv._canonicalizeEncoding(encoding); // Traverse iconv.encodings to find actual codec.


  var codecOptions = {};

  while (true) {
    var codec = iconv._codecDataCache[enc];
    if (codec) return codec;
    var codecDef = iconv.encodings[enc];

    switch (typeof codecDef) {
      case "string":
        // Direct alias to other encoding.
        enc = codecDef;
        break;

      case "object":
        // Alias with options. Can be layered.
        for (var key in codecDef) codecOptions[key] = codecDef[key];

        if (!codecOptions.encodingName) codecOptions.encodingName = enc;
        enc = codecDef.type;
        break;

      case "function":
        // Codec itself.
        if (!codecOptions.encodingName) codecOptions.encodingName = enc; // The codec function must load all tables and return object with .encoder and .decoder methods.
        // It'll be called only once (for each different options object).

        codec = new codecDef(codecOptions, iconv);
        iconv._codecDataCache[codecOptions.encodingName] = codec; // Save it to be reused later.

        return codec;

      default:
        throw new Error("Encoding not recognized: '" + encoding + "' (searched as: '" + enc + "')");
    }
  }
};

iconv._canonicalizeEncoding = function (encoding) {
  // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
  return ('' + encoding).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
};

iconv.getEncoder = function getEncoder(encoding, options) {
  var codec = iconv.getCodec(encoding),
      encoder = new codec.encoder(options, codec);
  if (codec.bomAware && options && options.addBOM) encoder = new bomHandling.PrependBOM(encoder, options);
  return encoder;
};

iconv.getDecoder = function getDecoder(encoding, options) {
  var codec = iconv.getCodec(encoding),
      decoder = new codec.decoder(options, codec);
  if (codec.bomAware && !(options && options.stripBOM === false)) decoder = new bomHandling.StripBOM(decoder, options);
  return decoder;
}; // Streaming API
// NOTE: Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add
// up to 100Kb to the output bundle. To avoid unnecessary code bloat, we don't enable Streaming API in browser by default.
// If you would like to enable it explicitly, please add the following code to your app:
// > iconv.enableStreamingAPI(require('stream'));


iconv.enableStreamingAPI = function enableStreamingAPI(stream_module) {
  if (iconv.supportsStreams) return; // Dependency-inject stream module to create IconvLite stream classes.

  var streams = __webpack_require__(/*! ./streams */ "./node_modules/node-id3/node_modules/iconv-lite/lib/streams.js")(stream_module); // Not public API yet, but expose the stream classes.


  iconv.IconvLiteEncoderStream = streams.IconvLiteEncoderStream;
  iconv.IconvLiteDecoderStream = streams.IconvLiteDecoderStream; // Streaming API.

  iconv.encodeStream = function encodeStream(encoding, options) {
    return new iconv.IconvLiteEncoderStream(iconv.getEncoder(encoding, options), options);
  };

  iconv.decodeStream = function decodeStream(encoding, options) {
    return new iconv.IconvLiteDecoderStream(iconv.getDecoder(encoding, options), options);
  };

  iconv.supportsStreams = true;
}; // Enable Streaming API automatically if 'stream' module is available and non-empty (the majority of environments).


var stream_module;

try {
  stream_module = __webpack_require__(/*! stream */ "stream");
} catch (e) {}

if (stream_module && stream_module.Transform) {
  iconv.enableStreamingAPI(stream_module);
} else {
  // In rare cases where 'stream' module is not available by default, throw a helpful exception.
  iconv.encodeStream = iconv.decodeStream = function () {
    throw new Error("iconv-lite Streaming API is not enabled. Use iconv.enableStreamingAPI(require('stream')); to enable it.");
  };
}

if (false) {}

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/lib/streams.js":
/*!**********************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/lib/streams.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Buffer = (__webpack_require__(/*! safer-buffer */ "./node_modules/safer-buffer/safer.js").Buffer); // NOTE: Due to 'stream' module being pretty large (~100Kb, significant in browser environments), 
// we opt to dependency-inject it instead of creating a hard dependency.


module.exports = function (stream_module) {
  var Transform = stream_module.Transform; // == Encoder stream =======================================================

  function IconvLiteEncoderStream(conv, options) {
    this.conv = conv;
    options = options || {};
    options.decodeStrings = false; // We accept only strings, so we don't need to decode them.

    Transform.call(this, options);
  }

  IconvLiteEncoderStream.prototype = Object.create(Transform.prototype, {
    constructor: {
      value: IconvLiteEncoderStream
    }
  });

  IconvLiteEncoderStream.prototype._transform = function (chunk, encoding, done) {
    if (typeof chunk != 'string') return done(new Error("Iconv encoding stream needs strings as its input."));

    try {
      var res = this.conv.write(chunk);
      if (res && res.length) this.push(res);
      done();
    } catch (e) {
      done(e);
    }
  };

  IconvLiteEncoderStream.prototype._flush = function (done) {
    try {
      var res = this.conv.end();
      if (res && res.length) this.push(res);
      done();
    } catch (e) {
      done(e);
    }
  };

  IconvLiteEncoderStream.prototype.collect = function (cb) {
    var chunks = [];
    this.on('error', cb);
    this.on('data', function (chunk) {
      chunks.push(chunk);
    });
    this.on('end', function () {
      cb(null, Buffer.concat(chunks));
    });
    return this;
  }; // == Decoder stream =======================================================


  function IconvLiteDecoderStream(conv, options) {
    this.conv = conv;
    options = options || {};
    options.encoding = this.encoding = 'utf8'; // We output strings.

    Transform.call(this, options);
  }

  IconvLiteDecoderStream.prototype = Object.create(Transform.prototype, {
    constructor: {
      value: IconvLiteDecoderStream
    }
  });

  IconvLiteDecoderStream.prototype._transform = function (chunk, encoding, done) {
    if (!Buffer.isBuffer(chunk) && !(chunk instanceof Uint8Array)) return done(new Error("Iconv decoding stream needs buffers as its input."));

    try {
      var res = this.conv.write(chunk);
      if (res && res.length) this.push(res, this.encoding);
      done();
    } catch (e) {
      done(e);
    }
  };

  IconvLiteDecoderStream.prototype._flush = function (done) {
    try {
      var res = this.conv.end();
      if (res && res.length) this.push(res, this.encoding);
      done();
    } catch (e) {
      done(e);
    }
  };

  IconvLiteDecoderStream.prototype.collect = function (cb) {
    var res = '';
    this.on('error', cb);
    this.on('data', function (chunk) {
      res += chunk;
    });
    this.on('end', function () {
      cb(null, res);
    });
    return this;
  };

  return {
    IconvLiteEncoderStream: IconvLiteEncoderStream,
    IconvLiteDecoderStream: IconvLiteDecoderStream
  };
};

/***/ }),

/***/ "./node_modules/node-id3/src/ID3Definitions.js":
/*!*****************************************************!*\
  !*** ./node_modules/node-id3/src/ID3Definitions.js ***!
  \*****************************************************/
/***/ ((module) => {

const FRAME_IDENTIFIERS = {
  v2: {
    album: "TAL",
    bpm: "TBP",
    composer: "TCM",
    genre: "TCO",
    copyright: "TCR",
    date: "TDA",
    playlistDelay: "TDY",
    encodedBy: "TEN",
    textWriter: "TEXT",
    fileType: "TFT",
    time: "TIM",
    contentGroup: "TT1",
    title: "TT2",
    subtitle: "TT3",
    initialKey: "TKE",
    language: "TLA",
    length: "TLE",
    mediaType: "TMT",
    originalTitle: "TOT",
    originalFilename: "TOF",
    originalTextwriter: "TOL",
    originalArtist: "TOA",
    originalYear: "TOR",
    artist: "TP1",
    performerInfo: "TP2",
    conductor: "TP3",
    remixArtist: "TP4",
    partOfSet: "TPA",
    publisher: "TPB",
    trackNumber: "TRK",
    recordingDates: "TRD",
    size: "TSI",
    ISRC: "TRC",
    encodingTechnology: "TSS",
    year: "TYE",
    image: "PIC",
    commercialUrl: "WCM",
    copyrightUrl: "WCP",
    fileUrl: "WAF",
    artistUrl: "WAR",
    audioSourceUrl: "WAS",
    publisherUrl: "WPB",
    userDefinedUrl: "WXX"
  },
  v3: {
    album: "TALB",
    bpm: "TBPM",
    composer: "TCOM",
    genre: "TCON",
    copyright: "TCOP",
    date: "TDAT",
    playlistDelay: "TDLY",
    encodedBy: "TENC",
    textWriter: "TEXT",
    fileType: "TFLT",
    time: "TIME",
    contentGroup: "TIT1",
    title: "TIT2",
    subtitle: "TIT3",
    initialKey: "TKEY",
    language: "TLAN",
    length: "TLEN",
    mediaType: "TMED",
    originalTitle: "TOAL",
    originalFilename: "TOFN",
    originalTextwriter: "TOLY",
    originalArtist: "TOPE",
    originalYear: "TORY",
    fileOwner: "TOWN",
    artist: "TPE1",
    performerInfo: "TPE2",
    conductor: "TPE3",
    remixArtist: "TPE4",
    partOfSet: "TPOS",
    publisher: "TPUB",
    trackNumber: "TRCK",
    recordingDates: "TRDA",
    internetRadioName: "TRSN",
    internetRadioOwner: "TRSO",
    size: "TSIZ",
    ISRC: "TSRC",
    encodingTechnology: "TSSE",
    year: "TYER",
    comment: "COMM",
    image: "APIC",
    unsynchronisedLyrics: "USLT",
    userDefinedText: "TXXX",
    popularimeter: "POPM",
    private: "PRIV",
    chapter: "CHAP",
    tableOfContents: "CTOC",
    userDefinedUrl: "WXXX",
    commercialUrl: "WCOM",
    copyrightUrl: "WCOP",
    fileUrl: "WOAF",
    artistUrl: "WOAR",
    audioSourceUrl: "WOAS",
    radioStationUrl: "WORS",
    paymentUrl: "WPAY",
    publisherUrl: "WPUB"
  }
};
const FRAME_INTERNAL_IDENTIFIERS = {
  v2: Object.keys(FRAME_IDENTIFIERS.v2).reduce((acc, key) => {
    acc[FRAME_IDENTIFIERS.v2[key]] = key;
    return acc;
  }, {}),
  v3: Object.keys(FRAME_IDENTIFIERS.v3).reduce((acc, key) => {
    acc[FRAME_IDENTIFIERS.v3[key]] = key;
    return acc;
  }, {})
};
const ID3_FRAME_OPTIONS = {
  v2: {
    "PIC": {
      multiple: false
      /* change in 1.0 */

    },
    "WCM": {
      multiple: true
    },
    "WAR": {
      multiple: true
    }
  },
  v3: {
    "T___": {
      multiple: false
    },
    "TXXX": {
      multiple: true,
      updateCompareKey: "description"
    },
    "APIC": {
      multiple: false
      /* change in 1.0 */

    },
    "USLT": {
      multiple: false
    },
    "COMM": {
      multiple: false
      /* change in 1.0 */

    },
    "POPM": {
      multiple: false
      /* change in 1.0 */

    },
    "PRIV": {
      multiple: true
    },
    "CTOC": {
      multiple: true
    },
    "CHAP": {
      multiple: true
    },
    "WXXX": {
      multiple: true,
      updateCompareKey: "description"
    },
    "WCOM": {
      multiple: true
    },
    "WOAR": {
      multiple: true
    }
  }
};
/*
**  List of official text information frames
**  LibraryName: "T***"
**  Value is the ID of the text frame specified in the link above, the object's keys are just for simplicity, you can also use the ID directly.
*/

/*
**  Officially available types of the picture frame
*/

const APICTypes = ["other", "file icon", "other file icon", "front cover", "back cover", "leaflet page", "media", "lead artist", "artist", "conductor", "band", "composer", "lyricist", "recording location", "during recording", "during performance", "video screen capture", "a bright coloured fish", "illustration", "band logotype", "publisher logotype"];
const ENCODINGS = ['ISO-8859-1', 'UTF-16', 'UTF-16BE', 'utf8'];
module.exports.APIC_TYPES = APICTypes;
module.exports.ENCODINGS = ENCODINGS;
module.exports.FRAME_IDENTIFIERS = FRAME_IDENTIFIERS;
module.exports.FRAME_INTERNAL_IDENTIFIERS = FRAME_INTERNAL_IDENTIFIERS;
module.exports.ID3_FRAME_OPTIONS = ID3_FRAME_OPTIONS;

/***/ }),

/***/ "./node_modules/node-id3/src/ID3FrameBuilder.js":
/*!******************************************************!*\
  !*** ./node_modules/node-id3/src/ID3FrameBuilder.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = ID3FrameBuilder;

const ID3Util = __webpack_require__(/*! ./ID3Util */ "./node_modules/node-id3/src/ID3Util.js");

function ID3FrameBuilder(identifier) {
  this._identifier = identifier;
  this._buffer = Buffer.alloc(0);
}

ID3FrameBuilder.prototype.appendStaticValue = function (value, size, encoding = 0x00) {
  const convertedValue = convertValue(value, encoding);
  this._buffer = Buffer.concat([this._buffer, staticValueToBuffer(convertedValue, size)]);
  return this;
};

ID3FrameBuilder.prototype.appendStaticNumber = function (value, size) {
  if (Number.isInteger(value)) {
    let hexValue = value.toString(16);

    if (hexValue.length % 2 !== 0) {
      hexValue = "0" + hexValue;
    }

    this._buffer = Buffer.concat([this._buffer, staticValueToBuffer(Buffer.from(hexValue, 'hex'), size)]);
  }

  return this;
};

ID3FrameBuilder.prototype.appendNullTerminatedValue = function (value, encoding = 0x00) {
  if (!value) value = '';
  const convertedValue = convertValue(value, encoding);
  this._buffer = Buffer.concat([this._buffer, nullTerminatedValueToBuffer(convertedValue, encoding)]);
  return this;
};

ID3FrameBuilder.prototype.getBuffer = function () {
  const header = Buffer.alloc(10);
  header.write(this._identifier, 0);
  header.writeUInt32BE(this._buffer.length, 4);
  return Buffer.concat([header, this._buffer]);
};

function convertValue(value, encoding = 0x00) {
  if (value instanceof Buffer) {
    return value;
  } else if (Number.isInteger(value)) {
    return ID3Util.stringToEncodedBuffer(value.toString(), encoding);
  } else if (typeof value === 'string' || value instanceof String) {
    return ID3Util.stringToEncodedBuffer(value, encoding);
  } else {
    return Buffer.alloc(0);
  }
}

function staticValueToBuffer(buffer, size) {
  if (!(buffer instanceof Buffer)) return Buffer.alloc(0);

  if (size && buffer.length < size) {
    return Buffer.concat([Buffer.alloc(size - buffer.length, 0x00), buffer]);
  } else {
    return buffer;
  }
}

function nullTerminatedValueToBuffer(buffer, encoding) {
  return Buffer.concat([buffer, ID3Util.terminationBuffer(encoding)]);
}

/***/ }),

/***/ "./node_modules/node-id3/src/ID3FrameReader.js":
/*!*****************************************************!*\
  !*** ./node_modules/node-id3/src/ID3FrameReader.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = ID3FrameReader;

const ID3Util = __webpack_require__(/*! ./ID3Util */ "./node_modules/node-id3/src/ID3Util.js");

function ID3FrameReader(buffer, encodingBytePosition, consumeEncodingByte = true) {
  if (!buffer || !(buffer instanceof Buffer)) buffer = Buffer.alloc(0);

  if (Number.isInteger(encodingBytePosition)) {
    this._encoding = buffer[encodingBytePosition] ? buffer[encodingBytePosition] : 0x00;

    if (consumeEncodingByte) {
      buffer = encodingBytePosition === 0 ? buffer.slice(1) : Buffer.concat([buffer.slice(0, encodingBytePosition), buffer.slice(encodingBytePosition)]);
    }
  } else {
    this._encoding = 0x00;
  }

  this._splitBuffer = new ID3Util.SplitBuffer(null, buffer.slice(0));
}

ID3FrameReader.prototype.consumeStaticValue = function (dataType, size, encoding = this._encoding) {
  return this._consumeByFunction(() => staticValueFromBuffer(this._splitBuffer.remainder, size), dataType, encoding);
};

ID3FrameReader.prototype.consumeNullTerminatedValue = function (dataType, encoding = this._encoding) {
  return this._consumeByFunction(() => nullTerminatedValueFromBuffer(this._splitBuffer.remainder, encoding), dataType, encoding);
};

ID3FrameReader.prototype._consumeByFunction = function (fn, dataType, encoding) {
  if (!this._splitBuffer.remainder || this._splitBuffer.remainder.length === 0) {
    return undefined;
  }

  this._splitBuffer = fn();

  if (dataType) {
    return convertValue(this._splitBuffer.value, dataType, encoding);
  } else {
    return this._splitBuffer.value;
  }
};

function convertValue(buffer, dataType, encoding = 0x00) {
  if (!buffer) return undefined;
  if (!(buffer instanceof Buffer)) return buffer;
  if (buffer.length === 0) return undefined;

  if (dataType === "number") {
    return parseInt(buffer.toString('hex'), 16);
  } else if (dataType === "string") {
    return ID3Util.bufferToDecodedString(buffer, encoding);
  } else {
    return buffer;
  }
}

function staticValueFromBuffer(buffer, size) {
  if (size === undefined || size === null) {
    size = buffer.length;
  }

  if (buffer.length > size) {
    return new ID3Util.SplitBuffer(buffer.slice(0, size), buffer.slice(size));
  } else {
    return new ID3Util.SplitBuffer(buffer.slice(0), null);
  }
}

function nullTerminatedValueFromBuffer(buffer, encoding = 0x00) {
  return ID3Util.splitNullTerminatedBuffer(buffer, encoding);
}

/***/ }),

/***/ "./node_modules/node-id3/src/ID3Frames.js":
/*!************************************************!*\
  !*** ./node_modules/node-id3/src/ID3Frames.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(/*! fs */ "fs");

const ID3FrameBuilder = __webpack_require__(/*! ./ID3FrameBuilder */ "./node_modules/node-id3/src/ID3FrameBuilder.js");

const ID3FrameReader = __webpack_require__(/*! ./ID3FrameReader */ "./node_modules/node-id3/src/ID3FrameReader.js");

const ID3Definitions = __webpack_require__(/*! ./ID3Definitions */ "./node_modules/node-id3/src/ID3Definitions.js");

module.exports.GENERIC_TEXT = {
  create: (specName, data) => {
    if (!specName || !data) {
      return null;
    }

    return new ID3FrameBuilder(specName).appendStaticNumber(0x01, 0x01).appendStaticValue(data, null, 0x01).getBuffer();
  },
  read: buffer => {
    const reader = new ID3FrameReader(buffer, 0);
    return reader.consumeStaticValue('string');
  }
};
module.exports.GENERIC_URL = {
  create: (specName, data) => {
    if (!specName || !data) {
      return null;
    }

    return new ID3FrameBuilder(specName).appendStaticValue(data).getBuffer();
  },
  read: buffer => {
    const reader = new ID3FrameReader(buffer);
    return reader.consumeStaticValue('string');
  }
};
module.exports.APIC = {
  create: data => {
    try {
      if (data instanceof Buffer) {
        data = {
          imageBuffer: Buffer.from(data)
        };
      } else if (typeof data === 'string' || data instanceof String) {
        data = {
          imageBuffer: fs.readFileSync(data)
        };
      } else if (!data.imageBuffer) {
        return Buffer.alloc(0);
      }

      let mime_type = data.mime;

      if (!data.mime) {
        if (data.imageBuffer.length > 3 && data.imageBuffer.compare(Buffer.from([0xff, 0xd8, 0xff]), 0, 3, 0, 3) === 0) {
          mime_type = "image/jpeg";
        } else if (data.imageBuffer.length > 8 && data.imageBuffer.compare(Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]), 0, 8, 0, 8) === 0) {
          mime_type = "image/png";
        } else {
          mime_type = "";
        }
      }
      /*
       * Fix a bug in iTunes where the artwork is not recognized when the description is empty using UTF-16.
       * Instead, if the description is empty, use encoding 0x00 (ISO-8859-1).
       */


      const {
        description = ''
      } = data;
      const encoding = description ? 0x01 : 0x00;
      return new ID3FrameBuilder("APIC").appendStaticNumber(encoding, 1).appendNullTerminatedValue(mime_type).appendStaticNumber(0x03, 1).appendNullTerminatedValue(description, encoding).appendStaticValue(data.imageBuffer).getBuffer();
    } catch (e) {
      return e;
    }
  },
  read: (buffer, version) => {
    const reader = new ID3FrameReader(buffer, 0);
    let mime;

    if (version === 2) {
      mime = reader.consumeStaticValue('string', 3, 0x00);
    } else {
      mime = reader.consumeNullTerminatedValue('string', 0x00);
    }

    const typeId = reader.consumeStaticValue('number', 1);
    const description = reader.consumeNullTerminatedValue('string');
    const imageBuffer = reader.consumeStaticValue();
    return {
      mime: mime,
      type: {
        id: typeId,
        name: ID3Definitions.APIC_TYPES[typeId]
      },
      description: description,
      imageBuffer: imageBuffer
    };
  }
};
module.exports.COMM = {
  create: data => {
    data = data || {};

    if (!data.text) {
      return null;
    }

    return new ID3FrameBuilder("COMM").appendStaticNumber(0x01, 1).appendStaticValue(data.language).appendNullTerminatedValue(data.shortText, 0x01).appendStaticValue(data.text, null, 0x01).getBuffer();
  },
  read: buffer => {
    const reader = new ID3FrameReader(buffer, 0);
    return {
      language: reader.consumeStaticValue('string', 3, 0x00),
      shortText: reader.consumeNullTerminatedValue('string'),
      text: reader.consumeStaticValue('string', null)
    };
  }
};
module.exports.USLT = {
  create: data => {
    data = data || {};

    if (typeof data === 'string' || data instanceof String) {
      data = {
        text: data
      };
    }

    if (!data.text) {
      return null;
    }

    return new ID3FrameBuilder("USLT").appendStaticNumber(0x01, 1).appendStaticValue(data.language).appendNullTerminatedValue(data.shortText, 0x01).appendStaticValue(data.text, null, 0x01).getBuffer();
  },
  read: buffer => {
    const reader = new ID3FrameReader(buffer, 0);
    return {
      language: reader.consumeStaticValue('string', 3, 0x00),
      shortText: reader.consumeNullTerminatedValue('string'),
      text: reader.consumeStaticValue('string', null)
    };
  }
};
module.exports.TXXX = {
  create: data => {
    if (!(data instanceof Array)) {
      data = [data];
    }

    return Buffer.concat(data.map(udt => new ID3FrameBuilder("TXXX").appendStaticNumber(0x01, 1).appendNullTerminatedValue(udt.description, 0x01).appendStaticValue(udt.value, null, 0x01).getBuffer()));
  },
  read: buffer => {
    const reader = new ID3FrameReader(buffer, 0);
    return {
      description: reader.consumeNullTerminatedValue('string'),
      value: reader.consumeStaticValue('string')
    };
  }
};
module.exports.POPM = {
  create: data => {
    const email = data.email;
    let rating = Math.trunc(data.rating);
    let counter = Math.trunc(data.counter);

    if (!email) {
      return null;
    }

    if (isNaN(rating) || rating < 0 || rating > 255) {
      rating = 0;
    }

    if (isNaN(counter) || counter < 0) {
      counter = 0;
    }

    return new ID3FrameBuilder("POPM").appendNullTerminatedValue(email).appendStaticNumber(rating, 1).appendStaticNumber(counter, 4).getBuffer();
  },
  read: buffer => {
    const reader = new ID3FrameReader(buffer);
    return {
      email: reader.consumeNullTerminatedValue('string'),
      rating: reader.consumeStaticValue('number', 1),
      counter: reader.consumeStaticValue('number')
    };
  }
};
module.exports.PRIV = {
  create: data => {
    if (!(data instanceof Array)) {
      data = [data];
    }

    return Buffer.concat(data.map(priv => new ID3FrameBuilder("PRIV").appendNullTerminatedValue(priv.ownerIdentifier).appendStaticValue(priv.data instanceof Buffer ? priv.data : Buffer.from(priv.data, "utf8")).getBuffer()));
  },
  read: buffer => {
    const reader = new ID3FrameReader(buffer);
    return {
      ownerIdentifier: reader.consumeNullTerminatedValue('string'),
      data: reader.consumeStaticValue()
    };
  }
};
module.exports.CHAP = {
  create: (data, version, nodeId3) => {
    if (!(data instanceof Array)) {
      data = [data];
    }

    return Buffer.concat(data.map(chap => {
      if (!chap || !chap.elementID || typeof chap.startTimeMs === "undefined" || !chap.endTimeMs) {
        return null;
      }

      return new ID3FrameBuilder("CHAP").appendNullTerminatedValue(chap.elementID).appendStaticNumber(chap.startTimeMs, 4).appendStaticNumber(chap.endTimeMs, 4).appendStaticNumber(chap.startOffsetBytes ? chap.startOffsetBytes : 0xFFFFFFFF, 4).appendStaticNumber(chap.endOffsetBytes ? chap.endOffsetBytes : 0xFFFFFFFF, 4).appendStaticValue(nodeId3.create(chap.tags).slice(10)).getBuffer();
    }).filter(chap => chap instanceof Buffer));
  },
  read: (buffer, version, nodeId3) => {
    const reader = new ID3FrameReader(buffer);
    let chap = {
      elementID: reader.consumeNullTerminatedValue('string'),
      startTimeMs: reader.consumeStaticValue('number', 4),
      endTimeMs: reader.consumeStaticValue('number', 4),
      startOffsetBytes: reader.consumeStaticValue('number', 4),
      endOffsetBytes: reader.consumeStaticValue('number', 4),
      tags: nodeId3.getTagsFromFrames(nodeId3.getFramesFromID3Body(reader.consumeStaticValue(), 3, 4, 10), 3)
    };
    if (chap.startOffsetBytes === 0xFFFFFFFF) delete chap.startOffsetBytes;
    if (chap.endOffsetBytes === 0xFFFFFFFF) delete chap.endOffsetBytes;
    return chap;
  }
};
module.exports.CTOC = {
  create: (data, version, nodeId3) => {
    if (!(data instanceof Array)) {
      data = [data];
    }

    return Buffer.concat(data.map((toc, index) => {
      if (!toc || !toc.elementID) {
        return null;
      }

      if (!(toc.elements instanceof Array)) {
        toc.elements = [];
      }

      let ctocFlags = Buffer.alloc(1, 0);

      if (index === 0) {
        ctocFlags[0] += 2;
      }

      if (toc.isOrdered) {
        ctocFlags[0] += 1;
      }

      const builder = new ID3FrameBuilder("CTOC").appendNullTerminatedValue(toc.elementID).appendStaticValue(ctocFlags, 1).appendStaticNumber(toc.elements.length, 1);
      toc.elements.forEach(el => {
        builder.appendNullTerminatedValue(el);
      });

      if (toc.tags) {
        builder.appendStaticValue(nodeId3.create(toc.tags).slice(10));
      }

      return builder.getBuffer();
    }).filter(toc => toc instanceof Buffer));
  },
  read: (buffer, version, nodeId3) => {
    const reader = new ID3FrameReader(buffer);
    const elementID = reader.consumeNullTerminatedValue('string');
    const flags = reader.consumeStaticValue('number', 1);
    const entries = reader.consumeStaticValue('number', 1);
    const elements = [];

    for (let i = 0; i < entries; i++) {
      elements.push(reader.consumeNullTerminatedValue('string'));
    }

    const tags = nodeId3.getTagsFromFrames(nodeId3.getFramesFromID3Body(reader.consumeStaticValue(), 3, 4, 10), 3);
    return {
      elementID,
      isOrdered: !!(flags & 0x01 === 0x01),
      elements,
      tags
    };
  }
};
module.exports.WXXX = {
  create: data => {
    if (!(data instanceof Array)) {
      data = [data];
    }

    return Buffer.concat(data.map(udu => {
      return new ID3FrameBuilder("WXXX").appendStaticNumber(0x01, 1).appendNullTerminatedValue(udu.description, 0x01).appendStaticValue(udu.url, null).getBuffer();
    }));
  },
  read: buffer => {
    const reader = new ID3FrameReader(buffer, 0);
    return {
      description: reader.consumeNullTerminatedValue('string'),
      url: reader.consumeStaticValue('string', null, 0x00)
    };
  }
};

/***/ }),

/***/ "./node_modules/node-id3/src/ID3Util.js":
/*!**********************************************!*\
  !*** ./node_modules/node-id3/src/ID3Util.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const iconv = __webpack_require__(/*! iconv-lite */ "./node_modules/node-id3/node_modules/iconv-lite/lib/index.js");

const ID3Definitions = __webpack_require__(/*! ./ID3Definitions */ "./node_modules/node-id3/src/ID3Definitions.js");

const ENCODINGS = ['ISO-8859-1', 'UTF-16', 'UTF-16BE', 'UTF-8'];
module.exports.SplitBuffer = class SplitBuffer {
  constructor(value = null, remainder = null) {
    this.value = value;
    this.remainder = remainder;
  }

};

module.exports.splitNullTerminatedBuffer = function (buffer, encodingByte = 0x00) {
  let termination = {
    start: -1,
    size: 0
  };

  if (encodingByte === 0x01 || encodingByte === 0x02) {
    termination.start = buffer.indexOf(Buffer.from([0x00, 0x00]));
    termination.size = 2;

    if (termination.start !== -1 && buffer.length > termination.start + termination.size) {
      if (buffer[termination.start + termination.size] === 0x00) {
        termination.start += 1;
      }
    }
  } else {
    termination.start = buffer.indexOf(0x00);
    termination.size = 1;
  }

  if (termination.start === -1) {
    return new this.SplitBuffer(null, buffer.slice(0));
  } else if (buffer.length <= termination.start + termination.length) {
    return new this.SplitBuffer(buffer.slice(0, termination.start), null);
  } else {
    return new this.SplitBuffer(buffer.slice(0, termination.start), buffer.slice(termination.start + termination.size));
  }
};

module.exports.terminationBuffer = function (encodingByte = 0x00) {
  if (encodingByte === 0x01 || encodingByte === 0x02) {
    return Buffer.alloc(2, 0x00);
  } else {
    return Buffer.alloc(1, 0x00);
  }
};

module.exports.encodingFromStringOrByte = function (encoding) {
  if (ENCODINGS.indexOf(encoding) !== -1) {
    return encoding;
  } else if (encoding > -1 && encoding < ENCODINGS.length) {
    encoding = ENCODINGS[encoding];
  } else {
    encoding = ENCODINGS[0];
  }

  return encoding;
};

module.exports.stringToEncodedBuffer = function (str, encodingByte) {
  return iconv.encode(str, this.encodingFromStringOrByte(encodingByte));
};

module.exports.bufferToDecodedString = function (buffer, encodingByte) {
  return iconv.decode(buffer, this.encodingFromStringOrByte(encodingByte)).replace(/\0/g, '');
};

module.exports.getSpecOptions = function (specName, version) {
  if (version === 2) {
    if (ID3Definitions.ID3_FRAME_OPTIONS.v2[specName] && ID3Definitions.ID3_FRAME_OPTIONS.v2[specName]) {
      return ID3Definitions.ID3_FRAME_OPTIONS.v2[specName];
    }
  } else if (version === 3 || version === 4) {
    if (ID3Definitions.ID3_FRAME_OPTIONS.v3[specName] && ID3Definitions.ID3_FRAME_OPTIONS.v3[specName]) {
      return ID3Definitions.ID3_FRAME_OPTIONS.v3[specName];
    }
  }

  return {};
};

module.exports.isValidID3Header = function (buffer) {
  if (buffer.length < 10) {
    return false;
  } else if (buffer.readUIntBE(0, 3) !== 0x494433) {
    return false;
  } else if ([0x02, 0x03, 0x04].indexOf(buffer[3]) === -1 || buffer[4] !== 0x00) {
    return false;
  } else if (buffer[6] & 128 === 1 || buffer[7] & 128 === 1 || buffer[8] & 128 === 1 || buffer[9] & 128 === 1) {
    return false;
  }

  return true;
};

module.exports.getFramePosition = function (buffer) {
  /* Search Buffer for valid ID3 frame */
  let framePosition = -1;
  let frameHeaderValid = false;

  do {
    framePosition = buffer.indexOf("ID3", framePosition + 1);

    if (framePosition !== -1) {
      /* It's possible that there is a "ID3" sequence without being an ID3 Frame,
       * so we need to check for validity of the next 10 bytes
       */
      frameHeaderValid = this.isValidID3Header(buffer.slice(framePosition, framePosition + 10));
    }
  } while (framePosition !== -1 && !frameHeaderValid);

  if (!frameHeaderValid) {
    return -1;
  } else {
    return framePosition;
  }
};
/**
 * @return {Buffer}
 */


module.exports.encodeSize = function (totalSize) {
  let byte_3 = totalSize & 0x7F;
  let byte_2 = totalSize >> 7 & 0x7F;
  let byte_1 = totalSize >> 14 & 0x7F;
  let byte_0 = totalSize >> 21 & 0x7F;
  return Buffer.from([byte_0, byte_1, byte_2, byte_3]);
};
/**
 * @return {Buffer}
 */


module.exports.decodeSize = function (hSize) {
  return (hSize[0] << 21) + (hSize[1] << 14) + (hSize[2] << 7) + hSize[3];
};

module.exports.getFrameSize = function (buffer, decode, ID3Version) {
  let decodeBytes;

  if (ID3Version > 2) {
    decodeBytes = [buffer[4], buffer[5], buffer[6], buffer[7]];
  } else {
    decodeBytes = [buffer[3], buffer[4], buffer[5]];
  }

  if (decode) {
    return this.decodeSize(Buffer.from(decodeBytes));
  } else {
    return Buffer.from(decodeBytes).readUIntBE(0, decodeBytes.length);
  }
};

module.exports.parseTagHeaderFlags = function (header) {
  if (!(header instanceof Buffer && header.length >= 10)) {
    return {};
  }

  const version = header[3];
  const flagsByte = header[5];

  if (version === 3) {
    return {
      unsynchronisation: !!(flagsByte & 128),
      extendedHeader: !!(flagsByte & 64),
      experimentalIndicator: !!(flagsByte & 32)
    };
  }

  if (version === 4) {
    return {
      unsynchronisation: !!(flagsByte & 128),
      extendedHeader: !!(flagsByte & 64),
      experimentalIndicator: !!(flagsByte & 32),
      footerPresent: !!(flagsByte & 16)
    };
  }

  return {};
};

module.exports.parseFrameHeaderFlags = function (header, ID3Version) {
  if (!(header instanceof Buffer && header.length === 10)) {
    return {};
  }

  const flagsFirstByte = header[8];
  const flagsSecondByte = header[9];

  if (ID3Version === 3) {
    return {
      tagAlterPreservation: !!(flagsFirstByte & 128),
      fileAlterPreservation: !!(flagsFirstByte & 64),
      readOnly: !!(flagsFirstByte & 32),
      compression: !!(flagsSecondByte & 128),
      encryption: !!(flagsSecondByte & 64),
      groupingIdentity: !!(flagsSecondByte & 32)
    };
  }

  if (ID3Version === 4) {
    return {
      tagAlterPreservation: !!(flagsFirstByte & 64),
      fileAlterPreservation: !!(flagsFirstByte & 32),
      readOnly: !!(flagsFirstByte & 16),
      groupingIdentity: !!(flagsSecondByte & 64),
      compression: !!(flagsSecondByte & 8),
      encryption: !!(flagsSecondByte & 4),
      unsynchronisation: !!(flagsSecondByte & 2),
      dataLengthIndicator: !!(flagsSecondByte & 1)
    };
  }

  return {};
};

module.exports.processUnsynchronisedBuffer = function (buffer) {
  const newDataArr = [];

  if (buffer.length > 0) {
    newDataArr.push(buffer[0]);
  }

  for (let i = 1; i < buffer.length; i++) {
    if (buffer[i - 1] === 0xFF && buffer[i] === 0x00) continue;
    newDataArr.push(buffer[i]);
  }

  return Buffer.from(newDataArr);
};

/***/ }),

/***/ "./node_modules/once/once.js":
/*!***********************************!*\
  !*** ./node_modules/once/once.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wrappy = __webpack_require__(/*! wrappy */ "./node_modules/wrappy/wrappy.js");

module.exports = wrappy(once);
module.exports.strict = wrappy(onceStrict);
once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this);
    },
    configurable: true
  });
  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this);
    },
    configurable: true
  });
});

function once(fn) {
  var f = function () {
    if (f.called) return f.value;
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };

  f.called = false;
  return f;
}

function onceStrict(fn) {
  var f = function () {
    if (f.called) throw new Error(f.onceError);
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };

  var name = fn.name || 'Function wrapped with `once`';
  f.onceError = name + " shouldn't be called more than once";
  f.called = false;
  return f;
}

/***/ }),

/***/ "./node_modules/safer-buffer/safer.js":
/*!********************************************!*\
  !*** ./node_modules/safer-buffer/safer.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint-disable node/no-deprecated-api */


var buffer = __webpack_require__(/*! buffer */ "buffer");

var Buffer = buffer.Buffer;
var safer = {};
var key;

for (key in buffer) {
  if (!buffer.hasOwnProperty(key)) continue;
  if (key === 'SlowBuffer' || key === 'Buffer') continue;
  safer[key] = buffer[key];
}

var Safer = safer.Buffer = {};

for (key in Buffer) {
  if (!Buffer.hasOwnProperty(key)) continue;
  if (key === 'allocUnsafe' || key === 'allocUnsafeSlow') continue;
  Safer[key] = Buffer[key];
}

safer.Buffer.prototype = Buffer.prototype;

if (!Safer.from || Safer.from === Uint8Array.from) {
  Safer.from = function (value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof value);
    }

    if (value && typeof value.length === 'undefined') {
      throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof value);
    }

    return Buffer(value, encodingOrOffset, length);
  };
}

if (!Safer.alloc) {
  Safer.alloc = function (size, fill, encoding) {
    if (typeof size !== 'number') {
      throw new TypeError('The "size" argument must be of type number. Received type ' + typeof size);
    }

    if (size < 0 || size >= 2 * (1 << 30)) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"');
    }

    var buf = Buffer(size);

    if (!fill || fill.length === 0) {
      buf.fill(0);
    } else if (typeof encoding === 'string') {
      buf.fill(fill, encoding);
    } else {
      buf.fill(fill);
    }

    return buf;
  };
}

if (!safer.kStringMaxLength) {
  try {
    safer.kStringMaxLength = process.binding('buffer').kStringMaxLength;
  } catch (e) {// we can't determine kStringMaxLength in environments where process.binding
    // is unsupported, so let's not set it
  }
}

if (!safer.constants) {
  safer.constants = {
    MAX_LENGTH: safer.kMaxLength
  };

  if (safer.kStringMaxLength) {
    safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength;
  }
}

module.exports = safer;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/index.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NIL": () => (/* reexport safe */ _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "parse": () => (/* reexport safe */ _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "stringify": () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "v1": () => (/* reexport safe */ _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "v3": () => (/* reexport safe */ _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "v4": () => (/* reexport safe */ _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "v5": () => (/* reexport safe */ _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "validate": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "version": () => (/* reexport safe */ _version_js__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-node/v1.js");
/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-node/v3.js");
/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-node/v5.js");
/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/esm-node/nil.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/esm-node/version.js");
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-node/parse.js");










/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/md5.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/md5.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);


function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash('md5').update(bytes).digest();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/nil.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/nil.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/parse.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/parse.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");


function parse(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/regex.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/regex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/rng.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/rng.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/sha1.js":
/*!*************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/sha1.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);


function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash('sha1').update(bytes).digest();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/stringify.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/stringify.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v1.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v1.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v3.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v3.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-node/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-node/md5.js");


const v3 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v35.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v35.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DNS": () => (/* binding */ DNS),
/* harmony export */   "URL": () => (/* binding */ URL),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-node/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v4.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v4.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v5.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v5.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-node/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-node/sha1.js");


const v5 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/validate.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/validate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-node/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/version.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/version.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");


function version(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);

/***/ }),

/***/ "./node_modules/wrappy/wrappy.js":
/*!***************************************!*\
  !*** ./node_modules/wrappy/wrappy.js ***!
  \***************************************/
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy;

function wrappy(fn, cb) {
  if (fn && cb) return wrappy(fn)(cb);
  if (typeof fn !== 'function') throw new TypeError('need wrapper function');
  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k];
  });
  return wrapper;

  function wrapper() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    var ret = fn.apply(this, args);
    var cb = args[args.length - 1];

    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k];
      });
    }

    return ret;
  }
}

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.saveFileToJson = exports.getMetaData = exports.isDirectory = void 0;
const fs = __importStar(__webpack_require__(/*! fs */ "fs"));
const glob_1 = __webpack_require__(/*! glob */ "./node_modules/glob/glob.js");
const node_id3_1 = __importDefault(__webpack_require__(/*! node-id3 */ "./node_modules/node-id3/index.js"));
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/index.js");
// Using Glob to fetch the files from the Directory
const fetchFilesData = async (data) => {
    const scanSelectedFiles = (data) => {
        return new Promise((resolve, reject) => {
            (0, glob_1.glob)(`${data}/**/*.{m4a,mp3}`, (err, files) => {
                resolve(files);
            });
        });
    };
    const result = await scanSelectedFiles(data);
    return result;
};
// Checks if the path is a Directory
const isDirectory = (fileNames) => {
    let check = false;
    for (let file of fileNames) {
        let checkStatus = fs.lstatSync(file).isDirectory() === false ? false : true;
        if (checkStatus === false)
            return;
        check = checkStatus;
    }
    return check;
};
exports.isDirectory = isDirectory;
// Lets get the meta-tags with Nodeid-3
const nodeIDScan = async (path) => {
    const nodeScan = await node_id3_1.default.read(path, { noRaw: false });
    return nodeScan;
};
// convert the object to have all attributes
function trackConversion(data, fileName, fileSize) {
    return {
        id: (0, uuid_1.v4)(),
        size: data.size ? data.size : fileSize,
        filename: fileName,
        title: data.title ? data.title : "",
        artist: data.artist ? data.artist : "Add Artist Name",
        bpm: data.bpm ? data.bpm : "",
        remixArtist: data.remixArtist ? data.remixArtist : "",
        composer: data.composer ? data.composer : "",
        contentGroup: data.contentGroup ? data.contentGroup : "",
        initialKey: data.initialKey ? data.initialKey : "",
        label: data.publisher ? data.publisher : "",
        year: data.year ? data.year : "",
        genre: data.genre ? data.genre : "default genre",
        comment: {
            text: data.comment?.text ? data.comment?.text : "default comment",
        },
    };
}
// grabbing the files, converting,
const getMetaData = async (dir) => {
    const fetchFiles = await fetchFilesData(dir);
    let newFiles = [];
    for (let fileName of fetchFiles) {
        const stats = fs.statSync(fileName);
        const filesSizeInBytes = `${stats.size / (1024 * 1000)}MB`;
        const audioTags = await nodeIDScan(fileName);
        const convertedTags = trackConversion(audioTags, fileName, filesSizeInBytes);
        newFiles.push(convertedTags);
    }
    return newFiles;
};
exports.getMetaData = getMetaData;
const saveFileToJson = (data) => {
    const DATA_PATH = "../../data/tracks.json";
    fs.writeFileSync(DATA_PATH, JSON.stringify(data), "utf8");
    console.log("The file was saved!");
};
exports.saveFileToJson = saveFileToJson;
module.exports = {
    isDirectory: exports.isDirectory,
    getMetaData: exports.getMetaData,
    saveFileToJson: exports.saveFileToJson,
};
// https://dmitripavlutin.com/return-await-promise-javascript/


/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/big5-added.json":
/*!****************************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/big5-added.json ***!
  \****************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = [[\\\"...\"\nFile was processed with these loaders:\n * ./node_modules/json-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\nJSONParseError: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = [[\\\"...\"\n    at JsonParser.parse (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/json/JsonParser.js:43:7)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:1087:26\n    at processResult (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:800:11)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:860:5\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:407:3\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:233:10)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:240:10)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:255:3\n    at runSyncOrAsync (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:143:11)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:251:2)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:224:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:834:15\n    at Array.eval (eval at create (/Volumes/MUSIKBUCKET/app/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:12:1)\n    at runCallbacks (/Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:27:15)\n    at /Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:200:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/graceful-fs/graceful-fs.js:123:16");

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/cp936.json":
/*!***********************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/cp936.json ***!
  \***********************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = [[\\\"...\"\nFile was processed with these loaders:\n * ./node_modules/json-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\nJSONParseError: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = [[\\\"...\"\n    at JsonParser.parse (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/json/JsonParser.js:43:7)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:1087:26\n    at processResult (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:800:11)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:860:5\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:407:3\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:233:10)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:240:10)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:255:3\n    at runSyncOrAsync (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:143:11)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:251:2)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:224:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:834:15\n    at Array.eval (eval at create (/Volumes/MUSIKBUCKET/app/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:12:1)\n    at runCallbacks (/Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:27:15)\n    at /Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:200:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/graceful-fs/graceful-fs.js:123:16");

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/cp949.json":
/*!***********************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/cp949.json ***!
  \***********************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = [[\\\"...\"\nFile was processed with these loaders:\n * ./node_modules/json-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\nJSONParseError: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = [[\\\"...\"\n    at JsonParser.parse (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/json/JsonParser.js:43:7)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:1087:26\n    at processResult (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:800:11)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:860:5\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:407:3\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:233:10)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:240:10)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:255:3\n    at runSyncOrAsync (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:143:11)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:251:2)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:224:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:834:15\n    at Array.eval (eval at create (/Volumes/MUSIKBUCKET/app/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:12:1)\n    at runCallbacks (/Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:27:15)\n    at /Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:200:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/graceful-fs/graceful-fs.js:123:16");

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/cp950.json":
/*!***********************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/cp950.json ***!
  \***********************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = [[\\\"...\"\nFile was processed with these loaders:\n * ./node_modules/json-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\nJSONParseError: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = [[\\\"...\"\n    at JsonParser.parse (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/json/JsonParser.js:43:7)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:1087:26\n    at processResult (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:800:11)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:860:5\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:407:3\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:233:10)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:240:10)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:255:3\n    at runSyncOrAsync (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:143:11)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:251:2)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:224:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:834:15\n    at Array.eval (eval at create (/Volumes/MUSIKBUCKET/app/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:12:1)\n    at runCallbacks (/Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:27:15)\n    at /Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:200:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/graceful-fs/graceful-fs.js:123:16");

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/eucjp.json":
/*!***********************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/eucjp.json ***!
  \***********************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = [[\\\"...\"\nFile was processed with these loaders:\n * ./node_modules/json-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\nJSONParseError: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = [[\\\"...\"\n    at JsonParser.parse (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/json/JsonParser.js:43:7)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:1087:26\n    at processResult (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:800:11)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:860:5\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:407:3\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:233:10)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:240:10)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:255:3\n    at runSyncOrAsync (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:143:11)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:251:2)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:224:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:834:15\n    at Array.eval (eval at create (/Volumes/MUSIKBUCKET/app/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:12:1)\n    at runCallbacks (/Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:27:15)\n    at /Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:200:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/graceful-fs/graceful-fs.js:123:16");

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/gb18030-ranges.json":
/*!********************************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/gb18030-ranges.json ***!
  \********************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = {\\\"u...\"\nFile was processed with these loaders:\n * ./node_modules/json-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\nJSONParseError: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = {\\\"u...\"\n    at JsonParser.parse (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/json/JsonParser.js:43:7)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:1087:26\n    at processResult (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:800:11)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:860:5\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:407:3\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:233:10)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:240:10)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:255:3\n    at runSyncOrAsync (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:143:11)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:251:2)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:224:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:834:15\n    at Array.eval (eval at create (/Volumes/MUSIKBUCKET/app/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:12:1)\n    at runCallbacks (/Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:27:15)\n    at /Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:200:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/graceful-fs/graceful-fs.js:123:16");

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/gbk-added.json":
/*!***************************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/gbk-added.json ***!
  \***************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = [[\\\"...\"\nFile was processed with these loaders:\n * ./node_modules/json-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\nJSONParseError: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = [[\\\"...\"\n    at JsonParser.parse (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/json/JsonParser.js:43:7)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:1087:26\n    at processResult (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:800:11)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:860:5\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:407:3\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:233:10)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:240:10)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:255:3\n    at runSyncOrAsync (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:143:11)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:251:2)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:224:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:834:15\n    at Array.eval (eval at create (/Volumes/MUSIKBUCKET/app/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:12:1)\n    at runCallbacks (/Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:27:15)\n    at /Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:200:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/graceful-fs/graceful-fs.js:123:16");

/***/ }),

/***/ "./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/shiftjis.json":
/*!**************************************************************************************!*\
  !*** ./node_modules/node-id3/node_modules/iconv-lite/encodings/tables/shiftjis.json ***!
  \**************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = [[\\\"...\"\nFile was processed with these loaders:\n * ./node_modules/json-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\nJSONParseError: Unexpected token \"m\" (0x6D) in JSON at position 0 while parsing near \"module.exports = [[\\\"...\"\n    at JsonParser.parse (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/json/JsonParser.js:43:7)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:1087:26\n    at processResult (/Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:800:11)\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:860:5\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:407:3\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:233:10)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:240:10)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:255:3\n    at runSyncOrAsync (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:143:11)\n    at iterateNormalLoaders (/Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:251:2)\n    at /Volumes/MUSIKBUCKET/app/node_modules/loader-runner/lib/LoaderRunner.js:224:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/webpack/lib/NormalModule.js:834:15\n    at Array.eval (eval at create (/Volumes/MUSIKBUCKET/app/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:12:1)\n    at runCallbacks (/Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:27:15)\n    at /Volumes/MUSIKBUCKET/app/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:200:4\n    at /Volumes/MUSIKBUCKET/app/node_modules/graceful-fs/graceful-fs.js:123:16");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./dev/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const electron_1 = __webpack_require__(/*! electron */ "electron");
const utils_1 = __webpack_require__(/*! ../src/utils */ "./src/utils/index.ts");
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (__webpack_require__(/*! electron-squirrel-startup */ "./node_modules/electron-squirrel-startup/index.js")) {
    // eslint-disable-line global-require
    electron_1.app.quit();
}
const createWindow = () => {
    // Create the browser window.
    const mainWindow = new electron_1.BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            contextIsolation: true,
            preload: '/Volumes/MUSIKBUCKET/app/.webpack/renderer/main_window/preload.js',
        },
    });
    // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:3000/main_window');
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on("ready", createWindow);
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
electron_1.ipcMain.handle("upload-files", async (event, args) => {
    // lets give them the dialog to choose a folder
    const dialogButton = await electron_1.dialog.showOpenDialog({
        properties: ["openDirectory", "createDirectory", "openFile"],
    });
    // user selected cancel button to show selection process
    if (dialogButton.canceled)
        return;
    // I should be looking for an array. here is my options
    const selectedPath = dialogButton?.filePaths;
    // Is it a Directory | File?
    if (selectedPath && (0, utils_1.isDirectory)(selectedPath)) {
        const [folderPath] = selectedPath;
        const audioData = await (0, utils_1.getMetaData)(folderPath);
        return audioData;
    }
    // If files exist? how many?
});
// https://stackoverflow.com/questions/43455911/using-es6-spread-to-concat-multiple-arrays
// https://stackoverflow.com/questions/15630770/node-js-check-if-path-is-file-or-directory

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map