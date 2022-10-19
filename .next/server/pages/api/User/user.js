"use strict";
(() => {
var exports = {};
exports.id = 756;
exports.ids = [756];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./connect/dbconnect.js
var dbconnect = __webpack_require__(4171);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/User.js

const UserSchema = external_mongoose_default().Schema({
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    userlevel: {
        type: Number,
        index: true,
        trim: true
    }
}, {
    timestamps: true
});
/* harmony default export */ const User = ((external_mongoose_default()).models.User || external_mongoose_default().model("User", UserSchema));

// EXTERNAL MODULE: ./util/common.js
var common = __webpack_require__(3895);
;// CONCATENATED MODULE: ./pages/api/User/user.js



async function handler(req, res) {
    if (req.method !== "POST") {
        (0,common/* errorHandler */.Po)("Invalide Request Type is not a POST", res);
    } else {
        try {
            const { email , password , userlevel  } = req.body;
            await (0,dbconnect/* dbConnect */.C)();
            const adduser = new User({
                email: email,
                password: password,
                userlevel: userlevel
            });
            const saveUser = await adduser.save();
            if (saveUser) {
                res.status(200).json(saveUser);
            } else {
                (0,common/* errorHandler */.Po)("Something went wrong", res);
            }
        } catch (error) {
            (0,common/* errorHandler */.Po)(error, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [287], () => (__webpack_exec__(1039)));
module.exports = __webpack_exports__;

})();