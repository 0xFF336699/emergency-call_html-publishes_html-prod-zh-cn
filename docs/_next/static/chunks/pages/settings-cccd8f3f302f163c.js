(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[199],{

/***/ 13020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SettingsPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 4 modules
var AppShell = __webpack_require__(43173);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/tabbar/Tabbar.tsx
var Tabbar = __webpack_require__(93589);
// EXTERNAL MODULE: ./src/components/navbar/NavBar.tsx
var NavBar = __webpack_require__(32534);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../libs/app/model/src/user/User.ts + 6 modules
var User = __webpack_require__(82080);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(22243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/link.js
var next_link = __webpack_require__(97097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(49280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(3711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(18244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(69468);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
;// __barrel_optimize__?names=useTranslation!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js


;// ../../libs/fanfanlo/src/mui/dialog/ButtonConfirm.tsx




function ButtonConfirm(param) {
    let { title, content, confirmText, cancelText, onConfirm, onCancel, onClose, cancelId, confirmId, children } = param;
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    const { t } = (0,es/* useTranslation */.Bd)('fanfanlo/mui/dialog/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                onClick: ()=>setIsOpen(true),
                children: children
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: isOpen,
                onClose: ()=>setIsOpen(false),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: title || t('ButtonConfirm.title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: content || t('ButtonConfirm.content')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                id: cancelId || 'btn-dialog-button-confirm-cancel',
                                "data-id": cancelId || 'btn-dialog-button-confirm-cancel',
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                                    onClose === null || onClose === void 0 ? void 0 : onClose(false);
                                },
                                children: cancelText || t('ButtonConfirm.cancel')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                id: confirmId || 'btn-dialog-button-confirm-confirm',
                                "data-id": confirmId || 'btn-dialog-button-confirm-confirm',
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();
                                    onClose === null || onClose === void 0 ? void 0 : onClose(true);
                                },
                                children: confirmText || t('ButtonConfirm.confirm')
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// ./src/components/pages/sign-up-in/components/sign-up-in-button/SignUpIn.tsx










function SignUpInButton(param) {
    let { back } = param;
    // apps\homepage\src\components\page\sign-up-in\components\sign-up-in-button\SignUpIn.i18n.json
    const { t } = (0,es/* useTranslation */.Bd)('homepage/components/page/sign-up-in/components/sign-up-in-button/content');
    const router = (0,next_router.useRouter)();
    const [token] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    const [userInitialized] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.userInitialized', User/* user */.k.data.userInitialized);
    const [userName, setUserName] = (0,react.useState)(User/* user */.k.userName || '');
    (0,react.useEffect)(()=>{
        setUserName(User/* user */.k.userName || '');
    }, [
        token,
        User/* user */.k.userName
    ]);
    function onSignoutClick() {
        User/* user */.k.signout();
        (0,dist/* default */.Ay)(t('SignUpIn.signoutOk'), {
            duration: 5000
        });
    }
    if (!userInitialized) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: t('SignUpIn.loadingData')
        });
    }
    if (token) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: userName
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm, {
                            title: t('SignUpIn.confirmTitle'),
                            content: t('SignUpIn.confirmContent'),
                            onConfirm: onSignoutClick,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                children: t('SignUpIn.signOut')
                            })
                        })
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                href: "/sign-up-in?back=".concat(back),
                children: t('SignUpIn.signUpIn')
            })
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/config.js
var config = __webpack_require__(87891);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// ./src/components/pages/settings/content/buildtime/AppBuildTime.tsx



function AppBuildTime() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            mt: 2,
            mb: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: "构建时间："
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: new Date(config_default()().publicRuntimeConfig.buildTime).toLocaleString()
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContentText/DialogContentText.js + 1 modules
var DialogContentText = __webpack_require__(33899);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Snackbar/Snackbar.js + 5 modules
var Snackbar = __webpack_require__(57580);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 5 modules
var Alert = __webpack_require__(85629);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tracking/print.ts
var print = __webpack_require__(20726);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts + 50 modules
var request = __webpack_require__(89567);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(2413);
;// ../../libs/app/model/src/remote/user/deleteAccount.ts


/**
 * Calls the endpoint to delete a user account.
 * @param opts Request options, can be empty as no specific params are needed.
 * @returns The result from the server.
 */ async function tmsUserDeleteAccount(opts) {
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TUser, tms/* tms */.X.MUserDeleteAccount, opts.params, opts.gateway, opts.handler);
    if (!res.dataIsOk) {
        console.error('tmsUserDeleteAccount error:', res.err, res);
    }
    return res;
}

;// ./src/components/pages/settings/content/DeleteAccountButton.tsx





