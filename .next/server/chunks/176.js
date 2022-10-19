"use strict";
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 3485:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ list_location),
/* harmony export */   "v": () => (/* binding */ add_location)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _util_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4599);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// import * as axios from 'axios';

const add_location = async (payload)=>{
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("https://cotraceweb.vercel.app" + "/api/Location/addlocation", payload);
        return res.data;
    } catch (error) {
        return (0,_util_common__WEBPACK_IMPORTED_MODULE_1__/* .getValue */ .NA)(error, [
            "response",
            "data"
        ]);
    }
};
const list_location = async (userId)=>{
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("https://cotraceweb.vercel.app" + "/api/Location/list_location", userId);
        return res.data;
    } catch (error) {
        return (0,_util_common__WEBPACK_IMPORTED_MODULE_1__/* .getValue */ .NA)(error, [
            "response",
            "data"
        ]);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8176:
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
/* harmony import */ var _axios_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3485);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios_location__WEBPACK_IMPORTED_MODULE_2__]);
_axios_location__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Add_latlong = ({ lat , lng , rad , locName  })=>{
    // const [lat1, setlat1] = useState(lat)
    // const [lng1, setlng1] = useState(lng)
    // const [rad1, setrad1] = useState(rad)
    // const [locName1, setlocName1] = useState(Name)
    const { 0: userId , 1: setuserId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("634e86ad8b3a310a0652fcc6");
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const send_latlng = async (e)=>{
        e.preventDefault();
        const payload = {
            locName,
            lat,
            lng,
            rad,
            userId
        };
        console.log("payload", payload);
        const result = await (0,_axios_location__WEBPACK_IMPORTED_MODULE_2__/* .add_location */ .v)(payload);
        if (result.hasError == true) {
            // setErrorMessage(error);
            console.log({
                result
            });
        } else {
            console.log("location data added");
            router.replace("/");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            onSubmit: send_latlng,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                type: "submit",
                children: "Save"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Add_latlong);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;