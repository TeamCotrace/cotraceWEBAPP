"use strict";
(() => {
var exports = {};
exports.id = 323;
exports.ids = [323,43];
exports.modules = {

/***/ 2277:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2583);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _axios_hotcars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7610);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _addhotcars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4960);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios_hotcars__WEBPACK_IMPORTED_MODULE_3__, _addhotcars__WEBPACK_IMPORTED_MODULE_7__]);
([_axios_hotcars__WEBPACK_IMPORTED_MODULE_3__, _addhotcars__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Hotcars_list = ()=>{
    const { 0: data , 1: setdata  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: userId , 1: setuserId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("634e86ad8b3a310a0652fcc6");
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const getData = async (userId)=>{
        const payload = {
            userId
        };
        const datalist = await (0,_axios_hotcars__WEBPACK_IMPORTED_MODULE_3__/* .list_hotcars */ .j)(payload);
        if (!datalist.hasError == true) {
            if (!datalist.body == "") {
                console.log(datalist.body);
                setdata(datalist.body);
            }
        } else {
            console.log("wala data");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getData(userId);
    }, [
        userId
    ]);
    const columns = [
        {
            name: "Plate Number",
            selector: (row)=>row.pnumber,
            sortable: true
        },
        {
            name: "Vehicle Type",
            selector: (row)=>row.typeV,
            sortable: true
        }, 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
        direction: "column",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_addhotcars__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                children: [
                    console.log("list", data),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_data_table_component__WEBPACK_IMPORTED_MODULE_2___default()), {
                        columns: columns,
                        data: data,
                        title: "",
                        defaultSortFieldId: "createdAt",
                        pagination: true
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hotcars_list);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2583:
/***/ ((module) => {

module.exports = require("react-data-table-component");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675,599,960], () => (__webpack_exec__(2277)));
module.exports = __webpack_exports__;

})();