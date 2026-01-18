(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7341],{

/***/ 57830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JoinCall)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59089);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40018);
/* harmony import */ var _im_livekit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71274);
/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92061);
/* harmony import */ var _src_libs_mc_main_MainModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82623);





function JoinCall() {
    const urlParams = new URL(window.location.href).searchParams;
    const name = urlParams.get("code") || "test";
    const role = urlParams.get("role") || "initiator"; // Get role from URL
    const eventType = urlParams.get("eventType") || "security"; // Get event type from URL
    // 根据事件类型和角色确定音视频初始状态
    const getInitialMediaSettings = ()=>{
        if (true) {
            return {
                audio: true,
                video: true,
                canControlMedia: true
            };
        }
        if (eventType === 'medical') {
            // 医疗呼救：发送方发送音视频，接收方初始只接收，可手动控制
            return {
                audio: role === 'initiator',
                video: role === 'initiator',
                canControlMedia: true // 接收方可以手动控制
            };
        } else {
            // 安全呼救：发送方发送音视频但不接收，接收方只接收
            return {
                audio: role === 'initiator',
                video: role === 'initiator',
                canControlMedia: role === 'responder' // 只有接收方可以控制
            };
        }
    };
    const mediaSettings = getInitialMediaSettings();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_2__/* .AppShell */ .G, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_3__/* .AppbarContainer */ .W, {
            appbarProps: {
                title: "音视频会议",
                back: true
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                        children: [
                            "name:",
                            name,
                            ", role:",
                            role,
                            ", eventType:",
                            eventType
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_im_livekit__WEBPACK_IMPORTED_MODULE_5__/* .MeetingRoom */ .d, {
                        roomName: name,
                        directly: true,
                        userName: "user-".concat(Math.random().toString(36).substring(2, 8)),
                        livekitConfig: _src_libs_mc_main_MainModel__WEBPACK_IMPORTED_MODULE_1__/* .mainModel */ .N.appConfig.livekit,
                        initialAudioEnabled: mediaSettings.audio,
                        initialVideoEnabled: mediaSettings.video,
                        role: role,
                        eventType: eventType,
                        canControlMedia: mediaSettings.canControlMedia
                    })
                ]
            })
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        sx: {
            height: '100vh'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                children: [
                    "name:",
                    name,
                    ", role:",
                    role,
                    ", eventType:",
                    eventType
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_im_livekit__WEBPACK_IMPORTED_MODULE_5__/* .MeetingRoom */ .d, {
                roomName: name,
                directly: true,
                userName: "user-".concat(Math.random().toString(36).substring(2, 8)),
                livekitConfig: _src_libs_mc_main_MainModel__WEBPACK_IMPORTED_MODULE_1__/* .mainModel */ .N.appConfig.livekit,
                initialAudioEnabled: mediaSettings.audio,
                initialVideoEnabled: mediaSettings.video,
                role: role,
                eventType: eventType,
                canControlMedia: mediaSettings.canControlMedia
            })
        ]
    });
}


/***/ }),

/***/ 83397:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/join-call2",
      function () {
        return __webpack_require__(57830);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [8262,472,1172,810,8386,1274,636,6593,8792], () => (__webpack_exec__(83397)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=join-call2-6506b47a458ea717.js.map