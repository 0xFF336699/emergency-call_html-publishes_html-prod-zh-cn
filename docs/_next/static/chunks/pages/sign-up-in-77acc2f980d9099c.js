(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8489],{

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


// EXTERNAL MODULE: ../../libs/app/model/src/remote/tracking/print.ts
var print = __webpack_require__(20726);
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
const dynamicKeyMap = new Map();
function AppShell(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    const scrollKey = 'scrollPositionInfo';
    const href = window.location.href.split("#")[0];
    const dynamicKey = "dynamic-".concat(href);
    const [isOpened] = (0,react.useState)(dynamicKeyMap.get(dynamicKey) === true);
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
        (0,print/* trackingPrint */.f)({
            params: {
                type: "页面进入",
                title: "页面",
                subtitle: "发送者-AppShell",
                extra: {
                    href: window.location.href
                }
            }
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
                if (isOpened) {
                    window.scrollTo(info.x, info.y);
                }
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
    (0,react.useEffect)(()=>{
        dynamicKeyMap.set(dynamicKey, true);
    }, []);
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

/***/ 46653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SignUpInPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 4 modules
var AppShell = __webpack_require__(43173);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(97972);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/proxyWatch.ts
var proxyWatch = __webpack_require__(88518);
// EXTERNAL MODULE: ../../libs/app/model/src/user/User.ts + 6 modules
var User = __webpack_require__(82080);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tracking/print.ts
var print = __webpack_require__(20726);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(22243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts + 50 modules
var request = __webpack_require__(89567);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(2413);
;// ../../libs/app/model/src/remote/user/get-verification-code.ts


var TMGetVerificationCodeType = /*#__PURE__*/ function(TMGetVerificationCodeType) {
    TMGetVerificationCodeType["cnMobile"] = "cnMobile";
    TMGetVerificationCodeType["email"] = "email";
    return TMGetVerificationCodeType;
}({});
async function tmsGetVerificationCode(opts) {
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TUser, tms/* tms */.X.MUserCreateRegCode, opts.params, opts.gateway, opts.handler);
    return res;
}

;// ../../libs/app/model/src/remote/user/loginByCode.ts


async function tmsLoginByCode(opts) {
    console.log('options=', opts);
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TUser, tms/* tms */.X.MUserLoginByCode, opts.params, opts.gateway, opts.handler);
    return res;
}

;// ../../libs/app/model/src/remote/user/common.ts
var UserLoginType = /*#__PURE__*/ function(UserLoginType) {
    UserLoginType["cnMobile"] = "cnMobile";
    UserLoginType["email"] = "email";
    return UserLoginType;
}({});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(63624);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 3 modules
var TextField = __webpack_require__(67571);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(93916);
;// ./src/components/common/UnifiedLogin.tsx




const PHONE_REGEX = /^1[3-9]\d{9}$/;
const VERIFICATION_CODE_REGEX = /^\d{6}$/;
function UnifiedLogin(param) {
    let { onGetCode, onLogin, onShowPrivacyDialog, showAgreementCheckbox, isLoading, error, countdown, agreeData } = param;
    const [phone, setPhone] = (0,react.useState)('');
    const [code, setCode] = (0,react.useState)('');
    // const [privacyAgreed, setPrivacyAgreed] = useState(!showAgreementCheckbox);
    const [agree] = (0,useProxyWatch/* useProxyWatch */.x)(agreeData, 'agree', agreeData.agree);
    const [code14] = (0,useProxyWatch/* useProxyWatch */.x)(agreeData, 'code', agreeData.code);
    const isPhoneValid = PHONE_REGEX.test(phone);
    const isCodeValid = VERIFICATION_CODE_REGEX.test(code);
    const canGetCode = !isLoading && isPhoneValid && countdown === 0;
    const canLogin = isPhoneValid && isCodeValid && !isLoading && agree;
    const waitForPrivacyAgree = isPhoneValid && isCodeValid && !isLoading && !agree;
    (0,react.useEffect)(()=>{
    // setPrivacyAgreed(agree)
    }, [
        agree
    ]);
    (0,react.useEffect)(()=>{
        if (!code14) return;
        setCode(code14);
    }, [
        code14
    ]);
    const handleGetCodeClick = ()=>{
        if (canGetCode) {
            onGetCode(phone);
        }
    };
    const handleLoginClick = ()=>{
        if (canLogin) {
            onLogin(phone, code);
        }
    };
    const handlePrivacyClick = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        onShowPrivacyDialog();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            maxWidth: 400,
            mx: 'auto',
            p: {
                xs: 1,
                sm: 3
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h5",
                component: "h1",
                gutterBottom: true,
                align: "center",
                children: "手机号登录/注册"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    handleLoginClick();
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            fullWidth: true,
                            label: "手机号",
                            value: phone,
                            onChange: (e)=>setPhone(e.target.value),
                            placeholder: "请输入您的手机号",
                            disabled: isLoading || countdown > 0,
                            margin: "normal",
                            inputProps: {
                                maxLength: 11
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                gap: 2,
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                    fullWidth: true,
                                    label: "验证码",
                                    value: code,
                                    onChange: (e)=>setCode(e.target.value.replace(/\D/g, '').substring(0, 6)),
                                    placeholder: "请输入6位验证码",
                                    disabled: isLoading,
                                    margin: "normal",
                                    inputProps: {
                                        maxLength: 6
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                    variant: "outlined",
                                    onClick: handleGetCodeClick,
                                    disabled: !canGetCode,
                                    fullWidth: true,
                                    sx: {
                                        mt: '8px',
                                        mb: '4px',
                                        height: '56px'
                                    },
                                    children: countdown > 0 ? "".concat(countdown, "秒后重试") : '获取验证码'
                                })
                            ]
                        }),
                        showAgreementCheckbox && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                alignItems: 'center',
                                mt: 1,
                                mb: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    sx: {
                                        color: waitForPrivacyAgree ? 'error.main' : 'inherit'
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                        label: "我已阅读并同意",
                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                                            checked: agree,
                                            onChange: (e)=>{
                                                // setPrivacyAgreed(e.target.checked)
                                                agreeData.agree = e.target.checked;
                                            }
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "body2",
                                    sx: {
                                        userSelect: 'none'
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                        component: "span",
                                        sx: {
                                            color: 'primary.main',
                                            cursor: 'pointer'
                                        },
                                        onClick: handlePrivacyClick,
                                        children: "《隐私政策》"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            variant: "contained",
                            onClick: handleLoginClick,
                            disabled: !canLogin,
                            fullWidth: true,
                            sx: {
                                mt: 2,
                                py: 1.5
                            },
                            children: "登录 / 注册"
                        }),
                        error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            color: "error",
                            align: "center",
                            sx: {
                                mt: 2
                            },
                            children: error
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/privacies/PrivacyDialogDisplay.tsx
var PrivacyDialogDisplay = __webpack_require__(91242);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/utils/debug/object-count-utils.ts
var object_count_utils = __webpack_require__(31095);
;// ./src/components/common/LoginController.tsx








function LoginController(param) {
    let { agreeData, onLoginSuccess, showAgreementCheckbox } = param;
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)('');
    const [countdown, setCountdown] = (0,react.useState)(0);
    const [openPrivacy, setOpenPrivacy] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        let timer;
        if (countdown > 0) {
            timer = setTimeout(()=>setCountdown(countdown - 1), 1000);
        }
        return ()=>clearTimeout(timer);
    }, [
        countdown
    ]);
    const handleGetCode = (0,react.useCallback)(async (phone)=>{
        setIsLoading(true);
        setError('');
        try {
            var _res_data_reg_code_info, _res_data;
            const res = await tmsGetVerificationCode({
                params: {
                    login_name: phone,
                    type: TMGetVerificationCodeType.cnMobile
                },
                gateway: '',
                handler: {
                    printLog: false
                }
            });
            if (res.err || !res.shellIsOk || !res.dataIsOk) {
                var _res_err;
                setError(((_res_err = res.err) === null || _res_err === void 0 ? void 0 : _res_err.toString()) || '获取验证码失败');
                return;
            }
            const codeFromServer = (_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_reg_code_info = _res_data.reg_code_info) === null || _res_data_reg_code_info === void 0 ? void 0 : _res_data_reg_code_info.code;
            if (codeFromServer && codeFromServer.length === 6 && !lodash_default().isNaN(parseInt(codeFromServer))) {
                agreeData.code = codeFromServer;
                (0,dist/* default */.Ay)('物联网号码无需短信，已自动填入验证码', {
                    duration: 5000
                });
            }
            setCountdown(60);
        } catch (err) {
            setError('请求失败，请稍后再试');
        } finally{
            setIsLoading(false);
        }
    }, []);
    const handleLogin = (0,react.useCallback)(async (phone, code)=>{
        setIsLoading(true);
        setError('');
        try {
            var _res_data, _res_data1;
            const res = await tmsLoginByCode({
                params: {
                    login_name: phone,
                    code,
                    type: UserLoginType.cnMobile
                },
                gateway: '',
                handler: {
                    printLog: false
                }
            });
            if (res.err || !res.shellIsOk || !res.dataIsOk || !((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.is_ok)) {
                var _res_data2, _res_err;
                setError(((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.msg) || ((_res_err = res.err) === null || _res_err === void 0 ? void 0 : _res_err.toString()) || '登录失败');
                return;
            }
            const userToken = (_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.user_token;
            if (userToken) {
                if (showAgreementCheckbox) {
                    localStorage.setItem('privacyPolicyAgreed', 'true');
                }
                User/* user */.k.data.storeData.user_token = userToken;
                onLoginSuccess();
            } else {
                var _res_data3;
                setError(((_res_data3 = res.data) === null || _res_data3 === void 0 ? void 0 : _res_data3.msg) || '登录失败');
            }
        } catch (err) {
            setError('请求失败，请稍后再试');
        } finally{
            setIsLoading(false);
        }
    }, [
        onLoginSuccess,
        showAgreementCheckbox
    ]);
    const handleShowPrivacyDialog = ()=>{
        // privacy.show();
        setOpenPrivacy(!openPrivacy);
    };
    function onPrivacyClose(agree) {
        console.log('agree =', typeof agree, agree, object_count_utils/* objectCountUtils */._.getObjectCount(agreeData));
        if (typeof agree !== 'undefined') {
            agreeData.agree = agree;
        }
        setOpenPrivacy(false);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PrivacyDialogDisplay/* PrivacyDialogDisplay */.d, {
                open: openPrivacy,
                onClose: onPrivacyClose,
                area: "zh-cn",
                type: "main"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(UnifiedLogin, {
                agreeData: agreeData,
                onGetCode: handleGetCode,
                onLogin: handleLogin,
                onShowPrivacyDialog: handleShowPrivacyDialog,
                showAgreementCheckbox: showAgreementCheckbox,
                isLoading: isLoading,
                error: error,
                countdown: countdown
            })
        ]
    });
}

;// ./src/components/pages/sign-up-in/content/SignInUpContent.tsx








function SignInUpContent() {
    const router = (0,next_router.useRouter)();
    const [token] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    const [agreeData] = (0,react.useState)((0,proxyWatch/* toProxy */.I$)({
        agree: false
    }));
    console.log('SignInUpContent_fn token=', token);
    if (token) {
        const waitTime = 1000;
        // 登录成功埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "用户操作",
                title: "用户登录",
                subtitle: "登录-成功完成",
                extra: {
                    timestamp: Date.now(),
                    redirectDelay: waitTime + 500,
                    backUrl: router.query.back || '/',
                    hasBackParam: !!router.query.back
                }
            }
        });
        (0,dist/* default */.Ay)('登录成功', {
            duration: waitTime
        });
        setTimeout(()=>{
            back();
        }, waitTime + 500);
    }
    function back() {
        let p = '/';
        if (router.query.back) {
            if (router.query.back instanceof Array) {
                p = router.query.back[0];
            } else {
                p = router.query.back;
            }
        }
        router.replace(p);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoginController, {
            agreeData: agreeData,
            onLoginSuccess: back,
            showAgreementCheckbox: true
        })
    });
}

