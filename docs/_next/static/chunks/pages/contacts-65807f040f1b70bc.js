(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[567],{

/***/ 32534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75640);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50279);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30319);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52089);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76242);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(366);






function NavBar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { pathname } = router;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .Bd)('emergency-call/components/navbar/content');
    const tabInfoList = [
        {
            label: t('NavBar.home'),
            value: '/',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {})
        },
        // { label: t('NavBar.logs'), value: '/logs', icon: <ListIcon /> },
        // { label: t('content.create'), value: '/script-creator', icon: <CreateIcon /> },
        // { label: t('content.market'), value: '/market', icon: <StorefrontIcon /> },
        {
            label: t('NavBar.settings'),
            value: '/settings',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {})
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        showLabels: true,
        value: pathname,
        children: tabInfoList.map((e)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                label: e.label,
                icon: e.icon,
                "data-id": "tabbar-".concat(e.value),
                className: pathname === e.value ? 'Mui-selected' : '',
                onClick: ()=>{
                    if (pathname === e.value) return;
                    router.push(e.value);
                }
            }, e.value))
    });
}


/***/ }),

/***/ 43173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ AppShell)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
;// __barrel_optimize__?names=initReactI18next!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js


// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-browser-languagedetector@8.2.0/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
var i18nextBrowserLanguageDetector = __webpack_require__(43734);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-http-backend@3.0.2_encoding@0.1.13/node_modules/i18next-http-backend/esm/index.js + 2 modules
var esm = __webpack_require__(50148);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next@24.2.3_typescript@5.7.3/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(94912);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 20 modules
var Log = __webpack_require__(41031);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(49210);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/files-map-utils.ts
var files_map_utils = __webpack_require__(91850);
;// ../../libs/fanfanlo/src/i18n/i18n-init.ts
/* __next_internal_client_entry_do_not_use__ useTranslation,i18nLogger,i18n,i18nInit,default auto */ // 现在用的是这个文件








let fileDateVersion = '' // = getConfig().publicRuntimeConfig?.version
;
const i18nLogger = new Log/* Log */.tG(false, "i18n");
const windowHref = (()=>{
    var _window_parent;
    if (false) {}
    const u = new URL(window.location.href || ((_window_parent = window.parent) === null || _window_parent === void 0 ? void 0 : _window_parent.location.href));
    // 同域文本iframe里的页面会获取不到href，所以判断一下直接用父级的就行.
    return u.origin == null || u.origin == 'null' ? '' : u.origin;
})();
const backendOptions = {
    loadPath: function(lngs, namespaces) {
        const log = i18nLogger.sub(false, "i18n loadpath");
        log.pause = true;
        const lng = lngs[0];
        let p = "";
        // p = `/options/_locales/${lngs[0].replace("-", "_")}/messages.json`;
        // p = `/locales/zh-CN/ns1/content.json`;
        // p = `locales/${lng}/${namespaces[0]}.json?v=${fileDateVersion}`
        const ps = namespaces[0].split('/');
        ps.splice(ps.length - 1, 0, lng);
        // p = `locales/${ps.join('/')}.json?v=${fileDateVersion}`
        // p = `locales/${ps.join('/')}.json?v=${getBuildTime()}`
        p = "locales/".concat(ps.join('/'), ".json");
        log.log("lngs=", lngs);
        log.log("namespaces=", namespaces);
        log.log("p=", p);
        p = files_map_utils/* fileMapUtils */.E.getFile("/".concat(p));
        // console.log('map p=', p)
        p = "".concat(windowHref, "/").concat(p);
        return p;
    },
    parse: function(data, languages, namespaces) {
        const log = i18nLogger.sub(false, "i18n backend parse");
        log.pause = true;
        // log.log(`parrrse`, data, languages, namespaces);
        const l = JSON.parse(data);
        log.print("before set i18ndata");
        // i18nData = l as II18n;
        // log.log(`i18nData.rule.scripts.sys.rules`, i18nData.rule.scripts.sys.rules);
        log.log("parrrse", languages, namespaces);
        return l;
    }
};
const backend = new esm/* default */.A();
backend.init(null, backendOptions);
const i18n = i18next/* default */.Ay;
// export const resources: Resource = {
//   // 'zh-CN': {
//   //   translation: _.merge({}, zhCN),
//   // },
//   // en: {
//   //   translation: _.merge({}, en),
//   // },
// };
i18n.on("languageChanged", async function(lng) {
    const log = i18nLogger.sub(false, "onlanguageChanged");
    log.pause = true;
    log.log("lllllng", lng);
// lng = "en";
// const p = `/options/_locales/${lng.replace("-", "_")}/messages.json`;
});
function i18nInit() {
    let _fileDateVersion = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
    fileDateVersion = _fileDateVersion;
    i18n.use(i18nextBrowserLanguageDetector/* default */.A).use(backend).use(es/* initReactI18next */.r9).init({
        load: "currentOnly",
        // load: "all",
        // supportedLngs: ['zh-CN', 'zh-TW', 'en', 'en-GB', 'ja'],
        // resources,
        fallbackLng: env/* isServer */.S$ ? "en" : "zh-CN",
        // fallbackLng: "zh-CN",
        // lng: "zh-CN",
        partialBundledLanguages: true,
        ns: [],
        debug: false,
        interpolation: {
            escapeValue: false
        },
        detection: {
            caches: [
                "localStorage"
            ]
        }
    });
}
i18n.on("missingKey", function(lngs, namespace, key, res) {
    console.error("i18n mssing key, lngs=%s, namespace=%s, key=%s, res=%s", lngs, namespace, key, res);
});
i18n.on("loaded", function(loaded) {
    const log = i18nLogger.sub(false, "onloaded");
    log.pause = true;
    log.log("onloaded arguments", loaded);
});
i18n.on("failedLoading", function(lng, ns, msg) {
    const log = i18nLogger.sub(false, "onfailedLoading");
    log.pause = true;
    log.log("failedLoading arguments", lng, ns, msg);
});
i18n.on("added", function() {
    console.log('added', arguments);
});
/* harmony default export */ const i18n_init = ((/* unused pure expression or super */ null && (i18n)));

