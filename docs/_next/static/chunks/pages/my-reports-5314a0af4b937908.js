(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3016],{

/***/ 43911:
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
var AppShell = __webpack_require__(59089);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 2 modules
var AppBar = __webpack_require__(40018);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(95409);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95657);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(99450);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(26512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(20872);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(66397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItem/ListItem.js + 4 modules
var ListItem = __webpack_require__(25763);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(83942);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(8536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Pagination/Pagination.js + 8 modules
var Pagination = __webpack_require__(1616);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/AddComment.js
var AddComment = __webpack_require__(47517);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts + 50 modules
var request = __webpack_require__(77982);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(20928);
;// ../../libs/app/model/src/remote/report/getMyList.ts


/**
 * @description 获取当前用户提交的举报列表
 * @param {IGetMyReportsParams} params - 分页参数
 * @returns {Promise<IGetMyReportsResult>}
 */ async function getMyReports(params) {
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TReport, tms/* tms */.X.MReportGetMyList, params);
    return res;
}

// EXTERNAL MODULE: ./src/components/report/ReportSubmitModal/index.tsx + 1 modules
var ReportSubmitModal = __webpack_require__(93093);
;// ./src/components/report/MyReportsList/index.tsx






// Helper function to render status with appropriate color
const getStatusChip = (status)=>{
    switch(status){
        case 'resolved':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                label: "已处理",
                color: "success",
                size: "small"
            });
        case 'dismissed':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                label: "已驳回",
                color: "warning",
                size: "small"
            });
        case 'pending':
        default:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                label: "待处理",
                color: "info",
                size: "small"
            });
    }
};
const MyReportsList = ()=>{
    const [reports, setReports] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)('');
    const [page, setPage] = (0,react.useState)(1);
    const [totalPages, setTotalPages] = (0,react.useState)(0);
    const [modalOpen, setModalOpen] = (0,react.useState)(false); // State for the modal
    const limit = 10;
    (0,react.useEffect)(()=>{
        const fetchReports = async ()=>{
            setLoading(true);
            setError('');
            try {
                const result = await getMyReports({
                    page,
                    limit
                });
                if (result.shellIsOk && result.data) {
                    var _result_data;
                    setReports(((_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.reports) || []);
                    setTotalPages(Math.ceil(result.data.total / limit));
                } else {
                    var _result_err;
                    setError(((_result_err = result.err) === null || _result_err === void 0 ? void 0 : _result_err.message) || '您未登录，无法加载举报列表。');
                }
            } catch (e) {
                setError('网络错误，请稍后重试。');
            } finally{
                setLoading(false);
            }
        };
        fetchReports();
    }, [
        page
    ]);
    const handlePageChange = (event, value)=>{
        setPage(value);
    };
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                display: 'flex',
                justifyContent: 'center',
                my: 4
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
            severity: "error",
            children: error
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "h6",
                        children: "我的举报记录"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "contained",
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddComment/* default */.A, {}),
                        onClick: ()=>setModalOpen(true),
                        children: "发起举报"
                    })
                ]
            }),
            reports.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                children: "您还没有任何举报记录。"
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
                        children: reports.map((report, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.Ay, {
                                        alignItems: "flex-start",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                                            primary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                                sx: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                                        variant: "subtitle1",
                                                        children: [
                                                            "举报对象: ",
                                                            report.reported_uuid
                                                        ]
                                                    }),
                                                    getStatusChip(report.status)
                                                ]
                                            }),
                                            secondary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                                        sx: {
                                                            display: 'block'
                                                        },
                                                        component: "span",
                                                        variant: "body2",
                                                        color: "text.primary",
                                                        children: [
                                                            "原因: ",
                                                            report.reason
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                        variant: "caption",
                                                        color: "text.secondary",
                                                        children: new Date(report.created_at).toLocaleString()
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    index < reports.length - 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                                        variant: "inset",
                                        component: "li"
                                    })
                                ]
                            }, report.uuid))
                    }),
                    totalPages > 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Pagination/* default */.A, {
                            count: totalPages,
                            page: page,
                            onChange: handlePageChange,
                            color: "primary"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ReportSubmitModal/* ReportSubmitModal */.a, {
                open: modalOpen,
                onClose: ()=>setModalOpen(false),
                onSuccess: ()=>{
                    // Per user instruction, no refresh needed.
                    // A snackbar could be triggered here in a real app.
                    console.log('New report submitted successfully.');
                }
            })
        ]
    });
};

;// ./src/pages/my-reports/index.tsx



function HowToUsePage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: "举报列表",
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MyReportsList, {})
        })
    });
}


/***/ }),

/***/ 77535:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/my-reports",
      function () {
        return __webpack_require__(43911);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 93093:
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
var Dialog = __webpack_require__(46822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(16880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(88149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContentText/DialogContentText.js + 1 modules
var DialogContentText = __webpack_require__(32218);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 3 modules
var TextField = __webpack_require__(62492);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(89701);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(20872);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95657);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts + 50 modules
var request = __webpack_require__(77982);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(20928);
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [472,1172,5409,2477,1867,4898,8386,636,6593,8792], () => (__webpack_exec__(77535)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=my-reports-5314a0af4b937908.js.map