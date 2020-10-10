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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_toErrorMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/toErrorMap */ "./src/utils/toErrorMap.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");




var _this = undefined,
    _jsxFileName = "C:\\Sarthak\\TypeScipt-GraphQL-Postgres-React-Tut\\front-end\\src\\pages\\register.tsx",
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5__["createElement"];







var Register = function Register() {
  _s2();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  var _useRegisterMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_7__["useRegisterMutation"])(),
      _useRegisterMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useRegisterMutation, 2),
      registerUser = _useRegisterMutation2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      submissionErrs = _useState[0],
      setSubmissionErrs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      numSubmissionErrs = _useState2[0],
      setNumSubmissionErrs = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      showSuccessMsg = _useState3[0],
      setShowSuccessMsg = _useState3[1];

  var onSubmit = handleSubmit( /*#__PURE__*/function () {
    var _s = $RefreshSig$();

    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(_s( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      var _response$data, _response$data2;

      var response, errorMap;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              _context.next = 3;
              return registerUser(data);

            case 3:
              response = _context.sent;

              if ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.register.errors) {
                errorMap = Object(_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_4__["toErrorMap"])(response.data.register.errors);
                setSubmissionErrs(errorMap);
                setNumSubmissionErrs(Object.keys(errorMap).length);
              } else if ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.register.user) {
                setShowSuccessMsg(true);
                Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])("/");
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }), "CeygcqajjFExIxFEzW4x/gfWEGQ=", false, function () {
      return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Register Page", __jsx("form", {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 38,
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
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Submit "), errors.password && errors.password.message), numSubmissionErrs !== 0 ? Object.keys(submissionErrs).map(function (errKey) {
    return submissionErrs[errKey];
  }) : "", showSuccessMsg ? "User created" : "");
};

