(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[521],{

/***/ 22293:
/***/ (() => {



/***/ }),

/***/ 30799:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(71106).style;


/***/ }),

/***/ 36972:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/logs",
      function () {
        return __webpack_require__(39022);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 39022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ logs)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react@19.1.0/node_modules/styled-jsx/style.js
var style = __webpack_require__(30799);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 6 modules
var AutoWebViewJs = __webpack_require__(13774);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 1 modules
var Log = __webpack_require__(48891);
;// ./src/utils/EmergencyLogManager.ts
// 紧急呼救日志前端接口
// 提供Web端查看和管理紧急呼救日志的功能


const fileLog = new Log/* Log */.tG(false, 'EmergencyLogManager');
// fileLog.pause = true;
// fileLog.childrenPaused = true;
/**
 * 紧急呼救日志管理类
 */ class EmergencyLogManager {
    /**
   * 获取紧急呼救日志列表
   * @param limit 限制数量，默认10
   */ static async getEmergencyLogs() {
        let limit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
        const logger = fileLog.sub(false, 'getEmergencyLogs_fn');
        return new Promise((resolve, reject)=>{
            // logger.pause = true;
            logger.log('getEmergencyLogs called with limit:', limit);
            try {
                // 使用V2系统的静态方法
                const script = "\n        var result = com.fanfanlo.emergencycall.v2.log.EmergencyLogWebInterface.getEmergencyLogs(".concat(limit, ");\n        result;");
                const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                logger.log('getEmergencyLogs result:', javaResultString);
                // 移除processing自动重试机制，直接处理结果
                // if (javaResultString === 'processing') {
                //   // 异步处理中，等待一段时间后重试
                //   setTimeout(() => {
                //     this.getEmergencyLogs(limit).then(resolve).catch(reject);
                //   }, 1000);
                //   return;
                // }
                if (javaResultString === 'processing') {
                    // 不再重试，直接返回空结果
                    resolve([]);
                    return;
                }
                const result = JSON.parse(javaResultString || '{"success": false, "error": "No result"}');
                if (result.success && result.data) {
                    resolve(result.data);
                } else {
                    reject(new Error(result.error || 'Failed to get emergency logs'));
                }
            } catch (e) {
                reject(e);
            }
        });
    }
    /**
   * 获取指定会话的详细日志
   * @param sessionId 会话ID
   */ static async getEmergencyLogDetail(sessionId) {
        return new Promise((resolve, reject)=>{
            if (typeof AutoWebViewJs/* autoWebViewJs */.yx === 'undefined') {
                reject(new Error('autoWebViewJs not available'));
                return;
            }
            try {
                // 使用V2系统的静态方法
                const script = "\n        var result = com.fanfanlo.emergencycall.v2.log.EmergencyLogWebInterface.getEmergencyLogDetail(".concat(sessionId, ");\n        result;");
                const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                if (javaResultString === 'processing') {
                    // 不再重试，直接返回错误
                    reject(new Error('Log detail not available - processing'));
                    return;
                }
                const result = JSON.parse(javaResultString || '{"success": false, "error": "No result"}');
                if (result.success && result.data) {
                    resolve(result.data);
                } else {
                    reject(new Error(result.error || 'Failed to get emergency log detail'));
                }
            } catch (e) {
                reject(e);
            }
        });
    }
    /**
   * 获取日志统计信息
   */ static async getEmergencyLogStats() {
        const logger = fileLog.sub(false, 'getEmergencyLogStats_fn');
        return new Promise((resolve, reject)=>{
            try {
                // 使用V2系统的静态方法
                const script = "\n        var result = com.fanfanlo.emergencycall.v2.log.EmergencyLogWebInterface.getEmergencyLogStats();\n        result;";
                const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                logger.log('getEmergencyLogStats result:', javaResultString);
                if (javaResultString === 'processing') {
                    // 不再重试，返回默认统计数据
                    resolve({
                        totalSessions: 0,
                        successfulCalls: 0,
                        canceledCalls: 0,
                        failedCalls: 0,
                        averageDuration: 0,
                        formattedAverageDuration: '0ms'
                    });
                    return;
                }
                const result = JSON.parse(javaResultString || '{"success": false, "error": "No result"}');
                if (result.success && result.data) {
                    resolve(result.data);
                } else {
                    reject(new Error(result.error || 'Failed to get emergency log stats'));
                }
            } catch (e) {
                reject(e);
            }
        });
    }
    /**
   * 导出日志为文本
   * @param sessionId 可选，指定会话ID，不提供则导出所有
   */ static async exportEmergencyLogs(sessionId) {
        return new Promise((resolve, reject)=>{
            if (typeof AutoWebViewJs/* autoWebViewJs */.yx === 'undefined') {
                reject(new Error('autoWebViewJs not available'));
                return;
            }
            try {
                // 使用V2系统的静态方法
                const script = "\n        var result = com.fanfanlo.emergencycall.v2.log.EmergencyLogWebInterface.exportEmergencyLogs(".concat(sessionId || -1, ");\n        result;");
                const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                if (javaResultString === 'processing') {
                    // 不再重试，直接返回错误
                    reject(new Error('Log export not available - processing'));
                    return;
                }
                const result = JSON.parse(javaResultString || '{"success": false, "error": "No result"}');
                if (result.success && result.data) {
                    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                    const filename = sessionId ? "emergency-log-session-".concat(sessionId, "-").concat(timestamp, ".txt") : "emergency-logs-all-".concat(timestamp, ".txt");
                    resolve({
                        text: result.data,
                        filename
                    });
                } else {
                    reject(new Error(result.error || 'Failed to export emergency logs'));
                }
            } catch (e) {
                reject(e);
            }
        });
    }
    /**
   * 清空所有日志
   */ static async clearEmergencyLogs() {
        return new Promise((resolve, reject)=>{
            if (typeof AutoWebViewJs/* autoWebViewJs */.yx === 'undefined') {
                reject(new Error('autoWebViewJs not available'));
                return;
            }
            try {
                // 使用V2系统的静态方法
                const script = "\n        var result = com.fanfanlo.emergencycall.v2.log.EmergencyLogWebInterface.clearEmergencyLogs();\n        result;";
                const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                const result = JSON.parse(javaResultString || '{"success": false, "error": "No result"}');
                console.log("clearEmergencyLogs result=", result);
                if (result.success) {
                    resolve();
                } else {
                    reject(new Error(result.error || 'Failed to clear emergency logs'));
                }
            } catch (e) {
                reject(e);
            }
        });
    }
    /**
   * 下载日志文件
   * @param text 文本内容
   * @param filename 文件名
   */ static downloadLogFile(text, filename) {
        const blob = new Blob([
            text
        ], {
            type: 'text/plain'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    /**
   * 格式化日志状态显示
   */ static getStatusDisplay(session) {
        if (!session.endReason) {
            return {
                text: '进行中',
                color: '#1976d2'
            };
        }
        switch(session.endReason){
            case 'COMPLETED':
                return {
                    text: '已完成',
                    color: '#388e3c'
                };
            case 'CANCELED':
            case 'USER_STOPPED':
                return {
                    text: '已取消',
                    color: '#f57c00'
                };
            case 'ERROR':
                return {
                    text: '出错',
                    color: '#d32f2f'
                };
            case 'TIMEOUT':
                return {
                    text: '超时',
                    color: '#7b1fa2'
                };
            default:
                return {
                    text: session.endReason,
                    color: '#616161'
                };
        }
    }
    /**
   * 格式化触发源显示
   */ static getTriggerSourceDisplay(source) {
        switch(source){
            case 'MANUAL':
                return '手动触发';
            case 'SENSOR':
                return '传感器检测';
            case 'SHORTCUT':
                return '快捷方式';
            case 'SCHEDULE':
                return '定时触发';
            default:
                return source;
        }
    }
    /**
   * 格式化呼救类型显示
   */ static getCallTypeDisplay(type) {
        switch(type){
            case 'MEDICAL_ASSIST':
                return '医疗呼救';
            case 'SECURITY_ALERT':
                return '安全报警';
            case 'GENERAL_EMERGENCY':
                return '一般紧急';
            default:
                return type;
        }
    }
}


;// ./src/components/emergency-log-viewer/EmergencyLogViewer.tsx




const EmergencyLogViewer = (param)=>{
    let { className } = param;
    const [sessions, setSessions] = (0,react.useState)([]);
    const [selectedSession, setSelectedSession] = (0,react.useState)(null);
    const [statistics, setStatistics] = (0,react.useState)(null);
    const [loading, setLoading] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    const [searchTerm, setSearchTerm] = (0,react.useState)('');
    const [filterStatus, setFilterStatus] = (0,react.useState)('all');
    (0,react.useEffect)(()=>{
        // 初始加载日志
        loadLogs();
        loadStatistics();
    // 移除自动轮询，改为手动刷新
    // const interval = setInterval(() => {
    //   loadLogs();
    //   loadStatistics();
    // }, 5000); // 每5秒刷新一次
    // return () => clearInterval(interval);
    }, []);
    const loadLogs = async ()=>{
        setLoading(true);
        setError(null);
        try {
            const logs = await EmergencyLogManager.getEmergencyLogs(20);
            setSessions(logs);
        } catch (err) {
            setError(err instanceof Error ? err.message : '加载日志失败');
        } finally{
            setLoading(false);
        }
    };
    const loadStatistics = async ()=>{
        try {
            const stats = await EmergencyLogManager.getEmergencyLogStats();
            setStatistics(stats);
        } catch (err) {
            console.error('Failed to load statistics:', err);
        }
    };
    const refreshData = async ()=>{
        setLoading(true);
        setError(null);
        try {
            await Promise.all([
                loadLogs(),
                loadStatistics()
            ]);
        } catch (err) {
            setError(err instanceof Error ? err.message : '刷新数据失败');
        } finally{
            setLoading(false);
        }
    };
    const loadSessionDetail = async (sessionId)=>{
        setLoading(true);
        try {
            const detail = await EmergencyLogManager.getEmergencyLogDetail(sessionId);
            setSelectedSession(detail);
        } catch (err) {
            setError(err instanceof Error ? err.message : '加载详细日志失败');
        } finally{
            setLoading(false);
        }
    };
    const exportLogs = async (sessionId)=>{
        try {
            const { text, filename } = await EmergencyLogManager.exportEmergencyLogs(sessionId);
            EmergencyLogManager.downloadLogFile(text, filename);
        } catch (err) {
            setError(err instanceof Error ? err.message : '导出日志失败');
        }
    };
    const clearLogs = async ()=>{
        if (!confirm('确定要清空所有日志吗？此操作不可恢复。')) return;
        try {
            await EmergencyLogManager.clearEmergencyLogs();
            setSessions([]);
            setSelectedSession(null);
            setStatistics(null);
            alert('日志已清空');
        } catch (err) {
            setError(err instanceof Error ? err.message : '清空日志失败');
        }
    };
    const filteredSessions = sessions.filter((session)=>{
        const matchesSearch = searchTerm === '' || session.sessionId.toString().includes(searchTerm) || EmergencyLogManager.getTriggerSourceDisplay(session.triggerSource).includes(searchTerm) || EmergencyLogManager.getCallTypeDisplay(session.callType).includes(searchTerm);
        const matchesFilter = filterStatus === 'all' || filterStatus === 'completed' && session.endReason === 'COMPLETED' || filterStatus === 'canceled' && (session.endReason === 'CANCELED' || session.endReason === 'USER_STOPPED') || filterStatus === 'error' && session.endReason === 'ERROR' || filterStatus === 'active' && !session.endReason;
        return matchesSearch && matchesFilter;
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "jsx-cb88500555d03363" + " " + "emergency-log-viewer ".concat(className || ''),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "jsx-cb88500555d03363" + " " + "log-header",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                        className: "jsx-cb88500555d03363",
                        children: "紧急呼救日志"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "jsx-cb88500555d03363" + " " + "log-actions",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                onClick: refreshData,
                                disabled: loading,
                                className: "jsx-cb88500555d03363",
                                children: loading ? '刷新中...' : '刷新日志'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                onClick: ()=>exportLogs(),
                                className: "jsx-cb88500555d03363",
                                children: "导出所有日志"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                onClick: clearLogs,
                                className: "jsx-cb88500555d03363" + " " + "danger",
                                children: "清空日志"
                            })
                        ]
                    })
                ]
            }),
            error && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "jsx-cb88500555d03363" + " " + "log-error",
                children: [
                    "错误: ",
                    error,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        onClick: ()=>setError(null),
                        className: "jsx-cb88500555d03363",
                        children: "\xd7"
                    })
                ]
            }),
            statistics && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "jsx-cb88500555d03363" + " " + "log-statistics",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "jsx-cb88500555d03363" + " " + "stat-item",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "jsx-cb88500555d03363" + " " + "stat-label",
                                children: "总会话数:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "jsx-cb88500555d03363" + " " + "stat-value",
                                children: statistics.totalSessions
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "jsx-cb88500555d03363" + " " + "stat-item",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "jsx-cb88500555d03363" + " " + "stat-label",
                                children: "成功:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "jsx-cb88500555d03363" + " " + "stat-value success",
                                children: statistics.successfulCalls
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "jsx-cb88500555d03363" + " " + "stat-item",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "jsx-cb88500555d03363" + " " + "stat-label",
                                children: "取消:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "jsx-cb88500555d03363" + " " + "stat-value canceled",
                                children: statistics.canceledCalls
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "jsx-cb88500555d03363" + " " + "stat-item",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "jsx-cb88500555d03363" + " " + "stat-label",
                                children: "失败:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "jsx-cb88500555d03363" + " " + "stat-value error",
                                children: statistics.failedCalls
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "jsx-cb88500555d03363" + " " + "stat-item",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "jsx-cb88500555d03363" + " " + "stat-label",
                                children: "平均时长:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "jsx-cb88500555d03363" + " " + "stat-value",
                                children: statistics.formattedAverageDuration
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "jsx-cb88500555d03363" + " " + "log-filters",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        type: "text",
                        placeholder: "搜索会话ID、触发源或呼救类型...",
                        value: searchTerm,
                        onChange: (e)=>setSearchTerm(e.target.value),
                        className: "jsx-cb88500555d03363" + " " + "search-input"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                        value: filterStatus,
                        onChange: (e)=>setFilterStatus(e.target.value),
                        className: "jsx-cb88500555d03363" + " " + "filter-select",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                value: "all",
                                className: "jsx-cb88500555d03363",
                                children: "全部状态"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                value: "active",
                                className: "jsx-cb88500555d03363",
                                children: "进行中"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                value: "completed",
                                className: "jsx-cb88500555d03363",
                                children: "已完成"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                value: "canceled",
                                className: "jsx-cb88500555d03363",
                                children: "已取消"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                value: "error",
                                className: "jsx-cb88500555d03363",
                                children: "出错"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "jsx-cb88500555d03363" + " " + "log-content",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "jsx-cb88500555d03363" + " " + "sessions-list",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                className: "jsx-cb88500555d03363",
                                children: [
                                    "日志会话列表 (",
                                    filteredSessions.length,
                                    ")"
                                ]
                            }),
                            filteredSessions.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "jsx-cb88500555d03363" + " " + "no-data",
                                children: "暂无日志数据"
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "jsx-cb88500555d03363" + " " + "sessions-grid",
                                children: filteredSessions.map((session)=>{
                                    const status = EmergencyLogManager.getStatusDisplay(session);
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        onClick: ()=>loadSessionDetail(session.sessionId),
                                        className: "jsx-cb88500555d03363" + " " + "session-card ".concat((selectedSession === null || selectedSession === void 0 ? void 0 : selectedSession.sessionId) === session.sessionId ? 'selected' : ''),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "jsx-cb88500555d03363" + " " + "session-header",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "jsx-cb88500555d03363" + " " + "session-id",
                                                        children: [
                                                            "会话 #",
                                                            session.sessionId
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        style: {
                                                            color: status.color
                                                        },
                                                        className: "jsx-cb88500555d03363" + " " + "session-status",
                                                        children: status.text
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "jsx-cb88500555d03363" + " " + "session-info",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "jsx-cb88500555d03363",
                                                        children: [
                                                            "触发源: ",
                                                            EmergencyLogManager.getTriggerSourceDisplay(session.triggerSource)
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "jsx-cb88500555d03363",
                                                        children: [
                                                            "呼救类型: ",
                                                            EmergencyLogManager.getCallTypeDisplay(session.callType)
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "jsx-cb88500555d03363",
                                                        children: [
                                                            "开始时间: ",
                                                            session.formattedStartTime
                                                        ]
                                                    }),
                                                    session.duration && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "jsx-cb88500555d03363",
                                                        children: [
                                                            "持续时长: ",
                                                            Math.round(session.duration / 1000),
                                                            "秒"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "jsx-cb88500555d03363",
                                                        children: [
                                                            "日志条数: ",
                                                            session.logCount
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "jsx-cb88500555d03363" + " " + "session-actions",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        exportLogs(session.sessionId);
                                                    },
                                                    className: "jsx-cb88500555d03363" + " " + "export-btn",
                                                    children: "导出"
                                                })
                                            })
                                        ]
                                    }, session.sessionId);
                                })
                            })
                        ]
                    }),
                    selectedSession && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "jsx-cb88500555d03363" + " " + "session-detail",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "jsx-cb88500555d03363" + " " + "detail-header",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                        className: "jsx-cb88500555d03363",
                                        children: [
                                            "会话 #",
                                            selectedSession.sessionId,
                                            " 详细日志"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        onClick: ()=>setSelectedSession(null),
                                        className: "jsx-cb88500555d03363" + " " + "close-btn",
                                        children: "\xd7"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "jsx-cb88500555d03363" + " " + "detail-info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "jsx-cb88500555d03363",
                                        children: [
                                            "触发源: ",
                                            EmergencyLogManager.getTriggerSourceDisplay(selectedSession.triggerSource)
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "jsx-cb88500555d03363",
                                        children: [
                                            "呼救类型: ",
                                            EmergencyLogManager.getCallTypeDisplay(selectedSession.callType)
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "jsx-cb88500555d03363",
                                        children: [
                                            "开始时间: ",
                                            selectedSession.formattedStartTime
                                        ]
                                    }),
                                    selectedSession.endTime && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "jsx-cb88500555d03363",
                                        children: [
                                            "结束时间: ",
                                            selectedSession.formattedEndTime
                                        ]
                                    }),
                                    selectedSession.duration && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "jsx-cb88500555d03363",
                                        children: [
                                            "持续时长: ",
                                            Math.round(selectedSession.duration / 1000),
                                            "秒"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "jsx-cb88500555d03363" + " " + "logs-container",
                                children: selectedSession.logs.map((log, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "jsx-cb88500555d03363" + " " + "log-entry",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "jsx-cb88500555d03363" + " " + "log-time",
                                                children: log.formattedTime
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "jsx-cb88500555d03363" + " " + "log-content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "jsx-cb88500555d03363" + " " + "log-step",
                                                        children: [
                                                            "[",
                                                            log.step,
                                                            "]"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "jsx-cb88500555d03363" + " " + "log-message",
                                                        children: log.message
                                                    }),
                                                    Object.keys(log.data).length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "jsx-cb88500555d03363" + " " + "log-data",
                                                        children: Object.entries(log.data).map((param)=>{
                                                            let [key, value] = param;
                                                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                className: "jsx-cb88500555d03363" + " " + "data-item",
                                                                children: [
                                                                    key,
                                                                    ": ",
                                                                    value
                                                                ]
                                                            }, key);
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "jsx-cb88500555d03363" + " " + "log-thread",
                                                children: log.threadName
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)((style_default()), {
                id: "cb88500555d03363",
                children: ".emergency-log-viewer.jsx-cb88500555d03363{padding:20px;max-width:1200px;margin:0 auto}.log-header.jsx-cb88500555d03363{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:20px;padding-bottom:10px;border-bottom:1px solid#eee}.log-header.jsx-cb88500555d03363 h2.jsx-cb88500555d03363{margin:0;color:#333}.log-actions.jsx-cb88500555d03363{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px}.log-actions.jsx-cb88500555d03363 button.jsx-cb88500555d03363{padding:8px 16px;border:1px solid#ddd;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:white;cursor:pointer;-webkit-transition:background-color.2s;-moz-transition:background-color.2s;-o-transition:background-color.2s;transition:background-color.2s}.log-actions.jsx-cb88500555d03363 button.jsx-cb88500555d03363:hover{background-color:#f5f5f5}.log-actions.jsx-cb88500555d03363 button.danger.jsx-cb88500555d03363{color:#d32f2f;border-color:#d32f2f}.log-actions.jsx-cb88500555d03363 button.danger.jsx-cb88500555d03363:hover{background-color:#ffebee}.log-actions.jsx-cb88500555d03363 button.jsx-cb88500555d03363:disabled{opacity:.6;cursor:not-allowed}.log-error.jsx-cb88500555d03363{background-color:#ffebee;color:#d32f2f;padding:10px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;margin-bottom:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.log-error.jsx-cb88500555d03363 button.jsx-cb88500555d03363{background:none;border:none;color:#d32f2f;font-size:18px;cursor:pointer;padding:0;width:20px;height:20px}.log-statistics.jsx-cb88500555d03363{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:20px;margin-bottom:20px;padding:15px;background-color:#f9f9f9;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.stat-item.jsx-cb88500555d03363{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:5px}.stat-label.jsx-cb88500555d03363{font-size:12px;color:#666}.stat-value.jsx-cb88500555d03363{font-size:18px;font-weight:bold;color:#333}.stat-value.success.jsx-cb88500555d03363{color:#388e3c}.stat-value.canceled.jsx-cb88500555d03363{color:#f57c00}.stat-value.error.jsx-cb88500555d03363{color:#d32f2f}.log-filters.jsx-cb88500555d03363{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:15px;margin-bottom:20px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.search-input.jsx-cb88500555d03363,.filter-select.jsx-cb88500555d03363{padding:8px 12px;border:1px solid#ddd;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;font-size:14px}.search-input.jsx-cb88500555d03363{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;max-width:300px}.log-content.jsx-cb88500555d03363{display:grid;grid-template-columns:1fr 1fr;gap:20px;min-height:500px}.sessions-list.jsx-cb88500555d03363 h3.jsx-cb88500555d03363{margin:0 0 15px 0;color:#333}.no-data.jsx-cb88500555d03363{text-align:center;color:#666;padding:40px;background-color:#f9f9f9;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.sessions-grid.jsx-cb88500555d03363{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:10px;max-height:600px;overflow-y:auto}.session-card.jsx-cb88500555d03363{border:1px solid#ddd;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:15px;cursor:pointer;-webkit-transition:all.2s;-moz-transition:all.2s;-o-transition:all.2s;transition:all.2s;background:white}.session-card.jsx-cb88500555d03363:hover{border-color:#1976d2;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.1);-moz-box-shadow:0 2px 8px rgba(0,0,0,.1);box-shadow:0 2px 8px rgba(0,0,0,.1)}.session-card.selected.jsx-cb88500555d03363{border-color:#1976d2;background-color:#e3f2fd}.session-header.jsx-cb88500555d03363{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px}.session-id.jsx-cb88500555d03363{font-weight:bold;color:#333}.session-status.jsx-cb88500555d03363{font-size:12px;font-weight:bold;padding:2px 8px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background-color:rgba(255,255,255,.8)}.session-info.jsx-cb88500555d03363{font-size:13px;color:#666;line-height:1.4}.session-info.jsx-cb88500555d03363>div.jsx-cb88500555d03363{margin-bottom:2px}.session-actions.jsx-cb88500555d03363{margin-top:10px;text-align:right}.export-btn.jsx-cb88500555d03363{padding:4px 12px;font-size:12px;border:1px solid#ddd;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:white;cursor:pointer;-webkit-transition:background-color.2s;-moz-transition:background-color.2s;-o-transition:background-color.2s;transition:background-color.2s}.export-btn.jsx-cb88500555d03363:hover{background-color:#f5f5f5}.session-detail.jsx-cb88500555d03363{border:1px solid#ddd;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:white;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:600px}.detail-header.jsx-cb88500555d03363{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:15px;border-bottom:1px solid#eee;background-color:#f9f9f9}.detail-header.jsx-cb88500555d03363 h3.jsx-cb88500555d03363{margin:0;color:#333}.close-btn.jsx-cb88500555d03363{background:none;border:none;font-size:24px;cursor:pointer;color:#666;padding:0;width:30px;height:30px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.close-btn.jsx-cb88500555d03363:hover{color:#333}.detail-info.jsx-cb88500555d03363{padding:15px;background-color:#f9f9f9;font-size:13px;color:#666;line-height:1.4}.detail-info.jsx-cb88500555d03363>div.jsx-cb88500555d03363{margin-bottom:5px}.logs-container.jsx-cb88500555d03363{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;overflow-y:auto;padding:15px}.log-entry.jsx-cb88500555d03363{display:grid;grid-template-columns:120px 1fr 80px;gap:10px;padding:8px 0;border-bottom:1px solid#f0f0f0;font-size:13px}.log-entry.jsx-cb88500555d03363:last-child{border-bottom:none}.log-time.jsx-cb88500555d03363{color:#666;font-family:monospace;font-size:11px}.log-content.jsx-cb88500555d03363{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:3px}.log-step.jsx-cb88500555d03363{color:#1976d2;font-weight:bold;font-size:11px}.log-message.jsx-cb88500555d03363{color:#333;line-height:1.3}.log-data.jsx-cb88500555d03363{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px;margin-top:3px}.data-item.jsx-cb88500555d03363{background-color:#e8f4f8;color:#00695c;padding:1px 6px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;font-size:11px}.log-thread.jsx-cb88500555d03363{color:#999;font-size:10px;font-family:monospace;text-align:right}@media(max-width:768px){.log-content.jsx-cb88500555d03363{grid-template-columns:1fr}.log-statistics.jsx-cb88500555d03363{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:10px}.log-filters.jsx-cb88500555d03363{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.search-input.jsx-cb88500555d03363{max-width:none}}"
            })
        ]
    });
};
/* harmony default export */ const emergency_log_viewer_EmergencyLogViewer = (EmergencyLogViewer);

