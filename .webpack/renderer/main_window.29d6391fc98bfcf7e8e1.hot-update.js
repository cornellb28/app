"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemb_app"]("main_window",{

/***/ "./node_modules/@restart/ui/esm/Button.js":
/*!************************************************!*\
  !*** ./node_modules/@restart/ui/esm/Button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"isTrivialHref\": () => (/* binding */ isTrivialHref),\n/* harmony export */   \"useButtonProps\": () => (/* binding */ useButtonProps)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst _excluded = [\"as\", \"disabled\"];\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\n\n\nfunction isTrivialHref(href) {\n  return !href || href.trim() === '#';\n}\nfunction useButtonProps({\n  tagName,\n  disabled,\n  href,\n  target,\n  rel,\n  role,\n  onClick,\n  tabIndex = 0,\n  type\n}) {\n  if (!tagName) {\n    if (href != null || target != null || rel != null) {\n      tagName = 'a';\n    } else {\n      tagName = 'button';\n    }\n  }\n\n  const meta = {\n    tagName\n  };\n\n  if (tagName === 'button') {\n    return [{\n      type: type || 'button',\n      disabled\n    }, meta];\n  }\n\n  const handleClick = event => {\n    if (disabled || tagName === 'a' && isTrivialHref(href)) {\n      event.preventDefault();\n    }\n\n    if (disabled) {\n      event.stopPropagation();\n      return;\n    }\n\n    onClick == null ? void 0 : onClick(event);\n  };\n\n  const handleKeyDown = event => {\n    if (event.key === ' ') {\n      event.preventDefault();\n      handleClick(event);\n    }\n  };\n\n  if (tagName === 'a') {\n    // Ensure there's a href so Enter can trigger anchor button.\n    href || (href = '#');\n\n    if (disabled) {\n      href = undefined;\n    }\n  }\n\n  return [{\n    role: role != null ? role : 'button',\n    // explicitly undefined so that it overrides the props disabled in a spread\n    // e.g. <Tag {...props} {...hookProps} />\n    disabled: undefined,\n    tabIndex: disabled ? undefined : tabIndex,\n    href,\n    target: tagName === 'a' ? target : undefined,\n    'aria-disabled': !disabled ? undefined : disabled,\n    rel: tagName === 'a' ? rel : undefined,\n    onClick: handleClick,\n    onKeyDown: handleKeyDown\n  }, meta];\n}\nconst Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {\n  let {\n    as: asProp,\n    disabled\n  } = _ref,\n      props = _objectWithoutPropertiesLoose(_ref, _excluded);\n\n  const [buttonProps, {\n    tagName: Component\n  }] = useButtonProps(Object.assign({\n    tagName: asProp,\n    disabled\n  }, props));\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, Object.assign({}, props, buttonProps, {\n    ref: ref\n  }));\n});\nButton.displayName = 'Button';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvdWkvZXNtL0J1dHRvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRStCO0FBQ2lCO0FBQ3pDO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsV0FBVyxjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw0QkFBNEIsNkNBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCLHNEQUFJLDRCQUE0QjtBQUN0RDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWItYXBwLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L3VpL2VzbS9CdXR0b24uanM/NDRlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfZXhjbHVkZWQgPSBbXCJhc1wiLCBcImRpc2FibGVkXCJdO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc1RyaXZpYWxIcmVmKGhyZWYpIHtcbiAgcmV0dXJuICFocmVmIHx8IGhyZWYudHJpbSgpID09PSAnIyc7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQnV0dG9uUHJvcHMoe1xuICB0YWdOYW1lLFxuICBkaXNhYmxlZCxcbiAgaHJlZixcbiAgdGFyZ2V0LFxuICByZWwsXG4gIHJvbGUsXG4gIG9uQ2xpY2ssXG4gIHRhYkluZGV4ID0gMCxcbiAgdHlwZVxufSkge1xuICBpZiAoIXRhZ05hbWUpIHtcbiAgICBpZiAoaHJlZiAhPSBudWxsIHx8IHRhcmdldCAhPSBudWxsIHx8IHJlbCAhPSBudWxsKSB7XG4gICAgICB0YWdOYW1lID0gJ2EnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWdOYW1lID0gJ2J1dHRvbic7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWV0YSA9IHtcbiAgICB0YWdOYW1lXG4gIH07XG5cbiAgaWYgKHRhZ05hbWUgPT09ICdidXR0b24nKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiB0eXBlIHx8ICdidXR0b24nLFxuICAgICAgZGlzYWJsZWRcbiAgICB9LCBtZXRhXTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xuICAgIGlmIChkaXNhYmxlZCB8fCB0YWdOYW1lID09PSAnYScgJiYgaXNUcml2aWFsSHJlZihocmVmKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uQ2xpY2sgPT0gbnVsbCA/IHZvaWQgMCA6IG9uQ2xpY2soZXZlbnQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJyAnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaGFuZGxlQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBpZiAodGFnTmFtZSA9PT0gJ2EnKSB7XG4gICAgLy8gRW5zdXJlIHRoZXJlJ3MgYSBocmVmIHNvIEVudGVyIGNhbiB0cmlnZ2VyIGFuY2hvciBidXR0b24uXG4gICAgaHJlZiB8fCAoaHJlZiA9ICcjJyk7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGhyZWYgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFt7XG4gICAgcm9sZTogcm9sZSAhPSBudWxsID8gcm9sZSA6ICdidXR0b24nLFxuICAgIC8vIGV4cGxpY2l0bHkgdW5kZWZpbmVkIHNvIHRoYXQgaXQgb3ZlcnJpZGVzIHRoZSBwcm9wcyBkaXNhYmxlZCBpbiBhIHNwcmVhZFxuICAgIC8vIGUuZy4gPFRhZyB7Li4ucHJvcHN9IHsuLi5ob29rUHJvcHN9IC8+XG4gICAgZGlzYWJsZWQ6IHVuZGVmaW5lZCxcbiAgICB0YWJJbmRleDogZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB0YWJJbmRleCxcbiAgICBocmVmLFxuICAgIHRhcmdldDogdGFnTmFtZSA9PT0gJ2EnID8gdGFyZ2V0IDogdW5kZWZpbmVkLFxuICAgICdhcmlhLWRpc2FibGVkJzogIWRpc2FibGVkID8gdW5kZWZpbmVkIDogZGlzYWJsZWQsXG4gICAgcmVsOiB0YWdOYW1lID09PSAnYScgPyByZWwgOiB1bmRlZmluZWQsXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duXG4gIH0sIG1ldGFdO1xufVxuY29uc3QgQnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKF9yZWYsIHJlZikgPT4ge1xuICBsZXQge1xuICAgIGFzOiBhc1Byb3AsXG4gICAgZGlzYWJsZWRcbiAgfSA9IF9yZWYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCk7XG5cbiAgY29uc3QgW2J1dHRvblByb3BzLCB7XG4gICAgdGFnTmFtZTogQ29tcG9uZW50XG4gIH1dID0gdXNlQnV0dG9uUHJvcHMoT2JqZWN0LmFzc2lnbih7XG4gICAgdGFnTmFtZTogYXNQcm9wLFxuICAgIGRpc2FibGVkXG4gIH0sIHByb3BzKSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCBidXR0b25Qcm9wcywge1xuICAgIHJlZjogcmVmXG4gIH0pKTtcbn0pO1xuQnV0dG9uLmRpc3BsYXlOYW1lID0gJ0J1dHRvbic7XG5leHBvcnQgZGVmYXVsdCBCdXR0b247Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@restart/ui/esm/Button.js\n");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Button.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Button.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _restart_ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/ui/Button */ \"./node_modules/@restart/ui/esm/Button.js\");\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\nconst defaultProps = {\n  variant: 'primary',\n  active: false,\n  disabled: false\n};\nconst Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({\n  as,\n  bsPrefix,\n  variant,\n  size,\n  active,\n  className,\n  ...props\n}, ref) => {\n  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'btn');\n  const [buttonProps, {\n    tagName\n  }] = (0,_restart_ui_Button__WEBPACK_IMPORTED_MODULE_4__.useButtonProps)({\n    tagName: as,\n    ...props\n  });\n  const Component = tagName;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, { ...buttonProps,\n    ...props,\n    ref: ref,\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && props.disabled && 'disabled')\n  });\n});\nButton.displayName = 'Button';\nButton.defaultProps = defaultProps;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9CdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0M7QUFDTDtBQUNxQjtBQUNDO0FBQ0w7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUJBQWlCLGtFQUFrQjtBQUNuQztBQUNBO0FBQ0EsR0FBRyxJQUFJLGtFQUFjO0FBQ3JCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQkFBc0Isc0RBQUksY0FBYztBQUN4QztBQUNBO0FBQ0EsZUFBZSxpREFBVSxzREFBc0QsT0FBTyxHQUFHLFFBQVEsY0FBYyxPQUFPLEdBQUcsS0FBSztBQUM5SCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpRUFBZSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWItYXBwLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vQnV0dG9uLmpzP2Y5ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VCdXR0b25Qcm9wcyB9IGZyb20gJ0ByZXN0YXJ0L3VpL0J1dHRvbic7XG5pbXBvcnQgeyB1c2VCb290c3RyYXBQcmVmaXggfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogJ3ByaW1hcnknLFxuICBhY3RpdmU6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2Vcbn07XG5jb25zdCBCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoe1xuICBhcyxcbiAgYnNQcmVmaXgsXG4gIHZhcmlhbnQsXG4gIHNpemUsXG4gIGFjdGl2ZSxcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufSwgcmVmKSA9PiB7XG4gIGNvbnN0IHByZWZpeCA9IHVzZUJvb3RzdHJhcFByZWZpeChic1ByZWZpeCwgJ2J0bicpO1xuICBjb25zdCBbYnV0dG9uUHJvcHMsIHtcbiAgICB0YWdOYW1lXG4gIH1dID0gdXNlQnV0dG9uUHJvcHMoe1xuICAgIHRhZ05hbWU6IGFzLFxuICAgIC4uLnByb3BzXG4gIH0pO1xuICBjb25zdCBDb21wb25lbnQgPSB0YWdOYW1lO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goQ29tcG9uZW50LCB7IC4uLmJ1dHRvblByb3BzLFxuICAgIC4uLnByb3BzLFxuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsIHByZWZpeCwgYWN0aXZlICYmICdhY3RpdmUnLCB2YXJpYW50ICYmIGAke3ByZWZpeH0tJHt2YXJpYW50fWAsIHNpemUgJiYgYCR7cHJlZml4fS0ke3NpemV9YCwgcHJvcHMuaHJlZiAmJiBwcm9wcy5kaXNhYmxlZCAmJiAnZGlzYWJsZWQnKVxuICB9KTtcbn0pO1xuQnV0dG9uLmRpc3BsYXlOYW1lID0gJ0J1dHRvbic7XG5CdXR0b24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-bootstrap/esm/Button.js\n");