// EXTERNAL MODULE: ../../libs/fanfanlo/src/storage/store-utils.ts
var store_utils = __webpack_require__(4887);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/watchUpdates.ts
var watchUpdates = __webpack_require__(4738);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
;// ../../libs/fanfanlo/src/storage/store-page-context.tsx


// import { storeUtils } from "./store";
const s = store_utils/* storeUtils */.P.namespace('store-page-context');
function create() {
    return /*#__PURE__*/ createContext(s);
}
const StorePageContext = /*#__PURE__*/ (0,react.createContext)(s);
const StorePageDynamicContext = /*#__PURE__*/ (0,react.createContext)({});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/config.js
var config = __webpack_require__(87891);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// __barrel_optimize__?names=I18nextProvider!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js


;// ../../libs/app/ui/src/components/app/AppShell.tsx
/* __next_internal_client_entry_do_not_use__ AppShell auto */ 





checkReloadPage();
i18nInit();
function checkReloadPage() {
    if (false) {}
    if (config_default()().publicRuntimeConfig.isDevelopment) {
        return;
    }
    if (window.location.href.indexOf('qiniu') == -1) return;
    // 帮我检测url中是否包含_htmlRefreshTime的参数
    // 如果没有，则添加_htmlRefresTime的参数，值为当前时间的毫秒数
    const searchParams = new URL(window.location.href).searchParams;
    const htmlRefreshTime = searchParams.get('_htmlRefreshTime');
    if (!htmlRefreshTime) {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('_htmlRefreshTime', String(Date.now()));
        window.location.href = newUrl.toString();
        return;
    }
    const refreshTime = Number(htmlRefreshTime);
    if (refreshTime + 2 * 60 * 1000 < Date.now()) {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('_htmlRefreshTime', String(Date.now()));
        window.location.href = newUrl.toString();
    }
}
function AppShell(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    const scrollKey = 'scrollPositionInfo';
    const href = window.location.href.split("#")[0];
    const dynamicKey = "dynamic-".concat(href);
    const s = store_utils/* storeUtils */.P.namespace(dynamicKey);
    let o = s.read(dynamicKey);
    if (!o) {
        o = {};
        s.write(dynamicKey, o);
    }
    o = (0,proxyWatch/* toProxy */.I$)(o);
    (0,react.useEffect)(()=>{
        router.beforePopState((state)=>{
            s.clearAll();
            return true;
        });
    });
    (0,react.useEffect)(()=>{
        s.write(dynamicKey, o);
        return (0,watchUpdates/* watchUpdates */.c)(o, ()=>{
            s.write(dynamicKey, o);
        });
    }, []);
    (0,react.useEffect)(()=>{
        const info = s.read(scrollKey) || {
            x: 0,
            y: 0
        };
        // console.log('app shell scroll info info = ', info)
        if (info.x == 0 && info.y == 0) {
            listenScroll();
        } else {
            window.requestAnimationFrame(()=>{
                window.scrollTo(info.x, info.y);
                listenScroll();
            });
        }
        function onScroll(e) {
            // console.log('app shell on scroll', { x: window.scrollX, y: window.scrollY })
            s.write(scrollKey, {
                x: window.scrollX,
                y: window.scrollY
            });
        }
        function listenScroll() {
            window.addEventListener('scroll', onScroll);
        }
        function unsub() {
            window.removeEventListener('scroll', onScroll);
        }
        return unsub;
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(StorePageContext, {
        value: s,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StorePageDynamicContext, {
            value: o,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* I18nextProvider */.xC, {
                i18n: i18n,
                children: children
            })
        })
    });
}


/***/ }),

/***/ 46004:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/contacts",
      function () {
        return __webpack_require__(77441);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 67236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AndroidPageContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(44437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(49210);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts + 1 modules
var i18n_value_loader = __webpack_require__(27950);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
;// ../../libs/app/ui/src/components/page/PageContent.tsx





function Reload() {
    if (!env/* isDev */.Cu) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: "  "
    });
    const { t } = (0,es/* useTranslation */.Bd)("app-ui/components/page/content");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                onClick: ()=>{
                    window.location.reload();
                },
                children: t("PageContent.refresh")
            }),
            new Date().toLocaleString()
        ]
    });
}
const ScrollP = /*#__PURE__*/ (0,react.createContext)({
    x: 0,
    y: 0
});
let index = 0;
function PageContent(param) {
    let { children, titleConf, reload } = param;
    index++;
    const scroll = (0,react.useContext)(ScrollP);
    const clazz = "".concat(Date.now() + Math.random() * Date.now());
    (0,react.useEffect)(()=>{
        async function loadTitle() {
            if (!titleConf) return;
            let title = titleConf.title;
            if (titleConf.ns) {
                title = await (0,i18n_value_loader/* loadI18nValue */.y)(titleConf.ns, titleConf.key || "content.title");
            }
            if (!title) return;
            document.title = title;
        }
        loadTitle();
    }, []);
    (0,react.useEffect)(()=>{
        const container = document.getElementsByClassName(clazz)[0];
        if (!container) return;
        container.scrollTop = scroll.y;
        const onScroll = ()=>{
            var scrollTop = container.scrollTop;
            scroll.y = scrollTop;
        };
        container.removeEventListener('scroll', onScroll);
        container.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>container.removeEventListener('scroll', onScroll);
    }, [
        clazz,
        scroll
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Container/* default */.A, {
        className: clazz,
        sx: {
            flexGrow: 1,
            overflow: 'auto',
            padding: "0px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                (reload || reload == undefined) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Reload, {}),
                children
            ]
        })
    });
}

