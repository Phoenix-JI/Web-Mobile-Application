require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/CoinsRange.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/DetailInfo.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["tappedCoinsIndex", "qponPass"],

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (_this.tappedCoinsIndex == 0) {
        _this.CoinQpons = _this.qponPass.filter(function (p) {
          return p.coins <= 500;
        }.bind(_this));
      } else if (_this.tappedCoinsIndex == 1) {
        _this.CoinQpons = _this.qponPass.filter(function (p) {
          return p.coins > 500 && p.coins < 1000;
        }.bind(_this));
      } else if (_this.tappedCoinsIndex == 2) {
        _this.CoinQpons = _this.qponPass.filter(function (p) {
          return p.coins >= 1000;
        }.bind(_this));
      }
    })();
  },

  methods: {
    onDetailTap: function onDetailTap(args) {
      this.$navigateTo(_DetailInfo__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        props: {
          coinsRestInfo: this.CoinQpons,
          tappedCoinsIndex: args.index
        }
      });
    }
  },

  data() {
    return {
      CoinQpons: [],
      Rest: []
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/DetailInfo.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Map.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["restInfo", "tappedRestIndex", "qponPass", "tappedRestID", "coinsRestInfo", "tappedCoinsIndex", "tappedMyRestIndex", "myQponPass"],

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (_this.restInfo) _this.RestInfo = _this.restInfo[_this.tappedRestIndex];
      if (_this.qponPass) _this.RestInfo = _this.qponPass[_this.tappedRestID];
      if (_this.coinsRestInfo) _this.RestInfo = _this.coinsRestInfo[_this.tappedCoinsIndex];
      if (_this.myQponPass) _this.RestInfo = _this.myQponPass[_this.tappedMyRestIndex];
    })();
  },

  methods: {
    onMapTap: function onMapTap(args) {
      this.MapMalls = global.Malls;
      this.LMall = this.MapMalls.filter(function (p) {
        return p.name == this.RestInfo.mall;
      }.bind(this));
      this.$navigateTo(_Map__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        props: {
          LaInfo: this.LMall[0].latitude,
          LoInfo: this.LMall[0].longitude,
          MallName: this.RestInfo.mall
        }
      });
      console.log("TO MAP");
    },
    onRedeemTap: function () {
      var _onRedeemTap = _asyncToGenerator(function* () {
        var result = yield confirm({
          title: "Confirm to redeem this coupon?",
          okButtonText: "Yes",
          cancelButtonText: "Cancel"
        });

        if (result) {
          var response = yield fetch(global.baseUrl + "/user/qponOwns/" + this.RestInfo.id, {
            method: "POST"
          });

          if (response.ok) {
            var info = yield response.json();
            yield alert(info);
          } else {
            var info = yield response.json();
            yield alert(info);
          }
        }
      });

      function onRedeemTap() {
        return _onRedeemTap.apply(this, arguments);
      }

      return onRedeemTap;
    }()
  },

  data() {
    return {
      RestInfo: {},
      MapMalls: [],
      LMall: []
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/LogIn.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    PassLogIN: function () {
      var _PassLogIN = _asyncToGenerator(function* (args) {
        var response = yield fetch(global.baseUrl + "/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: this.nameValue,
            password: this.passwordValue
          })
        });

        if (response.ok) {
          var user = response.json();
          console.log(response.statusText);
          yield alert("Welcome back, " + this.nameValue);
          global.username = this.nameValue;
          this.$navigateBack();
        } else {
          var info = yield response.json();
          yield alert(info);
        }
      });

      function PassLogIN(_x) {
        return _PassLogIN.apply(this, arguments);
      }

      return PassLogIN;
    }()
  },

  data() {
    return {};
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Map.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["LaInfo", "LoInfo", "MallName"],

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      console.log(_this.LaInfo);
      console.log(_this.LoInfo);
      console.log(_this.MallName);
      _this.url = encodeURI(_this.Reurl + "center=" + _this.LaInfo + "," + _this.LoInfo + "&zoom=17&marker=" + _this.MallName + "|" + _this.LaInfo + "," + _this.LoInfo + "&sensor=");
      console.log(_this.url);
    })();
  },

  data() {
    return {
      Reurl: "https://leaflet-api.vercel.app?",
      url: ""
    };
  }

}); //

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/MyQpon.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/DetailInfo.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["qponPass"],

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      _this.MyQpons = _this.qponPass;
    })();
  },

  methods: {
    onDetailTap: function onDetailTap(args) {
      this.$navigateTo(_DetailInfo__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        props: {
          tappedMyRestIndex: args.index,
          myQponPass: this.MyQpons
        }
      });
    }
  },

  data() {
    return {
      MyQpons: []
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QPON.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Restaurant.vue");
/* harmony import */ var _CoinsRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/CoinsRange.vue");
/* harmony import */ var _DetailInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/DetailInfo.vue");
/* harmony import */ var _LogIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/LogIn.vue");
/* harmony import */ var _MyQpon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/MyQpon.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      _this.GlobalUN = global.username;
      _this.Malls = global.Malls;
      _this.ImageSrc = "";
      var response = yield fetch(global.baseUrl);

      if (response.ok) {
        _this.Qpons = yield response.json();
      } else {}
    })();
  },

  methods: {
    refresh: function refresh() {
      this.GlobalUN = global.username;

      if (!global.username == "") {
        this.ImageSrc = "https://i0.hdslb.com/bfs/archive/bb2cba8f4f74604ce4726f10fcbb65c997ef41e7.jpg";
      }
    },
    onItemTap: function onItemTap(args) {
      this.$navigateTo(_Restaurant__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        props: {
          tappedMall: args.item.name,
          qponPass: this.Qpons
        }
      });
    },
    onDetailTap: function onDetailTap(args) {
      this.$navigateTo(_DetailInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        transition: {},
        props: {
          tappedRestID: args.index,
          qponPass: this.Qpons
        }
      });
    },
    onCoinsTap: function onCoinsTap(args) {
      this.$navigateTo(_CoinsRange__WEBPACK_IMPORTED_MODULE_1__["default"], {
        transition: {},
        props: {
          tappedCoinsIndex: args.index,
          qponPass: this.Qpons
        }
      });
    },
    logInTap: function () {
      var _logInTap = _asyncToGenerator(function* (args) {
        if (global.username == "") {
          this.$navigateTo(_LogIn__WEBPACK_IMPORTED_MODULE_3__["default"], {
            transition: {},
            props: {}
          });
        } else {
          var result = yield confirm({
            title: "Confirm to logoff?",
            okButtonText: "Yes",
            cancelButtonText: "Cancel"
          });

          if (result) {
            var response = yield fetch(global.baseUrl + "/user/logout", {
              method: "POST"
            });
            global.username = "";
            this.ImageSrc = "";
            this.GlobalUN = "";

            if (response.ok) {
              var info = yield response.json();
              yield alert(info);
            }
          }
        }
      });

      function logInTap(_x) {
        return _logInTap.apply(this, arguments);
      }

      return logInTap;
    }(),
    myQponTap: function () {
      var _myQponTap = _asyncToGenerator(function* (args) {
        var response = yield fetch(global.baseUrl + "/user/qponOwns");

        if (response.ok) {
          this.MyQpon = yield response.json();
          this.$navigateTo(_MyQpon__WEBPACK_IMPORTED_MODULE_4__["default"], {
            transition: {},
            props: {
              qponPass: this.MyQpon
            }
          });
        } else {
          var info = yield response.json();
          yield alert(info);
        }
      });

      function myQponTap(_x2) {
        return _myQponTap.apply(this, arguments);
      }

      return myQponTap;
    }()
  },

  data() {
    return {
      Coins: ["Coins <=500 ", "500 < Coins < 1000 ", "Coins >= 1000 "],
      Malls: [],
      Qpons: [],
      MyQpon: [],
      GlobalUN: "",
      ImageSrc: "https://i0.hdslb.com/bfs/archive/bb2cba8f4f74604ce4726f10fcbb65c997ef41e7.jpg"
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Restaurant.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/DetailInfo.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["tappedMall", "qponPass"],

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      _this.Rest = _this.qponPass.filter(function (p) {
        return p.mall == this.tappedMall;
      }.bind(_this)); //console.log(this.tappedMall + "**");
    })();
  },

  methods: {
    onDeIfoTap: function onDeIfoTap(args) {
      this.$navigateTo(_DetailInfo__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        props: {
          restInfo: this.Rest,
          tappedRestIndex: args.index
        }
      });
    }
  },

  data() {
    return {
      Qpons: [],
      Rest: []
    };
  }

});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/QPON.vue?vue&type=style&index=0&id=71d4f6f9&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-71d4f6f9] {\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n.description-label[data-v-71d4f6f9] {\n    margin-bottom: 15;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/QPON.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/CoinsRange.vue?vue&type=template&id=5bb0d714&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ListView",
        {
          attrs: { items: _vm.CoinQpons, "+alias": "cq" },
          on: { itemTap: _vm.onDetailTap }
        },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var cq = ref.cq
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c(
                    "FlexboxLayout",
                    { attrs: { flexDirection: "row" } },
                    [_c("Label", { attrs: { text: cq.restaurant } })],
                    1
                  )
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/DetailInfo.vue?vue&type=template&id=2486468c&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "StackLayout",
        { attrs: { orientation: "vertical" } },
        [
          _c(
            "StackLayout",
            [
              _c("Image", {
                attrs: {
                  src: _vm.RestInfo.imageLink,
                  height: "300",
                  stretch: "aspectFill"
                }
              })
            ],
            1
          ),
          _c(
            "StackLayout",
            [
              _c("Label", {
                staticClass: "h2",
                attrs: { text: _vm.RestInfo.restaurant }
              }),
              _c("Label", {
                staticClass: "h3",
                attrs: { text: _vm.RestInfo.tittle }
              })
            ],
            1
          ),
          _c(
            "StackLayout",
            { attrs: { orientation: "horizontal" } },
            [
              _c("Label", { staticClass: "h3", attrs: { text: "Mall: " } }),
              _c("Label", {
                staticClass: "h3",
                attrs: { text: _vm.RestInfo.mall }
              })
            ],
            1
          ),
          _c(
            "StackLayout",
            { attrs: { orientation: "horizontal" } },
            [
              _c("Label", { staticClass: "h3", attrs: { text: "Coins: " } }),
              _c("Label", {
                staticClass: "h3",
                attrs: { text: _vm.RestInfo.coins }
              })
            ],
            1
          ),
          _c(
            "StackLayout",
            { attrs: { orientation: "horizontal" } },
            [
              _c("Label", {
                staticClass: "h3",
                attrs: { text: "ExpoiryDate: " }
              }),
              _c("Label", {
                staticClass: "h3",
                attrs: { text: _vm.RestInfo.expiryDate }
              })
            ],
            1
          ),
          _c(
            "StackLayout",
            { attrs: { orientation: "horizontal", height: "100" } },
            [
              _c("Button", {
                staticClass: "h2 -primary -rounded-lg",
                attrs: { text: "Redeem", width: "180" },
                on: { tap: _vm.onRedeemTap }
              }),
              _c("Button", {
                staticClass: "h2 -primary -rounded-lg",
                attrs: { text: "Address", width: "180" },
                on: { tap: _vm.onMapTap }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/LogIn.vue?vue&type=template&id=682aaabe&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "StackLayout",
        {
          staticClass: "m-10",
          attrs: { orientation: "vertical", height: "180" }
        },
        [
          _c("TextField", {
            attrs: { hint: "Enter user name...", height: "50" },
            model: {
              value: _vm.nameValue,
              callback: function($event) {
                _vm.nameValue = $event.object["text"]
              },
              expression: "nameValue"
            }
          }),
          _c("TextField", {
            attrs: {
              keyboardType: "phone",
              hint: "Enter password...",
              height: "50"
            },
            model: {
              value: _vm.passwordValue,
              callback: function($event) {
                _vm.passwordValue = $event.object["text"]
              },
              expression: "passwordValue"
            }
          }),
          _c("Button", {
            staticClass: "h2 -primary -rounded-lg",
            attrs: { text: "LogIn", height: "50" },
            on: { tap: _vm.PassLogIN }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Map.vue?vue&type=template&id=3e54e651&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Page", [_c("WebView", { attrs: { src: _vm.url } })], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/MyQpon.vue?vue&type=template&id=fa18b7b6&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ListView",
        {
          attrs: { items: _vm.MyQpons, "+alias": "qpon" },
          on: { itemTap: _vm.onDetailTap }
        },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var qpon = ref.qpon
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c(
                    "FlexboxLayout",
                    { attrs: { flexDirection: "row" } },
                    [_c("Label", { attrs: { text: qpon.restaurant } })],
                    1
                  )
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/QPON.vue?vue&type=template&id=71d4f6f9&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { on: { loaded: _vm.refresh } },
    [
      _c("ActionBar", { attrs: { title: "Home" } }),
      _c(
        "StackLayout",
        [
          _c(
            "BottomNavigation",
            [
              _c(
                "TabStrip",
                [
                  _c(
                    "TabStripItem",
                    [
                      _c("Label", { attrs: { text: "Home" } }),
                      _c("Image", { attrs: { src: "res://home" } })
                    ],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [
                      _c("Label", { attrs: { text: "Malls" } }),
                      _c("Image", { attrs: { src: "res://favorites" } })
                    ],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [
                      _c("Label", { attrs: { text: "Coins" } }),
                      _c("Image", { attrs: { src: "res://search" } })
                    ],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [
                      _c("Label", { attrs: { text: "User" } }),
                      _c("Image", { attrs: { src: "res://browse" } })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.Qpons, "+alias": "qpon" },
                      on: { itemTap: _vm.onDetailTap }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var qpon = ref.qpon
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "StackLayout",
                                [
                                  _c(
                                    "StackLayout",
                                    [
                                      _c("Image", {
                                        attrs: {
                                          src: qpon.imageLink,
                                          height: "300",
                                          stretch: "aspectFill"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c(
                                    "StackLayout",
                                    [
                                      _c("Label", {
                                        staticClass: "h2",
                                        attrs: { text: qpon.restaurant }
                                      }),
                                      _c("Label", {
                                        staticClass: "h3",
                                        attrs: { text: qpon.detail }
                                      })
                                    ],
                                    1
                                  ),
                                  _c(
                                    "StackLayout",
                                    { attrs: { orientation: "horizontal" } },
                                    [
                                      _c("Label", {
                                        staticClass: "h3",
                                        attrs: { text: "Coins: " }
                                      }),
                                      _c("Label", {
                                        staticClass: "h3",
                                        attrs: { text: qpon.coins }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.Malls, "+alias": "mall" },
                      on: { itemTap: _vm.onItemTap }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var mall = ref.mall
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "FlexboxLayout",
                                { attrs: { flexDirection: "row" } },
                                [
                                  _c("Label", {
                                    staticClass: "t-12",
                                    attrs: { text: mall.name }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.Coins, "+alias": "coin" },
                      on: { itemTap: _vm.onCoinsTap }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var coin = ref.coin
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "FlexboxLayout",
                                { attrs: { flexDirection: "row" } },
                                [
                                  _c("Label", {
                                    staticClass: "t-12",
                                    attrs: { text: coin }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "StackLayout",
                    [
                      _c("Label", { attrs: { width: "50", height: "50" } }),
                      _c(
                        "StackLayout",
                        { attrs: { orientation: "horizontal" } },
                        [
                          _c("Image", {
                            attrs: {
                              src: _vm.ImageSrc,
                              width: "300",
                              height: "150"
                            }
                          }),
                          _c("Label", {
                            attrs: {
                              text: _vm.GlobalUN,
                              textAlignment: "left",
                              width: "150",
                              height: "150",
                              fontSize: "30"
                            }
                          })
                        ],
                        1
                      ),
                      _c("Label", { attrs: { width: "100", height: "100" } }),
                      _c("Button", {
                        staticClass: "h2 -primary -rounded-lg",
                        attrs: { text: "Login / Logoff" },
                        on: { tap: _vm.logInTap }
                      }),
                      _c("Button", {
                        staticClass: "h2 -primary -rounded-lg",
                        attrs: { text: "My Redeemed Coupons" },
                        on: { tap: _vm.myQponTap }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Restaurant.vue?vue&type=template&id=3ae36f50&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ListView",
        {
          attrs: { items: _vm.Rest, "+alias": "rest" },
          on: { itemTap: _vm.onDeIfoTap }
        },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var rest = ref.rest
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c(
                    "FlexboxLayout",
                    { attrs: { flexDirection: "row" } },
                    [_c("Label", { attrs: { text: rest.restaurant } })],
                    1
                  )
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/default.css'"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_QPON__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/QPON.vue");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        
 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

global.baseUrl = "http://3d2478f56b16.ngrok.io";
global.username = "";
global.Malls = [{
  "name": "IFC Mall",
  "latitude": 22.2849,
  "longitude": 114.158917
}, {
  "name": "Pacific Place",
  "latitude": 22.2774985,
  "longitude": 114.1663225
}, {
  "name": "Times Square",
  "latitude": 22.2782079,
  "longitude": 114.1822994
}, {
  "name": "Elements",
  "latitude": 22.3048708,
  "longitude": 114.1615219
}, {
  "name": "Harbour City",
  "latitude": 22.2950689,
  "longitude": 114.1668661
}, {
  "name": "Festival Walk",
  "latitude": 22.3372971,
  "longitude": 114.1745273
}, {
  "name": "MegaBox",
  "latitude": 22.319857,
  "longitude": 114.208168
}, {
  "name": "APM",
  "latitude": 22.3121738,
  "longitude": 114.22513219999996
}, {
  "name": "Tsuen Wan Plaza",
  "latitude": 22.370735,
  "longitude": 114.111309
}, {
  "name": "New Town Plaza",
  "latitude": 22.3814592,
  "longitude": 114.1889307
}];
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  template: "\n        <Frame>\n            <QPON />\n        </Frame>",
  components: {
    QPON: _components_QPON__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/CoinsRange.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CoinsRange_vue_vue_type_template_id_5bb0d714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/CoinsRange.vue?vue&type=template&id=5bb0d714&");
/* harmony import */ var _CoinsRange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/CoinsRange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CoinsRange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CoinsRange_vue_vue_type_template_id_5bb0d714___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CoinsRange_vue_vue_type_template_id_5bb0d714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5bb0d714')) {
      api.createRecord('5bb0d714', component.options)
    } else {
      api.reload('5bb0d714', component.options)
    }
    module.hot.accept("./components/CoinsRange.vue?vue&type=template&id=5bb0d714&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _CoinsRange_vue_vue_type_template_id_5bb0d714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/CoinsRange.vue?vue&type=template&id=5bb0d714&");
(function () {
      api.rerender('5bb0d714', {
        render: _CoinsRange_vue_vue_type_template_id_5bb0d714___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _CoinsRange_vue_vue_type_template_id_5bb0d714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/CoinsRange.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/CoinsRange.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CoinsRange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/CoinsRange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CoinsRange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/CoinsRange.vue?vue&type=template&id=5bb0d714&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoinsRange_vue_vue_type_template_id_5bb0d714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/CoinsRange.vue?vue&type=template&id=5bb0d714&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoinsRange_vue_vue_type_template_id_5bb0d714___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoinsRange_vue_vue_type_template_id_5bb0d714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/DetailInfo.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailInfo_vue_vue_type_template_id_2486468c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/DetailInfo.vue?vue&type=template&id=2486468c&");
/* harmony import */ var _DetailInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/DetailInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetailInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailInfo_vue_vue_type_template_id_2486468c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailInfo_vue_vue_type_template_id_2486468c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('2486468c')) {
      api.createRecord('2486468c', component.options)
    } else {
      api.reload('2486468c', component.options)
    }
    module.hot.accept("./components/DetailInfo.vue?vue&type=template&id=2486468c&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _DetailInfo_vue_vue_type_template_id_2486468c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/DetailInfo.vue?vue&type=template&id=2486468c&");
(function () {
      api.rerender('2486468c', {
        render: _DetailInfo_vue_vue_type_template_id_2486468c___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _DetailInfo_vue_vue_type_template_id_2486468c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/DetailInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/DetailInfo.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/DetailInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/DetailInfo.vue?vue&type=template&id=2486468c&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailInfo_vue_vue_type_template_id_2486468c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/DetailInfo.vue?vue&type=template&id=2486468c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailInfo_vue_vue_type_template_id_2486468c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailInfo_vue_vue_type_template_id_2486468c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/LogIn.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LogIn_vue_vue_type_template_id_682aaabe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/LogIn.vue?vue&type=template&id=682aaabe&");
/* harmony import */ var _LogIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/LogIn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LogIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LogIn_vue_vue_type_template_id_682aaabe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LogIn_vue_vue_type_template_id_682aaabe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('682aaabe')) {
      api.createRecord('682aaabe', component.options)
    } else {
      api.reload('682aaabe', component.options)
    }
    module.hot.accept("./components/LogIn.vue?vue&type=template&id=682aaabe&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _LogIn_vue_vue_type_template_id_682aaabe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/LogIn.vue?vue&type=template&id=682aaabe&");
(function () {
      api.rerender('682aaabe', {
        render: _LogIn_vue_vue_type_template_id_682aaabe___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _LogIn_vue_vue_type_template_id_682aaabe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/LogIn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/LogIn.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LogIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/LogIn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LogIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/LogIn.vue?vue&type=template&id=682aaabe&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogIn_vue_vue_type_template_id_682aaabe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/LogIn.vue?vue&type=template&id=682aaabe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogIn_vue_vue_type_template_id_682aaabe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogIn_vue_vue_type_template_id_682aaabe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Map.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Map_vue_vue_type_template_id_3e54e651___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Map.vue?vue&type=template&id=3e54e651&");
/* harmony import */ var _Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Map.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Map_vue_vue_type_template_id_3e54e651___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Map_vue_vue_type_template_id_3e54e651___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3e54e651')) {
      api.createRecord('3e54e651', component.options)
    } else {
      api.reload('3e54e651', component.options)
    }
    module.hot.accept("./components/Map.vue?vue&type=template&id=3e54e651&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Map_vue_vue_type_template_id_3e54e651___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Map.vue?vue&type=template&id=3e54e651&");
(function () {
      api.rerender('3e54e651', {
        render: _Map_vue_vue_type_template_id_3e54e651___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Map_vue_vue_type_template_id_3e54e651___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Map.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Map.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Map.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Map.vue?vue&type=template&id=3e54e651&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_3e54e651___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Map.vue?vue&type=template&id=3e54e651&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_3e54e651___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_3e54e651___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/MyQpon.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyQpon_vue_vue_type_template_id_fa18b7b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/MyQpon.vue?vue&type=template&id=fa18b7b6&");
/* harmony import */ var _MyQpon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/MyQpon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyQpon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyQpon_vue_vue_type_template_id_fa18b7b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyQpon_vue_vue_type_template_id_fa18b7b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('fa18b7b6')) {
      api.createRecord('fa18b7b6', component.options)
    } else {
      api.reload('fa18b7b6', component.options)
    }
    module.hot.accept("./components/MyQpon.vue?vue&type=template&id=fa18b7b6&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MyQpon_vue_vue_type_template_id_fa18b7b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/MyQpon.vue?vue&type=template&id=fa18b7b6&");
(function () {
      api.rerender('fa18b7b6', {
        render: _MyQpon_vue_vue_type_template_id_fa18b7b6___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MyQpon_vue_vue_type_template_id_fa18b7b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/MyQpon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/MyQpon.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MyQpon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/MyQpon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MyQpon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/MyQpon.vue?vue&type=template&id=fa18b7b6&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyQpon_vue_vue_type_template_id_fa18b7b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/MyQpon.vue?vue&type=template&id=fa18b7b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyQpon_vue_vue_type_template_id_fa18b7b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyQpon_vue_vue_type_template_id_fa18b7b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/QPON.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QPON_vue_vue_type_template_id_71d4f6f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/QPON.vue?vue&type=template&id=71d4f6f9&scoped=true&");
/* harmony import */ var _QPON_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/QPON.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QPON_vue_vue_type_style_index_0_id_71d4f6f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/QPON.vue?vue&type=style&index=0&id=71d4f6f9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QPON_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QPON_vue_vue_type_template_id_71d4f6f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QPON_vue_vue_type_template_id_71d4f6f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "71d4f6f9",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('71d4f6f9')) {
      api.createRecord('71d4f6f9', component.options)
    } else {
      api.reload('71d4f6f9', component.options)
    }
    module.hot.accept("./components/QPON.vue?vue&type=template&id=71d4f6f9&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _QPON_vue_vue_type_template_id_71d4f6f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/QPON.vue?vue&type=template&id=71d4f6f9&scoped=true&");
(function () {
      api.rerender('71d4f6f9', {
        render: _QPON_vue_vue_type_template_id_71d4f6f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _QPON_vue_vue_type_template_id_71d4f6f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/QPON.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/QPON.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QPON_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QPON.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QPON_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/QPON.vue?vue&type=style&index=0&id=71d4f6f9&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QPON_vue_vue_type_style_index_0_id_71d4f6f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/QPON.vue?vue&type=style&index=0&id=71d4f6f9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QPON_vue_vue_type_style_index_0_id_71d4f6f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QPON_vue_vue_type_style_index_0_id_71d4f6f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QPON_vue_vue_type_style_index_0_id_71d4f6f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QPON_vue_vue_type_style_index_0_id_71d4f6f9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./components/QPON.vue?vue&type=template&id=71d4f6f9&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QPON_vue_vue_type_template_id_71d4f6f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/QPON.vue?vue&type=template&id=71d4f6f9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QPON_vue_vue_type_template_id_71d4f6f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QPON_vue_vue_type_template_id_71d4f6f9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Restaurant.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Restaurant_vue_vue_type_template_id_3ae36f50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Restaurant.vue?vue&type=template&id=3ae36f50&");
/* harmony import */ var _Restaurant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Restaurant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Restaurant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Restaurant_vue_vue_type_template_id_3ae36f50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Restaurant_vue_vue_type_template_id_3ae36f50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3ae36f50')) {
      api.createRecord('3ae36f50', component.options)
    } else {
      api.reload('3ae36f50', component.options)
    }
    module.hot.accept("./components/Restaurant.vue?vue&type=template&id=3ae36f50&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Restaurant_vue_vue_type_template_id_3ae36f50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Restaurant.vue?vue&type=template&id=3ae36f50&");
(function () {
      api.rerender('3ae36f50', {
        render: _Restaurant_vue_vue_type_template_id_3ae36f50___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Restaurant_vue_vue_type_template_id_3ae36f50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Restaurant.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Restaurant.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Restaurant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Restaurant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Restaurant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Restaurant.vue?vue&type=template&id=3ae36f50&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Restaurant_vue_vue_type_template_id_3ae36f50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Restaurant.vue?vue&type=template&id=3ae36f50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Restaurant_vue_vue_type_template_id_3ae36f50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Restaurant_vue_vue_type_template_id_3ae36f50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "@nativescript/core/application":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/application");

/***/ }),

/***/ "@nativescript/core/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/data/observable-array");

/***/ }),

/***/ "@nativescript/core/platform":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/platform");

/***/ }),

/***/ "@nativescript/core/text/formatted-string":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/text/formatted-string");

/***/ }),

/***/ "@nativescript/core/text/span":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/text/span");

/***/ }),

/***/ "@nativescript/core/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/action-bar");

/***/ }),

/***/ "@nativescript/core/ui/activity-indicator":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/activity-indicator");

/***/ }),

/***/ "@nativescript/core/ui/border":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/border");

/***/ }),

/***/ "@nativescript/core/ui/bottom-navigation":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/bottom-navigation");

/***/ }),

/***/ "@nativescript/core/ui/button":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/button");

/***/ }),

/***/ "@nativescript/core/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/content-view");

/***/ }),

/***/ "@nativescript/core/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/core/view");

/***/ }),

/***/ "@nativescript/core/ui/date-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/date-picker");

/***/ }),

/***/ "@nativescript/core/ui/frame":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/frame");

/***/ }),

/***/ "@nativescript/core/ui/html-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/html-view");

/***/ }),

/***/ "@nativescript/core/ui/image":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/image");

/***/ }),

/***/ "@nativescript/core/ui/label":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/label");

/***/ }),

/***/ "@nativescript/core/ui/layouts/absolute-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/absolute-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/dock-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/dock-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/flexbox-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/flexbox-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/grid-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/grid-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/layout-base":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/layout-base");

/***/ }),

/***/ "@nativescript/core/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/stack-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/wrap-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/wrap-layout");

/***/ }),

/***/ "@nativescript/core/ui/list-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/list-picker");

/***/ }),

/***/ "@nativescript/core/ui/list-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/list-view");

/***/ }),

/***/ "@nativescript/core/ui/page":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/page");

/***/ }),

/***/ "@nativescript/core/ui/placeholder":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/placeholder");

/***/ }),

/***/ "@nativescript/core/ui/progress":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/progress");

/***/ }),

