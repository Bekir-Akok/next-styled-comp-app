webpackHotUpdate_N_E("pages/Checkout",{

/***/ "./components/CheckoutProduct/style.js":
/*!*********************************************!*\
  !*** ./components/CheckoutProduct/style.js ***!
  \*********************************************/
/*! exports provided: ProductFlex, ProductInfo, ProductTitle, ProductPrice, ProductImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFlex", function() { return ProductFlex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfo", function() { return ProductInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTitle", function() { return ProductTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPrice", function() { return ProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductImage", function() { return ProductImage; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\reactProject\\next-js-sc-app\\components\\CheckoutProduct\\style.js",
    _this = undefined;

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nfont-size: 22px;\nfont-weight: 700;\ncolor: #666;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nfont-size: 26px;\nfont-weight: 900;\ncolor: #000;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\ndisplay:flex;\nflex-direction: column;\nalign-items:flex-start ; \njustify-content:flex-start ; \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\ndisplay:flex ;\nalign-items:center;\njustify-content: flex-start;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ProductFlex = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var ProductTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject3());
var ProductPrice = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject4());
var StyledImg = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Image)(_templateObject5());
_c = StyledImg;
var ProductImage = function ProductImage(_ref) {
  var src = _ref.src;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(StyledImg, {
    src: src,
    width: 450,
    height: 450
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }, _this);
};
_c2 = ProductImage;

var _c, _c2;

$RefreshReg$(_c, "StyledImg");
$RefreshReg$(_c2, "ProductImage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dFByb2R1Y3Qvc3R5bGUuanMiXSwibmFtZXMiOlsiUHJvZHVjdEZsZXgiLCJzdHlsZWQiLCJkaXYiLCJQcm9kdWN0SW5mbyIsIlByb2R1Y3RUaXRsZSIsImgxIiwiUHJvZHVjdFByaWNlIiwiaDIiLCJTdHlsZWRJbWciLCJJbWFnZSIsIlByb2R1Y3RJbWFnZSIsInNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR08sSUFBTUEsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFqQjtBQU1BLElBQU1DLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBakI7QUFPQSxJQUFNRSxZQUFZLEdBQUdILHlEQUFNLENBQUNJLEVBQVYsb0JBQWxCO0FBTUEsSUFBTUMsWUFBWSxHQUFHTCx5REFBTSxDQUFDTSxFQUFWLG9CQUFsQjtBQU9QLElBQU1DLFNBQVMsR0FBR1AsaUVBQU0sQ0FBQ1EsS0FBRCxDQUFULG9CQUFmO0tBQU1ELFM7QUFHQyxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFhO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQ3JDLHNCQUNFLHFFQUFDLFNBQUQ7QUFBVyxPQUFHLEVBQUVBLEdBQWhCO0FBQXFCLFNBQUssRUFBRSxHQUE1QjtBQUFpQyxVQUFNLEVBQUU7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBSUYsQ0FMSztNQUFNRCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NoZWNrb3V0LmRlYjIxZjY2ZDk4ZGMzOGFlODIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdEZsZXggPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXggO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0SW5mbyA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYWxpZ24taXRlbXM6ZmxleC1zdGFydCA7IFxyXG5qdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydCA7IFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RUaXRsZSA9IHN0eWxlZC5oMWBcclxuZm9udC1zaXplOiAyNnB4O1xyXG5mb250LXdlaWdodDogOTAwO1xyXG5jb2xvcjogIzAwMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0UHJpY2UgPSBzdHlsZWQuaDJgXHJcbmZvbnQtc2l6ZTogMjJweDtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuY29sb3I6ICM2NjY7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgU3R5bGVkSW1nID0gc3R5bGVkKEltYWdlKWBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0SW1hZ2UgPSAoeyBzcmMgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZEltZyBzcmM9e3NyY30gd2lkdGg9ezQ1MH0gaGVpZ2h0PXs0NTB9IC8+XHJcbiAgICAgIFxyXG4gICAgKTtcclxuIH07Il0sInNvdXJjZVJvb3QiOiIifQ==