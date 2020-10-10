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
    return "".concat(errKey);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJyZWdpc3RlclVzZXIiLCJ1c2VTdGF0ZSIsInN1Ym1pc3Npb25FcnJzIiwic2V0U3VibWlzc2lvbkVycnMiLCJudW1TdWJtaXNzaW9uRXJycyIsInNldE51bVN1Ym1pc3Npb25FcnJzIiwib25TdWJtaXQiLCJkYXRhIiwicmVzcG9uc2UiLCJlcnJvck1hcCIsInRvRXJyb3JNYXAiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwidmFsdWUiLCJtZXNzYWdlIiwicGFzc3dvcmQiLCJmb3JFYWNoIiwiZXJyS2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBOztBQUFBLGlCQUVZQywrREFBTyxFQUZuQjtBQUFBLE1BRXRCQyxRQUZzQixZQUV0QkEsUUFGc0I7QUFBQSxNQUVaQyxZQUZZLFlBRVpBLFlBRlk7QUFBQSxNQUVFQyxNQUZGLFlBRUVBLE1BRkY7O0FBQUEsNkJBSUxDLDhFQUFtQixFQUpkO0FBQUE7QUFBQSxNQUlyQkMsWUFKcUI7O0FBQUEsa0JBS2VDLHNEQUFRLENBQUMsRUFBRCxDQUx2QjtBQUFBLE1BS3RCQyxjQUxzQjtBQUFBLE1BS05DLGlCQUxNOztBQUFBLG1CQU1xQkYsc0RBQVEsQ0FBQyxDQUFELENBTjdCO0FBQUEsTUFNdEJHLGlCQU5zQjtBQUFBLE1BTUhDLG9CQU5HOztBQVE3QixNQUFNQyxRQUFRLEdBQUdULFlBQVk7QUFBQSxnTUFBQyxpQkFBT1UsSUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNKUCxZQUFZLENBQUNPLElBQUQsQ0FEUjs7QUFBQTtBQUNyQkMsc0JBRHFCOztBQUUzQixvQ0FBSUEsUUFBUSxDQUFDRCxJQUFiLG1EQUFJLGVBQWVYLFFBQWYsQ0FBd0JFLE1BQTVCLEVBQW9DO0FBQ3pCVyx3QkFEeUIsR0FDZEMsb0VBQVUsQ0FBQ0YsUUFBUSxDQUFDRCxJQUFULENBQWNYLFFBQWQsQ0FBdUJFLE1BQXhCLENBREk7QUFFL0JhLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUgsUUFBWjtBQUNBTixpQ0FBaUIsQ0FBQ00sUUFBRCxDQUFqQjtBQUNBRSx1QkFBTyxDQUFDQyxHQUFSLENBQVlDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxRQUFaLENBQVo7QUFDQUUsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsUUFBWixFQUFzQk0sTUFBbEM7QUFDQVYsb0NBQW9CLENBQUNRLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxRQUFaLEVBQXNCTSxNQUF2QixDQUFwQjtBQUNKOztBQVQwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEOztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTdCO0FBWUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVJO0FBQU0sWUFBUSxFQUFFVCxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixPQUFHLEVBQUVWLFFBQVEsQ0FBQztBQUFDb0IsY0FBUSxFQUFDO0FBQVYsS0FBRCxDQUFoQztBQUFtRCxRQUFJLEVBQUMsVUFBeEQ7QUFBbUUsZUFBVyxFQUFDLFVBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsT0FBRyxFQUFFcEIsUUFBUSxDQUFDO0FBQUNvQixjQUFRLEVBQUMsbUJBQVY7QUFBK0JDLGVBQVMsRUFBQztBQUFDQyxhQUFLLEVBQUMsQ0FBUDtBQUFVQyxlQUFPLEVBQUM7QUFBbEI7QUFBekMsS0FBRCxDQUFwQztBQUE0SCxRQUFJLEVBQUMsVUFBakk7QUFBNEksZUFBVyxFQUFDLFVBQXhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLEVBSUtyQixNQUFNLENBQUNzQixRQUFQLElBQW1CdEIsTUFBTSxDQUFDc0IsUUFBUCxDQUFnQkQsT0FKeEMsQ0FGSixFQVFNZixpQkFBaUIsS0FBSyxDQUF2QixHQUE0QixNQUE1QixHQUFxQyxPQVIxQyxFQVNNUyxNQUFNLENBQUNDLElBQVAsQ0FBWVosY0FBWixFQUE0QmEsTUFBNUIsS0FBdUMsQ0FBeEMsR0FBNkNGLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZWixjQUFaLEVBQTRCbUIsT0FBNUIsQ0FBb0MsVUFBQUMsTUFBTTtBQUFBLHFCQUFPQSxNQUFQO0FBQUEsR0FBMUMsQ0FBN0MsR0FBeUcsRUFUOUcsQ0FESjtBQWFILENBakNEOztHQUFNNUIsUTtVQUV1Q0MsdUQsRUFFakJJLHNFOzs7S0FKdEJMLFE7QUFtQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLmZlMjUxOWJhYjcyYmU4YzgyZDQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdG9FcnJvck1hcCB9IGZyb20gJy4vLi4vdXRpbHMvdG9FcnJvck1hcCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7dXNlRm9ybX0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyB1c2VSZWdpc3Rlck11dGF0aW9uIH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBmb3JtVHlwZSA9IHtcclxuICAgIHVzZXJuYW1lOiBzdHJpbmdcclxuICAgIHBhc3N3b3JkOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgUmVnaXN0ZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB7cmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzfSA9IHVzZUZvcm08Zm9ybVR5cGU+KCk7XHJcblxyXG4gICAgY29uc3QgWyxyZWdpc3RlclVzZXJdID0gdXNlUmVnaXN0ZXJNdXRhdGlvbigpO1xyXG4gICAgY29uc3QgW3N1Ym1pc3Npb25FcnJzLCBzZXRTdWJtaXNzaW9uRXJyc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbbnVtU3VibWlzc2lvbkVycnMsIHNldE51bVN1Ym1pc3Npb25FcnJzXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gaGFuZGxlU3VibWl0KGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlZ2lzdGVyVXNlcihkYXRhKTtcclxuICAgICAgIGlmIChyZXNwb25zZS5kYXRhPy5yZWdpc3Rlci5lcnJvcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNYXAgPSB0b0Vycm9yTWFwKHJlc3BvbnNlLmRhdGEucmVnaXN0ZXIuZXJyb3JzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNYXApO1xyXG4gICAgICAgICAgICBzZXRTdWJtaXNzaW9uRXJycyhlcnJvck1hcCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKGVycm9yTWFwKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKGVycm9yTWFwKS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBzZXROdW1TdWJtaXNzaW9uRXJycyhPYmplY3Qua2V5cyhlcnJvck1hcCkubGVuZ3RoKTtcclxuICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBSZWdpc3RlciBQYWdlXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9e3JlZ2lzdGVyKHtyZXF1aXJlZDp0cnVlfSl9IG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlZj17cmVnaXN0ZXIoe3JlcXVpcmVkOlwiUGFzc3dvcmQgcmVxdWlyZWRcIiwgbWluTGVuZ3RoOnt2YWx1ZTo4LCBtZXNzYWdlOlwiUGFzc3dvcmQgaXMgdG9vIHNob3J0XCJ9fSl9IG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlN1Ym1pdCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvZm9ybT4gXHJcbiAgICAgICAgICAgIHsobnVtU3VibWlzc2lvbkVycnMgIT09IDApID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJ9XHJcbiAgICAgICAgICAgIHsoT2JqZWN0LmtleXMoc3VibWlzc2lvbkVycnMpLmxlbmd0aCAhPT0gMCkgPyBPYmplY3Qua2V5cyhzdWJtaXNzaW9uRXJycykuZm9yRWFjaChlcnJLZXkgPT4gYCR7ZXJyS2V5fWApOiBcIlwifVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsiXSwic291cmNlUm9vdCI6IiJ9