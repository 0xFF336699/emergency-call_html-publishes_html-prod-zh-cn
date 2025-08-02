(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[90],{

/***/ 11472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M15 8v8H5V8zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1"
}), 'VideocamOutlined'));


/***/ }),

/***/ 22668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Meetings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6445);
/* harmony import */ var _components_meeting_list_MeetingList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63384);




function Meetings() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        sx: {
            minHeight: '100vh',
            backgroundColor: 'background.default',
            py: 2
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_meeting_list_MeetingList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {})
    });
}


/***/ }),

/***/ 63384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ meeting_list_MeetingList)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(88049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(65371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(9767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(328);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 5 modules
var Alert = __webpack_require__(85629);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/VideocamOutlined.js
var VideocamOutlined = __webpack_require__(11472);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/AccessTime.js
var AccessTime = __webpack_require__(63839);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Refresh.js
var Refresh = __webpack_require__(18531);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts + 50 modules
var request = __webpack_require__(89567);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(2413);
;// ../../libs/app/model/src/remote/event-call/listAvailableMeetings.ts


/**
 * @description 获取用户可参与的音视频会议列表
 * @param opts 包含 params, gateway, handler 的请求选项
 */ async function tmsEventCallListAvailableMeetings(opts) {
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TEventCall, tms/* tms */.X.MEventCallListAvailableMeetings, opts.params, opts.gateway, opts.handler);
    return res;
}

;// ./src/services/meetingService.ts

/**
 * 获取用户可参与的音视频会议列表
 */ async function getAvailableMeetings() {
    try {
        var _response_data, _response_data1;
        const response = await tmsEventCallListAvailableMeetings({
            params: {},
            handler: {
                printLog: true
            }
        });
        console.log('📺 Meeting API response:', response);
        // 检查响应状态
        if (response.err || !response.shellIsOk || !response.dataIsOk) {
            var _response_err;
            const errorMessage = ((_response_err = response.err) === null || _response_err === void 0 ? void 0 : _response_err.message) || 'Failed to fetch available meetings';
            throw new Error(errorMessage);
        }
        if (!((_response_data = response.data) === null || _response_data === void 0 ? void 0 : _response_data.data)) {}
        // 检查业务逻辑状态
        if (!((_response_data1 = response.data) === null || _response_data1 === void 0 ? void 0 : _response_data1.is_ok)) {
            var _response_data2;
            throw new Error(((_response_data2 = response.data) === null || _response_data2 === void 0 ? void 0 : _response_data2.data.msg) || 'Business logic error');
        }
        return response.data.meetings;
    } catch (error) {
        console.error('📺 Error fetching available meetings:', error);
        throw error;
    }
}
/**
 * 根据shortcode构建会议URL
 */ function buildMeetingUrl(shortCode, role) {
    const baseUrl = '/join-call';
    return "".concat(baseUrl, "?code=").concat(shortCode, "&role=").concat(role);
}
/**
 * 格式化会议创建时间
 */ function formatMeetingTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMins / 60);
    if (diffMins < 1) {
        return '刚刚';
    } else if (diffMins < 60) {
        return "".concat(diffMins, "分钟前");
    } else if (diffHours < 24) {
        return "".concat(diffHours, "小时前");
    } else {
        return date.toLocaleDateString('zh-CN', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}
/**
 * 获取会议角色的显示文本
 */ function getRoleDisplayText(role) {
    return role === 'initiator' ? '发起者' : '受邀者';
}
/**
 * 获取会议状态的显示文本和颜色
 */ function getMeetingStatusInfo(status) {
    switch(status.toLowerCase()){
        case 'active':
        case 'in_progress':
            return {
                text: '进行中',
                color: '#4caf50'
            };
        case 'waiting':
            return {
                text: '等待中',
                color: '#ff9800'
            };
        case 'ended':
            return {
                text: '已结束',
                color: '#757575'
            };
        default:
            return {
                text: status,
                color: '#757575'
            };
    }
}

// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
// EXTERNAL MODULE: ../../libs/app/model/src/user/User.ts + 6 modules
var User = __webpack_require__(82080);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 6 modules
var AutoWebViewJs = __webpack_require__(13774);
;// ./src/components/meeting-list/MeetingList.tsx








const MeetingList = (param)=>{
    let { className, onMeetingJoin } = param;
    const [meetings, setMeetings] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    const [token] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    // Check if running in Android WebView environment
    const isAndroidWebView = ()=>{
        try {
            // Check if autoWebViewJs is available
            const hasAutoWebViewJs = !!(AutoWebViewJs/* autoWebViewJs */.yx && typeof AutoWebViewJs/* autoWebViewJs */.yx.callScript === 'function');
            return hasAutoWebViewJs;
        } catch (e) {
            console.warn('🔍 MeetingList: Error checking Android WebView environment:', e);
            return false;
        }
    };
    // 加载会议列表
    const loadMeetings = async ()=>{
        setLoading(true);
        setError(null);
        try {
            const meetingList = await getAvailableMeetings();
            setMeetings(meetingList);
            console.log('📺 Loaded meetings:', meetingList);
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : '加载会议列表失败';
            setError(errorMsg);
            console.error('📺 Failed to load meetings:', err);
        } finally{
            setLoading(false);
        }
    };
    // 初始加载
    (0,react.useEffect)(()=>{
        if (!token) return;
        loadMeetings();
    }, [
        token
    ]);
    // 加入会议
    const handleJoinMeeting = (meeting)=>{
        console.log('📺 Joining meeting:', meeting);
        // Check if this is a security call and we're in Android environment
        const isSecurityCall = meeting.access_mode === 'security' || meeting.short_code.startsWith('security-');
        const inAndroidWebView = isAndroidWebView();
        if (isSecurityCall && inAndroidWebView) {
            // For security calls in Android environment, launch native activity
            try {
                console.log('🔒 Launching Android security call activity');
                const script = "com.fanfanlo.emergencycall.manager.SecurityCallManager.startSecurityVideoCall();";
                AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                return;
            } catch (error) {
                console.error('🔒 Failed to launch Android security call:', error);
            // Fall back to web meeting if Android call fails
            }
        }
        if (onMeetingJoin) {
            onMeetingJoin(meeting);
        } else {
            // 默认行为：跳转到会议页面
            const meetingUrl = buildMeetingUrl(meeting.short_code, meeting.role);
            window.location.href = meetingUrl;
        }
    };
    // 渲染单个会议项
    const renderMeetingItem = (meeting)=>{
        const statusInfo = getMeetingStatusInfo(meeting.status);
        const roleText = getRoleDisplayText(meeting.role);
        const timeText = formatMeetingTime(meeting.created_at);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
            sx: {
                mb: 2,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                    boxShadow: 3,
                    transform: 'translateY(-2px)'
                }
            },
            onClick: ()=>handleJoinMeeting(meeting),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.A, {
                            src: meeting.initiator_info.avatar_url,
                            sx: {
                                width: 48,
                                height: 48
                            },
                            children: meeting.initiator_info.display_name.charAt(0)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    sx: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        mb: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "h6",
                                            component: "div",
                                            sx: {
                                                fontWeight: 600
                                            },
                                            children: meeting.initiator_info.display_name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                            label: roleText,
                                            size: "small",
                                            color: meeting.role === 'initiator' ? 'primary' : 'secondary',
                                            sx: {
                                                fontSize: '0.75rem'
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                            label: statusInfo.text,
                                            size: "small",
                                            sx: {
                                                fontSize: '0.75rem',
                                                backgroundColor: statusInfo.color,
                                                color: 'white'
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                    direction: "row",
                                    spacing: 2,
                                    sx: {
                                        mb: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                            sx: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(VideocamOutlined/* default */.A, {
                                                    sx: {
                                                        fontSize: 16,
                                                        color: 'text.secondary'
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                    variant: "body2",
                                                    color: "text.secondary",
                                                    children: meeting.short_code
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                            sx: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(AccessTime/* default */.A, {
                                                    sx: {
                                                        fontSize: 16,
                                                        color: 'text.secondary'
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                    variant: "body2",
                                                    color: "text.secondary",
                                                    children: timeText
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                meeting.access_mode && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    sx: {
                                        mb: 1
                                    },
                                    children: [
                                        "访问模式: ",
                                        meeting.access_mode
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            variant: "contained",
                            size: "small",
                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(VideocamOutlined/* default */.A, {}),
                            sx: {
                                minWidth: 100
                            },
                            onClick: (e)=>{
                                e.stopPropagation();
                                handleJoinMeeting(meeting);
                            },
                            children: "加入会议"
                        })
                    ]
                })
            })
        }, meeting.event_uuid);
    };
    if (!token) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        className: className,
        sx: {
            width: '100%',
            maxWidth: 800,
            mx: 'auto',
            p: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 3
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "h5",
                        component: "h1",
                        sx: {
                            fontWeight: 600
                        },
                        children: "可参与的音视频会议"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                        onClick: loadMeetings,
                        disabled: loading,
                        sx: {
                            backgroundColor: 'primary.main',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'primary.dark'
                            }
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.A, {})
                    })
                ]
            }),
            error && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                severity: "error",
                sx: {
                    mb: 2
                },
                children: [
                    error,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        size: "small",
                        onClick: loadMeetings,
                        sx: {
                            ml: 1
                        },
                        children: "重试"
                    })
                ]
            }),
            loading && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    display: 'flex',
                    justifyContent: 'center',
                    py: 4
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        sx: {
                            ml: 2
                        },
                        children: "加载会议列表中..."
                    })
                ]
            }),
            !loading && !error && /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: meetings.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        textAlign: 'center',
                        py: 6
                    }
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                            variant: "body2",
                            color: "text.secondary",
                            sx: {
                                mb: 2
                            },
                            children: [
                                "共找到 ",
                                meetings.length,
                                " 个可参与的会议"
                            ]
                        }),
                        meetings.map(renderMeetingItem)
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const meeting_list_MeetingList = (MeetingList);


/***/ }),

/***/ 77770:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/meetings",
      function () {
        return __webpack_require__(22668);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [12,636,593,792], () => (__webpack_exec__(77770)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=meetings-9fab844d58b1571b.js.map