;// ../../libs/app/ui/src/components/page/AndroidPageContent.tsx


function AndroidPageContent(param) {
    let { children, titleConf, reload } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PageContent, {
        titleConf: titleConf,
        reload: reload,
        children: children
    });
}


/***/ }),

/***/ 77391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _u: () => (/* binding */ emergencyCallInvitationService),
/* harmony export */   vt: () => (/* binding */ cancelOrRemoveInvitation)
/* harmony export */ });
/* unused harmony exports tmsEmergencyCallListAllInvitations, tmsEmergencyCallRespondToInvite */
/* harmony import */ var _tms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2413);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89567);


/**
 * 获取所有邀请（发送和接收的）
 */ async function tmsEmergencyCallListAllInvitations(opts) {
    return (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .request */ .Em)(_tms__WEBPACK_IMPORTED_MODULE_1__/* .tms */ .X.TEmc, _tms__WEBPACK_IMPORTED_MODULE_1__/* .tms */ .X.MEmcListAllInvitations, opts.params, opts.gateway, opts.handler);
}
/**
 * 取消或删除邀请
 * @param invitationId 邀请ID
 * @param isReceived 是否是接收的邀请
 * @returns Promise
 */ async function cancelOrRemoveInvitation(invitationId, isReceived) {
    const action = isReceived ? 'remove' : 'cancel';
    return emergencyCallInvitationService.respondToInvite({
        params: {
            invitation_id: invitationId,
            action
        }
    });
}
/**
 * 响应邀请
 */ async function tmsEmergencyCallRespondToInvite(opts) {
    return (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .request */ .Em)(_tms__WEBPACK_IMPORTED_MODULE_1__/* .tms */ .X.TEmc, _tms__WEBPACK_IMPORTED_MODULE_1__/* .tms */ .X.MEmcRespondToInvite, opts.params, opts.gateway, opts.handler);
}
// 导出所有接口
const emergencyCallInvitationService = {
    listAllInvitations: tmsEmergencyCallListAllInvitations,
    respondToInvite: tmsEmergencyCallRespondToInvite
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (emergencyCallInvitationService)));


/***/ }),

/***/ 77441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ContactsPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 4 modules
var AppShell = __webpack_require__(43173);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(97972);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/tabbar/Tabbar.tsx
var Tabbar = __webpack_require__(93589);
// EXTERNAL MODULE: ./src/components/navbar/NavBar.tsx
var NavBar = __webpack_require__(32534);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(59864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(53861);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(81281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(61541);
;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ContactPhone.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const ContactPhone = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2"
}), 'ContactPhone'));

