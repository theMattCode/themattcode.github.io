webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Head.jsx":
/*!*****************************!*\
  !*** ./components/Head.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/mm/dev/www.mayer.pub/components/Head.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Head =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Head, _React$Component);

  function Head() {
    _classCallCheck(this, Head);

    return _possibleConstructorReturn(this, _getPrototypeOf(Head).apply(this, arguments));
  }

  _createClass(Head, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3092003364",
        css: "body{font-family:'Roboto',sans-serif;font-size:1.15rem;line-height:1.15rem;margin:15px;}main{min-height:100px;max-width:768px;-webkit-flex:1;-ms-flex:1;flex:1;}div#__next{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 auto;min-height:100vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbS9kZXYvd3d3Lm1heWVyLnB1Yi9jb21wb25lbnRzL0hlYWQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVF1QixBQUd3QyxBQU1oQixBQUtKLGlCQUpHLGVBTkUsQ0FPWCxpQkFOYSxnQkFPckIsSUFOYSxJQVNFLFFBUmYsTUFTa0IsaUJBQ0ssOEVBQ0gsNkZBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9tbS9kZXYvd3d3Lm1heWVyLnB1Yi9jb21wb25lbnRzL0hlYWQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY2xhc3MgSGVhZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjE1cmVtO1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMTVyZW07XG5cdFx0XHRcdFx0XHRtYXJnaW46IDE1cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1haW4ge1xuXHRcdFx0XHRcdFx0bWluLWhlaWdodDogMTAwcHg7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDc2OHB4O1xuXHRcdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGl2I19fbmV4dCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8TmV4dEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPnt0aGlzLnByb3BzLnRpdGxlfTwvdGl0bGU+XG5cdFx0XHRcdFx0PG1ldGEgY2hhclNldD0ndXRmLTgnLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcvPlxuXHRcdFx0XHRcdDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwJyByZWw9J3N0eWxlc2hlZXQnLz5cblx0XHRcdFx0PC9OZXh0SGVhZD5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KVxuXHR9XG59XG5cbkhlYWQucHJvcFR5cGVzID0ge1xuXHR0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZCJdfQ== */\n/*@ sourceURL=/Users/mm/dev/www.mayer.pub/components/Head.jsx */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-3092003364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        charSet: "utf-8",
        className: "jsx-3092003364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-3092003364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:300",
        rel: "stylesheet",
        className: "jsx-3092003364",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })));
    }
  }]);

  return Head;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ })

})
//# sourceMappingURL=index.js.ebbabb1fc2c419556c92.hot-update.js.map