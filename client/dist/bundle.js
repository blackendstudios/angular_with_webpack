/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3000/assets/f52b04fee63e10c9a412";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(191);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(2);

	__webpack_require__(189);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(36);
	__webpack_require__(42);
	__webpack_require__(44);
	__webpack_require__(46);
	__webpack_require__(48);
	__webpack_require__(50);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(122);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(145);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(188);
	module.exports = __webpack_require__(7);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(4)
	  , $export           = __webpack_require__(5)
	  , DESCRIPTORS       = __webpack_require__(10)
	  , createDesc        = __webpack_require__(9)
	  , html              = __webpack_require__(16)
	  , cel               = __webpack_require__(17)
	  , has               = __webpack_require__(19)
	  , cof               = __webpack_require__(20)
	  , invoke            = __webpack_require__(21)
	  , fails             = __webpack_require__(11)
	  , anObject          = __webpack_require__(22)
	  , aFunction         = __webpack_require__(15)
	  , isObject          = __webpack_require__(18)
	  , toObject          = __webpack_require__(23)
	  , toIObject         = __webpack_require__(25)
	  , toInteger         = __webpack_require__(27)
	  , toIndex           = __webpack_require__(28)
	  , toLength          = __webpack_require__(29)
	  , IObject           = __webpack_require__(26)
	  , IE_PROTO          = __webpack_require__(13)('__proto__')
	  , createArrayMethod = __webpack_require__(30)
	  , arrayIndexOf      = __webpack_require__(35)(false)
	  , ObjectProto       = Object.prototype
	  , ArrayProto        = Array.prototype
	  , arraySlice        = ArrayProto.slice
	  , arrayJoin         = ArrayProto.join
	  , defineProperty    = $.setDesc
	  , getOwnDescriptor  = $.getDesc
	  , defineProperties  = $.setDescs
	  , factories         = {}
	  , IE8_DOM_DEFINE;

	if(!DESCRIPTORS){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});

	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;

	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$export($export.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$export($export.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = arraySlice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * fails(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$export($export.P + $export.F * (IObject != Object), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
	  }
	});

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$export($export.S, 'Array', {isArray: __webpack_require__(32)});

	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};

	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};

	$export($export.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(createArrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(createArrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(createArrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(createArrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(createArrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize(arrayIndexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});

	// 20.3.3.1 / 15.9.4.4 Date.now()
	$export($export.S, 'Date', {now: function(){ return +new Date; }});

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , hide      = __webpack_require__(8)
	  , redefine  = __webpack_require__(12)
	  , ctx       = __webpack_require__(14)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(4)
	  , createDesc = __webpack_require__(9);
	module.exports = __webpack_require__(10) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(8)
	  , SRC       = __webpack_require__(13)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(7).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(24);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26)
	  , defined = __webpack_require__(24);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(20);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(27)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(14)
	  , IObject  = __webpack_require__(26)
	  , toObject = __webpack_require__(23)
	  , toLength = __webpack_require__(29)
	  , asc      = __webpack_require__(31);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(18)
	  , isArray  = __webpack_require__(32)
	  , SPECIES  = __webpack_require__(33)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(20);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(34)('wks')
	  , uid    = __webpack_require__(13)
	  , Symbol = __webpack_require__(6).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29)
	  , toIndex   = __webpack_require__(28);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(4)
	  , global         = __webpack_require__(6)
	  , has            = __webpack_require__(19)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , $fails         = __webpack_require__(11)
	  , shared         = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(37)
	  , uid            = __webpack_require__(13)
	  , wks            = __webpack_require__(33)
	  , keyOf          = __webpack_require__(38)
	  , $names         = __webpack_require__(39)
	  , enumKeys       = __webpack_require__(40)
	  , isArray        = __webpack_require__(32)
	  , anObject       = __webpack_require__(22)
	  , toIObject      = __webpack_require__(25)
	  , createDesc     = __webpack_require__(9)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(4).setDesc
	  , has = __webpack_require__(19)
	  , TAG = __webpack_require__(33)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25)
	  , getNames  = __webpack_require__(4).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(4);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(43)});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(4)
	  , toObject = __webpack_require__(23)
	  , IObject  = __webpack_require__(26);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(11)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {is: __webpack_require__(45)});

/***/ },
/* 45 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(47).set});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(4).getDesc
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(14)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(49)
	  , test    = {};
	test[__webpack_require__(33)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(12)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(20)
	  , TAG = __webpack_require__(33)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(5)
	  , core    = __webpack_require__(7)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(25);

	__webpack_require__(51)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(23);

	__webpack_require__(51)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(23);

	__webpack_require__(51)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(51)('getOwnPropertyNames', function(){
	  return __webpack_require__(39).get;
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(4).setDesc
	  , createDesc = __webpack_require__(9)
	  , has        = __webpack_require__(19)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(10) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(4)
	  , isObject      = __webpack_require__(18)
	  , HAS_INSTANCE  = __webpack_require__(33)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(4)
	  , global      = __webpack_require__(6)
	  , has         = __webpack_require__(19)
	  , cof         = __webpack_require__(20)
	  , toPrimitive = __webpack_require__(64)
	  , fails       = __webpack_require__(11)
	  , $trim       = __webpack_require__(65).trim
	  , NUMBER      = 'Number'
	  , $Number     = global[NUMBER]
	  , Base        = $Number
	  , proto       = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF  = cof($.create(proto)) == NUMBER
	  , TRIM        = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(10) ? $.getNames(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), function(key){
	    if(has(Base, key) && !has($Number, key)){
	      $.setDesc($Number, key, $.getDesc(Base, key));
	    }
	  });
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(12)(global, NUMBER, $Number);
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , defined = __webpack_require__(24)
	  , fails   = __webpack_require__(11)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(5)
	  , _isFinite = __webpack_require__(6).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {isInteger: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(18)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(5)
	  , isInteger = __webpack_require__(69)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(5)
	  , log1p   = __webpack_require__(77)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 77 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(5);

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(5)
	  , sign    = __webpack_require__(81);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 81 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(5)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {expm1: __webpack_require__(85)});

/***/ },
/* 85 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(5)
	  , sign      = __webpack_require__(81)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(5)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum   = 0
	      , i     = 0
	      , $$    = arguments
	      , $$len = $$.length
	      , larg  = 0
	      , arg, div;
	    while(i < $$len){
	      arg = abs($$[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(5)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {log1p: __webpack_require__(77)});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {sign: __webpack_require__(81)});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(5)
	  , toIndex        = __webpack_require__(28)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res   = []
	      , $$    = arguments
	      , $$len = $$.length
	      , i     = 0
	      , code;
	    while($$len > i){
	      code = +$$[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(5)
	  , toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl   = toIObject(callSite.raw)
	      , len   = toLength(tpl.length)
	      , $$    = arguments
	      , $$len = $$.length
	      , res   = []
	      , i     = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < $$len)res.push(String($$[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(65)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(100)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(101)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , hide           = __webpack_require__(8)
	  , has            = __webpack_require__(19)
	  , Iterators      = __webpack_require__(102)
	  , $iterCreate    = __webpack_require__(103)
	  , setToStringTag = __webpack_require__(37)
	  , getProto       = __webpack_require__(4).getProto
	  , ITERATOR       = __webpack_require__(33)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(4)
	  , descriptor     = __webpack_require__(9)
	  , setToStringTag = __webpack_require__(37)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(8)(IteratorPrototype, __webpack_require__(33)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(5)
	  , toLength  = __webpack_require__(29)
	  , context   = __webpack_require__(106)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(108)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , $$   = arguments
	      , endPosition = $$.length > 1 ? $$[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(107)
	  , defined  = __webpack_require__(24);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(18)
	  , cof      = __webpack_require__(20)
	  , MATCH    = __webpack_require__(33)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(33)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(5)
	  , context  = __webpack_require__(106)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(108)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(111)
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(5)
	  , toLength    = __webpack_require__(29)
	  , context     = __webpack_require__(106)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(108)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , $$     = arguments
	      , index  = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(14)
	  , $export     = __webpack_require__(5)
	  , toObject    = __webpack_require__(23)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	$export($export.S + $export.F * !__webpack_require__(117)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(22);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(102)
	  , ITERATOR   = __webpack_require__(33)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(49)
	  , ITERATOR  = __webpack_require__(33)('iterator')
	  , Iterators = __webpack_require__(102);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(33)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(120)
	  , step             = __webpack_require__(121)
	  , Iterators        = __webpack_require__(102)
	  , toIObject        = __webpack_require__(25);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(101)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(33)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(123)('Array');

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , $           = __webpack_require__(4)
	  , DESCRIPTORS = __webpack_require__(10)
	  , SPECIES     = __webpack_require__(33)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(5);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(125)});

	__webpack_require__(120)('copyWithin');

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(5);

	$export($export.P, 'Array', {fill: __webpack_require__(127)});

	__webpack_require__(120)('fill');

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , global   = __webpack_require__(6)
	  , isRegExp = __webpack_require__(107)
	  , $flags   = __webpack_require__(131)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;

	if(__webpack_require__(10) && (!CORRECT_NEW || __webpack_require__(11)(function(){
	  re2[__webpack_require__(33)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
	      : CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
	  };
	  $.each.call($.getNames(Base), function(key){
	    key in $RegExp || $.setDesc($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  });
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(12)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(123)('RegExp');

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(22);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(4);
	if(__webpack_require__(10) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(131)
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(134)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(8)
	  , redefine = __webpack_require__(12)
	  , fails    = __webpack_require__(11)
	  , defined  = __webpack_require__(24)
	  , wks      = __webpack_require__(33);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , original = ''[KEY];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(134)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  };
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(134)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(134)('split', 2, function(defined, SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    'use strict';
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined
	      ? fn.call(separator, O, limit)
	      : $split.call(String(O), separator, limit);
	  };
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(4)
	  , LIBRARY    = __webpack_require__(41)
	  , global     = __webpack_require__(6)
	  , ctx        = __webpack_require__(14)
	  , classof    = __webpack_require__(49)
	  , $export    = __webpack_require__(5)
	  , isObject   = __webpack_require__(18)
	  , anObject   = __webpack_require__(22)
	  , aFunction  = __webpack_require__(15)
	  , strictNew  = __webpack_require__(139)
	  , forOf      = __webpack_require__(140)
	  , setProto   = __webpack_require__(47).set
	  , same       = __webpack_require__(45)
	  , SPECIES    = __webpack_require__(33)('species')
	  , speciesConstructor = __webpack_require__(141)
	  , asap       = __webpack_require__(142)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;

	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};

	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(10)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(144)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(37)(P, PROMISE);
	__webpack_require__(123)(PROMISE);
	Wrapper = __webpack_require__(7)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(117)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(14)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , anObject    = __webpack_require__(22)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(22)
	  , aFunction = __webpack_require__(15)
	  , SPECIES   = __webpack_require__(33)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , macrotask = __webpack_require__(143).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(20)(process) == 'process'
	  , head, last, notify;

	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};

	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}

	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(14)
	  , invoke             = __webpack_require__(21)
	  , html               = __webpack_require__(16)
	  , cel                = __webpack_require__(17)
	  , global             = __webpack_require__(6)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(20)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(12);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);

	// 23.1 Map Objects
	__webpack_require__(147)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , hide         = __webpack_require__(8)
	  , redefineAll  = __webpack_require__(144)
	  , ctx          = __webpack_require__(14)
	  , strictNew    = __webpack_require__(139)
	  , defined      = __webpack_require__(24)
	  , forOf        = __webpack_require__(140)
	  , $iterDefine  = __webpack_require__(101)
	  , step         = __webpack_require__(121)
	  , ID           = __webpack_require__(13)('id')
	  , $has         = __webpack_require__(19)
	  , isObject     = __webpack_require__(18)
	  , setSpecies   = __webpack_require__(123)
	  , DESCRIPTORS  = __webpack_require__(10)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;

	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , redefineAll    = __webpack_require__(144)
	  , forOf          = __webpack_require__(140)
	  , strictNew      = __webpack_require__(139)
	  , isObject       = __webpack_require__(18)
	  , fails          = __webpack_require__(11)
	  , $iterDetect    = __webpack_require__(117)
	  , setToStringTag = __webpack_require__(37);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO;
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || instance.forEach(function(val, key){
	      BUGGY_ZERO = 1 / key === -Infinity;
	    });
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);

	// 23.2 Set Objects
	__webpack_require__(147)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , redefine     = __webpack_require__(12)
	  , weak         = __webpack_require__(150)
	  , isObject     = __webpack_require__(18)
	  , has          = __webpack_require__(19)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};

	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(147)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(8)
	  , redefineAll       = __webpack_require__(144)
	  , anObject          = __webpack_require__(22)
	  , isObject          = __webpack_require__(18)
	  , strictNew         = __webpack_require__(139)
	  , forOf             = __webpack_require__(140)
	  , createArrayMethod = __webpack_require__(30)
	  , $has              = __webpack_require__(19)
	  , WEAK              = __webpack_require__(13)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(150);

	// 23.4 WeakSet Objects
	__webpack_require__(147)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(5)
	  , _apply  = Function.apply;

	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(4)
	  , $export   = __webpack_require__(5)
	  , aFunction = __webpack_require__(15)
	  , anObject  = __webpack_require__(22)
	  , isObject  = __webpack_require__(18)
	  , bind      = Function.bind || __webpack_require__(7).Function.prototype.bind;

	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      if(args != undefined)switch(anObject(args).length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(5)
	  , getDesc  = __webpack_require__(4).getDesc
	  , anObject = __webpack_require__(22);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(103)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(4)
	  , has      = __webpack_require__(19)
	  , $export  = __webpack_require__(5)
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(5)
	  , getProto = __webpack_require__(4).getProto
	  , anObject = __webpack_require__(22);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(5);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(5)
	  , anObject      = __webpack_require__(22)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(5);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(163)});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(4)
	  , anObject = __webpack_require__(22)
	  , Reflect  = __webpack_require__(6).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(5)
	  , anObject           = __webpack_require__(22)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(4)
	  , has        = __webpack_require__(19)
	  , $export    = __webpack_require__(5)
	  , createDesc = __webpack_require__(9)
	  , anObject   = __webpack_require__(22)
	  , isObject   = __webpack_require__(18);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(5)
	  , setProto = __webpack_require__(47);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(5)
	  , $includes = __webpack_require__(35)(true);

	$export($export.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(120)('includes');

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);

	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(29)
	  , repeat   = __webpack_require__(111)
	  , defined  = __webpack_require__(24);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);

	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(5)
	  , $re     = __webpack_require__(175)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(4)
	  , $export    = __webpack_require__(5)
	  , ownKeys    = __webpack_require__(163)
	  , toIObject  = __webpack_require__(25)
	  , createDesc = __webpack_require__(9);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export = __webpack_require__(5)
	  , $values = __webpack_require__(178)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(5)
	  , $entries = __webpack_require__(178)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);

	$export($export.P, 'Map', {toJSON: __webpack_require__(181)('Map')});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(140)
	  , classof = __webpack_require__(49);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);

	$export($export.P, 'Set', {toJSON: __webpack_require__(181)('Set')});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(4)
	  , $export = __webpack_require__(5)
	  , $ctx    = __webpack_require__(14)
	  , $Array  = __webpack_require__(7).Array || Array
	  , statics = {};
	var setStatics = function(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = $ctx(Function.call, [][key], length);
	  });
	};
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$export($export.S, 'Array', statics);

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(6)
	  , $export    = __webpack_require__(5)
	  , invoke     = __webpack_require__(21)
	  , partial    = __webpack_require__(185)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(186)
	  , invoke    = __webpack_require__(21)
	  , aFunction = __webpack_require__(15);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that  = this
	      , $$    = arguments
	      , $$len = $$.length
	      , j = 0, k = 0, args;
	    if(!holder && !$$len)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = $$[k++];
	    while($$len > k)args.push($$[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , $task   = __webpack_require__(143);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	var global      = __webpack_require__(6)
	  , hide        = __webpack_require__(8)
	  , Iterators   = __webpack_require__(102)
	  , ITERATOR    = __webpack_require__(33)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration. If the Promise is rejected, however, the
	            // result for this iteration will be rejected with the same
	            // reason. Note that rejections of yielded Promises are not
	            // thrown back into the generator function, as is the case
	            // when an awaited Promise is rejected. This difference in
	            // behavior between yield and await is important, because it
	            // allows the consumer to decide what to do with the yielded
	            // rejection (swallow it and continue, manually .throw it back
	            // into the generator, abandon iteration, whatever). With
	            // await, by contrast, there is no opportunity to examine the
	            // rejection reason outside the generator function, so the
	            // only option is to throw it from the await expression, and
	            // let the generator function handle the exception.
	            result.value = unwrapped;
	            return result;
	          });
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : new Promise(function (resolve) {
	          resolve(callInvokeWithMethodAndArg());
	        });
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          context._sent = arg;

	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(190)))

/***/ },
/* 190 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	var _app = __webpack_require__(193);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(194);

	var _app4 = _interopRequireDefault(_app3);

	var _app5 = __webpack_require__(201);

	var _app6 = _interopRequireDefault(_app5);

	var _components = __webpack_require__(202);

	var _components2 = _interopRequireDefault(_components);

	var _app7 = __webpack_require__(229);

	var _app8 = _interopRequireDefault(_app7);

	var _shared = __webpack_require__(233);

	var _shared2 = _interopRequireDefault(_shared);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_angular2.default.module('app', [_app4.default.name, _components2.default.name, _shared2.default.name, _app6.default.name]).config(_app2.default).component('app', _app8.default);

	// manually bootstrap angular
	_angular2.default.bootstrap(document, ['app'], {
	   strictDi: true
	});

/***/ },
/* 192 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 193 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	appConfig.$inject = ['$httpProvider'];

	function appConfig($httpProvider) {
	   $httpProvider.interceptors.push('LoadingInterceptor');
	}

	exports.default = appConfig;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	      value: true
	});

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(195);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _angularUiBootstrap = __webpack_require__(196);

	var _angularUiBootstrap2 = _interopRequireDefault(_angularUiBootstrap);

	var _dragular = __webpack_require__(198);

	var _dragular2 = _interopRequireDefault(_dragular);

	var _angularfire = __webpack_require__(199);

	var _angularfire2 = _interopRequireDefault(_angularfire);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var appLibraries = _angular2.default.module('app.libraries', [_angularUiRouter2.default, _angularUiBootstrap2.default, _angularfire2.default]);

	exports.default = appLibraries;

/***/ },
/* 195 */
/***/ function(module, exports) {

	/**
	 * State-based routing for AngularJS
	 * @version v0.2.15
	 * @link http://angular-ui.github.com/
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */

	/* commonjs package manager support (eg componentjs) */
	if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
	  module.exports = 'ui.router';
	}

	(function (window, angular, undefined) {
	/*jshint globalstrict:true*/
	/*global angular:false*/
	'use strict';

	var isDefined = angular.isDefined,
	    isFunction = angular.isFunction,
	    isString = angular.isString,
	    isObject = angular.isObject,
	    isArray = angular.isArray,
	    forEach = angular.forEach,
	    extend = angular.extend,
	    copy = angular.copy;

	function inherit(parent, extra) {
	  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
	}

	function merge(dst) {
	  forEach(arguments, function(obj) {
	    if (obj !== dst) {
	      forEach(obj, function(value, key) {
	        if (!dst.hasOwnProperty(key)) dst[key] = value;
	      });
	    }
	  });
	  return dst;
	}

	/**
	 * Finds the common ancestor path between two states.
	 *
	 * @param {Object} first The first state.
	 * @param {Object} second The second state.
	 * @return {Array} Returns an array of state names in descending order, not including the root.
	 */
	function ancestors(first, second) {
	  var path = [];

	  for (var n in first.path) {
	    if (first.path[n] !== second.path[n]) break;
	    path.push(first.path[n]);
	  }
	  return path;
	}

	/**
	 * IE8-safe wrapper for `Object.keys()`.
	 *
	 * @param {Object} object A JavaScript object.
	 * @return {Array} Returns the keys of the object as an array.
	 */
	function objectKeys(object) {
	  if (Object.keys) {
	    return Object.keys(object);
	  }
	  var result = [];

	  forEach(object, function(val, key) {
	    result.push(key);
	  });
	  return result;
	}

	/**
	 * IE8-safe wrapper for `Array.prototype.indexOf()`.
	 *
	 * @param {Array} array A JavaScript array.
	 * @param {*} value A value to search the array for.
	 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
	 */
	function indexOf(array, value) {
	  if (Array.prototype.indexOf) {
	    return array.indexOf(value, Number(arguments[2]) || 0);
	  }
	  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
	  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

	  if (from < 0) from += len;

	  for (; from < len; from++) {
	    if (from in array && array[from] === value) return from;
	  }
	  return -1;
	}

	/**
	 * Merges a set of parameters with all parameters inherited between the common parents of the
	 * current state and a given destination state.
	 *
	 * @param {Object} currentParams The value of the current state parameters ($stateParams).
	 * @param {Object} newParams The set of parameters which will be composited with inherited params.
	 * @param {Object} $current Internal definition of object representing the current state.
	 * @param {Object} $to Internal definition of object representing state to transition to.
	 */
	function inheritParams(currentParams, newParams, $current, $to) {
	  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

	  for (var i in parents) {
	    if (!parents[i].params) continue;
	    parentParams = objectKeys(parents[i].params);
	    if (!parentParams.length) continue;

	    for (var j in parentParams) {
	      if (indexOf(inheritList, parentParams[j]) >= 0) continue;
	      inheritList.push(parentParams[j]);
	      inherited[parentParams[j]] = currentParams[parentParams[j]];
	    }
	  }
	  return extend({}, inherited, newParams);
	}

	/**
	 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
	 *
	 * @param {Object} a The first object.
	 * @param {Object} b The second object.
	 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
	 *                     it defaults to the list of keys in `a`.
	 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
	 */
	function equalForKeys(a, b, keys) {
	  if (!keys) {
	    keys = [];
	    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
	  }

	  for (var i=0; i<keys.length; i++) {
	    var k = keys[i];
	    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
	  }
	  return true;
	}

	/**
	 * Returns the subset of an object, based on a list of keys.
	 *
	 * @param {Array} keys
	 * @param {Object} values
	 * @return {Boolean} Returns a subset of `values`.
	 */
	function filterByKeys(keys, values) {
	  var filtered = {};

	  forEach(keys, function (name) {
	    filtered[name] = values[name];
	  });
	  return filtered;
	}

	// like _.indexBy
	// when you know that your index values will be unique, or you want last-one-in to win
	function indexBy(array, propName) {
	  var result = {};
	  forEach(array, function(item) {
	    result[item[propName]] = item;
	  });
	  return result;
	}

	// extracted from underscore.js
	// Return a copy of the object only containing the whitelisted properties.
	function pick(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  forEach(keys, function(key) {
	    if (key in obj) copy[key] = obj[key];
	  });
	  return copy;
	}

	// extracted from underscore.js
	// Return a copy of the object omitting the blacklisted properties.
	function omit(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  for (var key in obj) {
	    if (indexOf(keys, key) == -1) copy[key] = obj[key];
	  }
	  return copy;
	}

	function pluck(collection, key) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = isFunction(key) ? key(val) : val[key];
	  });
	  return result;
	}

	function filter(collection, callback) {
	  var array = isArray(collection);
	  var result = array ? [] : {};
	  forEach(collection, function(val, i) {
	    if (callback(val, i)) {
	      result[array ? result.length : i] = val;
	    }
	  });
	  return result;
	}

	function map(collection, callback) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = callback(val, i);
	  });
	  return result;
	}

	/**
	 * @ngdoc overview
	 * @name ui.router.util
	 *
	 * @description
	 * # ui.router.util sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 *
	 */
	angular.module('ui.router.util', ['ng']);

	/**
	 * @ngdoc overview
	 * @name ui.router.router
	 * 
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.router sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 */
	angular.module('ui.router.router', ['ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router.state
	 * 
	 * @requires ui.router.router
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.state sub-module
	 *
	 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 * 
	 */
	angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router
	 *
	 * @requires ui.router.state
	 *
	 * @description
	 * # ui.router
	 * 
	 * ## The main module for ui.router 
	 * There are several sub-modules included with the ui.router module, however only this module is needed
	 * as a dependency within your angular app. The other modules are for organization purposes. 
	 *
	 * The modules are:
	 * * ui.router - the main "umbrella" module
	 * * ui.router.router - 
	 * 
	 * *You'll need to include **only** this module as the dependency within your angular app.*
	 * 
	 * <pre>
	 * <!doctype html>
	 * <html ng-app="myApp">
	 * <head>
	 *   <script src="js/angular.js"></script>
	 *   <!-- Include the ui-router script -->
	 *   <script src="js/angular-ui-router.min.js"></script>
	 *   <script>
	 *     // ...and add 'ui.router' as a dependency
	 *     var myApp = angular.module('myApp', ['ui.router']);
	 *   </script>
	 * </head>
	 * <body>
	 * </body>
	 * </html>
	 * </pre>
	 */
	angular.module('ui.router', ['ui.router.state']);

	angular.module('ui.router.compat', ['ui.router']);

	/**
	 * @ngdoc object
	 * @name ui.router.util.$resolve
	 *
	 * @requires $q
	 * @requires $injector
	 *
	 * @description
	 * Manages resolution of (acyclic) graphs of promises.
	 */
	$Resolve.$inject = ['$q', '$injector'];
	function $Resolve(  $q,    $injector) {
	  
	  var VISIT_IN_PROGRESS = 1,
	      VISIT_DONE = 2,
	      NOTHING = {},
	      NO_DEPENDENCIES = [],
	      NO_LOCALS = NOTHING,
	      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
	  

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#study
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Studies a set of invocables that are likely to be used multiple times.
	   * <pre>
	   * $resolve.study(invocables)(locals, parent, self)
	   * </pre>
	   * is equivalent to
	   * <pre>
	   * $resolve.resolve(invocables, locals, parent, self)
	   * </pre>
	   * but the former is more efficient (in fact `resolve` just calls `study` 
	   * internally).
	   *
	   * @param {object} invocables Invocable objects
	   * @return {function} a function to pass in locals, parent and self
	   */
	  this.study = function (invocables) {
	    if (!isObject(invocables)) throw new Error("'invocables' must be an object");
	    var invocableKeys = objectKeys(invocables || {});
	    
	    // Perform a topological sort of invocables to build an ordered plan
	    var plan = [], cycle = [], visited = {};
	    function visit(value, key) {
	      if (visited[key] === VISIT_DONE) return;
	      
	      cycle.push(key);
	      if (visited[key] === VISIT_IN_PROGRESS) {
	        cycle.splice(0, indexOf(cycle, key));
	        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
	      }
	      visited[key] = VISIT_IN_PROGRESS;
	      
	      if (isString(value)) {
	        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
	      } else {
	        var params = $injector.annotate(value);
	        forEach(params, function (param) {
	          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
	        });
	        plan.push(key, value, params);
	      }
	      
	      cycle.pop();
	      visited[key] = VISIT_DONE;
	    }
	    forEach(invocables, visit);
	    invocables = cycle = visited = null; // plan is all that's required
	    
	    function isResolve(value) {
	      return isObject(value) && value.then && value.$$promises;
	    }
	    
	    return function (locals, parent, self) {
	      if (isResolve(locals) && self === undefined) {
	        self = parent; parent = locals; locals = null;
	      }
	      if (!locals) locals = NO_LOCALS;
	      else if (!isObject(locals)) {
	        throw new Error("'locals' must be an object");
	      }       
	      if (!parent) parent = NO_PARENT;
	      else if (!isResolve(parent)) {
	        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
	      }
	      
	      // To complete the overall resolution, we have to wait for the parent
	      // promise and for the promise for each invokable in our plan.
	      var resolution = $q.defer(),
	          result = resolution.promise,
	          promises = result.$$promises = {},
	          values = extend({}, locals),
	          wait = 1 + plan.length/3,
	          merged = false;
	          
	      function done() {
	        // Merge parent values we haven't got yet and publish our own $$values
	        if (!--wait) {
	          if (!merged) merge(values, parent.$$values); 
	          result.$$values = values;
	          result.$$promises = result.$$promises || true; // keep for isResolve()
	          delete result.$$inheritedValues;
	          resolution.resolve(values);
	        }
	      }
	      
	      function fail(reason) {
	        result.$$failure = reason;
	        resolution.reject(reason);
	      }

	      // Short-circuit if parent has already failed
	      if (isDefined(parent.$$failure)) {
	        fail(parent.$$failure);
	        return result;
	      }
	      
	      if (parent.$$inheritedValues) {
	        merge(values, omit(parent.$$inheritedValues, invocableKeys));
	      }

	      // Merge parent values if the parent has already resolved, or merge
	      // parent promises and wait if the parent resolve is still in progress.
	      extend(promises, parent.$$promises);
	      if (parent.$$values) {
	        merged = merge(values, omit(parent.$$values, invocableKeys));
	        result.$$inheritedValues = omit(parent.$$values, invocableKeys);
	        done();
	      } else {
	        if (parent.$$inheritedValues) {
	          result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
	        }        
	        parent.then(done, fail);
	      }
	      
	      // Process each invocable in the plan, but ignore any where a local of the same name exists.
	      for (var i=0, ii=plan.length; i<ii; i+=3) {
	        if (locals.hasOwnProperty(plan[i])) done();
	        else invoke(plan[i], plan[i+1], plan[i+2]);
	      }
	      
	      function invoke(key, invocable, params) {
	        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
	        var invocation = $q.defer(), waitParams = 0;
	        function onfailure(reason) {
	          invocation.reject(reason);
	          fail(reason);
	        }
	        // Wait for any parameter that we have a promise for (either from parent or from this
	        // resolve; in that case study() will have made sure it's ordered before us in the plan).
	        forEach(params, function (dep) {
	          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
	            waitParams++;
	            promises[dep].then(function (result) {
	              values[dep] = result;
	              if (!(--waitParams)) proceed();
	            }, onfailure);
	          }
	        });
	        if (!waitParams) proceed();
	        function proceed() {
	          if (isDefined(result.$$failure)) return;
	          try {
	            invocation.resolve($injector.invoke(invocable, self, values));
	            invocation.promise.then(function (result) {
	              values[key] = result;
	              done();
	            }, onfailure);
	          } catch (e) {
	            onfailure(e);
	          }
	        }
	        // Publish promise synchronously; invocations further down in the plan may depend on it.
	        promises[key] = invocation.promise;
	      }
	      
	      return result;
	    };
	  };
	  
	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#resolve
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Resolves a set of invocables. An invocable is a function to be invoked via 
	   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
	   * An invocable can either return a value directly,
	   * or a `$q` promise. If a promise is returned it will be resolved and the 
	   * resulting value will be used instead. Dependencies of invocables are resolved 
	   * (in this order of precedence)
	   *
	   * - from the specified `locals`
	   * - from another invocable that is part of this `$resolve` call
	   * - from an invocable that is inherited from a `parent` call to `$resolve` 
	   *   (or recursively
	   * - from any ancestor `$resolve` of that parent).
	   *
	   * The return value of `$resolve` is a promise for an object that contains 
	   * (in this order of precedence)
	   *
	   * - any `locals` (if specified)
	   * - the resolved return values of all injectables
	   * - any values inherited from a `parent` call to `$resolve` (if specified)
	   *
	   * The promise will resolve after the `parent` promise (if any) and all promises 
	   * returned by injectables have been resolved. If any invocable 
	   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
	   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
	   * same error. A rejection of a `parent` promise (if specified) will likewise be 
	   * propagated immediately. Once the `$resolve` promise has been rejected, no 
	   * further invocables will be called.
	   * 
	   * Cyclic dependencies between invocables are not permitted and will caues `$resolve`
	   * to throw an error. As a special case, an injectable can depend on a parameter 
	   * with the same name as the injectable, which will be fulfilled from the `parent` 
	   * injectable of the same name. This allows inherited values to be decorated. 
	   * Note that in this case any other injectable in the same `$resolve` with the same
	   * dependency would see the decorated value, not the inherited value.
	   *
	   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
	   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
	   * exception.
	   *
	   * Invocables are invoked eagerly as soon as all dependencies are available. 
	   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
	   *
	   * As a special case, an invocable can be a string, in which case it is taken to 
	   * be a service name to be passed to `$injector.get()`. This is supported primarily 
	   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
	   * routes.
	   *
	   * @param {object} invocables functions to invoke or 
	   * `$injector` services to fetch.
	   * @param {object} locals  values to make available to the injectables
	   * @param {object} parent  a promise returned by another call to `$resolve`.
	   * @param {object} self  the `this` for the invoked methods
	   * @return {object} Promise for an object that contains the resolved return value
	   * of all invocables, as well as any inherited and local values.
	   */
	  this.resolve = function (invocables, locals, parent, self) {
	    return this.study(invocables)(locals, parent, self);
	  };
	}

	angular.module('ui.router.util').service('$resolve', $Resolve);


	/**
	 * @ngdoc object
	 * @name ui.router.util.$templateFactory
	 *
	 * @requires $http
	 * @requires $templateCache
	 * @requires $injector
	 *
	 * @description
	 * Service. Manages loading of templates.
	 */
	$TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
	function $TemplateFactory(  $http,   $templateCache,   $injector) {

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromConfig
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a configuration object. 
	   *
	   * @param {object} config Configuration object for which to load a template. 
	   * The following properties are search in the specified order, and the first one 
	   * that is defined is used to create the template:
	   *
	   * @param {string|object} config.template html string template or function to 
	   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
	   * @param {string|object} config.templateUrl url to load or a function returning 
	   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
	   * @param {Function} config.templateProvider function to invoke via 
	   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
	   * @param {object} params  Parameters to pass to the template function.
	   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
	   * via a `templateProvider`. Defaults to `{ params: params }`.
	   *
	   * @return {string|object}  The template html as a string, or a promise for 
	   * that string,or `null` if no template is configured.
	   */
	  this.fromConfig = function (config, params, locals) {
	    return (
	      isDefined(config.template) ? this.fromString(config.template, params) :
	      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
	      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
	      null
	    );
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromString
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a string or a function returning a string.
	   *
	   * @param {string|object} template html template as a string or function that 
	   * returns an html template as a string.
	   * @param {object} params Parameters to pass to the template function.
	   *
	   * @return {string|object} The template html as a string, or a promise for that 
	   * string.
	   */
	  this.fromString = function (template, params) {
	    return isFunction(template) ? template(params) : template;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromUrl
	   * @methodOf ui.router.util.$templateFactory
	   * 
	   * @description
	   * Loads a template from the a URL via `$http` and `$templateCache`.
	   *
	   * @param {string|Function} url url of the template to load, or a function 
	   * that returns a url.
	   * @param {Object} params Parameters to pass to the url function.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromUrl = function (url, params) {
	    if (isFunction(url)) url = url(params);
	    if (url == null) return null;
	    else return $http
	        .get(url, { cache: $templateCache, headers: { Accept: 'text/html' }})
	        .then(function(response) { return response.data; });
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromProvider
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template by invoking an injectable provider function.
	   *
	   * @param {Function} provider Function to invoke via `$injector.invoke`
	   * @param {Object} params Parameters for the template.
	   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
	   * `{ params: params }`.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromProvider = function (provider, params, locals) {
	    return $injector.invoke(provider, null, locals || { params: params });
	  };
	}

	angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

	var $$UMFP; // reference to $UrlMatcherFactoryProvider

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Matches URLs against patterns and extracts named parameters from the path or the search
	 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
	 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
	 * do not influence whether or not a URL is matched, but their values are passed through into
	 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
	 *
	 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
	 * syntax, which optionally allows a regular expression for the parameter to be specified:
	 *
	 * * `':'` name - colon placeholder
	 * * `'*'` name - catch-all placeholder
	 * * `'{' name '}'` - curly placeholder
	 * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
	 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
	 *
	 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
	 * must be unique within the pattern (across both path and search parameters). For colon
	 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
	 * number of characters other than '/'. For catch-all placeholders the path parameter matches
	 * any number of characters.
	 *
	 * Examples:
	 *
	 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
	 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
	 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
	 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
	 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
	 * * `'/user/{id:[^/]*}'` - Same as the previous example.
	 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
	 *   parameter consists of 1 to 8 hex digits.
	 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	 *   path into the parameter 'path'.
	 * * `'/files/*path'` - ditto.
	 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
	 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
	 *
	 * @param {string} pattern  The pattern to compile into a matcher.
	 * @param {Object} config  A configuration object hash:
	 * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
	 *   an existing UrlMatcher
	 *
	 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
	 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
	 *
	 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
	 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
	 *   non-null) will start with this prefix.
	 *
	 * @property {string} source  The pattern that was passed into the constructor
	 *
	 * @property {string} sourcePath  The path portion of the source property
	 *
	 * @property {string} sourceSearch  The search portion of the source property
	 *
	 * @property {string} regex  The constructed regex that will be used to match against the url when
	 *   it is time to determine which url will match.
	 *
	 * @returns {Object}  New `UrlMatcher` object
	 */
	function UrlMatcher(pattern, config, parentMatcher) {
	  config = extend({ params: {} }, isObject(config) ? config : {});

	  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
	  //   '*' name
	  //   ':' name
	  //   '{' name '}'
	  //   '{' name ':' regexp '}'
	  // The regular expression is somewhat complicated due to the need to allow curly braces
	  // inside the regular expression. The placeholder regexp breaks down as follows:
	  //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
	  //    \{([\w\[\]]+)(?:\:( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
	  //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
	  //    [^{}\\]+                       - anything other than curly braces or backslash
	  //    \\.                            - a backslash escape
	  //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
	  var placeholder       = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      searchPlaceholder = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      compiled = '^', last = 0, m,
	      segments = this.segments = [],
	      parentParams = parentMatcher ? parentMatcher.params : {},
	      params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
	      paramNames = [];

	  function addParameter(id, type, config, location) {
	    paramNames.push(id);
	    if (parentParams[id]) return parentParams[id];
	    if (!/^\w+(-+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
	    if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
	    params[id] = new $$UMFP.Param(id, type, config, location);
	    return params[id];
	  }

	  function quoteRegExp(string, pattern, squash, optional) {
	    var surroundPattern = ['',''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
	    if (!pattern) return result;
	    switch(squash) {
	      case false: surroundPattern = ['(', ')' + (optional ? "?" : "")]; break;
	      case true:  surroundPattern = ['?(', ')?']; break;
	      default:    surroundPattern = ['(' + squash + "|", ')?']; break;
	    }
	    return result + surroundPattern[0] + pattern + surroundPattern[1];
	  }

	  this.source = pattern;

	  // Split into static segments separated by path parameter placeholders.
	  // The number of segments is always 1 more than the number of parameters.
	  function matchDetails(m, isSearch) {
	    var id, regexp, segment, type, cfg, arrayMode;
	    id          = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
	    cfg         = config.params[id];
	    segment     = pattern.substring(last, m.index);
	    regexp      = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);
	    type        = $$UMFP.type(regexp || "string") || inherit($$UMFP.type("string"), { pattern: new RegExp(regexp, config.caseInsensitive ? 'i' : undefined) });
	    return {
	      id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
	    };
	  }

	  var p, param, segment;
	  while ((m = placeholder.exec(pattern))) {
	    p = matchDetails(m, false);
	    if (p.segment.indexOf('?') >= 0) break; // we're into the search part

	    param = addParameter(p.id, p.type, p.cfg, "path");
	    compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash, param.isOptional);
	    segments.push(p.segment);
	    last = placeholder.lastIndex;
	  }
	  segment = pattern.substring(last);

	  // Find any search parameter names and remove them from the last segment
	  var i = segment.indexOf('?');

	  if (i >= 0) {
	    var search = this.sourceSearch = segment.substring(i);
	    segment = segment.substring(0, i);
	    this.sourcePath = pattern.substring(0, last + i);

	    if (search.length > 0) {
	      last = 0;
	      while ((m = searchPlaceholder.exec(search))) {
	        p = matchDetails(m, true);
	        param = addParameter(p.id, p.type, p.cfg, "search");
	        last = placeholder.lastIndex;
	        // check if ?&
	      }
	    }
	  } else {
	    this.sourcePath = pattern;
	    this.sourceSearch = '';
	  }

	  compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
	  segments.push(segment);

	  this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
	  this.prefix = segments[0];
	  this.$$paramNames = paramNames;
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#concat
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns a new matcher for a pattern constructed by appending the path part and adding the
	 * search parameters of the specified pattern to this pattern. The current pattern is not
	 * modified. This can be understood as creating a pattern for URLs that are relative to (or
	 * suffixes of) the current pattern.
	 *
	 * @example
	 * The following two matchers are equivalent:
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').concat('/details?date');
	 * new UrlMatcher('/user/{id}/details?q&date');
	 * </pre>
	 *
	 * @param {string} pattern  The pattern to append.
	 * @param {Object} config  An object hash of the configuration for the matcher.
	 * @returns {UrlMatcher}  A matcher for the concatenated pattern.
	 */
	UrlMatcher.prototype.concat = function (pattern, config) {
	  // Because order of search parameters is irrelevant, we can add our own search
	  // parameters to the end of the new pattern. Parse the new pattern by itself
	  // and then join the bits together, but it's much easier to do this on a string level.
	  var defaultConfig = {
	    caseInsensitive: $$UMFP.caseInsensitive(),
	    strict: $$UMFP.strictMode(),
	    squash: $$UMFP.defaultSquashPolicy()
	  };
	  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
	};

	UrlMatcher.prototype.toString = function () {
	  return this.source;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#exec
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Tests the specified path against this matcher, and returns an object containing the captured
	 * parameter values, or null if the path does not match. The returned object contains the values
	 * of any search parameters that are mentioned in the pattern, but their value may be null if
	 * they are not present in `searchParams`. This means that search parameters are always treated
	 * as optional.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
	 *   x: '1', q: 'hello'
	 * });
	 * // returns { id: 'bob', q: 'hello', r: null }
	 * </pre>
	 *
	 * @param {string} path  The URL path to match, e.g. `$location.path()`.
	 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
	 * @returns {Object}  The captured parameter values.
	 */
	UrlMatcher.prototype.exec = function (path, searchParams) {
	  var m = this.regexp.exec(path);
	  if (!m) return null;
	  searchParams = searchParams || {};

	  var paramNames = this.parameters(), nTotal = paramNames.length,
	    nPath = this.segments.length - 1,
	    values = {}, i, j, cfg, paramName;

	  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

	  function decodePathArray(string) {
	    function reverseString(str) { return str.split("").reverse().join(""); }
	    function unquoteDashes(str) { return str.replace(/\\-/g, "-"); }

	    var split = reverseString(string).split(/-(?!\\)/);
	    var allReversed = map(split, reverseString);
	    return map(allReversed, unquoteDashes).reverse();
	  }

	  for (i = 0; i < nPath; i++) {
	    paramName = paramNames[i];
	    var param = this.params[paramName];
	    var paramVal = m[i+1];
	    // if the param value matches a pre-replace pair, replace the value before decoding.
	    for (j = 0; j < param.replace; j++) {
	      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
	    }
	    if (paramVal && param.array === true) paramVal = decodePathArray(paramVal);
	    values[paramName] = param.value(paramVal);
	  }
	  for (/**/; i < nTotal; i++) {
	    paramName = paramNames[i];
	    values[paramName] = this.params[paramName].value(searchParams[paramName]);
	  }

	  return values;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#parameters
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns the names of all path and search parameters of this pattern in an unspecified order.
	 *
	 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
	 *    pattern has no parameters, an empty array is returned.
	 */
	UrlMatcher.prototype.parameters = function (param) {
	  if (!isDefined(param)) return this.$$paramNames;
	  return this.params[param] || null;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#validate
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Checks an object hash of parameters to validate their correctness according to the parameter
	 * types of this `UrlMatcher`.
	 *
	 * @param {Object} params The object hash of parameters to validate.
	 * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
	 */
	UrlMatcher.prototype.validates = function (params) {
	  return this.params.$$validates(params);
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#format
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Creates a URL that matches this pattern by substituting the specified values
	 * for the path and search parameters. Null values for path parameters are
	 * treated as empty strings.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
	 * // returns '/user/bob?q=yes'
	 * </pre>
	 *
	 * @param {Object} values  the values to substitute for the parameters in this pattern.
	 * @returns {string}  the formatted URL (path and optionally search part).
	 */
	UrlMatcher.prototype.format = function (values) {
	  values = values || {};
	  var segments = this.segments, params = this.parameters(), paramset = this.params;
	  if (!this.validates(values)) return null;

	  var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];

	  function encodeDashes(str) { // Replace dashes with encoded "\-"
	    return encodeURIComponent(str).replace(/-/g, function(c) { return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase(); });
	  }

	  for (i = 0; i < nTotal; i++) {
	    var isPathParam = i < nPath;
	    var name = params[i], param = paramset[name], value = param.value(values[name]);
	    var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
	    var squash = isDefaultValue ? param.squash : false;
	    var encoded = param.type.encode(value);

	    if (isPathParam) {
	      var nextSegment = segments[i + 1];
	      if (squash === false) {
	        if (encoded != null) {
	          if (isArray(encoded)) {
	            result += map(encoded, encodeDashes).join("-");
	          } else {
	            result += encodeURIComponent(encoded);
	          }
	        }
	        result += nextSegment;
	      } else if (squash === true) {
	        var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
	        result += nextSegment.match(capture)[1];
	      } else if (isString(squash)) {
	        result += squash + nextSegment;
	      }
	    } else {
	      if (encoded == null || (isDefaultValue && squash !== false)) continue;
	      if (!isArray(encoded)) encoded = [ encoded ];
	      encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
	      result += (search ? '&' : '?') + (name + '=' + encoded);
	      search = true;
	    }
	  }

	  return result;
	};

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:Type
	 *
	 * @description
	 * Implements an interface to define custom parameter types that can be decoded from and encoded to
	 * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
	 * objects when matching or formatting URLs, or comparing or validating parameter values.
	 *
	 * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
	 * information on registering custom types.
	 *
	 * @param {Object} config  A configuration object which contains the custom type definition.  The object's
	 *        properties will override the default methods and/or pattern in `Type`'s public interface.
	 * @example
	 * <pre>
	 * {
	 *   decode: function(val) { return parseInt(val, 10); },
	 *   encode: function(val) { return val && val.toString(); },
	 *   equals: function(a, b) { return this.is(a) && a === b; },
	 *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
	 *   pattern: /\d+/
	 * }
	 * </pre>
	 *
	 * @property {RegExp} pattern The regular expression pattern used to match values of this type when
	 *           coming from a substring of a URL.
	 *
	 * @returns {Object}  Returns a new `Type` object.
	 */
	function Type(config) {
	  extend(this, config);
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#is
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Detects whether a value is of a particular type. Accepts a native (decoded) value
	 * and determines whether it matches the current `Type` object.
	 *
	 * @param {*} val  The value to check.
	 * @param {string} key  Optional. If the type check is happening in the context of a specific
	 *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
	 *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
	 * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
	 */
	Type.prototype.is = function(val, key) {
	  return true;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#encode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
	 * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
	 * only needs to be a representation of `val` that has been coerced to a string.
	 *
	 * @param {*} val  The value to encode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
	 */
	Type.prototype.encode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#decode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Converts a parameter value (from URL string or transition param) to a custom/native value.
	 *
	 * @param {string} val  The URL parameter value to decode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {*}  Returns a custom representation of the URL parameter value.
	 */
	Type.prototype.decode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#equals
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Determines whether two decoded values are equivalent.
	 *
	 * @param {*} a  A value to compare against.
	 * @param {*} b  A value to compare against.
	 * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
	 */
	Type.prototype.equals = function(a, b) {
	  return a == b;
	};

	Type.prototype.$subPattern = function() {
	  var sub = this.pattern.toString();
	  return sub.substr(1, sub.length - 2);
	};

	Type.prototype.pattern = /.*/;

	Type.prototype.toString = function() { return "{Type:" + this.name + "}"; };

	/** Given an encoded string, or a decoded object, returns a decoded object */
	Type.prototype.$normalize = function(val) {
	  return this.is(val) ? val : this.decode(val);
	};

	/*
	 * Wraps an existing custom Type as an array of Type, depending on 'mode'.
	 * e.g.:
	 * - urlmatcher pattern "/path?{queryParam[]:int}"
	 * - url: "/path?queryParam=1&queryParam=2
	 * - $stateParams.queryParam will be [1, 2]
	 * if `mode` is "auto", then
	 * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
	 * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
	 */
	Type.prototype.$asArray = function(mode, isSearch) {
	  if (!mode) return this;
	  if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");

	  function ArrayType(type, mode) {
	    function bindTo(type, callbackName) {
	      return function() {
	        return type[callbackName].apply(type, arguments);
	      };
	    }

	    // Wrap non-array value as array
	    function arrayWrap(val) { return isArray(val) ? val : (isDefined(val) ? [ val ] : []); }
	    // Unwrap array value for "auto" mode. Return undefined for empty array.
	    function arrayUnwrap(val) {
	      switch(val.length) {
	        case 0: return undefined;
	        case 1: return mode === "auto" ? val[0] : val;
	        default: return val;
	      }
	    }
	    function falsey(val) { return !val; }

	    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
	    function arrayHandler(callback, allTruthyMode) {
	      return function handleArray(val) {
	        val = arrayWrap(val);
	        var result = map(val, callback);
	        if (allTruthyMode === true)
	          return filter(result, falsey).length === 0;
	        return arrayUnwrap(result);
	      };
	    }

	    // Wraps type (.equals) functions to operate on each value of an array
	    function arrayEqualsHandler(callback) {
	      return function handleArray(val1, val2) {
	        var left = arrayWrap(val1), right = arrayWrap(val2);
	        if (left.length !== right.length) return false;
	        for (var i = 0; i < left.length; i++) {
	          if (!callback(left[i], right[i])) return false;
	        }
	        return true;
	      };
	    }

	    this.encode = arrayHandler(bindTo(type, 'encode'));
	    this.decode = arrayHandler(bindTo(type, 'decode'));
	    this.is     = arrayHandler(bindTo(type, 'is'), true);
	    this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
	    this.pattern = type.pattern;
	    this.$normalize = arrayHandler(bindTo(type, '$normalize'));
	    this.name = type.name;
	    this.$arrayMode = mode;
	  }

	  return new ArrayType(this, mode);
	};



	/**
	 * @ngdoc object
	 * @name ui.router.util.$urlMatcherFactory
	 *
	 * @description
	 * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
	 * is also available to providers under the name `$urlMatcherFactoryProvider`.
	 */
	function $UrlMatcherFactory() {
	  $$UMFP = this;

	  var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;

	  function valToString(val) { return val != null ? val.toString().replace(/\//g, "%2F") : val; }
	  function valFromString(val) { return val != null ? val.toString().replace(/%2F/g, "/") : val; }

	  var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
	    string: {
	      encode: valToString,
	      decode: valFromString,
	      // TODO: in 1.0, make string .is() return false if value is undefined/null by default.
	      // In 0.2.x, string params are optional by default for backwards compat
	      is: function(val) { return val == null || !isDefined(val) || typeof val === "string"; },
	      pattern: /[^/]*/
	    },
	    int: {
	      encode: valToString,
	      decode: function(val) { return parseInt(val, 10); },
	      is: function(val) { return isDefined(val) && this.decode(val.toString()) === val; },
	      pattern: /\d+/
	    },
	    bool: {
	      encode: function(val) { return val ? 1 : 0; },
	      decode: function(val) { return parseInt(val, 10) !== 0; },
	      is: function(val) { return val === true || val === false; },
	      pattern: /0|1/
	    },
	    date: {
	      encode: function (val) {
	        if (!this.is(val))
	          return undefined;
	        return [ val.getFullYear(),
	          ('0' + (val.getMonth() + 1)).slice(-2),
	          ('0' + val.getDate()).slice(-2)
	        ].join("-");
	      },
	      decode: function (val) {
	        if (this.is(val)) return val;
	        var match = this.capture.exec(val);
	        return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
	      },
	      is: function(val) { return val instanceof Date && !isNaN(val.valueOf()); },
	      equals: function (a, b) { return this.is(a) && this.is(b) && a.toISOString() === b.toISOString(); },
	      pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
	      capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
	    },
	    json: {
	      encode: angular.toJson,
	      decode: angular.fromJson,
	      is: angular.isObject,
	      equals: angular.equals,
	      pattern: /[^/]*/
	    },
	    any: { // does not encode/decode
	      encode: angular.identity,
	      decode: angular.identity,
	      equals: angular.equals,
	      pattern: /.*/
	    }
	  };

	  function getDefaultConfig() {
	    return {
	      strict: isStrictMode,
	      caseInsensitive: isCaseInsensitive
	    };
	  }

	  function isInjectable(value) {
	    return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
	  }

	  /**
	   * [Internal] Get the default value of a parameter, which may be an injectable function.
	   */
	  $UrlMatcherFactory.$$getDefaultValue = function(config) {
	    if (!isInjectable(config.value)) return config.value;
	    if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	    return injector.invoke(config.value);
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#caseInsensitive
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URL matching should be case sensitive (the default behavior), or not.
	   *
	   * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
	   * @returns {boolean} the current value of caseInsensitive
	   */
	  this.caseInsensitive = function(value) {
	    if (isDefined(value))
	      isCaseInsensitive = value;
	    return isCaseInsensitive;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#strictMode
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URLs should match trailing slashes, or not (the default behavior).
	   *
	   * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
	   * @returns {boolean} the current value of strictMode
	   */
	  this.strictMode = function(value) {
	    if (isDefined(value))
	      isStrictMode = value;
	    return isStrictMode;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Sets the default behavior when generating or matching URLs with default parameter values.
	   *
	   * @param {string} value A string that defines the default parameter URL squashing behavior.
	   *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
	   *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
	   *             parameter is surrounded by slashes, squash (remove) one slash from the URL
	   *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
	   *             the parameter value from the URL and replace it with this string.
	   */
	  this.defaultSquashPolicy = function(value) {
	    if (!isDefined(value)) return defaultSquashPolicy;
	    if (value !== true && value !== false && !isString(value))
	      throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
	    defaultSquashPolicy = value;
	    return value;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#compile
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
	   *
	   * @param {string} pattern  The URL pattern.
	   * @param {Object} config  The config object hash.
	   * @returns {UrlMatcher}  The UrlMatcher.
	   */
	  this.compile = function (pattern, config) {
	    return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#isMatcher
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
	   *
	   * @param {Object} object  The object to perform the type check against.
	   * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
	   *          implementing all the same methods.
	   */
	  this.isMatcher = function (o) {
	    if (!isObject(o)) return false;
	    var result = true;

	    forEach(UrlMatcher.prototype, function(val, name) {
	      if (isFunction(val)) {
	        result = result && (isDefined(o[name]) && isFunction(o[name]));
	      }
	    });
	    return result;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#type
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
	   * generate URLs with typed parameters.
	   *
	   * @param {string} name  The type name.
	   * @param {Object|Function} definition   The type definition. See
	   *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   * @param {Object|Function} definitionFn (optional) A function that is injected before the app
	   *        runtime starts.  The result of this function is merged into the existing `definition`.
	   *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   *
	   * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
	   *
	   * @example
	   * This is a simple example of a custom type that encodes and decodes items from an
	   * array, using the array index as the URL-encoded value:
	   *
	   * <pre>
	   * var list = ['John', 'Paul', 'George', 'Ringo'];
	   *
	   * $urlMatcherFactoryProvider.type('listItem', {
	   *   encode: function(item) {
	   *     // Represent the list item in the URL using its corresponding index
	   *     return list.indexOf(item);
	   *   },
	   *   decode: function(item) {
	   *     // Look up the list item by index
	   *     return list[parseInt(item, 10)];
	   *   },
	   *   is: function(item) {
	   *     // Ensure the item is valid by checking to see that it appears
	   *     // in the list
	   *     return list.indexOf(item) > -1;
	   *   }
	   * });
	   *
	   * $stateProvider.state('list', {
	   *   url: "/list/{item:listItem}",
	   *   controller: function($scope, $stateParams) {
	   *     console.log($stateParams.item);
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * // Changes URL to '/list/3', logs "Ringo" to the console
	   * $state.go('list', { item: "Ringo" });
	   * </pre>
	   *
	   * This is a more complex example of a type that relies on dependency injection to
	   * interact with services, and uses the parameter name from the URL to infer how to
	   * handle encoding and decoding parameter values:
	   *
	   * <pre>
	   * // Defines a custom type that gets a value from a service,
	   * // where each service gets different types of values from
	   * // a backend API:
	   * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
	   *
	   *   // Matches up services to URL parameter names
	   *   var services = {
	   *     user: Users,
	   *     post: Posts
	   *   };
	   *
	   *   return {
	   *     encode: function(object) {
	   *       // Represent the object in the URL using its unique ID
	   *       return object.id;
	   *     },
	   *     decode: function(value, key) {
	   *       // Look up the object by ID, using the parameter
	   *       // name (key) to call the correct service
	   *       return services[key].findById(value);
	   *     },
	   *     is: function(object, key) {
	   *       // Check that object is a valid dbObject
	   *       return angular.isObject(object) && object.id && services[key];
	   *     }
	   *     equals: function(a, b) {
	   *       // Check the equality of decoded objects by comparing
	   *       // their unique IDs
	   *       return a.id === b.id;
	   *     }
	   *   };
	   * });
	   *
	   * // In a config() block, you can then attach URLs with
	   * // type-annotated parameters:
	   * $stateProvider.state('users', {
	   *   url: "/users",
	   *   // ...
	   * }).state('users.item', {
	   *   url: "/{user:dbObject}",
	   *   controller: function($scope, $stateParams) {
	   *     // $stateParams.user will now be an object returned from
	   *     // the Users service
	   *   },
	   *   // ...
	   * });
	   * </pre>
	   */
	  this.type = function (name, definition, definitionFn) {
	    if (!isDefined(definition)) return $types[name];
	    if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");

	    $types[name] = new Type(extend({ name: name }, definition));
	    if (definitionFn) {
	      typeQueue.push({ name: name, def: definitionFn });
	      if (!enqueue) flushTypeQueue();
	    }
	    return this;
	  };

	  // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
	  function flushTypeQueue() {
	    while(typeQueue.length) {
	      var type = typeQueue.shift();
	      if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
	      angular.extend($types[type.name], injector.invoke(type.def));
	    }
	  }

	  // Register default types. Store them in the prototype of $types.
	  forEach(defaultTypes, function(type, name) { $types[name] = new Type(extend({name: name}, type)); });
	  $types = inherit($types, {});

	  /* No need to document $get, since it returns this */
	  this.$get = ['$injector', function ($injector) {
	    injector = $injector;
	    enqueue = false;
	    flushTypeQueue();

	    forEach(defaultTypes, function(type, name) {
	      if (!$types[name]) $types[name] = new Type(type);
	    });
	    return this;
	  }];

	  this.Param = function Param(id, type, config, location) {
	    var self = this;
	    config = unwrapShorthand(config);
	    type = getType(config, type, location);
	    var arrayMode = getArrayMode();
	    type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
	    if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined)
	      config.value = ""; // for 0.2.x; in 0.3.0+ do not automatically default to ""
	    var isOptional = config.value !== undefined;
	    var squash = getSquashPolicy(config, isOptional);
	    var replace = getReplace(config, arrayMode, isOptional, squash);

	    function unwrapShorthand(config) {
	      var keys = isObject(config) ? objectKeys(config) : [];
	      var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 &&
	                        indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
	      if (isShorthand) config = { value: config };
	      config.$$fn = isInjectable(config.value) ? config.value : function () { return config.value; };
	      return config;
	    }

	    function getType(config, urlType, location) {
	      if (config.type && urlType) throw new Error("Param '"+id+"' has two type configurations.");
	      if (urlType) return urlType;
	      if (!config.type) return (location === "config" ? $types.any : $types.string);
	      return config.type instanceof Type ? config.type : new Type(config.type);
	    }

	    // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
	    function getArrayMode() {
	      var arrayDefaults = { array: (location === "search" ? "auto" : false) };
	      var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
	      return extend(arrayDefaults, arrayParamNomenclature, config).array;
	    }

	    /**
	     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
	     */
	    function getSquashPolicy(config, isOptional) {
	      var squash = config.squash;
	      if (!isOptional || squash === false) return false;
	      if (!isDefined(squash) || squash == null) return defaultSquashPolicy;
	      if (squash === true || isString(squash)) return squash;
	      throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
	    }

	    function getReplace(config, arrayMode, isOptional, squash) {
	      var replace, configuredKeys, defaultPolicy = [
	        { from: "",   to: (isOptional || arrayMode ? undefined : "") },
	        { from: null, to: (isOptional || arrayMode ? undefined : "") }
	      ];
	      replace = isArray(config.replace) ? config.replace : [];
	      if (isString(squash))
	        replace.push({ from: squash, to: undefined });
	      configuredKeys = map(replace, function(item) { return item.from; } );
	      return filter(defaultPolicy, function(item) { return indexOf(configuredKeys, item.from) === -1; }).concat(replace);
	    }

	    /**
	     * [Internal] Get the default value of a parameter, which may be an injectable function.
	     */
	    function $$getDefaultValue() {
	      if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	      var defaultValue = injector.invoke(config.$$fn);
	      if (defaultValue !== null && defaultValue !== undefined && !self.type.is(defaultValue))
	        throw new Error("Default value (" + defaultValue + ") for parameter '" + self.id + "' is not an instance of Type (" + self.type.name + ")");
	      return defaultValue;
	    }

	    /**
	     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
	     * default value, which may be the result of an injectable function.
	     */
	    function $value(value) {
	      function hasReplaceVal(val) { return function(obj) { return obj.from === val; }; }
	      function $replace(value) {
	        var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) { return obj.to; });
	        return replacement.length ? replacement[0] : value;
	      }
	      value = $replace(value);
	      return !isDefined(value) ? $$getDefaultValue() : self.type.$normalize(value);
	    }

	    function toString() { return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}"; }

	    extend(this, {
	      id: id,
	      type: type,
	      location: location,
	      array: arrayMode,
	      squash: squash,
	      replace: replace,
	      isOptional: isOptional,
	      value: $value,
	      dynamic: undefined,
	      config: config,
	      toString: toString
	    });
	  };

	  function ParamSet(params) {
	    extend(this, params || {});
	  }

	  ParamSet.prototype = {
	    $$new: function() {
	      return inherit(this, extend(new ParamSet(), { $$parent: this}));
	    },
	    $$keys: function () {
	      var keys = [], chain = [], parent = this,
	        ignore = objectKeys(ParamSet.prototype);
	      while (parent) { chain.push(parent); parent = parent.$$parent; }
	      chain.reverse();
	      forEach(chain, function(paramset) {
	        forEach(objectKeys(paramset), function(key) {
	            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1) keys.push(key);
	        });
	      });
	      return keys;
	    },
	    $$values: function(paramValues) {
	      var values = {}, self = this;
	      forEach(self.$$keys(), function(key) {
	        values[key] = self[key].value(paramValues && paramValues[key]);
	      });
	      return values;
	    },
	    $$equals: function(paramValues1, paramValues2) {
	      var equal = true, self = this;
	      forEach(self.$$keys(), function(key) {
	        var left = paramValues1 && paramValues1[key], right = paramValues2 && paramValues2[key];
	        if (!self[key].type.equals(left, right)) equal = false;
	      });
	      return equal;
	    },
	    $$validates: function $$validate(paramValues) {
	      var keys = this.$$keys(), i, param, rawVal, normalized, encoded;
	      for (i = 0; i < keys.length; i++) {
	        param = this[keys[i]];
	        rawVal = paramValues[keys[i]];
	        if ((rawVal === undefined || rawVal === null) && param.isOptional)
	          break; // There was no parameter value, but the param is optional
	        normalized = param.type.$normalize(rawVal);
	        if (!param.type.is(normalized))
	          return false; // The value was not of the correct Type, and could not be decoded to the correct Type
	        encoded = param.type.encode(normalized);
	        if (angular.isString(encoded) && !param.type.pattern.exec(encoded))
	          return false; // The value was of the correct type, but when encoded, did not match the Type's regexp
	      }
	      return true;
	    },
	    $$parent: undefined
	  };

	  this.ParamSet = ParamSet;
	}

	// Register as a provider so it's available to other providers
	angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
	angular.module('ui.router.util').run(['$urlMatcherFactory', function($urlMatcherFactory) { }]);

	/**
	 * @ngdoc object
	 * @name ui.router.router.$urlRouterProvider
	 *
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 * @requires $locationProvider
	 *
	 * @description
	 * `$urlRouterProvider` has the responsibility of watching `$location`. 
	 * When `$location` changes it runs through a list of rules one by one until a 
	 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
	 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
	 *
	 * There are several methods on `$urlRouterProvider` that make it useful to use directly
	 * in your module config.
	 */
	$UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
	function $UrlRouterProvider(   $locationProvider,   $urlMatcherFactory) {
	  var rules = [], otherwise = null, interceptDeferred = false, listener;

	  // Returns a string that is a prefix of all strings matching the RegExp
	  function regExpPrefix(re) {
	    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
	    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
	  }

	  // Interpolates matched values into a String.replace()-style pattern
	  function interpolate(pattern, match) {
	    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
	      return match[what === '$' ? 0 : Number(what)];
	    });
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#rule
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines rules that are used by `$urlRouterProvider` to find matches for
	   * specific URLs.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // Here's an example of how you might allow case insensitive urls
	   *   $urlRouterProvider.rule(function ($injector, $location) {
	   *     var path = $location.path(),
	   *         normalized = path.toLowerCase();
	   *
	   *     if (path !== normalized) {
	   *       return normalized;
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {object} rule Handler function that takes `$injector` and `$location`
	   * services as arguments. You can use them to return a valid path as a string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.rule = function (rule) {
	    if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    rules.push(rule);
	    return this;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouterProvider#otherwise
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines a path that is used when an invalid route is requested.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // if the path doesn't match any of the urls you configured
	   *   // otherwise will take care of routing the user to the
	   *   // specified url
	   *   $urlRouterProvider.otherwise('/index');
	   *
	   *   // Example of using function rule as param
	   *   $urlRouterProvider.otherwise(function ($injector, $location) {
	   *     return '/a/valid/url';
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} rule The url path you want to redirect to or a function 
	   * rule that returns the url path. The function version is passed two params: 
	   * `$injector` and `$location` services, and must return a url string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.otherwise = function (rule) {
	    if (isString(rule)) {
	      var redirect = rule;
	      rule = function () { return redirect; };
	    }
	    else if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    otherwise = rule;
	    return this;
	  };


	  function handleIfMatch($injector, handler, match) {
	    if (!match) return false;
	    var result = $injector.invoke(handler, handler, { $match: match });
	    return isDefined(result) ? result : true;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#when
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Registers a handler for a given url matching. if handle is a string, it is
	   * treated as a redirect, and is interpolated according to the syntax of match
	   * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
	   *
	   * If the handler is a function, it is injectable. It gets invoked if `$location`
	   * matches. You have the option of inject the match object as `$match`.
	   *
	   * The handler can return
	   *
	   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
	   *   will continue trying to find another one that matches.
	   * - **string** which is treated as a redirect and passed to `$location.url()`
	   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
	   *     if ($state.$current.navigable !== state ||
	   *         !equalForKeys($match, $stateParams) {
	   *      $state.transitionTo(state, $match, false);
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} what The incoming path that you want to redirect.
	   * @param {string|object} handler The path you want to redirect your user to.
	   */
	  this.when = function (what, handler) {
	    var redirect, handlerIsString = isString(handler);
	    if (isString(what)) what = $urlMatcherFactory.compile(what);

	    if (!handlerIsString && !isFunction(handler) && !isArray(handler))
	      throw new Error("invalid 'handler' in when()");

	    var strategies = {
	      matcher: function (what, handler) {
	        if (handlerIsString) {
	          redirect = $urlMatcherFactory.compile(handler);
	          handler = ['$match', function ($match) { return redirect.format($match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
	        }, {
	          prefix: isString(what.prefix) ? what.prefix : ''
	        });
	      },
	      regex: function (what, handler) {
	        if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

	        if (handlerIsString) {
	          redirect = handler;
	          handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path()));
	        }, {
	          prefix: regExpPrefix(what)
	        });
	      }
	    };

	    var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

	    for (var n in check) {
	      if (check[n]) return this.rule(strategies[n](what, handler));
	    }

	    throw new Error("invalid 'what' in when()");
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#deferIntercept
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Disables (or enables) deferring location change interception.
	   *
	   * If you wish to customize the behavior of syncing the URL (for example, if you wish to
	   * defer a transition but maintain the current URL), call this method at configuration time.
	   * Then, at run time, call `$urlRouter.listen()` after you have configured your own
	   * `$locationChangeSuccess` event handler.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *
	   *   // Prevent $urlRouter from automatically intercepting URL changes;
	   *   // this allows you to configure custom behavior in between
	   *   // location changes and route synchronization:
	   *   $urlRouterProvider.deferIntercept();
	   *
	   * }).run(function ($rootScope, $urlRouter, UserService) {
	   *
	   *   $rootScope.$on('$locationChangeSuccess', function(e) {
	   *     // UserService is an example service for managing user state
	   *     if (UserService.isLoggedIn()) return;
	   *
	   *     // Prevent $urlRouter's default handler from firing
	   *     e.preventDefault();
	   *
	   *     UserService.handleLogin().then(function() {
	   *       // Once the user has logged in, sync the current URL
	   *       // to the router:
	   *       $urlRouter.sync();
	   *     });
	   *   });
	   *
	   *   // Configures $urlRouter's listener *after* your custom listener
	   *   $urlRouter.listen();
	   * });
	   * </pre>
	   *
	   * @param {boolean} defer Indicates whether to defer location change interception. Passing
	            no parameter is equivalent to `true`.
	   */
	  this.deferIntercept = function (defer) {
	    if (defer === undefined) defer = true;
	    interceptDeferred = defer;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouter
	   *
	   * @requires $location
	   * @requires $rootScope
	   * @requires $injector
	   * @requires $browser
	   *
	   * @description
	   *
	   */
	  this.$get = $get;
	  $get.$inject = ['$location', '$rootScope', '$injector', '$browser'];
	  function $get(   $location,   $rootScope,   $injector,   $browser) {

	    var baseHref = $browser.baseHref(), location = $location.url(), lastPushedUrl;

	    function appendBasePath(url, isHtml5, absolute) {
	      if (baseHref === '/') return url;
	      if (isHtml5) return baseHref.slice(0, -1) + url;
	      if (absolute) return baseHref.slice(1) + url;
	      return url;
	    }

	    // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
	    function update(evt) {
	      if (evt && evt.defaultPrevented) return;
	      var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
	      lastPushedUrl = undefined;
	      // TODO: Re-implement this in 1.0 for https://github.com/angular-ui/ui-router/issues/1573
	      //if (ignoreUpdate) return true;

	      function check(rule) {
	        var handled = rule($injector, $location);

	        if (!handled) return false;
	        if (isString(handled)) $location.replace().url(handled);
	        return true;
	      }
	      var n = rules.length, i;

	      for (i = 0; i < n; i++) {
	        if (check(rules[i])) return;
	      }
	      // always check otherwise last to allow dynamic updates to the set of rules
	      if (otherwise) check(otherwise);
	    }

	    function listen() {
	      listener = listener || $rootScope.$on('$locationChangeSuccess', update);
	      return listener;
	    }

	    if (!interceptDeferred) listen();

	    return {
	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#sync
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
	       * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
	       * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
	       * with the transition by calling `$urlRouter.sync()`.
	       *
	       * @example
	       * <pre>
	       * angular.module('app', ['ui.router'])
	       *   .run(function($rootScope, $urlRouter) {
	       *     $rootScope.$on('$locationChangeSuccess', function(evt) {
	       *       // Halt state change from even starting
	       *       evt.preventDefault();
	       *       // Perform custom logic
	       *       var meetsRequirement = ...
	       *       // Continue with the update and state transition if logic allows
	       *       if (meetsRequirement) $urlRouter.sync();
	       *     });
	       * });
	       * </pre>
	       */
	      sync: function() {
	        update();
	      },

	      listen: function() {
	        return listen();
	      },

	      update: function(read) {
	        if (read) {
	          location = $location.url();
	          return;
	        }
	        if ($location.url() === location) return;

	        $location.url(location);
	        $location.replace();
	      },

	      push: function(urlMatcher, params, options) {
	         var url = urlMatcher.format(params || {});

	        // Handle the special hash param, if needed
	        if (url !== null && params && params['#']) {
	            url += '#' + params['#'];
	        }

	        $location.url(url);
	        lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
	        if (options && options.replace) $location.replace();
	      },

	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#href
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * A URL generation method that returns the compiled URL for a given
	       * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
	       *
	       * @example
	       * <pre>
	       * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
	       *   person: "bob"
	       * });
	       * // $bob == "/about/bob";
	       * </pre>
	       *
	       * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
	       * @param {object=} params An object of parameter values to fill the matcher's required parameters.
	       * @param {object=} options Options object. The options are:
	       *
	       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	       *
	       * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
	       */
	      href: function(urlMatcher, params, options) {
	        if (!urlMatcher.validates(params)) return null;

	        var isHtml5 = $locationProvider.html5Mode();
	        if (angular.isObject(isHtml5)) {
	          isHtml5 = isHtml5.enabled;
	        }
	        
	        var url = urlMatcher.format(params);
	        options = options || {};

	        if (!isHtml5 && url !== null) {
	          url = "#" + $locationProvider.hashPrefix() + url;
	        }

	        // Handle special hash param, if needed
	        if (url !== null && params && params['#']) {
	          url += '#' + params['#'];
	        }

	        url = appendBasePath(url, isHtml5, options.absolute);

	        if (!options.absolute || !url) {
	          return url;
	        }

	        var slash = (!isHtml5 && url ? '/' : ''), port = $location.port();
	        port = (port === 80 || port === 443 ? '' : ':' + port);

	        return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
	      }
	    };
	  }
	}

	angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$stateProvider
	 *
	 * @requires ui.router.router.$urlRouterProvider
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 *
	 * @description
	 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
	 * on state.
	 *
	 * A state corresponds to a "place" in the application in terms of the overall UI and
	 * navigation. A state describes (via the controller / template / view properties) what
	 * the UI looks like and does at that place.
	 *
	 * States often have things in common, and the primary way of factoring out these
	 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
	 * nested states.
	 *
	 * The `$stateProvider` provides interfaces to declare these states for your app.
	 */
	$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
	function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory) {

	  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

	  // Builds state properties from definition passed to registerState()
	  var stateBuilder = {

	    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
	    // state.children = [];
	    // if (parent) parent.children.push(state);
	    parent: function(state) {
	      if (isDefined(state.parent) && state.parent) return findState(state.parent);
	      // regex matches any valid composite state name
	      // would match "contact.list" but not "contacts"
	      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
	      return compositeName ? findState(compositeName[1]) : root;
	    },

	    // inherit 'data' from parent and override by own values (if any)
	    data: function(state) {
	      if (state.parent && state.parent.data) {
	        state.data = state.self.data = extend({}, state.parent.data, state.data);
	      }
	      return state.data;
	    },

	    // Build a URLMatcher if necessary, either via a relative or absolute URL
	    url: function(state) {
	      var url = state.url, config = { params: state.params || {} };

	      if (isString(url)) {
	        if (url.charAt(0) == '^') return $urlMatcherFactory.compile(url.substring(1), config);
	        return (state.parent.navigable || root).url.concat(url, config);
	      }

	      if (!url || $urlMatcherFactory.isMatcher(url)) return url;
	      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
	    },

	    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
	    navigable: function(state) {
	      return state.url ? state : (state.parent ? state.parent.navigable : null);
	    },

	    // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
	    ownParams: function(state) {
	      var params = state.url && state.url.params || new $$UMFP.ParamSet();
	      forEach(state.params || {}, function(config, id) {
	        if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, "config");
	      });
	      return params;
	    },

	    // Derive parameters for this state and ensure they're a super-set of parent's parameters
	    params: function(state) {
	      return state.parent && state.parent.params ? extend(state.parent.params.$$new(), state.ownParams) : new $$UMFP.ParamSet();
	    },

	    // If there is no explicit multi-view configuration, make one up so we don't have
	    // to handle both cases in the view directive later. Note that having an explicit
	    // 'views' property will mean the default unnamed view properties are ignored. This
	    // is also a good time to resolve view names to absolute names, so everything is a
	    // straight lookup at link time.
	    views: function(state) {
	      var views = {};

	      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
	        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
	        views[name] = view;
	      });
	      return views;
	    },

	    // Keep a full path from the root down to this state as this is needed for state activation.
	    path: function(state) {
	      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
	    },

	    // Speed up $state.contains() as it's used a lot
	    includes: function(state) {
	      var includes = state.parent ? extend({}, state.parent.includes) : {};
	      includes[state.name] = true;
	      return includes;
	    },

	    $delegates: {}
	  };

	  function isRelative(stateName) {
	    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
	  }

	  function findState(stateOrName, base) {
	    if (!stateOrName) return undefined;

	    var isStr = isString(stateOrName),
	        name  = isStr ? stateOrName : stateOrName.name,
	        path  = isRelative(name);

	    if (path) {
	      if (!base) throw new Error("No reference point given for path '"  + name + "'");
	      base = findState(base);
	      
	      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

	      for (; i < pathLength; i++) {
	        if (rel[i] === "" && i === 0) {
	          current = base;
	          continue;
	        }
	        if (rel[i] === "^") {
	          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
	          current = current.parent;
	          continue;
	        }
	        break;
	      }
	      rel = rel.slice(i).join(".");
	      name = current.name + (current.name && rel ? "." : "") + rel;
	    }
	    var state = states[name];

	    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
	      return state;
	    }
	    return undefined;
	  }

	  function queueState(parentName, state) {
	    if (!queue[parentName]) {
	      queue[parentName] = [];
	    }
	    queue[parentName].push(state);
	  }

	  function flushQueuedChildren(parentName) {
	    var queued = queue[parentName] || [];
	    while(queued.length) {
	      registerState(queued.shift());
	    }
	  }

	  function registerState(state) {
	    // Wrap a new object around the state so we can store our private details easily.
	    state = inherit(state, {
	      self: state,
	      resolve: state.resolve || {},
	      toString: function() { return this.name; }
	    });

	    var name = state.name;
	    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
	    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "'' is already defined");

	    // Get parent name
	    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
	        : (isString(state.parent)) ? state.parent
	        : (isObject(state.parent) && isString(state.parent.name)) ? state.parent.name
	        : '';

	    // If parent is not registered yet, add state to queue and register later
	    if (parentName && !states[parentName]) {
	      return queueState(parentName, state.self);
	    }

	    for (var key in stateBuilder) {
	      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
	    }
	    states[name] = state;

	    // Register the state in the global state list and with $urlRouter if necessary.
	    if (!state[abstractKey] && state.url) {
	      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
	        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
	          $state.transitionTo(state, $match, { inherit: true, location: false });
	        }
	      }]);
	    }

	    // Register any queued children
	    flushQueuedChildren(name);

	    return state;
	  }

	  // Checks text to see if it looks like a glob.
	  function isGlob (text) {
	    return text.indexOf('*') > -1;
	  }

	  // Returns true if glob matches current $state name.
	  function doesStateMatchGlob (glob) {
	    var globSegments = glob.split('.'),
	        segments = $state.$current.name.split('.');

	    //match single stars
	    for (var i = 0, l = globSegments.length; i < l; i++) {
	      if (globSegments[i] === '*') {
	        segments[i] = '*';
	      }
	    }

	    //match greedy starts
	    if (globSegments[0] === '**') {
	       segments = segments.slice(indexOf(segments, globSegments[1]));
	       segments.unshift('**');
	    }
	    //match greedy ends
	    if (globSegments[globSegments.length - 1] === '**') {
	       segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
	       segments.push('**');
	    }

	    if (globSegments.length != segments.length) {
	      return false;
	    }

	    return segments.join('') === globSegments.join('');
	  }


	  // Implicit root state that is always active
	  root = registerState({
	    name: '',
	    url: '^',
	    views: null,
	    'abstract': true
	  });
	  root.navigable = null;


	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#decorator
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Allows you to extend (carefully) or override (at your own peril) the 
	   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
	   * to add custom functionality to ui-router, for example inferring templateUrl 
	   * based on the state name.
	   *
	   * When passing only a name, it returns the current (original or decorated) builder
	   * function that matches `name`.
	   *
	   * The builder functions that can be decorated are listed below. Though not all
	   * necessarily have a good use case for decoration, that is up to you to decide.
	   *
	   * In addition, users can attach custom decorators, which will generate new 
	   * properties within the state's internal definition. There is currently no clear 
	   * use-case for this beyond accessing internal states (i.e. $state.$current), 
	   * however, expect this to become increasingly relevant as we introduce additional 
	   * meta-programming features.
	   *
	   * **Warning**: Decorators should not be interdependent because the order of 
	   * execution of the builder functions in non-deterministic. Builder functions 
	   * should only be dependent on the state definition object and super function.
	   *
	   *
	   * Existing builder functions and current return values:
	   *
	   * - **parent** `{object}` - returns the parent state object.
	   * - **data** `{object}` - returns state data, including any inherited data that is not
	   *   overridden by own values (if any).
	   * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
	   *   or `null`.
	   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
	   *   navigable).
	   * - **params** `{object}` - returns an array of state params that are ensured to 
	   *   be a super-set of parent's params.
	   * - **views** `{object}` - returns a views object where each key is an absolute view 
	   *   name (i.e. "viewName@stateName") and each value is the config object 
	   *   (template, controller) for the view. Even when you don't use the views object 
	   *   explicitly on a state config, one is still created for you internally.
	   *   So by decorating this builder function you have access to decorating template 
	   *   and controller properties.
	   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
	   *   not including any params defined by ancestor states.
	   * - **path** `{string}` - returns the full path from the root down to this state. 
	   *   Needed for state activation.
	   * - **includes** `{object}` - returns an object that includes every state that 
	   *   would pass a `$state.includes()` test.
	   *
	   * @example
	   * <pre>
	   * // Override the internal 'views' builder with a function that takes the state
	   * // definition, and a reference to the internal function being overridden:
	   * $stateProvider.decorator('views', function (state, parent) {
	   *   var result = {},
	   *       views = parent(state);
	   *
	   *   angular.forEach(views, function (config, name) {
	   *     var autoName = (state.name + '.' + name).replace('.', '/');
	   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
	   *     result[name] = config;
	   *   });
	   *   return result;
	   * });
	   *
	   * $stateProvider.state('home', {
	   *   views: {
	   *     'contact.list': { controller: 'ListController' },
	   *     'contact.item': { controller: 'ItemController' }
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * $state.go('home');
	   * // Auto-populates list and item views with /partials/home/contact/list.html,
	   * // and /partials/home/contact/item.html, respectively.
	   * </pre>
	   *
	   * @param {string} name The name of the builder function to decorate. 
	   * @param {object} func A function that is responsible for decorating the original 
	   * builder function. The function receives two parameters:
	   *
	   *   - `{object}` - state - The state config object.
	   *   - `{object}` - super - The original builder function.
	   *
	   * @return {object} $stateProvider - $stateProvider instance
	   */
	  this.decorator = decorator;
	  function decorator(name, func) {
	    /*jshint validthis: true */
	    if (isString(name) && !isDefined(func)) {
	      return stateBuilder[name];
	    }
	    if (!isFunction(func) || !isString(name)) {
	      return this;
	    }
	    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
	      stateBuilder.$delegates[name] = stateBuilder[name];
	    }
	    stateBuilder[name] = func;
	    return this;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#state
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Registers a state configuration under a given state name. The stateConfig object
	   * has the following acceptable properties.
	   *
	   * @param {string} name A unique state name, e.g. "home", "about", "contacts".
	   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
	   * @param {object} stateConfig State configuration object.
	   * @param {string|function=} stateConfig.template
	   * <a id='template'></a>
	   *   html template as a string or a function that returns
	   *   an html template as a string which should be used by the uiView directives. This property 
	   *   takes precedence over templateUrl.
	   *   
	   *   If `template` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
	   *     applying the current state
	   *
	   * <pre>template:
	   *   "<h1>inline template definition</h1>" +
	   *   "<div ui-view></div>"</pre>
	   * <pre>template: function(params) {
	   *       return "<h1>generated template</h1>"; }</pre>
	   * </div>
	   *
	   * @param {string|function=} stateConfig.templateUrl
	   * <a id='templateUrl'></a>
	   *
	   *   path or function that returns a path to an html
	   *   template that should be used by uiView.
	   *   
	   *   If `templateUrl` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
	   *     applying the current state
	   *
	   * <pre>templateUrl: "home.html"</pre>
	   * <pre>templateUrl: function(params) {
	   *     return myTemplates[params.pageId]; }</pre>
	   *
	   * @param {function=} stateConfig.templateProvider
	   * <a id='templateProvider'></a>
	   *    Provider function that returns HTML content string.
	   * <pre> templateProvider:
	   *       function(MyTemplateService, params) {
	   *         return MyTemplateService.getTemplate(params.pageId);
	   *       }</pre>
	   *
	   * @param {string|function=} stateConfig.controller
	   * <a id='controller'></a>
	   *
	   *  Controller fn that should be associated with newly
	   *   related scope or the name of a registered controller if passed as a string.
	   *   Optionally, the ControllerAs may be declared here.
	   * <pre>controller: "MyRegisteredController"</pre>
	   * <pre>controller:
	   *     "MyRegisteredController as fooCtrl"}</pre>
	   * <pre>controller: function($scope, MyService) {
	   *     $scope.data = MyService.getData(); }</pre>
	   *
	   * @param {function=} stateConfig.controllerProvider
	   * <a id='controllerProvider'></a>
	   *
	   * Injectable provider function that returns the actual controller or string.
	   * <pre>controllerProvider:
	   *   function(MyResolveData) {
	   *     if (MyResolveData.foo)
	   *       return "FooCtrl"
	   *     else if (MyResolveData.bar)
	   *       return "BarCtrl";
	   *     else return function($scope) {
	   *       $scope.baz = "Qux";
	   *     }
	   *   }</pre>
	   *
	   * @param {string=} stateConfig.controllerAs
	   * <a id='controllerAs'></a>
	   * 
	   * A controller alias name. If present the controller will be
	   *   published to scope under the controllerAs name.
	   * <pre>controllerAs: "myCtrl"</pre>
	   *
	   * @param {string|object=} stateConfig.parent
	   * <a id='parent'></a>
	   * Optionally specifies the parent state of this state.
	   *
	   * <pre>parent: 'parentState'</pre>
	   * <pre>parent: parentState // JS variable</pre>
	   *
	   * @param {object=} stateConfig.resolve
	   * <a id='resolve'></a>
	   *
	   * An optional map&lt;string, function&gt; of dependencies which
	   *   should be injected into the controller. If any of these dependencies are promises, 
	   *   the router will wait for them all to be resolved before the controller is instantiated.
	   *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
	   *   and the values of the resolved promises are injected into any controllers that reference them.
	   *   If any  of the promises are rejected the $stateChangeError event is fired.
	   *
	   *   The map object is:
	   *   
	   *   - key - {string}: name of dependency to be injected into controller
	   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
	   *     it is injected and return value it treated as dependency. If result is a promise, it is 
	   *     resolved before its value is injected into controller.
	   *
	   * <pre>resolve: {
	   *     myResolve1:
	   *       function($http, $stateParams) {
	   *         return $http.get("/api/foos/"+stateParams.fooID);
	   *       }
	   *     }</pre>
	   *
	   * @param {string=} stateConfig.url
	   * <a id='url'></a>
	   *
	   *   A url fragment with optional parameters. When a state is navigated or
	   *   transitioned to, the `$stateParams` service will be populated with any 
	   *   parameters that were passed.
	   *
	   *   (See {@link ui.router.util.type:UrlMatcher UrlMatcher} `UrlMatcher`} for
	   *   more details on acceptable patterns )
	   *
	   * examples:
	   * <pre>url: "/home"
	   * url: "/users/:userid"
	   * url: "/books/{bookid:[a-zA-Z_-]}"
	   * url: "/books/{categoryid:int}"
	   * url: "/books/{publishername:string}/{categoryid:int}"
	   * url: "/messages?before&after"
	   * url: "/messages?{before:date}&{after:date}"
	   * url: "/messages/:mailboxid?{before:date}&{after:date}"
	   * </pre>
	   *
	   * @param {object=} stateConfig.views
	   * <a id='views'></a>
	   * an optional map&lt;string, object&gt; which defined multiple views, or targets views
	   * manually/explicitly.
	   *
	   * Examples:
	   *
	   * Targets three named `ui-view`s in the parent state's template
	   * <pre>views: {
	   *     header: {
	   *       controller: "headerCtrl",
	   *       templateUrl: "header.html"
	   *     }, body: {
	   *       controller: "bodyCtrl",
	   *       templateUrl: "body.html"
	   *     }, footer: {
	   *       controller: "footCtrl",
	   *       templateUrl: "footer.html"
	   *     }
	   *   }</pre>
	   *
	   * Targets named `ui-view="header"` from grandparent state 'top''s template, and named `ui-view="body" from parent state's template.
	   * <pre>views: {
	   *     'header@top': {
	   *       controller: "msgHeaderCtrl",
	   *       templateUrl: "msgHeader.html"
	   *     }, 'body': {
	   *       controller: "messagesCtrl",
	   *       templateUrl: "messages.html"
	   *     }
	   *   }</pre>
	   *
	   * @param {boolean=} [stateConfig.abstract=false]
	   * <a id='abstract'></a>
	   * An abstract state will never be directly activated,
	   *   but can provide inherited properties to its common children states.
	   * <pre>abstract: true</pre>
	   *
	   * @param {function=} stateConfig.onEnter
	   * <a id='onEnter'></a>
	   *
	   * Callback function for when a state is entered. Good way
	   *   to trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explictly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onEnter: function(MyService, $stateParams) {
	   *     MyService.foo($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {function=} stateConfig.onExit
	   * <a id='onExit'></a>
	   *
	   * Callback function for when a state is exited. Good way to
	   *   trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explictly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onExit: function(MyService, $stateParams) {
	   *     MyService.cleanup($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {boolean=} [stateConfig.reloadOnSearch=true]
	   * <a id='reloadOnSearch'></a>
	   *
	   * If `false`, will not retrigger the same state
	   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
	   *   Useful for when you'd like to modify $location.search() without triggering a reload.
	   * <pre>reloadOnSearch: false</pre>
	   *
	   * @param {object=} stateConfig.data
	   * <a id='data'></a>
	   *
	   * Arbitrary data object, useful for custom configuration.  The parent state's `data` is
	   *   prototypally inherited.  In other words, adding a data property to a state adds it to
	   *   the entire subtree via prototypal inheritance.
	   *
	   * <pre>data: {
	   *     requiredRole: 'foo'
	   * } </pre>
	   *
	   * @param {object=} stateConfig.params
	   * <a id='params'></a>
	   *
	   * A map which optionally configures parameters declared in the `url`, or
	   *   defines additional non-url parameters.  For each parameter being
	   *   configured, add a configuration object keyed to the name of the parameter.
	   *
	   *   Each parameter configuration object may contain the following properties:
	   *
	   *   - ** value ** - {object|function=}: specifies the default value for this
	   *     parameter.  This implicitly sets this parameter as optional.
	   *
	   *     When UI-Router routes to a state and no value is
	   *     specified for this parameter in the URL or transition, the
	   *     default value will be used instead.  If `value` is a function,
	   *     it will be injected and invoked, and the return value used.
	   *
	   *     *Note*: `undefined` is treated as "no default value" while `null`
	   *     is treated as "the default value is `null`".
	   *
	   *     *Shorthand*: If you only need to configure the default value of the
	   *     parameter, you may use a shorthand syntax.   In the **`params`**
	   *     map, instead mapping the param name to a full parameter configuration
	   *     object, simply set map it to the default parameter value, e.g.:
	   *
	   * <pre>// define a parameter's default value
	   * params: {
	   *     param1: { value: "defaultValue" }
	   * }
	   * // shorthand default values
	   * params: {
	   *     param1: "defaultValue",
	   *     param2: "param2Default"
	   * }</pre>
	   *
	   *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
	   *     treated as an array of values.  If you specified a Type, the value will be
	   *     treated as an array of the specified Type.  Note: query parameter values
	   *     default to a special `"auto"` mode.
	   *
	   *     For query parameters in `"auto"` mode, if multiple  values for a single parameter
	   *     are present in the URL (e.g.: `/foo?bar=1&bar=2&bar=3`) then the values
	   *     are mapped to an array (e.g.: `{ foo: [ '1', '2', '3' ] }`).  However, if
	   *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
	   *     value (e.g.: `{ foo: '1' }`).
	   *
	   * <pre>params: {
	   *     param1: { array: true }
	   * }</pre>
	   *
	   *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
	   *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
	   *     configured default squash policy.
	   *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
	   *
	   *   There are three squash settings:
	   *
	   *     - false: The parameter's default value is not squashed.  It is encoded and included in the URL
	   *     - true: The parameter's default value is omitted from the URL.  If the parameter is preceeded and followed
	   *       by slashes in the state's `url` declaration, then one of those slashes are omitted.
	   *       This can allow for cleaner looking URLs.
	   *     - `"<arbitrary string>"`: The parameter's default value is replaced with an arbitrary placeholder of  your choice.
	   *
	   * <pre>params: {
	   *     param1: {
	   *       value: "defaultId",
	   *       squash: true
	   * } }
	   * // squash "defaultValue" to "~"
	   * params: {
	   *     param1: {
	   *       value: "defaultValue",
	   *       squash: "~"
	   * } }
	   * </pre>
	   *
	   *
	   * @example
	   * <pre>
	   * // Some state name examples
	   *
	   * // stateName can be a single top-level name (must be unique).
	   * $stateProvider.state("home", {});
	   *
	   * // Or it can be a nested state name. This state is a child of the
	   * // above "home" state.
	   * $stateProvider.state("home.newest", {});
	   *
	   * // Nest states as deeply as needed.
	   * $stateProvider.state("home.newest.abc.xyz.inception", {});
	   *
	   * // state() returns $stateProvider, so you can chain state declarations.
	   * $stateProvider
	   *   .state("home", {})
	   *   .state("about", {})
	   *   .state("contacts", {});
	   * </pre>
	   *
	   */
	  this.state = state;
	  function state(name, definition) {
	    /*jshint validthis: true */
	    if (isObject(name)) definition = name;
	    else definition.name = name;
	    registerState(definition);
	    return this;
	  }

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$state
	   *
	   * @requires $rootScope
	   * @requires $q
	   * @requires ui.router.state.$view
	   * @requires $injector
	   * @requires ui.router.util.$resolve
	   * @requires ui.router.state.$stateParams
	   * @requires ui.router.router.$urlRouter
	   *
	   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
	   * you'd like to test against the current active state.
	   * @property {object} current A reference to the state's config object. However 
	   * you passed it in. Useful for accessing custom data.
	   * @property {object} transition Currently pending transition. A promise that'll 
	   * resolve or reject.
	   *
	   * @description
	   * `$state` service is responsible for representing states as well as transitioning
	   * between them. It also provides interfaces to ask for current state or even states
	   * you're coming from.
	   */
	  this.$get = $get;
	  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
	  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $urlRouter,   $location,   $urlMatcherFactory) {

	    var TransitionSuperseded = $q.reject(new Error('transition superseded'));
	    var TransitionPrevented = $q.reject(new Error('transition prevented'));
	    var TransitionAborted = $q.reject(new Error('transition aborted'));
	    var TransitionFailed = $q.reject(new Error('transition failed'));

	    // Handles the case where a state which is the target of a transition is not found, and the user
	    // can optionally retry or defer the transition
	    function handleRedirect(redirect, state, params, options) {
	      /**
	       * @ngdoc event
	       * @name ui.router.state.$state#$stateNotFound
	       * @eventOf ui.router.state.$state
	       * @eventType broadcast on root scope
	       * @description
	       * Fired when a requested state **cannot be found** using the provided state name during transition.
	       * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
	       * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
	       * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
	       * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
	       *
	       * @param {Object} event Event object.
	       * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
	       * @param {State} fromState Current state object.
	       * @param {Object} fromParams Current state params.
	       *
	       * @example
	       *
	       * <pre>
	       * // somewhere, assume lazy.state has not been defined
	       * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
	       *
	       * // somewhere else
	       * $scope.$on('$stateNotFound',
	       * function(event, unfoundState, fromState, fromParams){
	       *     console.log(unfoundState.to); // "lazy.state"
	       *     console.log(unfoundState.toParams); // {a:1, b:2}
	       *     console.log(unfoundState.options); // {inherit:false} + default options
	       * })
	       * </pre>
	       */
	      var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);

	      if (evt.defaultPrevented) {
	        $urlRouter.update();
	        return TransitionAborted;
	      }

	      if (!evt.retry) {
	        return null;
	      }

	      // Allow the handler to return a promise to defer state lookup retry
	      if (options.$retry) {
	        $urlRouter.update();
	        return TransitionFailed;
	      }
	      var retryTransition = $state.transition = $q.when(evt.retry);

	      retryTransition.then(function() {
	        if (retryTransition !== $state.transition) return TransitionSuperseded;
	        redirect.options.$retry = true;
	        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
	      }, function() {
	        return TransitionAborted;
	      });
	      $urlRouter.update();

	      return retryTransition;
	    }

	    root.locals = { resolve: null, globals: { $stateParams: {} } };

	    $state = {
	      params: {},
	      current: root.self,
	      $current: root,
	      transition: null
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#reload
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method that force reloads the current state. All resolves are re-resolved,
	     * controllers reinstantiated, and events re-fired.
	     *
	     * @example
	     * <pre>
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     $state.reload();
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>
	     *
	     * @param {string=|object=} state - A state name or a state object, which is the root of the resolves to be re-resolved.
	     * @example
	     * <pre>
	     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item' 
	     * //and current state is 'contacts.detail.item'
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     //will reload 'contact.detail' and 'contact.detail.item' states
	     *     $state.reload('contact.detail');
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>

	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.reload = function reload(state) {
	      return $state.transitionTo($state.current, $stateParams, { reload: state || true, inherit: false, notify: true});
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#go
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Convenience method for transitioning to a new state. `$state.go` calls 
	     * `$state.transitionTo` internally but automatically sets options to 
	     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
	     * This allows you to easily use an absolute or relative to path and specify 
	     * only the parameters you'd like to update (while letting unspecified parameters 
	     * inherit from the currently active ancestor states).
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.go('contact.detail');
	     *   };
	     * });
	     * </pre>
	     * <img src='../ngdoc_assets/StateGoExamples.png'/>
	     *
	     * @param {string} to Absolute state name or relative state path. Some examples:
	     *
	     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
	     * - `$state.go('^')` - will go to a parent state
	     * - `$state.go('^.sibling')` - will go to a sibling state
	     * - `$state.go('.child.grandchild')` - will go to grandchild state
	     *
	     * @param {object=} params A map of the parameters that will be sent to the state, 
	     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
	     * defined parameters. This allows, for example, going to a sibling state that shares parameters
	     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
	     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
	     * will get you all current parameters, etc.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *
	     * @returns {promise} A promise representing the state of the new transition.
	     *
	     * Possible success values:
	     *
	     * - $state.current
	     *
	     * <br/>Possible rejection values:
	     *
	     * - 'transition superseded' - when a newer transition has been started after this one
	     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
	     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
	     *   when a `$stateNotFound` `event.retry` promise errors.
	     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
	     * - *resolve error* - when an error has occurred with a `resolve`
	     *
	     */
	    $state.go = function go(to, params, options) {
	      return $state.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#transitionTo
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
	     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.transitionTo('contact.detail');
	     *   };
	     * });
	     * </pre>
	     *
	     * @param {string} to State name.
	     * @param {object=} toParams A map of the parameters that will be sent to the state,
	     * will populate $stateParams.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false|string=|object=}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *    if String, then will reload the state with the name given in reload, and any children.
	     *    if Object, then a stateObj is expected, will reload the state found in stateObj, and any children.
	     *
	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.transitionTo = function transitionTo(to, toParams, options) {
	      toParams = toParams || {};
	      options = extend({
	        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
	      }, options || {});

	      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
	      var evt, toState = findState(to, options.relative);

	      // Store the hash param for later (since it will be stripped out by various methods)
	      var hash = toParams['#'];

	      if (!isDefined(toState)) {
	        var redirect = { to: to, toParams: toParams, options: options };
	        var redirectResult = handleRedirect(redirect, from.self, fromParams, options);

	        if (redirectResult) {
	          return redirectResult;
	        }

	        // Always retry once if the $stateNotFound was not prevented
	        // (handles either redirect changed or state lazy-definition)
	        to = redirect.to;
	        toParams = redirect.toParams;
	        options = redirect.options;
	        toState = findState(to, options.relative);

	        if (!isDefined(toState)) {
	          if (!options.relative) throw new Error("No such state '" + to + "'");
	          throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
	        }
	      }
	      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
	      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
	      if (!toState.params.$$validates(toParams)) return TransitionFailed;

	      toParams = toState.params.$$values(toParams);
	      to = toState;

	      var toPath = to.path;

	      // Starting from the root of the path, keep all levels that haven't changed
	      var keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];

	      if (!options.reload) {
	        while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      } else if (isString(options.reload) || isObject(options.reload)) {
	        if (isObject(options.reload) && !options.reload.name) {
	          throw new Error('Invalid reload state object');
	        }
	        
	        var reloadState = options.reload === true ? fromPath[0] : findState(options.reload);
	        if (options.reload && !reloadState) {
	          throw new Error("No such reload state '" + (isString(options.reload) ? options.reload : options.reload.name) + "'");
	        }

	        while (state && state === fromPath[keep] && state !== reloadState) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      }

	      // If we're going to the same state and all locals are kept, we've got nothing to do.
	      // But clear 'transition', as we still want to cancel any other pending transitions.
	      // TODO: We may not want to bump 'transition' if we're called from a location change
	      // that we've initiated ourselves, because we might accidentally abort a legitimate
	      // transition initiated from code?
	      if (shouldSkipReload(to, toParams, from, fromParams, locals, options)) {
	        if (hash) toParams['#'] = hash;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        if (options.location && to.navigable && to.navigable.url) {
	          $urlRouter.push(to.navigable.url, toParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	          $urlRouter.update(true);
	        }
	        $state.transition = null;
	        return $q.when($state.current);
	      }

	      // Filter parameters before we pass them to event handlers etc.
	      toParams = filterByKeys(to.params.$$keys(), toParams || {});

	      // Broadcast start event and cancel the transition if requested
	      if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeStart
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when the state transition **begins**. You can use `event.preventDefault()`
	         * to prevent the transition from happening and then the transition promise will be
	         * rejected with a `'transition prevented'` value.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         *
	         * @example
	         *
	         * <pre>
	         * $rootScope.$on('$stateChangeStart',
	         * function(event, toState, toParams, fromState, fromParams){
	         *     event.preventDefault();
	         *     // transitionTo() promise will be rejected with
	         *     // a 'transition prevented' error
	         * })
	         * </pre>
	         */
	        if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams).defaultPrevented) {
	          $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
	          $urlRouter.update();
	          return TransitionPrevented;
	        }
	      }

	      // Resolve locals for the remaining states, but don't update any global state just
	      // yet -- if anything fails to resolve the current state needs to remain untouched.
	      // We also set up an inheritance chain for the locals here. This allows the view directive
	      // to quickly look up the correct definition for each view in the current state. Even
	      // though we create the locals object itself outside resolveState(), it is initially
	      // empty and gets filled asynchronously. We need to keep track of the promise for the
	      // (fully resolved) current locals, and pass this down the chain.
	      var resolved = $q.when(locals);

	      for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
	        locals = toLocals[l] = inherit(locals);
	        resolved = resolveState(state, toParams, state === to, resolved, locals, options);
	      }

	      // Once everything is resolved, we are ready to perform the actual transition
	      // and return a promise for the new state. We also keep track of what the
	      // current promise is, so that we can detect overlapping transitions and
	      // keep only the outcome of the last transition.
	      var transition = $state.transition = resolved.then(function () {
	        var l, entering, exiting;

	        if ($state.transition !== transition) return TransitionSuperseded;

	        // Exit 'from' states not kept
	        for (l = fromPath.length - 1; l >= keep; l--) {
	          exiting = fromPath[l];
	          if (exiting.self.onExit) {
	            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
	          }
	          exiting.locals = null;
	        }

	        // Enter 'to' states not kept
	        for (l = keep; l < toPath.length; l++) {
	          entering = toPath[l];
	          entering.locals = toLocals[l];
	          if (entering.self.onEnter) {
	            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
	          }
	        }

	        // Re-add the saved hash before we start returning things
	        if (hash) toParams['#'] = hash;

	        // Run it again, to catch any transitions in callbacks
	        if ($state.transition !== transition) return TransitionSuperseded;

	        // Update globals in $state
	        $state.$current = to;
	        $state.current = to.self;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        $state.transition = null;

	        if (options.location && to.navigable) {
	          $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	        }

	        if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeSuccess
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired once the state transition is **complete**.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         */
	          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
	        }
	        $urlRouter.update(true);

	        return $state.current;
	      }, function (error) {
	        if ($state.transition !== transition) return TransitionSuperseded;

	        $state.transition = null;
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeError
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when an **error occurs** during transition. It's important to note that if you
	         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
	         * they will not throw traditionally. You must listen for this $stateChangeError event to
	         * catch **ALL** errors.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         * @param {Error} error The resolve error object.
	         */
	        evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);

	        if (!evt.defaultPrevented) {
	            $urlRouter.update();
	        }

	        return $q.reject(error);
	      });

	      return transition;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#is
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
	     * but only checks for the full state name. If params is supplied then it will be
	     * tested for strict equality against the current active params object, so all params
	     * must match with none missing and no extras.
	     *
	     * @example
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // absolute name
	     * $state.is('contact.details.item'); // returns true
	     * $state.is(contactDetailItemStateObject); // returns true
	     *
	     * // relative name (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
	     * to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
	     * test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it is the state.
	     */
	    $state.is = function is(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) { return undefined; }
	      if ($state.$current !== state) { return false; }
	      return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#includes
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method to determine if the current active state is equal to or is the child of the
	     * state stateName. If any params are passed then they will be tested for a match as well.
	     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
	     *
	     * @example
	     * Partial and relative names
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // Using partial names
	     * $state.includes("contacts"); // returns true
	     * $state.includes("contacts.details"); // returns true
	     * $state.includes("contacts.details.item"); // returns true
	     * $state.includes("contacts.list"); // returns false
	     * $state.includes("about"); // returns false
	     *
	     * // Using relative names (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
	     * </pre>
	     *
	     * Basic globbing patterns
	     * <pre>
	     * $state.$current.name = 'contacts.details.item.url';
	     *
	     * $state.includes("*.details.*.*"); // returns true
	     * $state.includes("*.details.**"); // returns true
	     * $state.includes("**.item.**"); // returns true
	     * $state.includes("*.details.item.url"); // returns true
	     * $state.includes("*.details.*.url"); // returns true
	     * $state.includes("*.details.*"); // returns false
	     * $state.includes("item.**"); // returns false
	     * </pre>
	     *
	     * @param {string} stateOrName A partial name, relative name, or glob pattern
	     * to be searched for within the current state name.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
	     * that you'd like to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
	     * .includes will test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it does include the state
	     */
	    $state.includes = function includes(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      if (isString(stateOrName) && isGlob(stateOrName)) {
	        if (!doesStateMatchGlob(stateOrName)) {
	          return false;
	        }
	        stateOrName = $state.$current.name;
	      }

	      var state = findState(stateOrName, options.relative);
	      if (!isDefined(state)) { return undefined; }
	      if (!isDefined($state.$current.includes[state.name])) { return false; }
	      return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
	    };


	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#href
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A url generation method that returns the compiled url for the given state populated with the given params.
	     *
	     * @example
	     * <pre>
	     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
	     * @param {object=} params An object of parameter values to fill the state's required parameters.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
	     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
	     *    ancestor with a valid url).
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     * 
	     * @returns {string} compiled state url
	     */
	    $state.href = function href(stateOrName, params, options) {
	      options = extend({
	        lossy:    true,
	        inherit:  true,
	        absolute: false,
	        relative: $state.$current
	      }, options || {});

	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) return null;
	      if (options.inherit) params = inheritParams($stateParams, params || {}, $state.$current, state);
	      
	      var nav = (state && options.lossy) ? state.navigable : state;

	      if (!nav || nav.url === undefined || nav.url === null) {
	        return null;
	      }
	      return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys().concat('#'), params || {}), {
	        absolute: options.absolute
	      });
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#get
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Returns the state configuration object for any specific state or all states.
	     *
	     * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
	     * the requested state. If not provided, returns an array of ALL state configs.
	     * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
	     * @returns {Object|Array} State configuration object or array of all objects.
	     */
	    $state.get = function (stateOrName, context) {
	      if (arguments.length === 0) return map(objectKeys(states), function(name) { return states[name].self; });
	      var state = findState(stateOrName, context || $state.$current);
	      return (state && state.self) ? state.self : null;
	    };

	    function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
	      // Make a restricted $stateParams with only the parameters that apply to this state if
	      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
	      // we also need $stateParams to be available for any $injector calls we make during the
	      // dependency resolution process.
	      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
	      var locals = { $stateParams: $stateParams };

	      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
	      // We're also including $stateParams in this; that way the parameters are restricted
	      // to the set that should be visible to the state, and are independent of when we update
	      // the global $state and $stateParams values.
	      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
	      var promises = [dst.resolve.then(function (globals) {
	        dst.globals = globals;
	      })];
	      if (inherited) promises.push(inherited);

	      function resolveViews() {
	        var viewsPromises = [];

	        // Resolve template and dependencies for all views.
	        forEach(state.views, function (view, name) {
	          var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
	          injectables.$template = [ function () {
	            return $view.load(name, { view: view, locals: dst.globals, params: $stateParams, notify: options.notify }) || '';
	          }];

	          viewsPromises.push($resolve.resolve(injectables, dst.globals, dst.resolve, state).then(function (result) {
	            // References to the controller (only instantiated at link time)
	            if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
	              var injectLocals = angular.extend({}, injectables, dst.globals);
	              result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
	            } else {
	              result.$$controller = view.controller;
	            }
	            // Provide access to the state itself for internal use
	            result.$$state = state;
	            result.$$controllerAs = view.controllerAs;
	            dst[name] = result;
	          }));
	        });

	        return $q.all(viewsPromises).then(function(){
	          return dst.globals;
	        });
	      }

	      // Wait for all the promises and then return the activation object
	      return $q.all(promises).then(resolveViews).then(function (values) {
	        return dst;
	      });
	    }

	    return $state;
	  }

	  function shouldSkipReload(to, toParams, from, fromParams, locals, options) {
	    // Return true if there are no differences in non-search (path/object) params, false if there are differences
	    function nonSearchParamsEqual(fromAndToState, fromParams, toParams) {
	      // Identify whether all the parameters that differ between `fromParams` and `toParams` were search params.
	      function notSearchParam(key) {
	        return fromAndToState.params[key].location != "search";
	      }
	      var nonQueryParamKeys = fromAndToState.params.$$keys().filter(notSearchParam);
	      var nonQueryParams = pick.apply({}, [fromAndToState.params].concat(nonQueryParamKeys));
	      var nonQueryParamSet = new $$UMFP.ParamSet(nonQueryParams);
	      return nonQueryParamSet.$$equals(fromParams, toParams);
	    }

	    // If reload was not explicitly requested
	    // and we're transitioning to the same state we're already in
	    // and    the locals didn't change
	    //     or they changed in a way that doesn't merit reloading
	    //        (reloadOnParams:false, or reloadOnSearch.false and only search params changed)
	    // Then return true.
	    if (!options.reload && to === from &&
	      (locals === from.locals || (to.self.reloadOnSearch === false && nonSearchParamsEqual(from, fromParams, toParams)))) {
	      return true;
	    }
	  }
	}

	angular.module('ui.router.state')
	  .value('$stateParams', {})
	  .provider('$state', $StateProvider);


	$ViewProvider.$inject = [];
	function $ViewProvider() {

	  this.$get = $get;
	  /**
	   * @ngdoc object
	   * @name ui.router.state.$view
	   *
	   * @requires ui.router.util.$templateFactory
	   * @requires $rootScope
	   *
	   * @description
	   *
	   */
	  $get.$inject = ['$rootScope', '$templateFactory'];
	  function $get(   $rootScope,   $templateFactory) {
	    return {
	      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
	      /**
	       * @ngdoc function
	       * @name ui.router.state.$view#load
	       * @methodOf ui.router.state.$view
	       *
	       * @description
	       *
	       * @param {string} name name
	       * @param {object} options option object.
	       */
	      load: function load(name, options) {
	        var result, defaults = {
	          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
	        };
	        options = extend(defaults, options);

	        if (options.view) {
	          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
	        }
	        if (result && options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$viewContentLoading
	         * @eventOf ui.router.state.$view
	         * @eventType broadcast on root scope
	         * @description
	         *
	         * Fired once the view **begins loading**, *before* the DOM is rendered.
	         *
	         * @param {Object} event Event object.
	         * @param {Object} viewConfig The view config properties (template, controller, etc).
	         *
	         * @example
	         *
	         * <pre>
	         * $scope.$on('$viewContentLoading',
	         * function(event, viewConfig){
	         *     // Access to all the view config properties.
	         *     // and one special property 'targetView'
	         *     // viewConfig.targetView
	         * });
	         * </pre>
	         */
	          $rootScope.$broadcast('$viewContentLoading', options);
	        }
	        return result;
	      }
	    };
	  }
	}

	angular.module('ui.router.state').provider('$view', $ViewProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$uiViewScrollProvider
	 *
	 * @description
	 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
	 */
	function $ViewScrollProvider() {

	  var useAnchorScroll = false;

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
	   * @methodOf ui.router.state.$uiViewScrollProvider
	   *
	   * @description
	   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
	   * scrolling based on the url anchor.
	   */
	  this.useAnchorScroll = function () {
	    useAnchorScroll = true;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$uiViewScroll
	   *
	   * @requires $anchorScroll
	   * @requires $timeout
	   *
	   * @description
	   * When called with a jqLite element, it scrolls the element into view (after a
	   * `$timeout` so the DOM has time to refresh).
	   *
	   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
	   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
	   */
	  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
	    if (useAnchorScroll) {
	      return $anchorScroll;
	    }

	    return function ($element) {
	      return $timeout(function () {
	        $element[0].scrollIntoView();
	      }, 0, false);
	    };
	  }];
	}

	angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-view
	 *
	 * @requires ui.router.state.$state
	 * @requires $compile
	 * @requires $controller
	 * @requires $injector
	 * @requires ui.router.state.$uiViewScroll
	 * @requires $document
	 *
	 * @restrict ECA
	 *
	 * @description
	 * The ui-view directive tells $state where to place your templates.
	 *
	 * @param {string=} name A view name. The name should be unique amongst the other views in the
	 * same state. You can have views of the same name that live in different states.
	 *
	 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
	 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
	 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
	 * scroll ui-view elements into view when they are populated during a state activation.
	 *
	 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
	 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
	 *
	 * @param {string=} onload Expression to evaluate whenever the view updates.
	 * 
	 * @example
	 * A view can be unnamed or named. 
	 * <pre>
	 * <!-- Unnamed -->
	 * <div ui-view></div> 
	 * 
	 * <!-- Named -->
	 * <div ui-view="viewName"></div>
	 * </pre>
	 *
	 * You can only have one unnamed view within any template (or root html). If you are only using a 
	 * single view and it is unnamed then you can populate it like so:
	 * <pre>
	 * <div ui-view></div> 
	 * $stateProvider.state("home", {
	 *   template: "<h1>HELLO!</h1>"
	 * })
	 * </pre>
	 * 
	 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
	 * config property, by name, in this case an empty name:
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 * 
	 * But typically you'll only use the views property if you name your view or have more than one view 
	 * in the same template. There's not really a compelling reason to name a view if its the only one, 
	 * but you could if you wanted, like so:
	 * <pre>
	 * <div ui-view="main"></div>
	 * </pre> 
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "main": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 * 
	 * Really though, you'll use views to set up multiple views:
	 * <pre>
	 * <div ui-view></div>
	 * <div ui-view="chart"></div> 
	 * <div ui-view="data"></div> 
	 * </pre>
	 * 
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     },
	 *     "chart": {
	 *       template: "<chart_thing/>"
	 *     },
	 *     "data": {
	 *       template: "<data_thing/>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 *
	 * Examples for `autoscroll`:
	 *
	 * <pre>
	 * <!-- If autoscroll present with no expression,
	 *      then scroll ui-view into view -->
	 * <ui-view autoscroll/>
	 *
	 * <!-- If autoscroll present with valid expression,
	 *      then scroll ui-view into view if expression evaluates to true -->
	 * <ui-view autoscroll='true'/>
	 * <ui-view autoscroll='false'/>
	 * <ui-view autoscroll='scopeVariable'/>
	 * </pre>
	 */
	$ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate'];
	function $ViewDirective(   $state,   $injector,   $uiViewScroll,   $interpolate) {

	  function getService() {
	    return ($injector.has) ? function(service) {
	      return $injector.has(service) ? $injector.get(service) : null;
	    } : function(service) {
	      try {
	        return $injector.get(service);
	      } catch (e) {
	        return null;
	      }
	    };
	  }

	  var service = getService(),
	      $animator = service('$animator'),
	      $animate = service('$animate');

	  // Returns a set of DOM manipulation functions based on which Angular version
	  // it should use
	  function getRenderer(attrs, scope) {
	    var statics = function() {
	      return {
	        enter: function (element, target, cb) { target.after(element); cb(); },
	        leave: function (element, cb) { element.remove(); cb(); }
	      };
	    };

	    if ($animate) {
	      return {
	        enter: function(element, target, cb) {
	          var promise = $animate.enter(element, null, target, cb);
	          if (promise && promise.then) promise.then(cb);
	        },
	        leave: function(element, cb) {
	          var promise = $animate.leave(element, cb);
	          if (promise && promise.then) promise.then(cb);
	        }
	      };
	    }

	    if ($animator) {
	      var animate = $animator && $animator(scope, attrs);

	      return {
	        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
	        leave: function(element, cb) { animate.leave(element); cb(); }
	      };
	    }

	    return statics();
	  }

	  var directive = {
	    restrict: 'ECA',
	    terminal: true,
	    priority: 400,
	    transclude: 'element',
	    compile: function (tElement, tAttrs, $transclude) {
	      return function (scope, $element, attrs) {
	        var previousEl, currentEl, currentScope, latestLocals,
	            onloadExp     = attrs.onload || '',
	            autoScrollExp = attrs.autoscroll,
	            renderer      = getRenderer(attrs, scope);

	        scope.$on('$stateChangeSuccess', function() {
	          updateView(false);
	        });
	        scope.$on('$viewContentLoading', function() {
	          updateView(false);
	        });

	        updateView(true);

	        function cleanupLastView() {
	          if (previousEl) {
	            previousEl.remove();
	            previousEl = null;
	          }

	          if (currentScope) {
	            currentScope.$destroy();
	            currentScope = null;
	          }

	          if (currentEl) {
	            renderer.leave(currentEl, function() {
	              previousEl = null;
	            });

	            previousEl = currentEl;
	            currentEl = null;
	          }
	        }

	        function updateView(firstTime) {
	          var newScope,
	              name            = getUiViewName(scope, attrs, $element, $interpolate),
	              previousLocals  = name && $state.$current && $state.$current.locals[name];

	          if (!firstTime && previousLocals === latestLocals) return; // nothing to do
	          newScope = scope.$new();
	          latestLocals = $state.$current.locals[name];

	          var clone = $transclude(newScope, function(clone) {
	            renderer.enter(clone, $element, function onUiViewEnter() {
	              if(currentScope) {
	                currentScope.$emit('$viewContentAnimationEnded');
	              }

	              if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
	                $uiViewScroll(clone);
	              }
	            });
	            cleanupLastView();
	          });

	          currentEl = clone;
	          currentScope = newScope;
	          /**
	           * @ngdoc event
	           * @name ui.router.state.directive:ui-view#$viewContentLoaded
	           * @eventOf ui.router.state.directive:ui-view
	           * @eventType emits on ui-view directive scope
	           * @description           *
	           * Fired once the view is **loaded**, *after* the DOM is rendered.
	           *
	           * @param {Object} event Event object.
	           */
	          currentScope.$emit('$viewContentLoaded');
	          currentScope.$eval(onloadExp);
	        }
	      };
	    }
	  };

	  return directive;
	}

	$ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
	function $ViewDirectiveFill (  $compile,   $controller,   $state,   $interpolate) {
	  return {
	    restrict: 'ECA',
	    priority: -400,
	    compile: function (tElement) {
	      var initial = tElement.html();
	      return function (scope, $element, attrs) {
	        var current = $state.$current,
	            name = getUiViewName(scope, attrs, $element, $interpolate),
	            locals  = current && current.locals[name];

	        if (! locals) {
	          return;
	        }

	        $element.data('$uiView', { name: name, state: locals.$$state });
	        $element.html(locals.$template ? locals.$template : initial);

	        var link = $compile($element.contents());

	        if (locals.$$controller) {
	          locals.$scope = scope;
	          locals.$element = $element;
	          var controller = $controller(locals.$$controller, locals);
	          if (locals.$$controllerAs) {
	            scope[locals.$$controllerAs] = controller;
	          }
	          $element.data('$ngControllerController', controller);
	          $element.children().data('$ngControllerController', controller);
	        }

	        link(scope);
	      };
	    }
	  };
	}

	/**
	 * Shared ui-view code for both directives:
	 * Given scope, element, and its attributes, return the view's name
	 */
	function getUiViewName(scope, attrs, element, $interpolate) {
	  var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
	  var inherited = element.inheritedData('$uiView');
	  return name.indexOf('@') >= 0 ?  name :  (name + '@' + (inherited ? inherited.state.name : ''));
	}

	angular.module('ui.router.state').directive('uiView', $ViewDirective);
	angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

	function parseStateRef(ref, current) {
	  var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
	  if (preparsed) ref = current + '(' + preparsed[1] + ')';
	  parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
	  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
	  return { state: parsed[1], paramExpr: parsed[3] || null };
	}

	function stateContext(el) {
	  var stateData = el.parent().inheritedData('$uiView');

	  if (stateData && stateData.state && stateData.state.name) {
	    return stateData.state;
	  }
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref
	 *
	 * @requires ui.router.state.$state
	 * @requires $timeout
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated 
	 * URL, the directive will automatically generate & update the `href` attribute via 
	 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking 
	 * the link will trigger a state transition with optional parameters. 
	 *
	 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be 
	 * handled natively by the browser.
	 *
	 * You can also use relative state paths within ui-sref, just like the relative 
	 * paths passed to `$state.go()`. You just need to be aware that the path is relative
	 * to the state that the link lives in, in other words the state that loaded the 
	 * template containing the link.
	 *
	 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
	 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
	 * and `reload`.
	 *
	 * @example
	 * Here's an example of how you'd use ui-sref and how it would compile. If you have the 
	 * following template:
	 * <pre>
	 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
	 * 
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
	 *     </li>
	 * </ul>
	 * </pre>
	 * 
	 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
	 * <pre>
	 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
	 * 
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
	 *     </li>
	 * </ul>
	 *
	 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
	 * </pre>
	 *
	 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#go $state.go()}
	 */
	$StateRefDirective.$inject = ['$state', '$timeout'];
	function $StateRefDirective($state, $timeout) {
	  var allowedOptions = ['location', 'inherit', 'reload', 'absolute'];

	  return {
	    restrict: 'A',
	    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
	    link: function(scope, element, attrs, uiSrefActive) {
	      var ref = parseStateRef(attrs.uiSref, $state.current.name);
	      var params = null, url = null, base = stateContext(element) || $state.$current;
	      // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
	      var hrefKind = Object.prototype.toString.call(element.prop('href')) === '[object SVGAnimatedString]' ?
	                 'xlink:href' : 'href';
	      var newHref = null, isAnchor = element.prop("tagName").toUpperCase() === "A";
	      var isForm = element[0].nodeName === "FORM";
	      var attr = isForm ? "action" : hrefKind, nav = true;

	      var options = { relative: base, inherit: true };
	      var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};

	      angular.forEach(allowedOptions, function(option) {
	        if (option in optionsOverride) {
	          options[option] = optionsOverride[option];
	        }
	      });

	      var update = function(newVal) {
	        if (newVal) params = angular.copy(newVal);
	        if (!nav) return;

	        newHref = $state.href(ref.state, params, options);

	        var activeDirective = uiSrefActive[1] || uiSrefActive[0];
	        if (activeDirective) {
	          activeDirective.$$addStateInfo(ref.state, params);
	        }
	        if (newHref === null) {
	          nav = false;
	          return false;
	        }
	        attrs.$set(attr, newHref);
	      };

	      if (ref.paramExpr) {
	        scope.$watch(ref.paramExpr, function(newVal, oldVal) {
	          if (newVal !== params) update(newVal);
	        }, true);
	        params = angular.copy(scope.$eval(ref.paramExpr));
	      }
	      update();

	      if (isForm) return;

	      element.bind("click", function(e) {
	        var button = e.which || e.button;
	        if ( !(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target')) ) {
	          // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
	          var transition = $timeout(function() {
	            $state.go(ref.state, params, options);
	          });
	          e.preventDefault();

	          // if the state has no URL, ignore one preventDefault from the <a> directive.
	          var ignorePreventDefaultCount = isAnchor && !newHref ? 1: 0;
	          e.preventDefault = function() {
	            if (ignorePreventDefaultCount-- <= 0)
	              $timeout.cancel(transition);
	          };
	        }
	      });
	    }
	  };
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive working alongside ui-sref to add classes to an element when the
	 * related ui-sref directive's state is active, and removing them when it is inactive.
	 * The primary use-case is to simplify the special appearance of navigation menus
	 * relying on `ui-sref`, by having the "active" state's menu button appear different,
	 * distinguishing it from the inactive menu items.
	 *
	 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
	 * ui-sref-active found at the same level or above the ui-sref will be used.
	 *
	 * Will activate when the ui-sref's target state or any child state is active. If you
	 * need to activate only when the ui-sref target state is active and *not* any of
	 * it's children, then you will use
	 * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
	 *
	 * @example
	 * Given the following template:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item">
	 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 *
	 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
	 * the resulting HTML will appear as (note the 'active' class):
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item active">
	 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 * The class name is interpolated **once** during the directives link time (any further changes to the
	 * interpolated value are ignored).
	 *
	 * Multiple classes may be specified in a space-separated format:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active='class1 class2 class3'>
	 *     <a ui-sref="app.user">link</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 */

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active-eq
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
	 * when the exact target state used in the `ui-sref` is active; no child states.
	 *
	 */
	$StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
	function $StateRefActiveDirective($state, $stateParams, $interpolate) {
	  return  {
	    restrict: "A",
	    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
	      var states = [], activeClass;

	      // There probably isn't much point in $observing this
	      // uiSrefActive and uiSrefActiveEq share the same directive object with some
	      // slight difference in logic routing
	      activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || '', false)($scope);

	      // Allow uiSref to communicate with uiSrefActive[Equals]
	      this.$$addStateInfo = function (newState, newParams) {
	        var state = $state.get(newState, stateContext($element));

	        states.push({
	          state: state || { name: newState },
	          params: newParams
	        });

	        update();
	      };

	      $scope.$on('$stateChangeSuccess', update);

	      // Update route state
	      function update() {
	        if (anyMatch()) {
	          $element.addClass(activeClass);
	        } else {
	          $element.removeClass(activeClass);
	        }
	      }

	      function anyMatch() {
	        for (var i = 0; i < states.length; i++) {
	          if (isMatch(states[i].state, states[i].params)) {
	            return true;
	          }
	        }
	        return false;
	      }

	      function isMatch(state, params) {
	        if (typeof $attrs.uiSrefActiveEq !== 'undefined') {
	          return $state.is(state.name, params);
	        } else {
	          return $state.includes(state.name, params);
	        }
	      }
	    }]
	  };
	}

	angular.module('ui.router.state')
	  .directive('uiSref', $StateRefDirective)
	  .directive('uiSrefActive', $StateRefActiveDirective)
	  .directive('uiSrefActiveEq', $StateRefActiveDirective);

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:isState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
	 */
	$IsStateFilter.$inject = ['$state'];
	function $IsStateFilter($state) {
	  var isFilter = function (state) {
	    return $state.is(state);
	  };
	  isFilter.$stateful = true;
	  return isFilter;
	}

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:includedByState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
	 */
	$IncludedByStateFilter.$inject = ['$state'];
	function $IncludedByStateFilter($state) {
	  var includesFilter = function (state) {
	    return $state.includes(state);
	  };
	  includesFilter.$stateful = true;
	  return  includesFilter;
	}

	angular.module('ui.router.state')
	  .filter('isState', $IsStateFilter)
	  .filter('includedByState', $IncludedByStateFilter);
	})(window, window.angular);

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(197);

	module.exports = 'ui.bootstrap';


/***/ },
/* 197 */
/***/ function(module, exports) {

	/*
	 * angular-ui-bootstrap
	 * http://angular-ui.github.io/bootstrap/

	 * Version: 1.3.1 - 2016-04-05
	 * License: MIT
	 */angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]);
	angular.module("ui.bootstrap.tpls", ["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/backdrop.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]);
	angular.module('ui.bootstrap.collapse', [])

	  .directive('uibCollapse', ['$animate', '$q', '$parse', '$injector', function($animate, $q, $parse, $injector) {
	    var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
	    return {
	      link: function(scope, element, attrs) {
	        var expandingExpr = $parse(attrs.expanding),
	            expandedExpr = $parse(attrs.expanded),
	            collapsingExpr = $parse(attrs.collapsing),
	            collapsedExpr = $parse(attrs.collapsed);

	        if (!scope.$eval(attrs.uibCollapse)) {
	          element.addClass('in')
	            .addClass('collapse')
	            .attr('aria-expanded', true)
	            .attr('aria-hidden', false)
	            .css({height: 'auto'});
	        }

	        function expand() {
	          if (element.hasClass('collapse') && element.hasClass('in')) {
	            return;
	          }

	          $q.resolve(expandingExpr(scope))
	            .then(function() {
	              element.removeClass('collapse')
	                .addClass('collapsing')
	                .attr('aria-expanded', true)
	                .attr('aria-hidden', false);

	              if ($animateCss) {
	                $animateCss(element, {
	                  addClass: 'in',
	                  easing: 'ease',
	                  to: { height: element[0].scrollHeight + 'px' }
	                }).start()['finally'](expandDone);
	              } else {
	                $animate.addClass(element, 'in', {
	                  to: { height: element[0].scrollHeight + 'px' }
	                }).then(expandDone);
	              }
	            });
	        }

	        function expandDone() {
	          element.removeClass('collapsing')
	            .addClass('collapse')
	            .css({height: 'auto'});
	          expandedExpr(scope);
	        }

	        function collapse() {
	          if (!element.hasClass('collapse') && !element.hasClass('in')) {
	            return collapseDone();
	          }

	          $q.resolve(collapsingExpr(scope))
	            .then(function() {
	              element
	                // IMPORTANT: The height must be set before adding "collapsing" class.
	                // Otherwise, the browser attempts to animate from height 0 (in
	                // collapsing class) to the given height here.
	                .css({height: element[0].scrollHeight + 'px'})
	                // initially all panel collapse have the collapse class, this removal
	                // prevents the animation from jumping to collapsed state
	                .removeClass('collapse')
	                .addClass('collapsing')
	                .attr('aria-expanded', false)
	                .attr('aria-hidden', true);

	              if ($animateCss) {
	                $animateCss(element, {
	                  removeClass: 'in',
	                  to: {height: '0'}
	                }).start()['finally'](collapseDone);
	              } else {
	                $animate.removeClass(element, 'in', {
	                  to: {height: '0'}
	                }).then(collapseDone);
	              }
	            });
	        }

	        function collapseDone() {
	          element.css({height: '0'}); // Required so that collapse works when animation is disabled
	          element.removeClass('collapsing')
	            .addClass('collapse');
	          collapsedExpr(scope);
	        }

	        scope.$watch(attrs.uibCollapse, function(shouldCollapse) {
	          if (shouldCollapse) {
	            collapse();
	          } else {
	            expand();
	          }
	        });
	      }
	    };
	  }]);

	angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

	.constant('uibAccordionConfig', {
	  closeOthers: true
	})

	.controller('UibAccordionController', ['$scope', '$attrs', 'uibAccordionConfig', function($scope, $attrs, accordionConfig) {
	  // This array keeps track of the accordion groups
	  this.groups = [];

	  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
	  this.closeOthers = function(openGroup) {
	    var closeOthers = angular.isDefined($attrs.closeOthers) ?
	      $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
	    if (closeOthers) {
	      angular.forEach(this.groups, function(group) {
	        if (group !== openGroup) {
	          group.isOpen = false;
	        }
	      });
	    }
	  };

	  // This is called from the accordion-group directive to add itself to the accordion
	  this.addGroup = function(groupScope) {
	    var that = this;
	    this.groups.push(groupScope);

	    groupScope.$on('$destroy', function(event) {
	      that.removeGroup(groupScope);
	    });
	  };

	  // This is called from the accordion-group directive when to remove itself
	  this.removeGroup = function(group) {
	    var index = this.groups.indexOf(group);
	    if (index !== -1) {
	      this.groups.splice(index, 1);
	    }
	  };
	}])

	// The accordion directive simply sets up the directive controller
	// and adds an accordion CSS class to itself element.
	.directive('uibAccordion', function() {
	  return {
	    controller: 'UibAccordionController',
	    controllerAs: 'accordion',
	    transclude: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/accordion/accordion.html';
	    }
	  };
	})

	// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
	.directive('uibAccordionGroup', function() {
	  return {
	    require: '^uibAccordion',         // We need this directive to be inside an accordion
	    transclude: true,              // It transcludes the contents of the directive into the template
	    replace: true,                // The element containing the directive will be replaced with the template
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/accordion/accordion-group.html';
	    },
	    scope: {
	      heading: '@',               // Interpolate the heading attribute onto this scope
	      panelClass: '@?',           // Ditto with panelClass
	      isOpen: '=?',
	      isDisabled: '=?'
	    },
	    controller: function() {
	      this.setHeading = function(element) {
	        this.heading = element;
	      };
	    },
	    link: function(scope, element, attrs, accordionCtrl) {
	      accordionCtrl.addGroup(scope);

	      scope.openClass = attrs.openClass || 'panel-open';
	      scope.panelClass = attrs.panelClass || 'panel-default';
	      scope.$watch('isOpen', function(value) {
	        element.toggleClass(scope.openClass, !!value);
	        if (value) {
	          accordionCtrl.closeOthers(scope);
	        }
	      });

	      scope.toggleOpen = function($event) {
	        if (!scope.isDisabled) {
	          if (!$event || $event.which === 32) {
	            scope.isOpen = !scope.isOpen;
	          }
	        }
	      };

	      var id = 'accordiongroup-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
	      scope.headingId = id + '-tab';
	      scope.panelId = id + '-panel';
	    }
	  };
	})

	// Use accordion-heading below an accordion-group to provide a heading containing HTML
	.directive('uibAccordionHeading', function() {
	  return {
	    transclude: true,   // Grab the contents to be used as the heading
	    template: '',       // In effect remove this element!
	    replace: true,
	    require: '^uibAccordionGroup',
	    link: function(scope, element, attrs, accordionGroupCtrl, transclude) {
	      // Pass the heading to the accordion-group controller
	      // so that it can be transcluded into the right place in the template
	      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
	      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
	    }
	  };
	})

	// Use in the accordion-group template to indicate where you want the heading to be transcluded
	// You must provide the property on the accordion-group controller that will hold the transcluded element
	.directive('uibAccordionTransclude', function() {
	  return {
	    require: '^uibAccordionGroup',
	    link: function(scope, element, attrs, controller) {
	      scope.$watch(function() { return controller[attrs.uibAccordionTransclude]; }, function(heading) {
	        if (heading) {
	          var elem = angular.element(element[0].querySelector('[uib-accordion-header]'));
	          elem.html('');
	          elem.append(heading);
	        }
	      });
	    }
	  };
	});

	angular.module('ui.bootstrap.alert', [])

	.controller('UibAlertController', ['$scope', '$attrs', '$interpolate', '$timeout', function($scope, $attrs, $interpolate, $timeout) {
	  $scope.closeable = !!$attrs.close;

	  var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ?
	    $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;

	  if (dismissOnTimeout) {
	    $timeout(function() {
	      $scope.close();
	    }, parseInt(dismissOnTimeout, 10));
	  }
	}])

	.directive('uibAlert', function() {
	  return {
	    controller: 'UibAlertController',
	    controllerAs: 'alert',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/alert/alert.html';
	    },
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@',
	      close: '&'
	    }
	  };
	});

	angular.module('ui.bootstrap.buttons', [])

	.constant('uibButtonConfig', {
	  activeClass: 'active',
	  toggleEvent: 'click'
	})

	.controller('UibButtonsController', ['uibButtonConfig', function(buttonConfig) {
	  this.activeClass = buttonConfig.activeClass || 'active';
	  this.toggleEvent = buttonConfig.toggleEvent || 'click';
	}])

	.directive('uibBtnRadio', ['$parse', function($parse) {
	  return {
	    require: ['uibBtnRadio', 'ngModel'],
	    controller: 'UibButtonsController',
	    controllerAs: 'buttons',
	    link: function(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	      var uncheckableExpr = $parse(attrs.uibUncheckable);

	      element.find('input').css({display: 'none'});

	      //model -> UI
	      ngModelCtrl.$render = function() {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)));
	      };

	      //ui->model
	      element.on(buttonsCtrl.toggleEvent, function() {
	        if (attrs.disabled) {
	          return;
	        }

	        var isActive = element.hasClass(buttonsCtrl.activeClass);

	        if (!isActive || angular.isDefined(attrs.uncheckable)) {
	          scope.$apply(function() {
	            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio));
	            ngModelCtrl.$render();
	          });
	        }
	      });

	      if (attrs.uibUncheckable) {
	        scope.$watch(uncheckableExpr, function(uncheckable) {
	          attrs.$set('uncheckable', uncheckable ? '' : undefined);
	        });
	      }
	    }
	  };
	}])

	.directive('uibBtnCheckbox', function() {
	  return {
	    require: ['uibBtnCheckbox', 'ngModel'],
	    controller: 'UibButtonsController',
	    controllerAs: 'button',
	    link: function(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      element.find('input').css({display: 'none'});

	      function getTrueValue() {
	        return getCheckboxValue(attrs.btnCheckboxTrue, true);
	      }

	      function getFalseValue() {
	        return getCheckboxValue(attrs.btnCheckboxFalse, false);
	      }

	      function getCheckboxValue(attribute, defaultValue) {
	        return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
	      }

	      //model -> UI
	      ngModelCtrl.$render = function() {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
	      };

	      //ui->model
	      element.on(buttonsCtrl.toggleEvent, function() {
	        if (attrs.disabled) {
	          return;
	        }

	        scope.$apply(function() {
	          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	          ngModelCtrl.$render();
	        });
	      });
	    }
	  };
	});

	angular.module('ui.bootstrap.carousel', [])

	.controller('UibCarouselController', ['$scope', '$element', '$interval', '$timeout', '$animate', function($scope, $element, $interval, $timeout, $animate) {
	  var self = this,
	    slides = self.slides = $scope.slides = [],
	    SLIDE_DIRECTION = 'uib-slideDirection',
	    currentIndex = $scope.active,
	    currentInterval, isPlaying, bufferedTransitions = [];

	  var destroyed = false;

	  self.addSlide = function(slide, element) {
	    slides.push({
	      slide: slide,
	      element: element
	    });
	    slides.sort(function(a, b) {
	      return +a.slide.index - +b.slide.index;
	    });
	    //if this is the first slide or the slide is set to active, select it
	    if (slide.index === $scope.active || slides.length === 1 && !angular.isNumber($scope.active)) {
	      if ($scope.$currentTransition) {
	        $scope.$currentTransition = null;
	      }

	      currentIndex = slide.index;
	      $scope.active = slide.index;
	      setActive(currentIndex);
	      self.select(slides[findSlideIndex(slide)]);
	      if (slides.length === 1) {
	        $scope.play();
	      }
	    }
	  };

	  self.getCurrentIndex = function() {
	    for (var i = 0; i < slides.length; i++) {
	      if (slides[i].slide.index === currentIndex) {
	        return i;
	      }
	    }
	  };

	  self.next = $scope.next = function() {
	    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

	    if (newIndex === 0 && $scope.noWrap()) {
	      $scope.pause();
	      return;
	    }

	    return self.select(slides[newIndex], 'next');
	  };

	  self.prev = $scope.prev = function() {
	    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

	    if ($scope.noWrap() && newIndex === slides.length - 1) {
	      $scope.pause();
	      return;
	    }

	    return self.select(slides[newIndex], 'prev');
	  };

	  self.removeSlide = function(slide) {
	    var index = findSlideIndex(slide);

	    var bufferedIndex = bufferedTransitions.indexOf(slides[index]);
	    if (bufferedIndex !== -1) {
	      bufferedTransitions.splice(bufferedIndex, 1);
	    }

	    //get the index of the slide inside the carousel
	    slides.splice(index, 1);
	    if (slides.length > 0 && currentIndex === index) {
	      if (index >= slides.length) {
	        currentIndex = slides.length - 1;
	        $scope.active = currentIndex;
	        setActive(currentIndex);
	        self.select(slides[slides.length - 1]);
	      } else {
	        currentIndex = index;
	        $scope.active = currentIndex;
	        setActive(currentIndex);
	        self.select(slides[index]);
	      }
	    } else if (currentIndex > index) {
	      currentIndex--;
	      $scope.active = currentIndex;
	    }

	    //clean the active value when no more slide
	    if (slides.length === 0) {
	      currentIndex = null;
	      $scope.active = null;
	      clearBufferedTransitions();
	    }
	  };

	  /* direction: "prev" or "next" */
	  self.select = $scope.select = function(nextSlide, direction) {
	    var nextIndex = findSlideIndex(nextSlide.slide);
	    //Decide direction if it's not given
	    if (direction === undefined) {
	      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
	    }
	    //Prevent this user-triggered transition from occurring if there is already one in progress
	    if (nextSlide.slide.index !== currentIndex &&
	      !$scope.$currentTransition) {
	      goNext(nextSlide.slide, nextIndex, direction);
	    } else if (nextSlide && nextSlide.slide.index !== currentIndex && $scope.$currentTransition) {
	      bufferedTransitions.push(slides[nextIndex]);
	    }
	  };

	  /* Allow outside people to call indexOf on slides array */
	  $scope.indexOfSlide = function(slide) {
	    return +slide.slide.index;
	  };

	  $scope.isActive = function(slide) {
	    return $scope.active === slide.slide.index;
	  };

	  $scope.isPrevDisabled = function() {
	    return $scope.active === 0 && $scope.noWrap();
	  };

	  $scope.isNextDisabled = function() {
	    return $scope.active === slides.length - 1 && $scope.noWrap();
	  };

	  $scope.pause = function() {
	    if (!$scope.noPause) {
	      isPlaying = false;
	      resetTimer();
	    }
	  };

	  $scope.play = function() {
	    if (!isPlaying) {
	      isPlaying = true;
	      restartTimer();
	    }
	  };

	  $scope.$on('$destroy', function() {
	    destroyed = true;
	    resetTimer();
	  });

	  $scope.$watch('noTransition', function(noTransition) {
	    $animate.enabled($element, !noTransition);
	  });

	  $scope.$watch('interval', restartTimer);

	  $scope.$watchCollection('slides', resetTransition);

	  $scope.$watch('active', function(index) {
	    if (angular.isNumber(index) && currentIndex !== index) {
	      for (var i = 0; i < slides.length; i++) {
	        if (slides[i].slide.index === index) {
	          index = i;
	          break;
	        }
	      }

	      var slide = slides[index];
	      if (slide) {
	        setActive(index);
	        self.select(slides[index]);
	        currentIndex = index;
	      }
	    }
	  });

	  function clearBufferedTransitions() {
	    while (bufferedTransitions.length) {
	      bufferedTransitions.shift();
	    }
	  }

	  function getSlideByIndex(index) {
	    for (var i = 0, l = slides.length; i < l; ++i) {
	      if (slides[i].index === index) {
	        return slides[i];
	      }
	    }
	  }

	  function setActive(index) {
	    for (var i = 0; i < slides.length; i++) {
	      slides[i].slide.active = i === index;
	    }
	  }

	  function goNext(slide, index, direction) {
	    if (destroyed) {
	      return;
	    }

	    angular.extend(slide, {direction: direction});
	    angular.extend(slides[currentIndex].slide || {}, {direction: direction});
	    if ($animate.enabled($element) && !$scope.$currentTransition &&
	      slides[index].element && self.slides.length > 1) {
	      slides[index].element.data(SLIDE_DIRECTION, slide.direction);
	      var currentIdx = self.getCurrentIndex();

	      if (angular.isNumber(currentIdx) && slides[currentIdx].element) {
	        slides[currentIdx].element.data(SLIDE_DIRECTION, slide.direction);
	      }

	      $scope.$currentTransition = true;
	      $animate.on('addClass', slides[index].element, function(element, phase) {
	        if (phase === 'close') {
	          $scope.$currentTransition = null;
	          $animate.off('addClass', element);
	          if (bufferedTransitions.length) {
	            var nextSlide = bufferedTransitions.pop().slide;
	            var nextIndex = nextSlide.index;
	            var nextDirection = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
	            clearBufferedTransitions();

	            goNext(nextSlide, nextIndex, nextDirection);
	          }
	        }
	      });
	    }

	    $scope.active = slide.index;
	    currentIndex = slide.index;
	    setActive(index);

	    //every time you change slides, reset the timer
	    restartTimer();
	  }

	  function findSlideIndex(slide) {
	    for (var i = 0; i < slides.length; i++) {
	      if (slides[i].slide === slide) {
	        return i;
	      }
	    }
	  }

	  function resetTimer() {
	    if (currentInterval) {
	      $interval.cancel(currentInterval);
	      currentInterval = null;
	    }
	  }

	  function resetTransition(slides) {
	    if (!slides.length) {
	      $scope.$currentTransition = null;
	      clearBufferedTransitions();
	    }
	  }

	  function restartTimer() {
	    resetTimer();
	    var interval = +$scope.interval;
	    if (!isNaN(interval) && interval > 0) {
	      currentInterval = $interval(timerFn, interval);
	    }
	  }

	  function timerFn() {
	    var interval = +$scope.interval;
	    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
	      $scope.next();
	    } else {
	      $scope.pause();
	    }
	  }
	}])

	.directive('uibCarousel', function() {
	  return {
	    transclude: true,
	    replace: true,
	    controller: 'UibCarouselController',
	    controllerAs: 'carousel',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/carousel/carousel.html';
	    },
	    scope: {
	      active: '=',
	      interval: '=',
	      noTransition: '=',
	      noPause: '=',
	      noWrap: '&'
	    }
	  };
	})

	.directive('uibSlide', function() {
	  return {
	    require: '^uibCarousel',
	    transclude: true,
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/carousel/slide.html';
	    },
	    scope: {
	      actual: '=?',
	      index: '=?'
	    },
	    link: function (scope, element, attrs, carouselCtrl) {
	      carouselCtrl.addSlide(scope, element);
	      //when the scope is destroyed then remove the slide from the current slides array
	      scope.$on('$destroy', function() {
	        carouselCtrl.removeSlide(scope);
	      });
	    }
	  };
	})

	.animation('.item', ['$animateCss',
	function($animateCss) {
	  var SLIDE_DIRECTION = 'uib-slideDirection';

	  function removeClass(element, className, callback) {
	    element.removeClass(className);
	    if (callback) {
	      callback();
	    }
	  }

	  return {
	    beforeAddClass: function(element, className, done) {
	      if (className === 'active') {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction === 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element,
	          directionClass + ' ' + direction, done);
	        element.addClass(direction);

	        $animateCss(element, {addClass: directionClass})
	          .start()
	          .done(removeClassFn);

	        return function() {
	          stopped = true;
	        };
	      }
	      done();
	    },
	    beforeRemoveClass: function (element, className, done) {
	      if (className === 'active') {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction === 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element, directionClass, done);

	        $animateCss(element, {addClass: directionClass})
	          .start()
	          .done(removeClassFn);

	        return function() {
	          stopped = true;
	        };
	      }
	      done();
	    }
	  };
	}]);

	angular.module('ui.bootstrap.dateparser', [])

	.service('uibDateParser', ['$log', '$locale', 'dateFilter', 'orderByFilter', function($log, $locale, dateFilter, orderByFilter) {
	  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
	  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

	  var localeId;
	  var formatCodeToRegex;

	  this.init = function() {
	    localeId = $locale.id;

	    this.parsers = {};
	    this.formatters = {};

	    formatCodeToRegex = [
	      {
	        key: 'yyyy',
	        regex: '\\d{4}',
	        apply: function(value) { this.year = +value; },
	        formatter: function(date) {
	          var _date = new Date();
	          _date.setFullYear(Math.abs(date.getFullYear()));
	          return dateFilter(_date, 'yyyy');
	        }
	      },
	      {
	        key: 'yy',
	        regex: '\\d{2}',
	        apply: function(value) { value = +value; this.year = value < 69 ? value + 2000 : value + 1900; },
	        formatter: function(date) {
	          var _date = new Date();
	          _date.setFullYear(Math.abs(date.getFullYear()));
	          return dateFilter(_date, 'yy');
	        }
	      },
	      {
	        key: 'y',
	        regex: '\\d{1,4}',
	        apply: function(value) { this.year = +value; },
	        formatter: function(date) {
	          var _date = new Date();
	          _date.setFullYear(Math.abs(date.getFullYear()));
	          return dateFilter(_date, 'y');
	        }
	      },
	      {
	        key: 'M!',
	        regex: '0?[1-9]|1[0-2]',
	        apply: function(value) { this.month = value - 1; },
	        formatter: function(date) {
	          var value = date.getMonth();
	          if (/^[0-9]$/.test(value)) {
	            return dateFilter(date, 'MM');
	          }

	          return dateFilter(date, 'M');
	        }
	      },
	      {
	        key: 'MMMM',
	        regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
	        apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); },
	        formatter: function(date) { return dateFilter(date, 'MMMM'); }
	      },
	      {
	        key: 'MMM',
	        regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
	        apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); },
	        formatter: function(date) { return dateFilter(date, 'MMM'); }
	      },
	      {
	        key: 'MM',
	        regex: '0[1-9]|1[0-2]',
	        apply: function(value) { this.month = value - 1; },
	        formatter: function(date) { return dateFilter(date, 'MM'); }
	      },
	      {
	        key: 'M',
	        regex: '[1-9]|1[0-2]',
	        apply: function(value) { this.month = value - 1; },
	        formatter: function(date) { return dateFilter(date, 'M'); }
	      },
	      {
	        key: 'd!',
	        regex: '[0-2]?[0-9]{1}|3[0-1]{1}',
	        apply: function(value) { this.date = +value; },
	        formatter: function(date) {
	          var value = date.getDate();
	          if (/^[1-9]$/.test(value)) {
	            return dateFilter(date, 'dd');
	          }

	          return dateFilter(date, 'd');
	        }
	      },
	      {
	        key: 'dd',
	        regex: '[0-2][0-9]{1}|3[0-1]{1}',
	        apply: function(value) { this.date = +value; },
	        formatter: function(date) { return dateFilter(date, 'dd'); }
	      },
	      {
	        key: 'd',
	        regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
	        apply: function(value) { this.date = +value; },
	        formatter: function(date) { return dateFilter(date, 'd'); }
	      },
	      {
	        key: 'EEEE',
	        regex: $locale.DATETIME_FORMATS.DAY.join('|'),
	        formatter: function(date) { return dateFilter(date, 'EEEE'); }
	      },
	      {
	        key: 'EEE',
	        regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|'),
	        formatter: function(date) { return dateFilter(date, 'EEE'); }
	      },
	      {
	        key: 'HH',
	        regex: '(?:0|1)[0-9]|2[0-3]',
	        apply: function(value) { this.hours = +value; },
	        formatter: function(date) { return dateFilter(date, 'HH'); }
	      },
	      {
	        key: 'hh',
	        regex: '0[0-9]|1[0-2]',
	        apply: function(value) { this.hours = +value; },
	        formatter: function(date) { return dateFilter(date, 'hh'); }
	      },
	      {
	        key: 'H',
	        regex: '1?[0-9]|2[0-3]',
	        apply: function(value) { this.hours = +value; },
	        formatter: function(date) { return dateFilter(date, 'H'); }
	      },
	      {
	        key: 'h',
	        regex: '[0-9]|1[0-2]',
	        apply: function(value) { this.hours = +value; },
	        formatter: function(date) { return dateFilter(date, 'h'); }
	      },
	      {
	        key: 'mm',
	        regex: '[0-5][0-9]',
	        apply: function(value) { this.minutes = +value; },
	        formatter: function(date) { return dateFilter(date, 'mm'); }
	      },
	      {
	        key: 'm',
	        regex: '[0-9]|[1-5][0-9]',
	        apply: function(value) { this.minutes = +value; },
	        formatter: function(date) { return dateFilter(date, 'm'); }
	      },
	      {
	        key: 'sss',
	        regex: '[0-9][0-9][0-9]',
	        apply: function(value) { this.milliseconds = +value; },
	        formatter: function(date) { return dateFilter(date, 'sss'); }
	      },
	      {
	        key: 'ss',
	        regex: '[0-5][0-9]',
	        apply: function(value) { this.seconds = +value; },
	        formatter: function(date) { return dateFilter(date, 'ss'); }
	      },
	      {
	        key: 's',
	        regex: '[0-9]|[1-5][0-9]',
	        apply: function(value) { this.seconds = +value; },
	        formatter: function(date) { return dateFilter(date, 's'); }
	      },
	      {
	        key: 'a',
	        regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
	        apply: function(value) {
	          if (this.hours === 12) {
	            this.hours = 0;
	          }

	          if (value === 'PM') {
	            this.hours += 12;
	          }
	        },
	        formatter: function(date) { return dateFilter(date, 'a'); }
	      },
	      {
	        key: 'Z',
	        regex: '[+-]\\d{4}',
	        apply: function(value) {
	          var matches = value.match(/([+-])(\d{2})(\d{2})/),
	            sign = matches[1],
	            hours = matches[2],
	            minutes = matches[3];
	          this.hours += toInt(sign + hours);
	          this.minutes += toInt(sign + minutes);
	        },
	        formatter: function(date) {
	          return dateFilter(date, 'Z');
	        }
	      },
	      {
	        key: 'ww',
	        regex: '[0-4][0-9]|5[0-3]',
	        formatter: function(date) { return dateFilter(date, 'ww'); }
	      },
	      {
	        key: 'w',
	        regex: '[0-9]|[1-4][0-9]|5[0-3]',
	        formatter: function(date) { return dateFilter(date, 'w'); }
	      },
	      {
	        key: 'GGGG',
	        regex: $locale.DATETIME_FORMATS.ERANAMES.join('|').replace(/\s/g, '\\s'),
	        formatter: function(date) { return dateFilter(date, 'GGGG'); }
	      },
	      {
	        key: 'GGG',
	        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
	        formatter: function(date) { return dateFilter(date, 'GGG'); }
	      },
	      {
	        key: 'GG',
	        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
	        formatter: function(date) { return dateFilter(date, 'GG'); }
	      },
	      {
	        key: 'G',
	        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
	        formatter: function(date) { return dateFilter(date, 'G'); }
	      }
	    ];
	  };

	  this.init();

	  function createParser(format, func) {
	    var map = [], regex = format.split('');

	    // check for literal values
	    var quoteIndex = format.indexOf('\'');
	    if (quoteIndex > -1) {
	      var inLiteral = false;
	      format = format.split('');
	      for (var i = quoteIndex; i < format.length; i++) {
	        if (inLiteral) {
	          if (format[i] === '\'') {
	            if (i + 1 < format.length && format[i+1] === '\'') { // escaped single quote
	              format[i+1] = '$';
	              regex[i+1] = '';
	            } else { // end of literal
	              regex[i] = '';
	              inLiteral = false;
	            }
	          }
	          format[i] = '$';
	        } else {
	          if (format[i] === '\'') { // start of literal
	            format[i] = '$';
	            regex[i] = '';
	            inLiteral = true;
	          }
	        }
	      }

	      format = format.join('');
	    }

	    angular.forEach(formatCodeToRegex, function(data) {
	      var index = format.indexOf(data.key);

	      if (index > -1) {
	        format = format.split('');

	        regex[index] = '(' + data.regex + ')';
	        format[index] = '$'; // Custom symbol to define consumed part of format
	        for (var i = index + 1, n = index + data.key.length; i < n; i++) {
	          regex[i] = '';
	          format[i] = '$';
	        }
	        format = format.join('');

	        map.push({
	          index: index,
	          key: data.key,
	          apply: data[func],
	          matcher: data.regex
	        });
	      }
	    });

	    return {
	      regex: new RegExp('^' + regex.join('') + '$'),
	      map: orderByFilter(map, 'index')
	    };
	  }

	  this.filter = function(date, format) {
	    if (!angular.isDate(date) || isNaN(date) || !format) {
	      return '';
	    }

	    format = $locale.DATETIME_FORMATS[format] || format;

	    if ($locale.id !== localeId) {
	      this.init();
	    }

	    if (!this.formatters[format]) {
	      this.formatters[format] = createParser(format, 'formatter');
	    }

	    var parser = this.formatters[format],
	      map = parser.map;

	    var _format = format;

	    return map.reduce(function(str, mapper, i) {
	      var match = _format.match(new RegExp('(.*)' + mapper.key));
	      if (match && angular.isString(match[1])) {
	        str += match[1];
	        _format = _format.replace(match[1] + mapper.key, '');
	      }

	      var endStr = i === map.length - 1 ? _format : '';

	      if (mapper.apply) {
	        return str + mapper.apply.call(null, date) + endStr;
	      }

	      return str + endStr;
	    }, '');
	  };

	  this.parse = function(input, format, baseDate) {
	    if (!angular.isString(input) || !format) {
	      return input;
	    }

	    format = $locale.DATETIME_FORMATS[format] || format;
	    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

	    if ($locale.id !== localeId) {
	      this.init();
	    }

	    if (!this.parsers[format]) {
	      this.parsers[format] = createParser(format, 'apply');
	    }

	    var parser = this.parsers[format],
	        regex = parser.regex,
	        map = parser.map,
	        results = input.match(regex),
	        tzOffset = false;
	    if (results && results.length) {
	      var fields, dt;
	      if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
	        fields = {
	          year: baseDate.getFullYear(),
	          month: baseDate.getMonth(),
	          date: baseDate.getDate(),
	          hours: baseDate.getHours(),
	          minutes: baseDate.getMinutes(),
	          seconds: baseDate.getSeconds(),
	          milliseconds: baseDate.getMilliseconds()
	        };
	      } else {
	        if (baseDate) {
	          $log.warn('dateparser:', 'baseDate is not a valid date');
	        }
	        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
	      }

	      for (var i = 1, n = results.length; i < n; i++) {
	        var mapper = map[i - 1];
	        if (mapper.matcher === 'Z') {
	          tzOffset = true;
	        }

	        if (mapper.apply) {
	          mapper.apply.call(fields, results[i]);
	        }
	      }

	      var datesetter = tzOffset ? Date.prototype.setUTCFullYear :
	        Date.prototype.setFullYear;
	      var timesetter = tzOffset ? Date.prototype.setUTCHours :
	        Date.prototype.setHours;

	      if (isValid(fields.year, fields.month, fields.date)) {
	        if (angular.isDate(baseDate) && !isNaN(baseDate.getTime()) && !tzOffset) {
	          dt = new Date(baseDate);
	          datesetter.call(dt, fields.year, fields.month, fields.date);
	          timesetter.call(dt, fields.hours, fields.minutes,
	            fields.seconds, fields.milliseconds);
	        } else {
	          dt = new Date(0);
	          datesetter.call(dt, fields.year, fields.month, fields.date);
	          timesetter.call(dt, fields.hours || 0, fields.minutes || 0,
	            fields.seconds || 0, fields.milliseconds || 0);
	        }
	      }

	      return dt;
	    }
	  };

	  // Check if date is valid for specific month (and year for February).
	  // Month: 0 = Jan, 1 = Feb, etc
	  function isValid(year, month, date) {
	    if (date < 1) {
	      return false;
	    }

	    if (month === 1 && date > 28) {
	      return date === 29 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
	    }

	    if (month === 3 || month === 5 || month === 8 || month === 10) {
	      return date < 31;
	    }

	    return true;
	  }

	  function toInt(str) {
	    return parseInt(str, 10);
	  }

	  this.toTimezone = toTimezone;
	  this.fromTimezone = fromTimezone;
	  this.timezoneToOffset = timezoneToOffset;
	  this.addDateMinutes = addDateMinutes;
	  this.convertTimezoneToLocal = convertTimezoneToLocal;

	  function toTimezone(date, timezone) {
	    return date && timezone ? convertTimezoneToLocal(date, timezone) : date;
	  }

	  function fromTimezone(date, timezone) {
	    return date && timezone ? convertTimezoneToLocal(date, timezone, true) : date;
	  }

	  //https://github.com/angular/angular.js/blob/4daafd3dbe6a80d578f5a31df1bb99c77559543e/src/Angular.js#L1207
	  function timezoneToOffset(timezone, fallback) {
	    var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
	    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
	  }

	  function addDateMinutes(date, minutes) {
	    date = new Date(date.getTime());
	    date.setMinutes(date.getMinutes() + minutes);
	    return date;
	  }

	  function convertTimezoneToLocal(date, timezone, reverse) {
	    reverse = reverse ? -1 : 1;
	    var timezoneOffset = timezoneToOffset(timezone, date.getTimezoneOffset());
	    return addDateMinutes(date, reverse * (timezoneOffset - date.getTimezoneOffset()));
	  }
	}]);

	// Avoiding use of ng-class as it creates a lot of watchers when a class is to be applied to
	// at most one element.
	angular.module('ui.bootstrap.isClass', [])
	.directive('uibIsClass', [
	         '$animate',
	function ($animate) {
	  //                    11111111          22222222
	  var ON_REGEXP = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/;
	  //                    11111111           22222222
	  var IS_REGEXP = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;

	  var dataPerTracked = {};

	  return {
	    restrict: 'A',
	    compile: function (tElement, tAttrs) {
	      var linkedScopes = [];
	      var instances = [];
	      var expToData = {};
	      var lastActivated = null;
	      var onExpMatches = tAttrs.uibIsClass.match(ON_REGEXP);
	      var onExp = onExpMatches[2];
	      var expsStr = onExpMatches[1];
	      var exps = expsStr.split(',');

	      return linkFn;

	      function linkFn(scope, element, attrs) {
	        linkedScopes.push(scope);
	        instances.push({
	          scope: scope,
	          element: element
	        });

	        exps.forEach(function (exp, k) {
	          addForExp(exp, scope);
	        });

	        scope.$on('$destroy', removeScope);
	      }

	      function addForExp(exp, scope) {
	        var matches = exp.match(IS_REGEXP);
	        var clazz = scope.$eval(matches[1]);
	        var compareWithExp = matches[2];
	        var data = expToData[exp];
	        if (!data) {
	          var watchFn = function (compareWithVal) {
	            var newActivated = null;
	            instances.some(function (instance) {
	              var thisVal = instance.scope.$eval(onExp);
	              if (thisVal === compareWithVal) {
	                newActivated = instance;
	                return true;
	              }
	            });
	            if (data.lastActivated !== newActivated) {
	              if (data.lastActivated) {
	                $animate.removeClass(data.lastActivated.element, clazz);
	              }
	              if (newActivated) {
	                $animate.addClass(newActivated.element, clazz);
	              }
	              data.lastActivated = newActivated;
	            }
	          };
	          expToData[exp] = data = {
	            lastActivated: null,
	            scope: scope,
	            watchFn: watchFn,
	            compareWithExp: compareWithExp,
	            watcher: scope.$watch(compareWithExp, watchFn)
	          };
	        }
	        data.watchFn(scope.$eval(compareWithExp));
	      }

	      function removeScope(e) {
	        var removedScope = e.targetScope;
	        var index = linkedScopes.indexOf(removedScope);
	        linkedScopes.splice(index, 1);
	        instances.splice(index, 1);
	        if (linkedScopes.length) {
	          var newWatchScope = linkedScopes[0];
	          angular.forEach(expToData, function (data) {
	            if (data.scope === removedScope) {
	              data.watcher = newWatchScope.$watch(data.compareWithExp, data.watchFn);
	              data.scope = newWatchScope;
	            }
	          });
	        }
	        else {
	          expToData = {};
	        }
	      }
	    }
	  };
	}]);
	angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.isClass'])

	.value('$datepickerSuppressError', false)

	.value('$datepickerLiteralWarning', true)

	.constant('uibDatepickerConfig', {
	  datepickerMode: 'day',
	  formatDay: 'dd',
	  formatMonth: 'MMMM',
	  formatYear: 'yyyy',
	  formatDayHeader: 'EEE',
	  formatDayTitle: 'MMMM yyyy',
	  formatMonthTitle: 'yyyy',
	  maxDate: null,
	  maxMode: 'year',
	  minDate: null,
	  minMode: 'day',
	  ngModelOptions: {},
	  shortcutPropagation: false,
	  showWeeks: true,
	  yearColumns: 5,
	  yearRows: 4
	})

	.controller('UibDatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$locale', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerLiteralWarning', '$datepickerSuppressError', 'uibDateParser',
	  function($scope, $attrs, $parse, $interpolate, $locale, $log, dateFilter, datepickerConfig, $datepickerLiteralWarning, $datepickerSuppressError, dateParser) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl;
	      ngModelOptions = {},
	      watchListeners = [],
	      optionsUsed = !!$attrs.datepickerOptions;

	  if (!$scope.datepickerOptions) {
	    $scope.datepickerOptions = {};
	  }

	  // Modes chain
	  this.modes = ['day', 'month', 'year'];

	  [
	    'customClass',
	    'dateDisabled',
	    'datepickerMode',
	    'formatDay',
	    'formatDayHeader',
	    'formatDayTitle',
	    'formatMonth',
	    'formatMonthTitle',
	    'formatYear',
	    'maxDate',
	    'maxMode',
	    'minDate',
	    'minMode',
	    'showWeeks',
	    'shortcutPropagation',
	    'startingDay',
	    'yearColumns',
	    'yearRows'
	  ].forEach(function(key) {
	    switch (key) {
	      case 'customClass':
	      case 'dateDisabled':
	        $scope[key] = $scope.datepickerOptions[key] || angular.noop;
	        break;
	      case 'datepickerMode':
	        $scope.datepickerMode = angular.isDefined($scope.datepickerOptions.datepickerMode) ?
	          $scope.datepickerOptions.datepickerMode : datepickerConfig.datepickerMode;
	        break;
	      case 'formatDay':
	      case 'formatDayHeader':
	      case 'formatDayTitle':
	      case 'formatMonth':
	      case 'formatMonthTitle':
	      case 'formatYear':
	        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
	          $interpolate($scope.datepickerOptions[key])($scope.$parent) :
	          datepickerConfig[key];
	        break;
	      case 'showWeeks':
	      case 'shortcutPropagation':
	      case 'yearColumns':
	      case 'yearRows':
	        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
	          $scope.datepickerOptions[key] : datepickerConfig[key];
	        break;
	      case 'startingDay':
	        if (angular.isDefined($scope.datepickerOptions.startingDay)) {
	          self.startingDay = $scope.datepickerOptions.startingDay;
	        } else if (angular.isNumber(datepickerConfig.startingDay)) {
	          self.startingDay = datepickerConfig.startingDay;
	        } else {
	          self.startingDay = ($locale.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;
	        }

	        break;
	      case 'maxDate':
	      case 'minDate':
	        $scope.$watch('datepickerOptions.' + key, function(value) {
	          if (value) {
	            if (angular.isDate(value)) {
	              self[key] = dateParser.fromTimezone(new Date(value), ngModelOptions.timezone);
	            } else {
	              if ($datepickerLiteralWarning) {
	                $log.warn('Literal date support has been deprecated, please switch to date object usage');
	              }

	              self[key] = new Date(dateFilter(value, 'medium'));
	            }
	          } else {
	            self[key] = datepickerConfig[key] ?
	              dateParser.fromTimezone(new Date(datepickerConfig[key]), ngModelOptions.timezone) :
	              null;
	          }

	          self.refreshView();
	        });

	        break;
	      case 'maxMode':
	      case 'minMode':
	        if ($scope.datepickerOptions[key]) {
	          $scope.$watch(function() { return $scope.datepickerOptions[key]; }, function(value) {
	            self[key] = $scope[key] = angular.isDefined(value) ? value : datepickerOptions[key];
	            if (key === 'minMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) < self.modes.indexOf(self[key]) ||
	              key === 'maxMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) > self.modes.indexOf(self[key])) {
	              $scope.datepickerMode = self[key];
	              $scope.datepickerOptions.datepickerMode = self[key];
	            }
	          });
	        } else {
	          self[key] = $scope[key] = datepickerConfig[key] || null;
	        }

	        break;
	    }
	  });

	  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

	  $scope.disabled = angular.isDefined($attrs.disabled) || false;
	  if (angular.isDefined($attrs.ngDisabled)) {
	    watchListeners.push($scope.$parent.$watch($attrs.ngDisabled, function(disabled) {
	      $scope.disabled = disabled;
	      self.refreshView();
	    }));
	  }

	  $scope.isActive = function(dateObject) {
	    if (self.compare(dateObject.date, self.activeDate) === 0) {
	      $scope.activeDateId = dateObject.uid;
	      return true;
	    }
	    return false;
	  };

	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelOptions = ngModelCtrl_.$options || datepickerConfig.ngModelOptions;
	    if ($scope.datepickerOptions.initDate) {
	      self.activeDate = dateParser.fromTimezone($scope.datepickerOptions.initDate, ngModelOptions.timezone) || new Date();
	      $scope.$watch('datepickerOptions.initDate', function(initDate) {
	        if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
	          self.activeDate = dateParser.fromTimezone(initDate, ngModelOptions.timezone);
	          self.refreshView();
	        }
	      });
	    } else {
	      self.activeDate = new Date();
	    }

	    this.activeDate = ngModelCtrl.$modelValue ?
	      dateParser.fromTimezone(new Date(ngModelCtrl.$modelValue), ngModelOptions.timezone) :
	      dateParser.fromTimezone(new Date(), ngModelOptions.timezone);

	    ngModelCtrl.$render = function() {
	      self.render();
	    };
	  };

	  this.render = function() {
	    if (ngModelCtrl.$viewValue) {
	      var date = new Date(ngModelCtrl.$viewValue),
	          isValid = !isNaN(date);

	      if (isValid) {
	        this.activeDate = dateParser.fromTimezone(date, ngModelOptions.timezone);
	      } else if (!$datepickerSuppressError) {
	        $log.error('Datepicker directive: "ng-model" value must be a Date object');
	      }
	    }
	    this.refreshView();
	  };

	  this.refreshView = function() {
	    if (this.element) {
	      $scope.selectedDt = null;
	      this._refreshView();
	      if ($scope.activeDt) {
	        $scope.activeDateId = $scope.activeDt.uid;
	      }

	      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	      date = dateParser.fromTimezone(date, ngModelOptions.timezone);
	      ngModelCtrl.$setValidity('dateDisabled', !date ||
	        this.element && !this.isDisabled(date));
	    }
	  };

	  this.createDateObject = function(date, format) {
	    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	    model = dateParser.fromTimezone(model, ngModelOptions.timezone);
	    var today = new Date();
	    today = dateParser.fromTimezone(today, ngModelOptions.timezone);
	    var time = this.compare(date, today);
	    var dt = {
	      date: date,
	      label: dateParser.filter(date, format),
	      selected: model && this.compare(date, model) === 0,
	      disabled: this.isDisabled(date),
	      past: time < 0,
	      current: time === 0,
	      future: time > 0,
	      customClass: this.customClass(date) || null
	    };

	    if (model && this.compare(date, model) === 0) {
	      $scope.selectedDt = dt;
	    }

	    if (self.activeDate && this.compare(dt.date, self.activeDate) === 0) {
	      $scope.activeDt = dt;
	    }

	    return dt;
	  };

	  this.isDisabled = function(date) {
	    return $scope.disabled ||
	      this.minDate && this.compare(date, this.minDate) < 0 ||
	      this.maxDate && this.compare(date, this.maxDate) > 0 ||
	      $scope.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode});
	  };

	  this.customClass = function(date) {
	    return $scope.customClass({date: date, mode: $scope.datepickerMode});
	  };

	  // Split array into smaller arrays
	  this.split = function(arr, size) {
	    var arrays = [];
	    while (arr.length > 0) {
	      arrays.push(arr.splice(0, size));
	    }
	    return arrays;
	  };

	  $scope.select = function(date) {
	    if ($scope.datepickerMode === self.minMode) {
	      var dt = ngModelCtrl.$viewValue ? dateParser.fromTimezone(new Date(ngModelCtrl.$viewValue), ngModelOptions.timezone) : new Date(0, 0, 0, 0, 0, 0, 0);
	      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	      dt = dateParser.toTimezone(dt, ngModelOptions.timezone);
	      ngModelCtrl.$setViewValue(dt);
	      ngModelCtrl.$render();
	    } else {
	      self.activeDate = date;
	      setMode(self.modes[self.modes.indexOf($scope.datepickerMode) - 1]);

	      $scope.$emit('uib:datepicker.mode');
	    }
	  };

	  $scope.move = function(direction) {
	    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
	        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
	    self.activeDate.setFullYear(year, month, 1);
	    self.refreshView();
	  };

	  $scope.toggleMode = function(direction) {
	    direction = direction || 1;

	    if ($scope.datepickerMode === self.maxMode && direction === 1 ||
	      $scope.datepickerMode === self.minMode && direction === -1) {
	      return;
	    }

	    setMode(self.modes[self.modes.indexOf($scope.datepickerMode) + direction]);

	    $scope.$emit('uib:datepicker.mode');
	  };

	  // Key event mapper
	  $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

	  var focusElement = function() {
	    self.element[0].focus();
	  };

	  // Listen for focus requests from popup directive
	  $scope.$on('uib:datepicker.focus', focusElement);

	  $scope.keydown = function(evt) {
	    var key = $scope.keys[evt.which];

	    if (!key || evt.shiftKey || evt.altKey || $scope.disabled) {
	      return;
	    }

	    evt.preventDefault();
	    if (!self.shortcutPropagation) {
	      evt.stopPropagation();
	    }

	    if (key === 'enter' || key === 'space') {
	      if (self.isDisabled(self.activeDate)) {
	        return; // do nothing
	      }
	      $scope.select(self.activeDate);
	    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
	      $scope.toggleMode(key === 'up' ? 1 : -1);
	    } else {
	      self.handleKeyDown(key, evt);
	      self.refreshView();
	    }
	  };

	  $scope.$on("$destroy", function() {
	    //Clear all watch listeners on destroy
	    while (watchListeners.length) {
	      watchListeners.shift()();
	    }
	  });

	  function setMode(mode) {
	    $scope.datepickerMode = mode;
	    $scope.datepickerOptions.datepickerMode = mode;
	  }
	}])

	.controller('UibDaypickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	  this.step = { months: 1 };
	  this.element = $element;
	  function getDaysInMonth(year, month) {
	    return month === 1 && year % 4 === 0 &&
	      (year % 100 !== 0 || year % 400 === 0) ? 29 : DAYS_IN_MONTH[month];
	  }

	  this.init = function(ctrl) {
	    angular.extend(ctrl, this);
	    scope.showWeeks = ctrl.showWeeks;
	    ctrl.refreshView();
	  };

	  this.getDates = function(startDate, n) {
	    var dates = new Array(n), current = new Date(startDate), i = 0, date;
	    while (i < n) {
	      date = new Date(current);
	      dates[i++] = date;
	      current.setDate(current.getDate() + 1);
	    }
	    return dates;
	  };

	  this._refreshView = function() {
	    var year = this.activeDate.getFullYear(),
	      month = this.activeDate.getMonth(),
	      firstDayOfMonth = new Date(this.activeDate);

	    firstDayOfMonth.setFullYear(year, month, 1);

	    var difference = this.startingDay - firstDayOfMonth.getDay(),
	      numDisplayedFromPreviousMonth = difference > 0 ?
	        7 - difference : - difference,
	      firstDate = new Date(firstDayOfMonth);

	    if (numDisplayedFromPreviousMonth > 0) {
	      firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
	    }

	    // 42 is the number of days on a six-week calendar
	    var days = this.getDates(firstDate, 42);
	    for (var i = 0; i < 42; i ++) {
	      days[i] = angular.extend(this.createDateObject(days[i], this.formatDay), {
	        secondary: days[i].getMonth() !== month,
	        uid: scope.uniqueId + '-' + i
	      });
	    }

	    scope.labels = new Array(7);
	    for (var j = 0; j < 7; j++) {
	      scope.labels[j] = {
	        abbr: dateFilter(days[j].date, this.formatDayHeader),
	        full: dateFilter(days[j].date, 'EEEE')
	      };
	    }

	    scope.title = dateFilter(this.activeDate, this.formatDayTitle);
	    scope.rows = this.split(days, 7);

	    if (scope.showWeeks) {
	      scope.weekNumbers = [];
	      var thursdayIndex = (4 + 7 - this.startingDay) % 7,
	          numWeeks = scope.rows.length;
	      for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
	        scope.weekNumbers.push(
	          getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
	      }
	    }
	  };

	  this.compare = function(date1, date2) {
	    var _date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
	    var _date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
	    _date1.setFullYear(date1.getFullYear());
	    _date2.setFullYear(date2.getFullYear());
	    return _date1 - _date2;
	  };

	  function getISO8601WeekNumber(date) {
	    var checkDate = new Date(date);
	    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
	    var time = checkDate.getTime();
	    checkDate.setMonth(0); // Compare with Jan 1
	    checkDate.setDate(1);
	    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	  }

	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getDate();

	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - 7;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + 7;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      var month = this.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
	      this.activeDate.setMonth(month, 1);
	      date = Math.min(getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()), date);
	    } else if (key === 'home') {
	      date = 1;
	    } else if (key === 'end') {
	      date = getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth());
	    }
	    this.activeDate.setDate(date);
	  };
	}])

	.controller('UibMonthpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  this.step = { years: 1 };
	  this.element = $element;

	  this.init = function(ctrl) {
	    angular.extend(ctrl, this);
	    ctrl.refreshView();
	  };

	  this._refreshView = function() {
	    var months = new Array(12),
	        year = this.activeDate.getFullYear(),
	        date;

	    for (var i = 0; i < 12; i++) {
	      date = new Date(this.activeDate);
	      date.setFullYear(year, i, 1);
	      months[i] = angular.extend(this.createDateObject(date, this.formatMonth), {
	        uid: scope.uniqueId + '-' + i
	      });
	    }

	    scope.title = dateFilter(this.activeDate, this.formatMonthTitle);
	    scope.rows = this.split(months, 3);
	  };

	  this.compare = function(date1, date2) {
	    var _date1 = new Date(date1.getFullYear(), date1.getMonth());
	    var _date2 = new Date(date2.getFullYear(), date2.getMonth());
	    _date1.setFullYear(date1.getFullYear());
	    _date2.setFullYear(date2.getFullYear());
	    return _date1 - _date2;
	  };

	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getMonth();

	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - 3;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + 3;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      var year = this.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
	      this.activeDate.setFullYear(year);
	    } else if (key === 'home') {
	      date = 0;
	    } else if (key === 'end') {
	      date = 11;
	    }
	    this.activeDate.setMonth(date);
	  };
	}])

	.controller('UibYearpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
	  var columns, range;
	  this.element = $element;

	  function getStartingYear(year) {
	    return parseInt((year - 1) / range, 10) * range + 1;
	  }

	  this.yearpickerInit = function() {
	    columns = this.yearColumns;
	    range = this.yearRows * columns;
	    this.step = { years: range };
	  };

	  this._refreshView = function() {
	    var years = new Array(range), date;

	    for (var i = 0, start = getStartingYear(this.activeDate.getFullYear()); i < range; i++) {
	      date = new Date(this.activeDate);
	      date.setFullYear(start + i, 0, 1);
	      years[i] = angular.extend(this.createDateObject(date, this.formatYear), {
	        uid: scope.uniqueId + '-' + i
	      });
	    }

	    scope.title = [years[0].label, years[range - 1].label].join(' - ');
	    scope.rows = this.split(years, columns);
	    scope.columns = columns;
	  };

	  this.compare = function(date1, date2) {
	    return date1.getFullYear() - date2.getFullYear();
	  };

	  this.handleKeyDown = function(key, evt) {
	    var date = this.activeDate.getFullYear();

	    if (key === 'left') {
	      date = date - 1;
	    } else if (key === 'up') {
	      date = date - columns;
	    } else if (key === 'right') {
	      date = date + 1;
	    } else if (key === 'down') {
	      date = date + columns;
	    } else if (key === 'pageup' || key === 'pagedown') {
	      date += (key === 'pageup' ? - 1 : 1) * range;
	    } else if (key === 'home') {
	      date = getStartingYear(this.activeDate.getFullYear());
	    } else if (key === 'end') {
	      date = getStartingYear(this.activeDate.getFullYear()) + range - 1;
	    }
	    this.activeDate.setFullYear(date);
	  };
	}])

	.directive('uibDatepicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/datepicker.html';
	    },
	    scope: {
	      datepickerOptions: '=?'
	    },
	    require: ['uibDatepicker', '^ngModel'],
	    controller: 'UibDatepickerController',
	    controllerAs: 'datepicker',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      datepickerCtrl.init(ngModelCtrl);
	    }
	  };
	})

	.directive('uibDaypicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/day.html';
	    },
	    require: ['^uibDatepicker', 'uibDaypicker'],
	    controller: 'UibDaypickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0],
	        daypickerCtrl = ctrls[1];

	      daypickerCtrl.init(datepickerCtrl);
	    }
	  };
	})

	.directive('uibMonthpicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/month.html';
	    },
	    require: ['^uibDatepicker', 'uibMonthpicker'],
	    controller: 'UibMonthpickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0],
	        monthpickerCtrl = ctrls[1];

	      monthpickerCtrl.init(datepickerCtrl);
	    }
	  };
	})

	.directive('uibYearpicker', function() {
	  return {
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepicker/year.html';
	    },
	    require: ['^uibDatepicker', 'uibYearpicker'],
	    controller: 'UibYearpickerController',
	    link: function(scope, element, attrs, ctrls) {
	      var ctrl = ctrls[0];
	      angular.extend(ctrl, ctrls[1]);
	      ctrl.yearpickerInit();

	      ctrl.refreshView();
	    }
	  };
	});

	angular.module('ui.bootstrap.position', [])

	/**
	 * A set of utility methods for working with the DOM.
	 * It is meant to be used where we need to absolute-position elements in
	 * relation to another element (this is the case for tooltips, popovers,
	 * typeahead suggestions etc.).
	 */
	  .factory('$uibPosition', ['$document', '$window', function($document, $window) {
	    /**
	     * Used by scrollbarWidth() function to cache scrollbar's width.
	     * Do not access this variable directly, use scrollbarWidth() instead.
	     */
	    var SCROLLBAR_WIDTH;
	    /**
	     * scrollbar on body and html element in IE and Edge overlay
	     * content and should be considered 0 width.
	     */
	    var BODY_SCROLLBAR_WIDTH;
	    var OVERFLOW_REGEX = {
	      normal: /(auto|scroll)/,
	      hidden: /(auto|scroll|hidden)/
	    };
	    var PLACEMENT_REGEX = {
	      auto: /\s?auto?\s?/i,
	      primary: /^(top|bottom|left|right)$/,
	      secondary: /^(top|bottom|left|right|center)$/,
	      vertical: /^(top|bottom)$/
	    };
	    var BODY_REGEX = /(HTML|BODY)/;

	    return {

	      /**
	       * Provides a raw DOM element from a jQuery/jQLite element.
	       *
	       * @param {element} elem - The element to convert.
	       *
	       * @returns {element} A HTML element.
	       */
	      getRawNode: function(elem) {
	        return elem.nodeName ? elem : elem[0] || elem;
	      },

	      /**
	       * Provides a parsed number for a style property.  Strips
	       * units and casts invalid numbers to 0.
	       *
	       * @param {string} value - The style value to parse.
	       *
	       * @returns {number} A valid number.
	       */
	      parseStyle: function(value) {
	        value = parseFloat(value);
	        return isFinite(value) ? value : 0;
	      },

	      /**
	       * Provides the closest positioned ancestor.
	       *
	       * @param {element} element - The element to get the offest parent for.
	       *
	       * @returns {element} The closest positioned ancestor.
	       */
	      offsetParent: function(elem) {
	        elem = this.getRawNode(elem);

	        var offsetParent = elem.offsetParent || $document[0].documentElement;

	        function isStaticPositioned(el) {
	          return ($window.getComputedStyle(el).position || 'static') === 'static';
	        }

	        while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
	          offsetParent = offsetParent.offsetParent;
	        }

	        return offsetParent || $document[0].documentElement;
	      },

	      /**
	       * Provides the scrollbar width, concept from TWBS measureScrollbar()
	       * function in https://github.com/twbs/bootstrap/blob/master/js/modal.js
	       * In IE and Edge, scollbar on body and html element overlay and should
	       * return a width of 0.
	       *
	       * @returns {number} The width of the browser scollbar.
	       */
	      scrollbarWidth: function(isBody) {
	        if (isBody) {
	          if (angular.isUndefined(BODY_SCROLLBAR_WIDTH)) {
	            var bodyElem = $document.find('body');
	            bodyElem.addClass('uib-position-body-scrollbar-measure');
	            BODY_SCROLLBAR_WIDTH = $window.innerWidth - bodyElem[0].clientWidth;
	            BODY_SCROLLBAR_WIDTH = isFinite(BODY_SCROLLBAR_WIDTH) ? BODY_SCROLLBAR_WIDTH : 0;
	            bodyElem.removeClass('uib-position-body-scrollbar-measure');
	          }
	          return BODY_SCROLLBAR_WIDTH;
	        }

	        if (angular.isUndefined(SCROLLBAR_WIDTH)) {
	          var scrollElem = angular.element('<div class="uib-position-scrollbar-measure"></div>');
	          $document.find('body').append(scrollElem);
	          SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
	          SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
	          scrollElem.remove();
	        }

	        return SCROLLBAR_WIDTH;
	      },

	      /**
	       * Provides the padding required on an element to replace the scrollbar.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**scrollbarWidth**: the width of the scrollbar</li>
	       *     <li>**widthOverflow**: whether the the width is overflowing</li>
	       *     <li>**right**: the amount of right padding on the element needed to replace the scrollbar</li>
	       *     <li>**rightOriginal**: the amount of right padding currently on the element</li>
	       *     <li>**heightOverflow**: whether the the height is overflowing</li>
	       *     <li>**bottom**: the amount of bottom padding on the element needed to replace the scrollbar</li>
	       *     <li>**bottomOriginal**: the amount of bottom padding currently on the element</li>
	       *   </ul>
	       */
	      scrollbarPadding: function(elem) {
	        elem = this.getRawNode(elem);

	        var elemStyle = $window.getComputedStyle(elem);
	        var paddingRight = this.parseStyle(elemStyle.paddingRight);
	        var paddingBottom = this.parseStyle(elemStyle.paddingBottom);
	        var scrollParent = this.scrollParent(elem, false, true);
	        var scrollbarWidth = this.scrollbarWidth(scrollParent, BODY_REGEX.test(scrollParent.tagName));

	        return {
	          scrollbarWidth: scrollbarWidth,
	          widthOverflow: scrollParent.scrollWidth > scrollParent.clientWidth,
	          right: paddingRight + scrollbarWidth,
	          originalRight: paddingRight,
	          heightOverflow: scrollParent.scrollHeight > scrollParent.clientHeight,
	          bottom: paddingBottom + scrollbarWidth,
	          originalBottom: paddingBottom
	         };
	      },

	      /**
	       * Checks to see if the element is scrollable.
	       *
	       * @param {element} elem - The element to check.
	       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
	       *   default is false.
	       *
	       * @returns {boolean} Whether the element is scrollable.
	       */
	      isScrollable: function(elem, includeHidden) {
	        elem = this.getRawNode(elem);

	        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
	        var elemStyle = $window.getComputedStyle(elem);
	        return overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX);
	      },

	      /**
	       * Provides the closest scrollable ancestor.
	       * A port of the jQuery UI scrollParent method:
	       * https://github.com/jquery/jquery-ui/blob/master/ui/scroll-parent.js
	       *
	       * @param {element} elem - The element to find the scroll parent of.
	       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
	       *   default is false.
	       * @param {boolean=} [includeSelf=false] - Should the element being passed be
	       * included in the scrollable llokup.
	       *
	       * @returns {element} A HTML element.
	       */
	      scrollParent: function(elem, includeHidden, includeSelf) {
	        elem = this.getRawNode(elem);

	        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
	        var documentEl = $document[0].documentElement;
	        var elemStyle = $window.getComputedStyle(elem);
	        if (includeSelf && overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX)) {
	          return elem;
	        }
	        var excludeStatic = elemStyle.position === 'absolute';
	        var scrollParent = elem.parentElement || documentEl;

	        if (scrollParent === documentEl || elemStyle.position === 'fixed') {
	          return documentEl;
	        }

	        while (scrollParent.parentElement && scrollParent !== documentEl) {
	          var spStyle = $window.getComputedStyle(scrollParent);
	          if (excludeStatic && spStyle.position !== 'static') {
	            excludeStatic = false;
	          }

	          if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
	            break;
	          }
	          scrollParent = scrollParent.parentElement;
	        }

	        return scrollParent;
	      },

	      /**
	       * Provides read-only equivalent of jQuery's position function:
	       * http://api.jquery.com/position/ - distance to closest positioned
	       * ancestor.  Does not account for margins by default like jQuery position.
	       *
	       * @param {element} elem - The element to caclulate the position on.
	       * @param {boolean=} [includeMargins=false] - Should margins be accounted
	       * for, default is false.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**width**: the width of the element</li>
	       *     <li>**height**: the height of the element</li>
	       *     <li>**top**: distance to top edge of offset parent</li>
	       *     <li>**left**: distance to left edge of offset parent</li>
	       *   </ul>
	       */
	      position: function(elem, includeMagins) {
	        elem = this.getRawNode(elem);

	        var elemOffset = this.offset(elem);
	        if (includeMagins) {
	          var elemStyle = $window.getComputedStyle(elem);
	          elemOffset.top -= this.parseStyle(elemStyle.marginTop);
	          elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
	        }
	        var parent = this.offsetParent(elem);
	        var parentOffset = {top: 0, left: 0};

	        if (parent !== $document[0].documentElement) {
	          parentOffset = this.offset(parent);
	          parentOffset.top += parent.clientTop - parent.scrollTop;
	          parentOffset.left += parent.clientLeft - parent.scrollLeft;
	        }

	        return {
	          width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
	          height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
	          top: Math.round(elemOffset.top - parentOffset.top),
	          left: Math.round(elemOffset.left - parentOffset.left)
	        };
	      },

	      /**
	       * Provides read-only equivalent of jQuery's offset function:
	       * http://api.jquery.com/offset/ - distance to viewport.  Does
	       * not account for borders, margins, or padding on the body
	       * element.
	       *
	       * @param {element} elem - The element to calculate the offset on.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**width**: the width of the element</li>
	       *     <li>**height**: the height of the element</li>
	       *     <li>**top**: distance to top edge of viewport</li>
	       *     <li>**right**: distance to bottom edge of viewport</li>
	       *   </ul>
	       */
	      offset: function(elem) {
	        elem = this.getRawNode(elem);

	        var elemBCR = elem.getBoundingClientRect();
	        return {
	          width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
	          height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
	          top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
	          left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
	        };
	      },

	      /**
	       * Provides offset distance to the closest scrollable ancestor
	       * or viewport.  Accounts for border and scrollbar width.
	       *
	       * Right and bottom dimensions represent the distance to the
	       * respective edge of the viewport element.  If the element
	       * edge extends beyond the viewport, a negative value will be
	       * reported.
	       *
	       * @param {element} elem - The element to get the viewport offset for.
	       * @param {boolean=} [useDocument=false] - Should the viewport be the document element instead
	       * of the first scrollable element, default is false.
	       * @param {boolean=} [includePadding=true] - Should the padding on the offset parent element
	       * be accounted for, default is true.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**top**: distance to the top content edge of viewport element</li>
	       *     <li>**bottom**: distance to the bottom content edge of viewport element</li>
	       *     <li>**left**: distance to the left content edge of viewport element</li>
	       *     <li>**right**: distance to the right content edge of viewport element</li>
	       *   </ul>
	       */
	      viewportOffset: function(elem, useDocument, includePadding) {
	        elem = this.getRawNode(elem);
	        includePadding = includePadding !== false ? true : false;

	        var elemBCR = elem.getBoundingClientRect();
	        var offsetBCR = {top: 0, left: 0, bottom: 0, right: 0};

	        var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
	        var offsetParentBCR = offsetParent.getBoundingClientRect();

	        offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
	        offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
	        if (offsetParent === $document[0].documentElement) {
	          offsetBCR.top += $window.pageYOffset;
	          offsetBCR.left += $window.pageXOffset;
	        }
	        offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
	        offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;

	        if (includePadding) {
	          var offsetParentStyle = $window.getComputedStyle(offsetParent);
	          offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
	          offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
	          offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
	          offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
	        }

	        return {
	          top: Math.round(elemBCR.top - offsetBCR.top),
	          bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
	          left: Math.round(elemBCR.left - offsetBCR.left),
	          right: Math.round(offsetBCR.right - elemBCR.right)
	        };
	      },

	      /**
	       * Provides an array of placement values parsed from a placement string.
	       * Along with the 'auto' indicator, supported placement strings are:
	       *   <ul>
	       *     <li>top: element on top, horizontally centered on host element.</li>
	       *     <li>top-left: element on top, left edge aligned with host element left edge.</li>
	       *     <li>top-right: element on top, lerightft edge aligned with host element right edge.</li>
	       *     <li>bottom: element on bottom, horizontally centered on host element.</li>
	       *     <li>bottom-left: element on bottom, left edge aligned with host element left edge.</li>
	       *     <li>bottom-right: element on bottom, right edge aligned with host element right edge.</li>
	       *     <li>left: element on left, vertically centered on host element.</li>
	       *     <li>left-top: element on left, top edge aligned with host element top edge.</li>
	       *     <li>left-bottom: element on left, bottom edge aligned with host element bottom edge.</li>
	       *     <li>right: element on right, vertically centered on host element.</li>
	       *     <li>right-top: element on right, top edge aligned with host element top edge.</li>
	       *     <li>right-bottom: element on right, bottom edge aligned with host element bottom edge.</li>
	       *   </ul>
	       * A placement string with an 'auto' indicator is expected to be
	       * space separated from the placement, i.e: 'auto bottom-left'  If
	       * the primary and secondary placement values do not match 'top,
	       * bottom, left, right' then 'top' will be the primary placement and
	       * 'center' will be the secondary placement.  If 'auto' is passed, true
	       * will be returned as the 3rd value of the array.
	       *
	       * @param {string} placement - The placement string to parse.
	       *
	       * @returns {array} An array with the following values
	       * <ul>
	       *   <li>**[0]**: The primary placement.</li>
	       *   <li>**[1]**: The secondary placement.</li>
	       *   <li>**[2]**: If auto is passed: true, else undefined.</li>
	       * </ul>
	       */
	      parsePlacement: function(placement) {
	        var autoPlace = PLACEMENT_REGEX.auto.test(placement);
	        if (autoPlace) {
	          placement = placement.replace(PLACEMENT_REGEX.auto, '');
	        }

	        placement = placement.split('-');

	        placement[0] = placement[0] || 'top';
	        if (!PLACEMENT_REGEX.primary.test(placement[0])) {
	          placement[0] = 'top';
	        }

	        placement[1] = placement[1] || 'center';
	        if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
	          placement[1] = 'center';
	        }

	        if (autoPlace) {
	          placement[2] = true;
	        } else {
	          placement[2] = false;
	        }

	        return placement;
	      },

	      /**
	       * Provides coordinates for an element to be positioned relative to
	       * another element.  Passing 'auto' as part of the placement parameter
	       * will enable smart placement - where the element fits. i.e:
	       * 'auto left-top' will check to see if there is enough space to the left
	       * of the hostElem to fit the targetElem, if not place right (same for secondary
	       * top placement).  Available space is calculated using the viewportOffset
	       * function.
	       *
	       * @param {element} hostElem - The element to position against.
	       * @param {element} targetElem - The element to position.
	       * @param {string=} [placement=top] - The placement for the targetElem,
	       *   default is 'top'. 'center' is assumed as secondary placement for
	       *   'top', 'left', 'right', and 'bottom' placements.  Available placements are:
	       *   <ul>
	       *     <li>top</li>
	       *     <li>top-right</li>
	       *     <li>top-left</li>
	       *     <li>bottom</li>
	       *     <li>bottom-left</li>
	       *     <li>bottom-right</li>
	       *     <li>left</li>
	       *     <li>left-top</li>
	       *     <li>left-bottom</li>
	       *     <li>right</li>
	       *     <li>right-top</li>
	       *     <li>right-bottom</li>
	       *   </ul>
	       * @param {boolean=} [appendToBody=false] - Should the top and left values returned
	       *   be calculated from the body element, default is false.
	       *
	       * @returns {object} An object with the following properties:
	       *   <ul>
	       *     <li>**top**: Value for targetElem top.</li>
	       *     <li>**left**: Value for targetElem left.</li>
	       *     <li>**placement**: The resolved placement.</li>
	       *   </ul>
	       */
	      positionElements: function(hostElem, targetElem, placement, appendToBody) {
	        hostElem = this.getRawNode(hostElem);
	        targetElem = this.getRawNode(targetElem);

	        // need to read from prop to support tests.
	        var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
	        var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');

	        placement = this.parsePlacement(placement);

	        var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
	        var targetElemPos = {top: 0, left: 0, placement: ''};

	        if (placement[2]) {
	          var viewportOffset = this.viewportOffset(hostElem, appendToBody);

	          var targetElemStyle = $window.getComputedStyle(targetElem);
	          var adjustedSize = {
	            width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
	            height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
	          };

	          placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' :
	                         placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' :
	                         placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' :
	                         placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' :
	                         placement[0];

	          placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' :
	                         placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' :
	                         placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' :
	                         placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' :
	                         placement[1];

	          if (placement[1] === 'center') {
	            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	              var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
	              if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
	                placement[1] = 'left';
	              } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
	                placement[1] = 'right';
	              }
	            } else {
	              var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
	              if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
	                placement[1] = 'top';
	              } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
	                placement[1] = 'bottom';
	              }
	            }
	          }
	        }

	        switch (placement[0]) {
	          case 'top':
	            targetElemPos.top = hostElemPos.top - targetHeight;
	            break;
	          case 'bottom':
	            targetElemPos.top = hostElemPos.top + hostElemPos.height;
	            break;
	          case 'left':
	            targetElemPos.left = hostElemPos.left - targetWidth;
	            break;
	          case 'right':
	            targetElemPos.left = hostElemPos.left + hostElemPos.width;
	            break;
	        }

	        switch (placement[1]) {
	          case 'top':
	            targetElemPos.top = hostElemPos.top;
	            break;
	          case 'bottom':
	            targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
	            break;
	          case 'left':
	            targetElemPos.left = hostElemPos.left;
	            break;
	          case 'right':
	            targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
	            break;
	          case 'center':
	            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	              targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
	            } else {
	              targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
	            }
	            break;
	        }

	        targetElemPos.top = Math.round(targetElemPos.top);
	        targetElemPos.left = Math.round(targetElemPos.left);
	        targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];

	        return targetElemPos;
	      },

	      /**
	      * Provides a way for positioning tooltip & dropdown
	      * arrows when using placement options beyond the standard
	      * left, right, top, or bottom.
	      *
	      * @param {element} elem - The tooltip/dropdown element.
	      * @param {string} placement - The placement for the elem.
	      */
	      positionArrow: function(elem, placement) {
	        elem = this.getRawNode(elem);

	        var innerElem = elem.querySelector('.tooltip-inner, .popover-inner');
	        if (!innerElem) {
	          return;
	        }

	        var isTooltip = angular.element(innerElem).hasClass('tooltip-inner');

	        var arrowElem = isTooltip ? elem.querySelector('.tooltip-arrow') : elem.querySelector('.arrow');
	        if (!arrowElem) {
	          return;
	        }

	        var arrowCss = {
	          top: '',
	          bottom: '',
	          left: '',
	          right: ''
	        };

	        placement = this.parsePlacement(placement);
	        if (placement[1] === 'center') {
	          // no adjustment necessary - just reset styles
	          angular.element(arrowElem).css(arrowCss);
	          return;
	        }

	        var borderProp = 'border-' + placement[0] + '-width';
	        var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];

	        var borderRadiusProp = 'border-';
	        if (PLACEMENT_REGEX.vertical.test(placement[0])) {
	          borderRadiusProp += placement[0] + '-' + placement[1];
	        } else {
	          borderRadiusProp += placement[1] + '-' + placement[0];
	        }
	        borderRadiusProp += '-radius';
	        var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];

	        switch (placement[0]) {
	          case 'top':
	            arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
	            break;
	          case 'bottom':
	            arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
	            break;
	          case 'left':
	            arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
	            break;
	          case 'right':
	            arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
	            break;
	        }

	        arrowCss[placement[1]] = borderRadius;

	        angular.element(arrowElem).css(arrowCss);
	      }
	    };
	  }]);

	angular.module('ui.bootstrap.datepickerPopup', ['ui.bootstrap.datepicker', 'ui.bootstrap.position'])

	.value('$datepickerPopupLiteralWarning', true)

	.constant('uibDatepickerPopupConfig', {
	  altInputFormats: [],
	  appendToBody: false,
	  clearText: 'Clear',
	  closeOnDateSelection: true,
	  closeText: 'Done',
	  currentText: 'Today',
	  datepickerPopup: 'yyyy-MM-dd',
	  datepickerPopupTemplateUrl: 'uib/template/datepickerPopup/popup.html',
	  datepickerTemplateUrl: 'uib/template/datepicker/datepicker.html',
	  html5Types: {
	    date: 'yyyy-MM-dd',
	    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
	    'month': 'yyyy-MM'
	  },
	  onOpenFocus: true,
	  showButtonBar: true,
	  placement: 'auto bottom-left'
	})

	.controller('UibDatepickerPopupController', ['$scope', '$element', '$attrs', '$compile', '$log', '$parse', '$window', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibDatepickerPopupConfig', '$timeout', 'uibDatepickerConfig', '$datepickerPopupLiteralWarning',
	function($scope, $element, $attrs, $compile, $log, $parse, $window, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout, datepickerConfig, $datepickerPopupLiteralWarning) {
	  var cache = {},
	    isHtml5DateInput = false;
	  var dateFormat, closeOnDateSelection, appendToBody, onOpenFocus,
	    datepickerPopupTemplateUrl, datepickerTemplateUrl, popupEl, datepickerEl, scrollParentEl,
	    ngModel, ngModelOptions, $popup, altInputFormats, watchListeners = [],
	    timezone;

	  this.init = function(_ngModel_) {
	    ngModel = _ngModel_;
	    ngModelOptions = _ngModel_.$options;
	    closeOnDateSelection = angular.isDefined($attrs.closeOnDateSelection) ?
	      $scope.$parent.$eval($attrs.closeOnDateSelection) :
	      datepickerPopupConfig.closeOnDateSelection;
	    appendToBody = angular.isDefined($attrs.datepickerAppendToBody) ?
	      $scope.$parent.$eval($attrs.datepickerAppendToBody) :
	      datepickerPopupConfig.appendToBody;
	    onOpenFocus = angular.isDefined($attrs.onOpenFocus) ?
	      $scope.$parent.$eval($attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus;
	    datepickerPopupTemplateUrl = angular.isDefined($attrs.datepickerPopupTemplateUrl) ?
	      $attrs.datepickerPopupTemplateUrl :
	      datepickerPopupConfig.datepickerPopupTemplateUrl;
	    datepickerTemplateUrl = angular.isDefined($attrs.datepickerTemplateUrl) ?
	      $attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl;
	    altInputFormats = angular.isDefined($attrs.altInputFormats) ?
	      $scope.$parent.$eval($attrs.altInputFormats) :
	      datepickerPopupConfig.altInputFormats;

	    $scope.showButtonBar = angular.isDefined($attrs.showButtonBar) ?
	      $scope.$parent.$eval($attrs.showButtonBar) :
	      datepickerPopupConfig.showButtonBar;

	    if (datepickerPopupConfig.html5Types[$attrs.type]) {
	      dateFormat = datepickerPopupConfig.html5Types[$attrs.type];
	      isHtml5DateInput = true;
	    } else {
	      dateFormat = $attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup;
	      $attrs.$observe('uibDatepickerPopup', function(value, oldValue) {
	        var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
	        // Invalidate the $modelValue to ensure that formatters re-run
	        // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
	        if (newDateFormat !== dateFormat) {
	          dateFormat = newDateFormat;
	          ngModel.$modelValue = null;

	          if (!dateFormat) {
	            throw new Error('uibDatepickerPopup must have a date format specified.');
	          }
	        }
	      });
	    }

	    if (!dateFormat) {
	      throw new Error('uibDatepickerPopup must have a date format specified.');
	    }

	    if (isHtml5DateInput && $attrs.uibDatepickerPopup) {
	      throw new Error('HTML5 date input types do not support custom formats.');
	    }

	    // popup element used to display calendar
	    popupEl = angular.element('<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>');
	    if (ngModelOptions) {
	      timezone = ngModelOptions.timezone;
	      $scope.ngModelOptions = angular.copy(ngModelOptions);
	      $scope.ngModelOptions.timezone = null;
	      if ($scope.ngModelOptions.updateOnDefault === true) {
	        $scope.ngModelOptions.updateOn = $scope.ngModelOptions.updateOn ?
	          $scope.ngModelOptions.updateOn + ' default' : 'default';
	      }

	      popupEl.attr('ng-model-options', 'ngModelOptions');
	    } else {
	      timezone = null;
	    }

	    popupEl.attr({
	      'ng-model': 'date',
	      'ng-change': 'dateSelection(date)',
	      'template-url': datepickerPopupTemplateUrl
	    });

	    // datepicker element
	    datepickerEl = angular.element(popupEl.children()[0]);
	    datepickerEl.attr('template-url', datepickerTemplateUrl);

	    if (!$scope.datepickerOptions) {
	      $scope.datepickerOptions = {};
	    }

	    if (isHtml5DateInput) {
	      if ($attrs.type === 'month') {
	        $scope.datepickerOptions.datepickerMode = 'month';
	        $scope.datepickerOptions.minMode = 'month';
	      }
	    }

	    datepickerEl.attr('datepicker-options', 'datepickerOptions');

	    if (!isHtml5DateInput) {
	      // Internal API to maintain the correct ng-invalid-[key] class
	      ngModel.$$parserName = 'date';
	      ngModel.$validators.date = validator;
	      ngModel.$parsers.unshift(parseDate);
	      ngModel.$formatters.push(function(value) {
	        if (ngModel.$isEmpty(value)) {
	          $scope.date = value;
	          return value;
	        }

	        $scope.date = dateParser.fromTimezone(value, timezone);

	        if (angular.isNumber($scope.date)) {
	          $scope.date = new Date($scope.date);
	        }

	        return dateParser.filter($scope.date, dateFormat);
	      });
	    } else {
	      ngModel.$formatters.push(function(value) {
	        $scope.date = dateParser.fromTimezone(value, timezone);
	        return value;
	      });
	    }

	    // Detect changes in the view from the text box
	    ngModel.$viewChangeListeners.push(function() {
	      $scope.date = parseDateString(ngModel.$viewValue);
	    });

	    $element.on('keydown', inputKeydownBind);

	    $popup = $compile(popupEl)($scope);
	    // Prevent jQuery cache memory leak (template is now redundant after linking)
	    popupEl.remove();

	    if (appendToBody) {
	      $document.find('body').append($popup);
	    } else {
	      $element.after($popup);
	    }

	    $scope.$on('$destroy', function() {
	      if ($scope.isOpen === true) {
	        if (!$rootScope.$$phase) {
	          $scope.$apply(function() {
	            $scope.isOpen = false;
	          });
	        }
	      }

	      $popup.remove();
	      $element.off('keydown', inputKeydownBind);
	      $document.off('click', documentClickBind);
	      if (scrollParentEl) {
	        scrollParentEl.off('scroll', positionPopup);
	      }
	      angular.element($window).off('resize', positionPopup);

	      //Clear all watch listeners on destroy
	      while (watchListeners.length) {
	        watchListeners.shift()();
	      }
	    });
	  };

	  $scope.getText = function(key) {
	    return $scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
	  };

	  $scope.isDisabled = function(date) {
	    if (date === 'today') {
	      date = dateParser.fromTimezone(new Date(), timezone);
	    }

	    var dates = {};
	    angular.forEach(['minDate', 'maxDate'], function(key) {
	      if ($scope.datepickerOptions[key] === null) {
	        dates[key] = null;
	      } else if (angular.isDate($scope.datepickerOptions[key])) {
	        dates[key] = dateParser.fromTimezone(new Date($scope.datepickerOptions[key]), timezone);
	      } else {
	        if ($datepickerPopupLiteralWarning) {
	          $log.warn('Literal date support has been deprecated, please switch to date object usage');
	        }

	        dates[key] = new Date(dateFilter($scope.datepickerOptions[key], 'medium'));
	      }
	    });

	    return $scope.datepickerOptions &&
	      dates.minDate && $scope.compare(date, dates.minDate) < 0 ||
	      dates.maxDate && $scope.compare(date, dates.maxDate) > 0;
	  };

	  $scope.compare = function(date1, date2) {
	    return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
	  };

	  // Inner change
	  $scope.dateSelection = function(dt) {
	    if (angular.isDefined(dt)) {
	      $scope.date = dt;
	    }
	    var date = $scope.date ? dateParser.filter($scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
	    $element.val(date);
	    ngModel.$setViewValue(date);

	    if (closeOnDateSelection) {
	      $scope.isOpen = false;
	      $element[0].focus();
	    }
	  };

	  $scope.keydown = function(evt) {
	    if (evt.which === 27) {
	      evt.stopPropagation();
	      $scope.isOpen = false;
	      $element[0].focus();
	    }
	  };

	  $scope.select = function(date, evt) {
	    evt.stopPropagation();

	    if (date === 'today') {
	      var today = new Date();
	      if (angular.isDate($scope.date)) {
	        date = new Date($scope.date);
	        date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
	      } else {
	        date = new Date(today.setHours(0, 0, 0, 0));
	      }
	    }
	    $scope.dateSelection(date);
	  };

	  $scope.close = function(evt) {
	    evt.stopPropagation();

	    $scope.isOpen = false;
	    $element[0].focus();
	  };

	  $scope.disabled = angular.isDefined($attrs.disabled) || false;
	  if ($attrs.ngDisabled) {
	    watchListeners.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(disabled) {
	      $scope.disabled = disabled;
	    }));
	  }

	  $scope.$watch('isOpen', function(value) {
	    if (value) {
	      if (!$scope.disabled) {
	        $timeout(function() {
	          positionPopup();

	          if (onOpenFocus) {
	            $scope.$broadcast('uib:datepicker.focus');
	          }

	          $document.on('click', documentClickBind);

	          var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
	          if (appendToBody || $position.parsePlacement(placement)[2]) {
	            scrollParentEl = scrollParentEl || angular.element($position.scrollParent($element));
	            if (scrollParentEl) {
	              scrollParentEl.on('scroll', positionPopup);
	            }
	          } else {
	            scrollParentEl = null;
	          }

	          angular.element($window).on('resize', positionPopup);
	        }, 0, false);
	      } else {
	        $scope.isOpen = false;
	      }
	    } else {
	      $document.off('click', documentClickBind);
	      if (scrollParentEl) {
	        scrollParentEl.off('scroll', positionPopup);
	      }
	      angular.element($window).off('resize', positionPopup);
	    }
	  });

	  function cameltoDash(string) {
	    return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
	  }

	  function parseDateString(viewValue) {
	    var date = dateParser.parse(viewValue, dateFormat, $scope.date);
	    if (isNaN(date)) {
	      for (var i = 0; i < altInputFormats.length; i++) {
	        date = dateParser.parse(viewValue, altInputFormats[i], $scope.date);
	        if (!isNaN(date)) {
	          return date;
	        }
	      }
	    }
	    return date;
	  }

	  function parseDate(viewValue) {
	    if (angular.isNumber(viewValue)) {
	      // presumably timestamp to date object
	      viewValue = new Date(viewValue);
	    }

	    if (!viewValue) {
	      return null;
	    }

	    if (angular.isDate(viewValue) && !isNaN(viewValue)) {
	      return viewValue;
	    }

	    if (angular.isString(viewValue)) {
	      var date = parseDateString(viewValue);
	      if (!isNaN(date)) {
	        return dateParser.toTimezone(date, timezone);
	      }
	    }

	    return ngModel.$options && ngModel.$options.allowInvalid ? viewValue : undefined;
	  }

	  function validator(modelValue, viewValue) {
	    var value = modelValue || viewValue;

	    if (!$attrs.ngRequired && !value) {
	      return true;
	    }

	    if (angular.isNumber(value)) {
	      value = new Date(value);
	    }

	    if (!value) {
	      return true;
	    }

	    if (angular.isDate(value) && !isNaN(value)) {
	      return true;
	    }

	    if (angular.isString(value)) {
	      return !isNaN(parseDateString(viewValue));
	    }

	    return false;
	  }

	  function documentClickBind(event) {
	    if (!$scope.isOpen && $scope.disabled) {
	      return;
	    }

	    var popup = $popup[0];
	    var dpContainsTarget = $element[0].contains(event.target);
	    // The popup node may not be an element node
	    // In some browsers (IE) only element nodes have the 'contains' function
	    var popupContainsTarget = popup.contains !== undefined && popup.contains(event.target);
	    if ($scope.isOpen && !(dpContainsTarget || popupContainsTarget)) {
	      $scope.$apply(function() {
	        $scope.isOpen = false;
	      });
	    }
	  }

	  function inputKeydownBind(evt) {
	    if (evt.which === 27 && $scope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.$apply(function() {
	        $scope.isOpen = false;
	      });
	      $element[0].focus();
	    } else if (evt.which === 40 && !$scope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.$apply(function() {
	        $scope.isOpen = true;
	      });
	    }
	  }

	  function positionPopup() {
	    if ($scope.isOpen) {
	      var dpElement = angular.element($popup[0].querySelector('.uib-datepicker-popup'));
	      var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
	      var position = $position.positionElements($element, dpElement, placement, appendToBody);
	      dpElement.css({top: position.top + 'px', left: position.left + 'px'});
	      if (dpElement.hasClass('uib-position-measure')) {
	        dpElement.removeClass('uib-position-measure');
	      }
	    }
	  }

	  $scope.$on('uib:datepicker.mode', function() {
	    $timeout(positionPopup, 0, false);
	  });
	}])

	.directive('uibDatepickerPopup', function() {
	  return {
	    require: ['ngModel', 'uibDatepickerPopup'],
	    controller: 'UibDatepickerPopupController',
	    scope: {
	      datepickerOptions: '=?',
	      isOpen: '=?',
	      currentText: '@',
	      clearText: '@',
	      closeText: '@'
	    },
	    link: function(scope, element, attrs, ctrls) {
	      var ngModel = ctrls[0],
	        ctrl = ctrls[1];

	      ctrl.init(ngModel);
	    }
	  };
	})

	.directive('uibDatepickerPopupWrap', function() {
	  return {
	    replace: true,
	    transclude: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/datepickerPopup/popup.html';
	    }
	  };
	});

	angular.module('ui.bootstrap.debounce', [])
	/**
	 * A helper, internal service that debounces a function
	 */
	  .factory('$$debounce', ['$timeout', function($timeout) {
	    return function(callback, debounceTime) {
	      var timeoutPromise;

	      return function() {
	        var self = this;
	        var args = Array.prototype.slice.call(arguments);
	        if (timeoutPromise) {
	          $timeout.cancel(timeoutPromise);
	        }

	        timeoutPromise = $timeout(function() {
	          callback.apply(self, args);
	        }, debounceTime);
	      };
	    };
	  }]);

	angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position'])

	.constant('uibDropdownConfig', {
	  appendToOpenClass: 'uib-dropdown-open',
	  openClass: 'open'
	})

	.service('uibDropdownService', ['$document', '$rootScope', function($document, $rootScope) {
	  var openScope = null;

	  this.open = function(dropdownScope) {
	    if (!openScope) {
	      $document.on('click', closeDropdown);
	      $document.on('keydown', keybindFilter);
	    }

	    if (openScope && openScope !== dropdownScope) {
	      openScope.isOpen = false;
	    }

	    openScope = dropdownScope;
	  };

	  this.close = function(dropdownScope) {
	    if (openScope === dropdownScope) {
	      openScope = null;
	      $document.off('click', closeDropdown);
	      $document.off('keydown', keybindFilter);
	    }
	  };

	  var closeDropdown = function(evt) {
	    // This method may still be called during the same mouse event that
	    // unbound this event handler. So check openScope before proceeding.
	    if (!openScope) { return; }

	    if (evt && openScope.getAutoClose() === 'disabled') { return; }

	    if (evt && evt.which === 3) { return; }

	    var toggleElement = openScope.getToggleElement();
	    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
	      return;
	    }

	    var dropdownElement = openScope.getDropdownElement();
	    if (evt && openScope.getAutoClose() === 'outsideClick' &&
	      dropdownElement && dropdownElement[0].contains(evt.target)) {
	      return;
	    }

	    openScope.isOpen = false;

	    if (!$rootScope.$$phase) {
	      openScope.$apply();
	    }
	  };

	  var keybindFilter = function(evt) {
	    if (evt.which === 27) {
	      openScope.focusToggleElement();
	      closeDropdown();
	    } else if (openScope.isKeynavEnabled() && [38, 40].indexOf(evt.which) !== -1 && openScope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      openScope.focusDropdownEntry(evt.which);
	    }
	  };
	}])

	.controller('UibDropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
	  var self = this,
	    scope = $scope.$new(), // create a child scope so we are not polluting original one
	    templateScope,
	    appendToOpenClass = dropdownConfig.appendToOpenClass,
	    openClass = dropdownConfig.openClass,
	    getIsOpen,
	    setIsOpen = angular.noop,
	    toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
	    appendToBody = false,
	    appendTo = null,
	    keynavEnabled = false,
	    selectedOption = null,
	    body = $document.find('body');

	  $element.addClass('dropdown');

	  this.init = function() {
	    if ($attrs.isOpen) {
	      getIsOpen = $parse($attrs.isOpen);
	      setIsOpen = getIsOpen.assign;

	      $scope.$watch(getIsOpen, function(value) {
	        scope.isOpen = !!value;
	      });
	    }

	    if (angular.isDefined($attrs.dropdownAppendTo)) {
	      var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
	      if (appendToEl) {
	        appendTo = angular.element(appendToEl);
	      }
	    }

	    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);
	    keynavEnabled = angular.isDefined($attrs.keyboardNav);

	    if (appendToBody && !appendTo) {
	      appendTo = body;
	    }

	    if (appendTo && self.dropdownMenu) {
	      appendTo.append(self.dropdownMenu);
	      $element.on('$destroy', function handleDestroyEvent() {
	        self.dropdownMenu.remove();
	      });
	    }
	  };

	  this.toggle = function(open) {
	    scope.isOpen = arguments.length ? !!open : !scope.isOpen;
	    if (angular.isFunction(setIsOpen)) {
	      setIsOpen(scope, scope.isOpen);
	    }

	    return scope.isOpen;
	  };

	  // Allow other directives to watch status
	  this.isOpen = function() {
	    return scope.isOpen;
	  };

	  scope.getToggleElement = function() {
	    return self.toggleElement;
	  };

	  scope.getAutoClose = function() {
	    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
	  };

	  scope.getElement = function() {
	    return $element;
	  };

	  scope.isKeynavEnabled = function() {
	    return keynavEnabled;
	  };

	  scope.focusDropdownEntry = function(keyCode) {
	    var elems = self.dropdownMenu ? //If append to body is used.
	      angular.element(self.dropdownMenu).find('a') :
	      $element.find('ul').eq(0).find('a');

	    switch (keyCode) {
	      case 40: {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = 0;
	        } else {
	          self.selectedOption = self.selectedOption === elems.length - 1 ?
	            self.selectedOption :
	            self.selectedOption + 1;
	        }
	        break;
	      }
	      case 38: {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = elems.length - 1;
	        } else {
	          self.selectedOption = self.selectedOption === 0 ?
	            0 : self.selectedOption - 1;
	        }
	        break;
	      }
	    }
	    elems[self.selectedOption].focus();
	  };

	  scope.getDropdownElement = function() {
	    return self.dropdownMenu;
	  };

	  scope.focusToggleElement = function() {
	    if (self.toggleElement) {
	      self.toggleElement[0].focus();
	    }
	  };

	  scope.$watch('isOpen', function(isOpen, wasOpen) {
	    if (appendTo && self.dropdownMenu) {
	      var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true),
	        css,
	        rightalign;

	      css = {
	        top: pos.top + 'px',
	        display: isOpen ? 'block' : 'none'
	      };

	      rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
	      if (!rightalign) {
	        css.left = pos.left + 'px';
	        css.right = 'auto';
	      } else {
	        css.left = 'auto';
	        css.right = window.innerWidth -
	          (pos.left + $element.prop('offsetWidth')) + 'px';
	      }

	      // Need to adjust our positioning to be relative to the appendTo container
	      // if it's not the body element
	      if (!appendToBody) {
	        var appendOffset = $position.offset(appendTo);

	        css.top = pos.top - appendOffset.top + 'px';

	        if (!rightalign) {
	          css.left = pos.left - appendOffset.left + 'px';
	        } else {
	          css.right = window.innerWidth -
	            (pos.left - appendOffset.left + $element.prop('offsetWidth')) + 'px';
	        }
	      }

	      self.dropdownMenu.css(css);
	    }

	    var openContainer = appendTo ? appendTo : $element;
	    var hasOpenClass = openContainer.hasClass(appendTo ? appendToOpenClass : openClass);

	    if (hasOpenClass === !isOpen) {
	      $animate[isOpen ? 'addClass' : 'removeClass'](openContainer, appendTo ? appendToOpenClass : openClass).then(function() {
	        if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
	          toggleInvoker($scope, { open: !!isOpen });
	        }
	      });
	    }

	    if (isOpen) {
	      if (self.dropdownMenuTemplateUrl) {
	        $templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
	          templateScope = scope.$new();
	          $compile(tplContent.trim())(templateScope, function(dropdownElement) {
	            var newEl = dropdownElement;
	            self.dropdownMenu.replaceWith(newEl);
	            self.dropdownMenu = newEl;
	          });
	        });
	      }

	      scope.focusToggleElement();
	      uibDropdownService.open(scope);
	    } else {
	      if (self.dropdownMenuTemplateUrl) {
	        if (templateScope) {
	          templateScope.$destroy();
	        }
	        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
	        self.dropdownMenu.replaceWith(newEl);
	        self.dropdownMenu = newEl;
	      }

	      uibDropdownService.close(scope);
	      self.selectedOption = null;
	    }

	    if (angular.isFunction(setIsOpen)) {
	      setIsOpen($scope, isOpen);
	    }
	  });
	}])

	.directive('uibDropdown', function() {
	  return {
	    controller: 'UibDropdownController',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      dropdownCtrl.init();
	    }
	  };
	})

	.directive('uibDropdownMenu', function() {
	  return {
	    restrict: 'A',
	    require: '?^uibDropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
	        return;
	      }

	      element.addClass('dropdown-menu');

	      var tplUrl = attrs.templateUrl;
	      if (tplUrl) {
	        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
	      }

	      if (!dropdownCtrl.dropdownMenu) {
	        dropdownCtrl.dropdownMenu = element;
	      }
	    }
	  };
	})

	.directive('uibDropdownToggle', function() {
	  return {
	    require: '?^uibDropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl) {
	        return;
	      }

	      element.addClass('dropdown-toggle');

	      dropdownCtrl.toggleElement = element;

	      var toggleDropdown = function(event) {
	        event.preventDefault();

	        if (!element.hasClass('disabled') && !attrs.disabled) {
	          scope.$apply(function() {
	            dropdownCtrl.toggle();
	          });
	        }
	      };

	      element.bind('click', toggleDropdown);

	      // WAI-ARIA
	      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
	      scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
	        element.attr('aria-expanded', !!isOpen);
	      });

	      scope.$on('$destroy', function() {
	        element.unbind('click', toggleDropdown);
	      });
	    }
	  };
	});

	angular.module('ui.bootstrap.stackedMap', [])
	/**
	 * A helper, internal data structure that acts as a map but also allows getting / removing
	 * elements in the LIFO order
	 */
	  .factory('$$stackedMap', function() {
	    return {
	      createNew: function() {
	        var stack = [];

	        return {
	          add: function(key, value) {
	            stack.push({
	              key: key,
	              value: value
	            });
	          },
	          get: function(key) {
	            for (var i = 0; i < stack.length; i++) {
	              if (key === stack[i].key) {
	                return stack[i];
	              }
	            }
	          },
	          keys: function() {
	            var keys = [];
	            for (var i = 0; i < stack.length; i++) {
	              keys.push(stack[i].key);
	            }
	            return keys;
	          },
	          top: function() {
	            return stack[stack.length - 1];
	          },
	          remove: function(key) {
	            var idx = -1;
	            for (var i = 0; i < stack.length; i++) {
	              if (key === stack[i].key) {
	                idx = i;
	                break;
	              }
	            }
	            return stack.splice(idx, 1)[0];
	          },
	          removeTop: function() {
	            return stack.splice(stack.length - 1, 1)[0];
	          },
	          length: function() {
	            return stack.length;
	          }
	        };
	      }
	    };
	  });
	angular.module('ui.bootstrap.modal', ['ui.bootstrap.stackedMap', 'ui.bootstrap.position'])
	/**
	 * A helper, internal data structure that stores all references attached to key
	 */
	  .factory('$$multiMap', function() {
	    return {
	      createNew: function() {
	        var map = {};

	        return {
	          entries: function() {
	            return Object.keys(map).map(function(key) {
	              return {
	                key: key,
	                value: map[key]
	              };
	            });
	          },
	          get: function(key) {
	            return map[key];
	          },
	          hasKey: function(key) {
	            return !!map[key];
	          },
	          keys: function() {
	            return Object.keys(map);
	          },
	          put: function(key, value) {
	            if (!map[key]) {
	              map[key] = [];
	            }

	            map[key].push(value);
	          },
	          remove: function(key, value) {
	            var values = map[key];

	            if (!values) {
	              return;
	            }

	            var idx = values.indexOf(value);

	            if (idx !== -1) {
	              values.splice(idx, 1);
	            }

	            if (!values.length) {
	              delete map[key];
	            }
	          }
	        };
	      }
	    };
	  })

	/**
	 * Pluggable resolve mechanism for the modal resolve resolution
	 * Supports UI Router's $resolve service
	 */
	  .provider('$uibResolve', function() {
	    var resolve = this;
	    this.resolver = null;

	    this.setResolver = function(resolver) {
	      this.resolver = resolver;
	    };

	    this.$get = ['$injector', '$q', function($injector, $q) {
	      var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
	      return {
	        resolve: function(invocables, locals, parent, self) {
	          if (resolver) {
	            return resolver.resolve(invocables, locals, parent, self);
	          }

	          var promises = [];

	          angular.forEach(invocables, function(value) {
	            if (angular.isFunction(value) || angular.isArray(value)) {
	              promises.push($q.resolve($injector.invoke(value)));
	            } else if (angular.isString(value)) {
	              promises.push($q.resolve($injector.get(value)));
	            } else {
	              promises.push($q.resolve(value));
	            }
	          });

	          return $q.all(promises).then(function(resolves) {
	            var resolveObj = {};
	            var resolveIter = 0;
	            angular.forEach(invocables, function(value, key) {
	              resolveObj[key] = resolves[resolveIter++];
	            });

	            return resolveObj;
	          });
	        }
	      };
	    }];
	  })

	/**
	 * A helper directive for the $modal service. It creates a backdrop element.
	 */
	  .directive('uibModalBackdrop', ['$animate', '$injector', '$uibModalStack',
	  function($animate, $injector, $modalStack) {
	    return {
	      replace: true,
	      templateUrl: 'uib/template/modal/backdrop.html',
	      compile: function(tElement, tAttrs) {
	        tElement.addClass(tAttrs.backdropClass);
	        return linkFn;
	      }
	    };

	    function linkFn(scope, element, attrs) {
	      if (attrs.modalInClass) {
	        $animate.addClass(element, attrs.modalInClass);

	        scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	          var done = setIsAsync();
	          if (scope.modalOptions.animation) {
	            $animate.removeClass(element, attrs.modalInClass).then(done);
	          } else {
	            done();
	          }
	        });
	      }
	    }
	  }])

	  .directive('uibModalWindow', ['$uibModalStack', '$q', '$animateCss', '$document',
	  function($modalStack, $q, $animateCss, $document) {
	    return {
	      scope: {
	        index: '@'
	      },
	      replace: true,
	      transclude: true,
	      templateUrl: function(tElement, tAttrs) {
	        return tAttrs.templateUrl || 'uib/template/modal/window.html';
	      },
	      link: function(scope, element, attrs) {
	        element.addClass(attrs.windowClass || '');
	        element.addClass(attrs.windowTopClass || '');
	        scope.size = attrs.size;

	        scope.close = function(evt) {
	          var modal = $modalStack.getTop();
	          if (modal && modal.value.backdrop &&
	            modal.value.backdrop !== 'static' &&
	            evt.target === evt.currentTarget) {
	            evt.preventDefault();
	            evt.stopPropagation();
	            $modalStack.dismiss(modal.key, 'backdrop click');
	          }
	        };

	        // moved from template to fix issue #2280
	        element.on('click', scope.close);

	        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
	        // We can detect that by using this property in the template associated with this directive and then use
	        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
	        scope.$isRendered = true;

	        // Deferred object that will be resolved when this modal is render.
	        var modalRenderDeferObj = $q.defer();
	        // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
	        // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
	        attrs.$observe('modalRender', function(value) {
	          if (value === 'true') {
	            modalRenderDeferObj.resolve();
	          }
	        });

	        modalRenderDeferObj.promise.then(function() {
	          var animationPromise = null;

	          if (attrs.modalInClass) {
	            animationPromise = $animateCss(element, {
	              addClass: attrs.modalInClass
	            }).start();

	            scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	              var done = setIsAsync();
	              $animateCss(element, {
	                removeClass: attrs.modalInClass
	              }).start().then(done);
	            });
	          }


	          $q.when(animationPromise).then(function() {
	            // Notify {@link $modalStack} that modal is rendered.
	            var modal = $modalStack.getTop();
	            if (modal) {
	              $modalStack.modalRendered(modal.key);
	            }

	            /**
	             * If something within the freshly-opened modal already has focus (perhaps via a
	             * directive that causes focus). then no need to try and focus anything.
	             */
	            if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
	              var inputWithAutofocus = element[0].querySelector('[autofocus]');
	              /**
	               * Auto-focusing of a freshly-opened modal element causes any child elements
	               * with the autofocus attribute to lose focus. This is an issue on touch
	               * based devices which will show and then hide the onscreen keyboard.
	               * Attempts to refocus the autofocus element via JavaScript will not reopen
	               * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
	               * the modal element if the modal does not contain an autofocus element.
	               */
	              if (inputWithAutofocus) {
	                inputWithAutofocus.focus();
	              } else {
	                element[0].focus();
	              }
	            }
	          });
	        });
	      }
	    };
	  }])

	  .directive('uibModalAnimationClass', function() {
	    return {
	      compile: function(tElement, tAttrs) {
	        if (tAttrs.modalAnimation) {
	          tElement.addClass(tAttrs.uibModalAnimationClass);
	        }
	      }
	    };
	  })

	  .directive('uibModalTransclude', function() {
	    return {
	      link: function(scope, element, attrs, controller, transclude) {
	        transclude(scope.$parent, function(clone) {
	          element.empty();
	          element.append(clone);
	        });
	      }
	    };
	  })

	  .factory('$uibModalStack', ['$animate', '$animateCss', '$document',
	    '$compile', '$rootScope', '$q', '$$multiMap', '$$stackedMap', '$uibPosition',
	    function($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap, $uibPosition) {
	      var OPENED_MODAL_CLASS = 'modal-open';

	      var backdropDomEl, backdropScope;
	      var openedWindows = $$stackedMap.createNew();
	      var openedClasses = $$multiMap.createNew();
	      var $modalStack = {
	        NOW_CLOSING_EVENT: 'modal.stack.now-closing'
	      };
	      var topModalIndex = 0;
	      var previousTopOpenedModal = null;

	      //Modal focus behavior
	      var tabableSelector = 'a[href], area[href], input:not([disabled]), ' +
	        'button:not([disabled]),select:not([disabled]), textarea:not([disabled]), ' +
	        'iframe, object, embed, *[tabindex], *[contenteditable=true]';
	      var scrollbarPadding;

	      function isVisible(element) {
	        return !!(element.offsetWidth ||
	          element.offsetHeight ||
	          element.getClientRects().length);
	      }

	      function backdropIndex() {
	        var topBackdropIndex = -1;
	        var opened = openedWindows.keys();
	        for (var i = 0; i < opened.length; i++) {
	          if (openedWindows.get(opened[i]).value.backdrop) {
	            topBackdropIndex = i;
	          }
	        }

	        // If any backdrop exist, ensure that it's index is always
	        // right below the top modal
	        if (topBackdropIndex > -1 && topBackdropIndex < topModalIndex) {
	          topBackdropIndex = topModalIndex;
	        }
	        return topBackdropIndex;
	      }

	      $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
	        if (backdropScope) {
	          backdropScope.index = newBackdropIndex;
	        }
	      });

	      function removeModalWindow(modalInstance, elementToReceiveFocus) {
	        var modalWindow = openedWindows.get(modalInstance).value;
	        var appendToElement = modalWindow.appendTo;

	        //clean up the stack
	        openedWindows.remove(modalInstance);
	        previousTopOpenedModal = openedWindows.top();
	        if (previousTopOpenedModal) {
	          topModalIndex = parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10);
	        }

	        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
	          var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
	          openedClasses.remove(modalBodyClass, modalInstance);
	          appendToElement.toggleClass(modalBodyClass, openedClasses.hasKey(modalBodyClass));
	          if (scrollbarPadding && scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
	            if (scrollbarPadding.originalRight) {
	              appendToElement.css({paddingRight: scrollbarPadding.originalRight + 'px'});
	            } else {
	              appendToElement.css({paddingRight: ''});
	            }
	            scrollbarPadding = null;
	          }
	          toggleTopWindowClass(true);
	        }, modalWindow.closedDeferred);
	        checkRemoveBackdrop();

	        //move focus to specified element if available, or else to body
	        if (elementToReceiveFocus && elementToReceiveFocus.focus) {
	          elementToReceiveFocus.focus();
	        } else if (appendToElement.focus) {
	          appendToElement.focus();
	        }
	      }

	      // Add or remove "windowTopClass" from the top window in the stack
	      function toggleTopWindowClass(toggleSwitch) {
	        var modalWindow;

	        if (openedWindows.length() > 0) {
	          modalWindow = openedWindows.top().value;
	          modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
	        }
	      }

	      function checkRemoveBackdrop() {
	        //remove backdrop if no longer needed
	        if (backdropDomEl && backdropIndex() === -1) {
	          var backdropScopeRef = backdropScope;
	          removeAfterAnimate(backdropDomEl, backdropScope, function() {
	            backdropScopeRef = null;
	          });
	          backdropDomEl = undefined;
	          backdropScope = undefined;
	        }
	      }

	      function removeAfterAnimate(domEl, scope, done, closedDeferred) {
	        var asyncDeferred;
	        var asyncPromise = null;
	        var setIsAsync = function() {
	          if (!asyncDeferred) {
	            asyncDeferred = $q.defer();
	            asyncPromise = asyncDeferred.promise;
	          }

	          return function asyncDone() {
	            asyncDeferred.resolve();
	          };
	        };
	        scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);

	        // Note that it's intentional that asyncPromise might be null.
	        // That's when setIsAsync has not been called during the
	        // NOW_CLOSING_EVENT broadcast.
	        return $q.when(asyncPromise).then(afterAnimating);

	        function afterAnimating() {
	          if (afterAnimating.done) {
	            return;
	          }
	          afterAnimating.done = true;

	          $animate.leave(domEl).then(function() {
	            domEl.remove();
	            if (closedDeferred) {
	              closedDeferred.resolve();
	            }
	          });

	          scope.$destroy();
	          if (done) {
	            done();
	          }
	        }
	      }

	      $document.on('keydown', keydownListener);

	      $rootScope.$on('$destroy', function() {
	        $document.off('keydown', keydownListener);
	      });

	      function keydownListener(evt) {
	        if (evt.isDefaultPrevented()) {
	          return evt;
	        }

	        var modal = openedWindows.top();
	        if (modal) {
	          switch (evt.which) {
	            case 27: {
	              if (modal.value.keyboard) {
	                evt.preventDefault();
	                $rootScope.$apply(function() {
	                  $modalStack.dismiss(modal.key, 'escape key press');
	                });
	              }
	              break;
	            }
	            case 9: {
	              var list = $modalStack.loadFocusElementList(modal);
	              var focusChanged = false;
	              if (evt.shiftKey) {
	                if ($modalStack.isFocusInFirstItem(evt, list) || $modalStack.isModalFocused(evt, modal)) {
	                  focusChanged = $modalStack.focusLastFocusableElement(list);
	                }
	              } else {
	                if ($modalStack.isFocusInLastItem(evt, list)) {
	                  focusChanged = $modalStack.focusFirstFocusableElement(list);
	                }
	              }

	              if (focusChanged) {
	                evt.preventDefault();
	                evt.stopPropagation();
	              }

	              break;
	            }
	          }
	        }
	      }

	      $modalStack.open = function(modalInstance, modal) {
	        var modalOpener = $document[0].activeElement,
	          modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;

	        toggleTopWindowClass(false);
	        
	        // Store the current top first, to determine what index we ought to use
	        // for the current top modal
	        previousTopOpenedModal = openedWindows.top();

	        openedWindows.add(modalInstance, {
	          deferred: modal.deferred,
	          renderDeferred: modal.renderDeferred,
	          closedDeferred: modal.closedDeferred,
	          modalScope: modal.scope,
	          backdrop: modal.backdrop,
	          keyboard: modal.keyboard,
	          openedClass: modal.openedClass,
	          windowTopClass: modal.windowTopClass,
	          animation: modal.animation,
	          appendTo: modal.appendTo
	        });

	        openedClasses.put(modalBodyClass, modalInstance);

	        var appendToElement = modal.appendTo,
	            currBackdropIndex = backdropIndex();

	        if (!appendToElement.length) {
	          throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
	        }

	        if (currBackdropIndex >= 0 && !backdropDomEl) {
	          backdropScope = $rootScope.$new(true);
	          backdropScope.modalOptions = modal;
	          backdropScope.index = currBackdropIndex;
	          backdropDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
	          backdropDomEl.attr('backdrop-class', modal.backdropClass);
	          if (modal.animation) {
	            backdropDomEl.attr('modal-animation', 'true');
	          }
	          $compile(backdropDomEl)(backdropScope);
	          $animate.enter(backdropDomEl, appendToElement);
	        }

	        // Set the top modal index based on the index of the previous top modal
	        topModalIndex = previousTopOpenedModal ? parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10) + 1 : 0;
	        var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
	        angularDomEl.attr({
	          'template-url': modal.windowTemplateUrl,
	          'window-class': modal.windowClass,
	          'window-top-class': modal.windowTopClass,
	          'size': modal.size,
	          'index': topModalIndex,
	          'animate': 'animate'
	        }).html(modal.content);
	        if (modal.animation) {
	          angularDomEl.attr('modal-animation', 'true');
	        }

	        scrollbarPadding = $uibPosition.scrollbarPadding(appendToElement);
	        if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
	          appendToElement.css({paddingRight: scrollbarPadding.right + 'px'});
	        }
	        appendToElement.addClass(modalBodyClass);
	        $animate.enter($compile(angularDomEl)(modal.scope), appendToElement);

	        openedWindows.top().value.modalDomEl = angularDomEl;
	        openedWindows.top().value.modalOpener = modalOpener;
	      };

	      function broadcastClosing(modalWindow, resultOrReason, closing) {
	        return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
	      }

	      $modalStack.close = function(modalInstance, result) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.resolve(result);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };

	      $modalStack.dismiss = function(modalInstance, reason) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.reject(reason);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };

	      $modalStack.dismissAll = function(reason) {
	        var topModal = this.getTop();
	        while (topModal && this.dismiss(topModal.key, reason)) {
	          topModal = this.getTop();
	        }
	      };

	      $modalStack.getTop = function() {
	        return openedWindows.top();
	      };

	      $modalStack.modalRendered = function(modalInstance) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow) {
	          modalWindow.value.renderDeferred.resolve();
	        }
	      };

	      $modalStack.focusFirstFocusableElement = function(list) {
	        if (list.length > 0) {
	          list[0].focus();
	          return true;
	        }
	        return false;
	      };

	      $modalStack.focusLastFocusableElement = function(list) {
	        if (list.length > 0) {
	          list[list.length - 1].focus();
	          return true;
	        }
	        return false;
	      };

	      $modalStack.isModalFocused = function(evt, modalWindow) {
	        if (evt && modalWindow) {
	          var modalDomEl = modalWindow.value.modalDomEl;
	          if (modalDomEl && modalDomEl.length) {
	            return (evt.target || evt.srcElement) === modalDomEl[0];
	          }
	        }
	        return false;
	      };

	      $modalStack.isFocusInFirstItem = function(evt, list) {
	        if (list.length > 0) {
	          return (evt.target || evt.srcElement) === list[0];
	        }
	        return false;
	      };

	      $modalStack.isFocusInLastItem = function(evt, list) {
	        if (list.length > 0) {
	          return (evt.target || evt.srcElement) === list[list.length - 1];
	        }
	        return false;
	      };

	      $modalStack.loadFocusElementList = function(modalWindow) {
	        if (modalWindow) {
	          var modalDomE1 = modalWindow.value.modalDomEl;
	          if (modalDomE1 && modalDomE1.length) {
	            var elements = modalDomE1[0].querySelectorAll(tabableSelector);
	            return elements ?
	              Array.prototype.filter.call(elements, function(element) {
	                return isVisible(element);
	              }) : elements;
	          }
	        }
	      };

	      return $modalStack;
	    }])

	  .provider('$uibModal', function() {
	    var $modalProvider = {
	      options: {
	        animation: true,
	        backdrop: true, //can also be false or 'static'
	        keyboard: true
	      },
	      $get: ['$rootScope', '$q', '$document', '$templateRequest', '$controller', '$uibResolve', '$uibModalStack',
	        function ($rootScope, $q, $document, $templateRequest, $controller, $uibResolve, $modalStack) {
	          var $modal = {};

	          function getTemplatePromise(options) {
	            return options.template ? $q.when(options.template) :
	              $templateRequest(angular.isFunction(options.templateUrl) ?
	                options.templateUrl() : options.templateUrl);
	          }

	          var promiseChain = null;
	          $modal.getPromiseChain = function() {
	            return promiseChain;
	          };

	          $modal.open = function(modalOptions) {
	            var modalResultDeferred = $q.defer();
	            var modalOpenedDeferred = $q.defer();
	            var modalClosedDeferred = $q.defer();
	            var modalRenderDeferred = $q.defer();

	            //prepare an instance of a modal to be injected into controllers and returned to a caller
	            var modalInstance = {
	              result: modalResultDeferred.promise,
	              opened: modalOpenedDeferred.promise,
	              closed: modalClosedDeferred.promise,
	              rendered: modalRenderDeferred.promise,
	              close: function (result) {
	                return $modalStack.close(modalInstance, result);
	              },
	              dismiss: function (reason) {
	                return $modalStack.dismiss(modalInstance, reason);
	              }
	            };

	            //merge and clean up options
	            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
	            modalOptions.resolve = modalOptions.resolve || {};
	            modalOptions.appendTo = modalOptions.appendTo || $document.find('body').eq(0);

	            //verify options
	            if (!modalOptions.template && !modalOptions.templateUrl) {
	              throw new Error('One of template or templateUrl options is required.');
	            }

	            var templateAndResolvePromise =
	              $q.all([getTemplatePromise(modalOptions), $uibResolve.resolve(modalOptions.resolve, {}, null, null)]);

	            function resolveWithTemplate() {
	              return templateAndResolvePromise;
	            }

	            // Wait for the resolution of the existing promise chain.
	            // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
	            // Then add to $modalStack and resolve opened.
	            // Finally clean up the chain variable if no subsequent modal has overwritten it.
	            var samePromise;
	            samePromise = promiseChain = $q.all([promiseChain])
	              .then(resolveWithTemplate, resolveWithTemplate)
	              .then(function resolveSuccess(tplAndVars) {
	                var providedScope = modalOptions.scope || $rootScope;

	                var modalScope = providedScope.$new();
	                modalScope.$close = modalInstance.close;
	                modalScope.$dismiss = modalInstance.dismiss;

	                modalScope.$on('$destroy', function() {
	                  if (!modalScope.$$uibDestructionScheduled) {
	                    modalScope.$dismiss('$uibUnscheduledDestruction');
	                  }
	                });

	                var ctrlInstance, ctrlInstantiate, ctrlLocals = {};

	                //controllers
	                if (modalOptions.controller) {
	                  ctrlLocals.$scope = modalScope;
	                  ctrlLocals.$uibModalInstance = modalInstance;
	                  angular.forEach(tplAndVars[1], function(value, key) {
	                    ctrlLocals[key] = value;
	                  });

	                  // the third param will make the controller instantiate later,private api
	                  // @see https://github.com/angular/angular.js/blob/master/src/ng/controller.js#L126
	                  ctrlInstantiate = $controller(modalOptions.controller, ctrlLocals, true);
	                  if (modalOptions.controllerAs) {
	                    ctrlInstance = ctrlInstantiate.instance;

	                    if (modalOptions.bindToController) {
	                      ctrlInstance.$close = modalScope.$close;
	                      ctrlInstance.$dismiss = modalScope.$dismiss;
	                      angular.extend(ctrlInstance, providedScope);
	                    }

	                    ctrlInstance = ctrlInstantiate();

	                    modalScope[modalOptions.controllerAs] = ctrlInstance;
	                  } else {
	                    ctrlInstance = ctrlInstantiate();
	                  }

	                  if (angular.isFunction(ctrlInstance.$onInit)) {
	                    ctrlInstance.$onInit();
	                  }
	                }

	                $modalStack.open(modalInstance, {
	                  scope: modalScope,
	                  deferred: modalResultDeferred,
	                  renderDeferred: modalRenderDeferred,
	                  closedDeferred: modalClosedDeferred,
	                  content: tplAndVars[0],
	                  animation: modalOptions.animation,
	                  backdrop: modalOptions.backdrop,
	                  keyboard: modalOptions.keyboard,
	                  backdropClass: modalOptions.backdropClass,
	                  windowTopClass: modalOptions.windowTopClass,
	                  windowClass: modalOptions.windowClass,
	                  windowTemplateUrl: modalOptions.windowTemplateUrl,
	                  size: modalOptions.size,
	                  openedClass: modalOptions.openedClass,
	                  appendTo: modalOptions.appendTo
	                });
	                modalOpenedDeferred.resolve(true);

	            }, function resolveError(reason) {
	              modalOpenedDeferred.reject(reason);
	              modalResultDeferred.reject(reason);
	            })['finally'](function() {
	              if (promiseChain === samePromise) {
	                promiseChain = null;
	              }
	            });

	            return modalInstance;
	          };

	          return $modal;
	        }
	      ]
	    };

	    return $modalProvider;
	  });

	angular.module('ui.bootstrap.paging', [])
	/**
	 * Helper internal service for generating common controller code between the
	 * pager and pagination components
	 */
	.factory('uibPaging', ['$parse', function($parse) {
	  return {
	    create: function(ctrl, $scope, $attrs) {
	      ctrl.setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
	      ctrl.ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl
	      ctrl._watchers = [];

	      ctrl.init = function(ngModelCtrl, config) {
	        ctrl.ngModelCtrl = ngModelCtrl;
	        ctrl.config = config;

	        ngModelCtrl.$render = function() {
	          ctrl.render();
	        };

	        if ($attrs.itemsPerPage) {
	          ctrl._watchers.push($scope.$parent.$watch($attrs.itemsPerPage, function(value) {
	            ctrl.itemsPerPage = parseInt(value, 10);
	            $scope.totalPages = ctrl.calculateTotalPages();
	            ctrl.updatePage();
	          }));
	        } else {
	          ctrl.itemsPerPage = config.itemsPerPage;
	        }

	        $scope.$watch('totalItems', function(newTotal, oldTotal) {
	          if (angular.isDefined(newTotal) || newTotal !== oldTotal) {
	            $scope.totalPages = ctrl.calculateTotalPages();
	            ctrl.updatePage();
	          }
	        });
	      };

	      ctrl.calculateTotalPages = function() {
	        var totalPages = ctrl.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / ctrl.itemsPerPage);
	        return Math.max(totalPages || 0, 1);
	      };

	      ctrl.render = function() {
	        $scope.page = parseInt(ctrl.ngModelCtrl.$viewValue, 10) || 1;
	      };

	      $scope.selectPage = function(page, evt) {
	        if (evt) {
	          evt.preventDefault();
	        }

	        var clickAllowed = !$scope.ngDisabled || !evt;
	        if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
	          if (evt && evt.target) {
	            evt.target.blur();
	          }
	          ctrl.ngModelCtrl.$setViewValue(page);
	          ctrl.ngModelCtrl.$render();
	        }
	      };

	      $scope.getText = function(key) {
	        return $scope[key + 'Text'] || ctrl.config[key + 'Text'];
	      };

	      $scope.noPrevious = function() {
	        return $scope.page === 1;
	      };

	      $scope.noNext = function() {
	        return $scope.page === $scope.totalPages;
	      };

	      ctrl.updatePage = function() {
	        ctrl.setNumPages($scope.$parent, $scope.totalPages); // Readonly variable

	        if ($scope.page > $scope.totalPages) {
	          $scope.selectPage($scope.totalPages);
	        } else {
	          ctrl.ngModelCtrl.$render();
	        }
	      };

	      $scope.$on('$destroy', function() {
	        while (ctrl._watchers.length) {
	          ctrl._watchers.shift()();
	        }
	      });
	    }
	  };
	}]);

	angular.module('ui.bootstrap.pager', ['ui.bootstrap.paging'])

	.controller('UibPagerController', ['$scope', '$attrs', 'uibPaging', 'uibPagerConfig', function($scope, $attrs, uibPaging, uibPagerConfig) {
	  $scope.align = angular.isDefined($attrs.align) ? $scope.$parent.$eval($attrs.align) : uibPagerConfig.align;

	  uibPaging.create(this, $scope, $attrs);
	}])

	.constant('uibPagerConfig', {
	  itemsPerPage: 10,
	  previousText: '« Previous',
	  nextText: 'Next »',
	  align: true
	})

	.directive('uibPager', ['uibPagerConfig', function(uibPagerConfig) {
	  return {
	    scope: {
	      totalItems: '=',
	      previousText: '@',
	      nextText: '@',
	      ngDisabled: '='
	    },
	    require: ['uibPager', '?ngModel'],
	    controller: 'UibPagerController',
	    controllerAs: 'pager',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/pager/pager.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (!ngModelCtrl) {
	        return; // do nothing if no ng-model
	      }

	      paginationCtrl.init(ngModelCtrl, uibPagerConfig);
	    }
	  };
	}]);

	angular.module('ui.bootstrap.pagination', ['ui.bootstrap.paging'])
	.controller('UibPaginationController', ['$scope', '$attrs', '$parse', 'uibPaging', 'uibPaginationConfig', function($scope, $attrs, $parse, uibPaging, uibPaginationConfig) {
	  var ctrl = this;
	  // Setup configuration parameters
	  var maxSize = angular.isDefined($attrs.maxSize) ? $scope.$parent.$eval($attrs.maxSize) : uibPaginationConfig.maxSize,
	    rotate = angular.isDefined($attrs.rotate) ? $scope.$parent.$eval($attrs.rotate) : uibPaginationConfig.rotate,
	    forceEllipses = angular.isDefined($attrs.forceEllipses) ? $scope.$parent.$eval($attrs.forceEllipses) : uibPaginationConfig.forceEllipses,
	    boundaryLinkNumbers = angular.isDefined($attrs.boundaryLinkNumbers) ? $scope.$parent.$eval($attrs.boundaryLinkNumbers) : uibPaginationConfig.boundaryLinkNumbers,
	    pageLabel = angular.isDefined($attrs.pageLabel) ? function(idx) { return $scope.$parent.$eval($attrs.pageLabel, {$page: idx}); } : angular.identity;
	  $scope.boundaryLinks = angular.isDefined($attrs.boundaryLinks) ? $scope.$parent.$eval($attrs.boundaryLinks) : uibPaginationConfig.boundaryLinks;
	  $scope.directionLinks = angular.isDefined($attrs.directionLinks) ? $scope.$parent.$eval($attrs.directionLinks) : uibPaginationConfig.directionLinks;

	  uibPaging.create(this, $scope, $attrs);

	  if ($attrs.maxSize) {
	    ctrl._watchers.push($scope.$parent.$watch($parse($attrs.maxSize), function(value) {
	      maxSize = parseInt(value, 10);
	      ctrl.render();
	    }));
	  }

	  // Create page object used in template
	  function makePage(number, text, isActive) {
	    return {
	      number: number,
	      text: text,
	      active: isActive
	    };
	  }

	  function getPages(currentPage, totalPages) {
	    var pages = [];

	    // Default page limits
	    var startPage = 1, endPage = totalPages;
	    var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;

	    // recompute if maxSize
	    if (isMaxSized) {
	      if (rotate) {
	        // Current page is displayed in the middle of the visible ones
	        startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
	        endPage = startPage + maxSize - 1;

	        // Adjust if limit is exceeded
	        if (endPage > totalPages) {
	          endPage = totalPages;
	          startPage = endPage - maxSize + 1;
	        }
	      } else {
	        // Visible pages are paginated with maxSize
	        startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;

	        // Adjust last page if limit is exceeded
	        endPage = Math.min(startPage + maxSize - 1, totalPages);
	      }
	    }

	    // Add page number links
	    for (var number = startPage; number <= endPage; number++) {
	      var page = makePage(number, pageLabel(number), number === currentPage);
	      pages.push(page);
	    }

	    // Add links to move between page sets
	    if (isMaxSized && maxSize > 0 && (!rotate || forceEllipses || boundaryLinkNumbers)) {
	      if (startPage > 1) {
	        if (!boundaryLinkNumbers || startPage > 3) { //need ellipsis for all options unless range is too close to beginning
	        var previousPageSet = makePage(startPage - 1, '...', false);
	        pages.unshift(previousPageSet);
	      }
	        if (boundaryLinkNumbers) {
	          if (startPage === 3) { //need to replace ellipsis when the buttons would be sequential
	            var secondPageLink = makePage(2, '2', false);
	            pages.unshift(secondPageLink);
	          }
	          //add the first page
	          var firstPageLink = makePage(1, '1', false);
	          pages.unshift(firstPageLink);
	        }
	      }

	      if (endPage < totalPages) {
	        if (!boundaryLinkNumbers || endPage < totalPages - 2) { //need ellipsis for all options unless range is too close to end
	        var nextPageSet = makePage(endPage + 1, '...', false);
	        pages.push(nextPageSet);
	      }
	        if (boundaryLinkNumbers) {
	          if (endPage === totalPages - 2) { //need to replace ellipsis when the buttons would be sequential
	            var secondToLastPageLink = makePage(totalPages - 1, totalPages - 1, false);
	            pages.push(secondToLastPageLink);
	          }
	          //add the last page
	          var lastPageLink = makePage(totalPages, totalPages, false);
	          pages.push(lastPageLink);
	        }
	      }
	    }
	    return pages;
	  }

	  var originalRender = this.render;
	  this.render = function() {
	    originalRender();
	    if ($scope.page > 0 && $scope.page <= $scope.totalPages) {
	      $scope.pages = getPages($scope.page, $scope.totalPages);
	    }
	  };
	}])

	.constant('uibPaginationConfig', {
	  itemsPerPage: 10,
	  boundaryLinks: false,
	  boundaryLinkNumbers: false,
	  directionLinks: true,
	  firstText: 'First',
	  previousText: 'Previous',
	  nextText: 'Next',
	  lastText: 'Last',
	  rotate: true,
	  forceEllipses: false
	})

	.directive('uibPagination', ['$parse', 'uibPaginationConfig', function($parse, uibPaginationConfig) {
	  return {
	    scope: {
	      totalItems: '=',
	      firstText: '@',
	      previousText: '@',
	      nextText: '@',
	      lastText: '@',
	      ngDisabled:'='
	    },
	    require: ['uibPagination', '?ngModel'],
	    controller: 'UibPaginationController',
	    controllerAs: 'pagination',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/pagination/pagination.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (!ngModelCtrl) {
	         return; // do nothing if no ng-model
	      }

	      paginationCtrl.init(ngModelCtrl, uibPaginationConfig);
	    }
	  };
	}]);

	/**
	 * The following features are still outstanding: animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, html tooltips, and selector delegation.
	 */
	angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.stackedMap'])

	/**
	 * The $tooltip service creates tooltip- and popover-like directives as well as
	 * houses global options for them.
	 */
	.provider('$uibTooltip', function() {
	  // The default options tooltip and popover.
	  var defaultOptions = {
	    placement: 'top',
	    placementClassPrefix: '',
	    animation: true,
	    popupDelay: 0,
	    popupCloseDelay: 0,
	    useContentExp: false
	  };

	  // Default hide triggers for each show trigger
	  var triggerMap = {
	    'mouseenter': 'mouseleave',
	    'click': 'click',
	    'outsideClick': 'outsideClick',
	    'focus': 'blur',
	    'none': ''
	  };

	  // The options specified to the provider globally.
	  var globalOptions = {};

	  /**
	   * `options({})` allows global configuration of all tooltips in the
	   * application.
	   *
	   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
	   *     // place tooltips left instead of top by default
	   *     $tooltipProvider.options( { placement: 'left' } );
	   *   });
	   */
		this.options = function(value) {
			angular.extend(globalOptions, value);
		};

	  /**
	   * This allows you to extend the set of trigger mappings available. E.g.:
	   *
	   *   $tooltipProvider.setTriggers( { 'openTrigger': 'closeTrigger' } );
	   */
	  this.setTriggers = function setTriggers(triggers) {
	    angular.extend(triggerMap, triggers);
	  };

	  /**
	   * This is a helper function for translating camel-case to snake_case.
	   */
	  function snake_case(name) {
	    var regexp = /[A-Z]/g;
	    var separator = '-';
	    return name.replace(regexp, function(letter, pos) {
	      return (pos ? separator : '') + letter.toLowerCase();
	    });
	  }

	  /**
	   * Returns the actual instance of the $tooltip service.
	   * TODO support multiple triggers
	   */
	  this.$get = ['$window', '$compile', '$timeout', '$document', '$uibPosition', '$interpolate', '$rootScope', '$parse', '$$stackedMap', function($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse, $$stackedMap) {
	    var openedTooltips = $$stackedMap.createNew();
	    $document.on('keypress', keypressListener);

	    $rootScope.$on('$destroy', function() {
	      $document.off('keypress', keypressListener);
	    });

	    function keypressListener(e) {
	      if (e.which === 27) {
	        var last = openedTooltips.top();
	        if (last) {
	          last.value.close();
	          openedTooltips.removeTop();
	          last = null;
	        }
	      }
	    }

	    return function $tooltip(ttType, prefix, defaultTriggerShow, options) {
	      options = angular.extend({}, defaultOptions, globalOptions, options);

	      /**
	       * Returns an object of show and hide triggers.
	       *
	       * If a trigger is supplied,
	       * it is used to show the tooltip; otherwise, it will use the `trigger`
	       * option passed to the `$tooltipProvider.options` method; else it will
	       * default to the trigger supplied to this directive factory.
	       *
	       * The hide trigger is based on the show trigger. If the `trigger` option
	       * was passed to the `$tooltipProvider.options` method, it will use the
	       * mapped trigger from `triggerMap` or the passed trigger if the map is
	       * undefined; otherwise, it uses the `triggerMap` value of the show
	       * trigger; else it will just use the show trigger.
	       */
	      function getTriggers(trigger) {
	        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
	        var hide = show.map(function(trigger) {
	          return triggerMap[trigger] || trigger;
	        });
	        return {
	          show: show,
	          hide: hide
	        };
	      }

	      var directiveName = snake_case(ttType);

	      var startSym = $interpolate.startSymbol();
	      var endSym = $interpolate.endSymbol();
	      var template =
	        '<div '+ directiveName + '-popup ' +
	          'uib-title="' + startSym + 'title' + endSym + '" ' +
	          (options.useContentExp ?
	            'content-exp="contentExp()" ' :
	            'content="' + startSym + 'content' + endSym + '" ') +
	          'placement="' + startSym + 'placement' + endSym + '" ' +
	          'popup-class="' + startSym + 'popupClass' + endSym + '" ' +
	          'animation="animation" ' +
	          'is-open="isOpen" ' +
	          'origin-scope="origScope" ' +
	          'class="uib-position-measure"' +
	          '>' +
	        '</div>';

	      return {
	        compile: function(tElem, tAttrs) {
	          var tooltipLinker = $compile(template);

	          return function link(scope, element, attrs, tooltipCtrl) {
	            var tooltip;
	            var tooltipLinkedScope;
	            var transitionTimeout;
	            var showTimeout;
	            var hideTimeout;
	            var positionTimeout;
	            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
	            var triggers = getTriggers(undefined);
	            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
	            var ttScope = scope.$new(true);
	            var repositionScheduled = false;
	            var isOpenParse = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
	            var contentParse = options.useContentExp ? $parse(attrs[ttType]) : false;
	            var observers = [];
	            var lastPlacement;

	            var positionTooltip = function() {
	              // check if tooltip exists and is not empty
	              if (!tooltip || !tooltip.html()) { return; }

	              if (!positionTimeout) {
	                positionTimeout = $timeout(function() {
	                  var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
	                  tooltip.css({ top: ttPosition.top + 'px', left: ttPosition.left + 'px' });

	                  if (!tooltip.hasClass(ttPosition.placement.split('-')[0])) {
	                    tooltip.removeClass(lastPlacement.split('-')[0]);
	                    tooltip.addClass(ttPosition.placement.split('-')[0]);
	                  }

	                  if (!tooltip.hasClass(options.placementClassPrefix + ttPosition.placement)) {
	                    tooltip.removeClass(options.placementClassPrefix + lastPlacement);
	                    tooltip.addClass(options.placementClassPrefix + ttPosition.placement);
	                  }

	                  // first time through tt element will have the
	                  // uib-position-measure class or if the placement
	                  // has changed we need to position the arrow.
	                  if (tooltip.hasClass('uib-position-measure')) {
	                    $position.positionArrow(tooltip, ttPosition.placement);
	                    tooltip.removeClass('uib-position-measure');
	                  } else if (lastPlacement !== ttPosition.placement) {
	                    $position.positionArrow(tooltip, ttPosition.placement);
	                  }
	                  lastPlacement = ttPosition.placement;

	                  positionTimeout = null;
	                }, 0, false);
	              }
	            };

	            // Set up the correct scope to allow transclusion later
	            ttScope.origScope = scope;

	            // By default, the tooltip is not open.
	            // TODO add ability to start tooltip opened
	            ttScope.isOpen = false;
	            openedTooltips.add(ttScope, {
	              close: hide
	            });

	            function toggleTooltipBind() {
	              if (!ttScope.isOpen) {
	                showTooltipBind();
	              } else {
	                hideTooltipBind();
	              }
	            }

	            // Show the tooltip with delay if specified, otherwise show it immediately
	            function showTooltipBind() {
	              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
	                return;
	              }

	              cancelHide();
	              prepareTooltip();

	              if (ttScope.popupDelay) {
	                // Do nothing if the tooltip was already scheduled to pop-up.
	                // This happens if show is triggered multiple times before any hide is triggered.
	                if (!showTimeout) {
	                  showTimeout = $timeout(show, ttScope.popupDelay, false);
	                }
	              } else {
	                show();
	              }
	            }

	            function hideTooltipBind() {
	              cancelShow();

	              if (ttScope.popupCloseDelay) {
	                if (!hideTimeout) {
	                  hideTimeout = $timeout(hide, ttScope.popupCloseDelay, false);
	                }
	              } else {
	                hide();
	              }
	            }

	            // Show the tooltip popup element.
	            function show() {
	              cancelShow();
	              cancelHide();

	              // Don't show empty tooltips.
	              if (!ttScope.content) {
	                return angular.noop;
	              }

	              createTooltip();

	              // And show the tooltip.
	              ttScope.$evalAsync(function() {
	                ttScope.isOpen = true;
	                assignIsOpen(true);
	                positionTooltip();
	              });
	            }

	            function cancelShow() {
	              if (showTimeout) {
	                $timeout.cancel(showTimeout);
	                showTimeout = null;
	              }

	              if (positionTimeout) {
	                $timeout.cancel(positionTimeout);
	                positionTimeout = null;
	              }
	            }

	            // Hide the tooltip popup element.
	            function hide() {
	              if (!ttScope) {
	                return;
	              }

	              // First things first: we don't show it anymore.
	              ttScope.$evalAsync(function() {
	                if (ttScope) {
	                  ttScope.isOpen = false;
	                  assignIsOpen(false);
	                  // And now we remove it from the DOM. However, if we have animation, we
	                  // need to wait for it to expire beforehand.
	                  // FIXME: this is a placeholder for a port of the transitions library.
	                  // The fade transition in TWBS is 150ms.
	                  if (ttScope.animation) {
	                    if (!transitionTimeout) {
	                      transitionTimeout = $timeout(removeTooltip, 150, false);
	                    }
	                  } else {
	                    removeTooltip();
	                  }
	                }
	              });
	            }

	            function cancelHide() {
	              if (hideTimeout) {
	                $timeout.cancel(hideTimeout);
	                hideTimeout = null;
	              }

	              if (transitionTimeout) {
	                $timeout.cancel(transitionTimeout);
	                transitionTimeout = null;
	              }
	            }

	            function createTooltip() {
	              // There can only be one tooltip element per directive shown at once.
	              if (tooltip) {
	                return;
	              }

	              tooltipLinkedScope = ttScope.$new();
	              tooltip = tooltipLinker(tooltipLinkedScope, function(tooltip) {
	                if (appendToBody) {
	                  $document.find('body').append(tooltip);
	                } else {
	                  element.after(tooltip);
	                }
	              });

	              prepObservers();
	            }

	            function removeTooltip() {
	              cancelShow();
	              cancelHide();
	              unregisterObservers();

	              if (tooltip) {
	                tooltip.remove();
	                tooltip = null;
	              }
	              if (tooltipLinkedScope) {
	                tooltipLinkedScope.$destroy();
	                tooltipLinkedScope = null;
	              }
	            }

	            /**
	             * Set the initial scope values. Once
	             * the tooltip is created, the observers
	             * will be added to keep things in sync.
	             */
	            function prepareTooltip() {
	              ttScope.title = attrs[prefix + 'Title'];
	              if (contentParse) {
	                ttScope.content = contentParse(scope);
	              } else {
	                ttScope.content = attrs[ttType];
	              }

	              ttScope.popupClass = attrs[prefix + 'Class'];
	              ttScope.placement = angular.isDefined(attrs[prefix + 'Placement']) ? attrs[prefix + 'Placement'] : options.placement;
	              var placement = $position.parsePlacement(ttScope.placement);
	              lastPlacement = placement[1] ? placement[0] + '-' + placement[1] : placement[0];

	              var delay = parseInt(attrs[prefix + 'PopupDelay'], 10);
	              var closeDelay = parseInt(attrs[prefix + 'PopupCloseDelay'], 10);
	              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
	              ttScope.popupCloseDelay = !isNaN(closeDelay) ? closeDelay : options.popupCloseDelay;
	            }

	            function assignIsOpen(isOpen) {
	              if (isOpenParse && angular.isFunction(isOpenParse.assign)) {
	                isOpenParse.assign(scope, isOpen);
	              }
	            }

	            ttScope.contentExp = function() {
	              return ttScope.content;
	            };

	            /**
	             * Observe the relevant attributes.
	             */
	            attrs.$observe('disabled', function(val) {
	              if (val) {
	                cancelShow();
	              }

	              if (val && ttScope.isOpen) {
	                hide();
	              }
	            });

	            if (isOpenParse) {
	              scope.$watch(isOpenParse, function(val) {
	                if (ttScope && !val === ttScope.isOpen) {
	                  toggleTooltipBind();
	                }
	              });
	            }

	            function prepObservers() {
	              observers.length = 0;

	              if (contentParse) {
	                observers.push(
	                  scope.$watch(contentParse, function(val) {
	                    ttScope.content = val;
	                    if (!val && ttScope.isOpen) {
	                      hide();
	                    }
	                  })
	                );

	                observers.push(
	                  tooltipLinkedScope.$watch(function() {
	                    if (!repositionScheduled) {
	                      repositionScheduled = true;
	                      tooltipLinkedScope.$$postDigest(function() {
	                        repositionScheduled = false;
	                        if (ttScope && ttScope.isOpen) {
	                          positionTooltip();
	                        }
	                      });
	                    }
	                  })
	                );
	              } else {
	                observers.push(
	                  attrs.$observe(ttType, function(val) {
	                    ttScope.content = val;
	                    if (!val && ttScope.isOpen) {
	                      hide();
	                    } else {
	                      positionTooltip();
	                    }
	                  })
	                );
	              }

	              observers.push(
	                attrs.$observe(prefix + 'Title', function(val) {
	                  ttScope.title = val;
	                  if (ttScope.isOpen) {
	                    positionTooltip();
	                  }
	                })
	              );

	              observers.push(
	                attrs.$observe(prefix + 'Placement', function(val) {
	                  ttScope.placement = val ? val : options.placement;
	                  var placement = $position.parsePlacement(ttScope.placement);
	                  lastPlacement = placement[1] ? placement[0] + '-' + placement[1] : placement[0];
	                  if (ttScope.isOpen) {
	                    positionTooltip();
	                  }
	                })
	              );
	            }

	            function unregisterObservers() {
	              if (observers.length) {
	                angular.forEach(observers, function(observer) {
	                  observer();
	                });
	                observers.length = 0;
	              }
	            }

	            // hide tooltips/popovers for outsideClick trigger
	            function bodyHideTooltipBind(e) {
	              if (!ttScope || !ttScope.isOpen || !tooltip) {
	                return;
	              }
	              // make sure the tooltip/popover link or tool tooltip/popover itself were not clicked
	              if (!element[0].contains(e.target) && !tooltip[0].contains(e.target)) {
	                hideTooltipBind();
	              }
	            }

	            var unregisterTriggers = function() {
	              triggers.show.forEach(function(trigger) {
	                if (trigger === 'outsideClick') {
	                  element.off('click', toggleTooltipBind);
	                } else {
	                  element.off(trigger, showTooltipBind);
	                  element.off(trigger, toggleTooltipBind);
	                }
	              });
	              triggers.hide.forEach(function(trigger) {
	                if (trigger === 'outsideClick') {
	                  $document.off('click', bodyHideTooltipBind);
	                } else {
	                  element.off(trigger, hideTooltipBind);
	                }
	              });
	            };

	            function prepTriggers() {
	              var val = attrs[prefix + 'Trigger'];
	              unregisterTriggers();

	              triggers = getTriggers(val);

	              if (triggers.show !== 'none') {
	                triggers.show.forEach(function(trigger, idx) {
	                  if (trigger === 'outsideClick') {
	                    element.on('click', toggleTooltipBind);
	                    $document.on('click', bodyHideTooltipBind);
	                  } else if (trigger === triggers.hide[idx]) {
	                    element.on(trigger, toggleTooltipBind);
	                  } else if (trigger) {
	                    element.on(trigger, showTooltipBind);
	                    element.on(triggers.hide[idx], hideTooltipBind);
	                  }

	                  element.on('keypress', function(e) {
	                    if (e.which === 27) {
	                      hideTooltipBind();
	                    }
	                  });
	                });
	              }
	            }

	            prepTriggers();

	            var animation = scope.$eval(attrs[prefix + 'Animation']);
	            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

	            var appendToBodyVal;
	            var appendKey = prefix + 'AppendToBody';
	            if (appendKey in attrs && attrs[appendKey] === undefined) {
	              appendToBodyVal = true;
	            } else {
	              appendToBodyVal = scope.$eval(attrs[appendKey]);
	            }

	            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

	            // Make sure tooltip is destroyed and removed.
	            scope.$on('$destroy', function onDestroyTooltip() {
	              unregisterTriggers();
	              removeTooltip();
	              openedTooltips.remove(ttScope);
	              ttScope = null;
	            });
	          };
	        }
	      };
	    };
	  }];
	})

	// This is mostly ngInclude code but with a custom scope
	.directive('uibTooltipTemplateTransclude', [
	         '$animate', '$sce', '$compile', '$templateRequest',
	function ($animate, $sce, $compile, $templateRequest) {
	  return {
	    link: function(scope, elem, attrs) {
	      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

	      var changeCounter = 0,
	        currentScope,
	        previousElement,
	        currentElement;

	      var cleanupLastIncludeContent = function() {
	        if (previousElement) {
	          previousElement.remove();
	          previousElement = null;
	        }

	        if (currentScope) {
	          currentScope.$destroy();
	          currentScope = null;
	        }

	        if (currentElement) {
	          $animate.leave(currentElement).then(function() {
	            previousElement = null;
	          });
	          previousElement = currentElement;
	          currentElement = null;
	        }
	      };

	      scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function(src) {
	        var thisChangeId = ++changeCounter;

	        if (src) {
	          //set the 2nd param to true to ignore the template request error so that the inner
	          //contents and scope can be cleaned up.
	          $templateRequest(src, true).then(function(response) {
	            if (thisChangeId !== changeCounter) { return; }
	            var newScope = origScope.$new();
	            var template = response;

	            var clone = $compile(template)(newScope, function(clone) {
	              cleanupLastIncludeContent();
	              $animate.enter(clone, elem);
	            });

	            currentScope = newScope;
	            currentElement = clone;

	            currentScope.$emit('$includeContentLoaded', src);
	          }, function() {
	            if (thisChangeId === changeCounter) {
	              cleanupLastIncludeContent();
	              scope.$emit('$includeContentError', src);
	            }
	          });
	          scope.$emit('$includeContentRequested', src);
	        } else {
	          cleanupLastIncludeContent();
	        }
	      });

	      scope.$on('$destroy', cleanupLastIncludeContent);
	    }
	  };
	}])

	/**
	 * Note that it's intentional that these classes are *not* applied through $animate.
	 * They must not be animated as they're expected to be present on the tooltip on
	 * initialization.
	 */
	.directive('uibTooltipClasses', ['$uibPosition', function($uibPosition) {
	  return {
	    restrict: 'A',
	    link: function(scope, element, attrs) {
	      // need to set the primary position so the
	      // arrow has space during position measure.
	      // tooltip.positionTooltip()
	      if (scope.placement) {
	        // // There are no top-left etc... classes
	        // // in TWBS, so we need the primary position.
	        var position = $uibPosition.parsePlacement(scope.placement);
	        element.addClass(position[0]);
	      }

	      if (scope.popupClass) {
	        element.addClass(scope.popupClass);
	      }

	      if (scope.animation()) {
	        element.addClass(attrs.tooltipAnimationClass);
	      }
	    }
	  };
	}])

	.directive('uibTooltipPopup', function() {
	  return {
	    replace: true,
	    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-popup.html'
	  };
	})

	.directive('uibTooltip', [ '$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltip', 'tooltip', 'mouseenter');
	}])

	.directive('uibTooltipTemplatePopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-template-popup.html'
	  };
	})

	.directive('uibTooltipTemplate', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltipTemplate', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}])

	.directive('uibTooltipHtmlPopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/tooltip/tooltip-html-popup.html'
	  };
	})

	.directive('uibTooltipHtml', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibTooltipHtml', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}]);

	/**
	 * The following features are still outstanding: popup delay, animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, and selector delegatation.
	 */
	angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip'])

	.directive('uibPopoverTemplatePopup', function() {
	  return {
	    replace: true,
	    scope: { uibTitle: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'uib/template/popover/popover-template.html'
	  };
	})

	.directive('uibPopoverTemplate', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopoverTemplate', 'popover', 'click', {
	    useContentExp: true
	  });
	}])

	.directive('uibPopoverHtmlPopup', function() {
	  return {
	    replace: true,
	    scope: { contentExp: '&', uibTitle: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/popover/popover-html.html'
	  };
	})

	.directive('uibPopoverHtml', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopoverHtml', 'popover', 'click', {
	    useContentExp: true
	  });
	}])

	.directive('uibPopoverPopup', function() {
	  return {
	    replace: true,
	    scope: { uibTitle: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'uib/template/popover/popover.html'
	  };
	})

	.directive('uibPopover', ['$uibTooltip', function($uibTooltip) {
	  return $uibTooltip('uibPopover', 'popover', 'click');
	}]);

	angular.module('ui.bootstrap.progressbar', [])

	.constant('uibProgressConfig', {
	  animate: true,
	  max: 100
	})

	.controller('UibProgressController', ['$scope', '$attrs', 'uibProgressConfig', function($scope, $attrs, progressConfig) {
	  var self = this,
	      animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

	  this.bars = [];
	  $scope.max = getMaxOrDefault();

	  this.addBar = function(bar, element, attrs) {
	    if (!animate) {
	      element.css({'transition': 'none'});
	    }

	    this.bars.push(bar);

	    bar.max = getMaxOrDefault();
	    bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : 'progressbar';

	    bar.$watch('value', function(value) {
	      bar.recalculatePercentage();
	    });

	    bar.recalculatePercentage = function() {
	      var totalPercentage = self.bars.reduce(function(total, bar) {
	        bar.percent = +(100 * bar.value / bar.max).toFixed(2);
	        return total + bar.percent;
	      }, 0);

	      if (totalPercentage > 100) {
	        bar.percent -= totalPercentage - 100;
	      }
	    };

	    bar.$on('$destroy', function() {
	      element = null;
	      self.removeBar(bar);
	    });
	  };

	  this.removeBar = function(bar) {
	    this.bars.splice(this.bars.indexOf(bar), 1);
	    this.bars.forEach(function (bar) {
	      bar.recalculatePercentage();
	    });
	  };

	  //$attrs.$observe('maxParam', function(maxParam) {
	  $scope.$watch('maxParam', function(maxParam) {
	    self.bars.forEach(function(bar) {
	      bar.max = getMaxOrDefault();
	      bar.recalculatePercentage();
	    });
	  });

	  function getMaxOrDefault () {
	    return angular.isDefined($scope.maxParam) ? $scope.maxParam : progressConfig.max;
	  }
	}])

	.directive('uibProgress', function() {
	  return {
	    replace: true,
	    transclude: true,
	    controller: 'UibProgressController',
	    require: 'uibProgress',
	    scope: {
	      maxParam: '=?max'
	    },
	    templateUrl: 'uib/template/progressbar/progress.html'
	  };
	})

	.directive('uibBar', function() {
	  return {
	    replace: true,
	    transclude: true,
	    require: '^uibProgress',
	    scope: {
	      value: '=',
	      type: '@'
	    },
	    templateUrl: 'uib/template/progressbar/bar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, element, attrs);
	    }
	  };
	})

	.directive('uibProgressbar', function() {
	  return {
	    replace: true,
	    transclude: true,
	    controller: 'UibProgressController',
	    scope: {
	      value: '=',
	      maxParam: '=?max',
	      type: '@'
	    },
	    templateUrl: 'uib/template/progressbar/progressbar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, angular.element(element.children()[0]), {title: attrs.title});
	    }
	  };
	});

	angular.module('ui.bootstrap.rating', [])

	.constant('uibRatingConfig', {
	  max: 5,
	  stateOn: null,
	  stateOff: null,
	  enableReset: true,
	  titles : ['one', 'two', 'three', 'four', 'five']
	})

	.controller('UibRatingController', ['$scope', '$attrs', 'uibRatingConfig', function($scope, $attrs, ratingConfig) {
	  var ngModelCtrl = { $setViewValue: angular.noop },
	    self = this;

	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;

	    ngModelCtrl.$formatters.push(function(value) {
	      if (angular.isNumber(value) && value << 0 !== value) {
	        value = Math.round(value);
	      }

	      return value;
	    });

	    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
	    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
	    this.enableReset = angular.isDefined($attrs.enableReset) ?
	      $scope.$parent.$eval($attrs.enableReset) : ratingConfig.enableReset;
	    var tmpTitles = angular.isDefined($attrs.titles) ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles;
	    this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ?
	      tmpTitles : ratingConfig.titles;

	    var ratingStates = angular.isDefined($attrs.ratingStates) ?
	      $scope.$parent.$eval($attrs.ratingStates) :
	      new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
	    $scope.range = this.buildTemplateObjects(ratingStates);
	  };

	  this.buildTemplateObjects = function(states) {
	    for (var i = 0, n = states.length; i < n; i++) {
	      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(i) }, states[i]);
	    }
	    return states;
	  };

	  this.getTitle = function(index) {
	    if (index >= this.titles.length) {
	      return index + 1;
	    }

	    return this.titles[index];
	  };

	  $scope.rate = function(value) {
	    if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
	      var newViewValue = self.enableReset && ngModelCtrl.$viewValue === value ? 0 : value;
	      ngModelCtrl.$setViewValue(newViewValue);
	      ngModelCtrl.$render();
	    }
	  };

	  $scope.enter = function(value) {
	    if (!$scope.readonly) {
	      $scope.value = value;
	    }
	    $scope.onHover({value: value});
	  };

	  $scope.reset = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	    $scope.onLeave();
	  };

	  $scope.onKeydown = function(evt) {
	    if (/(37|38|39|40)/.test(evt.which)) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
	    }
	  };

	  this.render = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	    $scope.title = self.getTitle($scope.value - 1);
	  };
	}])

	.directive('uibRating', function() {
	  return {
	    require: ['uibRating', 'ngModel'],
	    scope: {
	      readonly: '=?readOnly',
	      onHover: '&',
	      onLeave: '&'
	    },
	    controller: 'UibRatingController',
	    templateUrl: 'uib/template/rating/rating.html',
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	      ratingCtrl.init(ngModelCtrl);
	    }
	  };
	});

	angular.module('ui.bootstrap.tabs', [])

	.controller('UibTabsetController', ['$scope', function ($scope) {
	  var ctrl = this,
	    oldIndex;
	  ctrl.tabs = [];

	  ctrl.select = function(index, evt) {
	    if (!destroyed) {
	      var previousIndex = findTabIndex(oldIndex);
	      var previousSelected = ctrl.tabs[previousIndex];
	      if (previousSelected) {
	        previousSelected.tab.onDeselect({
	          $event: evt
	        });
	        if (evt && evt.isDefaultPrevented()) {
	          return;
	        }
	        previousSelected.tab.active = false;
	      }

	      var selected = ctrl.tabs[index];
	      if (selected) {
	        selected.tab.onSelect({
	          $event: evt
	        });
	        selected.tab.active = true;
	        ctrl.active = selected.index;
	        oldIndex = selected.index;
	      } else if (!selected && angular.isNumber(oldIndex)) {
	        ctrl.active = null;
	        oldIndex = null;
	      }
	    }
	  };

	  ctrl.addTab = function addTab(tab) {
	    ctrl.tabs.push({
	      tab: tab,
	      index: tab.index
	    });
	    ctrl.tabs.sort(function(t1, t2) {
	      if (t1.index > t2.index) {
	        return 1;
	      }

	      if (t1.index < t2.index) {
	        return -1;
	      }

	      return 0;
	    });

	    if (tab.index === ctrl.active || !angular.isNumber(ctrl.active) && ctrl.tabs.length === 1) {
	      var newActiveIndex = findTabIndex(tab.index);
	      ctrl.select(newActiveIndex);
	    }
	  };

	  ctrl.removeTab = function removeTab(tab) {
	    var index;
	    for (var i = 0; i < ctrl.tabs.length; i++) {
	      if (ctrl.tabs[i].tab === tab) {
	        index = i;
	        break;
	      }
	    }

	    if (ctrl.tabs[index].index === ctrl.active) {
	      var newActiveTabIndex = index === ctrl.tabs.length - 1 ?
	        index - 1 : index + 1 % ctrl.tabs.length;
	      ctrl.select(newActiveTabIndex);
	    }

	    ctrl.tabs.splice(index, 1);
	  };

	  $scope.$watch('tabset.active', function(val) {
	    if (angular.isNumber(val) && val !== oldIndex) {
	      ctrl.select(findTabIndex(val));
	    }
	  });

	  var destroyed;
	  $scope.$on('$destroy', function() {
	    destroyed = true;
	  });

	  function findTabIndex(index) {
	    for (var i = 0; i < ctrl.tabs.length; i++) {
	      if (ctrl.tabs[i].index === index) {
	        return i;
	      }
	    }
	  }
	}])

	.directive('uibTabset', function() {
	  return {
	    transclude: true,
	    replace: true,
	    scope: {},
	    bindToController: {
	      active: '=?',
	      type: '@'
	    },
	    controller: 'UibTabsetController',
	    controllerAs: 'tabset',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/tabs/tabset.html';
	    },
	    link: function(scope, element, attrs) {
	      scope.vertical = angular.isDefined(attrs.vertical) ?
	        scope.$parent.$eval(attrs.vertical) : false;
	      scope.justified = angular.isDefined(attrs.justified) ?
	        scope.$parent.$eval(attrs.justified) : false;
	      if (angular.isUndefined(attrs.active)) {
	        scope.active = 0;
	      }
	    }
	  };
	})

	.directive('uibTab', ['$parse', function($parse) {
	  return {
	    require: '^uibTabset',
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'uib/template/tabs/tab.html';
	    },
	    transclude: true,
	    scope: {
	      heading: '@',
	      index: '=?',
	      classes: '@?',
	      onSelect: '&select', //This callback is called in contentHeadingTransclude
	                          //once it inserts the tab's content into the dom
	      onDeselect: '&deselect'
	    },
	    controller: function() {
	      //Empty controller so other directives can require being 'under' a tab
	    },
	    controllerAs: 'tab',
	    link: function(scope, elm, attrs, tabsetCtrl, transclude) {
	      scope.disabled = false;
	      if (attrs.disable) {
	        scope.$parent.$watch($parse(attrs.disable), function(value) {
	          scope.disabled = !! value;
	        });
	      }

	      if (angular.isUndefined(attrs.index)) {
	        if (tabsetCtrl.tabs && tabsetCtrl.tabs.length) {
	          scope.index = Math.max.apply(null, tabsetCtrl.tabs.map(function(t) { return t.index; })) + 1;
	        } else {
	          scope.index = 0;
	        }
	      }

	      if (angular.isUndefined(attrs.classes)) {
	        scope.classes = '';
	      }

	      scope.select = function(evt) {
	        if (!scope.disabled) {
	          var index;
	          for (var i = 0; i < tabsetCtrl.tabs.length; i++) {
	            if (tabsetCtrl.tabs[i].tab === scope) {
	              index = i;
	              break;
	            }
	          }

	          tabsetCtrl.select(index, evt);
	        }
	      };

	      tabsetCtrl.addTab(scope);
	      scope.$on('$destroy', function() {
	        tabsetCtrl.removeTab(scope);
	      });

	      //We need to transclude later, once the content container is ready.
	      //when this link happens, we're inside a tab heading.
	      scope.$transcludeFn = transclude;
	    }
	  };
	}])

	.directive('uibTabHeadingTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^uibTab',
	    link: function(scope, elm) {
	      scope.$watch('headingElement', function updateHeadingElement(heading) {
	        if (heading) {
	          elm.html('');
	          elm.append(heading);
	        }
	      });
	    }
	  };
	})

	.directive('uibTabContentTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^uibTabset',
	    link: function(scope, elm, attrs) {
	      var tab = scope.$eval(attrs.uibTabContentTransclude).tab;

	      //Now our tab is ready to be transcluded: both the tab heading area
	      //and the tab content area are loaded.  Transclude 'em both.
	      tab.$transcludeFn(tab.$parent, function(contents) {
	        angular.forEach(contents, function(node) {
	          if (isTabHeading(node)) {
	            //Let tabHeadingTransclude know.
	            tab.headingElement = node;
	          } else {
	            elm.append(node);
	          }
	        });
	      });
	    }
	  };

	  function isTabHeading(node) {
	    return node.tagName && (
	      node.hasAttribute('uib-tab-heading') ||
	      node.hasAttribute('data-uib-tab-heading') ||
	      node.hasAttribute('x-uib-tab-heading') ||
	      node.tagName.toLowerCase() === 'uib-tab-heading' ||
	      node.tagName.toLowerCase() === 'data-uib-tab-heading' ||
	      node.tagName.toLowerCase() === 'x-uib-tab-heading' ||
	      node.tagName.toLowerCase() === 'uib:tab-heading'
	    );
	  }
	});

	angular.module('ui.bootstrap.timepicker', [])

	.constant('uibTimepickerConfig', {
	  hourStep: 1,
	  minuteStep: 1,
	  secondStep: 1,
	  showMeridian: true,
	  showSeconds: false,
	  meridians: null,
	  readonlyInput: false,
	  mousewheel: true,
	  arrowkeys: true,
	  showSpinners: true,
	  templateUrl: 'uib/template/timepicker/timepicker.html'
	})

	.controller('UibTimepickerController', ['$scope', '$element', '$attrs', '$parse', '$log', '$locale', 'uibTimepickerConfig', function($scope, $element, $attrs, $parse, $log, $locale, timepickerConfig) {
	  var selected = new Date(),
	    watchers = [],
	    ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	    meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS,
	    padHours = angular.isDefined($attrs.padHours) ? $scope.$parent.$eval($attrs.padHours) : true;

	  $scope.tabindex = angular.isDefined($attrs.tabindex) ? $attrs.tabindex : 0;
	  $element.removeAttr('tabindex');

	  this.init = function(ngModelCtrl_, inputs) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;

	    ngModelCtrl.$formatters.unshift(function(modelValue) {
	      return modelValue ? new Date(modelValue) : null;
	    });

	    var hoursInputEl = inputs.eq(0),
	        minutesInputEl = inputs.eq(1),
	        secondsInputEl = inputs.eq(2);

	    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;

	    if (mousewheel) {
	      this.setupMousewheelEvents(hoursInputEl, minutesInputEl, secondsInputEl);
	    }

	    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
	    if (arrowkeys) {
	      this.setupArrowkeyEvents(hoursInputEl, minutesInputEl, secondsInputEl);
	    }

	    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
	    this.setupInputEvents(hoursInputEl, minutesInputEl, secondsInputEl);
	  };

	  var hourStep = timepickerConfig.hourStep;
	  if ($attrs.hourStep) {
	    watchers.push($scope.$parent.$watch($parse($attrs.hourStep), function(value) {
	      hourStep = +value;
	    }));
	  }

	  var minuteStep = timepickerConfig.minuteStep;
	  if ($attrs.minuteStep) {
	    watchers.push($scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
	      minuteStep = +value;
	    }));
	  }

	  var min;
	  watchers.push($scope.$parent.$watch($parse($attrs.min), function(value) {
	    var dt = new Date(value);
	    min = isNaN(dt) ? undefined : dt;
	  }));

	  var max;
	  watchers.push($scope.$parent.$watch($parse($attrs.max), function(value) {
	    var dt = new Date(value);
	    max = isNaN(dt) ? undefined : dt;
	  }));

	  var disabled = false;
	  if ($attrs.ngDisabled) {
	    watchers.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(value) {
	      disabled = value;
	    }));
	  }

	  $scope.noIncrementHours = function() {
	    var incrementedSelected = addMinutes(selected, hourStep * 60);
	    return disabled || incrementedSelected > max ||
	      incrementedSelected < selected && incrementedSelected < min;
	  };

	  $scope.noDecrementHours = function() {
	    var decrementedSelected = addMinutes(selected, -hourStep * 60);
	    return disabled || decrementedSelected < min ||
	      decrementedSelected > selected && decrementedSelected > max;
	  };

	  $scope.noIncrementMinutes = function() {
	    var incrementedSelected = addMinutes(selected, minuteStep);
	    return disabled || incrementedSelected > max ||
	      incrementedSelected < selected && incrementedSelected < min;
	  };

	  $scope.noDecrementMinutes = function() {
	    var decrementedSelected = addMinutes(selected, -minuteStep);
	    return disabled || decrementedSelected < min ||
	      decrementedSelected > selected && decrementedSelected > max;
	  };

	  $scope.noIncrementSeconds = function() {
	    var incrementedSelected = addSeconds(selected, secondStep);
	    return disabled || incrementedSelected > max ||
	      incrementedSelected < selected && incrementedSelected < min;
	  };

	  $scope.noDecrementSeconds = function() {
	    var decrementedSelected = addSeconds(selected, -secondStep);
	    return disabled || decrementedSelected < min ||
	      decrementedSelected > selected && decrementedSelected > max;
	  };

	  $scope.noToggleMeridian = function() {
	    if (selected.getHours() < 12) {
	      return disabled || addMinutes(selected, 12 * 60) > max;
	    }

	    return disabled || addMinutes(selected, -12 * 60) < min;
	  };

	  var secondStep = timepickerConfig.secondStep;
	  if ($attrs.secondStep) {
	    watchers.push($scope.$parent.$watch($parse($attrs.secondStep), function(value) {
	      secondStep = +value;
	    }));
	  }

	  $scope.showSeconds = timepickerConfig.showSeconds;
	  if ($attrs.showSeconds) {
	    watchers.push($scope.$parent.$watch($parse($attrs.showSeconds), function(value) {
	      $scope.showSeconds = !!value;
	    }));
	  }

	  // 12H / 24H mode
	  $scope.showMeridian = timepickerConfig.showMeridian;
	  if ($attrs.showMeridian) {
	    watchers.push($scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
	      $scope.showMeridian = !!value;

	      if (ngModelCtrl.$error.time) {
	        // Evaluate from template
	        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
	        if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	          selected.setHours(hours);
	          refresh();
	        }
	      } else {
	        updateTemplate();
	      }
	    }));
	  }

	  // Get $scope.hours in 24H mode if valid
	  function getHoursFromTemplate() {
	    var hours = +$scope.hours;
	    var valid = $scope.showMeridian ? hours > 0 && hours < 13 :
	      hours >= 0 && hours < 24;
	    if (!valid || $scope.hours === '') {
	      return undefined;
	    }

	    if ($scope.showMeridian) {
	      if (hours === 12) {
	        hours = 0;
	      }
	      if ($scope.meridian === meridians[1]) {
	        hours = hours + 12;
	      }
	    }
	    return hours;
	  }

	  function getMinutesFromTemplate() {
	    var minutes = +$scope.minutes;
	    var valid = minutes >= 0 && minutes < 60;
	    if (!valid || $scope.minutes === '') {
	      return undefined;
	    }
	    return minutes;
	  }

	  function getSecondsFromTemplate() {
	    var seconds = +$scope.seconds;
	    return seconds >= 0 && seconds < 60 ? seconds : undefined;
	  }

	  function pad(value, noPad) {
	    if (value === null) {
	      return '';
	    }

	    return angular.isDefined(value) && value.toString().length < 2 && !noPad ?
	      '0' + value : value.toString();
	  }

	  // Respond on mousewheel spin
	  this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
	    var isScrollingUp = function(e) {
	      if (e.originalEvent) {
	        e = e.originalEvent;
	      }
	      //pick correct delta variable depending on event
	      var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
	      return e.detail || delta > 0;
	    };

	    hoursInputEl.bind('mousewheel wheel', function(e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
	      }
	      e.preventDefault();
	    });

	    minutesInputEl.bind('mousewheel wheel', function(e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
	      }
	      e.preventDefault();
	    });

	     secondsInputEl.bind('mousewheel wheel', function(e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementSeconds() : $scope.decrementSeconds());
	      }
	      e.preventDefault();
	    });
	  };

	  // Respond on up/down arrowkeys
	  this.setupArrowkeyEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
	    hoursInputEl.bind('keydown', function(e) {
	      if (!disabled) {
	        if (e.which === 38) { // up
	          e.preventDefault();
	          $scope.incrementHours();
	          $scope.$apply();
	        } else if (e.which === 40) { // down
	          e.preventDefault();
	          $scope.decrementHours();
	          $scope.$apply();
	        }
	      }
	    });

	    minutesInputEl.bind('keydown', function(e) {
	      if (!disabled) {
	        if (e.which === 38) { // up
	          e.preventDefault();
	          $scope.incrementMinutes();
	          $scope.$apply();
	        } else if (e.which === 40) { // down
	          e.preventDefault();
	          $scope.decrementMinutes();
	          $scope.$apply();
	        }
	      }
	    });

	    secondsInputEl.bind('keydown', function(e) {
	      if (!disabled) {
	        if (e.which === 38) { // up
	          e.preventDefault();
	          $scope.incrementSeconds();
	          $scope.$apply();
	        } else if (e.which === 40) { // down
	          e.preventDefault();
	          $scope.decrementSeconds();
	          $scope.$apply();
	        }
	      }
	    });
	  };

	  this.setupInputEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
	    if ($scope.readonlyInput) {
	      $scope.updateHours = angular.noop;
	      $scope.updateMinutes = angular.noop;
	      $scope.updateSeconds = angular.noop;
	      return;
	    }

	    var invalidate = function(invalidHours, invalidMinutes, invalidSeconds) {
	      ngModelCtrl.$setViewValue(null);
	      ngModelCtrl.$setValidity('time', false);
	      if (angular.isDefined(invalidHours)) {
	        $scope.invalidHours = invalidHours;
	      }

	      if (angular.isDefined(invalidMinutes)) {
	        $scope.invalidMinutes = invalidMinutes;
	      }

	      if (angular.isDefined(invalidSeconds)) {
	        $scope.invalidSeconds = invalidSeconds;
	      }
	    };

	    $scope.updateHours = function() {
	      var hours = getHoursFromTemplate(),
	        minutes = getMinutesFromTemplate();

	      ngModelCtrl.$setDirty();

	      if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	        selected.setHours(hours);
	        selected.setMinutes(minutes);
	        if (selected < min || selected > max) {
	          invalidate(true);
	        } else {
	          refresh('h');
	        }
	      } else {
	        invalidate(true);
	      }
	    };

	    hoursInputEl.bind('blur', function(e) {
	      ngModelCtrl.$setTouched();
	      if (modelIsEmpty()) {
	        makeValid();
	      } else if ($scope.hours === null || $scope.hours === '') {
	        invalidate(true);
	      } else if (!$scope.invalidHours && $scope.hours < 10) {
	        $scope.$apply(function() {
	          $scope.hours = pad($scope.hours, !padHours);
	        });
	      }
	    });

	    $scope.updateMinutes = function() {
	      var minutes = getMinutesFromTemplate(),
	        hours = getHoursFromTemplate();

	      ngModelCtrl.$setDirty();

	      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
	        selected.setHours(hours);
	        selected.setMinutes(minutes);
	        if (selected < min || selected > max) {
	          invalidate(undefined, true);
	        } else {
	          refresh('m');
	        }
	      } else {
	        invalidate(undefined, true);
	      }
	    };

	    minutesInputEl.bind('blur', function(e) {
	      ngModelCtrl.$setTouched();
	      if (modelIsEmpty()) {
	        makeValid();
	      } else if ($scope.minutes === null) {
	        invalidate(undefined, true);
	      } else if (!$scope.invalidMinutes && $scope.minutes < 10) {
	        $scope.$apply(function() {
	          $scope.minutes = pad($scope.minutes);
	        });
	      }
	    });

	    $scope.updateSeconds = function() {
	      var seconds = getSecondsFromTemplate();

	      ngModelCtrl.$setDirty();

	      if (angular.isDefined(seconds)) {
	        selected.setSeconds(seconds);
	        refresh('s');
	      } else {
	        invalidate(undefined, undefined, true);
	      }
	    };

	    secondsInputEl.bind('blur', function(e) {
	      if (modelIsEmpty()) {
	        makeValid();
	      } else if (!$scope.invalidSeconds && $scope.seconds < 10) {
	        $scope.$apply( function() {
	          $scope.seconds = pad($scope.seconds);
	        });
	      }
	    });

	  };

	  this.render = function() {
	    var date = ngModelCtrl.$viewValue;

	    if (isNaN(date)) {
	      ngModelCtrl.$setValidity('time', false);
	      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	    } else {
	      if (date) {
	        selected = date;
	      }

	      if (selected < min || selected > max) {
	        ngModelCtrl.$setValidity('time', false);
	        $scope.invalidHours = true;
	        $scope.invalidMinutes = true;
	      } else {
	        makeValid();
	      }
	      updateTemplate();
	    }
	  };

	  // Call internally when we know that model is valid.
	  function refresh(keyboardChange) {
	    makeValid();
	    ngModelCtrl.$setViewValue(new Date(selected));
	    updateTemplate(keyboardChange);
	  }

	  function makeValid() {
	    ngModelCtrl.$setValidity('time', true);
	    $scope.invalidHours = false;
	    $scope.invalidMinutes = false;
	    $scope.invalidSeconds = false;
	  }

	  function updateTemplate(keyboardChange) {
	    if (!ngModelCtrl.$modelValue) {
	      $scope.hours = null;
	      $scope.minutes = null;
	      $scope.seconds = null;
	      $scope.meridian = meridians[0];
	    } else {
	      var hours = selected.getHours(),
	        minutes = selected.getMinutes(),
	        seconds = selected.getSeconds();

	      if ($scope.showMeridian) {
	        hours = hours === 0 || hours === 12 ? 12 : hours % 12; // Convert 24 to 12 hour system
	      }

	      $scope.hours = keyboardChange === 'h' ? hours : pad(hours, !padHours);
	      if (keyboardChange !== 'm') {
	        $scope.minutes = pad(minutes);
	      }
	      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];

	      if (keyboardChange !== 's') {
	        $scope.seconds = pad(seconds);
	      }
	      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
	    }
	  }

	  function addSecondsToSelected(seconds) {
	    selected = addSeconds(selected, seconds);
	    refresh();
	  }

	  function addMinutes(selected, minutes) {
	    return addSeconds(selected, minutes*60);
	  }

	  function addSeconds(date, seconds) {
	    var dt = new Date(date.getTime() + seconds * 1000);
	    var newDate = new Date(date);
	    newDate.setHours(dt.getHours(), dt.getMinutes(), dt.getSeconds());
	    return newDate;
	  }

	  function modelIsEmpty() {
	    return ($scope.hours === null || $scope.hours === '') &&
	      ($scope.minutes === null || $scope.minutes === '') &&
	      (!$scope.showSeconds || $scope.showSeconds && ($scope.seconds === null || $scope.seconds === ''));
	  }

	  $scope.showSpinners = angular.isDefined($attrs.showSpinners) ?
	    $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;

	  $scope.incrementHours = function() {
	    if (!$scope.noIncrementHours()) {
	      addSecondsToSelected(hourStep * 60 * 60);
	    }
	  };

	  $scope.decrementHours = function() {
	    if (!$scope.noDecrementHours()) {
	      addSecondsToSelected(-hourStep * 60 * 60);
	    }
	  };

	  $scope.incrementMinutes = function() {
	    if (!$scope.noIncrementMinutes()) {
	      addSecondsToSelected(minuteStep * 60);
	    }
	  };

	  $scope.decrementMinutes = function() {
	    if (!$scope.noDecrementMinutes()) {
	      addSecondsToSelected(-minuteStep * 60);
	    }
	  };

	  $scope.incrementSeconds = function() {
	    if (!$scope.noIncrementSeconds()) {
	      addSecondsToSelected(secondStep);
	    }
	  };

	  $scope.decrementSeconds = function() {
	    if (!$scope.noDecrementSeconds()) {
	      addSecondsToSelected(-secondStep);
	    }
	  };

	  $scope.toggleMeridian = function() {
	    var minutes = getMinutesFromTemplate(),
	        hours = getHoursFromTemplate();

	    if (!$scope.noToggleMeridian()) {
	      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
	        addSecondsToSelected(12 * 60 * (selected.getHours() < 12 ? 60 : -60));
	      } else {
	        $scope.meridian = $scope.meridian === meridians[0] ? meridians[1] : meridians[0];
	      }
	    }
	  };

	  $scope.blur = function() {
	    ngModelCtrl.$setTouched();
	  };

	  $scope.$on('$destroy', function() {
	    while (watchers.length) {
	      watchers.shift()();
	    }
	  });
	}])

	.directive('uibTimepicker', ['uibTimepickerConfig', function(uibTimepickerConfig) {
	  return {
	    require: ['uibTimepicker', '?^ngModel'],
	    controller: 'UibTimepickerController',
	    controllerAs: 'timepicker',
	    replace: true,
	    scope: {},
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || uibTimepickerConfig.templateUrl;
	    },
	    link: function(scope, element, attrs, ctrls) {
	      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (ngModelCtrl) {
	        timepickerCtrl.init(ngModelCtrl, element.find('input'));
	      }
	    }
	  };
	}]);

	angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.debounce', 'ui.bootstrap.position'])

	/**
	 * A helper service that can parse typeahead's syntax (string provided by users)
	 * Extracted to a separate service for ease of unit testing
	 */
	  .factory('uibTypeaheadParser', ['$parse', function($parse) {
	    //                      00000111000000000000022200000000000000003333333333333330000000000044000
	    var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
	    return {
	      parse: function(input) {
	        var match = input.match(TYPEAHEAD_REGEXP);
	        if (!match) {
	          throw new Error(
	            'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
	              ' but got "' + input + '".');
	        }

	        return {
	          itemName: match[3],
	          source: $parse(match[4]),
	          viewMapper: $parse(match[2] || match[1]),
	          modelMapper: $parse(match[1])
	        };
	      }
	    };
	  }])

	  .controller('UibTypeaheadController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$$debounce', '$uibPosition', 'uibTypeaheadParser',
	    function(originalScope, element, attrs, $compile, $parse, $q, $timeout, $document, $window, $rootScope, $$debounce, $position, typeaheadParser) {
	    var HOT_KEYS = [9, 13, 27, 38, 40];
	    var eventDebounceTime = 200;
	    var modelCtrl, ngModelOptions;
	    //SUPPORTED ATTRIBUTES (OPTIONS)

	    //minimal no of characters that needs to be entered before typeahead kicks-in
	    var minLength = originalScope.$eval(attrs.typeaheadMinLength);
	    if (!minLength && minLength !== 0) {
	      minLength = 1;
	    }

	    originalScope.$watch(attrs.typeaheadMinLength, function (newVal) {
	        minLength = !newVal && newVal !== 0 ? 1 : newVal;
	    });
	    
	    //minimal wait time after last character typed before typeahead kicks-in
	    var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

	    //should it restrict model values to the ones selected from the popup only?
	    var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
	    originalScope.$watch(attrs.typeaheadEditable, function (newVal) {
	      isEditable = newVal !== false;
	    });

	    //binding to a variable that indicates if matches are being retrieved asynchronously
	    var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

	    //a callback executed when a match is selected
	    var onSelectCallback = $parse(attrs.typeaheadOnSelect);

	    //should it select highlighted popup value when losing focus?
	    var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;

	    //binding to a variable that indicates if there were no results after the query is completed
	    var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;

	    var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

	    var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

	    var appendTo = attrs.typeaheadAppendTo ?
	      originalScope.$eval(attrs.typeaheadAppendTo) : null;

	    var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

	    //If input matches an item of the list exactly, select it automatically
	    var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;

	    //binding to a variable that indicates if dropdown is open
	    var isOpenSetter = $parse(attrs.typeaheadIsOpen).assign || angular.noop;

	    var showHint = originalScope.$eval(attrs.typeaheadShowHint) || false;

	    //INTERNAL VARIABLES

	    //model setter executed upon match selection
	    var parsedModel = $parse(attrs.ngModel);
	    var invokeModelSetter = $parse(attrs.ngModel + '($$$p)');
	    var $setModelValue = function(scope, newValue) {
	      if (angular.isFunction(parsedModel(originalScope)) &&
	        ngModelOptions && ngModelOptions.$options && ngModelOptions.$options.getterSetter) {
	        return invokeModelSetter(scope, {$$$p: newValue});
	      }

	      return parsedModel.assign(scope, newValue);
	    };

	    //expressions used by typeahead
	    var parserResult = typeaheadParser.parse(attrs.uibTypeahead);

	    var hasFocus;

	    //Used to avoid bug in iOS webview where iOS keyboard does not fire
	    //mousedown & mouseup events
	    //Issue #3699
	    var selected;

	    //create a child scope for the typeahead directive so we are not polluting original scope
	    //with typeahead-specific data (matches, query etc.)
	    var scope = originalScope.$new();
	    var offDestroy = originalScope.$on('$destroy', function() {
	      scope.$destroy();
	    });
	    scope.$on('$destroy', offDestroy);

	    // WAI-ARIA
	    var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
	    element.attr({
	      'aria-autocomplete': 'list',
	      'aria-expanded': false,
	      'aria-owns': popupId
	    });

	    var inputsContainer, hintInputElem;
	    //add read-only input to show hint
	    if (showHint) {
	      inputsContainer = angular.element('<div></div>');
	      inputsContainer.css('position', 'relative');
	      element.after(inputsContainer);
	      hintInputElem = element.clone();
	      hintInputElem.attr('placeholder', '');
	      hintInputElem.attr('tabindex', '-1');
	      hintInputElem.val('');
	      hintInputElem.css({
	        'position': 'absolute',
	        'top': '0px',
	        'left': '0px',
	        'border-color': 'transparent',
	        'box-shadow': 'none',
	        'opacity': 1,
	        'background': 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)',
	        'color': '#999'
	      });
	      element.css({
	        'position': 'relative',
	        'vertical-align': 'top',
	        'background-color': 'transparent'
	      });
	      inputsContainer.append(hintInputElem);
	      hintInputElem.after(element);
	    }

	    //pop-up element used to display matches
	    var popUpEl = angular.element('<div uib-typeahead-popup></div>');
	    popUpEl.attr({
	      id: popupId,
	      matches: 'matches',
	      active: 'activeIdx',
	      select: 'select(activeIdx, evt)',
	      'move-in-progress': 'moveInProgress',
	      query: 'query',
	      position: 'position',
	      'assign-is-open': 'assignIsOpen(isOpen)',
	      debounce: 'debounceUpdate'
	    });
	    //custom item template
	    if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
	      popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
	    }

	    if (angular.isDefined(attrs.typeaheadPopupTemplateUrl)) {
	      popUpEl.attr('popup-template-url', attrs.typeaheadPopupTemplateUrl);
	    }

	    var resetHint = function() {
	      if (showHint) {
	        hintInputElem.val('');
	      }
	    };

	    var resetMatches = function() {
	      scope.matches = [];
	      scope.activeIdx = -1;
	      element.attr('aria-expanded', false);
	      resetHint();
	    };

	    var getMatchId = function(index) {
	      return popupId + '-option-' + index;
	    };

	    // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
	    // This attribute is added or removed automatically when the `activeIdx` changes.
	    scope.$watch('activeIdx', function(index) {
	      if (index < 0) {
	        element.removeAttr('aria-activedescendant');
	      } else {
	        element.attr('aria-activedescendant', getMatchId(index));
	      }
	    });

	    var inputIsExactMatch = function(inputValue, index) {
	      if (scope.matches.length > index && inputValue) {
	        return inputValue.toUpperCase() === scope.matches[index].label.toUpperCase();
	      }

	      return false;
	    };

	    var getMatchesAsync = function(inputValue, evt) {
	      var locals = {$viewValue: inputValue};
	      isLoadingSetter(originalScope, true);
	      isNoResultsSetter(originalScope, false);
	      $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
	        //it might happen that several async queries were in progress if a user were typing fast
	        //but we are interested only in responses that correspond to the current view value
	        var onCurrentRequest = inputValue === modelCtrl.$viewValue;
	        if (onCurrentRequest && hasFocus) {
	          if (matches && matches.length > 0) {
	            scope.activeIdx = focusFirst ? 0 : -1;
	            isNoResultsSetter(originalScope, false);
	            scope.matches.length = 0;

	            //transform labels
	            for (var i = 0; i < matches.length; i++) {
	              locals[parserResult.itemName] = matches[i];
	              scope.matches.push({
	                id: getMatchId(i),
	                label: parserResult.viewMapper(scope, locals),
	                model: matches[i]
	              });
	            }

	            scope.query = inputValue;
	            //position pop-up with matches - we need to re-calculate its position each time we are opening a window
	            //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
	            //due to other elements being rendered
	            recalculatePosition();

	            element.attr('aria-expanded', true);

	            //Select the single remaining option if user input matches
	            if (selectOnExact && scope.matches.length === 1 && inputIsExactMatch(inputValue, 0)) {
	              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
	                $$debounce(function() {
	                  scope.select(0, evt);
	                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
	              } else {
	                scope.select(0, evt);
	              }
	            }

	            if (showHint) {
	              var firstLabel = scope.matches[0].label;
	              if (angular.isString(inputValue) &&
	                inputValue.length > 0 &&
	                firstLabel.slice(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()) {
	                hintInputElem.val(inputValue + firstLabel.slice(inputValue.length));
	              } else {
	                hintInputElem.val('');
	              }
	            }
	          } else {
	            resetMatches();
	            isNoResultsSetter(originalScope, true);
	          }
	        }
	        if (onCurrentRequest) {
	          isLoadingSetter(originalScope, false);
	        }
	      }, function() {
	        resetMatches();
	        isLoadingSetter(originalScope, false);
	        isNoResultsSetter(originalScope, true);
	      });
	    };

	    // bind events only if appendToBody params exist - performance feature
	    if (appendToBody) {
	      angular.element($window).on('resize', fireRecalculating);
	      $document.find('body').on('scroll', fireRecalculating);
	    }

	    // Declare the debounced function outside recalculating for
	    // proper debouncing
	    var debouncedRecalculate = $$debounce(function() {
	      // if popup is visible
	      if (scope.matches.length) {
	        recalculatePosition();
	      }

	      scope.moveInProgress = false;
	    }, eventDebounceTime);

	    // Default progress type
	    scope.moveInProgress = false;

	    function fireRecalculating() {
	      if (!scope.moveInProgress) {
	        scope.moveInProgress = true;
	        scope.$digest();
	      }

	      debouncedRecalculate();
	    }

	    // recalculate actual position and set new values to scope
	    // after digest loop is popup in right position
	    function recalculatePosition() {
	      scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	      scope.position.top += element.prop('offsetHeight');
	    }

	    //we need to propagate user's query so we can higlight matches
	    scope.query = undefined;

	    //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
	    var timeoutPromise;

	    var scheduleSearchWithTimeout = function(inputValue) {
	      timeoutPromise = $timeout(function() {
	        getMatchesAsync(inputValue);
	      }, waitTime);
	    };

	    var cancelPreviousTimeout = function() {
	      if (timeoutPromise) {
	        $timeout.cancel(timeoutPromise);
	      }
	    };

	    resetMatches();

	    scope.assignIsOpen = function (isOpen) {
	      isOpenSetter(originalScope, isOpen);
	    };

	    scope.select = function(activeIdx, evt) {
	      //called from within the $digest() cycle
	      var locals = {};
	      var model, item;

	      selected = true;
	      locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
	      model = parserResult.modelMapper(originalScope, locals);
	      $setModelValue(originalScope, model);
	      modelCtrl.$setValidity('editable', true);
	      modelCtrl.$setValidity('parse', true);

	      onSelectCallback(originalScope, {
	        $item: item,
	        $model: model,
	        $label: parserResult.viewMapper(originalScope, locals),
	        $event: evt
	      });

	      resetMatches();

	      //return focus to the input element if a match was selected via a mouse click event
	      // use timeout to avoid $rootScope:inprog error
	      if (scope.$eval(attrs.typeaheadFocusOnSelect) !== false) {
	        $timeout(function() { element[0].focus(); }, 0, false);
	      }
	    };

	    //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
	    element.on('keydown', function(evt) {
	      //typeahead is open and an "interesting" key was pressed
	      if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
	        return;
	      }

	      /**
	       * if there's nothing selected (i.e. focusFirst) and enter or tab is hit
	       * or
	       * shift + tab is pressed to bring focus to the previous element
	       * then clear the results
	       */
	      if (scope.activeIdx === -1 && (evt.which === 9 || evt.which === 13) || evt.which === 9 && !!evt.shiftKey) {
	        resetMatches();
	        scope.$digest();
	        return;
	      }

	      evt.preventDefault();
	      var target;
	      switch (evt.which) {
	        case 9:
	        case 13:
	          scope.$apply(function () {
	            if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
	              $$debounce(function() {
	                scope.select(scope.activeIdx, evt);
	              }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
	            } else {
	              scope.select(scope.activeIdx, evt);
	            }
	          });
	          break;
	        case 27:
	          evt.stopPropagation();

	          resetMatches();
	          originalScope.$digest();
	          break;
	        case 38:
	          scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
	          scope.$digest();
	          target = popUpEl.find('li')[scope.activeIdx];
	          target.parentNode.scrollTop = target.offsetTop;
	          break;
	        case 40:
	          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
	          scope.$digest();
	          target = popUpEl.find('li')[scope.activeIdx];
	          target.parentNode.scrollTop = target.offsetTop;
	          break;
	      }
	    });

	    element.bind('focus', function (evt) {
	      hasFocus = true;
	      if (minLength === 0 && !modelCtrl.$viewValue) {
	        $timeout(function() {
	          getMatchesAsync(modelCtrl.$viewValue, evt);
	        }, 0);
	      }
	    });

	    element.bind('blur', function(evt) {
	      if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
	        selected = true;
	        scope.$apply(function() {
	          if (angular.isObject(scope.debounceUpdate) && angular.isNumber(scope.debounceUpdate.blur)) {
	            $$debounce(function() {
	              scope.select(scope.activeIdx, evt);
	            }, scope.debounceUpdate.blur);
	          } else {
	            scope.select(scope.activeIdx, evt);
	          }
	        });
	      }
	      if (!isEditable && modelCtrl.$error.editable) {
	        modelCtrl.$viewValue = '';
	        // Reset validity as we are clearing
	        modelCtrl.$setValidity('editable', true);
	        modelCtrl.$setValidity('parse', true);
	        element.val('');
	      }
	      hasFocus = false;
	      selected = false;
	    });

	    // Keep reference to click handler to unbind it.
	    var dismissClickHandler = function(evt) {
	      // Issue #3973
	      // Firefox treats right click as a click on document
	      if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
	        resetMatches();
	        if (!$rootScope.$$phase) {
	          originalScope.$digest();
	        }
	      }
	    };

	    $document.on('click', dismissClickHandler);

	    originalScope.$on('$destroy', function() {
	      $document.off('click', dismissClickHandler);
	      if (appendToBody || appendTo) {
	        $popup.remove();
	      }

	      if (appendToBody) {
	        angular.element($window).off('resize', fireRecalculating);
	        $document.find('body').off('scroll', fireRecalculating);
	      }
	      // Prevent jQuery cache memory leak
	      popUpEl.remove();

	      if (showHint) {
	          inputsContainer.remove();
	      }
	    });

	    var $popup = $compile(popUpEl)(scope);

	    if (appendToBody) {
	      $document.find('body').append($popup);
	    } else if (appendTo) {
	      angular.element(appendTo).eq(0).append($popup);
	    } else {
	      element.after($popup);
	    }

	    this.init = function(_modelCtrl, _ngModelOptions) {
	      modelCtrl = _modelCtrl;
	      ngModelOptions = _ngModelOptions;

	      scope.debounceUpdate = modelCtrl.$options && $parse(modelCtrl.$options.debounce)(originalScope);

	      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
	      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
	      modelCtrl.$parsers.unshift(function(inputValue) {
	        hasFocus = true;

	        if (minLength === 0 || inputValue && inputValue.length >= minLength) {
	          if (waitTime > 0) {
	            cancelPreviousTimeout();
	            scheduleSearchWithTimeout(inputValue);
	          } else {
	            getMatchesAsync(inputValue);
	          }
	        } else {
	          isLoadingSetter(originalScope, false);
	          cancelPreviousTimeout();
	          resetMatches();
	        }

	        if (isEditable) {
	          return inputValue;
	        }

	        if (!inputValue) {
	          // Reset in case user had typed something previously.
	          modelCtrl.$setValidity('editable', true);
	          return null;
	        }

	        modelCtrl.$setValidity('editable', false);
	        return undefined;
	      });

	      modelCtrl.$formatters.push(function(modelValue) {
	        var candidateViewValue, emptyViewValue;
	        var locals = {};

	        // The validity may be set to false via $parsers (see above) if
	        // the model is restricted to selected values. If the model
	        // is set manually it is considered to be valid.
	        if (!isEditable) {
	          modelCtrl.$setValidity('editable', true);
	        }

	        if (inputFormatter) {
	          locals.$model = modelValue;
	          return inputFormatter(originalScope, locals);
	        }

	        //it might happen that we don't have enough info to properly render input value
	        //we need to check for this situation and simply return model value if we can't apply custom formatting
	        locals[parserResult.itemName] = modelValue;
	        candidateViewValue = parserResult.viewMapper(originalScope, locals);
	        locals[parserResult.itemName] = undefined;
	        emptyViewValue = parserResult.viewMapper(originalScope, locals);

	        return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
	      });
	    };
	  }])

	  .directive('uibTypeahead', function() {
	    return {
	      controller: 'UibTypeaheadController',
	      require: ['ngModel', '^?ngModelOptions', 'uibTypeahead'],
	      link: function(originalScope, element, attrs, ctrls) {
	        ctrls[2].init(ctrls[0], ctrls[1]);
	      }
	    };
	  })

	  .directive('uibTypeaheadPopup', ['$$debounce', function($$debounce) {
	    return {
	      scope: {
	        matches: '=',
	        query: '=',
	        active: '=',
	        position: '&',
	        moveInProgress: '=',
	        select: '&',
	        assignIsOpen: '&',
	        debounce: '&'
	      },
	      replace: true,
	      templateUrl: function(element, attrs) {
	        return attrs.popupTemplateUrl || 'uib/template/typeahead/typeahead-popup.html';
	      },
	      link: function(scope, element, attrs) {
	        scope.templateUrl = attrs.templateUrl;

	        scope.isOpen = function() {
	          var isDropdownOpen = scope.matches.length > 0;
	          scope.assignIsOpen({ isOpen: isDropdownOpen });
	          return isDropdownOpen;
	        };

	        scope.isActive = function(matchIdx) {
	          return scope.active === matchIdx;
	        };

	        scope.selectActive = function(matchIdx) {
	          scope.active = matchIdx;
	        };

	        scope.selectMatch = function(activeIdx, evt) {
	          var debounce = scope.debounce();
	          if (angular.isNumber(debounce) || angular.isObject(debounce)) {
	            $$debounce(function() {
	              scope.select({activeIdx: activeIdx, evt: evt});
	            }, angular.isNumber(debounce) ? debounce : debounce['default']);
	          } else {
	            scope.select({activeIdx: activeIdx, evt: evt});
	          }
	        };
	      }
	    };
	  }])

	  .directive('uibTypeaheadMatch', ['$templateRequest', '$compile', '$parse', function($templateRequest, $compile, $parse) {
	    return {
	      scope: {
	        index: '=',
	        match: '=',
	        query: '='
	      },
	      link: function(scope, element, attrs) {
	        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'uib/template/typeahead/typeahead-match.html';
	        $templateRequest(tplUrl).then(function(tplContent) {
	          var tplEl = angular.element(tplContent.trim());
	          element.replaceWith(tplEl);
	          $compile(tplEl)(scope);
	        });
	      }
	    };
	  }])

	  .filter('uibTypeaheadHighlight', ['$sce', '$injector', '$log', function($sce, $injector, $log) {
	    var isSanitizePresent;
	    isSanitizePresent = $injector.has('$sanitize');

	    function escapeRegexp(queryToEscape) {
	      // Regex: capture the whole query string and replace it with the string that will be used to match
	      // the results, for example if the capture is "a" the result will be \a
	      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	    }

	    function containsHtml(matchItem) {
	      return /<.*>/g.test(matchItem);
	    }

	    return function(matchItem, query) {
	      if (!isSanitizePresent && containsHtml(matchItem)) {
	        $log.warn('Unsafe use of typeahead please use ngSanitize'); // Warn the user about the danger
	      }
	      matchItem = query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem; // Replaces the capture string with a the same string inside of a "strong" tag
	      if (!isSanitizePresent) {
	        matchItem = $sce.trustAsHtml(matchItem); // If $sanitize is not present we pack the string in a $sce object for the ng-bind-html directive
	      }
	      return matchItem;
	    };
	  }]);

	angular.module("uib/template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/accordion/accordion-group.html",
	    "<div class=\"panel\" ng-class=\"panelClass || 'panel-default'\">\n" +
	    "  <div role=\"tab\" id=\"{{::headingId}}\" aria-selected=\"{{isOpen}}\" class=\"panel-heading\" ng-keypress=\"toggleOpen($event)\">\n" +
	    "    <h4 class=\"panel-title\">\n" +
	    "      <a role=\"button\" data-toggle=\"collapse\" href aria-expanded=\"{{isOpen}}\" aria-controls=\"{{::panelId}}\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\"><span uib-accordion-header ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
	    "    </h4>\n" +
	    "  </div>\n" +
	    "  <div id=\"{{::panelId}}\" aria-labelledby=\"{{::headingId}}\" aria-hidden=\"{{!isOpen}}\" role=\"tabpanel\" class=\"panel-collapse collapse\" uib-collapse=\"!isOpen\">\n" +
	    "    <div class=\"panel-body\" ng-transclude></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/accordion/accordion.html",
	    "<div role=\"tablist\" class=\"panel-group\" ng-transclude></div>");
	}]);

	angular.module("uib/template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/alert/alert.html",
	    "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissible' : null]\" role=\"alert\">\n" +
	    "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close({$event: $event})\">\n" +
	    "        <span aria-hidden=\"true\">&times;</span>\n" +
	    "        <span class=\"sr-only\">Close</span>\n" +
	    "    </button>\n" +
	    "    <div ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/carousel/carousel.html",
	    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
	    "  <div class=\"carousel-inner\" ng-transclude></div>\n" +
	    "  <a role=\"button\" href class=\"left carousel-control\" ng-click=\"prev()\" ng-class=\"{ disabled: isPrevDisabled() }\" ng-show=\"slides.length > 1\">\n" +
	    "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
	    "    <span class=\"sr-only\">previous</span>\n" +
	    "  </a>\n" +
	    "  <a role=\"button\" href class=\"right carousel-control\" ng-click=\"next()\" ng-class=\"{ disabled: isNextDisabled() }\" ng-show=\"slides.length > 1\">\n" +
	    "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
	    "    <span class=\"sr-only\">next</span>\n" +
	    "  </a>\n" +
	    "  <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
	    "    <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" +
	    "      <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" +
	    "    </li>\n" +
	    "  </ol>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/carousel/slide.html",
	    "<div ng-class=\"{\n" +
	    "    'active': active\n" +
	    "  }\" class=\"item text-center\" ng-transclude></div>\n" +
	    "");
	}]);

	angular.module("uib/template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/datepicker.html",
	    "<div class=\"uib-datepicker\" ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" +
	    "  <uib-daypicker ng-switch-when=\"day\" tabindex=\"0\"></uib-daypicker>\n" +
	    "  <uib-monthpicker ng-switch-when=\"month\" tabindex=\"0\"></uib-monthpicker>\n" +
	    "  <uib-yearpicker ng-switch-when=\"year\" tabindex=\"0\"></uib-yearpicker>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/day.html",
	    "<table class=\"uib-daypicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
	    "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"uib-weeks\" ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
	    "      <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=\"gridcell\"\n" +
	    "        id=\"{{::dt.uid}}\"\n" +
	    "        ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" class=\"btn btn-default btn-sm\"\n" +
	    "          uib-is-class=\"\n" +
	    "            'btn-info' for selectedDt,\n" +
	    "            'active' for activeDt\n" +
	    "            on dt\"\n" +
	    "          ng-click=\"select(dt.date)\"\n" +
	    "          ng-disabled=\"::dt.disabled\"\n" +
	    "          tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("uib/template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/month.html",
	    "<table class=\"uib-monthpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"uib-months\" ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row\" class=\"uib-month text-center\" role=\"gridcell\"\n" +
	    "        id=\"{{::dt.uid}}\"\n" +
	    "        ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" class=\"btn btn-default\"\n" +
	    "          uib-is-class=\"\n" +
	    "            'btn-info' for selectedDt,\n" +
	    "            'active' for activeDt\n" +
	    "            on dt\"\n" +
	    "          ng-click=\"select(dt.date)\"\n" +
	    "          ng-disabled=\"::dt.disabled\"\n" +
	    "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("uib/template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepicker/year.html",
	    "<table class=\"uib-yearpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"{{::columns - 2}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"uib-years\" ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row\" class=\"uib-year text-center\" role=\"gridcell\"\n" +
	    "        id=\"{{::dt.uid}}\"\n" +
	    "        ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" class=\"btn btn-default\"\n" +
	    "          uib-is-class=\"\n" +
	    "            'btn-info' for selectedDt,\n" +
	    "            'active' for activeDt\n" +
	    "            on dt\"\n" +
	    "          ng-click=\"select(dt.date)\"\n" +
	    "          ng-disabled=\"::dt.disabled\"\n" +
	    "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("uib/template/datepickerPopup/popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/datepickerPopup/popup.html",
	    "<div>\n" +
	    "  <ul class=\"uib-datepicker-popup dropdown-menu uib-position-measure\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
	    "    <li ng-transclude></li>\n" +
	    "    <li ng-if=\"showButtonBar\" class=\"uib-button-bar\">\n" +
	    "      <span class=\"btn-group pull-left\">\n" +
	    "        <button type=\"button\" class=\"btn btn-sm btn-info uib-datepicker-current\" ng-click=\"select('today', $event)\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" +
	    "        <button type=\"button\" class=\"btn btn-sm btn-danger uib-clear\" ng-click=\"select(null, $event)\">{{ getText('clear') }}</button>\n" +
	    "      </span>\n" +
	    "      <button type=\"button\" class=\"btn btn-sm btn-success pull-right uib-close\" ng-click=\"close($event)\">{{ getText('close') }}</button>\n" +
	    "    </li>\n" +
	    "  </ul>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/modal/backdrop.html",
	    "<div class=\"modal-backdrop\"\n" +
	    "     uib-modal-animation-class=\"fade\"\n" +
	    "     modal-in-class=\"in\"\n" +
	    "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" +
	    "></div>\n" +
	    "");
	}]);

	angular.module("uib/template/modal/window.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/modal/window.html",
	    "<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n" +
	    "    uib-modal-animation-class=\"fade\"\n" +
	    "    modal-in-class=\"in\"\n" +
	    "    ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\">\n" +
	    "    <div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/pager/pager.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/pager/pager.html",
	    "<ul class=\"pager\">\n" +
	    "  <li ng-class=\"{disabled: noPrevious()||ngDisabled, previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-class=\"{disabled: noNext()||ngDisabled, next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);

	angular.module("uib/template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/pagination/pagination.html",
	    "<ul class=\"pagination\">\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-first\"><a href ng-click=\"selectPage(1, $event)\">{{::getText('first')}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-prev\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-last\"><a href ng-click=\"selectPage(totalPages, $event)\">{{::getText('last')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);

	angular.module("uib/template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-html-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tooltip/tooltip-template-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\"\n" +
	    "    uib-tooltip-template-transclude=\"contentExp()\"\n" +
	    "    tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/popover/popover-html.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
	    "      <div class=\"popover-content\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/popover/popover-template.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/popover/popover-template.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
	    "      <div class=\"popover-content\"\n" +
	    "        uib-tooltip-template-transclude=\"contentExp()\"\n" +
	    "        tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/popover/popover.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  uib-tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
	    "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/progressbar/bar.html",
	    "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" +
	    "");
	}]);

	angular.module("uib/template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/progressbar/progress.html",
	    "<div class=\"progress\" ng-transclude aria-labelledby=\"{{::title}}\"></div>");
	}]);

	angular.module("uib/template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/progressbar/progressbar.html",
	    "<div class=\"progress\">\n" +
	    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/rating/rating.html",
	    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\" aria-valuetext=\"{{title}}\">\n" +
	    "    <span ng-repeat-start=\"r in range track by $index\" class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
	    "    <i ng-repeat-end ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\" ng-attr-title=\"{{r.title}}\"></i>\n" +
	    "</span>\n" +
	    "");
	}]);

	angular.module("uib/template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tabs/tab.html",
	    "<li ng-class=\"[{active: active, disabled: disabled}, classes]\" class=\"uib-tab nav-item\">\n" +
	    "  <a href ng-click=\"select($event)\" class=\"nav-link\" uib-tab-heading-transclude>{{heading}}</a>\n" +
	    "</li>\n" +
	    "");
	}]);

	angular.module("uib/template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/tabs/tabset.html",
	    "<div>\n" +
	    "  <ul class=\"nav nav-{{tabset.type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
	    "  <div class=\"tab-content\">\n" +
	    "    <div class=\"tab-pane\"\n" +
	    "         ng-repeat=\"tab in tabset.tabs\"\n" +
	    "         ng-class=\"{active: tabset.active === tab.index}\"\n" +
	    "         uib-tab-content-transclude=\"tab\">\n" +
	    "    </div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("uib/template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/timepicker/timepicker.html",
	    "<table class=\"uib-timepicker\">\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td class=\"uib-increment hours\"><a ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td class=\"uib-increment minutes\"><a ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
	    "      <td ng-show=\"showSeconds\" class=\"uib-increment seconds\"><a ng-click=\"incrementSeconds()\" ng-class=\"{disabled: noIncrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementSeconds()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <td class=\"form-group uib-time hours\" ng-class=\"{'has-error': invalidHours}\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" placeholder=\"HH\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementHours()\" ng-blur=\"blur()\">\n" +
	    "      </td>\n" +
	    "      <td class=\"uib-separator\">:</td>\n" +
	    "      <td class=\"form-group uib-time minutes\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" placeholder=\"MM\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementMinutes()\" ng-blur=\"blur()\">\n" +
	    "      </td>\n" +
	    "      <td ng-show=\"showSeconds\" class=\"uib-separator\">:</td>\n" +
	    "      <td class=\"form-group uib-time seconds\" ng-class=\"{'has-error': invalidSeconds}\" ng-show=\"showSeconds\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" placeholder=\"SS\" ng-model=\"seconds\" ng-change=\"updateSeconds()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementSeconds()\" ng-blur=\"blur()\">\n" +
	    "      </td>\n" +
	    "      <td ng-show=\"showMeridian\" class=\"uib-time am-pm\"><button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\" ng-disabled=\"noToggleMeridian()\" tabindex=\"{{::tabindex}}\">{{meridian}}</button></td>\n" +
	    "    </tr>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td class=\"uib-decrement hours\"><a ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td class=\"uib-decrement minutes\"><a ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
	    "      <td ng-show=\"showSeconds\" class=\"uib-decrement seconds\"><a ng-click=\"decrementSeconds()\" ng-class=\"{disabled: noDecrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementSeconds()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("uib/template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/typeahead/typeahead-match.html",
	    "<a href\n" +
	    "   tabindex=\"-1\"\n" +
	    "   ng-bind-html=\"match.label | uibTypeaheadHighlight:query\"\n" +
	    "   ng-attr-title=\"{{match.label}}\"></a>\n" +
	    "");
	}]);

	angular.module("uib/template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("uib/template/typeahead/typeahead-popup.html",
	    "<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+'px', left: position().left+'px'}\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
	    "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index, $event)\" role=\"option\" id=\"{{::match.id}}\">\n" +
	    "        <div uib-typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
	    "    </li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	angular.module('ui.bootstrap.carousel').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'); angular.$$uibCarouselCss = true; });
	angular.module('ui.bootstrap.datepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'); angular.$$uibDatepickerCss = true; });
	angular.module('ui.bootstrap.position').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'); angular.$$uibPositionCss = true; });
	angular.module('ui.bootstrap.datepickerPopup').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerpopupCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'); angular.$$uibDatepickerpopupCss = true; });
	angular.module('ui.bootstrap.tooltip').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'); angular.$$uibTooltipCss = true; });
	angular.module('ui.bootstrap.timepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-time input{width:50px;}</style>'); angular.$$uibTimepickerCss = true; });
	angular.module('ui.bootstrap.typeahead').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTypeaheadCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'); angular.$$uibTypeaheadCss = true; });

/***/ },
/* 198 */
/***/ function(module, exports) {

	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		/* global angular */
		'use strict';
		var dragularDirective = __webpack_require__(1);
		var dragularService = __webpack_require__(2);

		/**
		 * Dragular 4.1.0 by Luckylooke https://github.com/luckylooke/dragular
		 * Angular version of dragula https://github.com/bevacqua/dragula
		 */
		module.exports = 'dragularModule';

		angular
		  .module('dragularModule', [])
		  .factory('dragularService', dragularService)
		  .directive('dragular', dragularDirective);


	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		'use strict';

		/**
		 * dragular Directive by Luckylooke https://github.com/luckylooke/dragular
		 * Angular version of dragula https://github.com/bevacqua/dragula
		 */

		var dragular = function (dragularService) {
		  return {
		    restrict: 'A',
		    link: function($scope, iElm, iAttrs) {

		      var drake,
		        options = $scope.$eval(iAttrs.dragular) || tryJson(iAttrs.dragular) || {};

		      function tryJson(json) {
		        try { // I dont like try catch solutions but I havent find sattisfying way of chcecking json validity.
		          return JSON.parse(json);
		        } catch (e) {
		          return undefined;
		        }
		      }

		      if(options && options.containersModel && typeof options.containersModel === 'string'){
		        options.containersModel = $scope.$eval(options.containersModel);
		      }

		      if(options && options.dynamicModelAttribute){
		        // watch for model changes
		        $scope.$watch(function () {
		          return $scope.$eval(iAttrs.dragularModel);
		        }, function (newVal) {
		          if(newVal){
		            drake.containersModel = drake.sanitizeContainersModel($scope.$eval(newVal));
		          }
		        });
		      }else if(iAttrs.dragularModel){
		        // bind once and keep reference
		        options.containersModel = $scope.$eval(iAttrs.dragularModel);
		      }

		      if(iAttrs.dragularNameSpace){
		        options.nameSpace = iAttrs.dragularNameSpace.split(' ');
		      }

		      drake = dragularService(iElm[0], options);
		    }
		  };
		};

		dragular.$inject = ['dragularService'];

		module.exports = dragular;


	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {/* global angular */
		'use strict';

		/**
		 * dragular Service by Luckylooke https://github.com/luckylooke/dragular
		 * Angular version of dragula https://github.com/bevacqua/dragula
		 */

		var shared = { // sahred object between all service instances
		  classesCache: {}, // classes lookup cache
		  containersCtx: {}, // containers model
		  containers: {}, // containers
		  mirror: null, // mirror image
		  source: null, // source container
		  item: null, // item being dragged
		  copy: null, // copy flag
		  sourceItem: null, // item originaly dragged if copy is enabled
		  sourceModel: null, // source container model
		  sourceFilteredModel: null, // source container filtered model if relevant
		  target: null, // droppable container under drag item
		  targetCtx: null, // target container context
		  targetModel: null, // target container model
		  lastDropTarget: null, // last container item was over
		  offsetX: null, // reference x
		  offsetY: null, // reference y
		  moveX: null, // reference move x
		  moveY: null, // reference move y
		  offsetXr: null, // reference x right for boundingBox feature
		  offsetYb: null, // reference y bottom for boundingBox feature
		  clientX: null, // cache client x, init at grab, update at drag
		  clientY: null, // cache client y, init at grab, update at drag
		  mirrorWidth: null, // mirror width for boundingBox feature
		  mirrorHeight: null, // mirror height for boundingBox feature
		  initialSibling: null, // reference sibling when grabbed
		  currentSibling: null, // reference sibling now
		  initialIndex: null, // reference model index when grabbed
		  currentIndex: null, // reference model index now
		  tempModel: null, // if o.isContainer is used, model can be provided as well, it is temporary saved here during drags
		  dragOverEvents: {}, // drag over events fired on element behind cursor
		  lastElementBehindCursor: null, // last element behind cursor
		  grabbed: null // holds mousedown context until first mousemove
		};

		var dragularService = function ($rootScope, $compile) {
		  // abbreviations
		  var doc = document,
		      docElm = doc.documentElement;

		  // clean common/shared objects
		  service.cleanEnviroment = function cleanEnviroment() {
		    shared.classesCache = {};
		    shared.containersCtx = {};
		    shared.containers = {};
		    shared.mirror = undefined;
		  };

		  service.shared = shared;

		  return service;

		  // service definition
		  function service(arg0, arg1) {
		    var initialContainers = arg0 || [],
		      options = arg1 || {},
		      o, // shorthand for options
		      g = getBool, // shorthand for getBool
		      // defaults
		      defaultClasses = {
		        mirror: 'gu-mirror',
		        hide: 'gu-hide',
		        unselectable: 'gu-unselectable',
		        transit: 'gu-transit'
		      },
		      defaultEventNames = {
		        // drag-over DOM events
		        dragularenter: 'dragularenter',
		        dragularleave: 'dragularleave',
		        dragularrelease: 'dragularrelease',
		        // $scope events
		        dragularcloned: 'dragularcloned',
		        dragulardrag: 'dragulardrag',
		        dragularcancel: 'dragularcancel',
		        dragulardrop: 'dragulardrop',
		        dragularremove: 'dragularremove',
		        dragulardragend: 'dragulardragend',
		        dragularshadow: 'dragularshadow',
		        dragularover: 'dragularover',
		        dragularout: 'dragularout'
		      },
		      defaultOptions = { // options with defaults
		        copyOptions: false, // copy options object when provided
		        classes: defaultClasses, // classes used by dragular
		        eventNames: defaultEventNames, // event names used by dragular
		        containers: false, // initial containers provided via options object (are provided via parameter by default)
		        containersModel: false, // if provided, model will be synced with DOM
		        containersFilteredModel: false, // if provided, dragular will handle filtered model cases
		        isContainer: never, // potential target can be forced to be container by custom logic
		        isContainerModel: getEmptyObject, // if isContainer function is provided, you can provide also respective model
		        moves: always, // can drag start?
		        accepts: always, // can target accept dragged item? (target context used)
		        canBeAccepted: always, // can be dragged item accepted by target? (source context used)
		        copy: false, // dragged item will be copy of source? flag or function
		        copySortSource: false, // enable sorting in source when copying item
		        dontCopyModel: false, // dont make copy of model when coping item (#61)
		        invalid: never, // target (in)validity function
		        revertOnSpill: false, // item returns to original place
		        removeOnSpill: false, // item will be removed if not placed into valid target
		        lockX: false, // lock movement into x-axis
		        lockY: false, // lock movement into y-axis
		        boundingBox: false, // lock movement inside this element boundaries
		        mirrorContainer: doc.body, // element for appending mirror
		        ignoreInputTextSelection: true, // text selection in inputs wont be considered as drag
		        compileItemOnDrop: false
		      },
		      drake = {
		        containers: shared.containers,
		        containersCtx: shared.containersCtx,
		        sanitizeContainersModel: sanitizeContainersModel,
		        isContainer: isContainer,
		        start: manualStart,
		        end: end,
		        cancel: cancel,
		        remove: remove,
		        destroy: destroy,
		        dragging: false
		      };

		    processServiceArguments(); // both arguments (containers and options) are optional, this function handle this
		    extendOptions();
		    processOptionsObject();
		    registerEvents();

		    return drake;

		    // Function definitions: ==============================================================================================================
		    // Initial functions: -----------------------------------------------------------------------------------------------------------------

		    function sanitizeContainersModel(containersModel) {
		      if (typeof(containersModel) === 'function') {
		        return containersModel;
		      }
		      if (Array.isArray(containersModel)) {
		        //                  |-------- is 2D array? -----------|
		        return Array.isArray(containersModel[0]) ? containersModel : [containersModel];
		      } else {
		        return [];
		      }
		    }

		    function processServiceArguments(){
		      if (arguments.length === 1 && // if there is only one argument we need to distinguish if it is options object or container(s) reference
		          !Array.isArray(arg0) && // array of containers elements
		          !angular.isElement(arg0) && // one container element
		          !arg0[0] && // array-like object with containers elements
		          typeof arg0 !== 'string') { // selector
		        // then arg0 is options object
		        options = arg0 || {};
		        initialContainers = []; // containers are not provided on init
		      } else if (typeof arg0 === 'string') {
		        initialContainers = document.querySelectorAll(arg0);
		      }
		      o = options.copyOptions ? angular.copy(options) : options;
		    }

		    function extendOptions(){
		      var tmp = angular.extend({}, defaultOptions, o); // tmp for keeping defaults untouched
		      angular.extend(o, tmp); // merge defaults back into options
		      if(o.classes){
		        tmp = angular.extend({}, defaultClasses, o.classes);
		        angular.extend(o.classes, tmp);
		      }
		      if(o.eventNames){
		        tmp = angular.extend({}, defaultEventNames, o.eventNames);
		        angular.extend(o.eventNames, tmp);
		      }
		    }

		    function processOptionsObject(){
		      // bounding box must be pure DOM element, not jQuery wrapper or something else..
		      if (!isElement(o.boundingBox)) {
		        o.boundingBox = false;
		      }

		      // initial containers provided via options are higher priority then by parameter
		      if(o.containers){
		        initialContainers = o.containers;
		      }
		      // sanitize initialContainers
		      initialContainers = makeArray(initialContainers);

		      // sanitize o.containersModel
		      o.containersModel = sanitizeContainersModel(o.containersModel);

		      // sanitize o.containersFilteredModel
		      if (Array.isArray(o.containersFilteredModel)) {
		        //                  |-------- is 2D array? -----------|
		        o.containersFilteredModel = Array.isArray(o.containersFilteredModel[0]) ? o.containersFilteredModel : [o.containersFilteredModel];
		      } else {
		        o.containersFilteredModel = [];
		      }

		      // feed containers groups and optionaly do same for models
		      if (!o.nameSpace) {
		        o.nameSpace = ['dragularCommon'];
		      }
		      if (!Array.isArray(o.nameSpace)) {
		        o.nameSpace = [o.nameSpace];
		      }
		      o.nameSpace.forEach(function eachNameSpace(nameSpace) {
		        if (!shared.containers[nameSpace]) {
		          shared.containers[nameSpace] = [];
		          shared.containersCtx[nameSpace] = [];
		        }
		        var len = initialContainers.length,
		          shLen = shared.containers[nameSpace].length;
		        for (var i = 0; i < len; i++) {
		          shared.containers[nameSpace][i + shLen] = initialContainers[i];
		          shared.containersCtx[nameSpace][i + shLen] = {
		            o: o,
		            m: getContainersModel()[i], // can be undefined
		            fm: o.containersFilteredModel[i] // can be undefined
		          };
		        }
		      });
		    }

		    function registerEvents(remove) {
		      var op = remove ? 'off' : 'on';
		      regEvent(docElm, op, 'mouseup', release);

		      initialContainers.forEach(function addMouseDown(container) {
		        regEvent(container, 'on', 'mousedown', grab);
		      });

		      if(!remove){ // create dragular DOM events
		        angular.forEach(['dragularenter', 'dragularleave', 'dragularrelease'], function prepareDragOverEvents(name) {
		          var eventName = o.eventNames[name];
		          if(!shared.dragOverEvents[eventName]){
		            if (doc.createEvent) {
		              shared.dragOverEvents[eventName] = doc.createEvent('HTMLEvents');
		              shared.dragOverEvents[eventName].initEvent(eventName, true, true);
		            } else {
		              shared.dragOverEvents[eventName] = doc.createEventObject();
		              shared.dragOverEvents[eventName].eventType = eventName;
		            }
		          }
		        });
		      }
		    }

		    // Event handlers functions (end of initial functions): -----------------------------------------------------------------------------------------------------------------

		    function grab(e) {
		      // filter some odd situations
		      if (whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey) {
		        return; // we only care about honest-to-god left clicks and touch events
		      }

		      // set itial values
		      shared.moveX = e.clientX;
		      shared.moveY = e.clientY;

		      var context = canStart(e.target);
		      if (!context || !context.item) {
		        return;
		      }

		      shared.grabbed = context;
		      eventualMovements();
		      if (e.type === 'mousedown') {
		        if (isInput(context.item)) { // see also: https://github.com/bevacqua/dragula/issues/208
		          context.item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
		        } else {
		          e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
		        }
		      }
		    }

		    function release(e) {
		      ungrab();
		      if (!drake.dragging) {
		        return;
		      }
		      if (e.originalEvent){
		          e = e.originalEvent; // jQuery enviroment
		      }

		      shared.clientX = getCoord('clientX', e);
		      shared.clientY = getCoord('clientY', e);

		      var elementBehindCursor = getElementBehindPoint(shared.mirror, shared.clientX, shared.clientY),
		        dropTarget = findDropTarget(elementBehindCursor, shared.clientX, shared.clientY);

		      if (dropTarget && ((shared.copy && g(o.copySortSource)) || (!shared.copy || dropTarget !== shared.source))) {
		        // found valid target and (is not copy case or target is not initial container)
		        drop(shared.item, dropTarget);
		      } else if (g(o.removeOnSpill)) {
		        remove();
		      } else {
		        cancel();
		      }

		      // after release there is no container hovered
		      shared.target = null;

		      if (shared.lastElementBehindCursor) {
		        fireEvent(shared.lastElementBehindCursor, shared.dragOverEvents.dragularrelease, elementBehindCursor);
		      }

		      if (o.scope) {
		        o.scope.$emit(o.eventNames.dragularrelease, shared.item, shared.source);
		      }
		    }

		    // Main logic functions (end of event handler functions): -----------------------------------------------------------------------------------------------------------------

		    function isContainer(el) {
		      if(!el){
		        return false;
		      }
		      var i = o.nameSpace.length;
		      while (i--) {
		        if (shared.containers[o.nameSpace[i]].indexOf(el) !== -1) {
		          return true;
		        }
		      }
		      if (o.isContainer(el)) {
		        shared.tempModel = o.isContainerModel(el);
		        return true;
		      } else {
		        shared.tempModel = null;
		      }
		      return false;
		    }

		    function getContainersModel() {
		      return (typeof(o.containersModel) === 'function') ? sanitizeContainersModel(o.containersModel(drake, shared)) : o.containersModel;
		    }

		    function removeContainers(all) {
		      $rootScope.$applyAsync(function applyDestroyed() {
		        var changes = Array.isArray(all) ? all : makeArray(all);
		        changes.forEach(function forEachContainer(container) {
		          angular.forEach(o.nameSpace, function forEachNs(nameSpace) {
		            var index;
		            index = shared.containers[nameSpace].indexOf(container);
		            shared.containers[nameSpace].splice(index, 1);
		            shared.containersCtx[nameSpace].splice(index, 1);
		          });
		        });
		      });
		    }

		    function eventualMovements(remove) {
		      var op = remove ? 'off' : 'on';
		      regEvent(docElm, op, 'mousemove', startBecauseMouseMoved);
		    }

		    function movements(remove) {
		      var op = remove ? 'off' : 'on';
		      regEvent(docElm, op, 'selectstart', preventGrabbed); // IE8
		      regEvent(docElm, op, 'click', preventGrabbed);
		      regEvent(docElm, op, 'touchmove', preventGrabbed); // fixes touch devices scrolling while drag
		    }

		    function destroy() {
		      registerEvents(true);
		      removeContainers(initialContainers);
		      release({});
		    }

		    function startBecauseMouseMoved(e) {
		      if (!shared.grabbed || drake.dragging) {
		        return;
		      }
		      if (e.originalEvent){
		          e = e.originalEvent; // jQuery enviroment
		      }
		      if (whichMouseButton(e) === 0) {
		        release({});
		        return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
		      }
		      // truthy check fixes dragula-#239, equality fixes dragula-#207
		      if (e.clientX && e.clientX === shared.moveX && e.clientY && e.clientY === shared.moveY) {
		        return;
		      }
		      if (g(o.ignoreInputTextSelection)) {
		        var clientX = getCoord('clientX', e),
		          clientY = getCoord('clientY', e),
		          elementBehindCursor = doc.elementFromPoint(clientX, clientY);
		        if (isInput(elementBehindCursor)) {
		          return;
		        }
		      }

		      var grabbed = shared.grabbed; // calling end() unsets shared.grabbed
		      eventualMovements('remove'); // remove mousemove listener
		      movements();
		      end();
		      start(grabbed);

		      // automaticly detect direction of elements if not set in options
		      if (!o.direction && getParent(shared.sourceItem)) {
		        var parent = shared.sourceItem.parentNode,
		          parentHeight = parent.offsetHeight,
		          parentWidth = parent.offsetWidth,
		          childHeight = shared.sourceItem.clientHeight,
		          childWidth = shared.sourceItem.clientWidth;
		        o.direction = parentHeight / childHeight < parentWidth / childWidth ? 'horizontal' : 'vertical';
		      }

		      // get initial coordinates, used to render shared.mirror for first time
		      var offset = getOffset(shared.sourceItem);
		      shared.offsetX = getCoord('pageX', e) - offset.left;
		      shared.offsetY = getCoord('pageY', e) - offset.top;
		      shared.clientX = getCoord('clientX', e);
		      shared.clientY = getCoord('clientY', e);

		      // limiting area of shared.mirror movement, get initial coordinates
		      if (o.boundingBox) {
		        shared.offsetXr = getCoord('pageX', e) - offset.right;
		        shared.offsetYb = getCoord('pageY', e) - offset.bottom;
		      }

		      e.preventDefault();

		      addClass(shared.item, o.classes.transit);
		      renderMirrorImage();
		      // initial position
		      shared.mirror.style.left = shared.clientX - shared.offsetX + 'px';
		      shared.mirror.style.top = shared.clientY - shared.offsetY + 'px';

		      drag(e);
		    }

		    function canStart(item) {
		      if (drake.dragging && shared.mirror) {
		        console.log('usecase?');
		        return; // already dragging
		      }

		      var handle = item;
		      while (getParent(item) && !isContainer(getParent(item))) {
		        // break loop if user tries to drag item which is considered invalid handle
		        if (o.invalid(item, handle)) {
		          return;
		        }
		        item = getParent(item); // drag target should be immediate child of container
		        if (!item) {
		          return;
		        }
		      }

		      var source = getParent(item);
		      if (!source ||
		        o.invalid(item, handle) ||
		        !o.moves(item, source, handle, nextEl(item))) {
		        return;
		      }

		      return {
		        item: item,
		        source: source
		      };
		    }

		    function manualStart(item) {
		      var context = canStart(item);
		      if (context) {
		        start(context);
		      }
		    }

		    function start(context) {
		      shared.sourceItem = shared.item = context.item;
		      shared.source = context.source;
		      shared.initialSibling = shared.currentSibling = nextEl(context.item);

		      if (g(o.copy, [context.item, context.source])) {
		        shared.item = context.item.cloneNode(true);
		        shared.copy = true;
		        if (o.scope) {
		          o.scope.$emit(o.eventNames.dragularcloned, shared.item, context.item);
		        }
		      } else {
		        shared.copy = false;
		      }

		      // prepare models operations
		      var containerIndex = initialContainers.indexOf(context.source);
		      shared.sourceModel = getContainersModel()[containerIndex];

		      shared.sourceFilteredModel = o.containersFilteredModel[containerIndex];
		      shared.initialIndex = domIndexOf(context.item, context.source);

		      drake.dragging = true;
		      if (o.scope) {
		        o.scope.$emit(o.eventNames.dragulardrag, shared.sourceItem, shared.source);
		      }

		      return true;
		    }

		    function end() {
		      if (!drake.dragging || !shared.item) {
		        return;
		      }
		      drop(shared.item, getParent(shared.item));
		    }

		    function ungrab() {
		      shared.grabbed = false;
		      eventualMovements('remove');
		      movements('remove');
		    }

		    function drop(item, target) {
		      var sourceItem = shared.sourceItem,
		          currentSibling = shared.currentSibling;
		        
		      if (shared.copy && g(o.copySortSource) && target === shared.source && getParent(item)) {
		        item.parentNode.removeChild(shared.sourceItem);
		      }

		      if (shared.sourceModel && !isInitialPlacement(target)) {

		        var dropIndex = domIndexOf(item, target);
		        if(shared.targetCtx.fm){ // target has filtered model
		          // convert index from index-in-filteredModel to index-in-model
		          dropIndex = shared.targetCtx.m.indexOf(shared.targetCtx.fm[dropIndex]);
		        }
		        if(shared.sourceFilteredModel){ // target has filtered model
		          // convert index from index-in-filteredModel to index-in-model
		          shared.initialIndex = shared.sourceModel.indexOf(shared.sourceFilteredModel[shared.initialIndex]);
		        }
		        $rootScope.$applyAsync(function applyDrop() {
		          if(!shared.sourceModel){
		              return;
		          }
		          if (target === shared.source) {
		            shared.sourceModel.splice(dropIndex, 0, shared.sourceModel.splice(shared.initialIndex, 1)[0]);
		          } else {
		            shared.dropElmModel = shared.copy && !o.dontCopyModel ? angular.copy(shared.sourceModel[shared.initialIndex]) : shared.sourceModel[shared.initialIndex];

		            if (!shared.tempModel) {
		              shared.targetModel = shared.targetCtx.m;
		            } else {
		              shared.targetModel = shared.tempModel;
		            }
		            
		            target.removeChild(item); // element must be removed for ngRepeat to apply correctly

		            if (!shared.copy) {
		              shared.sourceModel.splice(shared.initialIndex, 1);
		            }
		            shared.targetModel.splice(dropIndex, 0, shared.dropElmModel);
		          }

		          if (getParent(item)) {
		            item.parentNode.removeChild(item);
		          }

		          afterDrop();
		        });
		      } else {
		        afterDrop();
		      }

		      function afterDrop() {
		        if(o.compileItemOnDrop){
		            var scope = angular.element(target).scope();
		            scope.$applyAsync(function(){
		                var content = $compile(shared.copy ? sourceItem.cloneNode(true) : sourceItem)(scope);                   
		                if(item.parentNode === target){
		                    target.removeChild(item);
		                }
		                target.insertBefore(content[0], currentSibling);
		            });
		        }
		        
		        if (o.scope) {
		          if (isInitialPlacement(target)) {
		            o.scope.$emit(o.eventNames.dragularcancel, item, shared.source, shared.sourceModel, shared.initialIndex);
		          } else {
		            o.scope.$emit(o.eventNames.dragulardrop, item, target, shared.source, shared.sourceModel, shared.initialIndex, shared.targetModel, dropIndex);
		          }
		        }
		        
		        cleanup();
		      }
		    }

		    function remove() {
		      if (!drake.dragging) {
		        return;
		      }
		      var parent = getParent(shared.item);

		      if (parent) {
		        parent.removeChild(shared.item);
		      }

		      if (shared.sourceModel) {
		        $rootScope.$applyAsync(function removeModel() {
		          shared.sourceModel.splice(shared.initialIndex, 1);
		          cleanup();
		        });
		      }

		      if (o.scope) {
		        o.scope.$emit(shared.copy ? o.eventNames.dragularcancel : o.eventNames.dragularremove, shared.item, parent, shared.sourceModel, shared.initialIndex);
		      }
		      if (!shared.sourceModel) {
		        cleanup();
		      }
		    }

		    function cancel(revert) {
		      if (!drake.dragging) {
		        return;
		      }
		      var reverts = arguments.length > 0 ? revert : g(o.revertOnSpill),
		        parent = getParent(shared.item);

		      var initial = isInitialPlacement(parent);
		      if (!initial && !shared.copy && reverts) {
		        shared.source.insertBefore(shared.item, shared.initialSibling);
		      }
		      if (shared.sourceModel && !shared.copy && !reverts) {
		        drop(shared.item, parent);
		      } else if (o.scope) {
		        if (initial || reverts) {
		          o.scope.$emit(o.eventNames.dragularcancel, shared.item, shared.source);
		        }
		      }

		      if (!shared.sourceModel || shared.copy || reverts || initial) {
		        cleanup();
		      }
		    }

		    function cleanup() {
		      ungrab();
		      removeMirrorImage();

		      if (shared.item) {
		        rmClass(shared.item, o.classes.transit);
		      }

		      drake.dragging = false;

		      if (g(o.removeOnSpill) === true) {
		        spillOut();
		      }

		      if (o.scope) {
		        if(shared.lastDropTarget){
		         o.scope.$emit(o.eventNames.dragularout, shared.item, shared.lastDropTarget, shared.source);
		        }
		        o.scope.$emit(o.eventNames.dragulardragend, shared.item);
		      }

		      shared.source = shared.item = shared.sourceItem = shared.initialSibling = shared.currentSibling = shared.sourceModel = null;
		      shared.initialIndex = shared.currentIndex = shared.lastDropTarget = shared.tempModel = shared.targetModel = null;
		      shared.dropElmModel = shared.targetCtx = shared.copy = shared.moveX = shared.moveY = null;
		    }

		    // is item currently placed in original container and original position?
		    function isInitialPlacement(target, s) { // watch performance - running each move several times!
		      var sibling = s || (shared.mirror ? shared.currentSibling : nextEl(shared.item));
		      return target === shared.source && sibling === shared.initialSibling;
		    }

		    // find valid drop container
		    function findDropTarget(elementBehindCursor, clientX, clientY) {  // watch performance - running each move!
		      var target = elementBehindCursor;

		      while (target && !accepted()) {
		        target = getParent(target);
		      }
		      return target;

		      function accepted() {
		        var accepts = false;

		        if (isContainer(target)) { // is droppable?

		          var immediate = getImmediateChild(target, elementBehindCursor),
		            reference = getReference(target, immediate, clientX, clientY),
		            initial = isInitialPlacement(target, reference),
		            i = o.nameSpace.length;

		          while (i--) {
		            if (shared.containers[o.nameSpace[i]].indexOf(target) !== -1) {
		              shared.targetCtx = shared.containersCtx[o.nameSpace[i]][shared.containers[o.nameSpace[i]].indexOf(target)];
		              break;
		            }
		            if (!shared.targetCtx) {
		              shared.targetCtx = shared.containersCtx.dragularCommon[shared.containers.dragularCommon.indexOf(target)];
		            }
		          }

		          accepts = initial ||
		            (shared.targetCtx.o.accepts(shared.item, target, shared.source, reference, shared.sourceModel, shared.initialIndex) &&
		              o.canBeAccepted(shared.item, target, shared.source, reference, shared.sourceModel, shared.initialIndex));

		          if (shared.target !== target) { // used for scroll issue
		            shared.target = target;
		          }
		        }
		        return accepts;
		      }
		    }

		    function drag(e) { // watch performance - running each move!
		      if (!shared.mirror) {
		        return;
		      }
		      if (e.originalEvent){
		          e = e.originalEvent; // jQuery enviroment
		      }

		      // update coordinates
		      shared.clientX = getCoord('clientX', e);
		      shared.clientY = getCoord('clientY', e);

		      // count mirror coordiates
		      var x = shared.clientX - shared.offsetX,
		        y = shared.clientY - shared.offsetY,
		        pageX,
		        pageY,
		        offsetBox;

		      // fill extra properties if boundingBox is used
		      if (o.boundingBox) {
		        pageX = getCoord('pageX', e);
		        pageY = getCoord('pageY', e);
		        offsetBox = getOffset(o.boundingBox);
		      }

		      if (!o.lockY) {
		        if (!o.boundingBox || (pageX > offsetBox.left + shared.offsetX && pageX < offsetBox.right + shared.offsetXr)) {
		          shared.mirror.style.left = x + 'px';
		        } else if (o.boundingBox) { // check again in case user scrolled the view
		          if (pageX < offsetBox.left + shared.offsetX) {
		            shared.mirror.style.left = shared.clientX - (pageX - offsetBox.left) + 'px';
		          } else {
		            shared.mirror.style.left = shared.clientX - shared.mirrorWidth - (pageX - offsetBox.right) + 'px';
		          }
		        }
		      }
		      if (!o.lockX) {
		        if (!o.boundingBox || (pageY > offsetBox.top + shared.offsetY && pageY < offsetBox.bottom + shared.offsetYb)) {
		          shared.mirror.style.top = y + 'px';
		        } else if (o.boundingBox) { // check again in case user scrolled the view
		          if (pageY < offsetBox.top + shared.offsetY) {
		            shared.mirror.style.top = shared.clientY - (pageY - offsetBox.top) + 'px';
		          } else {
		            shared.mirror.style.top = shared.clientY - shared.mirrorHeight - (pageY - offsetBox.bottom) + 'px';
		          }
		        }
		      }

		      var elementBehindCursor = getElementBehindPoint(shared.mirror, shared.clientX, shared.clientY),
		        dropTarget = findDropTarget(elementBehindCursor, shared.clientX, shared.clientY),
		        changed = dropTarget !== shared.lastDropTarget;

		      if (elementBehindCursor !== shared.lastElementBehindCursor) {
		        fireEvent(elementBehindCursor, shared.dragOverEvents.dragularenter, !!dropTarget);
		        if (shared.lastElementBehindCursor) {
		          fireEvent(shared.lastElementBehindCursor, shared.dragOverEvents.dragularleave, elementBehindCursor);
		        }
		        shared.lastElementBehindCursor = elementBehindCursor;
		      }

		      if (changed) {
		        if (shared.lastDropTarget) {
		          moved('out');
		        }
		        shared.lastDropTarget = dropTarget;
		        moved('over');
		      }

		      // do not copy in same container
		      if (dropTarget === shared.source && shared.copy && !g(o.copySortSource)) {
		        if (getParent(shared.item)) {
		          shared.item.parentNode.removeChild(shared.item);
		        }
		        return;
		      }

		      var reference,
		        immediate = getImmediateChild(dropTarget, elementBehindCursor);

		      if (immediate !== null) {
		        reference = getReference(dropTarget, immediate, shared.clientX, shared.clientY);
		      } else if (g(o.revertOnSpill) === true && !shared.copy) {
		        // the case that mirror is not over valid target and reverting is on and copy is off
		        reference = shared.initialSibling;
		        dropTarget = shared.source;
		      } else {
		        // the case that mirror is not over valid target and removing is on or copy is on
		        if (shared.copy && getParent(shared.item)) {
		          // remove item or copy of item
		          shared.item.parentNode.removeChild(shared.item);
		        }
		        return;
		      }

		      if (reference === null ||
		        reference !== shared.item &&
		        reference !== nextEl(shared.item) &&
		        reference !== shared.currentSibling) {
		        // moving item/copy to new container from previous one
		        shared.currentSibling = reference;

		        dropTarget.insertBefore(shared.item, reference); // if reference is null item is inserted at the end

		        if (o.scope) {
		          o.scope.$emit(o.eventNames.dragularshadow, shared.item, dropTarget);
		        }
		      }

		      function moved(type) {
		        if (o.scope) {
		          o.scope.$emit(o.eventNames['dragular' + type], shared.item, shared.lastDropTarget, shared.source);
		        }
		        if (g(o.removeOnSpill) === true) {
		          type === 'over' ? spillOver() : spillOut();
		        }
		      }
		    }

		    function spillOver() {
		      rmClass(shared.item, o.classes.hide);
		    }

		    function spillOut() {
		      if (drake.dragging) {
		        addClass(shared.item, o.classes.hide);
		      }
		    }

		    function scrollContainer(e) {
		      if (shared.target) {
		        if (e.originalEvent){
		            e = e.originalEvent; // jQuery enviroment
		        }
		        var before = shared.target.scrollTop;
		        shared.target.scrollTop += e.deltaY;
		        // block scroll of the document when container can be scrolled
		        if (before !== shared.target.scrollTop) {
		          e.stopPropagation();
		          e.preventDefault();
		        }
		      }
		    }

		    function renderMirrorImage() {
		      if (shared.mirror) {
		        return;
		      }
		      var rect = shared.sourceItem.getBoundingClientRect();
		      shared.mirror = shared.sourceItem.cloneNode(true);
		      shared.mirrorWidth = rect.width;
		      shared.mirrorHeight = rect.height;
		      shared.mirror.style.width = getRectWidth(rect) + 'px';
		      shared.mirror.style.height = getRectHeight(rect) + 'px';
		      rmClass(shared.mirror, o.classes.transit);
		      addClass(shared.mirror, o.classes.mirror);
		      o.mirrorContainer.appendChild(shared.mirror);
		      regEvent(docElm, 'on', 'mousemove', drag);
		      addClass(doc.body, o.classes.unselectable);
		      regEvent(shared.mirror, 'on', 'wheel', scrollContainer);
		      if (o.scope) {
		        o.scope.$emit(o.eventNames.dragularcloned, shared.mirror, shared.sourceItem);
		      }
		    }

		    function removeMirrorImage() {
		      if (shared.mirror) {
		        rmClass(doc.body, o.classes.unselectable);
		        regEvent(docElm, 'off', 'mousemove', drag);
		        regEvent(shared.mirror, 'off', 'wheel', scrollContainer);
		        if(getParent(shared.mirror)){
		          shared.mirror.parentNode.removeChild(shared.mirror);
		        }
		        shared.mirror = null;
		      }
		    }

		    function getImmediateChild(dropTarget, target) { // watch performance - running each move several times!
		      var immediate = target;
		      while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
		        immediate = getParent(immediate);
		      }
		      if (immediate === docElm) {
		        return null;
		      }
		      return immediate;
		    }

		    function getReference(dropTarget, target, x, y) { // watch performance - running each move several times!
		      var horizontal = o.direction === 'horizontal';
		      return target !== dropTarget ? inside() : outside();

		      function outside() { // slower, but able to figure out any position
		        var len = dropTarget.children.length,
		          i, el, rect;
		        for (i = 0; i < len; i++) {
		          el = dropTarget.children[i];
		          rect = el.getBoundingClientRect();
		          if (horizontal && rect.left > x) {
		            return el;
		          }
		          if (!horizontal && rect.top > y) {
		            return el;
		          }
		        }
		        return null;
		      }

		      function inside() { // faster, but only available if dropped inside a child element
		        var rect = target.getBoundingClientRect();
		        if (horizontal) {
		          return resolve(x > rect.left + getRectWidth(rect) / 2);
		        }
		        return resolve(y > rect.top + getRectHeight(rect) / 2);
		      }

		      function resolve(after) {
		        return after ? nextEl(target) : target;
		      }
		    }

		    function getElementBehindPoint(point, x, y) { // watch performance - running each move!
		      var p = point || {},
		        state = p.className,
		        el;
		      p.className += ' ' + o.classes.hide;
		      el = doc.elementFromPoint(x, y);
		      p.className = state;
		      return el;
		    }
		  } // end of service

		  /****************************************************************************************************************************/
		  /****************************************************************************************************************************/
		  /****************************************************************************************************************************/

		  // HELPERS FUNCTIONS:

		  function regEvent(el, op, type, fn) {
		    var touch = {
		        mouseup: 'touchend',
		        mousedown: 'touchstart',
		        mousemove: 'touchmove'
		      },
		      pointers = {
		        mouseup: 'pointerup',
		        mousedown: 'pointerdown',
		        mousemove: 'pointermove'
		      },
		      microsoft = {
		        mouseup: 'MSPointerUp',
		        mousedown: 'MSPointerDown',
		        mousemove: 'MSPointerMove'
		      },
		      $el = angular.element(el);

		    if (global.navigator.pointerEnabled && pointers[type]) {
		      $el[op](pointers[type], fn);
		    } else if (global.navigator.msPointerEnabled && microsoft[type]) {
		      $el[op](microsoft[type], fn);
		    } else if (touch[type]) {
		      $el[op](touch[type], fn);
		    }
		    $el[op](type, fn);
		  }

		  function never() {
		    return false;
		  }

		  function always() {
		    return true;
		  }

		  // make array from array-like objects or from single element (based on bevacqua/atoa)
		  function makeArray(all, startIndex) {
		    if (Array.isArray(all)) {
		      return all;
		    }
		    if (all.length) { // is array-like
		      return Array.prototype.slice.call(all, startIndex); // convert to vanilla js array
		    } else { // is one element
		      return [all];
		    }
		  }

		  function whichMouseButton (e) {
		    if (e.touches) { return e.touches.length; }
		    if (e.originalEvent && e.originalEvent.touches) { return e.originalEvent.touches.length; }
		    if (e.buttons !== undefined) { return e.buttons; }
		    if (e.which !== undefined) { return e.which; }
		    var button = e.button;
		    if (button !== undefined) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
		      return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
		    }
		  }

		  function preventGrabbed(e) {
		    if (e.originalEvent){
		        e = e.originalEvent; // jQuery enviroment
		    }
		    if (shared.grabbed) {
		      e.preventDefault();
		    }
		  }

		  function getScroll(scrollProp, offsetProp) {
		    if (typeof window[offsetProp] !== 'undefined') {
		      return window[offsetProp];
		    }
		    if (docElm.clientHeight) {
		      return docElm[scrollProp];
		    }
		    return doc.body[scrollProp];
		  }

		  function getOffset(el) { // watch performance - running each move!
		    var rect = el.getBoundingClientRect(),
		      scrollTop = getScroll('scrollTop', 'pageYOffset'),
		      scrollLeft = getScroll('scrollLeft', 'pageXOffset');
		    return {
		      left: rect.left + scrollLeft,
		      right: rect.right + scrollLeft,
		      top: rect.top + scrollTop,
		      bottom: rect.bottom + scrollTop
		    };
		  }

		  function getRectWidth(rect) {
		    return rect.width || (rect.right - rect.left);
		  }

		  function getRectHeight(rect) {
		    return rect.height || (rect.bottom - rect.top);
		  }

		  function getEmptyObject() {
		    return {};
		  }

		  function nextEl(el) {
		    return el.nextElementSibling || manually();

		    function manually() {
		      var sibling = el;
		      do {
		        sibling = sibling.nextSibling;
		      } while (sibling && sibling.nodeType !== 1);
		      return sibling;
		    }
		  }

		  //Cannot use angular.isElement because we need to check plain dom element, no jQlite wrapped
		  function isElement(obj) {
		    return (
		      typeof HTMLElement === 'object' ? obj instanceof HTMLElement : //DOM2
		      obj && typeof obj === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string'
		    );
		  }

		  function lookupClass(className) {
		    var cached = shared.classesCache[className];
		    if (cached) {
		      cached.lastIndex = 0;
		    } else {
		      shared.classesCache[className] = cached = new RegExp('(?:^|\\s)' + className + '(?:\\s|$)', 'g');
		    }
		    return cached;
		  }

		  function addClass(el, className) {
		    var current = el.className;
		    if (!current.length) {
		      el.className = className;
		    } else if (!lookupClass(className).test(current)) {
		      el.className += ' ' + className;
		    }
		  }

		  function rmClass(el, className) {
		    el.className = el.className.replace(lookupClass(className), ' ').trim();
		  }

		  function getEventHost(e) {
		    // on touchend event, we have to use `e.changedTouches`
		    // see http://stackoverflow.com/questions/7192563/touchend-event-properties
		    // see https://github.com/bevacqua/dragula/issues/34
		    if (e.targetTouches && e.targetTouches.length) {
		      return e.targetTouches[0];
		    }
		    if (e.changedTouches && e.changedTouches.length) {
		      return e.changedTouches[0];
		    }
		    return e;
		  }

		  function getCoord(coord, e) { // watch performance - running each move several times!
		    var host = getEventHost(e);
		    var missMap = {
		      pageX: 'clientX', // IE8
		      pageY: 'clientY' // IE8
		    };
		    if (coord in missMap && !(coord in host) && missMap[coord] in host) {
		      coord = missMap[coord];
		    }

		    // Adding support for touch events, as they are not functional in the original
		    if (!host.type || host.type.indexOf('touch') < 0) {
		      return host[coord];
		    } else {
		      if (host.type.indexOf('end') === -1) {
		        // No clientX or clientY in a touch event
		        return host.originalEvent.touches[0][coord.replace('client', 'page')];
		      }
		      // Nothing should happen for touchend
		      return false;
		    }
		  }

		  function getParent (el) { // watch performance - running each move!
		    return el.parentNode === document ? null : el.parentNode;
		  }

		  function isInput (el) {
		    return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el);
		  }

		  function isEditable (el) {
		    if (!el) { return false; } // no parents were editable
		    if (el.contentEditable === 'false') { return false; } // stop the lookup
		    if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
		    return isEditable(getParent(el)); // contentEditable is set to 'inherit'
		  }

		  function domIndexOf(child, parent) {
		    return Array.prototype.indexOf.call(angular.element(parent).children(), child);
		  }

		  function fireEvent(target, e, extra) { // watch performance - running each move!
		    if (!target) {
		      return;
		    }
		    shared.extra = extra;
		    if (target.dispatchEvent) {
		      target.dispatchEvent(e);
		    } else {
		      target.fireEvent('on' + e.eventType, e);
		    }
		  }

		  function getBool(prop, args, context){
		    if(angular.isFunction(prop)){
		      return !!prop.apply(context || this, args || shared);
		    }else{
		      return !!prop;
		    }
		  }

		};

		dragularService.$inject = ['$rootScope', '$compile'];

		module.exports = dragularService;

		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ }
	/******/ ]);

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(200);
	module.exports = 'firebase';


/***/ },
/* 200 */
/***/ function(module, exports) {

	/*!
	 * AngularFire is the officially supported AngularJS binding for Firebase. Firebase
	 * is a full backend so you don't need servers to build your Angular app. AngularFire
	 * provides you with the $firebase service which allows you to easily keep your $scope
	 * variables in sync with your Firebase backend.
	 *
	 * AngularFire 1.2.0
	 * https://github.com/firebase/angularfire/
	 * Date: 03/28/2016
	 * License: MIT
	 */
	(function(exports) {
	  "use strict";

	// Define the `firebase` module under which all AngularFire
	// services will live.
	  angular.module("firebase", [])
	    //todo use $window
	    .value("Firebase", exports.Firebase);

	})(window);
	(function() {
	  'use strict';
	  /**
	   * Creates and maintains a synchronized list of data. This is a pseudo-read-only array. One should
	   * not call splice(), push(), pop(), et al directly on this array, but should instead use the
	   * $remove and $add methods.
	   *
	   * It is acceptable to .sort() this array, but it is important to use this in conjunction with
	   * $watch(), so that it will be re-sorted any time the server data changes. Examples of this are
	   * included in the $watch documentation.
	   *
	   * Internally, the $firebase object depends on this class to provide several $$ (i.e. protected)
	   * methods, which it invokes to notify the array whenever a change has been made at the server:
	   *    $$added - called whenever a child_added event occurs
	   *    $$updated - called whenever a child_changed event occurs
	   *    $$moved - called whenever a child_moved event occurs
	   *    $$removed - called whenever a child_removed event occurs
	   *    $$error - called when listeners are canceled due to a security error
	   *    $$process - called immediately after $$added/$$updated/$$moved/$$removed
	   *                (assuming that these methods do not abort by returning false or null)
	   *                to splice/manipulate the array and invoke $$notify
	   *
	   * Additionally, these methods may be of interest to devs extending this class:
	   *    $$notify - triggers notifications to any $watch listeners, called by $$process
	   *    $$getKey - determines how to look up a record's key (returns $id by default)
	   *
	   * Instead of directly modifying this class, one should generally use the $extend
	   * method to add or change how methods behave. $extend modifies the prototype of
	   * the array class by returning a clone of $firebaseArray.
	   *
	   * <pre><code>
	   * var ExtendedArray = $firebaseArray.$extend({
	   *    // add a new method to the prototype
	   *    foo: function() { return 'bar'; },
	   *
	   *    // change how records are created
	   *    $$added: function(snap, prevChild) {
	   *       return new Widget(snap, prevChild);
	   *    },
	   *
	   *    // change how records are updated
	   *    $$updated: function(snap) {
	   *      return this.$getRecord(snap.key()).update(snap);
	   *    }
	   * });
	   *
	   * var list = new ExtendedArray(ref);
	   * </code></pre>
	   */
	  angular.module('firebase').factory('$firebaseArray', ["$log", "$firebaseUtils", "$q",
	    function($log, $firebaseUtils, $q) {
	      /**
	       * This constructor should probably never be called manually. It is used internally by
	       * <code>$firebase.$asArray()</code>.
	       *
	       * @param {Firebase} ref
	       * @returns {Array}
	       * @constructor
	       */
	      function FirebaseArray(ref) {
	        if( !(this instanceof FirebaseArray) ) {
	          return new FirebaseArray(ref);
	        }
	        var self = this;
	        this._observers = [];
	        this.$list = [];
	        this._ref = ref;
	        this._sync = new ArraySyncManager(this);

	        $firebaseUtils.assertValidRef(ref, 'Must pass a valid Firebase reference ' +
	        'to $firebaseArray (not a string or URL)');

	        // indexCache is a weak hashmap (a lazy list) of keys to array indices,
	        // items are not guaranteed to stay up to date in this list (since the data
	        // array can be manually edited without calling the $ methods) and it should
	        // always be used with skepticism regarding whether it is accurate
	        // (see $indexFor() below for proper usage)
	        this._indexCache = {};

	        // Array.isArray will not work on objects which extend the Array class.
	        // So instead of extending the Array class, we just return an actual array.
	        // However, it's still possible to extend FirebaseArray and have the public methods
	        // appear on the array object. We do this by iterating the prototype and binding
	        // any method that is not prefixed with an underscore onto the final array.
	        $firebaseUtils.getPublicMethods(self, function(fn, key) {
	          self.$list[key] = fn.bind(self);
	        });

	        this._sync.init(this.$list);

	        return this.$list;
	      }

	      FirebaseArray.prototype = {
	        /**
	         * Create a new record with a unique ID and add it to the end of the array.
	         * This should be used instead of Array.prototype.push, since those changes will not be
	         * synchronized with the server.
	         *
	         * Any value, including a primitive, can be added in this way. Note that when the record
	         * is created, the primitive value would be stored in $value (records are always objects
	         * by default).
	         *
	         * Returns a future which is resolved when the data has successfully saved to the server.
	         * The resolve callback will be passed a Firebase ref representing the new data element.
	         *
	         * @param data
	         * @returns a promise resolved after data is added
	         */
	        $add: function(data) {
	          this._assertNotDestroyed('$add');
	          var def = $firebaseUtils.defer();
	          var ref = this.$ref().ref().push();
	          ref.set($firebaseUtils.toJSON(data), $firebaseUtils.makeNodeResolver(def));
	          return def.promise.then(function() {
	            return ref;
	          });
	        },

	        /**
	         * Pass either an item in the array or the index of an item and it will be saved back
	         * to Firebase. While the array is read-only and its structure should not be changed,
	         * it is okay to modify properties on the objects it contains and then save those back
	         * individually.
	         *
	         * Returns a future which is resolved when the data has successfully saved to the server.
	         * The resolve callback will be passed a Firebase ref representing the saved element.
	         * If passed an invalid index or an object which is not a record in this array,
	         * the promise will be rejected.
	         *
	         * @param {int|object} indexOrItem
	         * @returns a promise resolved after data is saved
	         */
	        $save: function(indexOrItem) {
	          this._assertNotDestroyed('$save');
	          var self = this;
	          var item = self._resolveItem(indexOrItem);
	          var key = self.$keyAt(item);
	          if( key !== null ) {
	            var ref = self.$ref().ref().child(key);
	            var data = $firebaseUtils.toJSON(item);
	            return $firebaseUtils.doSet(ref, data).then(function() {
	              self.$$notify('child_changed', key);
	              return ref;
	            });
	          }
	          else {
	            return $firebaseUtils.reject('Invalid record; could determine key for '+indexOrItem);
	          }
	        },

	        /**
	         * Pass either an existing item in this array or the index of that item and it will
	         * be removed both locally and in Firebase. This should be used in place of
	         * Array.prototype.splice for removing items out of the array, as calling splice
	         * will not update the value on the server.
	         *
	         * Returns a future which is resolved when the data has successfully removed from the
	         * server. The resolve callback will be passed a Firebase ref representing the deleted
	         * element. If passed an invalid index or an object which is not a record in this array,
	         * the promise will be rejected.
	         *
	         * @param {int|object} indexOrItem
	         * @returns a promise which resolves after data is removed
	         */
	        $remove: function(indexOrItem) {
	          this._assertNotDestroyed('$remove');
	          var key = this.$keyAt(indexOrItem);
	          if( key !== null ) {
	            var ref = this.$ref().ref().child(key);
	            return $firebaseUtils.doRemove(ref).then(function() {
	              return ref;
	            });
	          }
	          else {
	            return $firebaseUtils.reject('Invalid record; could not determine key for '+indexOrItem);
	          }
	        },

	        /**
	         * Given an item in this array or the index of an item in the array, this returns the
	         * Firebase key (record.$id) for that record. If passed an invalid key or an item which
	         * does not exist in this array, it will return null.
	         *
	         * @param {int|object} indexOrItem
	         * @returns {null|string}
	         */
	        $keyAt: function(indexOrItem) {
	          var item = this._resolveItem(indexOrItem);
	          return this.$$getKey(item);
	        },

	        /**
	         * The inverse of $keyAt, this method takes a Firebase key (record.$id) and returns the
	         * index in the array where that record is stored. If the record is not in the array,
	         * this method returns -1.
	         *
	         * @param {String} key
	         * @returns {int} -1 if not found
	         */
	        $indexFor: function(key) {
	          var self = this;
	          var cache = self._indexCache;
	          // evaluate whether our key is cached and, if so, whether it is up to date
	          if( !cache.hasOwnProperty(key) || self.$keyAt(cache[key]) !== key ) {
	            // update the hashmap
	            var pos = self.$list.findIndex(function(rec) { return self.$$getKey(rec) === key; });
	            if( pos !== -1 ) {
	              cache[key] = pos;
	            }
	          }
	          return cache.hasOwnProperty(key)? cache[key] : -1;
	        },

	        /**
	         * The loaded method is invoked after the initial batch of data arrives from the server.
	         * When this resolves, all data which existed prior to calling $asArray() is now cached
	         * locally in the array.
	         *
	         * As a shortcut is also possible to pass resolve/reject methods directly into this
	         * method just as they would be passed to .then()
	         *
	         * @param {Function} [resolve]
	         * @param {Function} [reject]
	         * @returns a promise
	         */
	        $loaded: function(resolve, reject) {
	          var promise = this._sync.ready();
	          if( arguments.length ) {
	            // allow this method to be called just like .then
	            // by passing any arguments on to .then
	            promise = promise.then.call(promise, resolve, reject);
	          }
	          return promise;
	        },

	        /**
	         * @returns {Firebase} the original Firebase ref used to create this object.
	         */
	        $ref: function() { return this._ref; },

	        /**
	         * Listeners passed into this method are notified whenever a new change (add, updated,
	         * move, remove) is received from the server. Each invocation is sent an object
	         * containing <code>{ type: 'child_added|child_updated|child_moved|child_removed',
	         * key: 'key_of_item_affected'}</code>
	         *
	         * Additionally, added and moved events receive a prevChild parameter, containing the
	         * key of the item before this one in the array.
	         *
	         * This method returns a function which can be invoked to stop observing events.
	         *
	         * @param {Function} cb
	         * @param {Object} [context]
	         * @returns {Function} used to stop observing
	         */
	        $watch: function(cb, context) {
	          var list = this._observers;
	          list.push([cb, context]);
	          // an off function for cancelling the listener
	          return function() {
	            var i = list.findIndex(function(parts) {
	              return parts[0] === cb && parts[1] === context;
	            });
	            if( i > -1 ) {
	              list.splice(i, 1);
	            }
	          };
	        },

	        /**
	         * Informs $firebase to stop sending events and clears memory being used
	         * by this array (delete's its local content).
	         */
	        $destroy: function(err) {
	          if( !this._isDestroyed ) {
	            this._isDestroyed = true;
	            this._sync.destroy(err);
	            this.$list.length = 0;
	          }
	        },

	        /**
	         * Returns the record for a given Firebase key (record.$id). If the record is not found
	         * then returns null.
	         *
	         * @param {string} key
	         * @returns {Object|null} a record in this array
	         */
	        $getRecord: function(key) {
	          var i = this.$indexFor(key);
	          return i > -1? this.$list[i] : null;
	        },

	        /**
	         * Called to inform the array when a new item has been added at the server.
	         * This method should return the record (an object) that will be passed into $$process
	         * along with the add event. Alternately, the record will be skipped if this method returns
	         * a falsey value.
	         *
	         * @param {object} snap a Firebase snapshot
	         * @param {string} prevChild
	         * @return {object} the record to be inserted into the array
	         * @protected
	         */
	        $$added: function(snap/*, prevChild*/) {
	          // check to make sure record does not exist
	          var i = this.$indexFor($firebaseUtils.getKey(snap));
	          if( i === -1 ) {
	            // parse data and create record
	            var rec = snap.val();
	            if( !angular.isObject(rec) ) {
	              rec = { $value: rec };
	            }
	            rec.$id = $firebaseUtils.getKey(snap);
	            rec.$priority = snap.getPriority();
	            $firebaseUtils.applyDefaults(rec, this.$$defaults);

	            return rec;
	          }
	          return false;
	        },

	        /**
	         * Called whenever an item is removed at the server.
	         * This method does not physically remove the objects, but instead
	         * returns a boolean indicating whether it should be removed (and
	         * taking any other desired actions before the remove completes).
	         *
	         * @param {object} snap a Firebase snapshot
	         * @return {boolean} true if item should be removed
	         * @protected
	         */
	        $$removed: function(snap) {
	          return this.$indexFor($firebaseUtils.getKey(snap)) > -1;
	        },

	        /**
	         * Called whenever an item is changed at the server.
	         * This method should apply the changes, including changes to data
	         * and to $priority, and then return true if any changes were made.
	         *
	         * If this method returns false, then $$process will not be invoked,
	         * which means that $$notify will not take place and no $watch events
	         * will be triggered.
	         *
	         * @param {object} snap a Firebase snapshot
	         * @return {boolean} true if any data changed
	         * @protected
	         */
	        $$updated: function(snap) {
	          var changed = false;
	          var rec = this.$getRecord($firebaseUtils.getKey(snap));
	          if( angular.isObject(rec) ) {
	            // apply changes to the record
	            changed = $firebaseUtils.updateRec(rec, snap);
	            $firebaseUtils.applyDefaults(rec, this.$$defaults);
	          }
	          return changed;
	        },

	        /**
	         * Called whenever an item changes order (moves) on the server.
	         * This method should set $priority to the updated value and return true if
	         * the record should actually be moved. It should not actually apply the move
	         * operation.
	         *
	         * If this method returns false, then the record will not be moved in the array
	         * and no $watch listeners will be notified. (When true, $$process is invoked
	         * which invokes $$notify)
	         *
	         * @param {object} snap a Firebase snapshot
	         * @param {string} prevChild
	         * @protected
	         */
	        $$moved: function(snap/*, prevChild*/) {
	          var rec = this.$getRecord($firebaseUtils.getKey(snap));
	          if( angular.isObject(rec) ) {
	            rec.$priority = snap.getPriority();
	            return true;
	          }
	          return false;
	        },

	        /**
	         * Called whenever a security error or other problem causes the listeners to become
	         * invalid. This is generally an unrecoverable error.
	         *
	         * @param {Object} err which will have a `code` property and possibly a `message`
	         * @protected
	         */
	        $$error: function(err) {
	          $log.error(err);
	          this.$destroy(err);
	        },

	        /**
	         * Returns ID for a given record
	         * @param {object} rec
	         * @returns {string||null}
	         * @protected
	         */
	        $$getKey: function(rec) {
	          return angular.isObject(rec)? rec.$id : null;
	        },

	        /**
	         * Handles placement of recs in the array, sending notifications,
	         * and other internals. Called by the synchronization process
	         * after $$added, $$updated, $$moved, and $$removed return a truthy value.
	         *
	         * @param {string} event one of child_added, child_removed, child_moved, or child_changed
	         * @param {object} rec
	         * @param {string} [prevChild]
	         * @protected
	         */
	        $$process: function(event, rec, prevChild) {
	          var key = this.$$getKey(rec);
	          var changed = false;
	          var curPos;
	          switch(event) {
	            case 'child_added':
	              curPos = this.$indexFor(key);
	              break;
	            case 'child_moved':
	              curPos = this.$indexFor(key);
	              this._spliceOut(key);
	              break;
	            case 'child_removed':
	              // remove record from the array
	              changed = this._spliceOut(key) !== null;
	              break;
	            case 'child_changed':
	              changed = true;
	              break;
	            default:
	              throw new Error('Invalid event type: ' + event);
	          }
	          if( angular.isDefined(curPos) ) {
	            // add it to the array
	            changed = this._addAfter(rec, prevChild) !== curPos;
	          }
	          if( changed ) {
	            // send notifications to anybody monitoring $watch
	            this.$$notify(event, key, prevChild);
	          }
	          return changed;
	        },

	        /**
	         * Used to trigger notifications for listeners registered using $watch. This method is
	         * typically invoked internally by the $$process method.
	         *
	         * @param {string} event
	         * @param {string} key
	         * @param {string} [prevChild]
	         * @protected
	         */
	        $$notify: function(event, key, prevChild) {
	          var eventData = {event: event, key: key};
	          if( angular.isDefined(prevChild) ) {
	            eventData.prevChild = prevChild;
	          }
	          angular.forEach(this._observers, function(parts) {
	            parts[0].call(parts[1], eventData);
	          });
	        },

	        /**
	         * Used to insert a new record into the array at a specific position. If prevChild is
	         * null, is inserted first, if prevChild is not found, it is inserted last, otherwise,
	         * it goes immediately after prevChild.
	         *
	         * @param {object} rec
	         * @param {string|null} prevChild
	         * @private
	         */
	        _addAfter: function(rec, prevChild) {
	          var i;
	          if( prevChild === null ) {
	            i = 0;
	          }
	          else {
	            i = this.$indexFor(prevChild)+1;
	            if( i === 0 ) { i = this.$list.length; }
	          }
	          this.$list.splice(i, 0, rec);
	          this._indexCache[this.$$getKey(rec)] = i;
	          return i;
	        },

	        /**
	         * Removes a record from the array by calling splice. If the item is found
	         * this method returns it. Otherwise, this method returns null.
	         *
	         * @param {string} key
	         * @returns {object|null}
	         * @private
	         */
	        _spliceOut: function(key) {
	          var i = this.$indexFor(key);
	          if( i > -1 ) {
	            delete this._indexCache[key];
	            return this.$list.splice(i, 1)[0];
	          }
	          return null;
	        },

	        /**
	         * Resolves a variable which may contain an integer or an item that exists in this array.
	         * Returns the item or null if it does not exist.
	         *
	         * @param indexOrItem
	         * @returns {*}
	         * @private
	         */
	        _resolveItem: function(indexOrItem) {
	          var list = this.$list;
	          if( angular.isNumber(indexOrItem) && indexOrItem >= 0 && list.length >= indexOrItem ) {
	            return list[indexOrItem];
	          }
	          else if( angular.isObject(indexOrItem) ) {
	            // it must be an item in this array; it's not sufficient for it just to have
	            // a $id or even a $id that is in the array, it must be an actual record
	            // the fastest way to determine this is to use $getRecord (to avoid iterating all recs)
	            // and compare the two
	            var key = this.$$getKey(indexOrItem);
	            var rec = this.$getRecord(key);
	            return rec === indexOrItem? rec : null;
	          }
	          return null;
	        },

	        /**
	         * Throws an error if $destroy has been called. Should be used for any function
	         * which tries to write data back to $firebase.
	         * @param {string} method
	         * @private
	         */
	        _assertNotDestroyed: function(method) {
	          if( this._isDestroyed ) {
	            throw new Error('Cannot call ' + method + ' method on a destroyed $firebaseArray object');
	          }
	        }
	      };

	      /**
	       * This method allows FirebaseArray to be inherited by child classes. Methods passed into this
	       * function will be added onto the array's prototype. They can override existing methods as
	       * well.
	       *
	       * In addition to passing additional methods, it is also possible to pass in a class function.
	       * The prototype on that class function will be preserved, and it will inherit from
	       * FirebaseArray. It's also possible to do both, passing a class to inherit and additional
	       * methods to add onto the prototype.
	       *
	       *  <pre><code>
	       * var ExtendedArray = $firebaseArray.$extend({
	       *    // add a method onto the prototype that sums all items in the array
	       *    getSum: function() {
	       *       var ct = 0;
	       *       angular.forEach(this.$list, function(rec) { ct += rec.x; });
	        *      return ct;
	       *    }
	       * });
	       *
	       * // use our new factory in place of $firebaseArray
	       * var list = new ExtendedArray(ref);
	       * </code></pre>
	       *
	       * @param {Function} [ChildClass] a child class which should inherit FirebaseArray
	       * @param {Object} [methods] a list of functions to add onto the prototype
	       * @returns {Function} a child class suitable for use with $firebase (this will be ChildClass if provided)
	       * @static
	       */
	      FirebaseArray.$extend = function(ChildClass, methods) {
	        if( arguments.length === 1 && angular.isObject(ChildClass) ) {
	          methods = ChildClass;
	          ChildClass = function(ref) {
	            if( !(this instanceof ChildClass) ) {
	              return new ChildClass(ref);
	            }
	            FirebaseArray.apply(this, arguments);
	            return this.$list;
	          };
	        }
	        return $firebaseUtils.inherit(ChildClass, FirebaseArray, methods);
	      };

	      function ArraySyncManager(firebaseArray) {
	        function destroy(err) {
	          if( !sync.isDestroyed ) {
	            sync.isDestroyed = true;
	            var ref = firebaseArray.$ref();
	            ref.off('child_added', created);
	            ref.off('child_moved', moved);
	            ref.off('child_changed', updated);
	            ref.off('child_removed', removed);
	            firebaseArray = null;
	            initComplete(err||'destroyed');
	          }
	        }

	        function init($list) {
	          var ref = firebaseArray.$ref();

	          // listen for changes at the Firebase instance
	          ref.on('child_added', created, error);
	          ref.on('child_moved', moved, error);
	          ref.on('child_changed', updated, error);
	          ref.on('child_removed', removed, error);

	          // determine when initial load is completed
	          ref.once('value', function(snap) {
	            if (angular.isArray(snap.val())) {
	              $log.warn('Storing data using array indices in Firebase can result in unexpected behavior. See https://www.firebase.com/docs/web/guide/understanding-data.html#section-arrays-in-firebase for more information.');
	            }

	            initComplete(null, $list);
	          }, initComplete);
	        }

	        // call initComplete(), do not call this directly
	        function _initComplete(err, result) {
	          if( !isResolved ) {
	            isResolved = true;
	            if( err ) { def.reject(err); }
	            else { def.resolve(result); }
	          }
	        }

	        var def     = $firebaseUtils.defer();
	        var created = function(snap, prevChild) {
	          waitForResolution(firebaseArray.$$added(snap, prevChild), function(rec) {
	            firebaseArray.$$process('child_added', rec, prevChild);
	          });
	        };
	        var updated = function(snap) {
	          var rec = firebaseArray.$getRecord($firebaseUtils.getKey(snap));
	          if( rec ) {
	            waitForResolution(firebaseArray.$$updated(snap), function() {
	              firebaseArray.$$process('child_changed', rec);
	            });
	          }
	        };
	        var moved   = function(snap, prevChild) {
	          var rec = firebaseArray.$getRecord($firebaseUtils.getKey(snap));
	          if( rec ) {
	            waitForResolution(firebaseArray.$$moved(snap, prevChild), function() {
	              firebaseArray.$$process('child_moved', rec, prevChild);
	            });
	          }
	        };
	        var removed = function(snap) {
	          var rec = firebaseArray.$getRecord($firebaseUtils.getKey(snap));
	          if( rec ) {
	            waitForResolution(firebaseArray.$$removed(snap), function() {
	               firebaseArray.$$process('child_removed', rec);
	            });
	          }
	        };

	        function waitForResolution(maybePromise, callback) {
	          var promise = $q.when(maybePromise);
	          promise.then(function(result){
	            if (result) {
	              callback(result);
	            }
	          });
	          if (!isResolved) {
	            resolutionPromises.push(promise);
	          }
	        }

	        var resolutionPromises = [];
	        var isResolved = false;
	        var error   = $firebaseUtils.batch(function(err) {
	          _initComplete(err);
	          if( firebaseArray ) {
	            firebaseArray.$$error(err);
	          }
	        });
	        var initComplete = $firebaseUtils.batch(_initComplete);

	        var sync = {
	          destroy: destroy,
	          isDestroyed: false,
	          init: init,
	          ready: function() { return def.promise.then(function(result){
	            return $q.all(resolutionPromises).then(function(){
	              return result;
	            });
	          }); }
	        };

	        return sync;
	      }

	      return FirebaseArray;
	    }
	  ]);

	  /** @deprecated */
	  angular.module('firebase').factory('$FirebaseArray', ['$log', '$firebaseArray',
	    function($log, $firebaseArray) {
	      return function() {
	        $log.warn('$FirebaseArray has been renamed. Use $firebaseArray instead.');
	        return $firebaseArray.apply(null, arguments);
	      };
	    }
	  ]);
	})();

	(function() {
	  'use strict';
	  var FirebaseAuth;

	  // Define a service which provides user authentication and management.
	  angular.module('firebase').factory('$firebaseAuth', [
	    '$q', '$firebaseUtils', function($q, $firebaseUtils) {
	      /**
	       * This factory returns an object allowing you to manage the client's authentication state.
	       *
	       * @param {Firebase} ref A Firebase reference to authenticate.
	       * @return {object} An object containing methods for authenticating clients, retrieving
	       * authentication state, and managing users.
	       */
	      return function(ref) {
	        var auth = new FirebaseAuth($q, $firebaseUtils, ref);
	        return auth.construct();
	      };
	    }
	  ]);

	  FirebaseAuth = function($q, $firebaseUtils, ref) {
	    this._q = $q;
	    this._utils = $firebaseUtils;
	    if (typeof ref === 'string') {
	      throw new Error('Please provide a Firebase reference instead of a URL when creating a `$firebaseAuth` object.');
	    }
	    this._ref = ref;
	    this._initialAuthResolver = this._initAuthResolver();
	  };

	  FirebaseAuth.prototype = {
	    construct: function() {
	      this._object = {
	        // Authentication methods
	        $authWithCustomToken: this.authWithCustomToken.bind(this),
	        $authAnonymously: this.authAnonymously.bind(this),
	        $authWithPassword: this.authWithPassword.bind(this),
	        $authWithOAuthPopup: this.authWithOAuthPopup.bind(this),
	        $authWithOAuthRedirect: this.authWithOAuthRedirect.bind(this),
	        $authWithOAuthToken: this.authWithOAuthToken.bind(this),
	        $unauth: this.unauth.bind(this),

	        // Authentication state methods
	        $onAuth: this.onAuth.bind(this),
	        $getAuth: this.getAuth.bind(this),
	        $requireAuth: this.requireAuth.bind(this),
	        $waitForAuth: this.waitForAuth.bind(this),

	        // User management methods
	        $createUser: this.createUser.bind(this),
	        $changePassword: this.changePassword.bind(this),
	        $changeEmail: this.changeEmail.bind(this),
	        $removeUser: this.removeUser.bind(this),
	        $resetPassword: this.resetPassword.bind(this)
	      };

	      return this._object;
	    },


	    /********************/
	    /*  Authentication  */
	    /********************/

	    /**
	     * Authenticates the Firebase reference with a custom authentication token.
	     *
	     * @param {string} authToken An authentication token or a Firebase Secret. A Firebase Secret
	     * should only be used for authenticating a server process and provides full read / write
	     * access to the entire Firebase.
	     * @param {Object} [options] An object containing optional client arguments, such as configuring
	     * session persistence.
	     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
	     */
	    authWithCustomToken: function(authToken, options) {
	      var deferred = this._q.defer();

	      try {
	        this._ref.authWithCustomToken(authToken, this._utils.makeNodeResolver(deferred), options);
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Authenticates the Firebase reference anonymously.
	     *
	     * @param {Object} [options] An object containing optional client arguments, such as configuring
	     * session persistence.
	     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
	     */
	    authAnonymously: function(options) {
	      var deferred = this._q.defer();

	      try {
	        this._ref.authAnonymously(this._utils.makeNodeResolver(deferred), options);
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Authenticates the Firebase reference with an email/password user.
	     *
	     * @param {Object} credentials An object containing email and password attributes corresponding
	     * to the user account.
	     * @param {Object} [options] An object containing optional client arguments, such as configuring
	     * session persistence.
	     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
	     */
	    authWithPassword: function(credentials, options) {
	      var deferred = this._q.defer();

	      try {
	        this._ref.authWithPassword(credentials, this._utils.makeNodeResolver(deferred), options);
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Authenticates the Firebase reference with the OAuth popup flow.
	     *
	     * @param {string} provider The unique string identifying the OAuth provider to authenticate
	     * with, e.g. google.
	     * @param {Object} [options] An object containing optional client arguments, such as configuring
	     * session persistence.
	     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
	     */
	    authWithOAuthPopup: function(provider, options) {
	      var deferred = this._q.defer();

	      try {
	        this._ref.authWithOAuthPopup(provider, this._utils.makeNodeResolver(deferred), options);
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Authenticates the Firebase reference with the OAuth redirect flow.
	     *
	     * @param {string} provider The unique string identifying the OAuth provider to authenticate
	     * with, e.g. google.
	     * @param {Object} [options] An object containing optional client arguments, such as configuring
	     * session persistence.
	     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
	     */
	    authWithOAuthRedirect: function(provider, options) {
	      var deferred = this._q.defer();

	      try {
	        this._ref.authWithOAuthRedirect(provider, this._utils.makeNodeResolver(deferred), options);
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Authenticates the Firebase reference with an OAuth token.
	     *
	     * @param {string} provider The unique string identifying the OAuth provider to authenticate
	     * with, e.g. google.
	     * @param {string|Object} credentials Either a string, such as an OAuth 2.0 access token, or an
	     * Object of key / value pairs, such as a set of OAuth 1.0a credentials.
	     * @param {Object} [options] An object containing optional client arguments, such as configuring
	     * session persistence.
	     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
	     */
	    authWithOAuthToken: function(provider, credentials, options) {
	      var deferred = this._q.defer();

	      try {
	        this._ref.authWithOAuthToken(provider, credentials, this._utils.makeNodeResolver(deferred), options);
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Unauthenticates the Firebase reference.
	     */
	    unauth: function() {
	      if (this.getAuth() !== null) {
	        this._ref.unauth();
	      }
	    },


	    /**************************/
	    /*  Authentication State  */
	    /**************************/
	    /**
	     * Asynchronously fires the provided callback with the current authentication data every time
	     * the authentication data changes. It also fires as soon as the authentication data is
	     * retrieved from the server.
	     *
	     * @param {function} callback A callback that fires when the client's authenticate state
	     * changes. If authenticated, the callback will be passed an object containing authentication
	     * data according to the provider used to authenticate. Otherwise, it will be passed null.
	     * @param {string} [context] If provided, this object will be used as this when calling your
	     * callback.
	     * @return {function} A function which can be used to deregister the provided callback.
	     */
	    onAuth: function(callback, context) {
	      var self = this;

	      var fn = this._utils.debounce(callback, context, 0);
	      this._ref.onAuth(fn);

	      // Return a method to detach the `onAuth()` callback.
	      return function() {
	        self._ref.offAuth(fn);
	      };
	    },

	    /**
	     * Synchronously retrieves the current authentication data.
	     *
	     * @return {Object} The client's authentication data.
	     */
	    getAuth: function() {
	      return this._ref.getAuth();
	    },

	    /**
	     * Helper onAuth() callback method for the two router-related methods.
	     *
	     * @param {boolean} rejectIfAuthDataIsNull Determines if the returned promise should be
	     * resolved or rejected upon an unauthenticated client.
	     * @return {Promise<Object>} A promise fulfilled with the client's authentication state or
	     * rejected if the client is unauthenticated and rejectIfAuthDataIsNull is true.
	     */
	    _routerMethodOnAuthPromise: function(rejectIfAuthDataIsNull) {
	      var ref = this._ref, utils = this._utils;
	      // wait for the initial auth state to resolve; on page load we have to request auth state
	      // asynchronously so we don't want to resolve router methods or flash the wrong state
	      return this._initialAuthResolver.then(function() {
	        // auth state may change in the future so rather than depend on the initially resolved state
	        // we also check the auth data (synchronously) if a new promise is requested, ensuring we resolve
	        // to the current auth state and not a stale/initial state
	        var authData = ref.getAuth(), res = null;
	        if (rejectIfAuthDataIsNull && authData === null) {
	          res = utils.reject("AUTH_REQUIRED");
	        }
	        else {
	          res = utils.resolve(authData);
	        }
	        return res;
	      });
	    },

	    /**
	     * Helper that returns a promise which resolves when the initial auth state has been
	     * fetched from the Firebase server. This never rejects and resolves to undefined.
	     *
	     * @return {Promise<Object>} A promise fulfilled when the server returns initial auth state.
	     */
	    _initAuthResolver: function() {
	      var ref = this._ref;
	      return this._utils.promise(function(resolve) {
	        function callback() {
	          // Turn off this onAuth() callback since we just needed to get the authentication data once.
	          ref.offAuth(callback);
	          resolve();
	        }
	        ref.onAuth(callback);
	      });
	    },

	    /**
	     * Utility method which can be used in a route's resolve() method to require that a route has
	     * a logged in client.
	     *
	     * @returns {Promise<Object>} A promise fulfilled with the client's current authentication
	     * state or rejected if the client is not authenticated.
	     */
	    requireAuth: function() {
	      return this._routerMethodOnAuthPromise(true);
	    },

	    /**
	     * Utility method which can be used in a route's resolve() method to grab the current
	     * authentication data.
	     *
	     * @returns {Promise<Object|null>} A promise fulfilled with the client's current authentication
	     * state, which will be null if the client is not authenticated.
	     */
	    waitForAuth: function() {
	      return this._routerMethodOnAuthPromise(false);
	    },


	    /*********************/
	    /*  User Management  */
	    /*********************/
	    /**
	     * Creates a new email/password user. Note that this function only creates the user, if you
	     * wish to log in as the newly created user, call $authWithPassword() after the promise for
	     * this method has been resolved.
	     *
	     * @param {Object} credentials An object containing the email and password of the user to create.
	     * @return {Promise<Object>} A promise fulfilled with the user object, which contains the
	     * uid of the created user.
	     */
	    createUser: function(credentials) {
	      var deferred = this._q.defer();

	      // Throw an error if they are trying to pass in separate string arguments
	      if (typeof credentials === "string") {
	        throw new Error("$createUser() expects an object containing 'email' and 'password', but got a string.");
	      }

	      try {
	        this._ref.createUser(credentials, this._utils.makeNodeResolver(deferred));
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Changes the password for an email/password user.
	     *
	     * @param {Object} credentials An object containing the email, old password, and new password of
	     * the user whose password is to change.
	     * @return {Promise<>} An empty promise fulfilled once the password change is complete.
	     */
	    changePassword: function(credentials) {
	      var deferred = this._q.defer();

	      // Throw an error if they are trying to pass in separate string arguments
	      if (typeof credentials === "string") {
	        throw new Error("$changePassword() expects an object containing 'email', 'oldPassword', and 'newPassword', but got a string.");
	      }

	      try {
	        this._ref.changePassword(credentials, this._utils.makeNodeResolver(deferred));
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Changes the email for an email/password user.
	     *
	     * @param {Object} credentials An object containing the old email, new email, and password of
	     * the user whose email is to change.
	     * @return {Promise<>} An empty promise fulfilled once the email change is complete.
	     */
	    changeEmail: function(credentials) {
	      var deferred = this._q.defer();

	      if (typeof this._ref.changeEmail !== 'function') {
	        throw new Error("$firebaseAuth.$changeEmail() requires Firebase version 2.1.0 or greater.");
	      } else if (typeof credentials === 'string') {
	        throw new Error("$changeEmail() expects an object containing 'oldEmail', 'newEmail', and 'password', but got a string.");
	      }

	      try {
	        this._ref.changeEmail(credentials, this._utils.makeNodeResolver(deferred));
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },

	    /**
	     * Removes an email/password user.
	     *
	     * @param {Object} credentials An object containing the email and password of the user to remove.
	     * @return {Promise<>} An empty promise fulfilled once the user is removed.
	     */
	    removeUser: function(credentials) {
	      var deferred = this._q.defer();

	      // Throw an error if they are trying to pass in separate string arguments
	      if (typeof credentials === "string") {
	        throw new Error("$removeUser() expects an object containing 'email' and 'password', but got a string.");
	      }

	      try {
	        this._ref.removeUser(credentials, this._utils.makeNodeResolver(deferred));
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    },


	    /**
	     * Sends a password reset email to an email/password user.
	     *
	     * @param {Object} credentials An object containing the email of the user to send a reset
	     * password email to.
	     * @return {Promise<>} An empty promise fulfilled once the reset password email is sent.
	     */
	    resetPassword: function(credentials) {
	      var deferred = this._q.defer();

	      // Throw an error if they are trying to pass in a string argument
	      if (typeof credentials === "string") {
	        throw new Error("$resetPassword() expects an object containing 'email', but got a string.");
	      }

	      try {
	        this._ref.resetPassword(credentials, this._utils.makeNodeResolver(deferred));
	      } catch (error) {
	        deferred.reject(error);
	      }

	      return deferred.promise;
	    }
	  };
	})();

	(function() {
	  'use strict';
	  /**
	   * Creates and maintains a synchronized object, with 2-way bindings between Angular and Firebase.
	   *
	   * Implementations of this class are contracted to provide the following internal methods,
	   * which are used by the synchronization process and 3-way bindings:
	   *    $$updated - called whenever a change occurs (a value event from Firebase)
	   *    $$error - called when listeners are canceled due to a security error
	   *    $$notify - called to update $watch listeners and trigger updates to 3-way bindings
	   *    $ref - called to obtain the underlying Firebase reference
	   *
	   * Instead of directly modifying this class, one should generally use the $extend
	   * method to add or change how methods behave:
	   *
	   * <pre><code>
	   * var ExtendedObject = $firebaseObject.$extend({
	   *    // add a new method to the prototype
	   *    foo: function() { return 'bar'; },
	   * });
	   *
	   * var obj = new ExtendedObject(ref);
	   * </code></pre>
	   */
	  angular.module('firebase').factory('$firebaseObject', [
	    '$parse', '$firebaseUtils', '$log',
	    function($parse, $firebaseUtils, $log) {
	      /**
	       * Creates a synchronized object with 2-way bindings between Angular and Firebase.
	       *
	       * @param {Firebase} ref
	       * @returns {FirebaseObject}
	       * @constructor
	       */
	      function FirebaseObject(ref) {
	        if( !(this instanceof FirebaseObject) ) {
	          return new FirebaseObject(ref);
	        }
	        // These are private config props and functions used internally
	        // they are collected here to reduce clutter in console.log and forEach
	        this.$$conf = {
	          // synchronizes data to Firebase
	          sync: new ObjectSyncManager(this, ref),
	          // stores the Firebase ref
	          ref: ref,
	          // synchronizes $scope variables with this object
	          binding: new ThreeWayBinding(this),
	          // stores observers registered with $watch
	          listeners: []
	        };

	        // this bit of magic makes $$conf non-enumerable and non-configurable
	        // and non-writable (its properties are still writable but the ref cannot be replaced)
	        // we redundantly assign it above so the IDE can relax
	        Object.defineProperty(this, '$$conf', {
	          value: this.$$conf
	        });

	        this.$id = $firebaseUtils.getKey(ref.ref());
	        this.$priority = null;

	        $firebaseUtils.applyDefaults(this, this.$$defaults);

	        // start synchronizing data with Firebase
	        this.$$conf.sync.init();
	      }

	      FirebaseObject.prototype = {
	        /**
	         * Saves all data on the FirebaseObject back to Firebase.
	         * @returns a promise which will resolve after the save is completed.
	         */
	        $save: function () {
	          var self = this;
	          var ref = self.$ref();
	          var data = $firebaseUtils.toJSON(self);
	          return $firebaseUtils.doSet(ref, data).then(function() {
	            self.$$notify();
	            return self.$ref();
	          });
	        },

	        /**
	         * Removes all keys from the FirebaseObject and also removes
	         * the remote data from the server.
	         *
	         * @returns a promise which will resolve after the op completes
	         */
	        $remove: function() {
	          var self = this;
	          $firebaseUtils.trimKeys(self, {});
	          self.$value = null;
	          return $firebaseUtils.doRemove(self.$ref()).then(function() {
	            self.$$notify();
	            return self.$ref();
	          });
	        },

	        /**
	         * The loaded method is invoked after the initial batch of data arrives from the server.
	         * When this resolves, all data which existed prior to calling $asObject() is now cached
	         * locally in the object.
	         *
	         * As a shortcut is also possible to pass resolve/reject methods directly into this
	         * method just as they would be passed to .then()
	         *
	         * @param {Function} resolve
	         * @param {Function} reject
	         * @returns a promise which resolves after initial data is downloaded from Firebase
	         */
	        $loaded: function(resolve, reject) {
	          var promise = this.$$conf.sync.ready();
	          if (arguments.length) {
	            // allow this method to be called just like .then
	            // by passing any arguments on to .then
	            promise = promise.then.call(promise, resolve, reject);
	          }
	          return promise;
	        },

	        /**
	         * @returns {Firebase} the original Firebase instance used to create this object.
	         */
	        $ref: function () {
	          return this.$$conf.ref;
	        },

	        /**
	         * Creates a 3-way data sync between this object, the Firebase server, and a
	         * scope variable. This means that any changes made to the scope variable are
	         * pushed to Firebase, and vice versa.
	         *
	         * If scope emits a $destroy event, the binding is automatically severed. Otherwise,
	         * it is possible to unbind the scope variable by using the `unbind` function
	         * passed into the resolve method.
	         *
	         * Can only be bound to one scope variable at a time. If a second is attempted,
	         * the promise will be rejected with an error.
	         *
	         * @param {object} scope
	         * @param {string} varName
	         * @returns a promise which resolves to an unbind method after data is set in scope
	         */
	        $bindTo: function (scope, varName) {
	          var self = this;
	          return self.$loaded().then(function () {
	            return self.$$conf.binding.bindTo(scope, varName);
	          });
	        },

	        /**
	         * Listeners passed into this method are notified whenever a new change is received
	         * from the server. Each invocation is sent an object containing
	         * <code>{ type: 'value', key: 'my_firebase_id' }</code>
	         *
	         * This method returns an unbind function that can be used to detach the listener.
	         *
	         * @param {Function} cb
	         * @param {Object} [context]
	         * @returns {Function} invoke to stop observing events
	         */
	        $watch: function (cb, context) {
	          var list = this.$$conf.listeners;
	          list.push([cb, context]);
	          // an off function for cancelling the listener
	          return function () {
	            var i = list.findIndex(function (parts) {
	              return parts[0] === cb && parts[1] === context;
	            });
	            if (i > -1) {
	              list.splice(i, 1);
	            }
	          };
	        },

	        /**
	         * Informs $firebase to stop sending events and clears memory being used
	         * by this object (delete's its local content).
	         */
	        $destroy: function(err) {
	          var self = this;
	          if (!self.$isDestroyed) {
	            self.$isDestroyed = true;
	            self.$$conf.sync.destroy(err);
	            self.$$conf.binding.destroy();
	            $firebaseUtils.each(self, function (v, k) {
	              delete self[k];
	            });
	          }
	        },

	        /**
	         * Called by $firebase whenever an item is changed at the server.
	         * This method must exist on any objectFactory passed into $firebase.
	         *
	         * It should return true if any changes were made, otherwise `$$notify` will
	         * not be invoked.
	         *
	         * @param {object} snap a Firebase snapshot
	         * @return {boolean} true if any changes were made.
	         */
	        $$updated: function (snap) {
	          // applies new data to this object
	          var changed = $firebaseUtils.updateRec(this, snap);
	          // applies any defaults set using $$defaults
	          $firebaseUtils.applyDefaults(this, this.$$defaults);
	          // returning true here causes $$notify to be triggered
	          return changed;
	        },

	        /**
	         * Called whenever a security error or other problem causes the listeners to become
	         * invalid. This is generally an unrecoverable error.
	         * @param {Object} err which will have a `code` property and possibly a `message`
	         */
	        $$error: function (err) {
	          // prints an error to the console (via Angular's logger)
	          $log.error(err);
	          // frees memory and cancels any remaining listeners
	          this.$destroy(err);
	        },

	        /**
	         * Called internally by $bindTo when data is changed in $scope.
	         * Should apply updates to this record but should not call
	         * notify().
	         */
	        $$scopeUpdated: function(newData) {
	          // we use a one-directional loop to avoid feedback with 3-way bindings
	          // since set() is applied locally anyway, this is still performant
	          var def = $firebaseUtils.defer();
	          this.$ref().set($firebaseUtils.toJSON(newData), $firebaseUtils.makeNodeResolver(def));
	          return def.promise;
	        },

	        /**
	         * Updates any bound scope variables and
	         * notifies listeners registered with $watch
	         */
	        $$notify: function() {
	          var self = this, list = this.$$conf.listeners.slice();
	          // be sure to do this after setting up data and init state
	          angular.forEach(list, function (parts) {
	            parts[0].call(parts[1], {event: 'value', key: self.$id});
	          });
	        },

	        /**
	         * Overrides how Angular.forEach iterates records on this object so that only
	         * fields stored in Firebase are part of the iteration. To include meta fields like
	         * $id and $priority in the iteration, utilize for(key in obj) instead.
	         */
	        forEach: function(iterator, context) {
	          return $firebaseUtils.each(this, iterator, context);
	        }
	      };

	      /**
	       * This method allows FirebaseObject to be copied into a new factory. Methods passed into this
	       * function will be added onto the object's prototype. They can override existing methods as
	       * well.
	       *
	       * In addition to passing additional methods, it is also possible to pass in a class function.
	       * The prototype on that class function will be preserved, and it will inherit from
	       * FirebaseObject. It's also possible to do both, passing a class to inherit and additional
	       * methods to add onto the prototype.
	       *
	       * Once a factory is obtained by this method, it can be passed into $firebase as the
	       * `objectFactory` parameter:
	       *
	       * <pre><code>
	       * var MyFactory = $firebaseObject.$extend({
	       *    // add a method onto the prototype that prints a greeting
	       *    getGreeting: function() {
	       *       return 'Hello ' + this.first_name + ' ' + this.last_name + '!';
	       *    }
	       * });
	       *
	       * // use our new factory in place of $firebaseObject
	       * var obj = $firebase(ref, {objectFactory: MyFactory}).$asObject();
	       * </code></pre>
	       *
	       * @param {Function} [ChildClass] a child class which should inherit FirebaseObject
	       * @param {Object} [methods] a list of functions to add onto the prototype
	       * @returns {Function} a new factory suitable for use with $firebase
	       */
	      FirebaseObject.$extend = function(ChildClass, methods) {
	        if( arguments.length === 1 && angular.isObject(ChildClass) ) {
	          methods = ChildClass;
	          ChildClass = function(ref) {
	            if( !(this instanceof ChildClass) ) {
	              return new ChildClass(ref);
	            }
	            FirebaseObject.apply(this, arguments);
	          };
	        }
	        return $firebaseUtils.inherit(ChildClass, FirebaseObject, methods);
	      };

	      /**
	       * Creates a three-way data binding on a scope variable.
	       *
	       * @param {FirebaseObject} rec
	       * @returns {*}
	       * @constructor
	       */
	      function ThreeWayBinding(rec) {
	        this.subs = [];
	        this.scope = null;
	        this.key = null;
	        this.rec = rec;
	      }

	      ThreeWayBinding.prototype = {
	        assertNotBound: function(varName) {
	          if( this.scope ) {
	            var msg = 'Cannot bind to ' + varName + ' because this instance is already bound to ' +
	              this.key + '; one binding per instance ' +
	              '(call unbind method or create another FirebaseObject instance)';
	            $log.error(msg);
	            return $firebaseUtils.reject(msg);
	          }
	        },

	        bindTo: function(scope, varName) {
	          function _bind(self) {
	            var sending = false;
	            var parsed = $parse(varName);
	            var rec = self.rec;
	            self.scope = scope;
	            self.varName = varName;

	            function equals(scopeValue) {
	              return angular.equals(scopeValue, rec) &&
	                scopeValue.$priority === rec.$priority &&
	                scopeValue.$value === rec.$value;
	            }

	            function setScope(rec) {
	              parsed.assign(scope, $firebaseUtils.scopeData(rec));
	            }

	            var send = $firebaseUtils.debounce(function(val) {
	              var scopeData = $firebaseUtils.scopeData(val);
	              rec.$$scopeUpdated(scopeData)
	                ['finally'](function() {
	                  sending = false;
	                  if(!scopeData.hasOwnProperty('$value')){
	                    delete rec.$value;
	                    delete parsed(scope).$value;
	                  }
	                  setScope(rec);
	                }
	              );
	            }, 50, 500);

	            var scopeUpdated = function(newVal) {
	              newVal = newVal[0];
	              if( !equals(newVal) ) {
	                sending = true;
	                send(newVal);
	              }
	            };

	            var recUpdated = function() {
	              if( !sending && !equals(parsed(scope)) ) {
	                setScope(rec);
	              }
	            };

	            // $watch will not check any vars prefixed with $, so we
	            // manually check $priority and $value using this method
	            function watchExp(){
	              var obj = parsed(scope);
	              return [obj, obj.$priority, obj.$value];
	            }

	            setScope(rec);
	            self.subs.push(scope.$on('$destroy', self.unbind.bind(self)));

	            // monitor scope for any changes
	            self.subs.push(scope.$watch(watchExp, scopeUpdated, true));

	            // monitor the object for changes
	            self.subs.push(rec.$watch(recUpdated));

	            return self.unbind.bind(self);
	          }

	          return this.assertNotBound(varName) || _bind(this);
	        },

	        unbind: function() {
	          if( this.scope ) {
	            angular.forEach(this.subs, function(unbind) {
	              unbind();
	            });
	            this.subs = [];
	            this.scope = null;
	            this.key = null;
	          }
	        },

	        destroy: function() {
	          this.unbind();
	          this.rec = null;
	        }
	      };

	      function ObjectSyncManager(firebaseObject, ref) {
	        function destroy(err) {
	          if( !sync.isDestroyed ) {
	            sync.isDestroyed = true;
	            ref.off('value', applyUpdate);
	            firebaseObject = null;
	            initComplete(err||'destroyed');
	          }
	        }

	        function init() {
	          ref.on('value', applyUpdate, error);
	          ref.once('value', function(snap) {
	            if (angular.isArray(snap.val())) {
	              $log.warn('Storing data using array indices in Firebase can result in unexpected behavior. See https://www.firebase.com/docs/web/guide/understanding-data.html#section-arrays-in-firebase for more information. Also note that you probably wanted $firebaseArray and not $firebaseObject.');
	            }

	            initComplete(null);
	          }, initComplete);
	        }

	        // call initComplete(); do not call this directly
	        function _initComplete(err) {
	          if( !isResolved ) {
	            isResolved = true;
	            if( err ) { def.reject(err); }
	            else { def.resolve(firebaseObject); }
	          }
	        }

	        var isResolved = false;
	        var def = $firebaseUtils.defer();
	        var applyUpdate = $firebaseUtils.batch(function(snap) {
	          var changed = firebaseObject.$$updated(snap);
	          if( changed ) {
	            // notifies $watch listeners and
	            // updates $scope if bound to a variable
	            firebaseObject.$$notify();
	          }
	        });
	        var error = $firebaseUtils.batch(function(err) {
	          _initComplete(err);
	          if( firebaseObject ) {
	            firebaseObject.$$error(err);
	          }
	        });
	        var initComplete = $firebaseUtils.batch(_initComplete);

	        var sync = {
	          isDestroyed: false,
	          destroy: destroy,
	          init: init,
	          ready: function() { return def.promise; }
	        };
	        return sync;
	      }

	      return FirebaseObject;
	    }
	  ]);

	  /** @deprecated */
	  angular.module('firebase').factory('$FirebaseObject', ['$log', '$firebaseObject',
	    function($log, $firebaseObject) {
	      return function() {
	        $log.warn('$FirebaseObject has been renamed. Use $firebaseObject instead.');
	        return $firebaseObject.apply(null, arguments);
	      };
	    }
	  ]);
	})();

	(function() {
	  'use strict';

	  angular.module("firebase")

	    /** @deprecated */
	    .factory("$firebase", function() {
	      return function() {
	        throw new Error('$firebase has been removed. You may instantiate $firebaseArray and $firebaseObject ' +
	        'directly now. For simple write operations, just use the Firebase ref directly. ' +
	        'See the AngularFire 1.0.0 changelog for details: https://www.firebase.com/docs/web/libraries/angular/changelog.html');
	      };
	    });

	})();

	(function() {
	  "use strict";

	  function FirebaseAuthService($firebaseAuth, $firebaseRef) {
	    return $firebaseAuth($firebaseRef.default);
	  }
	  FirebaseAuthService.$inject = ['$firebaseAuth', '$firebaseRef'];

	  angular.module('firebase')
	    .factory('$firebaseAuthService', FirebaseAuthService);

	})();

	(function() {
	  "use strict";

	  function FirebaseRef() {
	    this.urls = null;
	    this.registerUrl = function registerUrl(urlOrConfig) {

	      if (typeof urlOrConfig === 'string') {
	        this.urls = {};
	        this.urls.default = urlOrConfig;
	      }

	      if (angular.isObject(urlOrConfig)) {
	        this.urls = urlOrConfig;
	      }

	    };

	    this.$$checkUrls = function $$checkUrls(urlConfig) {
	      if (!urlConfig) {
	        return new Error('No Firebase URL registered. Use firebaseRefProvider.registerUrl() in the config phase. This is required if you are using $firebaseAuthService.');
	      }
	      if (!urlConfig.default) {
	        return new Error('No default Firebase URL registered. Use firebaseRefProvider.registerUrl({ default: "https://<my-firebase-app>.firebaseio.com/"}).');
	      }
	    };

	    this.$$createRefsFromUrlConfig = function $$createMultipleRefs(urlConfig) {
	      var refs = {};
	      var error = this.$$checkUrls(urlConfig);
	      if (error) { throw error; }
	      angular.forEach(urlConfig, function(value, key) {
	        refs[key] = new Firebase(value);
	      });
	      return refs;
	    };

	    this.$get = function FirebaseRef_$get() {
	      return this.$$createRefsFromUrlConfig(this.urls);
	    };
	  }

	  angular.module('firebase')
	    .provider('$firebaseRef', FirebaseRef);

	})();

	'use strict';

	// Shim Array.indexOf for IE compatibility.
	if (!Array.prototype.indexOf) {
	  Array.prototype.indexOf = function (searchElement, fromIndex) {
	    if (this === undefined || this === null) {
	      throw new TypeError("'this' is null or not defined");
	    }
	    // Hack to convert object.length to a UInt32
	    // jshint -W016
	    var length = this.length >>> 0;
	    fromIndex = +fromIndex || 0;
	    // jshint +W016

	    if (Math.abs(fromIndex) === Infinity) {
	      fromIndex = 0;
	    }

	    if (fromIndex < 0) {
	      fromIndex += length;
	      if (fromIndex < 0) {
	        fromIndex = 0;
	      }
	    }

	    for (;fromIndex < length; fromIndex++) {
	      if (this[fromIndex] === searchElement) {
	        return fromIndex;
	      }
	    }

	    return -1;
	  };
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
	if (!Function.prototype.bind) {
	  Function.prototype.bind = function (oThis) {
	    if (typeof this !== "function") {
	      // closest thing possible to the ECMAScript 5
	      // internal IsCallable function
	      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	    }

	    var aArgs = Array.prototype.slice.call(arguments, 1),
	      fToBind = this,
	      fNOP = function () {},
	      fBound = function () {
	        return fToBind.apply(this instanceof fNOP && oThis
	            ? this
	            : oThis,
	          aArgs.concat(Array.prototype.slice.call(arguments)));
	      };

	    fNOP.prototype = this.prototype;
	    fBound.prototype = new fNOP();

	    return fBound;
	  };
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
	if (!Array.prototype.findIndex) {
	  Object.defineProperty(Array.prototype, 'findIndex', {
	    enumerable: false,
	    configurable: true,
	    writable: true,
	    value: function(predicate) {
	      if (this == null) {
	        throw new TypeError('Array.prototype.find called on null or undefined');
	      }
	      if (typeof predicate !== 'function') {
	        throw new TypeError('predicate must be a function');
	      }
	      var list = Object(this);
	      var length = list.length >>> 0;
	      var thisArg = arguments[1];
	      var value;

	      for (var i = 0; i < length; i++) {
	        if (i in list) {
	          value = list[i];
	          if (predicate.call(thisArg, value, i, list)) {
	            return i;
	          }
	        }
	      }
	      return -1;
	    }
	  });
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
	if (typeof Object.create != 'function') {
	  (function () {
	    var F = function () {};
	    Object.create = function (o) {
	      if (arguments.length > 1) {
	        throw new Error('Second argument not supported');
	      }
	      if (o === null) {
	        throw new Error('Cannot set a null [[Prototype]]');
	      }
	      if (typeof o != 'object') {
	        throw new TypeError('Argument must be an object');
	      }
	      F.prototype = o;
	      return new F();
	    };
	  })();
	}

	// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
	if (!Object.keys) {
	  Object.keys = (function () {
	    'use strict';
	    var hasOwnProperty = Object.prototype.hasOwnProperty,
	      hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
	      dontEnums = [
	        'toString',
	        'toLocaleString',
	        'valueOf',
	        'hasOwnProperty',
	        'isPrototypeOf',
	        'propertyIsEnumerable',
	        'constructor'
	      ],
	      dontEnumsLength = dontEnums.length;

	    return function (obj) {
	      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
	        throw new TypeError('Object.keys called on non-object');
	      }

	      var result = [], prop, i;

	      for (prop in obj) {
	        if (hasOwnProperty.call(obj, prop)) {
	          result.push(prop);
	        }
	      }

	      if (hasDontEnumBug) {
	        for (i = 0; i < dontEnumsLength; i++) {
	          if (hasOwnProperty.call(obj, dontEnums[i])) {
	            result.push(dontEnums[i]);
	          }
	        }
	      }
	      return result;
	    };
	  }());
	}

	// http://ejohn.org/blog/objectgetprototypeof/
	if ( typeof Object.getPrototypeOf !== "function" ) {
	  if ( typeof "test".__proto__ === "object" ) {
	    Object.getPrototypeOf = function(object){
	      return object.__proto__;
	    };
	  } else {
	    Object.getPrototypeOf = function(object){
	      // May break if the constructor has been tampered with
	      return object.constructor.prototype;
	    };
	  }
	}

	(function() {
	  'use strict';

	  angular.module('firebase')
	    .factory('$firebaseConfig', ["$firebaseArray", "$firebaseObject", "$injector",
	      function($firebaseArray, $firebaseObject, $injector) {
	        return function(configOpts) {
	          // make a copy we can modify
	          var opts = angular.extend({}, configOpts);
	          // look up factories if passed as string names
	          if( typeof opts.objectFactory === 'string' ) {
	            opts.objectFactory = $injector.get(opts.objectFactory);
	          }
	          if( typeof opts.arrayFactory === 'string' ) {
	            opts.arrayFactory = $injector.get(opts.arrayFactory);
	          }
	          // extend defaults and return
	          return angular.extend({
	            arrayFactory: $firebaseArray,
	            objectFactory: $firebaseObject
	          }, opts);
	        };
	      }
	    ])

	    .factory('$firebaseUtils', ["$q", "$timeout", "$rootScope",
	      function($q, $timeout, $rootScope) {

	        // ES6 style promises polyfill for angular 1.2.x
	        // Copied from angular 1.3.x implementation: https://github.com/angular/angular.js/blob/v1.3.5/src/ng/q.js#L539
	        function Q(resolver) {
	          if (!angular.isFunction(resolver)) {
	            throw new Error('missing resolver function');
	          }

	          var deferred = $q.defer();

	          function resolveFn(value) {
	            deferred.resolve(value);
	          }

	          function rejectFn(reason) {
	            deferred.reject(reason);
	          }

	          resolver(resolveFn, rejectFn);

	          return deferred.promise;
	        }

	        var utils = {
	          /**
	           * Returns a function which, each time it is invoked, will gather up the values until
	           * the next "tick" in the Angular compiler process. Then they are all run at the same
	           * time to avoid multiple cycles of the digest loop. Internally, this is done using $evalAsync()
	           *
	           * @param {Function} action
	           * @param {Object} [context]
	           * @returns {Function}
	           */
	          batch: function(action, context) {
	            return function() {
	              var args = Array.prototype.slice.call(arguments, 0);
	              utils.compile(function() {
	                action.apply(context, args);
	              });
	            };
	          },

	          /**
	           * A rudimentary debounce method
	           * @param {function} fn the function to debounce
	           * @param {object} [ctx] the `this` context to set in fn
	           * @param {int} wait number of milliseconds to pause before sending out after each invocation
	           * @param {int} [maxWait] max milliseconds to wait before sending out, defaults to wait * 10 or 100
	           */
	          debounce: function(fn, ctx, wait, maxWait) {
	            var start, cancelTimer, args, runScheduledForNextTick;
	            if( typeof(ctx) === 'number' ) {
	              maxWait = wait;
	              wait = ctx;
	              ctx = null;
	            }

	            if( typeof wait !== 'number' ) {
	              throw new Error('Must provide a valid integer for wait. Try 0 for a default');
	            }
	            if( typeof(fn) !== 'function' ) {
	              throw new Error('Must provide a valid function to debounce');
	            }
	            if( !maxWait ) { maxWait = wait*10 || 100; }

	            // clears the current wait timer and creates a new one
	            // however, if maxWait is exceeded, calls runNow() on the next tick.
	            function resetTimer() {
	              if( cancelTimer ) {
	                cancelTimer();
	                cancelTimer = null;
	              }
	              if( start && Date.now() - start > maxWait ) {
	                if(!runScheduledForNextTick){
	                  runScheduledForNextTick = true;
	                  utils.compile(runNow);
	                }
	              }
	              else {
	                if( !start ) { start = Date.now(); }
	                cancelTimer = utils.wait(runNow, wait);
	              }
	            }

	            // Clears the queue and invokes the debounced function with the most recent arguments
	            function runNow() {
	              cancelTimer = null;
	              start = null;
	              runScheduledForNextTick = false;
	              fn.apply(ctx, args);
	            }

	            function debounced() {
	              args = Array.prototype.slice.call(arguments, 0);
	              resetTimer();
	            }
	            debounced.running = function() {
	              return start > 0;
	            };

	            return debounced;
	          },

	          assertValidRef: function(ref, msg) {
	            if( !angular.isObject(ref) ||
	              typeof(ref.ref) !== 'function' ||
	              typeof(ref.ref().transaction) !== 'function' ) {
	              throw new Error(msg || 'Invalid Firebase reference');
	            }
	          },

	          // http://stackoverflow.com/questions/7509831/alternative-for-the-deprecated-proto
	          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
	          inherit: function(ChildClass, ParentClass, methods) {
	            var childMethods = ChildClass.prototype;
	            ChildClass.prototype = Object.create(ParentClass.prototype);
	            ChildClass.prototype.constructor = ChildClass; // restoring proper constructor for child class
	            angular.forEach(Object.keys(childMethods), function(k) {
	              ChildClass.prototype[k] = childMethods[k];
	            });
	            if( angular.isObject(methods) ) {
	              angular.extend(ChildClass.prototype, methods);
	            }
	            return ChildClass;
	          },

	          getPrototypeMethods: function(inst, iterator, context) {
	            var methods = {};
	            var objProto = Object.getPrototypeOf({});
	            var proto = angular.isFunction(inst) && angular.isObject(inst.prototype)?
	              inst.prototype : Object.getPrototypeOf(inst);
	            while(proto && proto !== objProto) {
	              for (var key in proto) {
	                // we only invoke each key once; if a super is overridden it's skipped here
	                if (proto.hasOwnProperty(key) && !methods.hasOwnProperty(key)) {
	                  methods[key] = true;
	                  iterator.call(context, proto[key], key, proto);
	                }
	              }
	              proto = Object.getPrototypeOf(proto);
	            }
	          },

	          getPublicMethods: function(inst, iterator, context) {
	            utils.getPrototypeMethods(inst, function(m, k) {
	              if( typeof(m) === 'function' && k.charAt(0) !== '_' ) {
	                iterator.call(context, m, k);
	              }
	            });
	          },

	          defer: $q.defer,

	          reject: $q.reject,

	          resolve: $q.when,

	          //TODO: Remove false branch and use only angular implementation when we drop angular 1.2.x support.
	          promise: angular.isFunction($q) ? $q : Q,

	          makeNodeResolver:function(deferred){
	            return function(err,result){
	              if(err === null){
	                if(arguments.length > 2){
	                  result = Array.prototype.slice.call(arguments,1);
	                }
	                deferred.resolve(result);
	              }
	              else {
	                deferred.reject(err);
	              }
	            };
	          },

	          wait: function(fn, wait) {
	            var to = $timeout(fn, wait||0);
	            return function() {
	              if( to ) {
	                $timeout.cancel(to);
	                to = null;
	              }
	            };
	          },

	          compile: function(fn) {
	            return $rootScope.$evalAsync(fn||function() {});
	          },

	          deepCopy: function(obj) {
	            if( !angular.isObject(obj) ) { return obj; }
	            var newCopy = angular.isArray(obj) ? obj.slice() : angular.extend({}, obj);
	            for (var key in newCopy) {
	              if (newCopy.hasOwnProperty(key)) {
	                if (angular.isObject(newCopy[key])) {
	                  newCopy[key] = utils.deepCopy(newCopy[key]);
	                }
	              }
	            }
	            return newCopy;
	          },

	          trimKeys: function(dest, source) {
	            utils.each(dest, function(v,k) {
	              if( !source.hasOwnProperty(k) ) {
	                delete dest[k];
	              }
	            });
	          },

	          scopeData: function(dataOrRec) {
	            var data = {
	              $id: dataOrRec.$id,
	              $priority: dataOrRec.$priority
	            };
	            var hasPublicProp = false;
	            utils.each(dataOrRec, function(v,k) {
	              hasPublicProp = true;
	              data[k] = utils.deepCopy(v);
	            });
	            if(!hasPublicProp && dataOrRec.hasOwnProperty('$value')){
	              data.$value = dataOrRec.$value;
	            }
	            return data;
	          },

	          updateRec: function(rec, snap) {
	            var data = snap.val();
	            var oldData = angular.extend({}, rec);

	            // deal with primitives
	            if( !angular.isObject(data) ) {
	              rec.$value = data;
	              data = {};
	            }
	            else {
	              delete rec.$value;
	            }

	            // apply changes: remove old keys, insert new data, set priority
	            utils.trimKeys(rec, data);
	            angular.extend(rec, data);
	            rec.$priority = snap.getPriority();

	            return !angular.equals(oldData, rec) ||
	              oldData.$value !== rec.$value ||
	              oldData.$priority !== rec.$priority;
	          },

	          applyDefaults: function(rec, defaults) {
	            if( angular.isObject(defaults) ) {
	              angular.forEach(defaults, function(v,k) {
	                if( !rec.hasOwnProperty(k) ) {
	                  rec[k] = v;
	                }
	              });
	            }
	            return rec;
	          },

	          dataKeys: function(obj) {
	            var out = [];
	            utils.each(obj, function(v,k) {
	              out.push(k);
	            });
	            return out;
	          },

	          each: function(obj, iterator, context) {
	            if(angular.isObject(obj)) {
	              for (var k in obj) {
	                if (obj.hasOwnProperty(k)) {
	                  var c = k.charAt(0);
	                  if( c !== '_' && c !== '$' && c !== '.' ) {
	                    iterator.call(context, obj[k], k, obj);
	                  }
	                }
	              }
	            }
	            else if(angular.isArray(obj)) {
	              for(var i = 0, len = obj.length; i < len; i++) {
	                iterator.call(context, obj[i], i, obj);
	              }
	            }
	            return obj;
	          },

	          /**
	           * A utility for retrieving a Firebase reference or DataSnapshot's
	           * key name. This is backwards-compatible with `name()` from Firebase
	           * 1.x.x and `key()` from Firebase 2.0.0+. Once support for Firebase
	           * 1.x.x is dropped in AngularFire, this helper can be removed.
	           */
	          getKey: function(refOrSnapshot) {
	            return (typeof refOrSnapshot.key === 'function') ? refOrSnapshot.key() : refOrSnapshot.name();
	          },

	          /**
	           * A utility for converting records to JSON objects
	           * which we can save into Firebase. It asserts valid
	           * keys and strips off any items prefixed with $.
	           *
	           * If the rec passed into this method has a toJSON()
	           * method, that will be used in place of the custom
	           * functionality here.
	           *
	           * @param rec
	           * @returns {*}
	           */
	          toJSON: function(rec) {
	            var dat;
	            if( !angular.isObject(rec) ) {
	              rec = {$value: rec};
	            }
	            if (angular.isFunction(rec.toJSON)) {
	              dat = rec.toJSON();
	            }
	            else {
	              dat = {};
	              utils.each(rec, function (v, k) {
	                dat[k] = stripDollarPrefixedKeys(v);
	              });
	            }
	            if( angular.isDefined(rec.$value) && Object.keys(dat).length === 0 && rec.$value !== null ) {
	              dat['.value'] = rec.$value;
	            }
	            if( angular.isDefined(rec.$priority) && Object.keys(dat).length > 0 && rec.$priority !== null ) {
	              dat['.priority'] = rec.$priority;
	            }
	            angular.forEach(dat, function(v,k) {
	              if (k.match(/[.$\[\]#\/]/) && k !== '.value' && k !== '.priority' ) {
	                throw new Error('Invalid key ' + k + ' (cannot contain .$[]#)');
	              }
	              else if( angular.isUndefined(v) ) {
	                throw new Error('Key '+k+' was undefined. Cannot pass undefined in JSON. Use null instead.');
	              }
	            });
	            return dat;
	          },

	          doSet: function(ref, data) {
	            var def = utils.defer();
	            if( angular.isFunction(ref.set) || !angular.isObject(data) ) {
	              // this is not a query, just do a flat set
	              ref.set(data, utils.makeNodeResolver(def));
	            }
	            else {
	              var dataCopy = angular.extend({}, data);
	              // this is a query, so we will replace all the elements
	              // of this query with the value provided, but not blow away
	              // the entire Firebase path
	              ref.once('value', function(snap) {
	                snap.forEach(function(ss) {
	                  if( !dataCopy.hasOwnProperty(utils.getKey(ss)) ) {
	                    dataCopy[utils.getKey(ss)] = null;
	                  }
	                });
	                ref.ref().update(dataCopy, utils.makeNodeResolver(def));
	              }, function(err) {
	                def.reject(err);
	              });
	            }
	            return def.promise;
	          },

	          doRemove: function(ref) {
	            var def = utils.defer();
	            if( angular.isFunction(ref.remove) ) {
	              // ref is not a query, just do a flat remove
	              ref.remove(utils.makeNodeResolver(def));
	            }
	            else {
	              // ref is a query so let's only remove the
	              // items in the query and not the entire path
	              ref.once('value', function(snap) {
	                var promises = [];
	                snap.forEach(function(ss) {
	                  var d = utils.defer();
	                  promises.push(d.promise);
	                  ss.ref().remove(utils.makeNodeResolver(def));
	                });
	                utils.allPromises(promises)
	                  .then(function() {
	                    def.resolve(ref);
	                  },
	                  function(err){
	                    def.reject(err);
	                  }
	                );
	              }, function(err) {
	                def.reject(err);
	              });
	            }
	            return def.promise;
	          },

	          /**
	           * AngularFire version number.
	           */
	          VERSION: '1.2.0',

	          allPromises: $q.all.bind($q)
	        };

	        return utils;
	      }
	    ]);

	    function stripDollarPrefixedKeys(data) {
	      if( !angular.isObject(data) ) { return data; }
	      var out = angular.isArray(data)? [] : {};
	      angular.forEach(data, function(v,k) {
	        if(typeof k !== 'string' || k.charAt(0) !== '$') {
	          out[k] = stripDollarPrefixedKeys(v);
	        }
	      });
	      return out;
	    }
	})();


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var constantsModule = _angular2.default.module('app.constants', []).constant('FIRE_URL', 'https://olgah.firebaseio.com/');

	exports.default = constantsModule;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	      value: true
	});

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	var _login = __webpack_require__(203);

	var _login2 = _interopRequireDefault(_login);

	var _students = __webpack_require__(217);

	var _students2 = _interopRequireDefault(_students);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var componentModule = _angular2.default.module('app.components', [_login2.default.name, _students2.default.name]);

	exports.default = componentModule;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	var _login = __webpack_require__(204);

	var _login2 = _interopRequireDefault(_login);

	var _login3 = __webpack_require__(205);

	var _login4 = _interopRequireDefault(_login3);

	var _login5 = __webpack_require__(212);

	var _login6 = _interopRequireDefault(_login5);

	var _login7 = __webpack_require__(213);

	var _login8 = _interopRequireDefault(_login7);

	var _register = __webpack_require__(214);

	var _register2 = _interopRequireDefault(_register);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loginModule = _angular2.default.module('login', []).config(_login2.default).component('login', _login4.default).component('register', _register2.default).controller('LoginController', _login6.default).service('LoginService', _login8.default);

	exports.default = loginModule;

/***/ },
/* 204 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	loginRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

	function loginRoutes($stateProvider, $urlRouterProvider) {

	   $urlRouterProvider.otherwise('/login');

	   $stateProvider.state('login', {
	      url: '/login',
	      template: '<login></login>'
	   }).state('login.register', {
	      url: '/register',
	      template: '<register></register>'
	   });
	}

	exports.default = loginRoutes;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _login = __webpack_require__(206);

	var _login2 = _interopRequireDefault(_login);

	__webpack_require__(208);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loginComponent = {
	   template: _login2.default,
	   controller: 'LoginController',
	   bindings: {}
	};

	exports.default = loginComponent;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section>\n   <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n         <figure>\n            <img class=\"img-responsive center-block\"\n                 width=\"150px\"\n                 src=\"" + __webpack_require__(207) + "\"\n                 alt=\"logo coco interactivo\">\n         </figure>\n         <ui-view>\n            <form name=\"loginForm\">\n               <div class=\"form-group\">\n                  <label for=\"userEmail\">Email address</label>\n                  <input type=\"email\"\n                         class=\"form-control\"\n                         ng-model=\"$ctrl.user.email\"\n                         id=\"userEmail\"\n                         placeholder=\"Email\">\n               </div>\n               <div class=\"form-group\">\n                  <label for=\"userPassword\">Password</label>\n                  <input type=\"password\"\n                         class=\"form-control\"\n                         ng-model=\"$ctrl.user.password\"\n                         id=\"userPassword\"\n                         placeholder=\"Password\">\n               </div>\n               <button type=\"button\"\n                       ui-sref=\"login.register\"\n                       class=\"btn btn-default\">\n                  Need account?\n               </button>\n               <button type=\"submit\"\n                       ng-click=\"$ctrl.login()\"\n                       class=\"btn btn-default\">Login</button>\n            </form>\n         </ui-view>\n      </div>\n      <div class=\"col-md-3\"></div>\n   </div>\n   <p ng-if=\"$ctrl.message\">Message: <strong>{{ $ctrl.message }}</strong></p>\n   <p ng-if=\"$ctrl.error\">Error: <strong>{{ $ctrl.error }}</strong></p>\n</section>\n";

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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BhRFURRFWVaEbEBRFEVRlGVFyAYURVEURVlWhGxAURRFUZRlRcgGFEVRFEVZVoRsQFEURVGUZUXIBhRFURRFWVaEbEBRFEVRlGVFyAYURVEURVlWhGxAURRFUZRlRcgGFEVRFEVZVoRsQFEURVGUZUXIBhRFURRFWVaEbEBRFEVRlGVFyAYURVEURVlWhGxAURRFUZRlRcgGFEVRFEVZVoRsQFEURVGUZUXIBhRFURRFWVaEbEBRFEVRlGVFyAYURVEURVlWhGxAURRFUZRlRcgGFEVRFEVZVoRsQFEURVGUZUXIBhRFURRFWVb+EwpLwFc5xlQ1AAAAAElFTkSuQmCCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA="

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(209);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(211)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./login.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./login.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(210)();
	// imports


	// module
	exports.push([module.id, ".login {\n  color: #f00;\n}\n", ""]);

	// exports


/***/ },
/* 210 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 212 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginController = (function () {
	   function LoginController(LoginService) {
	      _classCallCheck(this, LoginController);

	      this.LoginService = LoginService;
	      this.name = 'login';
	   }

	   _createClass(LoginController, [{
	      key: 'login',
	      value: function login() {
	         var _this = this;

	         this.authData = null;
	         this.error = null;

	         this.LoginService.$authWithPassword({
	            email: this.user.email,
	            password: this.user.password
	         }).then(function (authData) {
	            console.log('authData');
	            console.log(authData);
	            _this.authData = authData;
	         }).catch(function (error) {
	            this.error = error;
	         });
	      }
	   }]);

	   return LoginController;
	})();

	LoginController.$inject = ['LoginService'];

	exports.default = LoginController;

/***/ },
/* 213 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginService = function LoginService($q, $firebaseAuth, FIRE_URL) {
	   _classCallCheck(this, LoginService);

	   var ref = new Firebase(FIRE_URL);

	   return $firebaseAuth(ref);
	};

	LoginService.$inject = ['$q', '$firebaseAuth', 'FIRE_URL'];

	exports.default = LoginService;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _register = __webpack_require__(215);

	var _register2 = _interopRequireDefault(_register);

	var _register3 = __webpack_require__(216);

	var _register4 = _interopRequireDefault(_register3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var registerComponent = {
	   template: _register2.default,
	   controller: _register4.default,
	   bindings: {}
	};

	exports.default = registerComponent;

/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = "<form name=\"registerForm\">\n   <!--<pre>{{registerForm | json }}</pre>-->\n   <div class=\"form-group\">\n      <label for=\"userEmail\">Email address</label>\n      <input type=\"email\"\n             class=\"form-control\"\n             ng-model=\"$ctrl.user.email\"\n             name=\"userEmail\"\n             id=\"userEmail\"\n             placeholder=\"Email\">\n   </div>\n   <span class=\"text-warning\"\n         ng-if=\"registerForm.userEmail.$error.email\">\n      Escribe un correo válido\n   </span>\n   <div class=\"form-group\">\n      <label for=\"userPassword\">Password</label>\n      <input type=\"password\"\n             class=\"form-control\"\n             ng-model=\"$ctrl.user.password\"\n             name=\"userPassword\"\n             ng-minlength=\"7\"\n             id=\"userPassword\"\n             placeholder=\"Password\">\n   </div>\n   <span class=\"text-warning\"\n         ng-if=\"registerForm.userPassword.$error.minlength\">\n       7 carácteres mínimo\n   </span>\n   <div class=\"form-group\">\n      <label for=\"userRetypePassword\">Retype Password</label>\n      <input type=\"password\"\n             class=\"form-control\"\n             ng-model=\"$ctrl.user.newPassword\"\n             name=\"userNewPassword\"\n             ng-minlength=\"7\"\n             password-match=\"$ctrl.user.password\"\n             id=\"userRetypePassword\"\n             placeholder=\"Password\">\n   </div>\n   <span class=\"text-warning\"\n         ng-if=\"registerForm.userNewPassword.$error.minlength\">\n       7 carácteres mínimo\n   </span>\n   <span class=\"text-warning\"\n         ng-if=\"registerForm.userNewPassword.$error.unique\">\n       Contraseñas no coinciden\n   </span>\n   <button type=\"button\"\n           ng-disabled=\"registerForm.$invalid\"\n           ng-click=\"$ctrl.createUser()\"\n           class=\"btn btn-default\">\n      Register\n   </button>\n</form>";

/***/ },
/* 216 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginRegisterController = (function () {
	   function LoginRegisterController(LoginService) {
	      _classCallCheck(this, LoginRegisterController);

	      this.LoginService = LoginService;
	      this.name = 'login';
	   }

	   _createClass(LoginRegisterController, [{
	      key: 'createUser',
	      value: function createUser() {
	         var _this = this;

	         this.message = null;
	         this.error = null;

	         this.LoginService.$createUser({
	            email: this.user.email,
	            password: this.user.password
	         }).then(function (userData) {
	            _this.message = "User created with uid: " + userData.uid;
	         }).catch(function (error) {
	            _this.error = error;
	         });
	      }
	   }]);

	   return LoginRegisterController;
	})();

	LoginRegisterController.$inject = ['LoginService'];

	exports.default = LoginRegisterController;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	var _students = __webpack_require__(218);

	var _students2 = _interopRequireDefault(_students);

	var _students3 = __webpack_require__(219);

	var _students4 = _interopRequireDefault(_students3);

	var _students5 = __webpack_require__(220);

	var _students6 = _interopRequireDefault(_students5);

	var _students7 = __webpack_require__(224);

	var _students8 = _interopRequireDefault(_students7);

	var _students9 = __webpack_require__(225);

	var _students10 = _interopRequireDefault(_students9);

	var _studentsForm = __webpack_require__(226);

	var _studentsForm2 = _interopRequireDefault(_studentsForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var studentsModule = _angular2.default.module('students', []).config(_students2.default).value('studentsSetup', _students4.default).component('students', _students6.default).directive('studentsForm', function () {
	   return new _studentsForm2.default();
	}).controller('StudentsController', _students8.default).service('StudentsService', _students10.default);

	exports.default = studentsModule;

/***/ },
/* 218 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	studentsRoutes.$inject = ['$stateProvider'];

	function studentsRoutes($stateProvider) {

	   $stateProvider.state('students', {
	      url: '/students',
	      template: '<students></students>'
	   }).state('students.create', {
	      url: '/create',
	      template: '<students-form ctrl="StudentsController"></students-form>'
	   }).state('students.update', {
	      url: '/update/:id',
	      template: '<students-form ctrl="StudentsController"></students-form>'
	   });
	}

	exports.default = studentsRoutes;

/***/ },
/* 219 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	exports.default = {
	   documentTypes: ['TI', 'CC', 'PAS'],
	   occupations: ['dependiente', 'independiente', 'estudiante'],
	   plans: ['cuarzo', 'rubí', 'záfiro', 'esmeralda', 'turqueza', 'diamante'],
	   dateOptions: {
	      formatYear: 'yy',
	      maxDate: new Date(2020, 5, 22),
	      minDate: new Date(),
	      startingDay: 1
	   },
	   altInputFormats: ['M!/d!/yyyy'],
	   formats: ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'],
	   format: function format(n) {
	      return this.formats[n];
	   },
	   popup: {
	      opened: false
	   },
	   inlineOptions: {
	      //customClass: getDayClass,
	      minDate: new Date(),
	      showWeeks: true
	   },
	   isUpdate: false
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _students = __webpack_require__(221);

	var _students2 = _interopRequireDefault(_students);

	__webpack_require__(222);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var studentsComponent = {
	  template: _students2.default,
	  controller: 'StudentsController',
	  bindings: {}
	};

	exports.default = studentsComponent;

/***/ },
/* 221 */
/***/ function(module, exports) {

	module.exports = "<ui-view>\n\n   <button type=\"button\" ui-sref=\"students.create\">\n      crear\n   </button>\n\n   <table class=\"table table-hover\">\n      <thead>\n      <tr>\n         <th>First Name</th>\n         <th>Last Name</th>\n         <th>Email</th>\n         <th>Celular</th>\n         <th>Profession</th>\n         <th>Plan</th>\n         <th>&nbsp;</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr ng-repeat=\"student in $ctrl.students track by $index\"\n          ng-dblclick=\"$ctrl.studentProfile(student)\">\n         <th ng-bind=\"student.name\"></th>\n         <td ng-bind=\"student.lastName\"></td>\n         <td ng-bind=\"student.email\"></td>\n         <td ng-bind=\"student.mobile\"></td>\n         <td ng-bind=\"student.profession\"></td>\n         <td ng-bind=\"student.plan\"></td>\n         <td ng-click=\"$ctrl.deleteStudent(student)\">\n             <span class=\"glyphicon glyphicon-remove\"\n                   tooltip-placement=\"top\"\n                   uib-tooltip=\"Eliminar\">\n             </span>\n         </td>\n      </tr>\n      </tbody>\n   </table>\n\n</ui-view>";

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(223);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(211)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./students.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./students.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(210)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 224 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StudentsController = (function () {
	   function StudentsController(StudentsService, $stateParams, $state, studentsSetup) {
	      var _this = this;

	      _classCallCheck(this, StudentsController);

	      this.StudentsService = StudentsService;
	      this.$state = $state;
	      this.setup = studentsSetup;
	      this.format = studentsSetup.format(0);
	      this.buttonText = 'Guardar';

	      StudentsService.getStudents().then(function (response) {
	         _this.students = response;
	      });

	      if ($stateParams.id) {
	         this.getStudent($stateParams.id);
	         this.isUpdate = true;
	         this.buttonText = 'Actualizar';
	      }

	      this.student = {};

	      this.student.documentType = studentsSetup.documentTypes[0];
	      this.student.occupation = studentsSetup.occupations[0];
	      this.student.plan = studentsSetup.plans[0];
	   }

	   _createClass(StudentsController, [{
	      key: 'successHandler',
	      value: function successHandler(students) {}
	   }, {
	      key: 'catchHandler',
	      value: function catchHandler(error) {
	         console.log('error');
	         console.log(error);
	      }
	   }, {
	      key: 'openCalendar',
	      value: function openCalendar() {
	         this.setup.popup.opened = true;
	      }
	   }, {
	      key: 'studentProfile',
	      value: function studentProfile(student) {
	         this.$state.go('students.update', { id: student.$id });
	      }
	   }, {
	      key: 'getStudent',
	      value: function getStudent(id) {
	         var _this2 = this;

	         this.StudentsService.getStudent(id).then(function (response) {
	            _this2.student = response;
	         });
	      }
	   }, {
	      key: 'save',
	      value: function save() {
	         if (this.isUpdate) {

	            this.students.$save(this.student).then(function (ref) {});
	         } else {
	            this.students.$add(this.student).then(this.successHandler);
	         }
	      }
	   }, {
	      key: 'deleteStudent',
	      value: function deleteStudent(student) {

	         this.students.$remove(student).then(function (ref) {
	            console.log('deteleStudent response');
	            console.log(ref);
	         });
	      }
	   }]);

	   return StudentsController;
	})();

	StudentsController.$inject = ['StudentsService', '$stateParams', '$state', 'studentsSetup'];

	exports.default = StudentsController;

/***/ },
/* 225 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var JentooService = (function () {
	   function JentooService($q, $firebaseArray) {
	      _classCallCheck(this, JentooService);

	      this.$q = $q;
	      this.ref = new Firebase('https://olgah.firebaseio.com/users/');
	      this.olgah = $firebaseArray(this.ref);
	      this.olgah.$loaded().then(this.successHandler).catch(this.catchHandler);
	   }

	   _createClass(JentooService, [{
	      key: 'getStudents',
	      value: function getStudents() {
	         var _this = this;

	         return this.$q(function (resolve, reject) {
	            resolve(_this.olgah);
	         });
	      }
	   }, {
	      key: 'getStudent',
	      value: function getStudent(id) {
	         var _this2 = this;

	         var student = {};

	         return this.$q(function (resolve, reject) {
	            student = _this2.olgah.$getRecord(id);
	            resolve(student);
	         });
	      }
	   }, {
	      key: 'successHandler',
	      value: function successHandler(students) {}
	   }, {
	      key: 'catchHandler',
	      value: function catchHandler(error) {
	         console.log('error');
	         console.log(error);
	      }
	   }]);

	   return JentooService;
	})();

	JentooService.$inject = ['$q', '$firebaseArray'];

	exports.default = JentooService;

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _studentsForm = __webpack_require__(227);

	var _studentsForm2 = _interopRequireDefault(_studentsForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StudentsForm = function StudentsForm() {
	   _classCallCheck(this, StudentsForm);

	   this.scope = {};
	   this.template = _studentsForm2.default;
	   this.transclude = true;
	   this.name = 'ctrl';
	   this.controller = '@';
	   this.controllerAs = '$ctrl';
	   this.bindToController = {};
	};

	exports.default = StudentsForm;

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section>\n\n   <div class=\"page-header\">\n      <img src=\"" + __webpack_require__(228) + "\" alt=\"\">\n   </div>\n\n   <form name=\"poleForm\">\n\n      <div class=\"row\">\n         <div class=\"col-md-3\">\n            <label class=\"\" for=\"name\">Nombre</label>\n            <input id=\"name\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   name=\"name\"\n                   ng-model=\"$ctrl.student.name\"\n                   placeholder=\"\">\n         </div>\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"lastName\">Apellidos</label>\n            <input id=\"lastName\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   name=\"lastName\"\n                   ng-model=\"$ctrl.student.lastName\"\n                   placeholder=\"\">\n         </div>\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"inscriptionDate\">Fecha de Matrícula</label>\n            <p class=\"input-group\">\n               <input id=\"inscriptionDate\"\n                      type=\"text\"\n                      name=\"inscriptionDate\"\n                      class=\"form-control\"\n                      uib-datepicker-popup=\"{{$ctrl.format}}\"\n                      ng-model=\"$ctrl.setup.inscriptionDate\"\n                      is-open=\"$ctrl.setup.popup.opened\"\n                      datepicker-options=\"$ctrl.setup.dateOptions\"\n                      clear-text=\"Limpiar\"\n                      today-text=\"Hoy\"\n                      close-text=\"Cerrar\"\n                      alt-input-formats=\"$ctrl.setup.altInputFormats\" />\n            <span class=\"input-group-btn\">\n               <button type=\"button\"\n                       class=\"btn btn-default\"\n                       ng-click=\"$ctrl.openCalendar()\">\n                  <i class=\"glyphicon glyphicon-calendar\"></i>\n               </button>\n            </span>\n            </p>\n         </div>\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"documentType\">Tipo de Documento</label>\n            <select id=\"documentType\"\n                    name=\"documentType\"\n                    ng-model=\"$ctrl.student.documentType\"\n                    class=\"form-control\"\n                    ng-options=\"doc for doc in $ctrl.setup.documentTypes\">\n            </select>\n         </div>\n      </div>\n      <div class=\"row\">\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"email\">Email</label>\n            <input id=\"email\"\n                   type=\"email\"\n                   class=\"form-control\"\n                   name=\"email\"\n                   ng-model=\"$ctrl.student.email\"\n                   placeholder=\"\">\n         </div>\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"phone\">Teléfono</label>\n            <input id=\"phone\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   name=\"phone\"\n                   ng-model=\"$ctrl.student.phone\"\n                   placeholder=\"\">\n         </div>\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"mobile\">Celular</label>\n            <input id=\"mobile\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   name=\"mobile\"\n                   ng-model=\"$ctrl.student.mobile\"\n                   placeholder=\"\">\n         </div>\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"address\">Dirección</label>\n            <input id=\"address\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   name=\"address\"\n                   ng-model=\"$ctrl.student.address\"\n                   placeholder=\"\">\n         </div>\n      </div>\n      <div class=\"row\">\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"height\">Estatura</label>\n            <input id=\"height\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   name=\"height\"\n                   ng-model=\"$ctrl.student.height\"\n                   placeholder=\"\">\n         </div>\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"weight\">Peso</label>\n            <input id=\"weight\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   name=\"weight\"\n                   ng-model=\"$ctrl.student.weight\"\n                   placeholder=\"\">\n         </div>\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"healthInsurance\">EPS</label>\n            <input id=\"healthInsurance\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   name=\"healthInsurance\"\n                   ng-model=\"$ctrl.student.healthInsurance\"\n                   placeholder=\"\">\n         </div>\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"Profession\">Profesión</label>\n            <input id=\"Profession\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   name=\"Profession\"\n                   ng-model=\"$ctrl.student.profession\"\n                   placeholder=\"\">\n         </div>\n      </div>\n      <div class=\"row\">\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"children\">Hijos</label>\n            <label class=\"\">\n               <input type=\"checkbox\"\n                      id=\"children\"\n                      name=\"children\"\n                      ng-model=\"$ctrl.student.children\">\n            </label>\n         </div>\n\n      </div>\n      <hr>\n      <div class=\"row\">\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"ocupation\">Ocupación</label>\n            <select id=\"ocupation\"\n                    name=\"ocupation\"\n                    ng-model=\"$ctrl.student.occupation\"\n                    class=\"form-control\"\n                    ng-options=\"doc for doc in $ctrl.setup.occupations\">\n            </select>\n         </div>\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"companyName\">Empresa donde trabaja</label>\n            <input id=\"companyName\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   name=\"companyName\"\n                   ng-model=\"$ctrl.student.companyName\"\n                   placeholder=\"\">\n\n         </div>\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"companyPhone\">Teléfono Empresa</label>\n            <input id=\"companyPhone\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   name=\"companyPhone\"\n                   ng-model=\"$ctrl.student.companyPhone\"\n                   placeholder=\"\">\n\n         </div>\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"charge\">Cargo</label>\n            <input id=\"charge\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   name=\"charge\"\n                   ng-model=\"$ctrl.student.charge\"\n                   placeholder=\"\">\n\n         </div>\n      </div>\n      <div class=\"row\">\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"howYouMeetPoleCenter\">¿Como conoció Pole Center?</label>\n            <input id=\"howYouMeetPoleCenter\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   name=\"howYouMeetPoleCenter\"\n                   ng-model=\"$ctrl.student.howYouMeetPoleCenter\"\n                   placeholder=\"\">\n         </div>\n         <div class=\"col-md-3\">\n            <label class=\"\"\n                   for=\"plan\">Plan</label>\n            <select id=\"plan\"\n                    name=\"plan\"\n                    ng-model=\"$ctrl.student.plan\"\n                    class=\"form-control\"\n                    ng-options=\"plan for plan in $ctrl.setup.plans\">\n            </select>\n         </div>\n         <div class=\"col-md-6\">\n            <div>\n               <label class=\"\"\n                      for=\"inCaseOfEmergencyName\">\n                  En caso de emergencia comunicarse con\n               </label>\n            </div>\n            <div class=\"col-md-6\">\n               <input id=\"inCaseOfEmergencyName\"\n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"inCaseOfEmergency\"\n                      ng-model=\"$ctrl.student.inCaseOfEmergency.name\"\n                      placeholder=\"Nombre\">\n            </div>\n            <div class=\"col-md-6\">\n               <input id=\"inCaseOfEmergencyPhone\"\n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"inCaseOfEmergency\"\n                      ng-model=\"$ctrl.student.inCaseOfEmergency.phone\"\n                      placeholder=\"Teléfono\">\n            </div>\n         </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n         <div class=\"col-md-3\">\n            <button class=\"btn btn default\"\n                    ng-click=\"$ctrl.save()\">\n               <span ng-bind=\"$ctrl.buttonText\"></span>\n            </button>\n         </div>\n      </div>\n\n   </form>\n</section>";

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAABRCAYAAACaCs57AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFFRTM4MzYwMkJFODExRTU4QTQwOTU3NjA4OEQ5RENFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFFRTM4MzYxMkJFODExRTU4QTQwOTU3NjA4OEQ5RENFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUVFMzgzNUUyQkU4MTFFNThBNDA5NTc2MDg4RDlEQ0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUVFMzgzNUYyQkU4MTFFNThBNDA5NTc2MDg4RDlEQ0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5NO5zXAABDqElEQVR42uy9B5wc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"

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _app = __webpack_require__(230);

	var _app2 = _interopRequireDefault(_app);

	__webpack_require__(231);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var appComponent = {
	   template: _app2.default
	};

	exports.default = appComponent;

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = "<div class=\"site-wrapper\">\n\n   <nav>\n      <ul class=\"nav masthead-nav\">\n         <!--<li class=\"active\"><a href=\"#\">Home</a></li>-->\n         <li><a ui-sref=\"students\">Students</a></li>\n         <!--<li><a href=\"#\">Contact</a></li>-->\n      </ul>\n   </nav>\n\n   <ui-view></ui-view>\n\n\n   <footer id=\"olgahFooter\">\n      All rights Reserved, Coco Interactivo 2016\n   </footer>\n\n\n</div>";

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(232);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(211)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./app.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./app.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(210)();
	// imports


	// module
	exports.push([module.id, "#olgahFooter {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  width: 286px;\n}\ninput.ng-invalid:focus {\n  border: 1px solid #f00;\n}\ninput.ng-invalid-minlength {\n  color: #f00;\n}\n", ""]);

	// exports


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	var _directives = __webpack_require__(234);

	var _directives2 = _interopRequireDefault(_directives);

	var _loader = __webpack_require__(236);

	var _loader2 = _interopRequireDefault(_loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sharedModule = _angular2.default.module('app.shared', [_directives2.default.name, _loader2.default.name]);

	exports.default = sharedModule;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	var _passwordMatch = __webpack_require__(235);

	var _passwordMatch2 = _interopRequireDefault(_passwordMatch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sharedModule = _angular2.default.module('app.shared.directives', []).directive('passwordMatch', _passwordMatch2.default);

	exports.default = sharedModule;

/***/ },
/* 235 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	function passwordMatch() {
	   'use strict';

	   return {
	      restrict: 'A',
	      scope: true,
	      require: 'ngModel',
	      link: link
	   };

	   function link(scope, elem, attrs, ngModelController) {

	      function checker() {
	         //get the value of the first password
	         var e1 = scope.$eval(attrs.ngModel),

	         //get the value of the other password
	         e2 = scope.$eval(attrs.passwordMatch);
	         console.log('--- passmatch ---');
	         console.log(e1 === e2);
	         return e1 == e2;
	      }

	      scope.$watch(checker, function (n) {
	         console.log('--- match!!! ---');
	         //set the form ngModelController to valid if both
	         //passwords are the same, else invalid
	         ngModelController.$setValidity("unique", n);
	      });
	   }
	}

	exports.default = passwordMatch;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _angular = __webpack_require__(192);

	var _angular2 = _interopRequireDefault(_angular);

	var _loaderConfigProvider = __webpack_require__(237);

	var _loaderConfigProvider2 = _interopRequireDefault(_loaderConfigProvider);

	var _loaderDirective = __webpack_require__(238);

	var _loaderDirective2 = _interopRequireDefault(_loaderDirective);

	var _loaderInterceptorService = __webpack_require__(241);

	var _loaderInterceptorService2 = _interopRequireDefault(_loaderInterceptorService);

	var _loaderDisplayService = __webpack_require__(242);

	var _loaderDisplayService2 = _interopRequireDefault(_loaderDisplayService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loadingModule = _angular2.default.module('app.shared.loading', []).provider('loaderConfig', _loaderConfigProvider2.default).directive('loading', _loaderDirective2.default).service('LoadingDisplay', _loaderDisplayService2.default).service('LoadingInterceptor', _loaderInterceptorService2.default);

	exports.default = loadingModule;

/***/ },
/* 237 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	function loadingConfigProvider() {

	   //default config
	   var config = {
	      delay: 500,
	      exceptUrls: []
	   };

	   //set delay
	   this.setDelay = function (delayTime) {
	      config.delay = delayTime;
	   };

	   //set exception urls
	   this.setExceptionUrls = function (urlList) {
	      config.exceptUrls = urlList;
	   };

	   this.$get = function () {

	      return {
	         getDelayTime: getDelayTime,
	         getExceptUrls: getExceptUrls,
	         getConfig: getConfig
	      };

	      function getDelayTime() {
	         return config.delay;
	      }

	      function getExceptUrls() {
	         return config.exceptUrls;
	      }

	      function getConfig() {
	         return config;
	      }
	   };
	}

	exports.default = loadingConfigProvider;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	__webpack_require__(239);

	Loader.$inject = ['$q', '$timeout', 'LoadingInterceptor', 'loaderConfig', 'LoadingDisplay'];

	function Loader($q, $timeout, LoadingInterceptor, loaderConfig, LoadingDisplay) {

	   return {
	      restrict: 'EA',
	      transclude: true,
	      scope: {
	         delay: '@'
	      },
	      template: '\n         <div id="loader-container" class="loaderContainer">\n            <div id="loader-background" class="loaderBackground"></div>\n            <div id="loader-content" class="loaderContent">\n              <ng-transclude></ng-transclude>\n            </div>\n         </div>',
	      link: link
	   };

	   function link(scope, element, attrs) {

	      var overlayContainer = null,
	          timerPromise = null,
	          timerPromiseHide = null,
	          inSession = false,
	          queue = [],
	          loadingConfig = loaderConfig.getConfig();

	      init();

	      function init() {
	         wireUpHttpInterceptor();
	         overlayContainer = document.querySelector('#loader-container');
	      }

	      //Hook into httpInterceptor factory request/response/responseError functions
	      function wireUpHttpInterceptor() {

	         LoadingInterceptor.request = function (config) {
	            //I want to have a condition to not show the overlay on specific calls
	            if (shouldShowOverlay(config.method, config.url)) {
	               processRequest();
	            }

	            return config || $q.when(config);
	         };

	         LoadingInterceptor.response = function (response) {
	            processResponse();
	            return response || $q.when(response);
	         };

	         LoadingInterceptor.responseError = function (rejection) {
	            processResponse();
	            return $q.reject(rejection);
	         };
	      }

	      function processRequest() {
	         queue.push({});
	         if (queue.length === 1) {
	            timerPromise = $timeout(function () {
	               if (queue.length) showOverlay();
	            }, scope.delay ? scope.delay : loadingConfig.delay); //Delay showing for 500 millis to avoid flicker
	         }
	      }

	      function processResponse() {
	         queue.pop();
	         if (queue.length === 0) {
	            //Since we don't know if another XHR request will be made, pause before
	            //hiding the overlay. If another XHR request comes in then the overlay
	            //will stay visible which prevents a flicker
	            timerPromiseHide = $timeout(function () {
	               //Make sure queue is still 0 since a new XHR request may have come in
	               //while timer was running
	               if (queue.length === 0) {
	                  hideOverlay();
	                  if (timerPromiseHide) $timeout.cancel(timerPromiseHide);
	               }
	            }, scope.wcOverlayDelay ? scope.wcOverlayDelay : loadingConfig.delay);
	         }
	      }

	      function showOverlay() {
	         LoadingDisplay.show(overlayContainer);
	      }

	      function hideOverlay() {
	         if (timerPromise) $timeout.cancel(timerPromise);
	         LoadingDisplay.hide(overlayContainer);
	      }

	      function shouldShowOverlay(method, url) {
	         var searchCriteria = {
	            method: method,
	            url: url
	         };
	         return angular.isUndefined(findUrl(loadingConfig.exceptUrls, searchCriteria));
	      }

	      function findUrl(urlList, searchCriteria) {
	         var retVal = '';
	         angular.forEach(urlList, function (url) {
	            if (angular.equals(url, searchCriteria)) {
	               retVal = true;
	               return false; //break out of forEach
	            }
	         });
	         return retVal;
	      }
	   }
	}

	exports.default = Loader;

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(240);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(211)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./loader.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./loader.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(210)();
	// imports


	// module
	exports.push([module.id, "loaderContainer {\n  display: none;\n}\n.loaderBackground {\n  top: 0;\n  left: 0;\n  padding-left: 100px;\n  position: absolute;\n  z-index: 1000;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.3;\n}\n.loaderContent {\n  position: absolute;\n  border: 1px solid #000;\n  background-color: #fff;\n  font-weight: bold;\n  height: 100px;\n  width: 300px;\n  z-index: 1000;\n  text-align: center;\n}\n", ""]);

	// exports


/***/ },
/* 241 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoadingInterceptorService = function LoadingInterceptorService() {
	    _classCallCheck(this, LoadingInterceptorService);
	};

	LoadingInterceptorService.$inject = [];

	exports.default = LoadingInterceptorService;

/***/ },
/* 242 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoaderDisplayService = (function () {
	   function LoaderDisplayService($window) {
	      _classCallCheck(this, LoaderDisplayService);

	      this.$window = $window;

	      this.getComputedStyle = (function () {
	         var func = null;

	         if (document.defaultView && document.defaultView.getComputedStyle) {
	            func = document.defaultView.getComputedStyle;
	         } else if (typeof document.body.curentStyle !== "undefined") {
	            func = function (element, anything) {
	               return element.currentStyle;
	            };
	         }

	         return function (element, style) {
	            return func(element, null)[style];
	         };
	      })();
	   }

	   _createClass(LoaderDisplayService, [{
	      key: 'hide',
	      value: function hide(overlayContainer) {
	         overlayContainer = overlayContainer || getOverlayContainer();
	         overlayContainer.style.display = 'none';
	      }
	   }, {
	      key: 'show',
	      value: function show(overlayContainer) {

	         overlayContainer = overlayContainer || getOverlayContainer();

	         var w = 0,
	             h = 0;

	         if (!this.$window.innerWidth) {

	            if (document.documentElement.clientWidth !== 0) {
	               w = document.documentElement.clientWidth;
	               h = document.documentElement.clientHeight;
	            } else {
	               w = document.body.clientWidth;
	               h = document.body.clientHeight;
	            }
	         } else {
	            w = this.$window.innerWidth;
	            h = this.$window.innerHeight;
	         }

	         var content = document.getElementById('loader-content'),
	             contentWidth = parseInt(this.getComputedStyle(content, 'width').replace('px', '')),
	             contentHeight = parseInt(this.getComputedStyle(content, 'height').replace('px', ''));

	         content.style.top = h / 2 - contentHeight / 2 + 'px';
	         content.style.left = w / 2 - contentWidth / 2 + 'px';

	         overlayContainer.style.display = 'block';
	      }
	   }]);

	   return LoaderDisplayService;
	})();

	LoaderDisplayService.$inject = ['$window'];

	exports.default = LoaderDisplayService;

/***/ }
/******/ ]);