;// ./src/components/emergency-log-viewer/index.ts


;// ./src/pages/logs/index.tsx



const LogsPage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "logs-page",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(emergency_log_viewer_EmergencyLogViewer, {})
    });
};
/* harmony default export */ const logs = (LogsPage);


/***/ }),

/***/ 71106:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/* provided dependency */ var process = __webpack_require__(23727);

__webpack_require__(22293);
var React = __webpack_require__(94285);
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof process !== "undefined" && process.env && "production" === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node =  true && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = node ? node.getAttribute("content") : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if ( true && this._optimizeForSpeed) {
            this._tags[0] = this.makeStyleTag(this._name);
            this._optimizeForSpeed = "insertRule" in this.getSheet();
            if (!this._optimizeForSpeed) {
                if (!isProd) {
                    console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");
                }
                this.flush();
                this._injected = true;
            }
            return;
        }
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if (false) {}
        if (this._optimizeForSpeed) {
            var sheet = this.getSheet();
            if (typeof index !== "number") {
                index = sheet.cssRules.length;
            }
            // this weirdness for perf, and chrome's weird bug
            // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if (!isProd) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                return -1;
            }
        } else {
            var insertionPoint = this._tags[index];
            this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
        }
        return this._rulesCount++;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || "object" === "undefined") {
            var sheet =  true ? this.getSheet() : 0;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if (!isProd) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "old rule at index `" + index + "` not found");
            tag.textContent = rule;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if (false) {}
        if (this._optimizeForSpeed) {
            this.replaceRule(index, "");
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "rule at index `" + index + "` not found");
            tag.parentNode.removeChild(tag);
            this._tags[index] = null;
        }
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if (true) {
            this._tags.forEach(function(tag) {
                return tag && tag.parentNode.removeChild(tag);
            });
            this._tags = [];
        } else {}
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if (false) {}
        return this._tags.reduce(function(rules, tag) {
            if (tag) {
                rules = rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules, function(rule) {
                    return rule.cssText === _this._deletedRulePlaceholder ? null : rule;
                }));
            } else {
                rules.push(null);
            }
            return rules;
        }, []);
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if (false) {}
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if ( true && !this._fromServer) {
            this._fromServer = this.selectFromServer();
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(acc, tagName) {
                acc[tagName] = 0;
                return acc;
            }, {});
        }
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState(function() {
        return rootRegistry || configuredRegistry || createStyleRegistry();
    }), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry =  true ? createStyleRegistry() : 0;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if (false) {}
    useInsertionEffect(function() {
        registry.add(props);
        return function() {
            registry.remove(props);
        };
    // props.children can be string[], will be striped since id is identical
    }, [
        props.id,
        String(props.dynamic)
    ]);
    return null;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
__webpack_unused_export__ = StyleRegistry;
__webpack_unused_export__ = createStyleRegistry;
exports.style = JSXStyle;
__webpack_unused_export__ = useStyleRegistry;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [636,593,792], () => (__webpack_exec__(36972)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=logs-d7b277b897eb5a10.js.map