;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/PersonAdd.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const PersonAdd = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m-9-2V7H4v3H1v2h3v3h2v-3h3v-2zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
}), 'PersonAdd'));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(88049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(65371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(9767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(90928);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/AccessTime.js
var AccessTime = __webpack_require__(63839);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(29864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Check.js
var Check = __webpack_require__(63324);
;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Person.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Person = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
}), 'Person'));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Refresh.js
var Refresh = __webpack_require__(18531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/formatDistanceToNow.js + 11 modules
var formatDistanceToNow = __webpack_require__(60952);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-CN.js + 6 modules
var zh_CN = __webpack_require__(65507);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/emergency-call/list_all_invitations.ts
var list_all_invitations = __webpack_require__(77391);
;// ./src/components/InvitationManager/InvitationManager.tsx







// 获取状态标签的配置
const getStatusConfig = (status, expiresAt)=>{
    const isExpired = new Date(expiresAt * 1000) < new Date();
    const statusTexts = {
        pending: '等待处理',
        accepted: '已接受',
        declined: '已拒绝',
        expired: '已过期',
        cancelled: '已取消'
    };
    const statusColors = {
        pending: 'primary',
        accepted: 'success',
        declined: 'error',
        expired: 'default',
        cancelled: 'default'
    };
    return {
        text: statusTexts[status] || status,
        color: statusColors[status] || 'default',
        isExpired,
        showExpiry: status === 'pending' && !isExpired
    };
};
// 邀请状态标签组件
function InvitationStatusChip(param) {
    let { status, expiresAt } = param;
    const config = getStatusConfig(status, expiresAt);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        display: "flex",
        alignItems: "center",
        gap: 1,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                size: "small",
                label: config.text,
                color: config.color,
                variant: "outlined"
            }),
            config.showExpiry && /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                size: "small",
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(AccessTime/* default */.A, {
                    fontSize: "small"
                }),
                label: "".concat((0,formatDistanceToNow/* formatDistanceToNow */.m)(expiresAt * 1000, {
                    addSuffix: true,
                    locale: zh_CN/* zhCN */.g
                })),
                color: "primary",
                variant: "outlined"
            })
        ]
    });
}
// 用户信息卡片组件
function UserInfoCard(param) {
    let { userInfo, message, status, expiresAt, isReceived = false, onRespond, isProcessing = false } = param;
    var _userInfo_display_name_, _userInfo_display_name;
    const [isProcessingAction, setIsProcessingAction] = (0,react.useState)(false);
    const handleRespond = async (action)=>{
        if (!onRespond) return;
        try {
            setIsProcessingAction(true);
            await onRespond(action);
        } finally{
            setIsProcessingAction(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.A, {
        variant: "outlined",
        sx: {
            mb: 2,
            opacity: isProcessing ? 0.7 : 1
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.A, {
                                src: userInfo.avatar_url,
                                alt: userInfo.display_name,
                                sx: {
                                    width: 40,
                                    height: 40,
                                    mr: 2
                                },
                                children: ((_userInfo_display_name = userInfo.display_name) === null || _userInfo_display_name === void 0 ? void 0 : (_userInfo_display_name_ = _userInfo_display_name[0]) === null || _userInfo_display_name_ === void 0 ? void 0 : _userInfo_display_name_.toUpperCase()) || '?'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                flexGrow: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "subtitle1",
                                        children: userInfo.display_name || '未知用户'
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        children: [
                                            "ID: ",
                                            userInfo.user_id
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InvitationStatusChip, {
                                status: status,
                                expiresAt: expiresAt
                            })
                        ]
                    }),
                    message && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        color: "text.secondary",
                        sx: {
                            mt: 1,
                            mb: 1
                        },
                        children: message
                    })
                ]
            }),
            isReceived ? // 接收的邀请
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.A, {
                sx: {
                    justifyContent: 'flex-end',
                    pt: 0
                },
                children: status === 'pending' ? // 待处理的邀请：显示接受/拒绝按钮
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            size: "small",
                            color: "error",
                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {}),
                            onClick: ()=>handleRespond('decline'),
                            disabled: isProcessing || isProcessingAction,
                            children: "拒绝"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            size: "small",
                            color: "primary",
                            variant: "contained",
                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.A, {}),
                            onClick: ()=>handleRespond('accept'),
                            disabled: isProcessing || isProcessingAction,
                            children: "接受"
                        })
                    ]
                }) : status === 'accepted' ? // 已接受的邀请：显示解除关系按钮
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                    size: "small",
                    color: "error",
                    variant: "outlined",
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Person, {}),
                    onClick: ()=>handleRespond('remove'),
                    disabled: isProcessing || isProcessingAction,
                    children: "解除关系"
                }) : null
            }) : status === 'pending' || status === 'accepted' ? // 发送的邀请：显示取消或解除关系按钮
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.A, {
                sx: {
                    justifyContent: 'flex-end',
                    pt: 0
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                    size: "small",
                    color: "error",
                    variant: "outlined",
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {}),
                    onClick: ()=>handleRespond('cancel'),
                    disabled: isProcessing || isProcessingAction,
                    children: status === 'pending' ? '取消邀请' : '解除关系'
                })
            }) : null
        ]
    });
}
const InvitationManager = ()=>{
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    const [isRefreshing, setIsRefreshing] = (0,react.useState)(false);
    const [invitations, setInvitations] = (0,react.useState)({
        sent: [],
        received: []
    });
    const [isProcessing, setIsProcessing] = (0,react.useState)(false);
    // 加载邀请列表
    const loadInvitations = (0,react.useCallback)(async function() {
        let showLoading = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        if (showLoading) {
            setIsLoading(true);
        } else {
            setIsRefreshing(true);
        }
        setError(null);
        try {
            var _res_data;
            const res = await list_all_invitations/* emergencyCallInvitationService */._u.listAllInvitations({
                params: {}
            });
            if (res.shellIsOk && res.dataIsOk && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.is_ok)) {
                setInvitations({
                    sent: (res.data.sent_invitations || []).map((invite)=>({
                            ...invite,
                            status: invite.status
                        })),
                    received: (res.data.received_invitations || []).map((invite)=>({
                            ...invite,
                            status: invite.status
                        }))
                });
            } else {
                var _res_data1;
                setError(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.msg) || '加载邀请列表失败');
            }
        } catch (err) {
            console.error('加载邀请列表异常:', err);
            setError('发生未知错误');
        } finally{
            setIsLoading(false);
            setIsRefreshing(false);
        }
    }, []);
    // 处理取消或删除邀请
    const handleCancelOrRemove = (0,react.useCallback)(async (invitationId, isReceived)=>{
        try {
            var _res_data;
            setIsProcessing(true);
            const res = await (0,list_all_invitations/* cancelOrRemoveInvitation */.vt)(invitationId, isReceived);
            if (!res.shellIsOk || !res.dataIsOk || !((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.is_ok)) {
                var _res_data1;
                throw new Error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.msg) || '操作失败');
            }
            // 直接更新状态
            setInvitations((prev)=>({
                    sent: prev.sent.filter((i)=>i.invitation_id !== invitationId),
                    received: prev.received.filter((i)=>i.invitation_id !== invitationId)
                }));
        } catch (err) {
            console.error('处理邀请失败:', err);
            setError(err instanceof Error ? err.message : '操作失败，请重试');
        } finally{
            setIsProcessing(false);
        }
    }, []);
    // 响应邀请
    const handleRespondToInvite = (0,react.useCallback)(async (invitationId, action)=>{
        try {
            setIsProcessing(true);
            if (action === 'accept' || action === 'decline') {
                var _res_data;
                // 接受或拒绝邀请
                const res = await list_all_invitations/* emergencyCallInvitationService */._u.respondToInvite({
                    params: {
                        invitation_id: invitationId,
                        action
                    }
                });
                if (!res.shellIsOk || !res.dataIsOk || !((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.is_ok)) {
                    var _res_data1;
                    throw new Error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.msg) || '操作失败');
                }
                // 直接更新状态
                setInvitations((prev)=>{
                    const updateInvitation = (invites)=>invites.map((invite)=>invite.invitation_id === invitationId ? {
                                ...invite,
                                status: action === 'accept' ? 'accepted' : 'declined'
                            } : invite);
                    return {
                        sent: updateInvitation(prev.sent),
                        received: updateInvitation(prev.received)
                    };
                });
            } else {
                // 取消邀请或解除关系
                const isReceived = action === 'remove';
                await handleCancelOrRemove(invitationId, isReceived);
            }
        } catch (err) {
            console.error('处理邀请失败:', err);
            setError(err instanceof Error ? err.message : '操作失败，请重试');
        } finally{
            setIsProcessing(false);
        }
    }, [
        handleCancelOrRemove
    ]);
    // 处理刷新
    const handleRefresh = (0,react.useCallback)(()=>{
        loadInvitations(false);
    }, [
        loadInvitations
    ]);
    // 组件加载时获取数据
    (0,react.useEffect)(()=>{
        loadInvitations();
    }, [
        loadInvitations
    ]);
    const renderContent = ()=>{
        if (isLoading) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                display: "flex",
                justifyContent: "center",
                p: 4,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
            });
        }
        if (error) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                p: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        color: "error",
                        children: error
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "outlined",
                        color: "primary",
                        onClick: ()=>loadInvitations(),
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.A, {}),
                        children: "重试"
                    })
                ]
            });
        }
        const hasSentInvitations = invitations.sent.length > 0;
        const hasReceivedInvitations = invitations.received.length > 0;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    gutterBottom: true,
                    children: "收到的邀请"
                }),
                hasReceivedInvitations ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    mb: 4,
                    children: invitations.received.map((invite)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(UserInfoCard, {
                            userInfo: invite.user_info,
                            message: invite.message,
                            status: invite.status,
                            expiresAt: invite.expires_at,
                            isReceived: true,
                            onRespond: async (action)=>{
                                if (action === 'remove') {
                                    await handleCancelOrRemove(invite.invitation_id, true);
                                } else if (action === 'cancel') {
                                    await handleCancelOrRemove(invite.invitation_id, false);
                                } else {
                                    await handleRespondToInvite(invite.invitation_id, action);
                                }
                            },
                            isProcessing: isRefreshing || isProcessing
                        }, "received-".concat(invite.invitation_id)))
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                    textAlign: "center",
                    bgcolor: "action.hover",
                    borderRadius: 1,
                    mb: 4,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Person, {
                            color: "disabled",
                            sx: {
                                fontSize: 48,
                                mb: 1
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            color: "textSecondary",
                            children: "暂无收到的邀请"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    gutterBottom: true,
                    children: "已发送的邀请"
                }),
                hasSentInvitations ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: invitations.sent.map((invite)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(UserInfoCard, {
                            userInfo: invite.user_info,
                            message: invite.message,
                            status: invite.status,
                            expiresAt: invite.expires_at,
                            isReceived: false,
                            onRespond: async (action)=>{
                                if (action === 'cancel') {
                                    await handleCancelOrRemove(invite.invitation_id, false);
                                }
                            },
                            isProcessing: isRefreshing || isProcessing
                        }, "sent-".concat(invite.invitation_id)))
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                    textAlign: "center",
                    bgcolor: "action.hover",
                    borderRadius: 1,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Person, {
                            color: "disabled",
                            sx: {
                                fontSize: 48,
                                mb: 1
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            color: "textSecondary",
                            children: "暂无已发送的邀请"
                        })
                    ]
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        p: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "h5",
                        children: "紧急联系人邀请"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "outlined",
                        size: "small",
                        onClick: handleRefresh,
                        disabled: isRefreshing,
                        startIcon: isRefreshing ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                            size: 20
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.A, {}),
                        children: isRefreshing ? '刷新中...' : '刷新'
                    })
                ]
            }),
            renderContent()
        ]
    });
};
/* harmony default export */ const InvitationManager_InvitationManager = (InvitationManager);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(49280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(3711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(18244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContentText/DialogContentText.js + 1 modules
var DialogContentText = __webpack_require__(33899);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(69468);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 5 modules
var Alert = __webpack_require__(85629);
;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/PersonRemove.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const PersonRemove = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4m3 2v2h6v-2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4"
}), 'PersonRemove'));

// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(2413);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts + 50 modules
var request = __webpack_require__(89567);
;// ../../libs/app/model/src/remote/emergency-call/list_established_contacts.ts


/**
 * 获取已建立的联系人关系
 */ async function tmsEmergencyCallListEstablishedContacts(opts) {
    return (0,request/* request */.Em)(tms/* tms */.X.TEmc, tms/* tms */.X.MEmcListEstablishedContacts, opts.params, opts.gateway, opts.handler);
}
/**
 * 移除已建立的联系人关系
 */ async function tmsEmergencyCallRemoveEstablishedContact(opts) {
    return (0,request/* request */.Em)(tms/* tms */.X.TEmc, tms/* tms */.X.MEmcRemoveEstablishedContact, opts.params, opts.gateway, opts.handler);
}
// 导出服务
const emergencyCallContactService = {
    listEstablishedContacts: tmsEmergencyCallListEstablishedContacts,
    removeEstablishedContact: tmsEmergencyCallRemoveEstablishedContact
};
/* harmony default export */ const list_established_contacts = ((/* unused pure expression or super */ null && (emergencyCallContactService)));

;// ./src/components/EstablishedContactsManager/EstablishedContactsManager.tsx







// 联系人卡片组件
function ContactCard(param) {
    let { contact, onRemove, isProcessing = false } = param;
    var _contact_user_info_display_name_, _contact_user_info_display_name;
    const [isRemoving, setIsRemoving] = (0,react.useState)(false);
    const [showRemoveDialog, setShowRemoveDialog] = (0,react.useState)(false);
    const handleRemove = async ()=>{
        if (!onRemove) return;
        try {
            setIsRemoving(true);
            await onRemove(contact.contact_id);
            setShowRemoveDialog(false);
        } finally{
            setIsRemoving(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.A, {
                variant: "outlined",
                sx: {
                    mb: 2,
                    opacity: isProcessing ? 0.7 : 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                display: "flex",
                                alignItems: "center",
                                mb: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.A, {
                                        src: contact.user_info.avatar_url,
                                        alt: contact.user_info.display_name,
                                        sx: {
                                            width: 50,
                                            height: 50,
                                            mr: 2
                                        },
                                        children: ((_contact_user_info_display_name = contact.user_info.display_name) === null || _contact_user_info_display_name === void 0 ? void 0 : (_contact_user_info_display_name_ = _contact_user_info_display_name[0]) === null || _contact_user_info_display_name_ === void 0 ? void 0 : _contact_user_info_display_name_.toUpperCase()) || '?'
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        flexGrow: 1,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                variant: "h6",
                                                children: contact.user_info.display_name || '未知用户'
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                                variant: "body2",
                                                color: "text.secondary",
                                                children: [
                                                    "ID: ",
                                                    contact.user_info.user_id
                                                ]
                                            }),
                                            contact.relationship && /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                                size: "small",
                                                label: contact.relationship,
                                                color: "primary",
                                                variant: "outlined",
                                                sx: {
                                                    mt: 0.5
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                        textAlign: "right",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                            size: "small",
                                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(AccessTime/* default */.A, {
                                                fontSize: "small"
                                            }),
                                            label: "".concat((0,formatDistanceToNow/* formatDistanceToNow */.m)(contact.created_at * 1000, {
                                                addSuffix: true,
                                                locale: zh_CN/* zhCN */.g
                                            })),
                                            color: "default",
                                            variant: "outlined"
                                        })
                                    })
                                ]
                            }),
                            contact.notes && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                color: "text.secondary",
                                sx: {
                                    mt: 1
                                },
                                children: [
                                    "备注: ",
                                    contact.notes
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.A, {
                        sx: {
                            justifyContent: 'flex-end',
                            pt: 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            size: "small",
                            color: "error",
                            variant: "outlined",
                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonRemove, {}),
                            onClick: ()=>setShowRemoveDialog(true),
                            disabled: isProcessing || isRemoving,
                            children: "解除关系"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: showRemoveDialog,
                onClose: ()=>setShowRemoveDialog(false),
                "aria-labelledby": "remove-contact-dialog",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        id: "remove-contact-dialog",
                        children: "确认解除联系人关系"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContentText/* default */.A, {
                            children: [
                                "您确定要与 ",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                    children: contact.user_info.display_name
                                }),
                                " 解除紧急联系人关系吗？ 此操作不可撤销。"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: ()=>setShowRemoveDialog(false),
                                disabled: isRemoving,
                                children: "取消"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleRemove,
                                color: "error",
                                variant: "contained",
                                disabled: isRemoving,
                                startIcon: isRemoving ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                                    size: 16
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonRemove, {}),
                                children: isRemoving ? '处理中...' : '确认解除'
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
const EstablishedContactsManager = ()=>{
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    const [isRefreshing, setIsRefreshing] = (0,react.useState)(false);
    const [contacts, setContacts] = (0,react.useState)([]);
    const [isProcessing, setIsProcessing] = (0,react.useState)(false);
    // 加载已建立的联系人关系
    const loadEstablishedContacts = (0,react.useCallback)(async function() {
        let showLoading = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        if (showLoading) {
            setIsLoading(true);
        } else {
            setIsRefreshing(true);
        }
        setError(null);
        try {
            var _res_data;
            const res = await emergencyCallContactService.listEstablishedContacts({
                params: {}
            });
            if (res.shellIsOk && res.dataIsOk && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.is_ok)) {
                setContacts(res.data.contacts || []);
            } else {
                var _res_data1;
                setError(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.msg) || '加载联系人列表失败');
            }
        } catch (err) {
            console.error('加载联系人列表异常:', err);
            setError('发生未知错误');
        } finally{
            setIsLoading(false);
            setIsRefreshing(false);
        }
    }, []);
    // 移除联系人关系
    const handleRemoveContact = (0,react.useCallback)(async (contactId)=>{
        try {
            var _res_data;
            setIsProcessing(true);
            const res = await emergencyCallContactService.removeEstablishedContact({
                params: {
                    contact_id: contactId
                }
            });
            if (!res.shellIsOk || !res.dataIsOk || !((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.is_ok)) {
                var _res_data1;
                throw new Error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.msg) || '移除联系人失败');
            }
            // 从本地状态中移除
            setContacts((prev)=>prev.filter((contact)=>contact.contact_id !== contactId));
        } catch (err) {
            console.error('移除联系人失败:', err);
            setError(err instanceof Error ? err.message : '移除联系人失败，请重试');
        } finally{
            setIsProcessing(false);
        }
    }, []);
    // 处理刷新
    const handleRefresh = (0,react.useCallback)(()=>{
        loadEstablishedContacts(false);
    }, [
        loadEstablishedContacts
    ]);
    // 组件加载时获取数据
    (0,react.useEffect)(()=>{
        loadEstablishedContacts();
    }, [
        loadEstablishedContacts
    ]);
    const renderContent = ()=>{
        if (isLoading) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 4,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        color: "text.secondary",
                        sx: {
                            mt: 2
                        },
                        children: "加载中..."
                    })
                ]
            });
        }
        if (error) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                p: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                        severity: "error",
                        sx: {
                            mb: 2
                        },
                        children: error
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "outlined",
                        color: "primary",
                        onClick: ()=>loadEstablishedContacts(),
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.A, {}),
                        children: "重试"
                    })
                ]
            });
        }
        if (contacts.length === 0) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 4,
                textAlign: "center",
                bgcolor: "action.hover",
                borderRadius: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactPhone, {
                        color: "disabled",
                        sx: {
                            fontSize: 64,
                            mb: 2
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "h6",
                        color: "textSecondary",
                        gutterBottom: true,
                        children: "暂无紧急联系人"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        color: "textSecondary",
                        children: "您还没有建立任何紧急联系人关系"
                    })
                ]
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: contacts.map((contact)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ContactCard, {
                    contact: contact,
                    onRemove: handleRemoveContact,
                    isProcessing: isRefreshing || isProcessing
                }, contact.contact_id))
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        p: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "h5",
                                gutterBottom: true,
                                children: "我的紧急联系人"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "body2",
                                color: "text.secondary",
                                children: "管理您已建立的紧急联系人关系"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "outlined",
                        size: "small",
                        onClick: handleRefresh,
                        disabled: isRefreshing,
                        startIcon: isRefreshing ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                            size: 20
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.A, {}),
                        children: isRefreshing ? '刷新中...' : '刷新'
                    })
                ]
            }),
            contacts.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                severity: "info",
                sx: {
                    mb: 2
                },
                children: [
                    "共有 ",
                    contacts.length,
                    " 个紧急联系人"
                ]
            }),
            renderContent()
        ]
    });
};
/* harmony default export */ const EstablishedContactsManager_EstablishedContactsManager = (EstablishedContactsManager);

