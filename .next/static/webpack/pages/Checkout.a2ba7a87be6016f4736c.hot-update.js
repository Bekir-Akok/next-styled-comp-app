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
      children: basket.map(function (pro, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_CheckoutProduct_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: item.id,
          price: item.price,
          origin: item.origin,
          img: item.img
        }, i, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dEhvbWUvaW5kZXguanMiXSwibmFtZXMiOlsiQ2hlY2tvdXQiLCJ1c2VTdGF0ZVZhbHVlIiwiYmFza2V0IiwiZGlzcGF0Y2giLCJtYXAiLCJwcm8iLCJpIiwiaXRlbSIsImlkIiwicHJpY2UiLCJvcmlnaW4iLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSx1QkFFWUMsK0VBQWEsRUFGekI7QUFBQTtBQUFBLE1BRVZDLE1BRlUsc0JBRVZBLE1BRlU7QUFBQSxNQUVBQyxRQUZBOztBQUluQixzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSxxRUFBQyxtREFBRDtBQUFBLGdCQUNLRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFDQyxHQUFELEVBQU1DLENBQU47QUFBQSw0QkFDUixxRUFBQyw4REFBRDtBQUNBLFlBQUUsRUFBR0MsSUFBSSxDQUFDQyxFQURWO0FBRUEsZUFBSyxFQUFFRCxJQUFJLENBQUNFLEtBRlo7QUFHQSxnQkFBTSxFQUFFRixJQUFJLENBQUNHLE1BSGI7QUFJQSxhQUFHLEVBQUVILElBQUksQ0FBQ0k7QUFKVixXQUtLTCxDQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFYO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUEsa0JBREo7QUFnQkgsQ0FwQkQ7O0dBQU1OLFE7VUFFNkJDLHVFOzs7S0FGN0JELFE7QUFzQlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NoZWNrb3V0LmEyYmE3YTg3YmU2MDE2ZjQ3MzZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDaGVja291dFByb2R1Y3QgZnJvbSAnLi4vQ2hlY2tvdXRQcm9kdWN0L2luZGV4J1xyXG5pbXBvcnQge3VzZVN0YXRlVmFsdWV9IGZyb20gJy4uL0NvbnRleHRBcGkvU3RhdGVQcm92aWRlcic7XHJcbmltcG9ydCB7Q2hlY2tvdXRoMSwgQ2hlY2tvdXRMaXN0fSBmcm9tICcuL3N0eWxlJ1xyXG5cclxuXHJcbmNvbnN0IENoZWNrb3V0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFsge2Jhc2tldCB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVZhbHVlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q2hlY2tvdXRoMT5Zb3VyIEJhc2tldDwvQ2hlY2tvdXRoMT5cclxuICAgICAgICAgICAgPENoZWNrb3V0TGlzdD5cclxuICAgICAgICAgICAgICAgIHtiYXNrZXQubWFwKChwcm8sIGkpPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja291dFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICBpZD0ge2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luPXtpdGVtLm9yaWdpbn1cclxuICAgICAgICAgICAgICAgICAgICBpbWc9e2l0ZW0uaW1nfSBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9Lz5cclxuICAgICAgICAgICAgICAgICkgKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NoZWNrb3V0TGlzdD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==