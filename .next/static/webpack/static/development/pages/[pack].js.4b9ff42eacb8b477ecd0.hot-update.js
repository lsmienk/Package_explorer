webpackHotUpdate("static/development/pages/[pack].js",{

/***/ "./pages/[pack].js":
/*!*************************!*\
  !*** ./pages/[pack].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/lsmienk/Codam/reaktor_tech_assignment/pages/[pack].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var PackageInfo = function PackageInfo(_ref) {
  var packages = _ref.packages,
      url = _ref.url;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var pack = router.query.pack;
  var packageInfo = packages.find(function (item) {
    return item.Package === pack;
  });
  return __jsx("div", {
    className: "jsx-626102376",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-626102376",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Package Explorer - ", pack), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-626102376",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("h1", {
    className: "jsx-626102376",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Subpage: ", pack), packageInfo && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(packageInfo).map(function (key) {
    return __jsx("h4", {
      className: "jsx-626102376" + " " + "items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, key, ": ", packageInfo[key]);
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "626102376",
    __self: this
  }, ".items.jsx-626102376{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sc21pZW5rL0NvZGFtL3JlYWt0b3JfdGVjaF9hc3NpZ25tZW50L3BhZ2VzL1twYWNrXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qm9CLEFBR3VCLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2xzbWllbmsvQ29kYW0vcmVha3Rvcl90ZWNoX2Fzc2lnbm1lbnQvcGFnZXMvW3BhY2tdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgUGFja2FnZUluZm8gPSAoeyBwYWNrYWdlcywgdXJsIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IHsgcGFjayB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gICAgY29uc3QgcGFja2FnZUluZm8gPSBwYWNrYWdlcy5maW5kKChpdGVtKSA9PiBpdGVtLlBhY2thZ2UgPT09IHBhY2spO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlBhY2thZ2UgRXhwbG9yZXIgLSB7cGFja308L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxoMT5TdWJwYWdlOiB7cGFja308L2gxPlxuICAgICAgICAgICAge3BhY2thZ2VJbmZvICYmIE9iamVjdC5rZXlzKHBhY2thZ2VJbmZvKVxuICAgICAgICAgICAgICAgIC5tYXAoKGtleSkgPT4gXG4gICAgICAgICAgICAgICAgKDxoNCBjbGFzc05hbWU9XCJpdGVtc1wiPntrZXl9OiB7cGFja2FnZUluZm9ba2V5XX08L2g0PikpfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pdGVtcyB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cblBhY2thZ2VJbmZvLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wYWNrYWdlcycpXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHsgcGFja2FnZXM6IGpzb24gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlSW5mb1xuIl19 */\n/*@ sourceURL=/Users/lsmienk/Codam/reaktor_tech_assignment/pages/[pack].js */"));
};

PackageInfo.getInitialProps = function _callee() {
  var res, json;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3000/api/packages'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          json = _context.sent;
          return _context.abrupt("return", {
            packages: json
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PackageInfo);

/***/ })

})
//# sourceMappingURL=[pack].js.4b9ff42eacb8b477ecd0.hot-update.js.map