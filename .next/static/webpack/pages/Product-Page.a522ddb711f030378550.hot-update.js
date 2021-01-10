webpackHotUpdate_N_E("pages/Product-Page",{

/***/ "./components/ProductPageItem/index.js":
/*!*********************************************!*\
  !*** ./components/ProductPageItem/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ContextApi_StateProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContextApi/StateProvider */ "./components/ContextApi/StateProvider.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./components/ProductPageItem/style.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\reactProject\\next-js-sc-app\\components\\ProductPageItem\\index.js",
    _this = undefined,
    _s = $RefreshSig$();





var ProductItem = function ProductItem(_ref) {
  _s();

  var id = _ref.id,
      origin = _ref.origin,
      li1 = _ref.li1,
      li2 = _ref.li2,
      li3 = _ref.li3,
      li4 = _ref.li4,
      price = _ref.price,
      img = _ref.img,
      flex = _ref.flex;

  var _useStateValue = Object(_ContextApi_StateProvider__WEBPACK_IMPORTED_MODULE_3__["useStateValue"])(),
      _useStateValue2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useStateValue, 2),
      basket = _useStateValue2[0].basket,
      dispatch = _useStateValue2[1];

  var addToBasket = function addToBasket() {
    dispatch({
      type: 'ADD_TOO_BASKET',
      item: {
        id: id,
        price: price,
        origin: origin,
        img: img
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["ProductContainer"], {
      flex: flex,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["ProductText"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["Productp"], {
          children: "NEW"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["Producth1"], {
          children: origin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["Productli"], {
          children: li1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["Productli"], {
          children: li2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["Productli"], {
          children: li3
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["Productli"], {
          children: li4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["ProductPrice"], {
          children: price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["ProductButtons"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["ProductBtn1"], {
            onClick: addToBasket,
            children: "Buy Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["ProductBtn2"], {
            children: "View"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_4__["ProductImg"], {
        src: img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(ProductItem, "VjF+pqYwycDduh+AckK31pqSkoY=", false, function () {
  return [_ContextApi_StateProvider__WEBPACK_IMPORTED_MODULE_3__["useStateValue"]];
});

_c = ProductItem;
/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

var _c;

$RefreshReg$(_c, "ProductItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0UGFnZUl0ZW0vaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdEl0ZW0iLCJpZCIsIm9yaWdpbiIsImxpMSIsImxpMiIsImxpMyIsImxpNCIsInByaWNlIiwiaW1nIiwiZmxleCIsInVzZVN0YXRlVmFsdWUiLCJiYXNrZXQiLCJkaXNwYXRjaCIsImFkZFRvQmFza2V0IiwidHlwZSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQWVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXNEO0FBQUE7O0FBQUEsTUFBcERDLEVBQW9ELFFBQXBEQSxFQUFvRDtBQUFBLE1BQWhEQyxNQUFnRCxRQUFoREEsTUFBZ0Q7QUFBQSxNQUF4Q0MsR0FBd0MsUUFBeENBLEdBQXdDO0FBQUEsTUFBbkNDLEdBQW1DLFFBQW5DQSxHQUFtQztBQUFBLE1BQTlCQyxHQUE4QixRQUE5QkEsR0FBOEI7QUFBQSxNQUExQkMsR0FBMEIsUUFBMUJBLEdBQTBCO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWhCQyxHQUFnQixRQUFoQkEsR0FBZ0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsdUJBRXhDQywrRUFBYSxFQUYyQjtBQUFBO0FBQUEsTUFFN0RDLE1BRjZELHNCQUU3REEsTUFGNkQ7QUFBQSxNQUVwREMsUUFGb0Q7O0FBS3RFLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDckJELFlBQVEsQ0FBQztBQUNMRSxVQUFJLEVBQUMsZ0JBREE7QUFFTEMsVUFBSSxFQUFFO0FBQ0ZkLFVBQUUsRUFBQ0EsRUFERDtBQUdGTSxhQUFLLEVBQUNBLEtBSEo7QUFJRkwsY0FBTSxFQUFDQSxNQUpMO0FBS0ZNLFdBQUcsRUFBQ0E7QUFMRjtBQUZELEtBQUQsQ0FBUjtBQVVKLEdBWEQ7O0FBYUEsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyx1REFBRDtBQUFrQixVQUFJLEVBQUVDLElBQXhCO0FBQUEsOEJBQ0kscUVBQUMsa0RBQUQ7QUFBQSxnQ0FDSSxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLHFFQUFDLGdEQUFEO0FBQUEsb0JBQVlQO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJLHFFQUFDLGdEQUFEO0FBQUEsb0JBQVlDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJLHFFQUFDLGdEQUFEO0FBQUEsb0JBQVlDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJLHFFQUFDLGdEQUFEO0FBQUEsb0JBQVlDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQU1JLHFFQUFDLGdEQUFEO0FBQUEsb0JBQVlDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixlQU9JLHFFQUFDLG1EQUFEO0FBQUEsb0JBQWVDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSixlQVFJLHFFQUFDLHFEQUFEO0FBQUEsa0NBQ0kscUVBQUMsa0RBQUQ7QUFBYSxtQkFBTyxFQUFFTSxXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQWNJLHFFQUFDLGlEQUFEO0FBQVksV0FBRyxFQUFFTDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFvQkgsQ0F0Q0Q7O0dBQU1SLFc7VUFFNEJVLHVFOzs7S0FGNUJWLFc7QUF3Q1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1Byb2R1Y3QtUGFnZS5hNTIyZGRiNzExZjAzMDM3ODU1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZVN0YXRlVmFsdWV9IGZyb20gJy4uL0NvbnRleHRBcGkvU3RhdGVQcm92aWRlcidcclxuaW1wb3J0IHtcclxuICAgIFByb2R1Y3RDb250YWluZXIsXHJcbiAgICBQcm9kdWN0VGV4dCxcclxuICAgIFByb2R1Y3RwLFxyXG4gICAgUHJvZHVjdGgxLFxyXG4gICAgUHJvZHVjdGxpLFxyXG4gICAgUHJvZHVjdFByaWNlLFxyXG4gICAgUHJvZHVjdEJ1dHRvbnMsXHJcbiAgICBQcm9kdWN0QnRuMSxcclxuICAgIFByb2R1Y3RCdG4yLFxyXG4gICAgUHJvZHVjdEltZ1xyXG59IGZyb20gJy4vc3R5bGUnO1xyXG5cclxuXHJcblxyXG5jb25zdCBQcm9kdWN0SXRlbSA9ICh7aWQsIG9yaWdpbiwgbGkxLCBsaTIsIGxpMyxsaTQscHJpY2UsaW1nLCBmbGV4IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbIHtiYXNrZXR9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVZhbHVlKCk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgYWRkVG9CYXNrZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgIHR5cGU6J0FERF9UT09fQkFTS0VUJyxcclxuICAgICAgICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgICAgICAgICBpZDppZCxcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBwcmljZTpwcmljZSxcclxuICAgICAgICAgICAgICAgICBvcmlnaW46b3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgIGltZzppbWcsXHJcbiAgICAgICAgICAgICB9LFxyXG4gICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFByb2R1Y3RDb250YWluZXIgZmxleD17ZmxleH0+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RwPk5FVzwvUHJvZHVjdHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RoMT57b3JpZ2lufTwvUHJvZHVjdGgxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0bGk+e2xpMX08L1Byb2R1Y3RsaT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdGxpPntsaTJ9PC9Qcm9kdWN0bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RsaT57bGkzfTwvUHJvZHVjdGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0bGk+e2xpNH08L1Byb2R1Y3RsaT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFByaWNlPntwcmljZX08L1Byb2R1Y3RQcmljZT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEJ1dHRvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0QnRuMSBvbkNsaWNrPXthZGRUb0Jhc2tldH0gPkJ1eSBOb3c8L1Byb2R1Y3RCdG4xPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEJ0bjI+VmlldzwvUHJvZHVjdEJ0bjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qcm9kdWN0QnV0dG9ucz5cclxuICAgICAgICAgICAgICAgIDwvUHJvZHVjdFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdEltZyBzcmM9e2ltZ30+PC9Qcm9kdWN0SW1nPlxyXG4gICAgICAgICAgICA8L1Byb2R1Y3RDb250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=