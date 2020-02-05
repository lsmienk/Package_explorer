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





function App() {
  return __jsx("div", {
    style: {
      backgroundColor: 'blue',
      width: '100px',
      height: '100px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
}

var PackageInfo = function PackageInfo(_ref) {
  var packages = _ref.packages,
      url = _ref.url;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var pack = router.query.pack;
  var packageInfo = packages.find(function (item) {
    return item.Package === pack;
  });
  return __jsx("div", {
    className: "jsx-3628331076",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3628331076",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Package Explorer - ", pack), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3628331076",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("h1", {
    className: "jsx-3628331076",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Subpage: ", pack), packageInfo && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(packageInfo).map(function (key) {
    return __jsx("h4", {
      "class": "items",
      className: "jsx-3628331076",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, key, ": ", packageInfo[key]);
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3628331076",
    __self: this
  }, ".items.jsx-3628331076{padding:18px 18px 24px;display:cent;width:220px;height:125px;text-align:center;-webkit-text-decoration:none;text-decoration:none;color:black;border:1px solid #9b9b9b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sc21pZW5rL0NvZGFtL3JlYWt0b3JfdGVjaF9hc3NpZ25tZW50L3BhZ2VzL1twYWNrXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ29CLEFBR2tDLHVCQUNWLGFBQ0QsWUFDQyxhQUNLLGtCQUNHLGtEQUNULFlBQ2EseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9sc21pZW5rL0NvZGFtL3JlYWt0b3JfdGVjaF9hc3NpZ25tZW50L3BhZ2VzL1twYWNrXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwcHgnLFxuICAgICAgICAgIGhlaWdodDogJzEwMHB4J1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApO1xufVxuXG5jb25zdCBQYWNrYWdlSW5mbyA9ICh7IHBhY2thZ2VzLCB1cmwgfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgeyBwYWNrIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICBjb25zdCBwYWNrYWdlSW5mbyA9IHBhY2thZ2VzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uUGFja2FnZSA9PT0gcGFjayk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+UGFja2FnZSBFeHBsb3JlciAtIHtwYWNrfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGgxPlN1YnBhZ2U6IHtwYWNrfTwvaDE+XG4gICAgICAgICAgICB7cGFja2FnZUluZm8gJiYgT2JqZWN0LmtleXMocGFja2FnZUluZm8pXG4gICAgICAgICAgICAgICAgLm1hcCgoa2V5KSA9PiBcbiAgICAgICAgICAgICAgICAoPGg0IGNsYXNzPVwiaXRlbXNcIj57a2V5fToge3BhY2thZ2VJbmZvW2tleV19PC9oND4pKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaXRlbXMge1xuICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweCAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGNlbnQ7XG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5QYWNrYWdlSW5mby5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcGFja2FnZXMnKVxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiB7IHBhY2thZ2VzOiBqc29uIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZUluZm9cbiJdfQ== */\n/*@ sourceURL=/Users/lsmienk/Codam/reaktor_tech_assignment/pages/[pack].js */"));
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
//# sourceMappingURL=[pack].js.3107318c74fe500ef1d8.hot-update.js.map