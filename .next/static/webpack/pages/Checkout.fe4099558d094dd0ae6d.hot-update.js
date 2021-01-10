webpackHotUpdate_N_E("pages/Checkout",{

/***/ "./components/CheckoutProduct/index.js":
/*!*********************************************!*\
  !*** ./components/CheckoutProduct/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/CheckoutProduct/style.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\reactProject\\next-js-sc-app\\components\\CheckoutProduct\\index.js",
    _this = undefined;




var CheckoutProduct = function CheckoutProduct(img, origin, price) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["ProductFlex"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["ProductImage"], {
        src: img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["ProductInfo"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["ProductTitle"], {
          children: origin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["ProductPrice"], {
          children: [" ", price, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_c = CheckoutProduct;
/* harmony default export */ __webpack_exports__["default"] = (CheckoutProduct);

var _c;

$RefreshReg$(_c, "CheckoutProduct");

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

/***/ }),

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
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dFByb2R1Y3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0L3N0eWxlLmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0UHJvZHVjdCIsImltZyIsIm9yaWdpbiIsInByaWNlIiwiUHJvZHVjdEZsZXgiLCJzdHlsZWQiLCJkaXYiLCJQcm9kdWN0SW5mbyIsIlByb2R1Y3RUaXRsZSIsImgxIiwiUHJvZHVjdFByaWNlIiwiaDIiLCJTdHlsZWRJbWciLCJJbWFnZSIsIlByb2R1Y3RJbWFnZSIsInNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBUUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBY0MsS0FBZCxFQUF3QjtBQUM1QyxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLGtEQUFEO0FBQUEsOEJBQ0kscUVBQUMsbURBQUQ7QUFBYyxXQUFHLEVBQUVGO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLHFFQUFDLGtEQUFEO0FBQUEsZ0NBQ0kscUVBQUMsbURBQUQ7QUFBQSxvQkFBZUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUkscUVBQUMsbURBQUQ7QUFBQSwwQkFBZ0JDLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQVdILENBWkQ7O0tBQU1ILGU7QUFjU0EsOEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFTyxJQUFNSSxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWpCO0FBTUEsSUFBTUMsV0FBVyxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFqQjtBQU9BLElBQU1FLFlBQVksR0FBR0gseURBQU0sQ0FBQ0ksRUFBVixvQkFBbEI7QUFNQSxJQUFNQyxZQUFZLEdBQUdMLHlEQUFNLENBQUNNLEVBQVYsb0JBQWxCO0FBT1AsSUFBTUMsU0FBUyxHQUFHUCxpRUFBTSxDQUFDUSxLQUFELENBQVQsb0JBQWY7S0FBTUQsUztBQUdDLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWE7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFDckMsc0JBQ0UscUVBQUMsU0FBRDtBQUFXLE9BQUcsRUFBRUEsR0FBaEI7QUFBcUIsU0FBSyxFQUFFLEdBQTVCO0FBQWlDLFVBQU0sRUFBRTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFJRixDQUxLO01BQU1ELFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ2hlY2tvdXQuZmU0MDk5NTU4ZDA5NGRkMGFlNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICAgIFByb2R1Y3RGbGV4LCBcclxuICAgIFByb2R1Y3RJbWFnZSwgXHJcbiAgICBQcm9kdWN0SW5mbywgXHJcbiAgICBQcm9kdWN0VGl0bGUsXHJcbiAgICBQcm9kdWN0UHJpY2UsXHJcbn0gZnJvbSAnLi9zdHlsZSc7XHJcblxyXG5jb25zdCBDaGVja291dFByb2R1Y3QgPSAoaW1nLCBvcmlnaW4sIHByaWNlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxQcm9kdWN0RmxleD5cclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0SW1hZ2Ugc3JjPXtpbWd9IC8+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUaXRsZT57b3JpZ2lufTwvUHJvZHVjdFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0UHJpY2U+IHtwcmljZX0gPC9Qcm9kdWN0UHJpY2U+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2R1Y3RJbmZvPlxyXG4gICAgICAgICAgICA8L1Byb2R1Y3RGbGV4PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja291dFByb2R1Y3RcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdEZsZXggPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXggO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0SW5mbyA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYWxpZ24taXRlbXM6ZmxleC1zdGFydCA7IFxyXG5qdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydCA7IFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RUaXRsZSA9IHN0eWxlZC5oMWBcclxuZm9udC1zaXplOiAyNnB4O1xyXG5mb250LXdlaWdodDogOTAwO1xyXG5jb2xvcjogIzAwMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0UHJpY2UgPSBzdHlsZWQuaDJgXHJcbmZvbnQtc2l6ZTogMjJweDtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuY29sb3I6ICM2NjY7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgU3R5bGVkSW1nID0gc3R5bGVkKEltYWdlKWBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0SW1hZ2UgPSAoeyBzcmMgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZEltZyBzcmM9e3NyY30gd2lkdGg9ezQ1MH0gaGVpZ2h0PXs0NTB9IC8+XHJcbiAgICAgIFxyXG4gICAgKTtcclxuIH07Il0sInNvdXJjZVJvb3QiOiIifQ==