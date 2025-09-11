(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[199],{

/***/ 11377:
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
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tracking/print.ts
var print = __webpack_require__(20726);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ./src/components/privacies/PrivacyDialogDisplay.tsx
var PrivacyDialogDisplay = __webpack_require__(91242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
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

// EXTERNAL MODULE: ./src/contexts/FontSizeContext.tsx
var FontSizeContext = __webpack_require__(45152);
;// ./src/components/settings/FontSizeButton.tsx



const FontSizeButton = ()=>{
    const { openDialog } = (0,FontSizeContext/* useFontSize */.eA)();
    const handleOpenFontSizeDialog = ()=>{
        openDialog(false); // false 表示不是从首页打开的
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
        fullWidth: true,
        variant: "outlined",
        onClick: handleOpenFontSizeDialog,
        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            style: {
                fontSize: '1.2em'
            },
            children: "\uD83D\uDD0D"
        }),
        sx: {
            mt: 2,
            mb: 2,
            py: 1.5,
            justifyContent: 'flex-start',
            textTransform: 'none',
            fontSize: '1rem',
            '& .MuiButton-startIcon': {
                marginRight: 1.5
            }
        },
        children: "调整字体大小"
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FontSizeButton, {}),
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

/***/ 15299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ ReportButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28669);
/* harmony import */ var _mui_icons_material_AddComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54196);
/* harmony import */ var _app_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20726);
/* harmony import */ var _ReportSubmitModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24723);






/**
 * A self-contained button component that triggers the report submission modal.
 */ const ReportButton = (param)=>{
    let { buttonText = '举报', ...rest } = param;
    const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSuccess = ()=>{
        // A snackbar could be triggered here in a real app.
        console.log('Report submitted successfully.');
        // 举报成功埋点
        (0,_app_model__WEBPACK_IMPORTED_MODULE_3__/* .trackingPrint */ .f)({
            params: {
                type: "用户操作",
                title: "举报功能",
                subtitle: "举报-提交成功",
                extra: {
                    timestamp: Date.now(),
                    buttonText: buttonText
                }
            }
        });
    };
    const handleClick = ()=>{
        // 按钮点击埋点
        (0,_app_model__WEBPACK_IMPORTED_MODULE_3__/* .trackingPrint */ .f)({
            params: {
                type: "用户操作",
                title: "举报功能",
                subtitle: "举报-按钮点击",
                extra: {
                    timestamp: Date.now(),
                    buttonText: buttonText
                }
            }
        });
        setModalOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                variant: "contained",
                startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_AddComment__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {}),
                onClick: handleClick,
                ...rest,
                children: buttonText
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ReportSubmitModal__WEBPACK_IMPORTED_MODULE_2__/* .ReportSubmitModal */ .a, {
                open: modalOpen,
                onClose: ()=>{
                    // 模态框关闭埋点
                    (0,_app_model__WEBPACK_IMPORTED_MODULE_3__/* .trackingPrint */ .f)({
                        params: {
                            type: "模态框操作",
                            title: "举报对话框",
                            subtitle: "对话框-关闭",
                            extra: {
                                timestamp: Date.now(),
                                buttonText: buttonText
                            }
                        }
                    });
                    setModalOpen(false);
                },
                onSuccess: handleSuccess
            })
        ]
    });
};


/***/ }),