/***/ }),

/***/ "./src/components/FileCard.tsx":
/*!*************************************!*\
  !*** ./src/components/FileCard.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Card_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\"));\nconst Button_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\"));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nfunction FileCard({ track }) {\n    return (react_1.default.createElement(Card_1.default, null,\n        react_1.default.createElement(Card_1.default.Img, { variant: \"top\", src: \"holder.js/100px180\" }),\n        react_1.default.createElement(Card_1.default.Body, null,\n            react_1.default.createElement(Card_1.default.Title, null, \"Card Title\"),\n            react_1.default.createElement(Card_1.default.Text, null, \"Some quick example text to build on the card title and make up the bulk of the card's content.\"),\n            react_1.default.createElement(Button_1.default, { variant: \"primary\" }, \"Go somewhere\"))));\n}\nexports[\"default\"] = FileCard;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4SEFBd0M7QUFDeEMsb0lBQTRDO0FBQzVDLG1HQUEwQjtBQU0xQixTQUF3QixRQUFRLENBQUMsRUFBRSxLQUFLLEVBQVM7SUFDL0MsT0FBTyxDQUNMLDhCQUFDLGNBQUk7UUFDSCw4QkFBQyxjQUFJLENBQUMsR0FBRyxJQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLG9CQUFvQixHQUFHO1FBQ25ELDhCQUFDLGNBQUksQ0FBQyxJQUFJO1lBQ1IsOEJBQUMsY0FBSSxDQUFDLEtBQUsscUJBQXdCO1lBQ25DLDhCQUFDLGNBQUksQ0FBQyxJQUFJLHlHQUdFO1lBQ1osOEJBQUMsZ0JBQU0sSUFBQyxPQUFPLEVBQUMsU0FBUyxtQkFBc0IsQ0FDckMsQ0FDUCxDQUNSLENBQUM7QUFDSixDQUFDO0FBZEQsOEJBY0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYi1hcHAvLi9zcmMvY29tcG9uZW50cy9GaWxlQ2FyZC50c3g/ZTk0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFja01ldGEgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgVFJBQ0sgPSB7XG4gIHRyYWNrOiB0cmFja01ldGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlQ2FyZCh7IHRyYWNrIH06IFRSQUNLKSB7XG4gIHJldHVybiAoXG4gICAgPENhcmQ+XG4gICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz1cImhvbGRlci5qcy8xMDBweDE4MFwiIC8+XG4gICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICA8Q2FyZC5UaXRsZT5DYXJkIFRpdGxlPC9DYXJkLlRpdGxlPlxuICAgICAgICA8Q2FyZC5UZXh0PlxuICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZVxuICAgICAgICAgIGJ1bGsgb2YgdGhlIGNhcmQncyBjb250ZW50LlxuICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPkdvIHNvbWV3aGVyZTwvQnV0dG9uPlxuICAgICAgPC9DYXJkLkJvZHk+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FileCard.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("754dfed96f3b6b6c1948")
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __webpack_require__ !== 'undefined') __webpack_require__.ab = "/Volumes/MUSIKBUCKET/app/.webpack/renderer" + "/native_modules/";
/******/ 
/******/ }
);