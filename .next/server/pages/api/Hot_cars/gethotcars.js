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
exports.id = "pages/api/Hot_cars/gethotcars";
exports.ids = ["pages/api/Hot_cars/gethotcars"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./connect/dbconnect.js":
/*!******************************!*\
  !*** ./connect/dbconnect.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dbConnect\": () => (/* binding */ dbConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nglobal.mongoose = {\n    conn: null,\n    promise: null\n};\nasync function dbConnect() {\n    if (global.mongoose && global.mongoose.conn) {\n        console.log(\"connection all ready created\");\n        return global.mongoose.conn;\n    } else {\n        console.log(\"First time create new connection\");\n        const connString = \"mongodb+srv://admin:zGpNvLsczrPC3bkm@cluster0.e2gsa4p.mongodb.net/cotraceDB?retryWrites=true&w=majority\";\n        const promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(connString, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            autoIndex: true\n        }).then((mongoose)=>mongoose);\n        global.mongoose = {\n            conn: await promise,\n            promise\n        };\n        return await promise;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25uZWN0L2RiY29ubmVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDZ0M7QUFFaENDLE1BQU0sQ0FBQ0QsUUFBUSxHQUFHO0lBQ2RFLElBQUksRUFBQyxJQUFJO0lBQ1RDLE9BQU8sRUFBQyxJQUFJO0NBQ2Y7QUFHTSxlQUFlQyxTQUFTLEdBQUU7SUFFN0IsSUFBR0gsTUFBTSxDQUFDRCxRQUFRLElBQUlDLE1BQU0sQ0FBQ0QsUUFBUSxDQUFDRSxJQUFJLEVBQUM7UUFFdkNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFFM0MsT0FBT0wsTUFBTSxDQUFDRCxRQUFRLENBQUNFLElBQUksQ0FBQztJQUVoQyxPQUFNO1FBRUZHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFFaEQsTUFBTUMsVUFBVSxHQUFHLHlHQUF5RztRQUU1SCxNQUFNSixPQUFPLEdBQUdILHVEQUFnQixDQUFDTyxVQUFVLEVBQUM7WUFFeENFLGVBQWUsRUFBRSxJQUFJO1lBQ3JCQyxrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCQyxTQUFTLEVBQUMsSUFBSTtTQUVqQixDQUFDLENBQUNDLElBQUksQ0FBQ1osQ0FBQUEsUUFBUSxHQUFJQSxRQUFRLENBQUM7UUFFN0JDLE1BQU0sQ0FBQ0QsUUFBUSxHQUFHO1lBQ2RFLElBQUksRUFBRSxNQUFNQyxPQUFPO1lBQ25CQSxPQUFPO1NBQ1Y7UUFFRCxPQUFPLE1BQU1BLE9BQU87SUFFeEIsQ0FBQztBQUdOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3RyYWNlLy4vY29ubmVjdC9kYmNvbm5lY3QuanM/ODE0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmdsb2JhbC5tb25nb29zZSA9IHtcclxuICAgIGNvbm46bnVsbCxcclxuICAgIHByb21pc2U6bnVsbFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpe1xyXG5cclxuICAgIGlmKGdsb2JhbC5tb25nb29zZSAmJiBnbG9iYWwubW9uZ29vc2UuY29ubil7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0aW9uIGFsbCByZWFkeSBjcmVhdGVkJyk7XHJcbiAgICAgXHJcbiAgICAgICAgIHJldHVybiBnbG9iYWwubW9uZ29vc2UuY29ubjtcclxuICAgICAgICAgXHJcbiAgICAgfWVsc2Uge1xyXG4gICAgIFxyXG4gICAgICAgICBjb25zb2xlLmxvZygnRmlyc3QgdGltZSBjcmVhdGUgbmV3IGNvbm5lY3Rpb24nKTtcclxuXHJcbiAgICAgICAgIGNvbnN0IGNvbm5TdHJpbmcgPSAnbW9uZ29kYitzcnY6Ly9hZG1pbjp6R3BOdkxzY3pyUEMzYmttQGNsdXN0ZXIwLmUyZ3NhNHAubW9uZ29kYi5uZXQvY290cmFjZURCP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcclxuXHJcbiAgICAgICAgIGNvbnN0IHByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KGNvbm5TdHJpbmcse1xyXG4gICAgIFxyXG4gICAgICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgICAgICAgICAgYXV0b0luZGV4OnRydWUsXHJcbiAgICAgXHJcbiAgICAgICAgIH0pLnRoZW4obW9uZ29vc2UgPT4gbW9uZ29vc2UpO1xyXG4gICAgIFxyXG4gICAgICAgICBnbG9iYWwubW9uZ29vc2UgPSB7XHJcbiAgICAgICAgICAgICBjb25uOiBhd2FpdCBwcm9taXNlLFxyXG4gICAgICAgICAgICAgcHJvbWlzZVxyXG4gICAgICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgIHJldHVybiBhd2FpdCBwcm9taXNlXHJcbiAgICAgXHJcbiAgICAgfVxyXG5cclxuXHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjb25uU3RyaW5nIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImF1dG9JbmRleCIsInRoZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./connect/dbconnect.js\n");

/***/ }),

/***/ "(api)/./models/Cars.js":
/*!************************!*\
  !*** ./models/Cars.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst HotcarsSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n    pnumber: {\n        type: String\n    },\n    typeV: {\n        type: String\n    },\n    userId: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n        ref: \"User\"\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Hotcars) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Hotcars\", HotcarsSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQ2Fycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFZ0M7QUFFaEMsTUFBTUMsYUFBYSxHQUFHRCxzREFBZSxDQUFDO0lBSWxDRyxPQUFPLEVBQUU7UUFDTEMsSUFBSSxFQUFDQyxNQUFNO0tBRWQ7SUFFREMsS0FBSyxFQUFFO1FBQ0hGLElBQUksRUFBQ0MsTUFBTTtLQUdkO0lBRURFLE1BQU0sRUFBRTtRQUNKSCxJQUFJLEVBQUVKLHVFQUE4QjtRQUNwQ1UsR0FBRyxFQUFFLE1BQU07S0FDZDtDQUtKLEVBQUM7SUFFRUMsVUFBVSxFQUFFLElBQUk7Q0FFbkIsQ0FBQztBQUlGLGlFQUFlWCxnRUFBdUIsSUFBSUEscURBQWMsQ0FBQyxTQUFTLEVBQUVDLGFBQWEsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY290cmFjZS8uL21vZGVscy9DYXJzLmpzPzY1ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBIb3RjYXJzU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHsgICAgXHJcbiAgICBcclxuICBcclxuICAgIFxyXG4gICAgcG51bWJlcjoge1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHR5cGVWOiB7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsICAgICAgIFxyXG5cclxuXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgdXNlcklkOiB7XHJcbiAgICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgICAgIHJlZjogXCJVc2VyXCIsICAgICAgICBcclxuICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG59LHtcclxuXHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Ib3RjYXJzIHx8IG1vbmdvb3NlLm1vZGVsKCdIb3RjYXJzJywgSG90Y2Fyc1NjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiSG90Y2Fyc1NjaGVtYSIsIlNjaGVtYSIsInBudW1iZXIiLCJ0eXBlIiwiU3RyaW5nIiwidHlwZVYiLCJ1c2VySWQiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIkhvdGNhcnMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Cars.js\n");

/***/ }),