;// ./src/components/ContactRelationshipManager/ContactRelationshipManager.tsx






function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: "contact-tabpanel-".concat(index),
        "aria-labelledby": "contact-tab-".concat(index),
        ...other,
        children: value === index && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: children
        })
    });
}
function a11yProps(index) {
    return {
        id: "contact-tab-".concat(index),
        'aria-controls': "contact-tabpanel-".concat(index)
    };
}
const ContactRelationshipManager = ()=>{
    const [currentTab, setCurrentTab] = (0,react.useState)(0);
    const handleTabChange = (event, newValue)=>{
        setCurrentTab(newValue);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: '100%',
            maxWidth: 800,
            mx: 'auto',
            p: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                mb: 3,
                textAlign: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "h4",
                        gutterBottom: true,
                        children: "联系人关系管理"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        color: "text.secondary",
                        children: "管理您的紧急联系人邀请和已建立的关系"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                elevation: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            borderBottom: 1,
                            borderColor: 'divider'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
                            value: currentTab,
                            onChange: handleTabChange,
                            "aria-label": "联系人管理标签",
                            variant: "fullWidth",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.A, {
                                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactPhone, {}),
                                    label: "我的联系人",
                                    ...a11yProps(0)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.A, {
                                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonAdd, {}),
                                    label: "邀请管理",
                                    ...a11yProps(1)
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel, {
                        value: currentTab,
                        index: 0,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EstablishedContactsManager_EstablishedContactsManager, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel, {
                        value: currentTab,
                        index: 1,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InvitationManager_InvitationManager, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ContactRelationshipManager_ContactRelationshipManager = (ContactRelationshipManager);

;// ./src/pages/contacts/index.tsx




function ContactsPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: "联系人",
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactRelationshipManager_ContactRelationshipManager, {})
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: "emergency-call/pages/contacts/content",
                key: "content.title"
            },
            navBar: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavBar/* NavBar */.j, {}),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactRelationshipManager_ContactRelationshipManager, {})
        })
    });
}


