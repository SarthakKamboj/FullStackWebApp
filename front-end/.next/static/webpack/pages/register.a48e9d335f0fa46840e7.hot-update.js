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
/* harmony import */ var _utils_toErrorMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/toErrorMap */ "./src/utils/toErrorMap.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");




var _this = undefined,
    _jsxFileName = "C:\\Sarthak\\TypeScipt-GraphQL-Postgres-React-Tut\\front-end\\src\\pages\\register.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4__["createElement"];






var Register = function Register() {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  var _useRegisterMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__["useRegisterMutation"])(),
      _useRegisterMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useRegisterMutation, 2),
      registerUser = _useRegisterMutation2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      submissionErrs = _useState[0],
      setSubmissionErrs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      numSubmissionErrs = _useState2[0],
      setNumSubmissionErrs = _useState2[1];

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
                errorMap = Object(_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_3__["toErrorMap"])(response.data.register.errors);
                console.log(errorMap);
                setSubmissionErrs(errorMap);
                console.log(Object.keys(errorMap));
                console.log(Object.keys(errorMap).length);
                setNumSubmissionErrs(Object.keys(errorMap).length);
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
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Register Page", __jsx("form", {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 37,
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
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "Submit "), errors.password && errors.password.message), numSubmissionErrs !== 0 ? "true" : "false", Object.keys(submissionErrs).length !== 0 ? Object.keys(submissionErrs).forEach(function (errKey) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 105
      }
    }, "errKey");
  }) : "");
};