/***/ "(api)/./pages/api/Hot_cars/gethotcars.js":
/*!******************************************!*\
  !*** ./pages/api/Hot_cars/gethotcars.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _connect_dbconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../connect/dbconnect */ \"(api)/./connect/dbconnect.js\");\n/* harmony import */ var _models_Cars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Cars */ \"(api)/./models/Cars.js\");\n/* harmony import */ var _util_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/common */ \"(api)/./util/common.js\");\n\n\n\nasync function handler(req, res) {\n    try {\n        const { pnumber  } = req.body;\n        await (0,_connect_dbconnect__WEBPACK_IMPORTED_MODULE_0__.dbConnect)();\n        console.log(pnumber);\n        const getdata = await _models_Cars__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aggregate([\n            {\n                $match: {\n                    pnumber: pnumber\n                }\n            }, \n        ]).exec();\n        if (getdata) {\n            res.status(200).json(getdata);\n        } else {\n            (0,_util_common__WEBPACK_IMPORTED_MODULE_2__.errorHandler)(\"Something went wrong\", res);\n        }\n    } catch (error) {\n        (0,_util_common__WEBPACK_IMPORTED_MODULE_2__.errorHandler)(error, res);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvSG90X2NhcnMvZ2V0aG90Y2Fycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVEO0FBQ1o7QUFDeUI7QUFHckQsZUFBZUksT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUcxQyxJQUFJO1FBRUYsTUFBTSxFQUFFQyxPQUFPLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxJQUFJO1FBRTVCLE1BQU1SLDZEQUFTLEVBQUUsQ0FBQztRQUVsQlMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE9BQU8sQ0FBQztRQUVwQixNQUFNSSxPQUFPLEdBQUcsTUFBTVYsOERBQWlCLENBQUM7WUFFcEM7Z0JBQ0VZLE1BQU0sRUFBRztvQkFBRU4sT0FBTyxFQUFFQSxPQUFPO2lCQUFDO2FBQzdCO1NBR0osQ0FBQyxDQUFDTyxJQUFJLEVBQUU7UUFHVCxJQUFHSCxPQUFPLEVBQUM7WUFFUEwsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsT0FBTyxDQUFDO1FBRWpDLE9BQUs7WUFFRFQsMERBQVksQ0FBQyxzQkFBc0IsRUFBRUksR0FBRyxDQUFDO1FBRTdDLENBQUM7SUFDSCxFQUFFLE9BQU9XLEtBQUssRUFBRTtRQUVkZiwwREFBWSxDQUFDZSxLQUFLLEVBQUVYLEdBQUcsQ0FBQyxDQUFDO0lBRTNCLENBQUM7QUFFTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY290cmFjZS8uL3BhZ2VzL2FwaS9Ib3RfY2Fycy9nZXRob3RjYXJzLmpzPzU2NTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGJDb25uZWN0IH0gZnJvbSBcIi4uLy4uLy4uL2Nvbm5lY3QvZGJjb25uZWN0XCI7XHJcbmltcG9ydCBIb3RjYXJzIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvQ2Fyc1wiO1xyXG5pbXBvcnQgeyBlcnJvckhhbmRsZXIscmVzcG9uc2VIYW5kbGVyIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvY29tbW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgXHJcbiAgICAgICAgY29uc3QgeyBwbnVtYmVyIH0gPSByZXEuYm9keTtcclxuICBcclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTsgICAgIFxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhwbnVtYmVyKVxyXG4gICAgICAgICBcclxuICAgICAgICBjb25zdCBnZXRkYXRhID0gYXdhaXQgSG90Y2Fycy5hZ2dyZWdhdGUoW1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAkbWF0Y2ggOiB7IHBudW1iZXI6IHBudW1iZXJ9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIF0pLmV4ZWMoKTtcclxuXHJcblxyXG4gICAgICAgIGlmKGdldGRhdGEpe1xyXG5cclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZ2V0ZGF0YSlcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICBlcnJvckhhbmRsZXIoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiLCByZXMpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgZXJyb3JIYW5kbGVyKGVycm9yLCByZXMpO1xyXG5cclxuICAgICAgfVxyXG4gICAgXHJcbiAgfVxyXG4gICJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJIb3RjYXJzIiwiZXJyb3JIYW5kbGVyIiwicmVzcG9uc2VIYW5kbGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBudW1iZXIiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImdldGRhdGEiLCJhZ2dyZWdhdGUiLCIkbWF0Y2giLCJleGVjIiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/Hot_cars/gethotcars.js\n");