/***/ "@nativescript/core/ui/proxy-view-container":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/proxy-view-container");

/***/ }),

/***/ "@nativescript/core/ui/scroll-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/scroll-view");

/***/ }),

/***/ "@nativescript/core/ui/search-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/search-bar");

/***/ }),

/***/ "@nativescript/core/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/segmented-bar");

/***/ }),

/***/ "@nativescript/core/ui/slider":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/slider");

/***/ }),

/***/ "@nativescript/core/ui/switch":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/switch");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-content-item":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-content-item");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-strip":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-strip");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-strip-item":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-strip-item");

/***/ }),

/***/ "@nativescript/core/ui/tab-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-view");

/***/ }),

/***/ "@nativescript/core/ui/tabs":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tabs");

/***/ }),

/***/ "@nativescript/core/ui/text-field":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/text-field");

/***/ }),

/***/ "@nativescript/core/ui/text-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/text-view");

/***/ }),

/***/ "@nativescript/core/ui/time-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/time-picker");

/***/ }),

/***/ "@nativescript/core/ui/web-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/web-view");

/***/ }),

/***/ "@nativescript/core/utils/types":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/utils/types");

/***/ }),

/***/ "@nativescript/core/xml":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/xml");

/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db2luc1JhbmdlLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9EZXRhaWxJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dJbi52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWFwLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NeVFwb24udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1FQT04udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1Jlc3RhdXJhbnQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUVBPTi52dWU/ZjIxNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvaW5zUmFuZ2UudnVlPzAzM2QiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWxJbmZvLnZ1ZT9hODBkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9nSW4udnVlPzU5YmUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXAudnVlPzcwZTEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeVFwb24udnVlPzFjMWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RUE9OLnZ1ZT84YjliIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVzdGF1cmFudC52dWU/MzgwOCIsIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db2luc1JhbmdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvaW5zUmFuZ2UudnVlPzk2NTIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db2luc1JhbmdlLnZ1ZT84NmIyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGV0YWlsSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWxJbmZvLnZ1ZT80YzdjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGV0YWlsSW5mby52dWU/MTFiMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ0luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ0luLnZ1ZT84MzcxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9nSW4udnVlPzg5YjIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXAudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwLnZ1ZT8wNjY2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwLnZ1ZT82MzUzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlRcG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015UXBvbi52dWU/OTc2OSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015UXBvbi52dWU/MmJmMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1FQT04udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUVBPTi52dWU/ODlmOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1FQT04udnVlP2I0OGIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RUE9OLnZ1ZT9kZjBmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVzdGF1cmFudC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXN0YXVyYW50LnZ1ZT83NTA4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVzdGF1cmFudC52dWU/Yjc3NCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS90ZXh0L3NwYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYWN0aW9uLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYm9yZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2JvdHRvbS1uYXZpZ2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9jb250ZW50LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvY29yZS92aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2RhdGUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2h0bWwtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9pbWFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2RvY2stbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2xheW91dC1iYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvd3JhcC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGxhY2Vob2xkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcHJveHktdmlldy1jb250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2Nyb2xsLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2VhcmNoLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zZWdtZW50ZWQtYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NsaWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItY29udGVudC1pdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwLWl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90ZXh0LWZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RleHQtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90aW1lLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS93ZWItdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91dGlscy90eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS94bWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiJdLCJuYW1lcyI6WyJRUE9OIiwiZ2xvYmFsIiwiYmFzZVVybCIsInVzZXJuYW1lIiwiTWFsbHMiLCJ0ZW1wbGF0ZSIsImNvbXBvbmVudHMiLCIkc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFFQTtBQUNBLHlDQURBOztBQUdBO0FBQUE7O0FBQUE7QUFDQTtBQUNBLGdEQUNBO0FBQ0E7QUFDQSxTQUZBLENBRUEsSUFGQSxDQUVBLEtBRkEsQ0FEQTtBQUtBLE9BTkEsTUFNQTtBQUNBLGdEQUNBO0FBQ0E7QUFDQSxTQUZBLENBRUEsSUFGQSxDQUVBLEtBRkEsQ0FEQTtBQUtBLE9BTkEsTUFNQTtBQUNBLGdEQUNBO0FBQ0E7QUFDQSxTQUZBLENBRUEsSUFGQSxDQUVBLEtBRkEsQ0FEQTtBQUtBO0FBbkJBO0FBb0JBLEdBdkJBOztBQXdCQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBQ0EsdUNBREE7QUFFQTtBQUZBO0FBRkE7QUFPQTtBQVRBLEdBeEJBOztBQW1DQTtBQUNBO0FBQ0EsbUJBREE7QUFFQTtBQUZBO0FBSUE7O0FBeENBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM4QkE7QUFDQTtBQUNBLFVBQ0EsVUFEQSxFQUVBLGlCQUZBLEVBR0EsVUFIQSxFQUlBLGNBSkEsRUFLQSxlQUxBLEVBTUEsa0JBTkEsRUFPQSxtQkFQQSxFQVFBLFlBUkEsQ0FEQTs7QUFXQTtBQUFBOztBQUFBO0FBQ0EsZ0VBQ0EsZUFEQTtBQUVBLGdFQUNBLFlBREE7QUFFQSwrQkFDQTtBQUNBLDRCQUNBO0FBUkE7QUFTQSxHQXBCQTs7QUFxQkE7QUFDQTtBQUNBO0FBRUEsd0NBQ0E7QUFDQTtBQUNBLE9BRkEsQ0FFQSxJQUZBLENBRUEsSUFGQSxDQURBO0FBTUE7QUFDQSxzQkFEQTtBQUVBO0FBQ0Esd0NBREE7QUFFQSx5Q0FGQTtBQUdBO0FBSEE7QUFGQTtBQVNBO0FBQ0EsS0FwQkE7QUFzQkE7QUFBQTtBQUNBO0FBQ0EsaURBREE7QUFHQSw2QkFIQTtBQUlBO0FBSkE7O0FBTUE7QUFDQSxxQ0FDQSwwQ0FDQSxRQURBLENBQ0EsRUFGQSxFQUVBO0FBQ0E7QUFEQSxXQUZBOztBQU9BO0FBQ0E7QUFDQTtBQUNBLFdBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0F2QkE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUF0QkEsR0FyQkE7O0FBb0VBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGtCQUZBO0FBR0E7QUFIQTtBQUtBOztBQTFFQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0Esb0RBQ0EsYUFEQSxFQUNBO0FBQ0Esd0JBREE7QUFFQTtBQUNBO0FBREEsV0FGQTtBQUtBO0FBQ0Esb0NBREE7QUFFQTtBQUZBO0FBTEEsU0FEQTs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQXZCQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQURBLEdBREE7O0FBNEJBO0FBQ0E7QUFDQTs7QUE5QkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBLHlDQURBOztBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFDQSxjQUNBLFNBREEsR0FFQSxZQUZBLEdBR0EsR0FIQSxHQUlBLFlBSkEsR0FLQSxrQkFMQSxHQU1BLGNBTkEsR0FPQSxHQVBBLEdBUUEsWUFSQSxHQVNBLEdBVEEsR0FVQSxZQVZBLEdBV0EsVUFaQTtBQWNBO0FBbEJBO0FBbUJBLEdBckJBOztBQXNCQTtBQUNBO0FBQ0EsOENBREE7QUFHQTtBQUhBO0FBS0E7O0FBNUJBLEcsQ0E2QkEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFQTtBQUNBLHFCQURBOztBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBRUEsR0FKQTs7QUFNQTtBQUVBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBQ0EsdUNBREE7QUFFQTtBQUZBO0FBRkE7QUFPQTtBQVZBLEdBTkE7O0FBbUJBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBdkJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBUEE7QUFRQSxHQVRBOztBQVVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUNBLCtFQURBO0FBRUE7QUFDQSxLQVJBO0FBU0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFDQSxvQ0FEQTtBQUVBO0FBRkE7QUFGQTtBQU9BLEtBakJBO0FBa0JBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBQ0Esa0NBREE7QUFFQTtBQUZBO0FBRkE7QUFPQSxLQTFCQTtBQTJCQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUNBLHNDQURBO0FBRUE7QUFGQTtBQUZBO0FBT0EsS0FuQ0E7QUFvQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBRkE7QUFJQSxTQUxBLE1BS0E7QUFDQTtBQUNBLHVDQURBO0FBRUEsK0JBRkE7QUFHQTtBQUhBOztBQU1BO0FBQ0EsdUNBQ0EsK0JBREEsRUFDQTtBQUNBO0FBREEsYUFEQTtBQUtBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQTVCQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxPQXBDQTtBQWtFQTtBQUFBO0FBQ0Esb0RBQ0EsZ0JBREE7O0FBRUE7QUFDQTtBQUVBO0FBQ0EsMEJBREE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQU1BLFNBVEEsTUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BaEJBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBbEVBLEdBVkE7O0FBOEZBO0FBQ0E7QUFDQSxxREFDQSxnQkFEQSxDQURBO0FBS0EsZUFMQTtBQU9BLGVBUEE7QUFTQSxnQkFUQTtBQVdBLGtCQVhBO0FBYUE7QUFiQTtBQWVBOztBQTlHQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFFQTtBQUNBLG1DQURBOztBQUdBO0FBQUE7O0FBQUE7QUFDQSx5Q0FDQTtBQUNBO0FBQ0EsT0FGQSxDQUVBLElBRkEsQ0FFQSxLQUZBLENBREEsRUFEQSxDQU1BO0FBTkE7QUFPQSxHQVZBOztBQVlBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFDQSw2QkFEQTtBQUVBO0FBRkE7QUFGQTtBQU9BO0FBVEEsR0FaQTs7QUF1QkE7QUFDQTtBQUNBLGVBREE7QUFHQTtBQUhBO0FBS0E7O0FBN0JBLEc7Ozs7Ozs7QUNsQkEseUVBQTJCLG1CQUFPLENBQUMsNENBQStDO0FBQ2xGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxtQ0FBbUMsNkJBQTZCLG9CQUFvQixpQkFBaUIsR0FBRyx1Q0FBdUMsd0JBQXdCLEdBQUc7O0FBRWpNOztBQUVBLHdCQUF3QixtQkFBTyxDQUFDLDhCQUE4QjtBQUM5RCxJQUFJLG1CQUFPLENBQUMseUNBQXlDOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLCtDQUErQztBQUM5RSxTQUFTO0FBQ1Q7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUNBQXVDO0FBQ3pELGVBQWU7QUFDZixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsdUJBQXVCLEVBQUU7QUFDdkQsa0NBQWtDLFNBQVMsc0JBQXNCLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLDBCQUEwQixFQUFFO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsNEJBQTRCLEVBQUU7QUFDcEQ7QUFDQSwyQkFBMkIsNEJBQTRCLGlCQUFpQixFQUFFO0FBQzFFO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsNEJBQTRCLEVBQUU7QUFDcEQ7QUFDQSwyQkFBMkIsNEJBQTRCLGtCQUFrQixFQUFFO0FBQzNFO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsNEJBQTRCLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLDJDQUEyQyxFQUFFO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQkFBK0I7QUFDdkQscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0Esd0JBQXdCLGdDQUFnQztBQUN4RCxxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3RHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0Esb0JBQW9CLDJDQUEyQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRCxpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTLGVBQWUsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1Q0FBdUM7QUFDekQsZUFBZTtBQUNmLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUyx1QkFBdUIsRUFBRTtBQUN2RCxrQ0FBa0MsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLE1BQU0sc0JBQXNCLEVBQUU7QUFDbkM7QUFDQSx1QkFBdUIsU0FBUyxnQkFBZ0IsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUyxlQUFlLEVBQUU7QUFDN0QsbUNBQW1DLFNBQVMsb0JBQW9CLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVMsZ0JBQWdCLEVBQUU7QUFDOUQsbUNBQW1DLFNBQVMseUJBQXlCLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVMsZ0JBQWdCLEVBQUU7QUFDOUQsbUNBQW1DLFNBQVMsc0JBQXNCLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVMsZUFBZSxFQUFFO0FBQzdELG1DQUFtQyxTQUFTLHNCQUFzQixFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxQ0FBcUM7QUFDbkUsMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVMsNEJBQTRCLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHFDQUFxQztBQUNuRSwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLHVCQUF1QixFQUFFO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxQ0FBcUM7QUFDbkUsMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUyx1QkFBdUIsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUyw0QkFBNEIsRUFBRTtBQUMxRTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsNEJBQTRCLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUyw4QkFBOEIsRUFBRTtBQUM1RTtBQUNBO0FBQ0EsZ0NBQWdDLHlCQUF5QjtBQUN6RCw2QkFBNkI7QUFDN0IsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxnQ0FBZ0MsOEJBQThCO0FBQzlELDZCQUE2QjtBQUM3Qix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNVFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9DQUFvQztBQUN0RCxlQUFlO0FBQ2YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLHVCQUF1QixFQUFFO0FBQ3ZELGtDQUFrQyxTQUFTLHdCQUF3QixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Sjs7Ozs7OztBQ3ZCQSwrR0FBaUUsbUJBQU8sQ0FBQyw0SEFBMEY7QUFDbkssZ0VBQWdFLG1CQUFPLENBQUMsNEhBQTBGO0FBQ2xLLG9FQUFvRSxtQkFBTyxDQUFDLCtIQUE2RjtBQUN6SyxtRUFBbUUsbUJBQU8sQ0FBQywrSEFBNkYsR0FBRyxrQkFBa0Isa0NBQWtDLFVBQVUsK0RBQStELEVBQUUsa0VBQWtFLEVBQUUsb0RBQW9ELHlEQUF5RCxFQUFFO0FBQzdkLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLG1DQUFtQztBQUNsRSxTQUFTO0FBQ1Q7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsT0FBT0EsSUFBUCxvQkFBaUIsMkVBRWpCO0FBQ0E7O0FBQ0FDLE1BQU0sQ0FBQ0MsU0FBVSxHQUFqQjtBQUVBRCxNQUFNLENBQUNFLFFBQVAsR0FBa0IsRUFBbEI7QUFFQUYsTUFBTSxDQUFDRyxLQUFQLEdBRUksQ0FDSTtBQUFBO0FBRUksY0FBWSxPQUZoQjtBQUdJLGVBQWE7QUFIakIsQ0FESixFQU1JO0FBQ0ksVUFBUSxJQURaO0FBQUE7QUFHSSxlQUFhO0FBSGpCLENBTkosRUFXSTtBQUNJLFVBQVEsY0FEWjtBQUVJLGNBQVksVUFGaEI7QUFHSSxlQUFhO0FBSGpCLENBWEosRUFnQkk7QUFBQTtBQUVJLGNBQVksVUFGaEI7QUFHSSxlQUFhO0FBSGpCLENBaEJKLEVBcUJJO0FBQ0ksUUFESjtBQUVJLGNBQVksVUFGaEI7QUFHSSxlQUFhO0FBSGpCLENBckJKLEVBMEJJO0FBQ0ksVUFBUSxlQURaO0FBRUksY0FBWSxVQUZoQjtBQUdJLGVBQWE7QUFIakIsQ0ExQkosRUErQkk7QUFDSSxVQUFRLEVBRFo7QUFFSSwyQkFBWSx1Q0FGaEI7QUFHSSxRQUFhO0FBRWpCO0FBQ0ksVUFBUSxLQURaO0FBQUE7QUFHSSxlQUFhO0FBSGpCLENBcENKLEVBeUNJO0FBQ0ksVUFBUSxPQURaO0FBRUksY0FBWSxPQUZoQjtBQUdJLGVBQWE7QUFIakIsQ0F6Q0osRUE4Q0k7QUFDSSxJQURKO0FBRUksY0FBWSxVQUZoQjtBQUdJLGVBQWE7QUFIakIsQ0E5Q0osQ0FGSjtBQXNEQSxJQUFRO0FBRUpDLFVBQVEsZUFGSjtBQU9KQyxZQUFVLEVBQUU7QUFDUk47QUFEUTtBQVBSLENBQVIsRUFVR08sTUFWSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQzNCO0FBQ0w7OztBQUd6RDtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUscUZBQU07QUFDUixFQUFFLDhGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFvRTtBQUN4RixjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiw0REFBaUQsRUFBRTtBQUFBO0FBQ3pFO0FBQ0EsZ0JBQWdCLHFGQUFNO0FBQ3RCLHlCQUF5Qiw4RkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTBLLENBQWdCLDhPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBOUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RjtBQUMzQjtBQUNMOzs7QUFHekQ7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHFGQUFNO0FBQ1IsRUFBRSw4RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBb0U7QUFDeEYsY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsNERBQWlELEVBQUU7QUFBQTtBQUN6RTtBQUNBLGdCQUFnQixxRkFBTTtBQUN0Qix5QkFBeUIsOEZBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEwSyxDQUFnQiw4T0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQTlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQW9FO0FBQ3hGLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLHVEQUE0QyxFQUFFO0FBQUE7QUFDcEU7QUFDQSxnQkFBZ0IsZ0ZBQU07QUFDdEIseUJBQXlCLHlGQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBcUssQ0FBZ0IseU9BQUcsRUFBQyxDOzs7Ozs7OztBQ0F6TDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQWtGO0FBQzNCO0FBQ0w7OztBQUdsRDtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSx5RUFBTTtBQUNSLEVBQUUsOEVBQU07QUFDUixFQUFFLHVGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFvRTtBQUN4RixjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQixxREFBMEMsRUFBRTtBQUFBO0FBQ2xFO0FBQ0EsZ0JBQWdCLDhFQUFNO0FBQ3RCLHlCQUF5Qix1RkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW1LLENBQWdCLHVPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBdkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRjtBQUMzQjtBQUNMOzs7QUFHckQ7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBb0U7QUFDeEYsY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQTZDLEVBQUU7QUFBQTtBQUNyRTtBQUNBLGdCQUFnQixpRkFBTTtBQUN0Qix5QkFBeUIsMEZBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFzSyxDQUFnQiwwT0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQTFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRjtBQUN2QztBQUNMO0FBQ3FDOzs7QUFHeEY7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxvR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBb0U7QUFDeEYsY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0Isa0VBQXVELEVBQUU7QUFBQTtBQUMvRTtBQUNBLGdCQUFnQiwyRkFBTTtBQUN0Qix5QkFBeUIsb0dBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFvSyxDQUFnQix3T0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQXhMO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQzNCO0FBQ0w7OztBQUd6RDtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUscUZBQU07QUFDUixFQUFFLDhGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFvRTtBQUN4RixjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiw0REFBaUQsRUFBRTtBQUFBO0FBQ3pFO0FBQ0EsZ0JBQWdCLHFGQUFNO0FBQ3RCLHlCQUF5Qiw4RkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTBLLENBQWdCLDhPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBOUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSwwRTs7Ozs7OztBQ0FBLHNFOzs7Ozs7O0FDQUEseUU7Ozs7Ozs7QUNBQSxzRTs7Ozs7OztBQ0FBLHNFOzs7Ozs7O0FDQUEsdUU7Ozs7Ozs7QUNBQSxzRTs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSx1RTs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSxnRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSx1Rjs7Ozs7OztBQ0FBLGdGOzs7Ozs7O0FDQUEscUY7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLG1EOzs7Ozs7O0FDQUEsNkM7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxvRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG5cbiAgICAgICAgPExpc3RWaWV3IGZvcj1cImNxIGluIENvaW5RcG9uc1wiIEBpdGVtVGFwPVwib25EZXRhaWxUYXBcIj5cbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJjcS5yZXN0YXVyYW50XCIgLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgIDwvTGlzdFZpZXc+XG5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBEZXRhaWxJbmZvIGZyb20gXCIuL0RldGFpbEluZm9cIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IFtcInRhcHBlZENvaW5zSW5kZXhcIiwgXCJxcG9uUGFzc1wiXSxcblxuICAgICAgICBhc3luYyBtb3VudGVkKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFwcGVkQ29pbnNJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Db2luUXBvbnMgPSB0aGlzLnFwb25QYXNzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAuY29pbnMgPD0gNTAwO1xuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhcHBlZENvaW5zSW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuQ29pblFwb25zID0gdGhpcy5xcG9uUGFzcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwLmNvaW5zID4gNTAwICYmIHAuY29pbnMgPCAxMDAwO1xuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhcHBlZENvaW5zSW5kZXggPT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuQ29pblFwb25zID0gdGhpcy5xcG9uUGFzcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwLmNvaW5zID49IDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uRGV0YWlsVGFwOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhEZXRhaWxJbmZvLCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29pbnNSZXN0SW5mbzogdGhpcy5Db2luUXBvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXBwZWRDb2luc0luZGV4OiBhcmdzLmluZGV4XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgQ29pblFwb25zOiBbXSxcbiAgICAgICAgICAgICAgICBSZXN0OiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cIlJlc3RJbmZvLmltYWdlTGlua1wiIGhlaWdodD1cIjMwMFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgLz5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJSZXN0SW5mby5yZXN0YXVyYW50XCIgY2xhc3M9XCJoMlwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiUmVzdEluZm8udGl0dGxlXCIgY2xhc3M9XCJoM1wiIC8+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJNYWxsOiBcIiBjbGFzcz1cImgzXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJSZXN0SW5mby5tYWxsXCIgY2xhc3M9XCJoM1wiIC8+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiQ29pbnM6IFwiIGNsYXNzPVwiaDNcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIlJlc3RJbmZvLmNvaW5zXCIgY2xhc3M9XCJoM1wiIC8+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJFeHBvaXJ5RGF0ZTogXCIgY2xhc3M9XCJoM1wiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiUmVzdEluZm8uZXhwaXJ5RGF0ZVwiIGNsYXNzPVwiaDNcIiAvPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgaGVpZ2h0PVwiMTAwXCI+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiaDIgLXByaW1hcnkgLXJvdW5kZWQtbGdcIiB0ZXh0PVwiUmVkZWVtXCJcbiAgICAgICAgICAgICAgICAgICAgQHRhcD1cIm9uUmVkZWVtVGFwXCIgd2lkdGg9XCIxODBcIiAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJoMiAtcHJpbWFyeSAtcm91bmRlZC1sZ1wiIHRleHQ9XCJBZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgQHRhcD1cIm9uTWFwVGFwXCIgd2lkdGg9XCIxODBcIiAvPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG5cbiAgICA8L1BhZ2U+XG5cblxuXG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE1hcCBmcm9tIFwiLi9NYXBcIjtcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICBcInJlc3RJbmZvXCIsXG4gICAgICAgICAgICBcInRhcHBlZFJlc3RJbmRleFwiLFxuICAgICAgICAgICAgXCJxcG9uUGFzc1wiLFxuICAgICAgICAgICAgXCJ0YXBwZWRSZXN0SURcIixcbiAgICAgICAgICAgIFwiY29pbnNSZXN0SW5mb1wiLFxuICAgICAgICAgICAgXCJ0YXBwZWRDb2luc0luZGV4XCIsXG4gICAgICAgICAgICBcInRhcHBlZE15UmVzdEluZGV4XCIsXG4gICAgICAgICAgICBcIm15UXBvblBhc3NcIlxuICAgICAgICBdLFxuICAgICAgICBhc3luYyBtb3VudGVkKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzdEluZm8pIHRoaXMuUmVzdEluZm8gPSB0aGlzLnJlc3RJbmZvW3RoaXNcbiAgICAgICAgICAgICAgICAudGFwcGVkUmVzdEluZGV4XTtcbiAgICAgICAgICAgIGlmICh0aGlzLnFwb25QYXNzKSB0aGlzLlJlc3RJbmZvID0gdGhpcy5xcG9uUGFzc1t0aGlzXG4gICAgICAgICAgICAgICAgLnRhcHBlZFJlc3RJRF07XG4gICAgICAgICAgICBpZiAodGhpcy5jb2luc1Jlc3RJbmZvKVxuICAgICAgICAgICAgICAgIHRoaXMuUmVzdEluZm8gPSB0aGlzLmNvaW5zUmVzdEluZm9bdGhpcy50YXBwZWRDb2luc0luZGV4XTtcbiAgICAgICAgICAgIGlmICh0aGlzLm15UXBvblBhc3MpXG4gICAgICAgICAgICAgICAgdGhpcy5SZXN0SW5mbyA9IHRoaXMubXlRcG9uUGFzc1t0aGlzLnRhcHBlZE15UmVzdEluZGV4XTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25NYXBUYXA6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLk1hcE1hbGxzID0gZ2xvYmFsLk1hbGxzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5MTWFsbCA9IHRoaXMuTWFwTWFsbHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcC5uYW1lID09IHRoaXMuUmVzdEluZm8ubWFsbDtcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTWFwLCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgTGFJbmZvOiB0aGlzLkxNYWxsWzBdLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgTG9JbmZvOiB0aGlzLkxNYWxsWzBdLmxvbmdpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hbGxOYW1lOiB0aGlzLlJlc3RJbmZvLm1hbGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUTyBNQVBcIik7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvblJlZGVlbVRhcDogYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGNvbmZpcm0oe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25maXJtIHRvIHJlZGVlbSB0aGlzIGNvdXBvbj9cIixcblxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmJhc2VVcmwgKyBcIi91c2VyL3Fwb25Pd25zL1wiICsgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLlJlc3RJbmZvLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZm8gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBhbGVydChpbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmZvID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgYWxlcnQoaW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFJlc3RJbmZvOiB7fSxcbiAgICAgICAgICAgICAgICBNYXBNYWxsczogW10sXG4gICAgICAgICAgICAgICAgTE1hbGw6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibS0xMFwiIG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBoZWlnaHQ9XCIxODBcIj5cblxuICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwibmFtZVZhbHVlXCIgaGludD1cIkVudGVyIHVzZXIgbmFtZS4uLlwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBcIiAvPlxuXG4gICAgICAgICAgICA8VGV4dEZpZWxkIGtleWJvYXJkVHlwZT1cInBob25lXCIgdi1tb2RlbD1cInBhc3N3b3JkVmFsdWVcIlxuICAgICAgICAgICAgICAgIGhpbnQ9XCJFbnRlciBwYXNzd29yZC4uLlwiIGhlaWdodD1cIjUwXCIgLz5cblxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImgyIC1wcmltYXJ5IC1yb3VuZGVkLWxnXCIgdGV4dD1cIkxvZ0luXCIgaGVpZ2h0PVwiNTBcIlxuICAgICAgICAgICAgICAgIEB0YXA9XCJQYXNzTG9nSU5cIiAvPlxuXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIFBhc3NMb2dJTjogYXN5bmMgZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdsb2JhbC5iYXNlVXJsICtcbiAgICAgICAgICAgICAgICBcIi91c2VyL2xvZ2luXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMubmFtZVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1c2VyID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYWxlcnQoXCJXZWxjb21lIGJhY2ssIFwiICsgdGhpcy5uYW1lVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWwudXNlcm5hbWUgPSB0aGlzLm5hbWVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVCYWNrKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZm8gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGFsZXJ0KGluZm8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxQYWdlPlxuICAgICAgICA8V2ViVmlldyA6c3JjPVwidXJsXCIgLz5cbiAgICA8L1BhZ2U+XG5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbXCJMYUluZm9cIiwgXCJMb0luZm9cIiwgXCJNYWxsTmFtZVwiXSxcbiAgICAgICAgYXN5bmMgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuTGFJbmZvKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuTG9JbmZvKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuTWFsbE5hbWUpO1xuICAgICAgICAgICAgdGhpcy51cmwgPSBlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgdGhpcy5SZXVybCArXG4gICAgICAgICAgICAgICAgXCJjZW50ZXI9XCIgK1xuICAgICAgICAgICAgICAgIHRoaXMuTGFJbmZvICtcbiAgICAgICAgICAgICAgICBcIixcIiArXG4gICAgICAgICAgICAgICAgdGhpcy5Mb0luZm8gK1xuICAgICAgICAgICAgICAgIFwiJnpvb209MTcmbWFya2VyPVwiICtcbiAgICAgICAgICAgICAgICB0aGlzLk1hbGxOYW1lICtcbiAgICAgICAgICAgICAgICBcInxcIiArXG4gICAgICAgICAgICAgICAgdGhpcy5MYUluZm8gK1xuICAgICAgICAgICAgICAgIFwiLFwiICtcbiAgICAgICAgICAgICAgICB0aGlzLkxvSW5mbyArXG4gICAgICAgICAgICAgICAgXCImc2Vuc29yPVwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51cmwpO1xuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBSZXVybDogXCJodHRwczovL2xlYWZsZXQtYXBpLnZlcmNlbC5hcHA/XCIsXG5cbiAgICAgICAgICAgICAgICB1cmw6IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9OyAvL1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuXG4gICAgICAgIDxMaXN0VmlldyBmb3I9XCJxcG9uIGluIE15UXBvbnNcIiBAaXRlbVRhcD1cIm9uRGV0YWlsVGFwXCI+XG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwicXBvbi5yZXN0YXVyYW50XCIgLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgIDwvTGlzdFZpZXc+XG5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBEZXRhaWxJbmZvIGZyb20gXCIuL0RldGFpbEluZm9cIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IFtcInFwb25QYXNzXCJdLFxuICAgICAgICBhc3luYyBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5NeVFwb25zID0gdGhpcy5xcG9uUGFzcztcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgICAgIG9uRGV0YWlsVGFwOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhEZXRhaWxJbmZvLCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFwcGVkTXlSZXN0SW5kZXg6IGFyZ3MuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBteVFwb25QYXNzOiB0aGlzLk15UXBvbnNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBNeVFwb25zOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgQGxvYWRlZD1cInJlZnJlc2hcIj5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkhvbWVcIiAvPlxuXG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uPlxuICAgICAgICAgICAgICAgIDxUYWJTdHJpcD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiSG9tZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vaG9tZVwiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJNYWxsc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vZmF2b3JpdGVzXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkNvaW5zXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9zZWFyY2hcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiVXNlclwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vYnJvd3NlXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9UYWJTdHJpcD5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cInFwb24gaW4gUXBvbnNcIiBAaXRlbVRhcD1cIm9uRGV0YWlsVGFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJxcG9uLmltYWdlTGlua1wiIGhlaWdodD1cIjMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaD1cImFzcGVjdEZpbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwicXBvbi5yZXN0YXVyYW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInFwb24uZGV0YWlsXCIgY2xhc3M9XCJoM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJDb2luczogXCIgY2xhc3M9XCJoM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJxcG9uLmNvaW5zXCIgY2xhc3M9XCJoM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RWaWV3PlxuXG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cIm1hbGwgaW4gTWFsbHNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cInJvd1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1hbGwubmFtZVwiIGNsYXNzPVwidC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RWaWV3PlxuXG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJjb2luIGluIENvaW5zXCIgQGl0ZW1UYXA9XCJvbkNvaW5zVGFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiY29pblwiIGNsYXNzPVwidC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJJbWFnZVNyY1wiIHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMTUwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJHbG9iYWxVTlwiIHRleHRBbGlnbm1lbnQ9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNTBcIiBoZWlnaHQ9XCIxNTBcIiBmb250U2l6ZT1cIjMwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiaDIgLXByaW1hcnkgLXJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJMb2dpbiAvIExvZ29mZlwiIEB0YXA9XCJsb2dJblRhcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiaDIgLXByaW1hcnkgLXJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJNeSBSZWRlZW1lZCBDb3Vwb25zXCIgQHRhcD1cIm15UXBvblRhcFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgUmVzdGF1cmFudCBmcm9tIFwiLi9SZXN0YXVyYW50XCI7XG4gICAgaW1wb3J0IENvaW5zUmFuZ2UgZnJvbSBcIi4vQ29pbnNSYW5nZVwiO1xuICAgIGltcG9ydCBEZXRhaWxJbmZvIGZyb20gXCIuL0RldGFpbEluZm9cIjtcbiAgICBpbXBvcnQgTG9nSW4gZnJvbSBcIi4vTG9nSW5cIjtcbiAgICBpbXBvcnQgTXlRcG9uIGZyb20gXCIuL015UXBvblwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBhc3luYyBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5HbG9iYWxVTiA9IGdsb2JhbC51c2VybmFtZTtcbiAgICAgICAgICAgIHRoaXMuTWFsbHMgPSBnbG9iYWwuTWFsbHM7XG4gICAgICAgICAgICB0aGlzLkltYWdlU3JjID0gXCJcIjtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdsb2JhbC5iYXNlVXJsKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRoaXMuUXBvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge31cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgcmVmcmVzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5HbG9iYWxVTiA9IGdsb2JhbC51c2VybmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICghZ2xvYmFsLnVzZXJuYW1lID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5JbWFnZVNyYyA9XG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vaTAuaGRzbGIuY29tL2Jmcy9hcmNoaXZlL2JiMmNiYThmNGY3NDYwNGNlNDcyNmYxMGZjYmI2NWM5OTdlZjQxZTcuanBnXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSXRlbVRhcDogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUmVzdGF1cmFudCwge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcHBlZE1hbGw6IGFyZ3MuaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXBvblBhc3M6IHRoaXMuUXBvbnNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRGV0YWlsVGFwOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhEZXRhaWxJbmZvLCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFwcGVkUmVzdElEOiBhcmdzLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgcXBvblBhc3M6IHRoaXMuUXBvbnNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ29pbnNUYXA6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKENvaW5zUmFuZ2UsIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXBwZWRDb2luc0luZGV4OiBhcmdzLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgcXBvblBhc3M6IHRoaXMuUXBvbnNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvZ0luVGFwOiBhc3luYyBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbC51c2VybmFtZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9nSW4sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBjb25maXJtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm0gdG8gbG9nb2ZmP1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlllc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuYmFzZVVybCArIFwiL3VzZXIvbG9nb3V0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwudXNlcm5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JbWFnZVNyYyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdsb2JhbFVOID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmZvID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGFsZXJ0KGluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbXlRcG9uVGFwOiBhc3luYyBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2xvYmFsLmJhc2VVcmwgK1xuICAgICAgICAgICAgICAgICAgICBcIi91c2VyL3Fwb25Pd25zXCIpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk15UXBvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKE15UXBvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHFwb25QYXNzOiB0aGlzLk15UXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYWxlcnQoaW5mbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBDb2luczogW1wiQ29pbnMgPD01MDAgXCIsIFwiNTAwIDwgQ29pbnMgPCAxMDAwIFwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNvaW5zID49IDEwMDAgXCJcbiAgICAgICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICAgICAgTWFsbHM6IFtdLFxuXG4gICAgICAgICAgICAgICAgUXBvbnM6IFtdLFxuXG4gICAgICAgICAgICAgICAgTXlRcG9uOiBbXSxcblxuICAgICAgICAgICAgICAgIEdsb2JhbFVOOiBcIlwiLFxuXG4gICAgICAgICAgICAgICAgSW1hZ2VTcmM6IFwiaHR0cHM6Ly9pMC5oZHNsYi5jb20vYmZzL2FyY2hpdmUvYmIyY2JhOGY0Zjc0NjA0Y2U0NzI2ZjEwZmNiYjY1Yzk5N2VmNDFlNy5qcGdcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuXG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLmhvbWUtcGFuZWwge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDIwO1xuICAgICAgICBtYXJnaW46IDE1O1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1O1xuICAgIH1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuXG4gICAgICAgIDxMaXN0VmlldyBmb3I9XCJyZXN0IGluIFJlc3RcIiBAaXRlbVRhcD1cIm9uRGVJZm9UYXBcIj5cbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJyZXN0LnJlc3RhdXJhbnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgPC9MaXN0Vmlldz5cblxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IERldGFpbEluZm8gZnJvbSBcIi4vRGV0YWlsSW5mb1wiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczogW1widGFwcGVkTWFsbFwiLCBcInFwb25QYXNzXCJdLFxuXG4gICAgICAgIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLlJlc3QgPSB0aGlzLnFwb25QYXNzLmZpbHRlcihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwLm1hbGwgPT0gdGhpcy50YXBwZWRNYWxsO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy50YXBwZWRNYWxsICsgXCIqKlwiKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbkRlSWZvVGFwOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhEZXRhaWxJbmZvLCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdEluZm86IHRoaXMuUmVzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcHBlZFJlc3RJbmRleDogYXJncy5pbmRleFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFFwb25zOiBbXSxcblxuICAgICAgICAgICAgICAgIFJlc3Q6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmhvbWUtcGFuZWxbZGF0YS12LTcxZDRmNmY5XSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcbi5kZXNjcmlwdGlvbi1sYWJlbFtkYXRhLXYtNzFkNGY2ZjldIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9RUE9OLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5Db2luUXBvbnMsIFwiK2FsaWFzXCI6IFwiY3FcIiB9LFxuICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkRldGFpbFRhcCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBjcSA9IHJlZi5jcVxuICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBjcS5yZXN0YXVyYW50IH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uUmVzdEluZm8uaW1hZ2VMaW5rLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLlJlc3RJbmZvLnJlc3RhdXJhbnQgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uUmVzdEluZm8udGl0dGxlIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImgzXCIsIGF0dHJzOiB7IHRleHQ6IFwiTWFsbDogXCIgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uUmVzdEluZm8ubWFsbCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJoM1wiLCBhdHRyczogeyB0ZXh0OiBcIkNvaW5zOiBcIiB9IH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5SZXN0SW5mby5jb2lucyB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgzXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJFeHBvaXJ5RGF0ZTogXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uUmVzdEluZm8uZXhwaXJ5RGF0ZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiwgaGVpZ2h0OiBcIjEwMFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIC1wcmltYXJ5IC1yb3VuZGVkLWxnXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJSZWRlZW1cIiwgd2lkdGg6IFwiMTgwXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vblJlZGVlbVRhcCB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDIgLXByaW1hcnkgLXJvdW5kZWQtbGdcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFkZHJlc3NcIiwgd2lkdGg6IFwiMTgwXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbk1hcFRhcCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS0xMFwiLFxuICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsIGhlaWdodDogXCIxODBcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBoaW50OiBcIkVudGVyIHVzZXIgbmFtZS4uLlwiLCBoZWlnaHQ6IFwiNTBcIiB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5uYW1lVmFsdWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0ubmFtZVZhbHVlID0gJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuYW1lVmFsdWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJwaG9uZVwiLFxuICAgICAgICAgICAgICBoaW50OiBcIkVudGVyIHBhc3N3b3JkLi4uXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXNzd29yZFZhbHVlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkVmFsdWUgPSAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3N3b3JkVmFsdWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIC1wcmltYXJ5IC1yb3VuZGVkLWxnXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxvZ0luXCIsIGhlaWdodDogXCI1MFwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5QYXNzTG9nSU4gfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJQYWdlXCIsIFtfYyhcIldlYlZpZXdcIiwgeyBhdHRyczogeyBzcmM6IF92bS51cmwgfSB9KV0sIDEpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5NeVFwb25zLCBcIithbGlhc1wiOiBcInFwb25cIiB9LFxuICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkRldGFpbFRhcCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBxcG9uID0gcmVmLnFwb25cbiAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogcXBvbi5yZXN0YXVyYW50IH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBvbjogeyBsb2FkZWQ6IF92bS5yZWZyZXNoIH0gfSxcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIkhvbWVcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJCb3R0b21OYXZpZ2F0aW9uXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIkhvbWVcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IFwicmVzOi8vaG9tZVwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiTWFsbHNcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IFwicmVzOi8vZmF2b3JpdGVzXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJDb2luc1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogXCJyZXM6Ly9zZWFyY2hcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIlVzZXJcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IFwicmVzOi8vYnJvd3NlXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5RcG9ucywgXCIrYWxpYXNcIjogXCJxcG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25EZXRhaWxUYXAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcXBvbiA9IHJlZi5xcG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBxcG9uLmltYWdlTGluayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0RmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IHFwb24ucmVzdGF1cmFudCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IHFwb24uZGV0YWlsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNvaW5zOiBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IHFwb24uY29pbnMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uTWFsbHMsIFwiK2FsaWFzXCI6IFwibWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYWxsID0gcmVmLm1hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IG1hbGwubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5Db2lucywgXCIrYWxpYXNcIjogXCJjb2luXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25Db2luc1RhcCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2luID0gcmVmLmNvaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGNvaW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB3aWR0aDogXCI1MFwiLCBoZWlnaHQ6IFwiNTBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uSW1hZ2VTcmMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uR2xvYmFsVU4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgd2lkdGg6IFwiMTAwXCIsIGhlaWdodDogXCIxMDBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIC1wcmltYXJ5IC1yb3VuZGVkLWxnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxvZ2luIC8gTG9nb2ZmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmxvZ0luVGFwIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMiAtcHJpbWFyeSAtcm91bmRlZC1sZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJNeSBSZWRlZW1lZCBDb3Vwb25zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm15UXBvblRhcCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5SZXN0LCBcIithbGlhc1wiOiBcInJlc3RcIiB9LFxuICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkRlSWZvVGFwIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgdmFyIHJlc3QgPSByZWYucmVzdFxuICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiByZXN0LnJlc3RhdXJhbnQgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3xrdHwoPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzJ1wifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzcydcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5cbmltcG9ydCBRUE9OIGZyb20gJy4vY29tcG9uZW50cy9RUE9OJztcblxuLy8gVW5jb21tbWVudCB0aGUgZm9sbG93aW5nIHRvIHNlZSBOYXRpdmVTY3JpcHQtVnVlIG91dHB1dCBsb2dzXG4vLyBWdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xuZ2xvYmFsLmJhc2VVcmwgPSBcImh0dHA6Ly8zZDI0NzhmNTZiMTYubmdyb2suaW9cIjtcblxuZ2xvYmFsLnVzZXJuYW1lID0gXCJcIjtcblxuZ2xvYmFsLk1hbGxzID1cblxuICAgIFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSUZDIE1hbGxcIixcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMjIuMjg0OSxcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDExNC4xNTg5MTdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGFjaWZpYyBQbGFjZVwiLFxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAyMi4yNzc0OTg1LFxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTE0LjE2NjMyMjVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGltZXMgU3F1YXJlXCIsXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDIyLjI3ODIwNzksXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTgyMjk5NFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJFbGVtZW50c1wiLFxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAyMi4zMDQ4NzA4LFxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTE0LjE2MTUyMTlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGFyYm91ciBDaXR5XCIsXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDIyLjI5NTA2ODksXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTY2ODY2MVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJGZXN0aXZhbCBXYWxrXCIsXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDIyLjMzNzI5NzEsXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTc0NTI3M1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJNZWdhQm94XCIsXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDIyLjMxOTg1NyxcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDExNC4yMDgxNjhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQVBNXCIsXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDIyLjMxMjE3MzgsXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxMTQuMjI1MTMyMTk5OTk5OTZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiVHN1ZW4gV2FuIFBsYXphXCIsXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDIyLjM3MDczNSxcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDExNC4xMTEzMDlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmV3IFRvd24gUGxhemFcIixcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMjIuMzgxNDU5MixcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDExNC4xODg5MzA3XG4gICAgICAgIH1cbiAgICBdXG5uZXcgVnVlKHtcblxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxGcmFtZT5cbiAgICAgICAgICAgIDxRUE9OIC8+XG4gICAgICAgIDwvRnJhbWU+YCxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgUVBPTlxuICAgIH1cbn0pLiRzdGFydCgpOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ29pbnNSYW5nZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJiMGQ3MTQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29pbnNSYW5nZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvaW5zUmFuZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvcGh4amkvUU1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1YmIwZDcxNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1YmIwZDcxNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1YmIwZDcxNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29pbnNSYW5nZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJiMGQ3MTQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWJiMGQ3MTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvQ29pbnNSYW5nZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29pbnNSYW5nZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db2luc1JhbmdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db2luc1JhbmdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YmIwZDcxNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGV0YWlsSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjQ4NjQ2OGMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGV0YWlsSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0RldGFpbEluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvcGh4amkvUU1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyNDg2NDY4YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNDg2NDY4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNDg2NDY4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRGV0YWlsSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjQ4NjQ2OGMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjQ4NjQ2OGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvRGV0YWlsSW5mby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGV0YWlsSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZXRhaWxJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZXRhaWxJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNDg2NDY4YyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9nSW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4MmFhYWJlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ0luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9nSW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvcGh4amkvUU1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2ODJhYWFiZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ODJhYWFiZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ODJhYWFiZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9nSW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4MmFhYWJlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY4MmFhYWJlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0xvZ0luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dJbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dJbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9nSW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4MmFhYWJlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlNTRlNjUxJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9waHhqaS9RTW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNlNTRlNjUxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNlNTRlNjUxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNlNTRlNjUxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlNTRlNjUxJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNlNTRlNjUxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL01hcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTU0ZTY1MSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXlRcG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTE4YjdiNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NeVFwb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NeVFwb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvcGh4amkvUU1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmYTE4YjdiNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmYTE4YjdiNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmYTE4YjdiNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXlRcG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTE4YjdiNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmYTE4YjdiNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9NeVFwb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL015UXBvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeVFwb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL015UXBvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmExOGI3YjYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1FQT04udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxZDRmNmY5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1FQT04udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9RUE9OLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9RUE9OLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcxZDRmNmY5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3MWQ0ZjZmOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9waHhqaS9RTW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzcxZDRmNmY5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzcxZDRmNmY5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzcxZDRmNmY5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9RUE9OLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MWQ0ZjZmOSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3MWQ0ZjZmOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9RUE9OLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RUE9OLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1FQT04udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUVBPTi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MWQ0ZjZmOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RUE9OLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MWQ0ZjZmOSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmVzdGF1cmFudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2FlMzZmNTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVzdGF1cmFudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Jlc3RhdXJhbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvcGh4amkvUU1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczYWUzNmY1MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYWUzNmY1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYWUzNmY1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVzdGF1cmFudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2FlMzZmNTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2FlMzZmNTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvUmVzdGF1cmFudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVzdGF1cmFudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXN0YXVyYW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXN0YXVyYW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYWUzNmY1MCZcIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS90ZXh0L3NwYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2FjdGlvbi1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2FjdGl2aXR5LWluZGljYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYm9yZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9ib3R0b20tbmF2aWdhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9jb250ZW50LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2NvcmUvdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZGF0ZS1waWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9odG1sLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZG9jay1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvbGF5b3V0LWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3dyYXAtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9saXN0LXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wbGFjZWhvbGRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3Byb3h5LXZpZXctY29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zY3JvbGwtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2VhcmNoLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2VnbWVudGVkLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2xpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zd2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLWNvbnRlbnQtaXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwLWl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90ZXh0LWZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90ZXh0LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RpbWUtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS93ZWItdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdXRpbHMvdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3htbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdnVlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=