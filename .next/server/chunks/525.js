"use strict";
exports.id = 525;
exports.ids = [525];
exports.modules = {

/***/ 3525:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8557);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _axios_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3485);
/* harmony import */ var _Loc_addLoc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios_location__WEBPACK_IMPORTED_MODULE_4__, _Loc_addLoc__WEBPACK_IMPORTED_MODULE_5__]);
([_axios_location__WEBPACK_IMPORTED_MODULE_4__, _Loc_addLoc__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const AnyReactComponent = ({ text  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "pin"
    });
let circle;
const Map = ({ coordinates  })=>{
    const { 0: lat , 1: setlat  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: lng , 1: setlng  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: rad , 1: setrad  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: locName , 1: setlocName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: userId , 1: setuserId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("631ad70c7d662c9bacd2654d");
    const addCircle = (map, maps)=>{
        circle = new maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.3,
            map
        });
    };
    const renderMarkers = (map, maps)=>{
        let marker = new maps.Marker({
            position: coordinates,
            map,
            title: "Hello World!"
        });
        return marker;
    };
    const points = [
        {
            id: 1,
            title: "Round Pond",
            lat: 7.345,
            lng: 125.234
        },
        {
            id: 2,
            title: "The Long Water",
            lat: 7.145,
            lng: 125.897
        }, 
    ];
    const onChange = (e)=>{
        setrad(e.target.value);
    };
    const changeRadius = (e)=>{
        if (rad > 0) {
            circle.setCenter({
                lat: lat,
                lng: lng
            });
            circle.setRadius(Number(rad));
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        direction: "column",
        children: [
            console.log(lat),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                h: "40vh",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((google_map_react__WEBPACK_IMPORTED_MODULE_3___default()), {
                    yesIWantToUseGoogleMapApiInternals: true,
                    defaultCenter: {
                        lat: 11.772,
                        lng: 122.776
                    },
                    center: {
                        lat: 11.772,
                        lng: 122.776
                    },
                    defaultZoom: 5,
                    onChange: (e)=>{
                        console.log(e.center.lat);
                    },
                    onClick: (e)=>{
                        setlat(e.lat);
                        setlng(e.lng);
                    },
                    onGoogleApiLoaded: ({ map , maps  })=>{
                        renderMarkers(map, maps), addCircle(map, maps);
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnyReactComponent, {
                        lat: lat,
                        lng: lng,
                        text: "Marker"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputLeftAddon, {
                                children: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                value: locName,
                                onChange: (e)=>{
                                    setlocName(e.target.value);
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputLeftAddon, {
                                children: "Latitude"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                value: lat,
                                onChange: (e)=>{
                                    setlat(e.target.value);
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputLeftAddon, {
                                children: "Longtitude"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                value: lng,
                                onChange: (e)=>{
                                    setlng(e.target.value);
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        direction: "row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputLeftAddon, {
                                        children: "Radius"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        placeholder: "Enter radius",
                                        type: "number",
                                        min: "10",
                                        name: "inputRad",
                                        onChange: (e)=>{
                                            setrad(e.target.value);
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                onClick: (e)=>{
                                    changeRadius(e);
                                },
                                children: "Draw"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loc_addLoc__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                lat: lat,
                                lng: lng,
                                rad: rad,
                                locName: locName
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;