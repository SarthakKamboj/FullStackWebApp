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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      showSuccessMsg = _useState3[0],
      setShowSuccessMsg = _useState3[1];

  var onSubmit = handleSubmit( /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      var _response$data, _response$data2;

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
                setSubmissionErrs(errorMap);
                setNumSubmissionErrs(Object.keys(errorMap).length);
              } else if ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.register.user) {
                setShowSuccessMsg(true);
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
        value: 2,
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
  }, "Submit "), errors.password && errors.password.message), numSubmissionErrs !== 0 ? Object.keys(submissionErrs).map(function (errKey) {
    return submissionErrs[errKey];
  }) : "", showSuccessMsg ? "User created" : "");
};

_s(Register, "ZxmnHlYwJhIGscO3rzixRRa6n+A=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJyZWdpc3RlclVzZXIiLCJ1c2VTdGF0ZSIsInN1Ym1pc3Npb25FcnJzIiwic2V0U3VibWlzc2lvbkVycnMiLCJudW1TdWJtaXNzaW9uRXJycyIsInNldE51bVN1Ym1pc3Npb25FcnJzIiwic2hvd1N1Y2Nlc3NNc2ciLCJzZXRTaG93U3VjY2Vzc01zZyIsIm9uU3VibWl0IiwiZGF0YSIsInJlc3BvbnNlIiwiZXJyb3JNYXAiLCJ0b0Vycm9yTWFwIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInVzZXIiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsInZhbHVlIiwibWVzc2FnZSIsInBhc3N3b3JkIiwibWFwIiwiZXJyS2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBOztBQUFBLGlCQUVZQywrREFBTyxFQUZuQjtBQUFBLE1BRXRCQyxRQUZzQixZQUV0QkEsUUFGc0I7QUFBQSxNQUVaQyxZQUZZLFlBRVpBLFlBRlk7QUFBQSxNQUVFQyxNQUZGLFlBRUVBLE1BRkY7O0FBQUEsNkJBSUxDLDhFQUFtQixFQUpkO0FBQUE7QUFBQSxNQUlyQkMsWUFKcUI7O0FBQUEsa0JBS2VDLHNEQUFRLENBQUMsRUFBRCxDQUx2QjtBQUFBLE1BS3RCQyxjQUxzQjtBQUFBLE1BS05DLGlCQUxNOztBQUFBLG1CQU1xQkYsc0RBQVEsQ0FBQyxDQUFELENBTjdCO0FBQUEsTUFNdEJHLGlCQU5zQjtBQUFBLE1BTUhDLG9CQU5HOztBQUFBLG1CQU9lSixzREFBUSxDQUFDLEtBQUQsQ0FQdkI7QUFBQSxNQU90QkssY0FQc0I7QUFBQSxNQU9OQyxpQkFQTTs7QUFTN0IsTUFBTUMsUUFBUSxHQUFHWCxZQUFZO0FBQUEsZ01BQUMsaUJBQU9ZLElBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDSlQsWUFBWSxDQUFDUyxJQUFELENBRFI7O0FBQUE7QUFDckJDLHNCQURxQjs7QUFFM0Isb0NBQUlBLFFBQVEsQ0FBQ0QsSUFBYixtREFBSSxlQUFlYixRQUFmLENBQXdCRSxNQUE1QixFQUFvQztBQUN6QmEsd0JBRHlCLEdBQ2RDLG9FQUFVLENBQUNGLFFBQVEsQ0FBQ0QsSUFBVCxDQUFjYixRQUFkLENBQXVCRSxNQUF4QixDQURJO0FBRS9CSyxpQ0FBaUIsQ0FBQ1EsUUFBRCxDQUFqQjtBQUNBTixvQ0FBb0IsQ0FBQ1EsTUFBTSxDQUFDQyxJQUFQLENBQVlILFFBQVosRUFBc0JJLE1BQXZCLENBQXBCO0FBQ0osZUFKRCxNQUlPLHVCQUFJTCxRQUFRLENBQUNELElBQWIsb0RBQUksZ0JBQWViLFFBQWYsQ0FBd0JvQixJQUE1QixFQUFrQztBQUNyQ1QsaUNBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNIOztBQVIwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEOztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTdCO0FBV0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVJO0FBQU0sWUFBUSxFQUFFQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixPQUFHLEVBQUVaLFFBQVEsQ0FBQztBQUFDcUIsY0FBUSxFQUFDO0FBQVYsS0FBRCxDQUFoQztBQUFtRCxRQUFJLEVBQUMsVUFBeEQ7QUFBbUUsZUFBVyxFQUFDLFVBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsT0FBRyxFQUFFckIsUUFBUSxDQUFDO0FBQUNxQixjQUFRLEVBQUMsbUJBQVY7QUFBK0JDLGVBQVMsRUFBQztBQUFDQyxhQUFLLEVBQUMsQ0FBUDtBQUFVQyxlQUFPLEVBQUM7QUFBbEI7QUFBekMsS0FBRCxDQUFwQztBQUE0SCxRQUFJLEVBQUMsVUFBakk7QUFBNEksZUFBVyxFQUFDLFVBQXhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLEVBSUt0QixNQUFNLENBQUN1QixRQUFQLElBQW1CdkIsTUFBTSxDQUFDdUIsUUFBUCxDQUFnQkQsT0FKeEMsQ0FGSixFQVFNaEIsaUJBQWlCLEtBQUssQ0FBdkIsR0FBNEJTLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZWixjQUFaLEVBQTRCb0IsR0FBNUIsQ0FBZ0MsVUFBQUMsTUFBTTtBQUFBLFdBQUlyQixjQUFjLENBQUNxQixNQUFELENBQWxCO0FBQUEsR0FBdEMsQ0FBNUIsR0FBK0YsRUFScEcsRUFTTWpCLGNBQUQsR0FBbUIsY0FBbkIsR0FBb0MsRUFUekMsQ0FESjtBQWFILENBakNEOztHQUFNWixRO1VBRXVDQyx1RCxFQUVqQkksc0U7OztLQUp0QkwsUTtBQW1DU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuM2Y5MWE2YzY0NTBiY2VkZGNiNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB0b0Vycm9yTWFwIH0gZnJvbSAnLi8uLi91dGlscy90b0Vycm9yTWFwJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHt1c2VGb3JtfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7IHVzZVJlZ2lzdGVyTXV0YXRpb24gfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIGZvcm1UeXBlID0ge1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZ1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBSZWdpc3RlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHtyZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnN9ID0gdXNlRm9ybTxmb3JtVHlwZT4oKTtcclxuXHJcbiAgICBjb25zdCBbLHJlZ2lzdGVyVXNlcl0gPSB1c2VSZWdpc3Rlck11dGF0aW9uKCk7XHJcbiAgICBjb25zdCBbc3VibWlzc2lvbkVycnMsIHNldFN1Ym1pc3Npb25FcnJzXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtudW1TdWJtaXNzaW9uRXJycywgc2V0TnVtU3VibWlzc2lvbkVycnNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbc2hvd1N1Y2Nlc3NNc2csIHNldFNob3dTdWNjZXNzTXNnXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGhhbmRsZVN1Ym1pdChhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZWdpc3RlclVzZXIoZGF0YSk7XHJcbiAgICAgICBpZiAocmVzcG9uc2UuZGF0YT8ucmVnaXN0ZXIuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWFwID0gdG9FcnJvck1hcChyZXNwb25zZS5kYXRhLnJlZ2lzdGVyLmVycm9ycyk7XHJcbiAgICAgICAgICAgIHNldFN1Ym1pc3Npb25FcnJzKGVycm9yTWFwKTtcclxuICAgICAgICAgICAgc2V0TnVtU3VibWlzc2lvbkVycnMoT2JqZWN0LmtleXMoZXJyb3JNYXApLmxlbmd0aCk7XHJcbiAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGE/LnJlZ2lzdGVyLnVzZXIpIHtcclxuICAgICAgICAgICBzZXRTaG93U3VjY2Vzc01zZyh0cnVlKTtcclxuICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBSZWdpc3RlciBQYWdlXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9e3JlZ2lzdGVyKHtyZXF1aXJlZDp0cnVlfSl9IG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlZj17cmVnaXN0ZXIoe3JlcXVpcmVkOlwiUGFzc3dvcmQgcmVxdWlyZWRcIiwgbWluTGVuZ3RoOnt2YWx1ZToyLCBtZXNzYWdlOlwiUGFzc3dvcmQgaXMgdG9vIHNob3J0XCJ9fSl9IG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlN1Ym1pdCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvZm9ybT4gXHJcbiAgICAgICAgICAgIHsobnVtU3VibWlzc2lvbkVycnMgIT09IDApID8gT2JqZWN0LmtleXMoc3VibWlzc2lvbkVycnMpLm1hcChlcnJLZXkgPT4gc3VibWlzc2lvbkVycnNbZXJyS2V5XSk6IFwiXCJ9XHJcbiAgICAgICAgICAgIHsoc2hvd1N1Y2Nlc3NNc2cpID8gXCJVc2VyIGNyZWF0ZWRcIiA6IFwiXCJ9IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsiXSwic291cmNlUm9vdCI6IiJ9