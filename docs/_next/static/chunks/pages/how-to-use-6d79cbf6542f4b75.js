(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6186],{

/***/ 69178:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/how-to-use",
      function () {
        return __webpack_require__(95619);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 95619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HowToUsePage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 4 modules
var AppShell = __webpack_require__(43173);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(1563);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(61541);
;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Tv.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Tv = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2m0 14H3V5h18z"
}), 'Tv'));

;// ./src/components/pages/how-to-use/content/HowToUseContent.tsx




function HowToUseContent() {
    const router = (0,next_router.useRouter)();
    const list = [
        {
            src: "https://cdn.qiniu.fanfanlo.com/video/emc/how-to-use/falldown-prealarm.mp4",
            name: "演示-有预报警"
        },
        {
            src: "https://cdn.qiniu.fanfanlo.com/video/emc/how-to-use/falldown-without-prealarm.mp4",
            name: "演示-无预报警"
        },
        {
            src: "https://cdn.qiniu.fanfanlo.com/video/emc/how-to-use/invite.mp4",
            name: "设置-邀请他人成为自己的紧急联系人"
        },
        {
            src: "https://cdn.qiniu.fanfanlo.com/video/emc/how-to-use/monitor.mp4",
            name: "设置-监控跌倒"
        },
        {
            src: "https://cdn.qiniu.fanfanlo.com/video/emc/how-to-use/pre_alarm.mp4",
            name: "设置-预报警"
        },
        {
            src: "https://cdn.qiniu.fanfanlo.com/video/emc/how-to-use/tts.mp4",
            name: "设置文字转音频"
        },
        {
            src: "https://cdn.qiniu.fanfanlo.com/video/emc/how-to-use/tts_export.mp4",
            name: "设置-导出求救音频"
        },
        {
            src: "https://cdn.qiniu.fanfanlo.com/video/emc/how-to-use/tts_import.mp4",
            name: "设置-导入求救音频"
        }
    ];
    const handleClick = (src)=>{
        router.push("/video-player?src=".concat(encodeURIComponent(src)));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: list.map((video, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                direction: "row",
                alignItems: "center",
                spacing: 1,
                sx: {
                    cursor: "pointer",
                    padding: '8px 12px',
                    borderRadius: 1,
                    transition: 'transform 0.2s ease, background-color 0.2s ease',
                    "&:hover": {
                        backgroundColor: '#e3f2fd',
                        transform: 'scale(1.03)',
                        color: '#1976d2'
                    }
                },
                onClick: ()=>handleClick(video.src),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tv, {
                        color: "primary"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: video.name
                    })
                ]
            }, index))
    });
}

;// ./src/pages/how-to-use/index.tsx



function HowToUsePage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: "如何使用",
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HowToUseContent, {})
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5299,9893,7383,636,6593,8792], () => (__webpack_exec__(69178)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=how-to-use-6d79cbf6542f4b75.js.map