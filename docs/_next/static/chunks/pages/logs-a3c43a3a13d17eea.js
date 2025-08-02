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
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 20 modules
var Log = __webpack_require__(41031);
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
   * Check if running in Android WebView environment
   */ static isAndroidWebView() {
        try {
            // Check if autoWebViewJs is available
            const hasAutoWebViewJs = !!(AutoWebViewJs/* autoWebViewJs */.yx && typeof AutoWebViewJs/* autoWebViewJs */.yx.callScript === 'function');
            // Check for Android WebView user agent
            const isAndroidWebViewUA = /Android.*wv\)|;.*[wW]v/.test(navigator.userAgent);
            // Check for other Android interface indicators
            const hasAndroidInterface = !!window.android || !!window.Android;
            console.log('🔍 EmergencyLogManager: WebView detection:', {
                hasAutoWebViewJs,
                isAndroidWebViewUA,
                hasAndroidInterface,
                userAgent: navigator.userAgent
            });
            return hasAutoWebViewJs;
        } catch (e) {
            console.warn('🔍 EmergencyLogManager: Error checking WebView environment:', e);
            return false;
        }
    }
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
                // Check if running in Android WebView
                if (!this.isAndroidWebView()) {
                    console.warn('📊 EmergencyLogManager: Not running in Android WebView, returning empty data');
                    resolve([]);
                    return;
                }
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
    /**
   * 创建测试日志（用于调试）
   * Create test logs for debugging purposes
   */ static async createTestLogs() {
        return new Promise((resolve, reject)=>{
            try {
                console.log('🧪 EmergencyLogManager: createTestLogs called');
                // Check if running in Android WebView
                if (!this.isAndroidWebView()) {
                    console.warn('🧪 EmergencyLogManager: Not running in Android WebView, cannot create test logs');
                    resolve({
                        success: false,
                        error: 'Not running in Android WebView environment'
                    });
                    return;
                }
                // Use the same autoWebViewJs pattern as other methods
                const script = "\n        var result = com.fanfanlo.emergencycall.v2.log.EmergencyLogWebInterface.createTestLogs();\n        result;";
                const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                console.log('🧪 EmergencyLogManager: createTestLogs result:', javaResultString);
                if (javaResultString === 'processing') {
                    // Don't retry, return success immediately
                    resolve({
                        success: true,
                        message: 'Test logs creation initiated'
                    });
                    return;
                }
                const result = JSON.parse(javaResultString);
                if (result.success) {
                    resolve(result);
                } else {
                    reject(new Error(result.error || 'Failed to create test logs'));
                }
            } catch (error) {
                console.error('🧪 EmergencyLogManager: createTestLogs error:', error);
                reject(error);
            }
        });
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
            console.log('📊 EmergencyLogViewer: Starting to load logs...');
            const logs = await EmergencyLogManager.getEmergencyLogs(20);
            console.log('📊 EmergencyLogViewer: Loaded logs:', logs);
            console.log('📊 EmergencyLogViewer: Logs count:', (logs === null || logs === void 0 ? void 0 : logs.length) || 0);
            setSessions(logs);
        } catch (err) {
            console.error('📊 EmergencyLogViewer: Failed to load logs:', err);
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
    const createTestLogs = async ()=>{
        if (!confirm('确定要创建测试日志吗？这将用于调试目的。')) return;
        try {
            setLoading(true);
            const result = await EmergencyLogManager.createTestLogs();
            if (result.success) {
                alert('测试日志创建成功！请点击刷新查看。');
                // 延迟刷新，让测试日志有时间保存
                setTimeout(()=>{
                    refreshData();
                }, 1000);
            } else {
                setError(result.error || '创建测试日志失败');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : '创建测试日志失败');
        } finally{
            setLoading(false);
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
                                onClick: createTestLogs,
                                disabled: loading,
                                className: "jsx-cb88500555d03363",
                                children: "创建测试日志"
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


// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 4 modules
var AppShell = __webpack_require__(43173);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(97972);
;// ./src/pages/logs/index.tsx




const LogsPage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: "日志",
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(emergency_log_viewer_EmergencyLogViewer, {})
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "logs-page",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(emergency_log_viewer_EmergencyLogViewer, {})
    });
};
/* harmony default export */ const logs = (LogsPage);


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
/******/ __webpack_require__.O(0, [415,917,636,593,792], () => (__webpack_exec__(36972)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=logs-a3c43a3a13d17eea.js.map