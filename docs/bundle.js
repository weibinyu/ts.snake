/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.less */ "./src/style/index.less");
/* harmony import */ var _modules_GameControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/GameControl */ "./src/modules/GameControl.ts");


var gc = new _modules_GameControl__WEBPACK_IMPORTED_MODULE_1__.default();

/***/ }),

/***/ "./src/modules/Food.ts":
/*!*****************************!*\
  !*** ./src/modules/Food.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Food; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Food = /*#__PURE__*/function () {
  function Food() {
    _classCallCheck(this, Food);

    this.stageHeight = 290;
    this.stageWidth = 290;
    this.element = document.getElementById("food");
  }

  _createClass(Food, [{
    key: "randomlyChangePosition",
    value: function randomlyChangePosition() {
      var x = Math.round(Math.random() * this.stageWidth / 10) * 10;
      var y = Math.round(Math.random() * this.stageHeight / 10) * 10;
      this.element.style.left = x + 'px';
      this.element.style.top = y + 'px';
    }
  }, {
    key: "X",
    get: function get() {
      return this.element.offsetLeft;
    }
  }, {
    key: "Y",
    get: function get() {
      return this.element.offsetTop;
    }
  }]);

  return Food;
}();



/***/ }),

/***/ "./src/modules/GameControl.ts":
/*!************************************!*\
  !*** ./src/modules/GameControl.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GameControl; }
/* harmony export */ });
/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ "./src/modules/Snake.ts");
/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Food */ "./src/modules/Food.ts");
/* harmony import */ var _ScorePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScorePanel */ "./src/modules/ScorePanel.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var GameControl = /*#__PURE__*/function () {
  function GameControl() {
    _classCallCheck(this, GameControl);

    this.direction = "";
    this.isLive = true;
    this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_0__.default();
    this.food = new _Food__WEBPACK_IMPORTED_MODULE_1__.default();
    this.scorePanel = new _ScorePanel__WEBPACK_IMPORTED_MODULE_2__.default(10, 5);
    this.initGame();
  }

  _createClass(GameControl, [{
    key: "initGame",
    value: function initGame() {
      document.addEventListener('keydown', this.keyDownHandler.bind(this));
      this.snakeMovement();
    }
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(event) {
      this.direction = event.key;
    }
  }, {
    key: "snakeMovement",
    value: function snakeMovement() {
      var X = this.snake.X;
      var Y = this.snake.Y;

      switch (this.direction) {
        case "ArrowUp":
        case "Up":
          Y -= 10;
          break;

        case "ArrowDown":
        case "Down":
          Y += 10;
          break;

        case "ArrowLeft":
        case "Left":
          X -= 10;
          break;

        case "ArrowRight":
        case "Right":
          X += 10;
          break;
      }

      this.checkEat(X, Y);

      try {
        this.snake.X = X;
        this.snake.Y = Y;
      } catch (e) {
        alert(e.message);
        this.isLive = false;
      }

      this.isLive && setTimeout(this.snakeMovement.bind(this), 200 - (this.scorePanel.level - 1) * 30);
    }
  }, {
    key: "checkEat",
    value: function checkEat(X, Y) {
      if (X === this.food.X && Y === this.food.Y) {
        this.food.randomlyChangePosition();
        this.scorePanel.increaseScore();
        this.snake.grow();
      }
    }
  }]);

  return GameControl;
}();



/***/ }),