const DeleteAccountButton = ()=>{
    const { t } = (0,es/* useTranslation */.Bd)("emergency-call/pages/settings/content");
    const [token] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    const [openDialog, setOpenDialog] = (0,react.useState)(false);
    const [snackbar, setSnackbar] = (0,react.useState)({
        open: false,
        message: '',
        severity: 'success'
    });
    const handleOpenDialog = ()=>{
        // 删除账户对话框打开埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "模态框操作",
                title: "删除账户",
                subtitle: "确认对话框-打开",
                extra: {
                    timestamp: Date.now(),
                    hasToken: !!token
                }
            }
        });
        setOpenDialog(true);
    };
    const handleCloseDialog = ()=>{
        // 删除账户对话框关闭埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "模态框操作",
                title: "删除账户",
                subtitle: "确认对话框-取消关闭",
                extra: {
                    timestamp: Date.now()
                }
            }
        });
        setOpenDialog(false);
    };
    // ... (inside the component)
    const handleConfirmDelete = async ()=>{
        // 确认删除账户埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "用户操作",
                title: "删除账户",
                subtitle: "确认删除-点击",
                extra: {
                    timestamp: Date.now(),
                    userId: token
                }
            }
        });
        handleCloseDialog();
        try {
            const response = await tmsUserDeleteAccount({
                params: {}
            });
            if (response.shellIsOk && response.dataIsOk) {
                // 删除成功埋点
                (0,print/* trackingPrint */.f)({
                    params: {
                        type: "用户操作",
                        title: "删除账户",
                        subtitle: "删除成功",
                        extra: {
                            timestamp: Date.now(),
                            redirectDelay: 2000
                        }
                    }
                });
                User/* user */.k.signout();
                setSnackbar({
                    open: true,
                    message: t('content.deleteAccount.success'),
                    severity: 'success'
                });
                // After a short delay, redirect
                setTimeout(()=>{
                    window.location.href = '/';
                }, 2000);
            } else {
                var _response_data, _response_err;
                const errorMessage = ((_response_data = response.data) === null || _response_data === void 0 ? void 0 : _response_data.msg) || ((_response_err = response.err) === null || _response_err === void 0 ? void 0 : _response_err.message) || 'Unknown error';
                // 删除失败埋点
                (0,print/* trackingPrint */.f)({
                    params: {
                        type: "系统异常",
                        title: "删除账户",
                        subtitle: "删除失败",
                        extra: {
                            timestamp: Date.now(),
                            error: errorMessage,
                            shellIsOk: response.shellIsOk,
                            dataIsOk: response.dataIsOk
                        }
                    }
                });
                setSnackbar({
                    open: true,
                    message: t('content.deleteAccount.failure', {
                        error: errorMessage
                    }),
                    severity: 'error'
                });
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            // 删除异常埋点
            (0,print/* trackingPrint */.f)({
                params: {
                    type: "系统异常",
                    title: "删除账户",
                    subtitle: "删除异常",
                    extra: {
                        timestamp: Date.now(),
                        error: errorMessage,
                        stack: error instanceof Error ? error.stack : undefined
                    }
                }
            });
            setSnackbar({
                open: true,
                message: t('content.deleteAccount.failure', {
                    error: errorMessage
                }),
                severity: 'error'
            });
        }
    };
    const handleCloseSnackbar = ()=>{
        setSnackbar({
            ...snackbar,
            open: false
        });
    };
    if (!token) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            mt: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                variant: "contained",
                color: "error",
                onClick: handleOpenDialog,
                children: t('content.deleteAccount.button')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: openDialog,
                onClose: handleCloseDialog,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: t('content.deleteAccount.button')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.A, {
                            children: t('content.deleteAccount.confirm')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleCloseDialog,
                                children: "取消"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleConfirmDelete,
                                color: "error",
                                autoFocus: true,
                                children: "确认注销"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Snackbar/* default */.A, {
                open: snackbar.open,
                autoHideDuration: 6000,
                onClose: handleCloseSnackbar,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                    onClose: handleCloseSnackbar,
                    severity: snackbar.severity,
                    sx: {
                        width: '100%'
                    },
                    children: snackbar.message
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/components/privacies/PrivacyDialogDisplay.tsx
var PrivacyDialogDisplay = __webpack_require__(91242);
;// ./src/components/privacies/usePrivacyDialog.ts

/**
 * 用于手动控制隐私协议弹窗的Hook
 */ function usePrivacyDialog() {
    const [open, setOpen] = (0,react.useState)(false);
    const openDialog = ()=>setOpen(true);
    const closeDialog = ()=>setOpen(false);
    return {
        open,
        openDialog,
        closeDialog
    };
}

// EXTERNAL MODULE: ./src/components/report/ReportButton/index.tsx
var ReportButton = __webpack_require__(15299);
;// ./src/components/report/MyReports.tsx




function MyReports() {
    const router = (0,next_router.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            mt: 2,
            mb: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ReportButton/* ReportButton */.r, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                onClick: ()=>router.push('/my-reports'),
                children: "我的举报"
            })
        ]
    });
}

;// ./src/components/pages/settings/content/Settings.tsx









// import {LanguageSelect} from '../../../language-selector/LanguageSelect'
function Privacy() {
    const { open, openDialog, closeDialog } = usePrivacyDialog();
    const handleOpenDialog = ()=>{
        // 隐私协议按钮点击埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "用户操作",
                title: "隐私协议",
                subtitle: "协议按钮-点击",
                extra: {
                    timestamp: Date.now(),
                    page: "settings"
                }
            }
        });
        openDialog();
    };
    const handleCloseDialog = ()=>{
        // 隐私协议对话框关闭埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "模态框操作",
                title: "隐私协议",
                subtitle: "协议对话框-关闭",
                extra: {
                    timestamp: Date.now()
                }
            }
        });
        closeDialog();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            mt: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                onClick: handleOpenDialog,
                children: "隐私协议"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PrivacyDialogDisplay/* PrivacyDialogDisplay */.d, {
                open: open,
                onClose: handleCloseDialog,
                type: "main",
                area: "zh-cn"
            })
        ]
    });
}
const SettingsContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            p: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SignUpInButton, {
                back: "/settings"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteAccountButton, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBuildTime, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MyReports, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Privacy, {})
        ]
    });
};

;// ./src/pages/settings/index.tsx




function SettingsPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: "homepage/pages/settings/content",
                key: "content.title"
            },
            navBar: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavBar/* NavBar */.j, {}),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsContent, {})
        })
    });
}


/***/ }),

/***/ 45520:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/settings",
      function () {
        return __webpack_require__(13020);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 54196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4z"
}), 'AddComment'));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5299,4888,7580,9917,3604,636,6593,8792], () => (__webpack_exec__(45520)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=settings-cccd8f3f302f163c.js.map