_s(Register, "KfZd11fFvZPRvL7xeLqjxN4Ic9I=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"], _generated_graphql__WEBPACK_IMPORTED_MODULE_6__["useRegisterMutation"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJyZWdpc3RlclVzZXIiLCJ1c2VTdGF0ZSIsInN1Ym1pc3Npb25FcnJzIiwic2V0U3VibWlzc2lvbkVycnMiLCJudW1TdWJtaXNzaW9uRXJycyIsInNldE51bVN1Ym1pc3Npb25FcnJzIiwib25TdWJtaXQiLCJkYXRhIiwicmVzcG9uc2UiLCJlcnJvck1hcCIsInRvRXJyb3JNYXAiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwidmFsdWUiLCJtZXNzYWdlIiwicGFzc3dvcmQiLCJmb3JFYWNoIiwiZXJyS2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBOztBQUFBLGlCQUVZQywrREFBTyxFQUZuQjtBQUFBLE1BRXRCQyxRQUZzQixZQUV0QkEsUUFGc0I7QUFBQSxNQUVaQyxZQUZZLFlBRVpBLFlBRlk7QUFBQSxNQUVFQyxNQUZGLFlBRUVBLE1BRkY7O0FBQUEsNkJBSUxDLDhFQUFtQixFQUpkO0FBQUE7QUFBQSxNQUlyQkMsWUFKcUI7O0FBQUEsa0JBS2VDLHNEQUFRLENBQUMsRUFBRCxDQUx2QjtBQUFBLE1BS3RCQyxjQUxzQjtBQUFBLE1BS05DLGlCQUxNOztBQUFBLG1CQU1xQkYsc0RBQVEsQ0FBQyxDQUFELENBTjdCO0FBQUEsTUFNdEJHLGlCQU5zQjtBQUFBLE1BTUhDLG9CQU5HOztBQVE3QixNQUFNQyxRQUFRLEdBQUdULFlBQVk7QUFBQSxnTUFBQyxpQkFBT1UsSUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNKUCxZQUFZLENBQUNPLElBQUQsQ0FEUjs7QUFBQTtBQUNyQkMsc0JBRHFCOztBQUUzQixvQ0FBSUEsUUFBUSxDQUFDRCxJQUFiLG1EQUFJLGVBQWVYLFFBQWYsQ0FBd0JFLE1BQTVCLEVBQW9DO0FBQ3pCVyx3QkFEeUIsR0FDZEMsb0VBQVUsQ0FBQ0YsUUFBUSxDQUFDRCxJQUFULENBQWNYLFFBQWQsQ0FBdUJFLE1BQXhCLENBREk7QUFFL0JhLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUgsUUFBWjtBQUNBTixpQ0FBaUIsQ0FBQ00sUUFBRCxDQUFqQjtBQUNBRSx1QkFBTyxDQUFDQyxHQUFSLENBQVlDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxRQUFaLENBQVo7QUFDQUUsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsUUFBWixFQUFzQk0sTUFBbEM7QUFDQVYsb0NBQW9CLENBQUNRLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxRQUFaLEVBQXNCTSxNQUF2QixDQUFwQjtBQUNKOztBQVQwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEOztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTdCO0FBWUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVJO0FBQU0sWUFBUSxFQUFFVCxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixPQUFHLEVBQUVWLFFBQVEsQ0FBQztBQUFDb0IsY0FBUSxFQUFDO0FBQVYsS0FBRCxDQUFoQztBQUFtRCxRQUFJLEVBQUMsVUFBeEQ7QUFBbUUsZUFBVyxFQUFDLFVBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsT0FBRyxFQUFFcEIsUUFBUSxDQUFDO0FBQUNvQixjQUFRLEVBQUMsbUJBQVY7QUFBK0JDLGVBQVMsRUFBQztBQUFDQyxhQUFLLEVBQUMsQ0FBUDtBQUFVQyxlQUFPLEVBQUM7QUFBbEI7QUFBekMsS0FBRCxDQUFwQztBQUE0SCxRQUFJLEVBQUMsVUFBakk7QUFBNEksZUFBVyxFQUFDLFVBQXhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLEVBSUtyQixNQUFNLENBQUNzQixRQUFQLElBQW1CdEIsTUFBTSxDQUFDc0IsUUFBUCxDQUFnQkQsT0FKeEMsQ0FGSixFQVFNZixpQkFBaUIsS0FBSyxDQUF2QixHQUE0QixNQUE1QixHQUFxQyxPQVIxQyxFQVNNUyxNQUFNLENBQUNDLElBQVAsQ0FBWVosY0FBWixFQUE0QmEsTUFBNUIsS0FBdUMsQ0FBeEMsR0FBNkNGLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZWixjQUFaLEVBQTRCbUIsT0FBNUIsQ0FBb0MsVUFBQUMsTUFBTTtBQUFBLFdBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSjtBQUFBLEdBQTFDLENBQTdDLEdBQTJHLEVBVGhILENBREo7QUFhSCxDQWpDRDs7R0FBTTVCLFE7VUFFdUNDLHVELEVBRWpCSSxzRTs7O0tBSnRCTCxRO0FBbUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci5hNDhlOWQzMzVmMGZhNDY4NDBlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHRvRXJyb3JNYXAgfSBmcm9tICcuLy4uL3V0aWxzL3RvRXJyb3JNYXAnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge3VzZUZvcm19IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgdXNlUmVnaXN0ZXJNdXRhdGlvbiB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgZm9ybVR5cGUgPSB7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nXHJcbiAgICBwYXNzd29yZDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFJlZ2lzdGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qge3JlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9yc30gPSB1c2VGb3JtPGZvcm1UeXBlPigpO1xyXG5cclxuICAgIGNvbnN0IFsscmVnaXN0ZXJVc2VyXSA9IHVzZVJlZ2lzdGVyTXV0YXRpb24oKTtcclxuICAgIGNvbnN0IFtzdWJtaXNzaW9uRXJycywgc2V0U3VibWlzc2lvbkVycnNdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW251bVN1Ym1pc3Npb25FcnJzLCBzZXROdW1TdWJtaXNzaW9uRXJyc10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGhhbmRsZVN1Ym1pdChhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZWdpc3RlclVzZXIoZGF0YSk7XHJcbiAgICAgICBpZiAocmVzcG9uc2UuZGF0YT8ucmVnaXN0ZXIuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWFwID0gdG9FcnJvck1hcChyZXNwb25zZS5kYXRhLnJlZ2lzdGVyLmVycm9ycyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWFwKTtcclxuICAgICAgICAgICAgc2V0U3VibWlzc2lvbkVycnMoZXJyb3JNYXApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhlcnJvck1hcCkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhlcnJvck1hcCkubGVuZ3RoKTtcclxuICAgICAgICAgICAgc2V0TnVtU3VibWlzc2lvbkVycnMoT2JqZWN0LmtleXMoZXJyb3JNYXApLmxlbmd0aCk7XHJcbiAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgUmVnaXN0ZXIgUGFnZVxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtyZWdpc3Rlcih7cmVxdWlyZWQ6dHJ1ZX0pfSBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZWY9e3JlZ2lzdGVyKHtyZXF1aXJlZDpcIlBhc3N3b3JkIHJlcXVpcmVkXCIsIG1pbkxlbmd0aDp7dmFsdWU6OCwgbWVzc2FnZTpcIlBhc3N3b3JkIGlzIHRvbyBzaG9ydFwifX0pfSBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5TdWJtaXQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZC5tZXNzYWdlfVxyXG4gICAgICAgICAgICA8L2Zvcm0+IFxyXG4gICAgICAgICAgICB7KG51bVN1Ym1pc3Npb25FcnJzICE9PSAwKSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwifVxyXG4gICAgICAgICAgICB7KE9iamVjdC5rZXlzKHN1Ym1pc3Npb25FcnJzKS5sZW5ndGggIT09IDApID8gT2JqZWN0LmtleXMoc3VibWlzc2lvbkVycnMpLmZvckVhY2goZXJyS2V5ID0+IDxwPmVycktleTwvcD4pOiBcIlwifVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsiXSwic291cmNlUm9vdCI6IiJ9