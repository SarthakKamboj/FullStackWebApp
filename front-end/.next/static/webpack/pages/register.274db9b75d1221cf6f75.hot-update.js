webpackHotUpdate_N_E("pages/register",{

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");




var _this = undefined,
    _jsxFileName = "C:\\Sarthak\\TypeScipt-GraphQL-Postgres-React-Tut\\front-end\\src\\pages\\register.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];
// @ts-nocheck




var Register = function Register() {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  var _useRegisterMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useRegisterMutation"])(),
      _useRegisterMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useRegisterMutation, 2),
      registerUser = _useRegisterMutation2[1];

  var onSubmit = handleSubmit( /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      var _response$data;

      var response, errorMap;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return registerUser(data);

            case 2:
              response = _context.sent;

              if ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.register.errors) {
                errorMap = errorMap(response.data.register.errors);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Register Page", __jsx("form", {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    ref: register({
      required: true
    }),
    name: "username",
    placeholder: "Username",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "password",
    ref: register({
      required: "Password required",
      minLength: {
        value: 8,
        message: "Password is too short"
      }
    }),
    name: "password",
    placeholder: "Password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Submit "), errors.password && errors.password.message));
};

_s(Register, "6aAjbDFktT2rzPwanwoOuQERJzU=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"], _generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useRegisterMutation"]];
});

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJyZWdpc3RlclVzZXIiLCJvblN1Ym1pdCIsImRhdGEiLCJyZXNwb25zZSIsImVycm9yTWFwIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFBQSxpQkFFWUMsK0RBQU8sRUFGbkI7QUFBQSxNQUV0QkMsUUFGc0IsWUFFdEJBLFFBRnNCO0FBQUEsTUFFWkMsWUFGWSxZQUVaQSxZQUZZO0FBQUEsTUFFRUMsTUFGRixZQUVFQSxNQUZGOztBQUFBLDZCQUlMQyw4RUFBbUIsRUFKZDtBQUFBO0FBQUEsTUFJckJDLFlBSnFCOztBQU03QixNQUFNQyxRQUFRLEdBQUdKLFlBQVk7QUFBQSxnTUFBQyxpQkFBT0ssSUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNKRixZQUFZLENBQUNFLElBQUQsQ0FEUjs7QUFBQTtBQUNyQkMsc0JBRHFCOztBQUUzQixvQ0FBSUEsUUFBUSxDQUFDRCxJQUFiLG1EQUFJLGVBQWVOLFFBQWYsQ0FBd0JFLE1BQTVCLEVBQW9DO0FBQ3pCTSx3QkFEeUIsR0FDZEEsUUFBUSxDQUFDRCxRQUFRLENBQUNELElBQVQsQ0FBY04sUUFBZCxDQUF1QkUsTUFBeEIsQ0FETTtBQUVuQzs7QUFKMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE3QjtBQU9BLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFFSTtBQUFNLFlBQVEsRUFBRUcsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsT0FBRyxFQUFFTCxRQUFRLENBQUM7QUFBQ1MsY0FBUSxFQUFDO0FBQVYsS0FBRCxDQUFoQztBQUFtRCxRQUFJLEVBQUMsVUFBeEQ7QUFBbUUsZUFBVyxFQUFDLFVBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsT0FBRyxFQUFFVCxRQUFRLENBQUM7QUFBQ1MsY0FBUSxFQUFDLG1CQUFWO0FBQStCQyxlQUFTLEVBQUM7QUFBQ0MsYUFBSyxFQUFDLENBQVA7QUFBVUMsZUFBTyxFQUFDO0FBQWxCO0FBQXpDLEtBQUQsQ0FBcEM7QUFBNEgsUUFBSSxFQUFDLFVBQWpJO0FBQTRJLGVBQVcsRUFBQyxVQUF4SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixFQUlLVixNQUFNLENBQUNXLFFBQVAsSUFBbUJYLE1BQU0sQ0FBQ1csUUFBUCxDQUFnQkQsT0FKeEMsQ0FGSixDQURKO0FBV0gsQ0F4QkQ7O0dBQU1kLFE7VUFFdUNDLHVELEVBRWpCSSxzRTs7O0tBSnRCTCxRO0FBMEJTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci4yNzRkYjliNzVkMTIyMWNmNmY3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHt1c2VGb3JtfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7IHVzZVJlZ2lzdGVyTXV0YXRpb24gfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuXHJcbnR5cGUgZm9ybVR5cGUgPSB7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nXHJcbiAgICBwYXNzd29yZDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFJlZ2lzdGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qge3JlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9yc30gPSB1c2VGb3JtPGZvcm1UeXBlPigpO1xyXG5cclxuICAgIGNvbnN0IFsscmVnaXN0ZXJVc2VyXSA9IHVzZVJlZ2lzdGVyTXV0YXRpb24oKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGhhbmRsZVN1Ym1pdChhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZWdpc3RlclVzZXIoZGF0YSk7XHJcbiAgICAgICBpZiAocmVzcG9uc2UuZGF0YT8ucmVnaXN0ZXIuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWFwID0gZXJyb3JNYXAocmVzcG9uc2UuZGF0YS5yZWdpc3Rlci5lcnJvcnMpXHJcbiAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgUmVnaXN0ZXIgUGFnZVxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtyZWdpc3Rlcih7cmVxdWlyZWQ6dHJ1ZX0pfSBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZWY9e3JlZ2lzdGVyKHtyZXF1aXJlZDpcIlBhc3N3b3JkIHJlcXVpcmVkXCIsIG1pbkxlbmd0aDp7dmFsdWU6OCwgbWVzc2FnZTpcIlBhc3N3b3JkIGlzIHRvbyBzaG9ydFwifX0pfSBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5TdWJtaXQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZC5tZXNzYWdlfVxyXG4gICAgICAgICAgICA8L2Zvcm0+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsiXSwic291cmNlUm9vdCI6IiJ9