_s2(Register, "ZxmnHlYwJhIGscO3rzixRRa6n+A=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"], _generated_graphql__WEBPACK_IMPORTED_MODULE_7__["useRegisterMutation"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJyZWdpc3RlclVzZXIiLCJ1c2VTdGF0ZSIsInN1Ym1pc3Npb25FcnJzIiwic2V0U3VibWlzc2lvbkVycnMiLCJudW1TdWJtaXNzaW9uRXJycyIsInNldE51bVN1Ym1pc3Npb25FcnJzIiwic2hvd1N1Y2Nlc3NNc2ciLCJzZXRTaG93U3VjY2Vzc01zZyIsIm9uU3VibWl0IiwiZGF0YSIsInJlc3BvbnNlIiwiZXJyb3JNYXAiLCJ0b0Vycm9yTWFwIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInVzZXIiLCJ1c2VSb3V0ZXIiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsInZhbHVlIiwibWVzc2FnZSIsInBhc3N3b3JkIiwibWFwIiwiZXJyS2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFBQSxpQkFFWUMsK0RBQU8sRUFGbkI7QUFBQSxNQUV0QkMsUUFGc0IsWUFFdEJBLFFBRnNCO0FBQUEsTUFFWkMsWUFGWSxZQUVaQSxZQUZZO0FBQUEsTUFFRUMsTUFGRixZQUVFQSxNQUZGOztBQUFBLDZCQUlMQyw4RUFBbUIsRUFKZDtBQUFBO0FBQUEsTUFJckJDLFlBSnFCOztBQUFBLGtCQUtlQyxzREFBUSxDQUFDLEVBQUQsQ0FMdkI7QUFBQSxNQUt0QkMsY0FMc0I7QUFBQSxNQUtOQyxpQkFMTTs7QUFBQSxtQkFNcUJGLHNEQUFRLENBQUMsQ0FBRCxDQU43QjtBQUFBLE1BTXRCRyxpQkFOc0I7QUFBQSxNQU1IQyxvQkFORzs7QUFBQSxtQkFPZUosc0RBQVEsQ0FBQyxLQUFELENBUHZCO0FBQUEsTUFPdEJLLGNBUHNCO0FBQUEsTUFPTkMsaUJBUE07O0FBUzdCLE1BQU1DLFFBQVEsR0FBR1gsWUFBWTtBQUFBOztBQUFBLG1NQUFDLGlCQUFPWSxJQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBQ0pULFlBQVksQ0FBQ1MsSUFBRCxDQURSOztBQUFBO0FBQ3JCQyxzQkFEcUI7O0FBRTNCLG9DQUFJQSxRQUFRLENBQUNELElBQWIsbURBQUksZUFBZWIsUUFBZixDQUF3QkUsTUFBNUIsRUFBb0M7QUFDekJhLHdCQUR5QixHQUNkQyxvRUFBVSxDQUFDRixRQUFRLENBQUNELElBQVQsQ0FBY2IsUUFBZCxDQUF1QkUsTUFBeEIsQ0FESTtBQUUvQkssaUNBQWlCLENBQUNRLFFBQUQsQ0FBakI7QUFDQU4sb0NBQW9CLENBQUNRLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxRQUFaLEVBQXNCSSxNQUF2QixDQUFwQjtBQUNKLGVBSkQsTUFJTyx1QkFBSUwsUUFBUSxDQUFDRCxJQUFiLG9EQUFJLGdCQUFlYixRQUFmLENBQXdCb0IsSUFBNUIsRUFBa0M7QUFDckNULGlDQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQVUsNkVBQVMsQ0FBQyxHQUFELENBQVQ7QUFDSDs7QUFUMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQUFBLGNBUXRCQSxxREFSc0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE3QjtBQVlBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFFSTtBQUFNLFlBQVEsRUFBRVQsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsT0FBRyxFQUFFWixRQUFRLENBQUM7QUFBQ3NCLGNBQVEsRUFBQztBQUFWLEtBQUQsQ0FBaEM7QUFBbUQsUUFBSSxFQUFDLFVBQXhEO0FBQW1FLGVBQVcsRUFBQyxVQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQXVCLE9BQUcsRUFBRXRCLFFBQVEsQ0FBQztBQUFDc0IsY0FBUSxFQUFDLG1CQUFWO0FBQStCQyxlQUFTLEVBQUM7QUFBQ0MsYUFBSyxFQUFDLENBQVA7QUFBVUMsZUFBTyxFQUFDO0FBQWxCO0FBQXpDLEtBQUQsQ0FBcEM7QUFBNEgsUUFBSSxFQUFDLFVBQWpJO0FBQTRJLGVBQVcsRUFBQyxVQUF4SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixFQUlLdkIsTUFBTSxDQUFDd0IsUUFBUCxJQUFtQnhCLE1BQU0sQ0FBQ3dCLFFBQVAsQ0FBZ0JELE9BSnhDLENBRkosRUFRTWpCLGlCQUFpQixLQUFLLENBQXZCLEdBQTRCUyxNQUFNLENBQUNDLElBQVAsQ0FBWVosY0FBWixFQUE0QnFCLEdBQTVCLENBQWdDLFVBQUFDLE1BQU07QUFBQSxXQUFJdEIsY0FBYyxDQUFDc0IsTUFBRCxDQUFsQjtBQUFBLEdBQXRDLENBQTVCLEdBQStGLEVBUnBHLEVBU01sQixjQUFELEdBQW1CLGNBQW5CLEdBQW9DLEVBVHpDLENBREo7QUFhSCxDQWxDRDs7SUFBTVosUTtVQUV1Q0MsdUQsRUFFakJJLHNFOzs7S0FKdEJMLFE7QUFvQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjQyMDYyYmZkMzU4YzQ2ZWYwZDZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHRvRXJyb3JNYXAgfSBmcm9tICcuLy4uL3V0aWxzL3RvRXJyb3JNYXAnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge3VzZUZvcm19IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgdXNlUmVnaXN0ZXJNdXRhdGlvbiB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgZm9ybVR5cGUgPSB7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nXHJcbiAgICBwYXNzd29yZDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFJlZ2lzdGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qge3JlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9yc30gPSB1c2VGb3JtPGZvcm1UeXBlPigpO1xyXG5cclxuICAgIGNvbnN0IFsscmVnaXN0ZXJVc2VyXSA9IHVzZVJlZ2lzdGVyTXV0YXRpb24oKTtcclxuICAgIGNvbnN0IFtzdWJtaXNzaW9uRXJycywgc2V0U3VibWlzc2lvbkVycnNdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW251bVN1Ym1pc3Npb25FcnJzLCBzZXROdW1TdWJtaXNzaW9uRXJyc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtzaG93U3VjY2Vzc01zZywgc2V0U2hvd1N1Y2Nlc3NNc2ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gaGFuZGxlU3VibWl0KGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlZ2lzdGVyVXNlcihkYXRhKTtcclxuICAgICAgIGlmIChyZXNwb25zZS5kYXRhPy5yZWdpc3Rlci5lcnJvcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNYXAgPSB0b0Vycm9yTWFwKHJlc3BvbnNlLmRhdGEucmVnaXN0ZXIuZXJyb3JzKTtcclxuICAgICAgICAgICAgc2V0U3VibWlzc2lvbkVycnMoZXJyb3JNYXApO1xyXG4gICAgICAgICAgICBzZXROdW1TdWJtaXNzaW9uRXJycyhPYmplY3Qua2V5cyhlcnJvck1hcCkubGVuZ3RoKTtcclxuICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YT8ucmVnaXN0ZXIudXNlcikge1xyXG4gICAgICAgICAgIHNldFNob3dTdWNjZXNzTXNnKHRydWUpO1xyXG4gICAgICAgICAgIHVzZVJvdXRlcihcIi9cIik7XHJcbiAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgUmVnaXN0ZXIgUGFnZVxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtyZWdpc3Rlcih7cmVxdWlyZWQ6dHJ1ZX0pfSBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZWY9e3JlZ2lzdGVyKHtyZXF1aXJlZDpcIlBhc3N3b3JkIHJlcXVpcmVkXCIsIG1pbkxlbmd0aDp7dmFsdWU6MiwgbWVzc2FnZTpcIlBhc3N3b3JkIGlzIHRvbyBzaG9ydFwifX0pfSBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5TdWJtaXQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZC5tZXNzYWdlfVxyXG4gICAgICAgICAgICA8L2Zvcm0+IFxyXG4gICAgICAgICAgICB7KG51bVN1Ym1pc3Npb25FcnJzICE9PSAwKSA/IE9iamVjdC5rZXlzKHN1Ym1pc3Npb25FcnJzKS5tYXAoZXJyS2V5ID0+IHN1Ym1pc3Npb25FcnJzW2VycktleV0pOiBcIlwifVxyXG4gICAgICAgICAgICB7KHNob3dTdWNjZXNzTXNnKSA/IFwiVXNlciBjcmVhdGVkXCIgOiBcIlwifSBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==