;// ./src/pages/sign-up-in/index.tsx



function SignUpInPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: "登录",
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignInUpContent, {})
        })
    });
}


/***/ }),

/***/ 67188:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/sign-up-in",
      function () {
        return __webpack_require__(46653);
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
// EXTERNAL MODULE: ../../libs/fanfanlo/src/nextjs/env/env.ts
var env = __webpack_require__(49210);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/i18n/i18n-value-loader.ts + 1 modules
var i18n_value_loader = __webpack_require__(27950);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(44437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
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
            height: '100%',
            overflow: 'auto',
            padding: "0px",
            display: 'flex',
            flexDirection: 'column'
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

/***/ 91242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ PrivacyDialogDisplay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Dialog_DialogContent_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49280);
/* harmony import */ var _barrel_optimize_names_Dialog_DialogContent_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65494);
/* harmony import */ var _barrel_optimize_names_Dialog_DialogContent_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18244);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29864);
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5123);
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13774);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87891);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);








/**
 * 纯显示组件 - 负责隐私协议弹窗的显示和交互
 * 可以被手动控制打开/关闭
 */ function PrivacyDialogDisplay(param) {
    let { open, onClose, type, area, showAgree } = param;
    let suffix =  false ? 0 : window.location.href.indexOf("qiniu") > -1 ? "/index.html?v=".concat(next_config__WEBPACK_IMPORTED_MODULE_3___default()().publicRuntimeConfig.buildTime) : "/";
    const [iframeSrc, setIframeSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("/privacies/".concat(type, "/").concat(area).concat(suffix, "#showAgree=").concat(lodash__WEBPACK_IMPORTED_MODULE_2___default().isBoolean(showAgree) ? showAgree : true));
    const iframeRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const [agree, setAgree] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIframeSrc("/privacies/".concat(type, "/").concat(area).concat(suffix));
    }, [
        type,
        area
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleMessage = (event)=>{
            var _iframeRef_current;
            // 安全检查：确保消息来自iframe
            if (event.source !== ((_iframeRef_current = iframeRef.current) === null || _iframeRef_current === void 0 ? void 0 : _iframeRef_current.contentWindow)) {
                return;
            }
            const { sender, agree } = event.data;
            if (sender === 'privacy_page') {
                console.log("Received privacy decision: ".concat(agree ? 'Agreed' : 'Disagreed'));
                const value = {
                    agree,
                    disagreeTime: agree ? 0 : Date.now()
                };
                // 保存到本地存储
                _droid_android__WEBPACK_IMPORTED_MODULE_4__/* .autoJsStoreUtils */ .b.write("privacy_".concat(type), value);
                // 同步到Android端
                const script = "\n          var data = new com.fanfanlo.emergencycall.data.PrivacyData(".concat(value.agree, ", ").concat(value.disagreeTime, ");\n          com.fanfanlo.emergencycall.data.PrivacyStateHolder.updateMainPrivacyByJs(data);\n        ");
                _droid_android__WEBPACK_IMPORTED_MODULE_5__/* .autoWebViewJs */ .yx.callScript(script);
                // 关闭弹窗
                setAgree(agree);
                onClose(agree);
            }
        };
        window.addEventListener('message', handleMessage);
        return ()=>{
            window.removeEventListener('message', handleMessage);
        };
    }, [
        type,
        onClose
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Dialog_DialogContent_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
        open: open,
        onClose: ()=>{
            onClose(agree);
        },
        PaperProps: {
            sx: {
                width: '80%',
                height: '80%',
                maxWidth: 'none'
            }
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Dialog_DialogContent_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                "aria-label": "close",
                onClick: ()=>{
                    onClose(agree);
                },
                sx: {
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme)=>theme.palette.grey[500]
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Dialog_DialogContent_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                sx: {
                    padding: 0,
                    overflow: 'hidden'
                },
                children: iframeSrc && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
                    ref: iframeRef,
                    src: iframeSrc,
                    style: {
                        width: '100%',
                        height: '100%',
                        border: 'none'
                    },
                    title: "Privacy Policy - ".concat(type, "/").concat(area)
                })
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
/******/ __webpack_require__.O(0, [6807,9893,7571,5711,636,6593,8792], () => (__webpack_exec__(67188)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=sign-up-in-77acc2f980d9099c.js.map