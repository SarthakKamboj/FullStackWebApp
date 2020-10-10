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
                errorMap = toErrorMap(response.data.register.errors);
                console.log(errorMap);
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
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Register Page", __jsx("form", {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJyZWdpc3RlclVzZXIiLCJvblN1Ym1pdCIsImRhdGEiLCJyZXNwb25zZSIsImVycm9yTWFwIiwidG9FcnJvck1hcCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsInZhbHVlIiwibWVzc2FnZSIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBOztBQUFBLGlCQUVZQywrREFBTyxFQUZuQjtBQUFBLE1BRXRCQyxRQUZzQixZQUV0QkEsUUFGc0I7QUFBQSxNQUVaQyxZQUZZLFlBRVpBLFlBRlk7QUFBQSxNQUVFQyxNQUZGLFlBRUVBLE1BRkY7O0FBQUEsNkJBSUxDLDhFQUFtQixFQUpkO0FBQUE7QUFBQSxNQUlyQkMsWUFKcUI7O0FBTTdCLE1BQU1DLFFBQVEsR0FBR0osWUFBWTtBQUFBLGdNQUFDLGlCQUFPSyxJQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0pGLFlBQVksQ0FBQ0UsSUFBRCxDQURSOztBQUFBO0FBQ3JCQyxzQkFEcUI7O0FBRTNCLG9DQUFJQSxRQUFRLENBQUNELElBQWIsbURBQUksZUFBZU4sUUFBZixDQUF3QkUsTUFBNUIsRUFBb0M7QUFDekJNLHdCQUR5QixHQUNkQyxVQUFVLENBQUNGLFFBQVEsQ0FBQ0QsSUFBVCxDQUFjTixRQUFkLENBQXVCRSxNQUF4QixDQURJO0FBRS9CUSx1QkFBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7QUFDSjs7QUFMMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE3QjtBQVFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFFSTtBQUFNLFlBQVEsRUFBRUgsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsT0FBRyxFQUFFTCxRQUFRLENBQUM7QUFBQ1ksY0FBUSxFQUFDO0FBQVYsS0FBRCxDQUFoQztBQUFtRCxRQUFJLEVBQUMsVUFBeEQ7QUFBbUUsZUFBVyxFQUFDLFVBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsT0FBRyxFQUFFWixRQUFRLENBQUM7QUFBQ1ksY0FBUSxFQUFDLG1CQUFWO0FBQStCQyxlQUFTLEVBQUM7QUFBQ0MsYUFBSyxFQUFDLENBQVA7QUFBVUMsZUFBTyxFQUFDO0FBQWxCO0FBQXpDLEtBQUQsQ0FBcEM7QUFBNEgsUUFBSSxFQUFDLFVBQWpJO0FBQTRJLGVBQVcsRUFBQyxVQUF4SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixFQUlLYixNQUFNLENBQUNjLFFBQVAsSUFBbUJkLE1BQU0sQ0FBQ2MsUUFBUCxDQUFnQkQsT0FKeEMsQ0FGSixDQURKO0FBV0gsQ0F6QkQ7O0dBQU1qQixRO1VBRXVDQyx1RCxFQUVqQkksc0U7OztLQUp0QkwsUTtBQTJCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuZDY0ZjZmMzZjMDJiNjcxOTRmZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7dXNlRm9ybX0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyB1c2VSZWdpc3Rlck11dGF0aW9uIH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcblxyXG50eXBlIGZvcm1UeXBlID0ge1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZ1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBSZWdpc3RlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHtyZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnN9ID0gdXNlRm9ybTxmb3JtVHlwZT4oKTtcclxuXHJcbiAgICBjb25zdCBbLHJlZ2lzdGVyVXNlcl0gPSB1c2VSZWdpc3Rlck11dGF0aW9uKCk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBoYW5kbGVTdWJtaXQoYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVnaXN0ZXJVc2VyKGRhdGEpO1xyXG4gICAgICAgaWYgKHJlc3BvbnNlLmRhdGE/LnJlZ2lzdGVyLmVycm9ycykge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1hcCA9IHRvRXJyb3JNYXAocmVzcG9uc2UuZGF0YS5yZWdpc3Rlci5lcnJvcnMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1hcClcclxuICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBSZWdpc3RlciBQYWdlXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9e3JlZ2lzdGVyKHtyZXF1aXJlZDp0cnVlfSl9IG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlZj17cmVnaXN0ZXIoe3JlcXVpcmVkOlwiUGFzc3dvcmQgcmVxdWlyZWRcIiwgbWluTGVuZ3RoOnt2YWx1ZTo4LCBtZXNzYWdlOlwiUGFzc3dvcmQgaXMgdG9vIHNob3J0XCJ9fSl9IG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlN1Ym1pdCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvZm9ybT4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=