/***/ }),

/***/ 93589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ TabbarContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59864);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6445);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32055);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9220);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67236);
/* __next_internal_client_entry_do_not_use__ TabbarContainer auto */ 



// interface TabInfoType {
//   label: string;
//   value: string;
//   icon: React.ReactNode;
// }
function BottomBar(param) {
    let { navBar } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        id: "bottom-navigation",
        sx: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0
        },
        elevation: 3,
        children: navBar
    });
}
// function NavBar() {
//   const router = useRouter();
//   const { pathname } = router;
//   const { t } = useTranslation('app-ui/components/tabbar/content');
//   const tabInfoList: TabInfoType[] = [
//     { label: t('content.home'), value: '/', icon: <HomeIcon /> },
//     // { label: t('content.create'), value: '/script-creator', icon: <CreateIcon /> },
//     // { label: t('content.market'), value: '/market', icon: <StorefrontIcon /> },
//     { label: t('content.settings'), value: '/settings', icon: <SettingsIcon /> },
//   ];
//   return (
//     <BottomNavigation showLabels value={pathname}>
//       {tabInfoList.map(e => (
//         <BottomNavigationAction
//           key={e.value}
//           label={e.label}
//           icon={e.icon}
//           data-id={`tabbar-${e.value}`}
//           className={pathname === e.value ? 'Mui-selected' : ''}
//           onClick={() => {
//             if (pathname === e.value) return;
//             router.push(e.value);
//           }}
//         />
//       ))}
//     </BottomNavigation>
//   );
// }
// testWatchUpdates()
function TabbarContainer(param) {
    let { children, titleConf, navBar } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        sx: {
            display: 'flex',
            flexDirection: 'column',
            height2: '100vh'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                direction: "column",
                spacing: 3,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                        titleConf: titleConf,
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BottomBar, {
                        navBar: navBar
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 97972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ AppbarContainer)
});

