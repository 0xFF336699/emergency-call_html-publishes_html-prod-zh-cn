(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[342],{

/***/ 28174:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/im-meeting",
      function () {
        return __webpack_require__(94428);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 94428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JoinCall)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _im_livekit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56007);
/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6445);
/* harmony import */ var _src_libs_mc_main_MainModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28660);




function JoinCall() {
    // 这里可能需要一些参数
    const urlParams = new URL(window.location.href).searchParams;
    const name = urlParams.get("code") || "test";
    const role = urlParams.get("role") || "initiator"; // Get role from URL
    const eventType = urlParams.get("eventType") || "security"; // Get event type from URL
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        sx: {
            height: '100vh'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_im_livekit__WEBPACK_IMPORTED_MODULE_3__/* .MeetingRoom */ .d, {
            roomName: name,
            directly: true,
            userName: "user-".concat(Math.random().toString(36).substring(2, 8)),
            livekitConfig: _src_libs_mc_main_MainModel__WEBPACK_IMPORTED_MODULE_1__/* .mainModel */ .N.appConfig.livekit,
            initialAudioEnabled: true,
            initialVideoEnabled: true,
            role: role,
            eventType: eventType,
            canControlMedia: true
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [8262,7924,5006,6007,636,6593,8792], () => (__webpack_exec__(28174)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=im-meeting-73753870267e0685.js.map