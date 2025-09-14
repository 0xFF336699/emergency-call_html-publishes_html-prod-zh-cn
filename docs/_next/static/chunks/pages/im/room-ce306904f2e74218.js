(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2032],{

/***/ 52960:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/im/room",
      function () {
        return __webpack_require__(67528);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 67528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RoomPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43173);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1563);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50279);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39460);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75640);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94285);
/* harmony import */ var _im_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95642);







function RoomPage() {
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .Bd)("homepage/pages/im/room/content");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { id: roomId } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .nextPreload */ .h)(router, '/im');
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // 如果没有roomId，重定向到聊天列表
        if (!roomId && router.isReady) {
            router.push('/im');
        }
    }, [
        roomId,
        router
    ]);
    if (!roomId) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_6__/* .AppShell */ .G, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_7__/* .AppbarContainer */ .W, {
                appbarProps: {
                    title: t("content.title"),
                    back: true
                }
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_im_matrix__WEBPACK_IMPORTED_MODULE_3__/* .RoomContent */ .j4, {
        roomId: roomId
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5299,9893,7383,636,6593,8792], () => (__webpack_exec__(52960)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=room-ce306904f2e74218.js.map