// UNUSED EXPORTS: Appbar

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/useScrollTrigger/useScrollTrigger.js
var useScrollTrigger = __webpack_require__(97241);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Slide/Slide.js
var Slide = __webpack_require__(62115);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(41837);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(32055);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar_AppBar = __webpack_require__(16844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar_Toolbar = __webpack_require__(21436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(44437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Fab/Fab.js + 1 modules
var Fab = __webpack_require__(12726);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/browser/window-history-utils.ts
var window_history_utils = __webpack_require__(70574);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/KeyboardArrowLeft.js
var KeyboardArrowLeft = __webpack_require__(47951);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/KeyboardArrowUp.js
var KeyboardArrowUp = __webpack_require__(94283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/dispatcher/Dispatcher.ts
var Dispatcher = __webpack_require__(82727);
;// ../../libs/app/static/src/mc/static-model.ts

const dipsatcher = new Dispatcher/* Dispatcher */.m();
const staticModel = {
    dipsatcher,
    screenLockCount: 0,
    switchPage: async ()=>{
        dipsatcher.dispatch("switchPage");
        staticModel.screenLockCount = 0;
    },
    listenSwitchPage: (callback)=>{
        return dipsatcher.addListener("switchPage", callback);
    }
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 3 modules
var AnimatePresence = __webpack_require__(98969);
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 243 modules
var proxy = __webpack_require__(17582);
;// ../../libs/app/ui/src/components/motion/page-transition.tsx



function PageTransition(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatePresence/* AnimatePresence */.N, {
        mode: "sync",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.P.div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -110
            },
            transition: {
                duration: 0.3
            },
            children: children
        }, router.route)
    });
}

;// ../../libs/app/ui/src/components/app/PageShell.tsx





let idCount = 0;
function PageShell(param) {
    let { children } = param;
    const id = "app-shell-".concat(idCount++);
    (0,react.useEffect)(()=>{
        const box = document.querySelector("#".concat(id));
        const unlisten = staticModel.listenSwitchPage(()=>{
            if (!box) return;
        });
        if (!box) return;
        box.addEventListener("click", (e)=>{
            if (staticModel.screenLockCount == 0) return;
            e.stopPropagation();
            e.preventDefault();
        });
        return ()=>{
            unlisten();
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        id: id,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PageTransition, {
            children: children
        })
    });
}

// EXTERNAL MODULE: ../../libs/app/ui/src/components/page/AndroidPageContent.tsx + 1 modules
var AndroidPageContent = __webpack_require__(67236);
;// ../../libs/app/ui/src/components/appbar/AppBar.tsx


// import {AndroidPageContent} from "../../";







function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = (0,useScrollTrigger/* default */.A)({
        target: window ? window() : undefined
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Slide/* default */.A, {
        appear: false,
        direction: "down",
        in: !trigger,
        children: children !== null && children !== void 0 ? children : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
    });
}
function Appbar(param) {
    let { title } = param;
    return /*#__PURE__*/ _jsx(AppBar, {
        color: "inherit",
        children: /*#__PURE__*/ _jsx(Toolbar, {
            children: /*#__PURE__*/ _jsx(Typography, {
                variant: "h6",
                component: "div",
                children: title
            })
        })
    });
}
// export interface IAppBarBackAskEvent{
//     defaultPrevented:boolean
// }
function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = (0,useScrollTrigger/* default */.A)({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });
    const handleClick = (event)=>{
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
        if (anchor) {
            anchor.scrollIntoView({
                block: 'center'
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Fade/* default */.A, {
        in: trigger,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            "data-id": "content-scroll-top-button",
            onClick: handleClick,
            role: "presentation",
            sx: {
                position: 'fixed',
                bottom: 16,
                right: 16
            },
            children: children
        })
    });
}
function AppbarContainer(props) {
    const { children, appbarProps, titleConf, reload } = props;
    const router = (0,next_router.useRouter)();
    function handleBack() {
        // 本想抽象成底层一个方法，但是考虑了一下router需要注入或者是一个callback，似乎像现在这样判断一下event也可以。回头继续观察一下吧。
        const event = window_history_utils/* browserHistoryUtils */.W.askHistoryBack();
        if (event.defaultPrevented) return;
        if (appbarProps.backDispatcher) {
            const e = {
                defaultPrevented: false
            };
            appbarProps.backDispatcher.dispatch('back', e);
            if (e.defaultPrevented) return;
        }
        router.back();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PageShell, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CssBaseline/* default */.Ay, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(HideOnScroll, {
                    ...props,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar_AppBar/* default */.A, {
                        color: "inherit",
                        children: appbarProps.toolbar ? appbarProps.toolbar : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Toolbar_Toolbar/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowLeft/* default */.A, {
                                    onClick: handleBack
                                }),
                                appbarProps.title
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Toolbar_Toolbar/* default */.A, {
                    id: "back-to-top-anchor"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Container/* default */.A, {
                    sx: {
                        padding: "0",
                        marginTop: "17px"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidPageContent/* default */.A, {
                        titleConf: titleConf,
                        reload: reload,
                        children: children
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ScrollTop, {
                    ...props,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Fab/* default */.A, {
                        size: "small",
                        "aria-label": "scroll back to top",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowUp/* default */.A, {})
                    })
                })
            ]
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [415,8917,2092,688,8538,636,6593,8792], () => (__webpack_exec__(46004)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=contacts-65807f040f1b70bc.js.map