/***/ 24723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ ReportSubmitModal)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(49280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(3711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(18244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContentText/DialogContentText.js + 1 modules
var DialogContentText = __webpack_require__(33899);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 3 modules
var TextField = __webpack_require__(67571);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(69468);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts + 50 modules
var request = __webpack_require__(89567);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(2413);
;// ../../libs/app/model/src/remote/report/submit.ts


/**
 * @description 提交一个新的举报
 * @param {ISubmitReportParams} params - 举报的详细信息
 * @returns {Promise<ISubmitReportResult>}
 */ async function submitReport(params) {
    return await (0,request/* request */.Em)(tms/* tms */.X.TReport, tms/* tms */.X.MReportSubmit, params);
}

;// ./src/components/report/ReportSubmitModal/index.tsx




const ReportSubmitModal = (param)=>{
    let { open, onClose, onSuccess } = param;
    const [mobile, setMobile] = (0,react.useState)('');
    const [reason, setReason] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    const [loading, setLoading] = (0,react.useState)(false);
    const handleClose = ()=>{
        // Reset state on close
        setMobile('');
        setReason('');
        setError('');
        setLoading(false);
        onClose();
    };
    const handleSubmit = async ()=>{
        if (!mobile || !reason) {
            setError('手机号和举报原因均不能为空。');
            return;
        }
        setError('');
        setLoading(true);
        try {
            const result = await submitReport({
                reported_mobile: mobile,
                reason: reason,
                report_type: 'user_report_from_app'
            });
            if (result.shellIsOk) {
                // alert('举报成功，感谢您的反馈！'); // Or use a Snackbar for better UX
                if (onSuccess) {
                    onSuccess();
                }
                handleClose();
            } else {
                var _result_err;
                setError(((_result_err = result.err) === null || _result_err === void 0 ? void 0 : _result_err.message) || '提交失败，请稍后再试。');
            }
        } catch (e) {
            setError('网络错误，请检查您的连接。');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: handleClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                children: "提交举报"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.A, {
                        children: "请输入您要举报的用户的手机号码和具体原因。我们会尽快处理您的举报。"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        autoFocus: true,
                        margin: "dense",
                        id: "mobile",
                        label: "被举报人手机号、账号或ID",
                        type: "tel",
                        fullWidth: true,
                        variant: "standard",
                        value: mobile,
                        onChange: (e)=>setMobile(e.target.value),
                        disabled: loading
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        margin: "dense",
                        id: "reason",
                        label: "举报原因",
                        type: "text",
                        fullWidth: true,
                        multiline: true,
                        rows: 4,
                        variant: "standard",
                        value: reason,
                        onChange: (e)=>setReason(e.target.value),
                        disabled: loading
                    }),
                    error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            color: 'error.main',
                            mt: 2
                        },
                        children: error
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: handleClose,
                        disabled: loading,
                        children: "取消"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: handleSubmit,
                        disabled: loading,
                        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                            size: 24
                        }) : '提交'
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 32534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75640);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50279);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39460);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30319);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52089);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76242);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94285);







function NavBar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { pathname } = router;
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .Bd)('emergency-call/components/navbar/content');
    const tabInfoList = [
        {
            label: t('NavBar.home'),
            value: '/',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {})
        },
        // { label: t('NavBar.logs'), value: '/logs', icon: <ListIcon /> },
        // { label: t('content.create'), value: '/script-creator', icon: <CreateIcon /> },
        // { label: t('content.market'), value: '/market', icon: <StorefrontIcon /> },
        {
            label: t('NavBar.settings'),
            value: '/settings',
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {})
        }
    ];
    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(()=>{
        (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .nextPreload */ .h)(router, '/settings');
        (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .nextPreload */ .h)(router, '/');
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
        showLabels: true,
        value: pathname,
        children: tabInfoList.map((e)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
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

/***/ 45520:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/settings",
      function () {
        return __webpack_require__(11377);
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

/***/ 93589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ TabbarContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59864);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6445);
/* harmony import */ var _barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32055);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67236);
/* __next_internal_client_entry_do_not_use__ TabbarContainer auto */ 



function BottomBar(param) {
    let { navBar } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
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
function TabbarContainer(param) {
    let { children, titleConf, navBar } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        sx: {
            minHeight: '100vh',
            paddingBottom: '72px' // 为固定在底部的tabbar留出空间
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_CssBaseline_Paper_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                titleConf: titleConf,
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BottomBar, {
                navBar: navBar
            })
        ]
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5299,7097,7580,6680,636,6593,8792], () => (__webpack_exec__(45520)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=settings-c2d26c07bc6927b9.js.map