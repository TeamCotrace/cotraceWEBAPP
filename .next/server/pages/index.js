"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! google-map-react */ \"google-map-react\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Dashfence = ({ coordinates , rad  })=>{\n    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();\n    let circle;\n    const renderMarkers = (map, maps)=>{\n        let marker = new maps.Marker({\n            position: coordinates,\n            map,\n            title: \"Hello World!\"\n        });\n        return marker;\n    };\n    const addCircle = (map, maps)=>{\n        circle = new maps.Circle({\n            strokeColor: \"#FF0000\",\n            strokeOpacity: 0.8,\n            strokeWeight: 2,\n            fillColor: \"#FF0000\",\n            fillOpacity: 0.3,\n            map,\n            center: coordinates,\n            radius: rad\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        direction: \"row\",\n        width: \"95vw\",\n        height: \"80vh\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((google_map_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n            yesIWantToUseGoogleMapApiInternals: true,\n            defaultCenter: {\n                lat: 11.772,\n                lng: 122.776\n            },\n            center: {\n                lat: 11.772,\n                lng: 122.776\n            },\n            defaultZoom: 6,\n            onGoogleApiLoaded: ({ map , maps  })=>{\n                renderMarkers(map, maps);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\nextjs\\\\cotrace\\\\pages\\\\index.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\nextjs\\\\cotrace\\\\pages\\\\index.js\",\n        lineNumber: 41,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashfence);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTtBQUM2RTtBQUNuRDtBQUNvQjtBQUU5QyxNQUFNZSxTQUFTLEdBQUcsQ0FBQyxFQUFFQyxXQUFXLEdBQUNDLEdBQUcsR0FBRSxHQUFLO0lBRXpDLE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxNQUFNLEdBQUVDLE9BQU8sR0FBRSxHQUFHakIsK0RBQWEsRUFBRTtJQUVuRCxJQUFJa0IsTUFBTTtJQUVaLE1BQU1DLGFBQWEsR0FBRyxDQUFDQyxHQUFHLEVBQUVDLElBQUksR0FBSztRQUNuQyxJQUFJQyxNQUFNLEdBQUcsSUFBSUQsSUFBSSxDQUFDRSxNQUFNLENBQUM7WUFDM0JDLFFBQVEsRUFBRVgsV0FBVztZQUNyQk8sR0FBRztZQUNISyxLQUFLLEVBQUUsY0FBYztTQUN0QixDQUFDO1FBQ0YsT0FBT0gsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFHRCxNQUFNSSxTQUFTLEdBQUcsQ0FBQ04sR0FBRyxFQUFFQyxJQUFJLEdBQUs7UUFDL0JILE1BQU0sR0FBRyxJQUFJRyxJQUFJLENBQUNNLE1BQU0sQ0FBQztZQUN2QkMsV0FBVyxFQUFFLFNBQVM7WUFDdEJDLGFBQWEsRUFBRSxHQUFHO1lBQ2xCQyxZQUFZLEVBQUUsQ0FBQztZQUNmQyxTQUFTLEVBQUUsU0FBUztZQUNwQkMsV0FBVyxFQUFFLEdBQUc7WUFFaEJaLEdBQUc7WUFDRmEsTUFBTSxFQUFFcEIsV0FBVztZQUNuQnFCLE1BQU0sRUFBRXBCLEdBQUc7U0FFYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQscUJBQ0UsOERBQUNqQixrREFBSTtRQUFDc0MsU0FBUyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLE1BQU07UUFBRUMsTUFBTSxFQUFFLE1BQU07a0JBR2pELDRFQUFDMUIseURBQWM7WUFDYjJCLGtDQUFrQyxFQUFFLElBQUk7WUFDeENDLGFBQWEsRUFBSTtnQkFBQ0MsR0FBRyxFQUFDLE1BQU07Z0JBQUNDLEdBQUcsRUFBQyxPQUFPO2FBQUM7WUFDbENSLE1BQU0sRUFBSTtnQkFBQ08sR0FBRyxFQUFDLE1BQU07Z0JBQUNDLEdBQUcsRUFBQyxPQUFPO2FBQUM7WUFDbENDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUV2QixHQUFHLEdBQUVDLElBQUksR0FBRSxHQUFLO2dCQUNwQ0YsYUFBYSxDQUFDQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQzNCLENBQUM7Ozs7O3FCQUNlOzs7OztpQkFFWCxDQUVYO0FBQ0YsQ0FBQztBQUVELGlFQUFlVCxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3RyYWNlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEZsZXgsIEJveCxJbnB1dCx1c2VEaXNjbG9zdXJlLE1vZGFsLE1vZGFsQm9keSxNb2RhbENvbnRlbnQsIE1vZGFsRm9vdGVyLFxuICBCdXR0b24sIElucHV0R3JvdXAsSW5wdXRMZWZ0QWRkb24sIENlbnRlciwgU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gXCJnb29nbGUtbWFwLXJlYWN0XCI7XG5cbmNvbnN0IERhc2hmZW5jZSA9ICh7IGNvb3JkaW5hdGVzLHJhZCB9KSA9PiB7XG5cbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpXG5cbiAgbGV0IGNpcmNsZTtcblxuY29uc3QgcmVuZGVyTWFya2VycyA9IChtYXAsIG1hcHMpID0+IHtcbiAgbGV0IG1hcmtlciA9IG5ldyBtYXBzLk1hcmtlcih7XG4gICAgcG9zaXRpb246IGNvb3JkaW5hdGVzLFxuICAgIG1hcCxcbiAgICB0aXRsZTogXCJIZWxsbyBXb3JsZCFcIixcbiAgfSk7XG4gIHJldHVybiBtYXJrZXI7XG59O1xuXG5cbmNvbnN0IGFkZENpcmNsZSA9IChtYXAsIG1hcHMpID0+IHtcbiAgY2lyY2xlID0gbmV3IG1hcHMuQ2lyY2xlKHtcbiAgICBzdHJva2VDb2xvcjogXCIjRkYwMDAwXCIsXG4gICAgc3Ryb2tlT3BhY2l0eTogMC44LFxuICAgIHN0cm9rZVdlaWdodDogMixcbiAgICBmaWxsQ29sb3I6IFwiI0ZGMDAwMFwiLFxuICAgIGZpbGxPcGFjaXR5OiAwLjMsXG4gICAgXG4gICAgbWFwLFxuICAgICBjZW50ZXI6IGNvb3JkaW5hdGVzLFxuICAgICByYWRpdXM6IHJhZFxuICAgIFxuICB9KTtcbn07XG5cblxuXG5yZXR1cm4gKFxuICA8RmxleCBkaXJlY3Rpb249eydyb3cnfSB3aWR0aD17XCI5NXZ3XCJ9IGhlaWdodD17XCI4MHZoXCJ9PiAgXG4gICAgIFxuICAgICBcbiAgICAgIDxHb29nbGVNYXBSZWFjdFxuICAgICAgICB5ZXNJV2FudFRvVXNlR29vZ2xlTWFwQXBpSW50ZXJuYWxzPXt0cnVlfVxuICAgICAgICBkZWZhdWx0Q2VudGVyID0ge3tsYXQ6MTEuNzcyLGxuZzoxMjIuNzc2fX1cbiAgICAgICAgICAgICAgIGNlbnRlciA9IHt7bGF0OjExLjc3Mixsbmc6MTIyLjc3Nn19XG4gICAgICAgICAgICAgICBkZWZhdWx0Wm9vbT17Nn1cbiAgICAgICAgb25Hb29nbGVBcGlMb2FkZWQ9eyh7IG1hcCwgbWFwcyB9KSA9PiB7XG4gICAgICAgICAgcmVuZGVyTWFya2VycyhtYXAsIG1hcHMpO1xuICAgICAgICB9fVxuICAgICAgPjwvR29vZ2xlTWFwUmVhY3Q+XG4gICAgICAgXG4gICAgICA8L0ZsZXg+XG4gXG4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGZlbmNlO1xuIl0sIm5hbWVzIjpbIkZsZXgiLCJCb3giLCJJbnB1dCIsInVzZURpc2Nsb3N1cmUiLCJNb2RhbCIsIk1vZGFsQm9keSIsIk1vZGFsQ29udGVudCIsIk1vZGFsRm9vdGVyIiwiQnV0dG9uIiwiSW5wdXRHcm91cCIsIklucHV0TGVmdEFkZG9uIiwiQ2VudGVyIiwiU3RhY2siLCJSZWFjdCIsIkdvb2dsZU1hcFJlYWN0IiwiRGFzaGZlbmNlIiwiY29vcmRpbmF0ZXMiLCJyYWQiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwiY2lyY2xlIiwicmVuZGVyTWFya2VycyIsIm1hcCIsIm1hcHMiLCJtYXJrZXIiLCJNYXJrZXIiLCJwb3NpdGlvbiIsInRpdGxlIiwiYWRkQ2lyY2xlIiwiQ2lyY2xlIiwic3Ryb2tlQ29sb3IiLCJzdHJva2VPcGFjaXR5Iiwic3Ryb2tlV2VpZ2h0IiwiZmlsbENvbG9yIiwiZmlsbE9wYWNpdHkiLCJjZW50ZXIiLCJyYWRpdXMiLCJkaXJlY3Rpb24iLCJ3aWR0aCIsImhlaWdodCIsInllc0lXYW50VG9Vc2VHb29nbGVNYXBBcGlJbnRlcm5hbHMiLCJkZWZhdWx0Q2VudGVyIiwibGF0IiwibG5nIiwiZGVmYXVsdFpvb20iLCJvbkdvb2dsZUFwaUxvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "google-map-react":
/*!***********************************!*\
  !*** external "google-map-react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("google-map-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();