/***/ "./src/modules/ScorePanel.ts":
/*!***********************************!*\
  !*** ./src/modules/ScorePanel.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ScorePanel; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScorePanel = /*#__PURE__*/function () {
  function ScorePanel() {
    var maxLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var scoreForLevelUp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    _classCallCheck(this, ScorePanel);

    this.score = 0;
    this.level = 1;
    this.scoreElement = document.getElementById("score");
    this.levelElement = document.getElementById("level");
    this.maxLevel = maxLevel;
    this.scoreForLevelUp = scoreForLevelUp;
  }

  _createClass(ScorePanel, [{
    key: "increaseScore",
    value: function increaseScore() {
      this.scoreElement.innerHTML = ++this.score + '';

      if (this.score % this.scoreForLevelUp === 0) {
        this.increaseLevel();
      }
    }
  }, {
    key: "increaseLevel",
    value: function increaseLevel() {
      if (this.level <= this.maxLevel) {
        this.levelElement.innerHTML = ++this.level + '';
      }
    }
  }]);

  return ScorePanel;
}();



/***/ }),

/***/ "./src/modules/Snake.ts":
/*!******************************!*\
  !*** ./src/modules/Snake.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Snake; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Snake = /*#__PURE__*/function () {
  function Snake() {
    _classCallCheck(this, Snake);

    this.snake = document.getElementById("snake");
    this.snakeHead = document.querySelector('#snake > div');
    this.snakeBody = this.snake.getElementsByTagName("div");
  }

  _createClass(Snake, [{
    key: "grow",
    value: function grow() {
      var tempDiv = document.createElement('div');
      this.snake.insertAdjacentElement("beforeend", tempDiv);
    }
  }, {
    key: "moveBody",
    value: function moveBody() {
      for (var i = this.snakeBody.length - 1; i > 0; i--) {
        var X = this.snakeBody[i - 1].offsetLeft;
        var Y = this.snakeBody[i - 1].offsetTop;
        this.snakeBody[i].style.left = X + 'px';
        this.snakeBody[i].style.top = Y + 'px';
      }
    }
  }, {
    key: "checkCollision",
    value: function checkCollision() {
      for (var i = 1; i < this.snakeBody.length; i++) {
        if (this.Y === this.snakeBody[i].offsetTop && this.X === this.snakeBody[i].offsetLeft) {
          throw new Error("Snake hit it's body");
        }
      }
    }
  }, {
    key: "X",
    get: function get() {
      return this.snakeHead.offsetLeft;
    },
    set: function set(val) {
      if (this.X === val) return;

      if (val < 0 && val > 290) {
        throw new Error("Snake hit the wall");
      }

      if (this.snakeBody[1] && this.snakeBody[1].offsetLeft === val) {
        if (val > this.X) {
          val = this.X - 10;
        } else {
          val = this.X + 10;
        }
      }

      this.moveBody();
      this.snakeHead.style.left = val + 'px';
      this.checkCollision();
    }
  }, {
    key: "Y",
    get: function get() {
      return this.snakeHead.offsetTop;
    },
    set: function set(val) {
      if (this.Y === val) return;

      if (val < 0 && val > 290) {
        throw new Error("Snake hit the wall");
      }

      if (this.snakeBody[1] && this.snakeBody[1].offsetTop === val) {
        if (val > this.Y) {
          val = this.Y - 10;
        } else {
          val = this.Y + 10;
        }
      }

      this.moveBody();
      this.snakeHead.style.top = val + 'px';
      this.checkCollision();
    }
  }]);

  return Snake;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style/index.less":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style/index.less ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody {\n  font: bold 20px \"Courier\";\n}\n#main {\n  width: 360px;\n  height: 420px;\n  background-color: #b7d4a8;\n  margin: 100px auto;\n  border: 10px solid black;\n  border-radius: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n#main #stage {\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n  position: relative;\n}\n#main #stage #snake > div {\n  width: 10px;\n  height: 10px;\n  background-color: black;\n  border: 1px solid #b7d4a8;\n  position: absolute;\n}\n#main #stage #food {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n  left: 40px;\n  top: 40px;\n}\n#main #stage #food > div {\n  width: 4px;\n  height: 4px;\n  background-color: black;\n}\n#main #score-panel {\n  width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n", "",{"version":3,"sources":["webpack://./src/style/index.less"],"names":[],"mappings":"AAEA;EACE,SAAA;EACA,UAAA;EACA,8BAAA;UAAA,sBAAA;AADF;AAIA;EACE,yBAAA;AAFF;AAKA;EACE,YAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;EACA,wBAAA;EACA,mBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,yBAAA;MAAA,6BAAA;AAHF;AAPA;EAaI,YAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;AAHJ;AAMM;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,yBAAA;EACA,kBAAA;AAJR;AApBA;EA4BM,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,8BAAA;EAAA,6BAAA;MAAA,uBAAA;UAAA,mBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;EACA,2BAAA;MAAA,4BAAA;EACA,UAAA;EACA,SAAA;AALN;AAMM;EACE,UAAA;EACA,WAAA;EACA,uBAAA;AAJR;AApCA;EA8CI,YAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;AAPJ","sourcesContent":["@bg-color:#b7d4a8;\n\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody{\n  font: bold 20px \"Courier\";\n}\n\n#main{\n  width: 360px;\n  height: 420px;\n  background-color:@bg-color;\n  margin: 100px auto;\n  border: 10px solid black;\n  border-radius: 40px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-around;\n\n  #stage{\n    width: 304px;\n    height: 304px;\n    border: 2px solid black;\n    position: relative;\n\n    #snake{\n      &>div{\n        width: 10px;\n        height: 10px;\n        background-color: black;\n        border: 1px solid @bg-color;\n        position: absolute;\n      }\n    }\n    #food{\n      width: 10px;\n      height: 10px;\n      position: absolute;\n      display: flex;\n      flex-flow: row wrap;\n      justify-content: space-between;\n      align-content: space-between;\n      left: 40px;\n      top: 40px;\n      &>div{\n        width: 4px;\n        height: 4px;\n        background-color: black;\n      }\n    }\n  }\n\n  #score-panel{\n    width: 300px;\n    display: flex;\n    justify-content: space-between;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ (function(module) {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy5zbmFrZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90cy5zbmFrZS8uL3NyYy9tb2R1bGVzL0Zvb2QudHMiLCJ3ZWJwYWNrOi8vdHMuc25ha2UvLi9zcmMvbW9kdWxlcy9HYW1lQ29udHJvbC50cyIsIndlYnBhY2s6Ly90cy5zbmFrZS8uL3NyYy9tb2R1bGVzL1Njb3JlUGFuZWwudHMiLCJ3ZWJwYWNrOi8vdHMuc25ha2UvLi9zcmMvbW9kdWxlcy9TbmFrZS50cyIsIndlYnBhY2s6Ly90cy5zbmFrZS8uL3NyYy9zdHlsZS9pbmRleC5sZXNzIiwid2VicGFjazovL3RzLnNuYWtlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90cy5zbmFrZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RzLnNuYWtlLy4vc3JjL3N0eWxlL2luZGV4Lmxlc3M/MGNlNyIsIndlYnBhY2s6Ly90cy5zbmFrZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90cy5zbmFrZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy5zbmFrZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90cy5zbmFrZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMuc25ha2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy5zbmFrZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLnNuYWtlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJnYyIsIkdhbWVDb250cm9sIiwiRm9vZCIsInN0YWdlSGVpZ2h0Iiwic3RhZ2VXaWR0aCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwieCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInkiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwiZGlyZWN0aW9uIiwiaXNMaXZlIiwic25ha2UiLCJTbmFrZSIsImZvb2QiLCJzY29yZVBhbmVsIiwiU2NvcmVQYW5lbCIsImluaXRHYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleURvd25IYW5kbGVyIiwiYmluZCIsInNuYWtlTW92ZW1lbnQiLCJldmVudCIsImtleSIsIlgiLCJZIiwiY2hlY2tFYXQiLCJlIiwiYWxlcnQiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsImxldmVsIiwicmFuZG9tbHlDaGFuZ2VQb3NpdGlvbiIsImluY3JlYXNlU2NvcmUiLCJncm93IiwibWF4TGV2ZWwiLCJzY29yZUZvckxldmVsVXAiLCJzY29yZSIsInNjb3JlRWxlbWVudCIsImxldmVsRWxlbWVudCIsImlubmVySFRNTCIsImluY3JlYXNlTGV2ZWwiLCJzbmFrZUhlYWQiLCJxdWVyeVNlbGVjdG9yIiwic25ha2VCb2R5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0ZW1wRGl2IiwiY3JlYXRlRWxlbWVudCIsImluc2VydEFkamFjZW50RWxlbWVudCIsImkiLCJsZW5ndGgiLCJFcnJvciIsInZhbCIsIm1vdmVCb2R5IiwiY2hlY2tDb2xsaXNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHLElBQUlDLHlEQUFKLEVBQVgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGcUJDLEk7QUFDakIsa0JBQWM7QUFBQTs7QUFDVixTQUFLQyxXQUFMLEdBQW1CLEdBQW5CO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixHQUFsQjtBQUNBLFNBQUtDLE9B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O0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztVQzVRQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0EsY0FBYywwQkFBMEIsRUFBRTtXQUMxQyxjQUFjLGVBQWU7V0FDN0IsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlL2luZGV4Lmxlc3MnO1xyXG5pbXBvcnQgR2FtZUNvbnRyb2wgZnJvbSBcIi4vbW9kdWxlcy9HYW1lQ29udHJvbFwiO1xyXG5jb25zdCBnYyA9IG5ldyBHYW1lQ29udHJvbCgpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhZ2VIZWlnaHQgPSAyOTA7XHJcbiAgICAgICAgdGhpcy5zdGFnZVdpZHRoID0gMjkwO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vZFwiKTtcclxuICAgIH1cclxuICAgIGdldCBYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQub2Zmc2V0TGVmdDtcclxuICAgIH1cclxuICAgIGdldCBZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgfVxyXG4gICAgcmFuZG9tbHlDaGFuZ2VQb3NpdGlvbigpIHtcclxuICAgICAgICBsZXQgeCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiB0aGlzLnN0YWdlV2lkdGgpIC8gMTApICogMTA7XHJcbiAgICAgICAgbGV0IHkgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogdGhpcy5zdGFnZUhlaWdodCkgLyAxMCkgKiAxMDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IHggKyAncHgnO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB5ICsgJ3B4JztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgU25ha2UgZnJvbSBcIi4vU25ha2VcIjtcclxuaW1wb3J0IEZvb2QgZnJvbSBcIi4vRm9vZFwiO1xyXG5pbXBvcnQgU2NvcmVQYW5lbCBmcm9tIFwiLi9TY29yZVBhbmVsXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb250cm9sIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJcIjtcclxuICAgICAgICB0aGlzLmlzTGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSgpO1xyXG4gICAgICAgIHRoaXMuZm9vZCA9IG5ldyBGb29kKCk7XHJcbiAgICAgICAgdGhpcy5zY29yZVBhbmVsID0gbmV3IFNjb3JlUGFuZWwoMTAsIDUpO1xyXG4gICAgICAgIHRoaXMuaW5pdEdhbWUoKTtcclxuICAgIH1cclxuICAgIGluaXRHYW1lKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuc25ha2VNb3ZlbWVudCgpO1xyXG4gICAgfVxyXG4gICAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGV2ZW50LmtleTtcclxuICAgIH1cclxuICAgIHNuYWtlTW92ZW1lbnQoKSB7XHJcbiAgICAgICAgbGV0IFggPSB0aGlzLnNuYWtlLlg7XHJcbiAgICAgICAgbGV0IFkgPSB0aGlzLnNuYWtlLlk7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiVXBcIjpcclxuICAgICAgICAgICAgICAgIFkgLT0gMTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiRG93blwiOlxyXG4gICAgICAgICAgICAgICAgWSArPSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJMZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICBYIC09IDEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJSaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgWCArPSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrRWF0KFgsIFkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2UuWCA9IFg7XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2UuWSA9IFk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMaXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNMaXZlICYmIHNldFRpbWVvdXQodGhpcy5zbmFrZU1vdmVtZW50LmJpbmQodGhpcyksIDIwMCAtICgodGhpcy5zY29yZVBhbmVsLmxldmVsIC0gMSkgKiAzMCkpO1xyXG4gICAgfVxyXG4gICAgY2hlY2tFYXQoWCwgWSkge1xyXG4gICAgICAgIGlmIChYID09PSB0aGlzLmZvb2QuWCAmJiBZID09PSB0aGlzLmZvb2QuWSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvb2QucmFuZG9tbHlDaGFuZ2VQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlUGFuZWwuaW5jcmVhc2VTY29yZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlLmdyb3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVQYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYXhMZXZlbCA9IDEwLCBzY29yZUZvckxldmVsVXAgPSAxMCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxO1xyXG4gICAgICAgIHRoaXMuc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKTtcclxuICAgICAgICB0aGlzLmxldmVsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWxcIik7XHJcbiAgICAgICAgdGhpcy5tYXhMZXZlbCA9IG1heExldmVsO1xyXG4gICAgICAgIHRoaXMuc2NvcmVGb3JMZXZlbFVwID0gc2NvcmVGb3JMZXZlbFVwO1xyXG4gICAgfVxyXG4gICAgaW5jcmVhc2VTY29yZSgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlRWxlbWVudC5pbm5lckhUTUwgPSArK3RoaXMuc2NvcmUgKyAnJztcclxuICAgICAgICBpZiAodGhpcy5zY29yZSAlIHRoaXMuc2NvcmVGb3JMZXZlbFVwID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VMZXZlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGluY3JlYXNlTGV2ZWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwgPD0gdGhpcy5tYXhMZXZlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsRWxlbWVudC5pbm5lckhUTUwgPSArK3RoaXMubGV2ZWwgKyAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25ha2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zbmFrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic25ha2VcIik7XHJcbiAgICAgICAgdGhpcy5zbmFrZUhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc25ha2UgPiBkaXYnKTtcclxuICAgICAgICB0aGlzLnNuYWtlQm9keSA9IHRoaXMuc25ha2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7XHJcbiAgICB9XHJcbiAgICBnZXQgWCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zbmFrZUhlYWQub2Zmc2V0TGVmdDtcclxuICAgIH1cclxuICAgIGdldCBZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNuYWtlSGVhZC5vZmZzZXRUb3A7XHJcbiAgICB9XHJcbiAgICBzZXQgWCh2YWwpIHtcclxuICAgICAgICBpZiAodGhpcy5YID09PSB2YWwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodmFsIDwgMCAmJiB2YWwgPiAyOTApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU25ha2UgaGl0IHRoZSB3YWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zbmFrZUJvZHlbMV0gJiYgdGhpcy5zbmFrZUJvZHlbMV0ub2Zmc2V0TGVmdCA9PT0gdmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWwgPiB0aGlzLlgpIHtcclxuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMuWCAtIDEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFsID0gdGhpcy5YICsgMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3ZlQm9keSgpO1xyXG4gICAgICAgIHRoaXMuc25ha2VIZWFkLnN0eWxlLmxlZnQgPSB2YWwgKyAncHgnO1xyXG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oKTtcclxuICAgIH1cclxuICAgIHNldCBZKHZhbCkge1xyXG4gICAgICAgIGlmICh0aGlzLlkgPT09IHZhbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh2YWwgPCAwICYmIHZhbCA+IDI5MCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTbmFrZSBoaXQgdGhlIHdhbGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNuYWtlQm9keVsxXSAmJiB0aGlzLnNuYWtlQm9keVsxXS5vZmZzZXRUb3AgPT09IHZhbCkge1xyXG4gICAgICAgICAgICBpZiAodmFsID4gdGhpcy5ZKSB7XHJcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLlkgLSAxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMuWSArIDEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW92ZUJvZHkoKTtcclxuICAgICAgICB0aGlzLnNuYWtlSGVhZC5zdHlsZS50b3AgPSB2YWwgKyAncHgnO1xyXG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oKTtcclxuICAgIH1cclxuICAgIGdyb3coKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuc25ha2UuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHRlbXBEaXYpO1xyXG4gICAgfVxyXG4gICAgbW92ZUJvZHkoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc25ha2VCb2R5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IFggPSB0aGlzLnNuYWtlQm9keVtpIC0gMV0ub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgbGV0IFkgPSB0aGlzLnNuYWtlQm9keVtpIC0gMV0ub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQm9keVtpXS5zdHlsZS5sZWZ0ID0gWCArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VCb2R5W2ldLnN0eWxlLnRvcCA9IFkgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrQ29sbGlzaW9uKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5zbmFrZUJvZHkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuWSA9PT0gdGhpcy5zbmFrZUJvZHlbaV0ub2Zmc2V0VG9wICYmIHRoaXMuWCA9PT0gdGhpcy5zbmFrZUJvZHlbaV0ub2Zmc2V0TGVmdCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU25ha2UgaGl0IGl0J3MgYm9keVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICBmb250OiBib2xkIDIwcHggXFxcIkNvdXJpZXJcXFwiO1xcbn1cXG4jbWFpbiB7XFxuICB3aWR0aDogMzYwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3ZDRhODtcXG4gIG1hcmdpbjogMTAwcHggYXV0bztcXG4gIGJvcmRlcjogMTBweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuI21haW4gI3N0YWdlIHtcXG4gIHdpZHRoOiAzMDRweDtcXG4gIGhlaWdodDogMzA0cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuI21haW4gI3N0YWdlICNzbmFrZSA+IGRpdiB7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2I3ZDRhODtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuI21haW4gI3N0YWdlICNmb29kIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBsZWZ0OiA0MHB4O1xcbiAgdG9wOiA0MHB4O1xcbn1cXG4jbWFpbiAjc3RhZ2UgI2Zvb2QgPiBkaXYge1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbiNtYWluICNzY29yZS1wYW5lbCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvaW5kZXgubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQURGO0FBSUE7RUFDRSx5QkFBQTtBQUZGO0FBS0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO01BQUEsNkJBQUE7QUFIRjtBQVBBO0VBYUksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFNTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSlI7QUFwQkE7RUE0Qk0sV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtNQUFBLHVCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsOEJBQUE7RUFDQSwyQkFBQTtNQUFBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFMTjtBQU1NO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUpSO0FBcENBO0VBOENJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSw4QkFBQTtBQVBKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBiZy1jb2xvcjojYjdkNGE4O1xcblxcbip7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gIGZvbnQ6IGJvbGQgMjBweCBcXFwiQ291cmllclxcXCI7XFxufVxcblxcbiNtYWlue1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6QGJnLWNvbG9yO1xcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXG4gICNzdGFnZXtcXG4gICAgd2lkdGg6IDMwNHB4O1xcbiAgICBoZWlnaHQ6IDMwNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAjc25ha2V7XFxuICAgICAgJj5kaXZ7XFxuICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgQGJnLWNvbG9yO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAjZm9vZHtcXG4gICAgICB3aWR0aDogMTBweDtcXG4gICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBsZWZ0OiA0MHB4O1xcbiAgICAgIHRvcDogNDBweDtcXG4gICAgICAmPmRpdntcXG4gICAgICAgIHdpZHRoOiA0cHg7XFxuICAgICAgICBoZWlnaHQ6IDRweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgI3Njb3JlLXBhbmVse1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=