/***/ }),

/***/ "(api)/./util/common.js":
/*!************************!*\
  !*** ./util/common.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorHandler\": () => (/* binding */ errorHandler),\n/* harmony export */   \"getValue\": () => (/* binding */ getValue),\n/* harmony export */   \"responseHandler\": () => (/* binding */ responseHandler),\n/* harmony export */   \"validateAllOnce\": () => (/* binding */ validateAllOnce)\n/* harmony export */ });\nconst errorHandler = (data, res, code = 400)=>{\n    res.status(code).json({\n        hasError: true,\n        errorMessage: data\n    });\n};\nconst responseHandler = (data, res, code = 200)=>{\n    res.status(code).json({\n        hasError: false,\n        body: data\n    });\n};\nconst validateAllOnce = (fields)=>{\n    for(let key in fields){\n        if (fields[key].trim() === \"\") {\n            throw `${key} validate required`;\n        }\n    }\n};\nconst getValue = (obj, path, defaultValue)=>{\n    try {\n        if (!(obj instanceof Array)) {\n            let myValue = obj;\n            for (let key of path){\n                if (!(key in myValue)) {\n                    return defaultValue;\n                } else {\n                    myValue = myValue[key];\n                }\n            }\n            return myValue;\n        }\n    } catch (error) {\n        return defaultValue;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL2NvbW1vbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ08sTUFBTUEsWUFBWSxHQUFHLENBQUNDLElBQUksRUFBQ0MsR0FBRyxFQUFDQyxJQUFJLEdBQUcsR0FBRyxHQUFLO0lBRWpERCxHQUFHLENBQUNFLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDLENBQUNFLElBQUksQ0FBQztRQUNsQkMsUUFBUSxFQUFDLElBQUk7UUFDYkMsWUFBWSxFQUFDTixJQUFJO0tBRXBCLENBQUMsQ0FBQztBQUVQLENBQUM7QUFHTSxNQUFNTyxlQUFlLEdBQUcsQ0FBQ1AsSUFBSSxFQUFDQyxHQUFHLEVBQUNDLElBQUksR0FBRyxHQUFHLEdBQUs7SUFDeERELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDRCxJQUFJLENBQUMsQ0FBQ0UsSUFBSSxDQUFDO1FBQ2xCQyxRQUFRLEVBQUMsS0FBSztRQUNkRyxJQUFJLEVBQUNSLElBQUk7S0FDWixDQUFDLENBQUM7QUFDSCxDQUFDO0FBRU0sTUFBTVMsZUFBZSxHQUFHLENBQUNDLE1BQU0sR0FBSztJQUUzQyxJQUFJLElBQUlDLEdBQUcsSUFBSUQsTUFBTSxDQUFDO1FBQ2xCLElBQUlBLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBQztZQUMxQixNQUFNLENBQUMsRUFBRUQsR0FBRyxDQUFDLGtCQUFrQixDQUFDO1FBRXBDLENBQUM7SUFDTCxDQUFDO0FBRUQsQ0FBQztBQUVNLE1BQU1FLFFBQVEsR0FBRyxDQUFDQyxHQUFHLEVBQUNDLElBQUksRUFBQ0MsWUFBWSxHQUFLO0lBQ25ELElBQUk7UUFDQSxJQUFHLENBQUVGLENBQUFBLEdBQUcsWUFBWUcsS0FBSyxHQUFFO1lBQ3ZCLElBQUlDLE9BQU8sR0FBR0osR0FBRztZQUNqQixLQUFJLElBQUlILEdBQUcsSUFBSUksSUFBSSxDQUFDO2dCQUNoQixJQUFHLENBQUVKLENBQUFBLEdBQUcsSUFBSU8sT0FBTyxHQUFFO29CQUNqQixPQUFPRixZQUFZLENBQUM7Z0JBQ3hCLE9BQU07b0JBQ0ZFLE9BQU8sR0FBR0EsT0FBTyxDQUFDUCxHQUFHLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztZQUNMLENBQUM7WUFDRCxPQUFPTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztJQUNMLEVBQUMsT0FBTUMsS0FBSyxFQUFDO1FBRVQsT0FBT0gsWUFBWSxDQUFDO0lBRXhCLENBQUM7QUFDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY290cmFjZS8uL3V0aWwvY29tbW9uLmpzP2M2ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjb25zdCBlcnJvckhhbmRsZXIgPSAoZGF0YSxyZXMsY29kZSA9IDQwMCkgPT4ge1xyXG4gICAgXHJcbiAgICByZXMuc3RhdHVzKGNvZGUpLmpzb24oe1xyXG4gICAgICAgIGhhc0Vycm9yOnRydWUsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOmRhdGEgICAgICAgICAgIFxyXG5cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXNwb25zZUhhbmRsZXIgPSAoZGF0YSxyZXMsY29kZSA9IDIwMCkgPT4ge1xyXG5yZXMuc3RhdHVzKGNvZGUpLmpzb24oe1xyXG4gICAgaGFzRXJyb3I6ZmFsc2UsXHJcbiAgICBib2R5OmRhdGFcclxufSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUFsbE9uY2UgPSAoZmllbGRzKSA9PiB7XHJcblxyXG5mb3IobGV0IGtleSBpbiBmaWVsZHMpe1xyXG4gICAgaWYgKGZpZWxkc1trZXldLnRyaW0oKSA9PT0gXCJcIil7XHJcbiAgICAgICAgdGhyb3cgYCR7a2V5fSB2YWxpZGF0ZSByZXF1aXJlZGBcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRWYWx1ZSA9IChvYmoscGF0aCxkZWZhdWx0VmFsdWUpID0+IHsgICAgXHJcbnRyeSB7XHJcbiAgICBpZighKG9iaiBpbnN0YW5jZW9mIEFycmF5KSl7XHJcbiAgICAgICAgbGV0IG15VmFsdWUgPSBvYmo7XHJcbiAgICAgICAgZm9yKGxldCBrZXkgb2YgcGF0aCl7XHJcbiAgICAgICAgICAgIGlmKCEoa2V5IGluIG15VmFsdWUpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7ICAgIFxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBteVZhbHVlID0gbXlWYWx1ZVtrZXldO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXlWYWx1ZTtcclxuICAgIH1cclxufWNhdGNoKGVycm9yKXtcclxuICAgXHJcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG5cclxufVxyXG59Il0sIm5hbWVzIjpbImVycm9ySGFuZGxlciIsImRhdGEiLCJyZXMiLCJjb2RlIiwic3RhdHVzIiwianNvbiIsImhhc0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwicmVzcG9uc2VIYW5kbGVyIiwiYm9keSIsInZhbGlkYXRlQWxsT25jZSIsImZpZWxkcyIsImtleSIsInRyaW0iLCJnZXRWYWx1ZSIsIm9iaiIsInBhdGgiLCJkZWZhdWx0VmFsdWUiLCJBcnJheSIsIm15VmFsdWUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./util/common.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/Hot_cars/gethotcars.js"));
module.exports = __webpack_exports__;

})();