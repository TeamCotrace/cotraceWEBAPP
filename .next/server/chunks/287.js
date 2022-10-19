"use strict";
exports.id = 287;
exports.ids = [287];
exports.modules = {

/***/ 4171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ dbConnect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

global.mongoose = {
    conn: null,
    promise: null
};
async function dbConnect() {
    if (global.mongoose && global.mongoose.conn) {
        console.log("connection all ready created");
        return global.mongoose.conn;
    } else {
        console.log("First time create new connection");
        const connString = "mongodb+srv://admin:zGpNvLsczrPC3bkm@cluster0.e2gsa4p.mongodb.net/cotraceDB?retryWrites=true&w=majority";
        const promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(connString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true
        }).then((mongoose)=>mongoose);
        global.mongoose = {
            conn: await promise,
            promise
        };
        return await promise;
    }
}


/***/ }),

/***/ 3895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E1": () => (/* binding */ responseHandler),
/* harmony export */   "Po": () => (/* binding */ errorHandler)
/* harmony export */ });
/* unused harmony exports validateAllOnce, getValue */
const errorHandler = (data, res, code = 400)=>{
    res.status(code).json({
        hasError: true,
        errorMessage: data
    });
};
const responseHandler = (data, res, code = 200)=>{
    res.status(code).json({
        hasError: false,
        body: data
    });
};
const validateAllOnce = (fields)=>{
    for(let key in fields){
        if (fields[key].trim() === "") {
            throw `${key} validate required`;
        }
    }
};
const getValue = (obj, path, defaultValue)=>{
    try {
        if (!(obj instanceof Array)) {
            let myValue = obj;
            for (let key of path){
                if (!(key in myValue)) {
                    return defaultValue;
                } else {
                    myValue = myValue[key];
                }
            }
            return myValue;
        }
    } catch (error) {
        return defaultValue;
    }
};


/***/ })

};
;