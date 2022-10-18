"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const HotcarsSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({
    pnumber: {
        type: String,
        unique: true
    },
    typeV: {
        type: String
    },
    userId: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "User"
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Hotcars) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Hotcars", HotcarsSchema));


/***/ }),

/***/ 9761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _connect_dbconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4171);
/* harmony import */ var _models_Cars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8394);
/* harmony import */ var _util_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3895);



async function handler(req, res) {
    if (req.method !== "POST") {
        (0,_util_common__WEBPACK_IMPORTED_MODULE_2__/* .errorHandler */ .Po)("Invalide Request Type is not a POST", res);
    } else {
        try {
            const { pnumber , typeV , userId  } = req.body;
            await (0,_connect_dbconnect__WEBPACK_IMPORTED_MODULE_0__/* .dbConnect */ .C)();
            const htcars = new _models_Cars__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
                pnumber: pnumber,
                typeV: typeV,
                userId: userId
            });
            const savehtcars = await htcars.save();
            if (savehtcars) {
                res.status(200).json(savehtcars);
            } else {
                (0,_util_common__WEBPACK_IMPORTED_MODULE_2__/* .errorHandler */ .Po)("Something went wrong", res);
            }
        } catch (error) {
            (0,_util_common__WEBPACK_IMPORTED_MODULE_2__/* .errorHandler */ .Po)(error, res);
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [287], () => (__webpack_exec__(9761)));
module.exports = __webpack_exports__;

})();