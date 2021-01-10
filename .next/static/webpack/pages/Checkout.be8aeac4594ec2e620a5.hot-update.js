webpackHotUpdate_N_E("pages/Checkout",{

/***/ "./components/CheckoutHome/index.js":
/*!******************************************!*\
  !*** ./components/CheckoutHome/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CheckoutProduct_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CheckoutProduct/index */ "./components/CheckoutProduct/index.js");
/* harmony import */ var _ContextApi_StateProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ContextApi/StateProvider */ "./components/ContextApi/StateProvider.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/CheckoutHome/style.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\reactProject\\next-js-sc-app\\components\\CheckoutHome\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






var Checkout = function Checkout() {
  _s();

  var _useStateValue = Object(_ContextApi_StateProvider__WEBPACK_IMPORTED_MODULE_4__["useStateValue"])(),
      _useStateValue2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useStateValue, 2),
      basket = _useStateValue2[0].basket,
      dispatch = _useStateValue2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_5__["Checkouth1"], {
      children: "Your Basket"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_5__["CheckoutList"], {
      children: basket.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_CheckoutProduct_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: id,
          li1: li1,
          li2: li2,
          li3: li3,
          li4: li4,
          price: price,
          origin: origin,
          img: img
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Checkout, "ke4Wf0W5QPRXRitrQt8Q9vZeM+s=", false, function () {
  return [_ContextApi_StateProvider__WEBPACK_IMPORTED_MODULE_4__["useStateValue"]];
});

_c = Checkout;
/* harmony default export */ __webpack_exports__["default"] = (Checkout);

var _c;

$RefreshReg$(_c, "Checkout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dEhvbWUvaW5kZXguanMiXSwibmFtZXMiOlsiQ2hlY2tvdXQiLCJ1c2VTdGF0ZVZhbHVlIiwiYmFza2V0IiwiZGlzcGF0Y2giLCJtYXAiLCJpdGVtIiwiaWQiLCJsaTEiLCJsaTIiLCJsaTMiLCJsaTQiLCJwcmljZSIsIm9yaWdpbiIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLHVCQUVZQywrRUFBYSxFQUZ6QjtBQUFBO0FBQUEsTUFFVkMsTUFGVSxzQkFFVkEsTUFGVTtBQUFBLE1BRUFDLFFBRkE7O0FBSW5CLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJLHFFQUFDLG1EQUFEO0FBQUEsZ0JBQ0tELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUFDLElBQUk7QUFBQSw0QkFDWixxRUFBQyw4REFBRDtBQUNBLFlBQUUsRUFBR0MsRUFETDtBQUVBLGFBQUcsRUFBR0MsR0FGTjtBQUdBLGFBQUcsRUFBR0MsR0FITjtBQUlBLGFBQUcsRUFBR0MsR0FKTjtBQUtBLGFBQUcsRUFBR0MsR0FMTjtBQU1BLGVBQUssRUFBRUMsS0FOUDtBQU9BLGdCQUFNLEVBQUVDLE1BUFI7QUFRQSxhQUFHLEVBQUVDO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEWTtBQUFBLE9BQWY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFESjtBQW1CSCxDQXZCRDs7R0FBTWIsUTtVQUU2QkMsdUU7OztLQUY3QkQsUTtBQXlCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ2hlY2tvdXQuYmU4YWVhYzQ1OTRlYzJlNjIwYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENoZWNrb3V0UHJvZHVjdCBmcm9tICcuLi9DaGVja291dFByb2R1Y3QvaW5kZXgnXHJcbmltcG9ydCB7dXNlU3RhdGVWYWx1ZX0gZnJvbSAnLi4vQ29udGV4dEFwaS9TdGF0ZVByb3ZpZGVyJztcclxuaW1wb3J0IHtDaGVja291dGgxLCBDaGVja291dExpc3R9IGZyb20gJy4vc3R5bGUnXHJcblxyXG5cclxuY29uc3QgQ2hlY2tvdXQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgWyB7YmFza2V0IH0sIGRpc3BhdGNoXSA9IHVzZVN0YXRlVmFsdWUoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDaGVja291dGgxPllvdXIgQmFza2V0PC9DaGVja291dGgxPlxyXG4gICAgICAgICAgICA8Q2hlY2tvdXRMaXN0PlxyXG4gICAgICAgICAgICAgICAge2Jhc2tldC5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrb3V0UHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPSB7aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgbGkxPSB7bGkxfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpMj0ge2xpMn1cclxuICAgICAgICAgICAgICAgICAgICBsaTM9IHtsaTN9XHJcbiAgICAgICAgICAgICAgICAgICAgbGk0PSB7bGk0fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW49e29yaWdpbn1cclxuICAgICAgICAgICAgICAgICAgICBpbWc9e2ltZ30gLz5cclxuICAgICAgICAgICAgICAgICkgKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NoZWNrb3V0TGlzdD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==