"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Form */ \"(app-pages-browser)/./src/components/Form.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./src/components/Header.jsx\");\n/* harmony import */ var _components_TODOHero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TODOHero */ \"(app-pages-browser)/./src/components/TODOHero.jsx\");\n/* harmony import */ var _components_TODOList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TODOList */ \"(app-pages-browser)/./src/components/TODOList.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    var _React_useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)(react__WEBPACK_IMPORTED_MODULE_1___default().useState([\n        {\n            title: \"Some task\",\n            id: self.crypto.randomUUID(),\n            is_completed: false\n        },\n        {\n            title: \"Some other task\",\n            id: self.crypto.randomUUID(),\n            is_completed: true\n        },\n        {\n            title: \"last task\",\n            id: self.crypto.randomUUID(),\n            is_completed: false\n        }\n    ]), 2), todos = _React_useState[0], setTodos = _React_useState[1];\n    var todos_completed = todos.filter(function(todo) {\n        return todo.is_completed === true;\n    }).length;\n    var total_todos = todos.length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Owner\\\\Desktop\\\\React Projects\\\\todo\\\\src\\\\app\\\\page.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TODOHero__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                todos_completed: todos_completed,\n                total_todos: total_todos\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Owner\\\\Desktop\\\\React Projects\\\\todo\\\\src\\\\app\\\\page.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setTodos: setTodos\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Owner\\\\Desktop\\\\React Projects\\\\todo\\\\src\\\\app\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TODOList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                todos: todos\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Owner\\\\Desktop\\\\React Projects\\\\todo\\\\src\\\\app\\\\page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Owner\\\\Desktop\\\\React Projects\\\\todo\\\\src\\\\app\\\\page.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"yZG8enTCbBauO/jK8ws8xH2V0ms=\");\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDWTtBQUNJO0FBQ0k7QUFDQTtBQUU5QyxTQUFTSzs7SUFDUCxJQUEwQkwsa0JBQUFBLCtEQUFBQSxDQUFBQSxxREFBYyxDQUFDO1FBQ3ZDO1lBQUVPLE9BQU87WUFBYUMsSUFBSUMsS0FBS0MsTUFBTSxDQUFDQyxVQUFVO1lBQUlDLGNBQWM7UUFBTTtRQUN4RTtZQUNFTCxPQUFPO1lBQ1BDLElBQUlDLEtBQUtDLE1BQU0sQ0FBQ0MsVUFBVTtZQUMxQkMsY0FBYztRQUNoQjtRQUNBO1lBQUVMLE9BQU87WUFBYUMsSUFBSUMsS0FBS0MsTUFBTSxDQUFDQyxVQUFVO1lBQUlDLGNBQWM7UUFBTTtLQUN6RSxPQVJNQyxRQUFtQmIsb0JBQVpjLFdBQVlkO0lBUzFCLElBQU1lLGtCQUFrQkYsTUFBTUcsTUFBTSxDQUNsQyxTQUFDQztlQUFTQSxLQUFLTCxZQUFZLEtBQUs7T0FDaENNLE1BQU07SUFDUixJQUFNQyxjQUFjTixNQUFNSyxNQUFNO0lBQ2hDLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ25CLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNDLDREQUFRQTtnQkFBQ1ksaUJBQWlCQTtnQkFBaUJJLGFBQWFBOzs7Ozs7MEJBQ3pELDhEQUFDbEIsd0RBQUlBO2dCQUFDYSxVQUFVQTs7Ozs7OzBCQUNoQiw4REFBQ1YsNERBQVFBO2dCQUFDUyxPQUFPQTs7Ozs7Ozs7Ozs7O0FBR3ZCO0dBdEJTUjtLQUFBQTtBQXdCVCxpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxPd25lclxcRGVza3RvcFxcUmVhY3QgUHJvamVjdHNcXHRvZG9cXHNyY1xcYXBwXFxwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBUT0RPSGVybyBmcm9tIFwiLi4vY29tcG9uZW50cy9UT0RPSGVyb1wiO1xyXG5pbXBvcnQgVE9ET0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvVE9ET0xpc3RcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSBSZWFjdC51c2VTdGF0ZShbXHJcbiAgICB7IHRpdGxlOiBcIlNvbWUgdGFza1wiLCBpZDogc2VsZi5jcnlwdG8ucmFuZG9tVVVJRCgpLCBpc19jb21wbGV0ZWQ6IGZhbHNlIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlNvbWUgb3RoZXIgdGFza1wiLFxyXG4gICAgICBpZDogc2VsZi5jcnlwdG8ucmFuZG9tVVVJRCgpLFxyXG4gICAgICBpc19jb21wbGV0ZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgeyB0aXRsZTogXCJsYXN0IHRhc2tcIiwgaWQ6IHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKSwgaXNfY29tcGxldGVkOiBmYWxzZSB9LFxyXG4gIF0pO1xyXG4gIGNvbnN0IHRvZG9zX2NvbXBsZXRlZCA9IHRvZG9zLmZpbHRlcihcclxuICAgICh0b2RvKSA9PiB0b2RvLmlzX2NvbXBsZXRlZCA9PT0gdHJ1ZVxyXG4gICkubGVuZ3RoO1xyXG4gIGNvbnN0IHRvdGFsX3RvZG9zID0gdG9kb3MubGVuZ3RoO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8VE9ET0hlcm8gdG9kb3NfY29tcGxldGVkPXt0b2Rvc19jb21wbGV0ZWR9IHRvdGFsX3RvZG9zPXt0b3RhbF90b2Rvc30gLz5cclxuICAgICAgPEZvcm0gc2V0VG9kb3M9e3NldFRvZG9zfSAvPlxyXG4gICAgICA8VE9ET0xpc3QgdG9kb3M9e3RvZG9zfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybSIsIkhlYWRlciIsIlRPRE9IZXJvIiwiVE9ET0xpc3QiLCJIb21lIiwidXNlU3RhdGUiLCJ0aXRsZSIsImlkIiwic2VsZiIsImNyeXB0byIsInJhbmRvbVVVSUQiLCJpc19jb21wbGV0ZWQiLCJ0b2RvcyIsInNldFRvZG9zIiwidG9kb3NfY29tcGxldGVkIiwiZmlsdGVyIiwidG9kbyIsImxlbmd0aCIsInRvdGFsX3RvZG9zIiwiZGl2IiwiY2xhc3NOYW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});