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
// @ts-nocheck





var Register = function Register() {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  var _useRegisterMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__["useRegisterMutation"])(),
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
                errorMap = Object(_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_3__["toErrorMap"])(response.data.register.errors);
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
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Register Page", __jsx("form", {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 32,
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
      lineNumber: 33,
      columnNumber: 17
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Submit "), errors.password && errors.password.message));
};

_s(Register, "6aAjbDFktT2rzPwanwoOuQERJzU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJyZWdpc3RlclVzZXIiLCJvblN1Ym1pdCIsImRhdGEiLCJyZXNwb25zZSIsImVycm9yTWFwIiwidG9FcnJvck1hcCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsInZhbHVlIiwibWVzc2FnZSIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBOztBQUFBLGlCQUVZQywrREFBTyxFQUZuQjtBQUFBLE1BRXRCQyxRQUZzQixZQUV0QkEsUUFGc0I7QUFBQSxNQUVaQyxZQUZZLFlBRVpBLFlBRlk7QUFBQSxNQUVFQyxNQUZGLFlBRUVBLE1BRkY7O0FBQUEsNkJBSUxDLDhFQUFtQixFQUpkO0FBQUE7QUFBQSxNQUlyQkMsWUFKcUI7O0FBTTdCLE1BQU1DLFFBQVEsR0FBR0osWUFBWTtBQUFBLGdNQUFDLGlCQUFPSyxJQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0pGLFlBQVksQ0FBQ0UsSUFBRCxDQURSOztBQUFBO0FBQ3JCQyxzQkFEcUI7O0FBRTNCLG9DQUFJQSxRQUFRLENBQUNELElBQWIsbURBQUksZUFBZU4sUUFBZixDQUF3QkUsTUFBNUIsRUFBb0M7QUFDekJNLHdCQUR5QixHQUNkQyxvRUFBVSxDQUFDRixRQUFRLENBQUNELElBQVQsQ0FBY04sUUFBZCxDQUF1QkUsTUFBeEIsQ0FESTtBQUUvQlEsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFaO0FBRUo7O0FBTjBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBN0I7QUFTQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRUk7QUFBTSxZQUFRLEVBQUVILFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLE9BQUcsRUFBRUwsUUFBUSxDQUFDO0FBQUNZLGNBQVEsRUFBQztBQUFWLEtBQUQsQ0FBaEM7QUFBbUQsUUFBSSxFQUFDLFVBQXhEO0FBQW1FLGVBQVcsRUFBQyxVQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQXVCLE9BQUcsRUFBRVosUUFBUSxDQUFDO0FBQUNZLGNBQVEsRUFBQyxtQkFBVjtBQUErQkMsZUFBUyxFQUFDO0FBQUNDLGFBQUssRUFBQyxDQUFQO0FBQVVDLGVBQU8sRUFBQztBQUFsQjtBQUF6QyxLQUFELENBQXBDO0FBQTRILFFBQUksRUFBQyxVQUFqSTtBQUE0SSxlQUFXLEVBQUMsVUFBeEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosRUFJS2IsTUFBTSxDQUFDYyxRQUFQLElBQW1CZCxNQUFNLENBQUNjLFFBQVAsQ0FBZ0JELE9BSnhDLENBRkosQ0FESjtBQVdILENBMUJEOztHQUFNakIsUTtVQUV1Q0MsdUQsRUFFakJJLHNFOzs7S0FKdEJMLFE7QUE0QlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjRmNDczNTk5YzJmODY3NGJlZDk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtbm9jaGVja1xyXG5cclxuaW1wb3J0IHsgdG9FcnJvck1hcCB9IGZyb20gJy4vLi4vdXRpbHMvdG9FcnJvck1hcCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7dXNlRm9ybX0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyB1c2VSZWdpc3Rlck11dGF0aW9uIH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcblxyXG50eXBlIGZvcm1UeXBlID0ge1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZ1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBSZWdpc3RlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHtyZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnN9ID0gdXNlRm9ybTxmb3JtVHlwZT4oKTtcclxuXHJcbiAgICBjb25zdCBbLHJlZ2lzdGVyVXNlcl0gPSB1c2VSZWdpc3Rlck11dGF0aW9uKCk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBoYW5kbGVTdWJtaXQoYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVnaXN0ZXJVc2VyKGRhdGEpO1xyXG4gICAgICAgaWYgKHJlc3BvbnNlLmRhdGE/LnJlZ2lzdGVyLmVycm9ycykge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1hcCA9IHRvRXJyb3JNYXAocmVzcG9uc2UuZGF0YS5yZWdpc3Rlci5lcnJvcnMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1hcClcclxuICAgICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgUmVnaXN0ZXIgUGFnZVxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtyZWdpc3Rlcih7cmVxdWlyZWQ6dHJ1ZX0pfSBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZWY9e3JlZ2lzdGVyKHtyZXF1aXJlZDpcIlBhc3N3b3JkIHJlcXVpcmVkXCIsIG1pbkxlbmd0aDp7dmFsdWU6OCwgbWVzc2FnZTpcIlBhc3N3b3JkIGlzIHRvbyBzaG9ydFwifX0pfSBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5TdWJtaXQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZC5tZXNzYWdlfVxyXG4gICAgICAgICAgICA8L2Zvcm0+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsiXSwic291cmNlUm9vdCI6IiJ9