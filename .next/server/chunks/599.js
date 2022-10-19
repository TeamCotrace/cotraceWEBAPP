"use strict";
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 4599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NA": () => (/* binding */ getValue)
/* harmony export */ });
/* unused harmony exports errorHandler, responseHandler, validateAllOnce */
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