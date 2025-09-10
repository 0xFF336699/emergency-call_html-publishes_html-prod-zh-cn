(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5330],{

/***/ 50636:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/meeting-call-invite",
      function () {
        return __webpack_require__(72482);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 72482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JoinCall)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _im_livekit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66897);
/* harmony import */ var _barrel_optimize_names_Box_CircularProgress_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6445);
/* harmony import */ var _barrel_optimize_names_Box_CircularProgress_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95746);
/* harmony import */ var _barrel_optimize_names_Box_CircularProgress_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67079);
/* harmony import */ var _src_libs_mc_main_MainModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28660);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94285);





function JoinCall() {
    const [isWaiting, setIsWaiting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [participantCount, setParticipantCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    // 获取URL参数
    const urlParams = new URL(window.location.href).searchParams;
    const roomId = urlParams.get("roomId") || "test";
    const sessionId = urlParams.get("sessionId") || "";
    const role = urlParams.get("role") || "initiator";
    const eventType = urlParams.get("eventType") || "security";
    // 监听参与者连接事件
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleParticipantConnected = (event)=>{
            console.log('Participant connected:', event.detail);
            setParticipantCount((prev)=>prev + 1);
            if (participantCount === 0) {
                // 第一个参与者加入，切换到视频界面
                setIsWaiting(false);
            }
        };
        const handleParticipantDisconnected = (event)=>{
            console.log('Participant disconnected:', event.detail);
            setParticipantCount((prev)=>Math.max(0, prev - 1));
        };
        // 监听LiveKit事件
        window.addEventListener('livekit.participantConnected', handleParticipantConnected);
        window.addEventListener('livekit.participantDisconnected', handleParticipantDisconnected);
        return ()=>{
            window.removeEventListener('livekit.participantConnected', handleParticipantConnected);
            window.removeEventListener('livekit.participantDisconnected', handleParticipantDisconnected);
        };
    }, [
        participantCount
    ]);
    // 等待中的UI
    const WaitingUI = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_CircularProgress_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
            sx: {
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5'
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CircularProgress_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                    size: 60,
                    sx: {
                        mb: 3,
                        color: '#2196f3'
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CircularProgress_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                    variant: "h5",
                    sx: {
                        mb: 2,
                        fontWeight: 600
                    },
                    children: "正在发起视频会议..."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_CircularProgress_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                    variant: "body1",
                    sx: {
                        color: 'text.secondary',
                        textAlign: 'center'
                    },
                    children: [
                        "等待其他成员接听",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                        "会话ID: ",
                        sessionId
                    ]
                })
            ]
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CircularProgress_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        sx: {
            height: '100vh'
        },
        children: isWaiting ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WaitingUI, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_im_livekit__WEBPACK_IMPORTED_MODULE_6__/* .MeetingRoom */ .d, {
            roomName: roomId,
            directly: true,
            userName: "user-".concat(Math.random().toString(36).substring(2, 8)),
            livekitConfig: _src_libs_mc_main_MainModel__WEBPACK_IMPORTED_MODULE_1__/* .mainModel */ .N.appConfig.livekit,
            initialAudioEnabled: true,
            initialVideoEnabled: true,
            role: role,
            eventType: eventType,
            canControlMedia: true,
            onParticipantConnected: ()=>setIsWaiting(false)
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [8262,7924,5006,6897,636,6593,8792], () => (__webpack_exec__(50636)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=meeting-call-invite-91a8689a491e9481.js.map