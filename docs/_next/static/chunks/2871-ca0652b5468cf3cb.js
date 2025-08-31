"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2871],{

/***/ 82871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tracking/print.ts
var print = __webpack_require__(20726);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 4 modules
var AppShell = __webpack_require__(43173);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/tabbar/Tabbar.tsx
var Tabbar = __webpack_require__(93589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box_Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2_Grid2 = __webpack_require__(95771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button_Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog_Dialog = __webpack_require__(49280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle_DialogTitle = __webpack_require__(3711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent_DialogContent = __webpack_require__(18244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 3 modules
var TextField_TextField = __webpack_require__(67571);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Autocomplete/Autocomplete.js + 5 modules
var Autocomplete = __webpack_require__(65555);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress_CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions_DialogActions = __webpack_require__(69468);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/app/model/src/user/User.ts + 7 modules
var User = __webpack_require__(74740);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/remote/request.ts + 50 modules
var request = __webpack_require__(89567);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tms.ts
var tms = __webpack_require__(2413);
;// ../../libs/app/model/src/remote/emc/inviteContacts.ts


/**
 * @description 调用邀请联系人接口的函数
 * @param opts 包含 params, gateway, handler 的请求选项
 */ async function tmsEmcInviteContacts(opts) {
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TEmc, tms/* tms */.X.MEmcInviteContacts, opts.params, opts.gateway, opts.handler);
    return res;
}

;// ../../libs/app/model/src/remote/emc/tmsEmcGetContactTypes.ts


/**
 * @description 调用获取联系人类型接口的函数
 * @param opts 包含 params, gateway, handler 的请求选项
 */ async function tmsEmcGetContactTypes(opts) {
    const res = await (0,request/* request */.Em)(tms/* tms */.X.TEmc, tms/* tms */.X.MEmcGetContactTypes, opts.params, opts.gateway, opts.handler);
    return res;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(22243);
// EXTERNAL MODULE: ../../libs/im/matrix/src/index.ts + 370 modules
var src = __webpack_require__(78093);
// EXTERNAL MODULE: ./src/services/authService.ts
var services_authService = __webpack_require__(92064);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 20 modules
var Log = __webpack_require__(41031);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var watcher_useProxyWatch = __webpack_require__(45007);
;// ./src/components/dialogs/InviteContactDialog.tsx








const fileLogger = new Log/* Log */.tG(false, 'InviteContactDialog.tsx');
const isValidIdentity = (text)=>/(^\d{11}$)|(^[a-zA-Z0-9]{32}$)/.test(text);
const is11DigitNumber = (text)=>/^\d{11}$/.test(text);
function InviteContactDialog_InviteContactDialog(param) {
    let { open, onClose, onInviteSent } = param;
    var _matrixUser_userData_userInfo_loginResponse;
    const uiLogger = fileLogger.sub(false, 'InviteContactDialog_ui');
    const [contacts, setContacts] = (0,react.useState)('');
    const [remark, setRemark] = (0,react.useState)('');
    const [callType, setCallType] = (0,react.useState)(null);
    const [availableCallTypes, setAvailableCallTypes] = (0,react.useState)([]);
    // Debug effect to log availableCallTypes changes
    (0,react.useEffect)(()=>{
        console.log('availableCallTypes updated:', availableCallTypes);
    }, [
        availableCallTypes
    ]);
    // Debug effect to log callType changes
    (0,react.useEffect)(()=>{
        console.log('callType updated:', callType);
    }, [
        callType
    ]);
    const [message, setMessage] = (0,react.useState)('');
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const [isTypesLoading, setIsTypesLoading] = (0,react.useState)(false);
    const [pendingParams, setPendingParams] = (0,react.useState)(null);
    const executionLock = (0,react.useRef)(false);
    const [accessToken] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(src/* matrixUser */.xb.userData.userInfo, 'loginResponse.access_token', (_matrixUser_userData_userInfo_loginResponse = src/* matrixUser */.xb.userData.userInfo.loginResponse) === null || _matrixUser_userData_userInfo_loginResponse === void 0 ? void 0 : _matrixUser_userData_userInfo_loginResponse.access_token);
    const [isUserLoggedIn] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(User/* user */.k.data.sessionData, 'global_user_info', !!User/* user */.k.data.sessionData.global_user_info);
    const [userToken] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    (0,react.useEffect)(()=>{
        if (accessToken && pendingParams && !executionLock.current) {
            executionLock.current = true;
            const finalParams = {
                ...pendingParams,
                matrix_access_token: accessToken,
                contacts: (pendingParams === null || pendingParams === void 0 ? void 0 : pendingParams.contacts) || [],
                type: (pendingParams === null || pendingParams === void 0 ? void 0 : pendingParams.type) || ''
            };
            executeApiCall(finalParams);
        }
    }, [
        accessToken,
        pendingParams
    ]);
    const executeApiCall = (0,react.useCallback)(async (params)=>{
        if (!params.contacts || !params.type) {
            dist/* default */.Ay.error('请填写联系人和呼叫类型');
            return;
        }
        setIsLoading(true);
        try {
            var _responseData_data;
            const res = await tmsEmcInviteContacts({
                params,
                handler: {
                    printLog: true
                }
            });
            console.log('Invite response:', res);
            // 处理响应结果
            if (res.err || !res.shellIsOk || !res.dataIsOk) {
                var _res_err;
                const errorMessage = ((_res_err = res.err) === null || _res_err === void 0 ? void 0 : _res_err.message) || '邀请失败，请稍后重试';
                dist/* default */.Ay.error(errorMessage);
                return;
            }
            // 处理嵌套的响应结构
            const responseData = res.data;
            if (!(responseData === null || responseData === void 0 ? void 0 : (_responseData_data = responseData.data) === null || _responseData_data === void 0 ? void 0 : _responseData_data.results)) {
                var _responseData_data1, _res_data;
                const errorMessage = (responseData === null || responseData === void 0 ? void 0 : (_responseData_data1 = responseData.data) === null || _responseData_data1 === void 0 ? void 0 : _responseData_data1.msg) || ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.msg) || '未返回有效的结果';
                dist/* default */.Ay.error(errorMessage);
                return;
            }
            const results = responseData.data.results;
            // 统计成功和失败的数量
            const successResults = results.filter((r)=>r.result_code === 'SUCCESS');
            const infoResults = results.filter((r)=>r.result_code === 'INVITE_ALREADY_SENT' || r.result_code === 'ALREADY_A_CONTACT');
            const errorResults = results.filter((r)=>r.result_code !== 'SUCCESS' && r.result_code !== 'INVITE_ALREADY_SENT' && r.result_code !== 'ALREADY_A_CONTACT');
            if (successResults.length > 0) {
                dist/* default */.Ay.success("成功邀请 ".concat(successResults.length, " 个联系人"));
                onInviteSent === null || onInviteSent === void 0 ? void 0 : onInviteSent();
            }
            if (infoResults.length > 0) {
                const infoMessages = infoResults.map((r)=>r.msg).filter(Boolean).join('\n');
                if (infoMessages) {
                    // 使用默认的 toast 替代 toast.info
                    (0,dist/* default */.Ay)(infoMessages);
                }
            }
            if (errorResults.length > 0) {
                const errorMessages = errorResults.map((r)=>r.msg).filter(Boolean).join('\n');
                if (errorMessages) {
                    dist/* default */.Ay.error("部分邀请失败：\n".concat(errorMessages));
                }
            }
        } catch (error) {
            console.error('Error in executeApiCall:', error);
            dist/* default */.Ay.error('处理请求时发生错误，请稍后重试');
        } finally{
            setIsLoading(false);
        }
    }, [
        onInviteSent
    ]);
    const fetchCallTypes = (0,react.useCallback)(async ()=>{
        const logger = uiLogger.sub(false, 'fetchCallTypes_fn');
        logger.log('Fetching call types...');
        setIsTypesLoading(true);
        const res = await tmsEmcGetContactTypes({
            params: {},
            handler: {
                printLog: true
            }
        });
        logger.log('Call types response:', JSON.stringify(res));
        setIsTypesLoading(false);
        if (res.err || !res.shellIsOk || !res.dataIsOk) {
            var _res_err;
            const errorMessage = ((_res_err = res.err) === null || _res_err === void 0 ? void 0 : _res_err.message) || '加载呼叫类型失败。';
            dist/* default */.Ay.error(errorMessage);
            setAvailableCallTypes([]);
            logger.error('Failed to load call types:', errorMessage);
        } else {
            var _res_data_data, _res_data;
            // 从 res.data.data.types 获取数据
            const types = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_data = _res_data.data) === null || _res_data_data === void 0 ? void 0 : _res_data_data.types) || [];
            logger.log('Setting availableCallTypes:', JSON.stringify(types));
            // 转换为 IEmcContactTypeItem[] 格式
            const formattedTypes = types.map((type)=>({
                    id: type.uuid,
                    name: type.name,
                    is_system: type.is_system
                }));
            setAvailableCallTypes(formattedTypes);
            // 只在 callType 为空时设置默认值
            if (formattedTypes.length > 0 && !callType) {
                const defaultType = formattedTypes[0].name;
                logger.log('Setting default call type:', defaultType);
                setCallType(defaultType);
            } else if (formattedTypes.length === 0) {
                logger.warn('No call types available');
            }
        }
    }, []); // 移除了 callType 依赖
    (0,react.useEffect)(()=>{
        if (open) {
            fetchCallTypes();
        } else {
            setContacts('');
            setRemark('');
            setCallType(null);
            setAvailableCallTypes([]);
            setMessage('');
            setIsLoading(false);
            setPendingParams(null);
            executionLock.current = false;
        }
    }, [
        open,
        fetchCallTypes
    ]);
    const handleSendInvitation = (0,react.useCallback)(async ()=>{
        var _matrixUser_userData_userInfo_loginResponse;
        const contactInputs = contacts.split('\n').map((c)=>c.trim()).filter((c)=>c);
        if (contactInputs.length === 0) {
            dist/* default */.Ay.error('请输入至少一个联系人。');
            return;
        }
        const contactIdentities = [];
        for (const input of contactInputs){
            if (isValidIdentity(input)) {
                const type = is11DigitNumber(input) ? 'mobile' : 'email';
                contactIdentities.push({
                    identity: input,
                    identityType: type
                });
            } else {
                dist/* default */.Ay.error("联系人格式无效: ".concat(input, "。必须是11位手机号或32位字符串。"));
                return;
            }
        }
        if (!callType || callType.trim() === '') {
            dist/* default */.Ay.error('请选择或输入一个呼叫类型。');
            return;
        }
        setIsLoading(true);
        if (!userToken) {
            const appLoggedIn = await services_authService/* authService */.y.showLoginDialog();
            if (!appLoggedIn) {
                setIsLoading(false);
                return;
            }
        }
        const currentAccessToken = (_matrixUser_userData_userInfo_loginResponse = src/* matrixUser */.xb.userData.userInfo.loginResponse) === null || _matrixUser_userData_userInfo_loginResponse === void 0 ? void 0 : _matrixUser_userData_userInfo_loginResponse.access_token;
        const params = {
            contacts: contactIdentities,
            type: callType.trim(),
            remark: remark.trim(),
            message: message.trim()
        };
        if (currentAccessToken) {
            executionLock.current = true;
            const apiParams = {
                ...params,
                matrix_access_token: currentAccessToken,
                contacts: params.contacts || [],
                type: params.type || ''
            };
            executeApiCall(apiParams);
        } else {
            (0,dist/* default */.Ay)('等待登录...');
            setPendingParams(params);
        }
    }, [
        contacts,
        remark,
        callType,
        message,
        executeApiCall,
        isUserLoggedIn
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog_Dialog/* default */.A, {
        open: open,
        onClose: ()=>onClose(),
        maxWidth: "sm",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle_DialogTitle/* default */.A, {
                children: "邀请紧急联系人"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent_DialogContent/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                    component: "form",
                    sx: {
                        mt: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                            autoFocus: true,
                            margin: "dense",
                            id: "contacts",
                            label: "联系人 (11位手机号)",
                            type: "text",
                            fullWidth: true,
                            multiline: true,
                            rows: 4,
                            variant: "outlined",
                            placeholder: "13800138000",
                            value: contacts,
                            onChange: (e)=>setContacts(e.target.value),
                            disabled: isLoading
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                            margin: "dense",
                            id: "remark",
                            label: "备注名 (可选)",
                            type: "text",
                            fullWidth: true,
                            variant: "outlined",
                            value: remark,
                            onChange: (e)=>setRemark(e.target.value),
                            disabled: isLoading
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Autocomplete/* default */.A, {
                            freeSolo: true,
                            id: "call-type-autocomplete",
                            options: availableCallTypes.map((option)=>option.name),
                            value: callType || '',
                            onChange: (event, newValue)=>{
                                console.log('Call type changed to:', newValue);
                                setCallType(newValue);
                            },
                            inputValue: callType || '',
                            onInputChange: (event, newInputValue, reason)=>{
                                // Only update when the user is typing, not when an option is selected
                                if (reason === 'input') {
                                    console.log('Input value changed to:', newInputValue);
                                    setCallType(newInputValue);
                                }
                            },
                            disablePortal: true,
                            disableClearable: true,
                            forcePopupIcon: !isTypesLoading,
                            sx: {
                                mt: 1,
                                mb: 1,
                                width: '100%'
                            },
                            renderInput: (params)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                                    ...params,
                                    label: "呼叫类型",
                                    variant: "outlined",
                                    fullWidth: true,
                                    InputProps: {
                                        ...params.InputProps,
                                        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                isTypesLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress_CircularProgress/* default */.A, {
                                                    color: "inherit",
                                                    size: 20
                                                }) : null,
                                                params.InputProps.endAdornment
                                            ]
                                        })
                                    }
                                }),
                            ListboxProps: {
                                style: {
                                    maxHeight: '200px',
                                    overflow: 'auto'
                                }
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                            margin: "dense",
                            id: "message",
                            label: "邀请信息 (可选)",
                            type: "text",
                            fullWidth: true,
                            multiline: true,
                            rows: 3,
                            variant: "outlined",
                            placeholder: "我已将您添加为我的紧急联系人，请接受邀请。",
                            value: message,
                            onChange: (e)=>setMessage(e.target.value),
                            disabled: isLoading
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions_DialogActions/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        onClick: ()=>onClose(),
                        disabled: isLoading,
                        children: "关闭"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        onClick: handleSendInvitation,
                        variant: "contained",
                        disabled: isLoading,
                        children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress_CircularProgress/* default */.A, {
                            size: 24
                        }) : '发送邀请'
                    })
                ]
            })
        ]
    });
}

;// ./src/components/emergency-audio-control/stopAllHandler.ts


const fileLog = new Log/* Log */.tG(false, 'stopAllHandler_f');
function stopAllHandler_stopAllHandler() {
    try {
        fileLog.log('开始停止所有紧急音频和震动...');
        // 使用正确的停止方法（与EmergencyAudioControl.tsx保持一致）
        const stopEmergencyMethods = [
            "\n        try {\n          com.fanfanlo.emergencycall.manager.SoundManager.stop();\n          com.fanfanlo.emergencycall.manager.AlarmSoundManager.stop();\n          com.fanfanlo.emergencycall.v2.core.EmergencySystemV2.forceStopHelpSound();\n        } catch(e) {\n          // console.log('停止呼救者声音失败:', e);\n        }\n        ",
            "\n        try {\n          com.fanfanlo.emergencycall.manager.SoundManager.stopEmergencyAlarm();\n          \n          // 备用方案：如果WebViewActivity的Android接口可用，也调用它\n          if(typeof Android !== 'undefined' && typeof Android.stopAlarm === 'function') {\n            Android.stopAlarm();\n          }\n        } catch(e) {\n          console.log('停止联系人报警声音失败:', e);\n        }\n        "
        ];
        for (const script of stopEmergencyMethods){
            try {
                fileLog.log("调用停止脚本: ".concat(script.trim()));
                autoWebViewJs.callScript(script);
            } catch (methodError) {
                fileLog.warn("停止方法调用失败:", methodError);
            // 继续尝试其他方法
            }
        }
        fileLog.log('已停止所有紧急音频和震动');
        return true;
    //   setMessage({
    //     type: 'success',
    //     text: '已停止所有紧急音频和震动'
    //   });
    } catch (error) {
        fileLog.error('停止紧急音频失败:', error);
        //   setMessage({
        //     type: 'error',
        //     text: `停止失败: ${error instanceof Error ? error.message : '未知错误'}`
        //   });
        return false;
    } finally{
    //   setLoading(false);
    }
}

;// ./src/components/emergency-audio-control/EmergencyStopButton.tsx








const EmergencyStopButton_fileLog = new Log/* Log */.tG(false, 'EmergencyStopButton');
/**
 * 紧急停止按钮组件
 * 快速停止所有紧急呼救相关的音频和震动
 */ const EmergencyStopButton_EmergencyStopButton = (param)=>{
    let { variant = 'button', size = 'medium', fullWidth = false } = param;
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    /**
   * 检查是否在Android WebView环境中
   */ const isAndroidWebView = ()=>{
        try {
            return !!(autoWebViewJs && typeof autoWebViewJs.callScript === 'function');
        } catch (e) {
            EmergencyStopButton_fileLog.error('检查WebView环境时出错:', e);
            return false;
        }
    };
    /**
   * 停止所有紧急呼救音频和震动
   */ const handleStopAllEmergencyAudio = async ()=>{
        setLoading(true);
        setMessage(null);
        // 添加按钮点击埋点
        trackingPrint({
            params: {
                type: "用户操作",
                title: "紧急停止",
                subtitle: "停止按钮-点击",
                extra: {
                    buttonType: variant,
                    timestamp: Date.now(),
                    isAndroidWebView: isAndroidWebView()
                }
            }
        });
        try {
            const bl = stopAllHandler();
            if (bl) {
                // 成功埋点
                trackingPrint({
                    params: {
                        type: "系统事件",
                        title: "紧急停止",
                        subtitle: "停止成功",
                        extra: {
                            result: "success",
                            timestamp: Date.now()
                        }
                    }
                });
                setMessage({
                    type: 'success',
                    text: '已停止所有紧急音频和震动'
                });
            } else {
                // 失败埋点
                trackingPrint({
                    params: {
                        type: "系统异常",
                        title: "紧急停止",
                        subtitle: "停止失败",
                        extra: {
                            result: "failed",
                            timestamp: Date.now(),
                            reason: "stopAllHandler返回false"
                        }
                    }
                });
                setMessage({
                    type: 'error',
                    text: "停止失败"
                });
            }
        } catch (error) {
            // 异常埋点
            trackingPrint({
                params: {
                    type: "系统异常",
                    title: "紧急停止",
                    subtitle: "停止异常",
                    extra: {
                        error: error instanceof Error ? error.message : String(error),
                        stack: error instanceof Error ? error.stack : undefined,
                        timestamp: Date.now()
                    }
                }
            });
            setMessage({
                type: 'error',
                text: '停止时发生异常'
            });
        }
        setLoading(false);
    };
    /**
   * 关闭消息提示
   */ const handleCloseMessage = ()=>{
        setMessage(null);
    };
    // 浮动操作按钮样式
    if (variant === 'fab') {
        return /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx(Tooltip, {
                    title: "停止所有紧急音频和震动",
                    placement: "left",
                    children: /*#__PURE__*/ _jsx(Fab, {
                        color: "error",
                        onClick: handleStopAllEmergencyAudio,
                        disabled: loading,
                        size: size,
                        sx: {
                            position: 'fixed',
                            bottom: 80,
                            right: 16,
                            zIndex: 1000
                        },
                        children: loading ? /*#__PURE__*/ _jsx(VolumeOffIcon, {}) : /*#__PURE__*/ _jsx(StopIcon, {})
                    })
                }),
                /*#__PURE__*/ _jsx(Snackbar, {
                    open: !!message,
                    autoHideDuration: 4000,
                    onClose: handleCloseMessage,
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center'
                    },
                    children: /*#__PURE__*/ _jsx(Alert, {
                        onClose: handleCloseMessage,
                        severity: (message === null || message === void 0 ? void 0 : message.type) || 'info',
                        sx: {
                            width: '100%'
                        },
                        children: message === null || message === void 0 ? void 0 : message.text
                    })
                })
            ]
        });
    }
    // 普通按钮样式
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Button, {
                variant: "contained",
                color: "error",
                size: size,
                fullWidth: fullWidth,
                startIcon: loading ? /*#__PURE__*/ _jsx(VolumeOffIcon, {}) : /*#__PURE__*/ _jsx(StopIcon, {}),
                onClick: handleStopAllEmergencyAudio,
                disabled: loading,
                sx: {
                    mb: 1
                },
                children: "\uD83D\uDD15 静音"
            }),
            /*#__PURE__*/ _jsx(Snackbar, {
                open: !!message,
                autoHideDuration: 4000,
                onClose: handleCloseMessage,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                },
                children: /*#__PURE__*/ _jsx(Alert, {
                    onClose: handleCloseMessage,
                    severity: (message === null || message === void 0 ? void 0 : message.type) || 'info',
                    sx: {
                        width: '100%'
                    },
                    children: message === null || message === void 0 ? void 0 : message.text
                })
            })
        ]
    });
};
/* harmony default export */ const emergency_audio_control_EmergencyStopButton = ((/* unused pure expression or super */ null && (EmergencyStopButton_EmergencyStopButton)));

// EXTERNAL MODULE: ./src/components/report/ReportButton/index.tsx
var report_ReportButton = __webpack_require__(15299);
;// ./src/components/emergency-tts-settings/EmergencyTTSSettings.tsx








// 默认设置
const DEFAULT_SETTINGS = {
    enabled: false,
    message: '我遇到了紧急情况，需要帮助！请立即联系紧急服务！',
    repeatInterval: 3000,
    voiceSpeed: 1.0,
    voicePitch: 1.0,
    useCustomAudio: false,
    lastUpdated: Date.now()
};
const DEFAULT_VOICE_CONFIG = {
    lastUpdated: Date.now()
};
const TTS_SETTINGS_KEY = 'emergencyTTSSettings';
const VOICE_CONFIG_KEY = 'voiceEmergencyConfig';
const EmergencyTTSSettings_EmergencyTTSSettings = ()=>{
    const [settings, setSettings] = useState(DEFAULT_SETTINGS);
    const [voiceConfig, setVoiceConfig] = useState(DEFAULT_VOICE_CONFIG);
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [testing, setTesting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [expanded, setExpanded] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    // 录制相关状态
    const [isRecording, setIsRecording] = useState(false);
    const [playingFile, setPlayingFile] = useState(null);
    const [recordText, setRecordText] = useState(DEFAULT_SETTINGS.message);
    const [recordSpeed, setRecordSpeed] = useState(1.0);
    const [recordPitch, setRecordPitch] = useState(1.0);
    const [showRecordDialog, setShowRecordDialog] = useState(false);
    const [ttsAvailable, setTtsAvailable] = useState(null);
    // 文件上传相关状态
    const [isUploading, setIsUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [supportedFormats, setSupportedFormats] = useState(null);
    async function onRecordClick() {
        if (user.data.storeData.user_token) {
            setShowRecordDialog(true);
        } else {
            // 弹出登录页面
            const appLoggedIn = await authService.showLoginDialog();
            if (appLoggedIn) {
                setShowRecordDialog(true);
            }
        }
    }
    // 加载所有设置和数据
    useEffect(()=>{
        const loadData = async ()=>{
            try {
                setLoading(true);
                // 加载TTS设置
                const savedSettings = await autoJsStoreUtils.read(TTS_SETTINGS_KEY, DEFAULT_SETTINGS);
                setSettings(savedSettings);
                // 加载语音配置
                const savedConfig = await autoJsStoreUtils.read(VOICE_CONFIG_KEY, DEFAULT_VOICE_CONFIG);
                setVoiceConfig(savedConfig);
                // 检查TTS可用性
                checkTTSAvailability();
                // 加载文件列表
                loadFileList();
            } catch (err) {
                console.error('加载数据失败:', err);
                setError('加载设置失败');
            } finally{
                setLoading(false);
            }
        };
        loadData();
    }, []);
    // 初始化时加载支持的音频格式
    useEffect(()=>{
        loadSupportedFormats();
    }, []);
    // 加载支持的音频格式
    const loadSupportedFormats = useCallback(()=>{
        try {
            const script = "var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.getSupportedAudioFormats();\ndata;";
            const { javaResultString } = autoWebViewJs.callScript(script);
            const formats = JSON.parse(javaResultString || '{}');
            setSupportedFormats(formats);
        } catch (error) {
            console.error('加载支持格式失败:', error);
            setSupportedFormats({
                formats: [
                    'mp3',
                    'wav',
                    'm4a',
                    'aac'
                ],
                maxFileSizeMB: 10,
                maxDurationSeconds: 60,
                recommendedDurationSeconds: 30
            });
        }
    }, []);
    // 加载文件列表
    const loadFileList = useCallback(()=>{
        try {
            const script = "var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.getFileList();\ndata;";
            const { javaResultString: listJson } = autoWebViewJs.callScript(script);
            const files = JSON.parse(listJson || "[]");
            // 为现有文件设置默认类型（兼容性处理）
            const filesWithType = files.map((file)=>({
                    ...file,
                    type: file.type || 'general',
                    isDefault: file.isDefault || false
                }));
            setFileList(filesWithType);
        } catch (error) {
            console.error('加载文件列表失败:', error);
            setFileList([]);
        }
    }, []);
    // 选择并上传音频文件（整合操作）
    const handleSelectAndUploadAudioFile = useCallback(async ()=>{
        if (isUploading) return;
        try {
            setIsUploading(true);
            setUploadProgress(0);
            const script = "var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.selectAndUploadAudioFile();\ndata;";
            // 模拟上传进度
            const progressInterval = setInterval(()=>{
                setUploadProgress((prev)=>{
                    if (prev >= 90) {
                        clearInterval(progressInterval);
                        return 90;
                    }
                    return prev + 10;
                });
            }, 300);
            const { javaResultString } = autoWebViewJs.callScript(script);
            const result = JSON.parse(javaResultString || '{}');
            clearInterval(progressInterval);
            setUploadProgress(100);
            if (result.success) {
                setSuccessMessage('音频文件上传成功！');
                setShowSuccess(true);
                loadFileList(); // 刷新文件列表
            } else {
                setError(result.message || '上传失败');
            }
        } catch (error) {
            console.error('文件上传失败:', error);
            setError('文件上传异常：' + error.message);
        } finally{
            setIsUploading(false);
            setUploadProgress(0);
        }
    }, [
        isUploading,
        loadFileList
    ]);
    // 检查TTS可用性
    const checkTTSAvailability = useCallback(()=>{
        try {
            const script = "var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.isTTSAvailable();\ndata;";
            const { javaResultString } = autoWebViewJs.callScript(script);
            setTtsAvailable(javaResultString === 'true');
        } catch (error) {
            console.error('检查TTS可用性失败:', error);
            setTtsAvailable(false);
        }
    }, []);
    // 保存设置
    const saveSettings = async (newSettings)=>{
        try {
            const settingsToSave = {
                ...newSettings,
                lastUpdated: Date.now()
            };
            await autoJsStoreUtils.write(TTS_SETTINGS_KEY, settingsToSave);
            setSettings(settingsToSave);
            setSuccessMessage('设置保存成功');
            setShowSuccess(true);
            setError(null);
        } catch (err) {
            console.error('保存TTS设置失败:', err);
            setError('保存设置失败');
        }
    };
    // 保存语音配置
    const saveVoiceConfig = async (newConfig)=>{
        try {
            const configToSave = {
                ...newConfig,
                lastUpdated: Date.now()
            };
            await autoJsStoreUtils.write(VOICE_CONFIG_KEY, configToSave);
            setVoiceConfig(configToSave);
        } catch (err) {
            console.error('保存语音配置失败:', err);
            setError('保存配置失败');
        }
    };
    // 录制TTS
    const handleRecord = useCallback(()=>{
        if (!recordText.trim()) {
            setError('请输入要录制的文字');
            return;
        }
        if (!ttsAvailable) {
            setError('TTS服务不可用，无法录制');
            return;
        }
        try {
            setIsRecording(true);
            // 生成文件名：TTS_YYYYMMDD_HHMMSS.wav
            const now = new Date();
            const timestamp = now.getFullYear().toString() + (now.getMonth() + 1).toString().padStart(2, '0') + now.getDate().toString().padStart(2, '0') + '_' + now.getHours().toString().padStart(2, '0') + now.getMinutes().toString().padStart(2, '0') + now.getSeconds().toString().padStart(2, '0');
            const fileName = "TTS_".concat(timestamp, ".wav");
            const script = 'var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.recordTTS("'.concat(recordText.replace(/"/g, '\\"'), '", "').concat(fileName, '", ').concat(recordSpeed, ", ").concat(recordPitch, ");\ndata;");
            // 模拟异步录制过程
            setTimeout(()=>{
                try {
                    const { javaResultString: resultJson } = autoWebViewJs.callScript(script);
                    console.log('录制结果:', resultJson);
                    const result = JSON.parse(resultJson || '{}');
                    if (result.success) {
                        setSuccessMessage('录制成功！');
                        setShowSuccess(true);
                        setShowRecordDialog(false);
                        loadFileList(); // 刷新文件列表
                    } else {
                        setError(result.message || '录制失败');
                    }
                } catch (error) {
                    console.error('录制失败:', error);
                    setError('录制异常：' + error.message);
                } finally{
                    setIsRecording(false);
                }
            }, 2000);
        } catch (error) {
            setError('录制异常：' + error.message);
            setIsRecording(false);
        }
    }, [
        recordText,
        recordSpeed,
        recordPitch,
        ttsAvailable,
        loadFileList
    ]);
    // 播放文件
    const handlePlayFile = useCallback((filePath)=>{
        try {
            if (playingFile === filePath) {
                setPlayingFile(null);
                return;
            }
            const script = 'var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.playFile("'.concat(filePath.replace(/"/g, '\\"'), '");\ndata;');
            const { javaResultString: success } = autoWebViewJs.callScript(script);
            if (success === 'true') {
                setPlayingFile(filePath);
                setTimeout(()=>setPlayingFile(null), 3000);
            } else {
                setError('播放失败');
            }
        } catch (error) {
            setError('播放异常：' + error.message);
        }
    }, [
        playingFile
    ]);
    // 分享文件
    const handleShareFile = useCallback((filePath)=>{
        try {
            const script = 'var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.shareFile("'.concat(filePath.replace(/"/g, '\\"'), '", "紧急呼救语音");\ndata;');
            const { javaResultString: success } = autoWebViewJs.callScript(script);
            if (success !== 'true') {
                setError('分享失败');
            }
        } catch (error) {
            setError('分享异常：' + error.message);
        }
    }, []);
    // 删除文件
    const handleDeleteFile = useCallback((filePath)=>{
        if (window.confirm('确定要删除这个文件吗？')) {
            try {
                const script = 'var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.deleteFile("'.concat(filePath.replace(/"/g, '\\"'), '");\ndata;');
                const { javaResultString: success } = autoWebViewJs.callScript(script);
                if (success === 'true') {
                    setSuccessMessage('文件删除成功');
                    setShowSuccess(true);
                    loadFileList();
                } else {
                    setError('删除失败');
                }
            } catch (error) {
                setError('删除异常：' + error.message);
            }
        }
    }, [
        loadFileList
    ]);
    // 设置为默认音频
    const setAsDefaultAudio = useCallback(async (filePath, type)=>{
        try {
            // 调用Android端设置默认音频
            const script = 'var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.setFileAsDefault("'.concat(filePath.replace(/"/g, '\\"'), '", "').concat(type, '");\ndata;');
            const { javaResultString: success } = autoWebViewJs.callScript(script);
            if (success !== 'true') {
                setError('设置默认音频失败');
                return;
            }
            const newConfig = {
                ...voiceConfig
            };
            if (type === 'medical') {
                newConfig.medicalDefault = filePath;
                // 同时更新TTS设置中的路径
                const updatedSettings = {
                    ...settings,
                    medicalEmergencyAudioPath: filePath,
                    useCustomAudio: true
                };
                setSettings(updatedSettings);
                await saveSettings(updatedSettings);
            } else {
                newConfig.securityDefault = filePath;
            }
            await saveVoiceConfig(newConfig);
            // 更新文件列表中的默认标记
            const updatedFiles = fileList.map((file)=>({
                    ...file,
                    isDefault: file.filePath === filePath
                }));
            setFileList(updatedFiles);
            setSuccessMessage("已设置为".concat(type === 'medical' ? '医疗' : '安全', "呼救默认音频"));
            setShowSuccess(true);
        } catch (err) {
            console.error('设置默认音频失败:', err);
            setError('设置默认音频失败');
        }
    }, [
        voiceConfig,
        fileList,
        settings,
        saveSettings,
        saveVoiceConfig
    ]);
    // 格式化文件大小
    const formatFileSize = (bytes)=>{
        if (bytes < 1024) return "".concat(bytes, " B");
        if (bytes < 1024 * 1024) return "".concat((bytes / 1024).toFixed(1), " KB");
        return "".concat((bytes / (1024 * 1024)).toFixed(1), " MB");
    };
    // 格式化时间
    const formatTime = (timestamp)=>{
        return new Date(timestamp).toLocaleString();
    };
    // 格式化时长
    const formatDuration = (milliseconds)=>{
        if (!milliseconds || milliseconds <= 0) return '';
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        if (minutes > 0) {
            return "".concat(minutes, ":").concat(remainingSeconds.toString().padStart(2, '0'));
        }
        return "".concat(seconds, "s");
    };
    // 测试TTS
    const testTTS = async ()=>{
        if (!settings.message.trim()) {
            setError('请输入呼救文字后再测试');
            return;
        }
        try {
            setTesting(true);
            // 调用Android端TTS测试方法
            const script = '\n        com.fanfanlo.emergencycall.manager.EmergencyTTSManager.testTTS("'.concat(settings.message, '", ').concat(settings.voiceSpeed, ", ").concat(settings.voicePitch, ");\n      ");
            await new Promise((resolve)=>setTimeout(resolve, 500)); // 模拟测试时间
            // TODO: 实际调用时取消注释
            autoWebViewJs.callScript(script);
        } catch (err) {
            console.error('TTS测试失败:', err);
            setError('TTS测试失败');
        } finally{
            setTesting(false);
        }
    };
    // 停止TTS测试
    const stopTest = async ()=>{
        try {
            const script = "\n        com.fanfanlo.emergencycall.manager.EmergencyTTSManager.stopTest();\n      ";
            // TODO: 实际调用时取消注释
            autoWebViewJs.callScript(script);
            setTesting(false);
        } catch (err) {
            console.error('停止TTS测试失败:', err);
        }
    };
    const handleSettingChange = (key, value)=>{
        const newSettings = {
            ...settings,
            [key]: value
        };
        setSettings(newSettings);
        // 对于启用/禁用这样的关键设置，立即保存
        if (key === 'enabled') {
            saveSettings(newSettings);
        }
    };
    const handleSave = ()=>{
        if (settings.enabled && !settings.useCustomAudio && !settings.message.trim()) {
            setError('启用TTS功能时，呼救文字不能为空');
            return;
        }
        saveSettings(settings);
    };
    if (loading) {
        return /*#__PURE__*/ _jsx(Box, {
            sx: {
                p: 2,
                textAlign: 'center'
            },
            children: /*#__PURE__*/ _jsx(Typography, {
                children: "加载中..."
            })
        });
    }
    return /*#__PURE__*/ _jsxs(Box, {
        sx: {
            mb: 3
        },
        children: [
            /*#__PURE__*/ _jsxs(Paper, {
                elevation: 1,
                sx: {
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 1
                },
                children: [
                    /*#__PURE__*/ _jsxs(Box, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: {
                                xs: 1,
                                sm: 2
                            },
                            flexWrap: {
                                xs: 'wrap',
                                sm: 'nowrap'
                            },
                            flex: 1,
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ _jsxs(Typography, {
                                variant: "subtitle1",
                                sx: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    fontSize: {
                                        xs: '0.95rem',
                                        sm: '1.25rem'
                                    },
                                    minWidth: 0,
                                    flexShrink: 0
                                },
                                children: [
                                    /*#__PURE__*/ _jsx(VolumeUp, {
                                        fontSize: "small"
                                    }),
                                    /*#__PURE__*/ _jsx(Box, {
                                        component: "span",
                                        sx: {
                                            display: {
                                                xs: 'none',
                                                sm: 'inline'
                                            }
                                        },
                                        children: "紧急呼救语音设置"
                                    }),
                                    /*#__PURE__*/ _jsx(Box, {
                                        component: "span",
                                        sx: {
                                            display: {
                                                xs: 'inline',
                                                sm: 'none'
                                            }
                                        },
                                        children: "呼救语音"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx(Box, {
                                sx: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: {
                                        xs: 1,
                                        sm: 2
                                    },
                                    flexWrap: {
                                        xs: 'wrap',
                                        sm: 'nowrap'
                                    }
                                },
                                children: /*#__PURE__*/ _jsx(FormControlLabel, {
                                    control: /*#__PURE__*/ _jsx(Switch, {
                                        checked: settings.enabled,
                                        onChange: (e)=>handleSettingChange('enabled', e.target.checked),
                                        color: "primary",
                                        size: "small"
                                    }),
                                    label: settings.enabled ? '已启用' : '未启用',
                                    sx: {
                                        margin: 0,
                                        '& .MuiFormControlLabel-label': {
                                            fontSize: {
                                                xs: '0.8rem',
                                                sm: '0.875rem'
                                            }
                                        }
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Button, {
                        variant: "outlined",
                        size: "small",
                        startIcon: expanded ? /*#__PURE__*/ _jsx(ExpandLess, {}) : /*#__PURE__*/ _jsx(Settings, {}),
                        onClick: ()=>setExpanded(!expanded),
                        sx: {
                            fontSize: {
                                xs: '0.75rem',
                                sm: '0.875rem'
                            },
                            padding: {
                                xs: '4px 8px',
                                sm: '6px 16px'
                            },
                            minWidth: {
                                xs: 'auto',
                                sm: '64px'
                            },
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ _jsx(Box, {
                                component: "span",
                                sx: {
                                    display: {
                                        xs: 'none',
                                        sm: 'inline'
                                    }
                                },
                                children: expanded ? '收起设置' : '设置'
                            }),
                            /*#__PURE__*/ _jsx(Box, {
                                component: "span",
                                sx: {
                                    display: {
                                        xs: 'inline',
                                        sm: 'none'
                                    }
                                },
                                children: expanded ? '收起' : '设置'
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Collapse, {
                in: expanded,
                children: /*#__PURE__*/ _jsxs(Paper, {
                    elevation: 0,
                    sx: {
                        mt: 1,
                        p: 0,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1
                    },
                    children: [
                        /*#__PURE__*/ _jsxs(Tabs, {
                            value: activeTab,
                            onChange: (_, newValue)=>setActiveTab(newValue),
                            variant: "fullWidth",
                            children: [
                                /*#__PURE__*/ _jsx(Tab, {
                                    label: "上传/文字转语音"
                                }),
                                /*#__PURE__*/ _jsx(Tab, {
                                    label: "文件管理"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                p: 2
                            },
                            children: [
                                activeTab === -1 && /*#__PURE__*/ _jsxs(Box, {
                                    children: [
                                        /*#__PURE__*/ _jsxs(Box, {
                                            sx: {
                                                mb: 3
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsx(Typography, {
                                                    variant: "subtitle2",
                                                    fontWeight: "bold",
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: "呼救文字内容"
                                                }),
                                                /*#__PURE__*/ _jsx(TextField, {
                                                    fullWidth: true,
                                                    multiline: true,
                                                    rows: 3,
                                                    value: settings.message,
                                                    onChange: (e)=>handleSettingChange('message', e.target.value),
                                                    placeholder: "请输入紧急情况下要播报的文字...",
                                                    disabled: !settings.enabled,
                                                    helperText: "当前字数: ".concat(settings.message.length, " 字符"),
                                                    sx: {
                                                        '& .MuiInputBase-input': {
                                                            fontSize: '16px',
                                                            lineHeight: 1.5
                                                        }
                                                    }
                                                })
                                            ]
                                        }),
                                        settings.enabled && /*#__PURE__*/ _jsxs(_Fragment, {
                                            children: [
                                                /*#__PURE__*/ _jsx(Divider, {
                                                    sx: {
                                                        my: 3
                                                    }
                                                }),
                                                /*#__PURE__*/ _jsx(Typography, {
                                                    variant: "subtitle2",
                                                    fontWeight: "bold",
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: "语音参数设置"
                                                }),
                                                /*#__PURE__*/ _jsxs(Box, {
                                                    sx: {
                                                        mb: 3
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ _jsxs(Typography, {
                                                            variant: "body2",
                                                            sx: {
                                                                mb: 1
                                                            },
                                                            children: [
                                                                "重复间隔: ",
                                                                settings.repeatInterval / 1000,
                                                                " 秒"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx(Slider, {
                                                            value: settings.repeatInterval,
                                                            onChange: (_, value)=>handleSettingChange('repeatInterval', value),
                                                            min: 2000,
                                                            max: 10000,
                                                            step: 500,
                                                            marks: [
                                                                {
                                                                    value: 2000,
                                                                    label: '2s'
                                                                },
                                                                {
                                                                    value: 5000,
                                                                    label: '5s'
                                                                },
                                                                {
                                                                    value: 10000,
                                                                    label: '10s'
                                                                }
                                                            ],
                                                            valueLabelDisplay: "auto",
                                                            valueLabelFormat: (value)=>"".concat(value / 1000, "s")
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs(Box, {
                                                    sx: {
                                                        mb: 3
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ _jsxs(Typography, {
                                                            variant: "body2",
                                                            sx: {
                                                                mb: 1
                                                            },
                                                            children: [
                                                                "语音速度: ",
                                                                settings.voiceSpeed,
                                                                "x"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx(Slider, {
                                                            value: settings.voiceSpeed,
                                                            onChange: (_, value)=>handleSettingChange('voiceSpeed', value),
                                                            min: 0.5,
                                                            max: 2.0,
                                                            step: 0.1,
                                                            marks: [
                                                                {
                                                                    value: 0.5,
                                                                    label: '0.5x'
                                                                },
                                                                {
                                                                    value: 1.0,
                                                                    label: '1.0x'
                                                                },
                                                                {
                                                                    value: 2.0,
                                                                    label: '2.0x'
                                                                }
                                                            ],
                                                            valueLabelDisplay: "auto"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs(Box, {
                                                    sx: {
                                                        mb: 3
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ _jsxs(Typography, {
                                                            variant: "body2",
                                                            sx: {
                                                                mb: 1
                                                            },
                                                            children: [
                                                                "语音音调: ",
                                                                settings.voicePitch,
                                                                "x"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx(Slider, {
                                                            value: settings.voicePitch,
                                                            onChange: (_, value)=>handleSettingChange('voicePitch', value),
                                                            min: 0.5,
                                                            max: 2.0,
                                                            step: 0.1,
                                                            marks: [
                                                                {
                                                                    value: 0.5,
                                                                    label: '低'
                                                                },
                                                                {
                                                                    value: 1.0,
                                                                    label: '标准'
                                                                },
                                                                {
                                                                    value: 2.0,
                                                                    label: '高'
                                                                }
                                                            ],
                                                            valueLabelDisplay: "auto"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                activeTab === 0 && /*#__PURE__*/ _jsxs(Box, {
                                    children: [
                                        /*#__PURE__*/ _jsxs(Box, {
                                            sx: {
                                                mb: 4
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsx(Typography, {
                                                    variant: "subtitle2",
                                                    fontWeight: "bold",
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: "录制新的呼救语音"
                                                }),
                                                !ttsAvailable ? /*#__PURE__*/ _jsx(Alert, {
                                                    severity: "warning",
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: "TTS服务不可用，无法录制语音。请检查设备设置或联系技术支持。"
                                                }) : /*#__PURE__*/ _jsx(Button, {
                                                    variant: "contained",
                                                    startIcon: /*#__PURE__*/ _jsx(Mic, {}),
                                                    onClick: onRecordClick,
                                                    disabled: isUploading,
                                                    sx: {
                                                        mb: 3
                                                    },
                                                    children: "录制新语音"
                                                }),
                                                /*#__PURE__*/ _jsxs(Typography, {
                                                    variant: "body2",
                                                    color: "text.secondary",
                                                    children: [
                                                        '• 点击"录制新语音"开始录制',
                                                        /*#__PURE__*/ _jsx("br", {}),
                                                        "• 可以调节语速和音调参数",
                                                        /*#__PURE__*/ _jsx("br", {}),
                                                        "• 录制完成后会自动保存到文件列表",
                                                        /*#__PURE__*/ _jsx("br", {}),
                                                        "• 在文件管理中可以设置为默认呼救音频"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Divider, {
                                            sx: {
                                                my: 3
                                            }
                                        }),
                                        /*#__PURE__*/ _jsxs(Box, {
                                            children: [
                                                /*#__PURE__*/ _jsx(Typography, {
                                                    variant: "subtitle2",
                                                    fontWeight: "bold",
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: "上传音频文件"
                                                }),
                                                /*#__PURE__*/ _jsx(Button, {
                                                    variant: "outlined",
                                                    startIcon: isUploading ? /*#__PURE__*/ _jsx(CircularProgress, {
                                                        size: 16
                                                    }) : /*#__PURE__*/ _jsx(CloudUpload, {}),
                                                    onClick: handleSelectAndUploadAudioFile,
                                                    disabled: isUploading,
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: isUploading ? '上传中...' : '选择并上传音频文件'
                                                }),
                                                isUploading && uploadProgress > 0 && /*#__PURE__*/ _jsxs(Box, {
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ _jsx(LinearProgress, {
                                                            variant: "determinate",
                                                            value: uploadProgress,
                                                            sx: {
                                                                mb: 1
                                                            }
                                                        }),
                                                        /*#__PURE__*/ _jsxs(Typography, {
                                                            variant: "body2",
                                                            color: "text.secondary",
                                                            sx: {
                                                                textAlign: 'center'
                                                            },
                                                            children: [
                                                                "上传中... ",
                                                                uploadProgress,
                                                                "%"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                supportedFormats && supportedFormats.formats && /*#__PURE__*/ _jsxs(Typography, {
                                                    variant: "body2",
                                                    color: "text.secondary",
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: [
                                                        "支持格式: ",
                                                        supportedFormats.formats.join(', ').toUpperCase(),
                                                        /*#__PURE__*/ _jsx("br", {}),
                                                        "文件大小限制: ",
                                                        supportedFormats.maxFileSizeMB,
                                                        "MB",
                                                        /*#__PURE__*/ _jsx("br", {}),
                                                        "推荐时长: ",
                                                        supportedFormats.recommendedDurationSeconds,
                                                        "秒内"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs(Typography, {
                                                    variant: "body2",
                                                    color: "text.secondary",
                                                    children: [
                                                        "• 支持从设备中选择现有的音频文件",
                                                        /*#__PURE__*/ _jsx("br", {}),
                                                        "• 上传成功后可在文件管理中设置为默认音频"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                activeTab === 1 && /*#__PURE__*/ _jsxs(Box, {
                                    children: [
                                        /*#__PURE__*/ _jsxs(Box, {
                                            sx: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                mb: 2
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsx(Typography, {
                                                    variant: "subtitle2",
                                                    fontWeight: "bold",
                                                    children: "录制文件列表"
                                                }),
                                                /*#__PURE__*/ _jsx(Button, {
                                                    size: "small",
                                                    startIcon: /*#__PURE__*/ _jsx(Refresh, {}),
                                                    onClick: loadFileList,
                                                    children: "刷新"
                                                })
                                            ]
                                        }),
                                        fileList.length === 0 ? /*#__PURE__*/ _jsx(Typography, {
                                            color: "text.secondary",
                                            sx: {
                                                textAlign: 'center',
                                                py: 3
                                            },
                                            children: "暂无录制文件"
                                        }) : /*#__PURE__*/ _jsx(List, {
                                            dense: true,
                                            children: fileList.map((file, index)=>/*#__PURE__*/ _jsxs(React.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ _jsxs(ListItem, {
                                                            sx: {
                                                                pl: 0
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ _jsx(ListItemText, {
                                                                    primary: /*#__PURE__*/ _jsxs(Box, {
                                                                        sx: {
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: 1,
                                                                            flexWrap: 'wrap'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxs(Box, {
                                                                                sx: {
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    gap: 1
                                                                                },
                                                                                children: [
                                                                                    file.source === 'uploaded' ? /*#__PURE__*/ _jsx(InsertDriveFile, {
                                                                                        fontSize: "small"
                                                                                    }) : /*#__PURE__*/ _jsx(Mic, {
                                                                                        fontSize: "small"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx(Typography, {
                                                                                        variant: "body2",
                                                                                        fontWeight: "medium",
                                                                                        children: file.fileName
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs(Box, {
                                                                                sx: {
                                                                                    display: 'flex',
                                                                                    gap: 0.5
                                                                                },
                                                                                children: [
                                                                                    file.isDefault && /*#__PURE__*/ _jsx(Chip, {
                                                                                        size: "small",
                                                                                        label: "默认",
                                                                                        color: "primary"
                                                                                    }),
                                                                                    /*#__PURE__*/ _jsx(Chip, {
                                                                                        size: "small",
                                                                                        label: file.source === 'uploaded' ? '上传' : '录制',
                                                                                        color: file.source === 'uploaded' ? 'secondary' : 'default',
                                                                                        variant: "outlined"
                                                                                    }),
                                                                                    file.format && /*#__PURE__*/ _jsx(Chip, {
                                                                                        size: "small",
                                                                                        label: file.format.toUpperCase(),
                                                                                        color: "default",
                                                                                        variant: "outlined"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    secondary: /*#__PURE__*/ _jsxs(Box, {
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxs(Typography, {
                                                                                variant: "caption",
                                                                                color: "text.secondary",
                                                                                children: [
                                                                                    formatFileSize(file.fileSize),
                                                                                    " • ",
                                                                                    formatTime(file.createTime),
                                                                                    file.duration && file.duration > 0 && " • ".concat(formatDuration(file.duration))
                                                                                ]
                                                                            }),
                                                                            file.mimeType && /*#__PURE__*/ _jsx(Typography, {
                                                                                variant: "caption",
                                                                                color: "text.secondary",
                                                                                sx: {
                                                                                    display: 'block'
                                                                                },
                                                                                children: file.mimeType
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsx(ListItemSecondaryAction, {
                                                                    children: /*#__PURE__*/ _jsxs(Box, {
                                                                        sx: {
                                                                            display: 'flex',
                                                                            gap: 0.5
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx(IconButton, {
                                                                                size: "small",
                                                                                onClick: ()=>handlePlayFile(file.filePath),
                                                                                color: playingFile === file.filePath ? "primary" : "default",
                                                                                children: playingFile === file.filePath ? /*#__PURE__*/ _jsx(Stop, {}) : /*#__PURE__*/ _jsx(PlayArrow, {})
                                                                            }),
                                                                            /*#__PURE__*/ _jsx(IconButton, {
                                                                                size: "small",
                                                                                onClick: ()=>setAsDefaultAudio(file.filePath, 'medical'),
                                                                                color: file.isDefault ? "primary" : "default",
                                                                                children: file.isDefault ? /*#__PURE__*/ _jsx(Star, {}) : /*#__PURE__*/ _jsx(StarBorder, {})
                                                                            }),
                                                                            /*#__PURE__*/ _jsx(IconButton, {
                                                                                size: "small",
                                                                                onClick: ()=>handleShareFile(file.filePath),
                                                                                children: /*#__PURE__*/ _jsx(Share, {})
                                                                            }),
                                                                            /*#__PURE__*/ _jsx(IconButton, {
                                                                                size: "small",
                                                                                onClick: ()=>handleDeleteFile(file.filePath),
                                                                                color: "error",
                                                                                children: /*#__PURE__*/ _jsx(Delete, {})
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        index < fileList.length - 1 && /*#__PURE__*/ _jsx(Divider, {})
                                                    ]
                                                }, file.filePath))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(Divider, {
                                    sx: {
                                        my: 3
                                    }
                                }),
                                /*#__PURE__*/ _jsx(Box, {
                                    sx: {
                                        p: 2,
                                        backgroundColor: 'rgba(0,0,0,0.05)',
                                        borderRadius: 1
                                    },
                                    children: /*#__PURE__*/ _jsxs(Typography, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        children: [
                                            /*#__PURE__*/ _jsx("strong", {
                                                children: "智能音频回退说明:"
                                            }),
                                            /*#__PURE__*/ _jsx("br", {}),
                                            "• 第1级: 检查是否启用呼救功能",
                                            /*#__PURE__*/ _jsx("br", {}),
                                            "• 第2级: 优先播放设置为默认的自定义音频文件",
                                            /*#__PURE__*/ _jsx("br", {}),
                                            "• 第3级: 最终降级到系统默认提示音",
                                            /*#__PURE__*/ _jsx("br", {}),
                                            /*#__PURE__*/ _jsx("br", {}),
                                            /*#__PURE__*/ _jsx("strong", {
                                                children: "使用建议:"
                                            }),
                                            /*#__PURE__*/ _jsx("br", {}),
                                            "• 建议录制或上传个人化的呼救信息，包含您的姓名、病情和紧急联系人",
                                            /*#__PURE__*/ _jsx("br", {}),
                                            "• 在文件管理中点击五角星设置为默认音频",
                                            /*#__PURE__*/ _jsx("br", {}),
                                            "• 先测试语音效果，确保在紧急情况下能清楚传达",
                                            /*#__PURE__*/ _jsx("br", {}),
                                            "• 定期检查和更新呼救音频内容"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsxs(Dialog, {
                open: showRecordDialog,
                onClose: ()=>setShowRecordDialog(false),
                maxWidth: "md",
                fullWidth: true,
                children: [
                    /*#__PURE__*/ _jsx(DialogTitle, {
                        children: "录制新语音"
                    }),
                    /*#__PURE__*/ _jsxs(DialogContent, {
                        children: [
                            /*#__PURE__*/ _jsx(TextField, {
                                fullWidth: true,
                                multiline: true,
                                rows: 4,
                                label: "录制文字内容",
                                value: recordText,
                                onChange: (e)=>setRecordText(e.target.value),
                                margin: "normal",
                                placeholder: "请输入要录制的紧急呼救内容...",
                                helperText: "字数: ".concat(recordText.length, " 字符")
                            }),
                            isRecording && /*#__PURE__*/ _jsxs(Box, {
                                sx: {
                                    mt: 2
                                },
                                children: [
                                    /*#__PURE__*/ _jsx(LinearProgress, {}),
                                    /*#__PURE__*/ _jsx(Typography, {
                                        variant: "body2",
                                        sx: {
                                            mt: 1,
                                            textAlign: 'center'
                                        },
                                        children: "正在录制中，请稍候..."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(Box, {
                                sx: {
                                    mt: 3
                                },
                                children: [
                                    /*#__PURE__*/ _jsx(Typography, {
                                        variant: "subtitle2",
                                        gutterBottom: true,
                                        children: "录制参数"
                                    }),
                                    /*#__PURE__*/ _jsxs(Box, {
                                        sx: {
                                            mt: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsxs(Typography, {
                                                variant: "body2",
                                                gutterBottom: true,
                                                children: [
                                                    "语音速度: ",
                                                    recordSpeed,
                                                    "x"
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx(Slider, {
                                                value: recordSpeed,
                                                onChange: (_, value)=>setRecordSpeed(value),
                                                min: 0.5,
                                                max: 2.0,
                                                step: 0.1,
                                                marks: [
                                                    {
                                                        value: 0.5,
                                                        label: '慢'
                                                    },
                                                    {
                                                        value: 1.0,
                                                        label: '标准'
                                                    },
                                                    {
                                                        value: 2.0,
                                                        label: '快'
                                                    }
                                                ],
                                                disabled: isRecording
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs(Box, {
                                        sx: {
                                            mt: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsxs(Typography, {
                                                variant: "body2",
                                                gutterBottom: true,
                                                children: [
                                                    "语音音调: ",
                                                    recordPitch,
                                                    "x"
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx(Slider, {
                                                value: recordPitch,
                                                onChange: (_, value)=>setRecordPitch(value),
                                                min: 0.5,
                                                max: 2.0,
                                                step: 0.1,
                                                marks: [
                                                    {
                                                        value: 0.5,
                                                        label: '低'
                                                    },
                                                    {
                                                        value: 1.0,
                                                        label: '标准'
                                                    },
                                                    {
                                                        value: 2.0,
                                                        label: '高'
                                                    }
                                                ],
                                                disabled: isRecording
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(DialogActions, {
                        children: [
                            /*#__PURE__*/ _jsx(ReportButton, {}),
                            /*#__PURE__*/ _jsx(Button, {
                                onClick: ()=>setShowRecordDialog(false),
                                disabled: isRecording,
                                children: "取消"
                            }),
                            /*#__PURE__*/ _jsx(Button, {
                                onClick: handleRecord,
                                variant: "contained",
                                disabled: !recordText.trim() || isRecording,
                                startIcon: isRecording ? undefined : /*#__PURE__*/ _jsx(Mic, {}),
                                children: isRecording ? '录制中...' : '开始录制'
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Snackbar, {
                open: showSuccess,
                autoHideDuration: 3000,
                onClose: ()=>setShowSuccess(false),
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                },
                children: /*#__PURE__*/ _jsx(Alert, {
                    onClose: ()=>setShowSuccess(false),
                    severity: "success",
                    children: successMessage || 'TTS设置保存成功！'
                })
            }),
            /*#__PURE__*/ _jsx(Snackbar, {
                open: !!error,
                autoHideDuration: 6000,
                onClose: ()=>setError(null),
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                },
                children: /*#__PURE__*/ _jsx(Alert, {
                    onClose: ()=>setError(null),
                    severity: "error",
                    children: error
                })
            })
        ]
    });
};

;// ./src/components/emergency-tts-settings/index.ts


;// ./src/components/error-display/ErrorDisplay.tsx



const ErrorDisplay_ErrorDisplay = ()=>{
    const [errors, setErrors] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const loadErrors = ()=>{
        try {
            const parsed = autoJsStoreUtils.read('EMERGENCY_ERRORS_STORAGE', {
                "errors": []
            });
            // const parsed: ErrorStorage = JSON.parse(errorData);
            if (parsed && parsed.errors && parsed.errors.length > 0) {
                setErrors(parsed.errors);
                setIsVisible(true);
            } else {
                setErrors([]);
                setIsVisible(false);
            }
        } catch (e) {
            console.error('读取错误信息失败:', e);
            setErrors([]);
            setIsVisible(false);
        }
    };
    const clearErrors = ()=>{
        try {
            // 清除本地存储
            autoJsStoreUtils.write('EMERGENCY_ERRORS_STORAGE', '{"errors":[]}');
            setErrors([]);
            setIsVisible(false);
            console.log('错误信息已清除');
        } catch (e) {
            console.error('清除错误信息失败:', e);
        }
    };
    const handleErrorEvent = ()=>{
        console.log('收到错误事件，重新加载错误列表');
        loadErrors();
    };
    const handleErrorClearedEvent = ()=>{
        console.log('收到错误清除事件');
        setErrors([]);
        setIsVisible(false);
    };
    useEffect(()=>{
        // 页面加载时检查错误
        loadErrors();
        // 监听错误事件
        const handleFocus = ()=>{
            console.log('窗口获得焦点，检查错误信息');
            loadErrors();
        };
        // 监听自定义事件
        const handleCustomError = (event)=>{
            console.log('收到自定义错误事件:', event);
            handleErrorEvent();
        };
        const handleCustomErrorCleared = (event)=>{
            console.log('收到自定义错误清除事件:', event);
            handleErrorClearedEvent();
        };
        // 添加事件监听器
        window.addEventListener('focus', handleFocus);
        window.addEventListener('emergency_error_added', handleCustomError);
        window.addEventListener('emergency_errors_cleared', handleCustomErrorCleared);
        return ()=>{
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('emergency_error_added', handleCustomError);
            window.removeEventListener('emergency_errors_cleared', handleCustomErrorCleared);
        };
    }, []);
    const getSeverityColor = (severity)=>{
        switch(severity){
            case 'critical':
                return 'bg-red-100 border-red-500 text-red-800';
            case 'high':
                return 'bg-orange-100 border-orange-500 text-orange-800';
            case 'medium':
                return 'bg-yellow-100 border-yellow-500 text-yellow-800';
            case 'low':
                return 'bg-blue-100 border-blue-500 text-blue-800';
            default:
                return 'bg-gray-100 border-gray-500 text-gray-800';
        }
    };
    const getSeverityText = (severity)=>{
        switch(severity){
            case 'critical':
                return '严重';
            case 'high':
                return '高';
            case 'medium':
                return '中';
            case 'low':
                return '低';
            default:
                return '未知';
        }
    };
    const getErrorTypeText = (type)=>{
        switch(type){
            case 'network_error':
                return '网络错误';
            case 'api_error':
                return 'API错误';
            case 'system_error':
                return '系统错误';
            default:
                return type;
        }
    };
    const formatTime = (timestamp)=>{
        return new Date(timestamp).toLocaleString('zh-CN');
    };
    if (!isVisible || errors.length === 0) {
        return null;
    }
    return /*#__PURE__*/ _jsx("div", {
        className: "fixed top-4 left-4 right-4 z-50 max-w-2xl mx-auto",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "bg-white border border-red-300 rounded-lg shadow-lg p-4",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "flex items-center justify-between mb-3",
                    children: [
                        /*#__PURE__*/ _jsxs("h3", {
                            className: "text-lg font-semibold text-red-800 flex items-center",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: "mr-2",
                                    children: "⚠️"
                                }),
                                "发现 ",
                                errors.length,
                                " 个错误"
                            ]
                        }),
                        /*#__PURE__*/ _jsx("button", {
                            onClick: clearErrors,
                            className: "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm",
                            children: "我已知道"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "max-h-64 overflow-y-auto space-y-2",
                    children: [
                        errors.slice(0, 3).map((error)=>/*#__PURE__*/ _jsxs("div", {
                                className: "p-3 rounded border-l-4 ".concat(getSeverityColor(error.severity)),
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "flex items-center justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "font-medium text-sm",
                                                children: getErrorTypeText(error.errorType)
                                            }),
                                            /*#__PURE__*/ _jsxs("span", {
                                                className: "text-xs opacity-75",
                                                children: [
                                                    getSeverityText(error.severity),
                                                    " | ",
                                                    formatTime(error.timestamp)
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "text-sm mb-2",
                                        children: error.message
                                    }),
                                    error.context && Object.keys(error.context).length > 0 && /*#__PURE__*/ _jsxs("div", {
                                        className: "text-xs opacity-75",
                                        children: [
                                            /*#__PURE__*/ _jsx("strong", {
                                                children: "上下文:"
                                            }),
                                            Object.entries(error.context).map((param)=>{
                                                let [key, value] = param;
                                                return /*#__PURE__*/ _jsxs("span", {
                                                    className: "ml-2",
                                                    children: [
                                                        key,
                                                        ": ",
                                                        value
                                                    ]
                                                }, key);
                                            })
                                        ]
                                    }),
                                    error.stackTrace && /*#__PURE__*/ _jsxs("details", {
                                        className: "mt-2",
                                        children: [
                                            /*#__PURE__*/ _jsx("summary", {
                                                className: "text-xs cursor-pointer opacity-75",
                                                children: "查看详细错误信息"
                                            }),
                                            /*#__PURE__*/ _jsx("pre", {
                                                className: "text-xs mt-1 p-2 bg-gray-100 rounded overflow-x-auto whitespace-pre-wrap",
                                                children: error.stackTrace
                                            })
                                        ]
                                    })
                                ]
                            }, error.id)),
                        errors.length > 3 && /*#__PURE__*/ _jsxs("div", {
                            className: "text-center text-sm text-gray-600 py-2",
                            children: [
                                "还有 ",
                                errors.length - 3,
                                " 个错误未显示..."
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./src/components/navbar/NavBar.tsx
var NavBar = __webpack_require__(32534);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(44437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper_Paper = __webpack_require__(59864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography_Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 5 modules
var Alert_Alert = __webpack_require__(85629);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/useTheme.js
var styles_useTheme = __webpack_require__(38443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js
var colorManipulator = __webpack_require__(67245);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel_FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch_Switch = __webpack_require__(85156);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton_IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse_Collapse = __webpack_require__(32499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContentText/DialogContentText.js + 1 modules
var DialogContentText_DialogContentText = __webpack_require__(33899);
;// ./src/components/pages/home/components/FallRescueAnimation.tsx



// 动画阶段枚举
var AnimationPhase = /*#__PURE__*/ function(AnimationPhase) {
    AnimationPhase["WALKING"] = "WALKING";
    AnimationPhase["DIZZY"] = "DIZZY";
    AnimationPhase["FALLING"] = "FALLING";
    AnimationPhase["PHONE_ALERT"] = "PHONE_ALERT";
    AnimationPhase["TEXT_DISPLAY"] = "TEXT_DISPLAY";
    return AnimationPhase;
}(AnimationPhase || {});
const FallRescueAnimation = (param)=>{
    let { isVisible = true, type = 'fall', onAnimationComplete } = param;
    const theme = (0,styles_useTheme/* default */.A)();
    // 动画状态
    const [currentPhase, setCurrentPhase] = (0,react.useState)("WALKING");
    const [isFalling, setIsFalling] = (0,react.useState)(false);
    const [showPhone, setShowPhone] = (0,react.useState)(false);
    const [showTextDisplay, setShowTextDisplay] = (0,react.useState)(false);
    const [currentTextIndex, setCurrentTextIndex] = (0,react.useState)(0);
    const [currentCharIndex, setCurrentCharIndex] = (0,react.useState)(0);
    // 轮播控制状态
    const [isLooping, setIsLooping] = (0,react.useState)(true);
    const [loopCount, setLoopCount] = (0,react.useState)(0);
    // 动画序列控制
    (0,react.useEffect)(()=>{
        if (!isVisible) return;
        const runAnimationSequence = async ()=>{
            while(isVisible && isLooping){
                // 阶段1: 正常走路 (2秒)
                setIsFalling(false);
                setCurrentPhase("WALKING");
                await new Promise((resolve)=>setTimeout(resolve, 2000));
                if (!isVisible || !isLooping) break;
                // 阶段2: 头晕 (2秒) 
                setCurrentPhase("DIZZY");
                await new Promise((resolve)=>setTimeout(resolve, 2000));
                if (!isVisible || !isLooping) break;
                // 阶段3: 摔倒 (3秒) - 三维向后仰倒
                setCurrentPhase("FALLING");
                setIsFalling(true);
                await new Promise((resolve)=>setTimeout(resolve, 3000));
                if (!isVisible || !isLooping) break;
                // 阶段4: 手机报警 (10秒) - 显示手机和报警文字
                setCurrentPhase("PHONE_ALERT");
                setShowPhone(true);
                await new Promise((resolve)=>setTimeout(resolve, 10000));
                if (!isVisible || !isLooping) break;
                // 阶段5: 文字展示 (30秒左右) - 清空画面显示宣传文字
                setCurrentPhase("TEXT_DISPLAY");
                setShowPhone(false);
                setIsFalling(false);
                setShowTextDisplay(true);
                setCurrentTextIndex(0);
                setCurrentCharIndex(0);
                // 执行逐字显示动画
                await new Promise((resolve)=>{
                    const textLines = [
                        '紧急呼救，守护您的安全',
                        '同时联系多人',
                        '实时同步地理位置',
                        '多人同时音视频',
                        '手机自动向周边行人呼救'
                    ];
                    let totalTime = 0;
                    let lineIndex = 0;
                    let charIndex = 0;
                    const typeChar = ()=>{
                        if (!isVisible || !isLooping) {
                            resolve(undefined);
                            return;
                        }
                        if (lineIndex < textLines.length) {
                            if (charIndex < textLines[lineIndex].length) {
                                setCurrentTextIndex(lineIndex);
                                setCurrentCharIndex(charIndex + 1);
                                charIndex++;
                                setTimeout(typeChar, 350); // 0.35秒一个字
                                totalTime += 1000;
                            } else {
                                // 当前行完成，等待1秒后开始下一行
                                lineIndex++;
                                charIndex = 0;
                                setTimeout(typeChar, 350);
                                totalTime += 1000;
                            }
                        } else {
                            // 所有文字显示完成，等待3秒
                            setTimeout(()=>resolve(undefined), 3000);
                        }
                    };
                    typeChar();
                });
                if (!isVisible || !isLooping) break;
                // 更新轮播计数
                setLoopCount((prev)=>prev + 1);
                // 重置状态准备下一轮
                setIsFalling(false);
                setShowPhone(false);
                setShowTextDisplay(false);
                setCurrentTextIndex(0);
                setCurrentCharIndex(0);
                // 轮播间隔 (1秒)
                await new Promise((resolve)=>setTimeout(resolve, 1000));
            }
            onAnimationComplete === null || onAnimationComplete === void 0 ? void 0 : onAnimationComplete();
        };
        runAnimationSequence();
        return ()=>{
            setIsLooping(false);
        };
    }, [
        isVisible,
        isLooping,
        onAnimationComplete
    ]);
    // 轮播控制功能
    // const pauseAnimation = () => setIsLooping(false);
    // const resumeAnimation = () => setIsLooping(true);
    // const restartAnimation = () => {
    //     setLoopCount(0);
    //     setIsLooping(true);
    // };
    // 获取当前阶段的内容
    const getPhaseContent = ()=>{
        switch(currentPhase){
            case "WALKING":
                return {
                    person: '🚶',
                    tip: '正常走路'
                };
            case "DIZZY":
                return {
                    person: '🤦',
                    tip: '头晕'
                };
            case "FALLING":
                return {
                    person: '🧍',
                    tip: '摔倒'
                };
            case "PHONE_ALERT":
                return {
                    person: '🧍',
                    tip: '手机自动呼救中...'
                };
            case "TEXT_DISPLAY":
                return {
                    person: '',
                    tip: ''
                };
            default:
                return {
                    person: '🚶',
                    tip: '正常走路'
                };
        }
    };
    const phaseContent = getPhaseContent();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            width: '100%',
            height: '300px',
            position: 'relative',
            backgroundColor: '#FFFFFF',
            borderRadius: 1,
            overflow: 'hidden',
            perspective: '1500px' // 增强3D透视效果
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '20%',
                    backgroundColor: '#F5F5F5'
                }
            }),
            isFalling && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    position: 'absolute',
                    left: '50%',
                    bottom: '20%',
                    width: '80px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    transform: 'translateX(-50%)',
                    filter: 'blur(3px)',
                    zIndex: 0
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    position: 'absolute',
                    left: '50%',
                    bottom: '25%',
                    fontSize: '120px',
                    transform: "translateX(-50%) ".concat(isFalling || showPhone ? 'rotateX(-45deg) rotateY(15deg) rotateZ(-15deg) translateZ(25px)' : 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'),
                    transition: isFalling || showPhone ? 'transform 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
                    transformOrigin: 'center 80%',
                    transformStyle: 'preserve-3d',
                    zIndex: 1
                },
                children: phaseContent.person
            }),
            showPhone && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    position: 'absolute',
                    left: '58%',
                    bottom: '32%',
                    fontSize: '60px',
                    zIndex: 2,
                    animation: 'phoneVibrate 0.1s infinite',
                    '@keyframes phoneVibrate': {
                        '0%': {
                            transform: 'translateX(0px) translateY(0px)'
                        },
                        '25%': {
                            transform: 'translateX(1px) translateY(1px)'
                        },
                        '50%': {
                            transform: 'translateX(-1px) translateY(0px)'
                        },
                        '75%': {
                            transform: 'translateX(1px) translateY(-1px)'
                        },
                        '100%': {
                            transform: 'translateX(0px) translateY(0px)'
                        }
                    }
                },
                children: "\uD83D\uDCF1"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    position: 'absolute',
                    left: '50%',
                    top: 'calc(15% - 25px)',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    zIndex: 10
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                    variant: "h6",
                    sx: {
                        color: '#1976D2',
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        fontSize: '18px'
                    },
                    children: phaseContent.tip
                })
            }),
            showPhone && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: 2,
                    padding: 1.5,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                        sx: {
                            fontSize: '40px'
                        },
                        children: "\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDDB0"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                        sx: {
                            fontSize: '24px',
                            animation: 'phoneVibrate 0.1s infinite'
                        },
                        children: "\uD83D\uDCF1"
                    })
                ]
            }),
            showPhone && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: 2,
                    padding: 1.5,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                        sx: {
                            fontSize: '40px'
                        },
                        children: "\uD83D\uDC68\uD83C\uDFFB"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                        sx: {
                            fontSize: '24px',
                            animation: 'phoneVibrate 0.1s infinite'
                        },
                        children: "\uD83D\uDCF1"
                    })
                ]
            }),
            showPhone && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    position: 'absolute',
                    top: 70,
                    right: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: 2,
                    padding: 1,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    zIndex: 10,
                    maxWidth: '200px'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                    variant: "body2",
                    sx: {
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: '14px'
                    },
                    children: "爸，您怎么摔倒了"
                })
            }),
            showPhone && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    position: 'absolute',
                    top: 70,
                    left: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: 2,
                    padding: 1,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    zIndex: 10,
                    maxWidth: '250px',
                    minHeight: '60px',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                    variant: "body2",
                    sx: {
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        lineHeight: 1.4
                    },
                    children: [
                        "爸，您怎么摔倒了",
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                        "女儿已通过视频看到现场画面"
                    ]
                })
            }),
            showPhone && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    position: 'absolute',
                    bottom: 60,
                    left: 8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: 2,
                    padding: 1.5,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                        sx: {
                            fontSize: '40px'
                        },
                        children: "\uD83E\uDDD4\uD83C\uDFFB"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                        sx: {
                            fontSize: '24px',
                            animation: 'phoneVibrate 0.1s infinite'
                        },
                        children: "\uD83D\uDCF1"
                    })
                ]
            }),
            showPhone && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    position: 'absolute',
                    bottom: 130,
                    left: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: 2,
                    padding: 1,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    zIndex: 10,
                    maxWidth: '280px'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                    variant: "body2",
                    sx: {
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: '14px'
                    },
                    children: "老李，我离你一百米，马上到"
                })
            }),
            showPhone && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    position: 'absolute',
                    bottom: 60,
                    right: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: 2,
                    padding: 1.5,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                        sx: {
                            fontSize: '50px',
                            animation: 'ambulanceMove 1s ease-in-out infinite',
                            '@keyframes ambulanceMove': {
                                '0%': {
                                    transform: 'translateY(0px)'
                                },
                                '50%': {
                                    transform: 'translateY(-3px)'
                                },
                                '100%': {
                                    transform: 'translateY(0px)'
                                }
                            }
                        },
                        children: "\uD83D\uDE91"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "caption",
                        sx: {
                            color: '#000',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            textAlign: 'center'
                        },
                        children: "救护车赶往现场"
                    })
                ]
            }),
            showTextDisplay && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 100,
                    padding: 4
                },
                children: [
                    '紧急呼救，守护您的安全',
                    '同时联系多人',
                    '实时同步地理位置',
                    '多人同时音视频',
                    '手机自动向周边行人呼救'
                ].map((text, lineIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                        sx: {
                            marginBottom: 1.5,
                            minHeight: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            justifyContent: 'center'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                            variant: "h4",
                            sx: {
                                fontSize: {
                                    xs: '20px',
                                    sm: '24px',
                                    md: '28px'
                                },
                                fontWeight: 'bold',
                                color: '#1976D2',
                                textAlign: 'center',
                                lineHeight: 1.2
                            },
                            children: [
                                lineIndex <= currentTextIndex ? lineIndex === currentTextIndex ? text.substring(0, currentCharIndex) : text : '',
                                lineIndex === currentTextIndex && currentCharIndex < text.length && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                    component: "span",
                                    sx: {
                                        display: 'inline-block',
                                        width: '3px',
                                        height: '1em',
                                        backgroundColor: '#1976D2',
                                        marginLeft: '2px',
                                        animation: 'blink 1s infinite',
                                        '@keyframes blink': {
                                            '0%, 50%': {
                                                opacity: 1
                                            },
                                            '51%, 100%': {
                                                opacity: 0
                                            }
                                        }
                                    }
                                })
                            ]
                        })
                    }, lineIndex))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    position: 'absolute',
                    bottom: 8,
                    left: 8,
                    right: 8,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: 1,
                    padding: 1
                }
            })
        ]
    });
};
/* harmony default export */ const components_FallRescueAnimation = (FallRescueAnimation);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Animation.js
var Animation = __webpack_require__(61186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ExpandMore.js
var esm_ExpandMore = __webpack_require__(21985);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 6 modules
var AutoWebViewJs = __webpack_require__(13774);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/store/store.ts
var store = __webpack_require__(5123);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion_Accordion = __webpack_require__(20350);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary_AccordionSummary = __webpack_require__(56420);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails_AccordionDetails = __webpack_require__(29708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Divider/Divider.js
var Divider_Divider = __webpack_require__(56575);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip_Chip = __webpack_require__(688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/List.js + 1 modules
var List_List = __webpack_require__(90535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItem/ListItem.js + 4 modules
var ListItem_ListItem = __webpack_require__(48853);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip_Tooltip = __webpack_require__(36994);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/CheckCircle.js
var CheckCircle = __webpack_require__(34036);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Error.js
var esm_Error = __webpack_require__(59566);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Help.js
var Help = __webpack_require__(34319);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Info.js
var Info = __webpack_require__(22380);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Settings.js
var esm_Settings = __webpack_require__(52089);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Security.js
var Security = __webpack_require__(2950);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/is-in-android.ts
var is_in_android = __webpack_require__(63149);
;// ./src/components/pages/home/components/PermissionStatusPanel.tsx






// 与摔倒检测无关的权限ID列表
const FALL_DETECTION_EXCLUDED_PERMISSIONS = [
    'notification',
    'desktop_shortcut' // 桌面快捷方式 - 与摔倒检测无直接关联
];
const PermissionStatusPanel_PermissionStatusPanel = (param)=>{
    let { isExpanded, onStatsChange } = param;
    const [permissionsData, setPermissionsData] = (0,react.useState)(null);
    const [loading, setLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    const [infoDialogOpen, setInfoDialogOpen] = (0,react.useState)(false);
    const [selectedPermission, setSelectedPermission] = (0,react.useState)(null);
    const fetchPermissions = async ()=>{
        try {
            if (!is_in_android/* isRealInAndroid */.nd) return;
            setLoading(true);
            setError(null);
            // 权限刷新埋点
            (0,print/* trackingPrint */.f)({
                params: {
                    type: "用户操作",
                    title: "权限检查",
                    subtitle: "权限刷新-开始",
                    extra: {
                        timestamp: Date.now(),
                        isAndroid: is_in_android/* isRealInAndroid */.nd
                    }
                }
            });
            const script = "\n        var info = com.fanfanlo.emergencycall.manager.PermissionJSInterface.getAllPermissionsStatus();\n        info;\n      ";
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            if (!javaResultString) {
                throw new Error('No response from permission interface');
            }
            const data = JSON.parse(javaResultString);
            if (data.error) {
                throw new Error(data.error);
            }
            setPermissionsData(data);
            console.log('Permissions data loaded:', data);
            // 权限加载成功埋点
            (0,print/* trackingPrint */.f)({
                params: {
                    type: "系统事件",
                    title: "权限检查",
                    subtitle: "权限加载-成功",
                    extra: {
                        timestamp: Date.now(),
                        permissionsCount: data.permissions.length,
                        grantedCount: data.permissions.filter((p)=>p.status === 'granted').length,
                        deniedCount: data.permissions.filter((p)=>p.status === 'denied').length,
                        unknownCount: data.permissions.filter((p)=>p.status === 'unknown').length,
                        deviceBrand: data.deviceBrand,
                        apiLevel: data.apiLevel
                    }
                }
            });
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            setError(errorMessage);
            console.error('Error fetching permissions:', err);
            // 权限加载失败埋点
            (0,print/* trackingPrint */.f)({
                params: {
                    type: "系统异常",
                    title: "权限检查",
                    subtitle: "权限加载-失败",
                    extra: {
                        timestamp: Date.now(),
                        error: errorMessage,
                        isAndroid: is_in_android/* isRealInAndroid */.nd
                    }
                }
            });
        } finally{
            setLoading(false);
        }
    };
    // 过滤摔倒检测相关权限
    const filterRelevantPermissions = (permissions)=>{
        return permissions.filter((permission)=>!FALL_DETECTION_EXCLUDED_PERMISSIONS.includes(permission.id));
    };
    // 计算统计数据并上报
    const updateStats = (permissions)=>{
        // 先过滤出摔倒检测相关权限
        const relevantPermissions = filterRelevantPermissions(permissions);
        const granted = relevantPermissions.filter((p)=>p.status === 'granted').length;
        const denied = relevantPermissions.filter((p)=>p.status === 'denied').length;
        const unknown = relevantPermissions.filter((p)=>p.status === 'unknown').length;
        onStatsChange({
            granted,
            denied,
            unknown
        });
    };
    (0,react.useEffect)(()=>{
        fetchPermissions();
    }, []);
    // 定时刷新逻辑 - 只在展开时启动
    (0,react.useEffect)(()=>{
        let intervalId = null;
        if (isExpanded && permissionsData) {
            intervalId = setInterval(()=>{
                fetchPermissions();
            }, 1500); // 每1.5秒刷新一次
        }
        return ()=>{
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [
        isExpanded,
        permissionsData
    ]);
    // 监听权限数据变化，更新统计
    (0,react.useEffect)(()=>{
        if (permissionsData === null || permissionsData === void 0 ? void 0 : permissionsData.permissions) {
            updateStats(permissionsData.permissions);
        }
    }, [
        permissionsData,
        onStatsChange
    ]);
    const handleOpenSettings = (permission)=>{
        try {
            // 权限设置按钮点击埋点
            (0,print/* trackingPrint */.f)({
                params: {
                    type: "用户操作",
                    title: "权限设置",
                    subtitle: "设置按钮-点击",
                    extra: {
                        timestamp: Date.now(),
                        permissionId: permission.id,
                        permissionName: permission.name,
                        permissionType: permission.type,
                        currentStatus: permission.status,
                        canDetect: permission.canDetect
                    }
                }
            });
            const script = '\n        com.fanfanlo.emergencycall.manager.PermissionJSInterface.openPermissionSettings("'.concat(permission.id, '");\n      ');
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            console.log("Opening settings for permission: ".concat(permission.id));
            // 如果是消息推送权限，用户从设置页面返回后自动检查JPush状态
            if (permission.id === 'notification') {
                // 延迟执行，给用户时间完成权限设置
                setTimeout(()=>{
                    try {
                        const jpushScript = "\n              com.fanfanlo.emergencycall.jpush.JpushManager.checkAndReinitializeIfNeeded();\n            ";
                        AutoWebViewJs/* autoWebViewJs */.yx.callScript(jpushScript);
                        console.log('JPush reinitialization check triggered');
                        // 刷新权限状态
                        setTimeout(()=>fetchPermissions(), 1000);
                    } catch (jpushErr) {
                        console.error('Error checking JPush status:', jpushErr);
                        // JPush重新初始化失败埋点
                        (0,print/* trackingPrint */.f)({
                            params: {
                                type: "系统异常",
                                title: "JPush重初始化",
                                subtitle: "JPush-重初始化失败",
                                extra: {
                                    timestamp: Date.now(),
                                    error: jpushErr instanceof Error ? jpushErr.message : String(jpushErr)
                                }
                            }
                        });
                    }
                }, 3000); // 3秒后检查
            }
        } catch (err) {
            console.error('Error opening permission settings:', err);
            // 权限设置打开失败埋点
            (0,print/* trackingPrint */.f)({
                params: {
                    type: "系统异常",
                    title: "权限设置",
                    subtitle: "设置打开-失败",
                    extra: {
                        timestamp: Date.now(),
                        permissionId: permission.id,
                        error: err instanceof Error ? err.message : String(err)
                    }
                }
            });
        }
    };
    const handleConfirmLockScreenPermission = ()=>{
        try {
            // 锁屏权限确认埋点
            (0,print/* trackingPrint */.f)({
                params: {
                    type: "用户操作",
                    title: "锁屏权限",
                    subtitle: "权限确认-点击",
                    extra: {
                        timestamp: Date.now()
                    }
                }
            });
            const script = "\n        com.fanfanlo.emergencycall.manager.PermissionJSInterface.confirmLockScreenPermission();\n      ";
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            console.log('Confirmed lock screen permission');
            // 刷新权限状态
            setTimeout(()=>fetchPermissions(), 500);
        } catch (err) {
            console.error('Error confirming lock screen permission:', err);
            // 锁屏权限确认失败埋点
            (0,print/* trackingPrint */.f)({
                params: {
                    type: "系统异常",
                    title: "锁屏权限",
                    subtitle: "权限确认-失败",
                    extra: {
                        timestamp: Date.now(),
                        error: err instanceof Error ? err.message : String(err)
                    }
                }
            });
        }
    };
    const handleShowPermissionInfo = (permission)=>{
        // 权限信息查看埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "用户操作",
                title: "权限信息",
                subtitle: "信息按钮-点击",
                extra: {
                    timestamp: Date.now(),
                    permissionId: permission.id,
                    permissionName: permission.name,
                    permissionStatus: permission.status
                }
            }
        });
        setSelectedPermission(permission);
        setInfoDialogOpen(true);
    };
    const handleCloseInfoDialog = ()=>{
        // 权限信息对话框关闭埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "模态框操作",
                title: "权限信息",
                subtitle: "信息对话框-关闭",
                extra: {
                    timestamp: Date.now(),
                    permissionId: selectedPermission === null || selectedPermission === void 0 ? void 0 : selectedPermission.id
                }
            }
        });
        setInfoDialogOpen(false);
        setSelectedPermission(null);
    };
    const getPermissionReason = (permission)=>{
        const reasonMap = {
            'android.permission.ACCESS_FINE_LOCATION': '精确定位权限用于在紧急情况下获取您的准确位置信息，以便救援人员能够快速找到您。这对于户外活动、老人独居等场景下的紧急救助至关重要。',
            'android.permission.ACCESS_COARSE_LOCATION': '大概位置权限作为精确定位的备用选择，在精确定位不可用时仍能提供基本的位置信息，确保紧急情况下不会完全失去位置服务。',
            'android.permission.BODY_SENSORS': '身体传感器权限用于访问手机的加速度计、陀螺仪等传感器，实现跌倒检测功能。当检测到您可能发生跌倒时，系统会自动触发紧急呼叫，对老人和高危工作者尤为重要。',
            'android.permission.CAMERA': '相机权限用于在紧急情况下自动拍摄现场照片，为救援人员和家属提供重要的环境信息，帮助判断紧急情况的严重程度和选择合适的救援方案。',
            'android.permission.RECORD_AUDIO': '录音权限用于记录紧急情况发生时的环境声音，可以为救援人员提供重要线索，同时支持语音紧急呼叫功能，让您在无法操作手机时也能求救。',
            'android.permission.ACTIVITY_RECOGNITION': '身体活动识别权限用于识别您当前的活动状态(如走路、跑步、静止等)，结合传感器数据提高跌倒检测的准确性，减少误报的同时确保真正的紧急情况不会被遗漏。',
            'overlay': '悬浮窗权限允许应用在任何界面上显示紧急呼叫窗口，确保即使您在使用其他应用时，紧急呼叫功能也能立即激活，不会被其他应用界面阻挡。',
            'lock_screen_popup': '后台弹出界面权限确保应用在后台运行时仍能在检测到紧急情况时立即弹出呼叫界面，即使手机处于息屏或锁定状态也不会影响紧急功能的响应速度。',
            'lock_screen_display': '锁屏显示权限允许应用在手机锁屏状态下显示紧急信息和呼叫界面，确保紧急情况发生时不会因为屏幕锁定而延误救援时机。这对于意外昏迷等无法解锁手机的情况尤为重要。',
            'desktop_shortcut': '桌面快捷方式权限允许应用在桌面创建一键紧急呼叫的快捷图标，让您在紧急情况下能够更快速地启动求救功能，特别适合老年用户或紧急情况下的快速操作。',
            'notification': '消息推送权限用于接收紧急呼叫、跌倒检测警报、系统通知等重要消息。这是确保您能及时收到紧急信息和家人求救通知的关键权限，对于紧急救援场景至关重要。'
        };
        return reasonMap[permission.id] || '该权限对于应用的正常运行是必要的，请根据您的需要进行授权。';
    };
    const getPermissionImpact = (permission)=>{
        const impactMap = {
            'android.permission.ACCESS_FINE_LOCATION': '🚨 高影响：没有位置权限将无法在紧急情况下提供准确的位置信息给救援人员',
            'android.permission.ACCESS_COARSE_LOCATION': '⚠️ 中影响：作为位置服务的备用选择，建议配合精确位置一起授权',
            'android.permission.BODY_SENSORS': '🚨 高影响：没有此权限将无法实现自动跌倒检测功能',
            'android.permission.CAMERA': '⚠️ 中影响：无法自动拍摄现场照片，但不影响基本呼叫功能',
            'android.permission.RECORD_AUDIO': '⚠️ 中影响：无法录制环境音或使用语音功能，但不影响基本呼叫功能',
            'android.permission.ACTIVITY_RECOGNITION': '⚠️ 中影响：跌倒检测准确性可能降低，增加误报或漏报风险',
            'overlay': '🚨 高影响：无法在其他应用界面上显示紧急呼叫，可能错过紧急救援时机',
            'lock_screen_popup': '🚨 高影响：手机锁屏时无法自动弹出紧急呼叫界面',
            'lock_screen_display': '🚨 高影响：锁屏状态下无法显示紧急信息，可能延误救援',
            'desktop_shortcut': '💡 低影响：无法创建桌面快捷方式，但不影响应用内的紧急呼叫功能',
            'notification': '🚨 高影响：无法接收紧急推送消息，可能错过家人求救信号或重要安全警报'
        };
        return impactMap[permission.id] || '该权限的具体影响取决于您的使用场景。';
    };
    const getStatusIcon = (permission)=>{
        const iconProps = {
            fontSize: 18
        };
        switch(permission.status){
            case 'granted':
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircle/* default */.A, {
                    sx: {
                        color: 'success.main',
                        ...iconProps
                    }
                });
            case 'denied':
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Error/* default */.A, {
                    sx: {
                        color: 'error.main',
                        ...iconProps
                    }
                });
            case 'unknown':
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Help/* default */.A, {
                    sx: {
                        color: 'warning.main',
                        ...iconProps
                    }
                });
            default:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Help/* default */.A, {
                    sx: {
                        color: 'grey.500',
                        ...iconProps
                    }
                });
        }
    };
    const getStatusChip = (permission)=>{
        const statusConfig = {
            granted: {
                label: '✓',
                color: 'success'
            },
            denied: {
                label: '✗',
                color: 'error'
            },
            unknown: {
                label: '?',
                color: 'warning'
            }
        };
        const config = statusConfig[permission.status];
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip_Chip/* default */.A, {
            label: config.label,
            color: config.color,
            size: "small",
            sx: {
                minWidth: 24,
                height: 20,
                fontSize: '0.7rem',
                '& .MuiChip-label': {
                    px: 0.5
                }
            }
        });
    };
    const getTypeLabel = (type)=>{
        const typeLabels = {
            runtime: '运行时',
            special: '特殊',
            vendor: '厂商'
        };
        return typeLabels[type] || type;
    };
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "120px",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress_CircularProgress/* default */.A, {
                    size: 20
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                    variant: "caption",
                    sx: {
                        ml: 1
                    },
                    children: "加载中..."
                })
            ]
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert_Alert/* default */.A, {
            severity: "error",
            sx: {
                py: 1
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                    variant: "body2",
                    children: [
                        "权限检查失败: ",
                        error
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                    onClick: ()=>{
                        // 重试按钮点击埋点
                        (0,print/* trackingPrint */.f)({
                            params: {
                                type: "用户操作",
                                title: "权限检查",
                                subtitle: "重试按钮-点击",
                                extra: {
                                    timestamp: Date.now(),
                                    previousError: error
                                }
                            }
                        });
                        fetchPermissions();
                    },
                    size: "small",
                    sx: {
                        mt: 0.5
                    },
                    children: "重试"
                })
            ]
        });
    }
    if (!permissionsData) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert_Alert/* default */.A, {
            severity: "info",
            sx: {
                py: 1
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                variant: "body2",
                children: "无权限数据，请重新加载"
            })
        });
    }
    const { permissions, deviceBrand, apiLevel } = permissionsData;
    // 过滤出摔倒检测相关权限
    const relevantPermissions = filterRelevantPermissions(permissions);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper_Paper/* default */.A, {
        elevation: 1,
        sx: {
            p: 1
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List_List/* default */.A, {
                sx: {
                    py: 0
                },
                children: relevantPermissions.map((permission)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem_ListItem/* default */.Ay, {
                        sx: {
                            borderLeft: 2,
                            borderLeftColor: permission.status === 'granted' ? 'success.main' : permission.status === 'denied' ? 'error.main' : 'warning.main',
                            mb: 0.5,
                            py: 0.5,
                            px: 0.5,
                            borderRadius: 0.5,
                            bgcolor: 'grey.50',
                            display: 'block' // 改为block布局
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                display: "flex",
                                alignItems: "center",
                                mb: 0.5,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                        sx: {
                                            mr: 0.5
                                        },
                                        children: getStatusIcon(permission)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                        variant: "body2",
                                        fontWeight: "medium",
                                        sx: {
                                            flex: 1,
                                            minWidth: 0
                                        },
                                        children: permission.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip_Tooltip/* default */.A, {
                                        title: "查看权限说明",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton_IconButton/* default */.A, {
                                            size: "large",
                                            onClick: ()=>handleShowPermissionInfo(permission),
                                            sx: {
                                                mr: 0.5,
                                                p: 0.25
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Info/* default */.A, {
                                                sx: {
                                                    fontSize: 16,
                                                    color: 'primary.main'
                                                }
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mb: 0.5,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip_Chip/* default */.A, {
                                            label: getTypeLabel(permission.type),
                                            variant: "outlined",
                                            size: "small",
                                            sx: {
                                                fontSize: '0.65rem',
                                                height: 18,
                                                '& .MuiChip-label': {
                                                    px: 0.5,
                                                    py: 0
                                                }
                                            }
                                        }),
                                        !permission.canDetect && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                            variant: "caption",
                                            color: "textSecondary",
                                            sx: {
                                                fontSize: '0.65rem'
                                            },
                                            children: "需确认"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                display: "flex",
                                gap: 0.5,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                    variant: "outlined",
                                    size: "small",
                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Settings/* default */.A, {
                                        sx: {
                                            fontSize: 12
                                        }
                                    }),
                                    onClick: ()=>handleOpenSettings(permission),
                                    sx: {
                                        fontSize: '0.65rem',
                                        minWidth: 'auto',
                                        px: 0.5,
                                        py: 0.25,
                                        height: 24
                                    },
                                    children: "设置"
                                })
                            })
                        ]
                    }, permission.id))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog_Dialog/* default */.A, {
                open: infoDialogOpen,
                onClose: handleCloseInfoDialog,
                maxWidth: "sm",
                fullWidth: true,
                PaperProps: {
                    sx: {
                        mx: 1
                    } // 移动端适配
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle_DialogTitle/* default */.A, {
                        sx: {
                            pb: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                            display: "flex",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Security/* default */.A, {
                                    sx: {
                                        mr: 1,
                                        color: 'primary.main'
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                            variant: "h6",
                                            component: "div",
                                            children: selectedPermission === null || selectedPermission === void 0 ? void 0 : selectedPermission.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                            variant: "caption",
                                            color: "textSecondary",
                                            children: [
                                                selectedPermission && getTypeLabel(selectedPermission.type),
                                                "权限"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent_DialogContent/* default */.A, {
                        sx: {
                            pt: 0
                        },
                        children: selectedPermission && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 2,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                            variant: "subtitle2",
                                            sx: {
                                                mr: 1
                                            },
                                            children: "当前状态:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                            display: "flex",
                                            alignItems: "center",
                                            children: [
                                                getStatusIcon(selectedPermission),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                                    variant: "body2",
                                                    sx: {
                                                        ml: 0.5
                                                    },
                                                    children: selectedPermission.status === 'granted' ? '已授权' : selectedPermission.status === 'denied' ? '未授权' : '待确认'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider_Divider/* default */.A, {
                                    sx: {
                                        mb: 2
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                    mb: 2,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                            variant: "subtitle2",
                                            gutterBottom: true,
                                            color: "primary.main",
                                            children: "\uD83C\uDFAF 为什么需要这个权限？"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                            variant: "body2",
                                            color: "textSecondary",
                                            lineHeight: 1.6,
                                            children: getPermissionReason(selectedPermission)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider_Divider/* default */.A, {
                                    sx: {
                                        mb: 2
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                    mb: 1,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                            variant: "subtitle2",
                                            gutterBottom: true,
                                            color: "warning.main",
                                            children: "⚡ 不授权的影响"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                            variant: "body2",
                                            color: "textSecondary",
                                            lineHeight: 1.6,
                                            children: getPermissionImpact(selectedPermission)
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions_DialogActions/* default */.A, {
                        sx: {
                            px: 3,
                            pb: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                onClick: ()=>{
                                    // 权限信息"我知道了"按钮埋点
                                    (0,print/* trackingPrint */.f)({
                                        params: {
                                            type: "用户操作",
                                            title: "权限信息",
                                            subtitle: "我知道了-点击",
                                            extra: {
                                                timestamp: Date.now(),
                                                permissionId: selectedPermission === null || selectedPermission === void 0 ? void 0 : selectedPermission.id,
                                                permissionStatus: selectedPermission === null || selectedPermission === void 0 ? void 0 : selectedPermission.status
                                            }
                                        }
                                    });
                                    handleCloseInfoDialog();
                                },
                                color: "primary",
                                children: "我知道了"
                            }),
                            selectedPermission && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                variant: "contained",
                                onClick: ()=>{
                                    // 权限信息"去设置"按钮埋点
                                    (0,print/* trackingPrint */.f)({
                                        params: {
                                            type: "用户操作",
                                            title: "权限设置",
                                            subtitle: "去设置-对话框点击",
                                            extra: {
                                                timestamp: Date.now(),
                                                permissionId: selectedPermission.id,
                                                permissionName: selectedPermission.name,
                                                currentStatus: selectedPermission.status,
                                                fromDialog: true
                                            }
                                        }
                                    });
                                    handleOpenSettings(selectedPermission);
                                    handleCloseInfoDialog();
                                },
                                color: "primary",
                                children: "去设置"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl_FormControl = __webpack_require__(37780);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/InputLabel/InputLabel.js + 3 modules
var InputLabel_InputLabel = __webpack_require__(75090);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Select/Select.js + 10 modules
var Select_Select = __webpack_require__(2428);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/MenuItem.js + 2 modules
var MenuItem_MenuItem = __webpack_require__(82797);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack_Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/DragIndicator.js
var DragIndicator = __webpack_require__(9431);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Stop.js
var esm_Stop = __webpack_require__(13972);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/PlayArrow.js
var esm_PlayArrow = __webpack_require__(22503);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Delete.js
var esm_Delete = __webpack_require__(50807);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/VolumeUp.js
var esm_VolumeUp = __webpack_require__(93803);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Vibration.js
var Vibration = __webpack_require__(23134);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dnd-kit+core@6.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@dnd-kit/core/dist/core.esm.js + 1 modules
var core_esm = __webpack_require__(55047);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dnd-kit+sortable@10.0.0_@dnd-kit+core@6.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0__react@19.1.0/node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var sortable_esm = __webpack_require__(22800);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dnd-kit+utilities@3.2.2_react@19.1.0/node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var utilities_esm = __webpack_require__(34826);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(63624);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// __barrel_optimize__?names=debounce!=!../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js


;// ./src/components/pages/home/components/PreAlarmConfig.tsx









const PRE_ALARM_CONFIG_KEY = 'PRE_ALARM_ACTIONS_CONFIG';
const defaultSoundResources = [
    {
        id: 'siren_gentle',
        name: '缓和警报'
    },
    {
        id: 'beep_short',
        name: '短提示音'
    },
    {
        id: 'alarm_clock',
        name: '闹钟'
    }
];
const SortableActionItem = (param)=>{
    let { action, isPlaying, onUpdate, onRemove, onPreview, onStopPreview } = param;
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0,sortable_esm/* useSortable */.gl)({
        id: action.id
    });
    const style = {
        transform: utilities_esm/* CSS */.Ks.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.8 : 1,
        zIndex: isDragging ? 1 : 'auto'
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper_Paper/* default */.A, {
        ref: setNodeRef,
        style: style,
        elevation: isDragging ? 3 : 1,
        sx: {
            p: 2,
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            userSelect: 'none'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                ...attributes,
                ...listeners,
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'grab',
                    touchAction: 'none'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DragIndicator/* default */.A, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    flexGrow: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                    sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 1.5
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                            variant: "subtitle2",
                            children: action.type === 'sound' ? '声音' : '震动'
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                            size: "small",
                            type: "number",
                            label: "持续时间 (ms)",
                            value: action.duration,
                            onChange: (e)=>onUpdate(action.id, {
                                    duration: parseInt(e.target.value, 10) || 0
                                }),
                            sx: {
                                width: '100%'
                            }
                        }),
                        action.type === 'sound' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl_FormControl/* default */.A, {
                            size: "small",
                            sx: {
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel_InputLabel/* default */.A, {
                                    children: "声音类型"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Select_Select/* default */.A, {
                                    value: action.resourceId || '',
                                    label: "声音类型",
                                    onChange: (e)=>onUpdate(action.id, {
                                            resourceId: e.target.value
                                        }),
                                    startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip_Tooltip/* default */.A, {
                                        title: isPlaying ? "停止" : "试听",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton_IconButton/* default */.A, {
                                            size: "small",
                                            onClick: ()=>isPlaying ? onStopPreview() : onPreview(action.resourceId),
                                            sx: {
                                                mr: 1
                                            },
                                            children: isPlaying ? /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Stop/* default */.A, {
                                                fontSize: "small"
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_PlayArrow/* default */.A, {
                                                fontSize: "small"
                                            })
                                        })
                                    }),
                                    children: defaultSoundResources.map((sound)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem_MenuItem/* default */.A, {
                                            value: sound.id,
                                            children: sound.name
                                        }, sound.id))
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton_IconButton/* default */.A, {
                onClick: ()=>onRemove(action.id),
                size: "small",
                color: "error",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Delete/* default */.A, {})
            })
        ]
    });
};
// 简化版本，去掉外层Paper包装，只保留内容
const PreAlarmConfig = ()=>{
    const [config, setConfig] = (0,react.useState)(null);
    const [expanded, setExpanded] = (0,react.useState)(false);
    const [playingSoundId, setPlayingSoundId] = (0,react.useState)(null);
    const debouncedWrite = (0,react.useCallback)((0,lodash.debounce)((newConfig)=>{
        store/* autoJsStoreUtils */.b.write(PRE_ALARM_CONFIG_KEY, newConfig);
    }, 500), []);
    const sensors = (0,core_esm/* useSensors */.FR)((0,core_esm/* useSensor */.MS)(core_esm/* PointerSensor */.AN, {
        activationConstraint: {
            distance: 8
        }
    }), (0,core_esm/* useSensor */.MS)(core_esm/* TouchSensor */.IG, {
        activationConstraint: {
            delay: 250,
            tolerance: 5
        }
    }), (0,core_esm/* useSensor */.MS)(core_esm/* KeyboardSensor */.uN, {
        coordinateGetter: sortable_esm/* sortableKeyboardCoordinates */.JR
    }));
    react.useEffect(()=>{
        const loadConfig = async ()=>{
            const storedConfig = await store/* autoJsStoreUtils */.b.read(PRE_ALARM_CONFIG_KEY);
            if (storedConfig) {
                const actionsWithIds = storedConfig.actions.map((action)=>({
                        ...action,
                        id: action.id || "action-".concat(Math.random().toString(36).substr(2, 9))
                    }));
                // 重新计算maxWaitDuration以确保一致性
                const calculatedDuration = calculateTotalDuration(actionsWithIds);
                setConfig({
                    ...storedConfig,
                    actions: actionsWithIds,
                    maxWaitDuration: calculatedDuration
                });
            } else {
                // 创建默认动作：震动8秒 + siren_gentle声音10秒
                const defaultActions = [
                    {
                        id: "action-".concat(Date.now(), "-vibration"),
                        type: 'vibration',
                        duration: 8000
                    },
                    {
                        id: "action-".concat(Date.now(), "-sound"),
                        type: 'sound',
                        duration: 10000,
                        resourceId: 'siren_gentle'
                    }
                ];
                const totalDuration = calculateTotalDuration(defaultActions);
                setConfig({
                    enabled: true,
                    actions: defaultActions,
                    maxWaitDuration: totalDuration
                });
            }
        };
        loadConfig();
    }, []);
    // 计算所有动作的总时长
    const calculateTotalDuration = (actions)=>{
        return actions.reduce((total, action)=>total + action.duration, 0);
    };
    const updateConfig = (0,react.useCallback)((updates)=>{
        setConfig((prev)=>{
            if (!prev) return null;
            const newConfig = {
                ...prev,
                ...updates
            };
            debouncedWrite(newConfig);
            return newConfig;
        });
    }, [
        debouncedWrite
    ]);
    // 自动计算并更新maxWaitDuration
    const updateConfigWithCalculatedDuration = (0,react.useCallback)((updates)=>{
        setConfig((prev)=>{
            if (!prev) return null;
            const newConfig = {
                ...prev,
                ...updates
            };
            // 如果动作发生变化，自动计算总时长
            if (updates.actions) {
                newConfig.maxWaitDuration = calculateTotalDuration(updates.actions);
            }
            debouncedWrite(newConfig);
            return newConfig;
        });
    }, [
        debouncedWrite
    ]);
    const handleToggleEnabled = (event)=>{
        updateConfigWithCalculatedDuration({
            enabled: event.target.checked
        });
    };
    const handleAddAction = (type)=>{
        const newAction = {
            id: "action-".concat(Date.now()),
            type,
            duration: 9000,
            ...type === 'sound' && {
                resourceId: defaultSoundResources[0].id
            }
        };
        updateConfigWithCalculatedDuration({
            actions: [
                ...(config === null || config === void 0 ? void 0 : config.actions) || [],
                newAction
            ]
        });
    };
    const handleUpdateAction = (id, updates)=>{
        if (!config) return;
        updateConfigWithCalculatedDuration({
            actions: config.actions.map((action)=>action.id === id ? {
                    ...action,
                    ...updates
                } : action)
        });
    };
    const handleRemoveAction = (id)=>{
        if (!config) return;
        updateConfigWithCalculatedDuration({
            actions: config.actions.filter((action)=>action.id !== id)
        });
    };
    const handleDragEnd = (event)=>{
        const { active, over } = event;
        if (!config || !over || active.id === over.id) return;
        const oldIndex = config.actions.findIndex((a)=>a.id === active.id);
        const newIndex = config.actions.findIndex((a)=>a.id === over.id);
        if (oldIndex !== -1 && newIndex !== -1) {
            updateConfigWithCalculatedDuration({
                actions: (0,sortable_esm/* arrayMove */.be)(config.actions, oldIndex, newIndex)
            });
        }
    };
    const handlePreviewSound = (resourceId)=>{
        if (!resourceId) return;
        handleStopSound();
        console.log("[WebView] Attempting to preview sound. resourceId: ".concat(resourceId));
        if (window.SoundManager) {
            window.SoundManager.previewSound(resourceId);
            setPlayingSoundId(resourceId);
        } else {
            console.warn('SoundManager JavascriptInterface is not available.');
        }
    };
    const handleStopSound = ()=>{
        if (window.SoundManager) {
            window.SoundManager.stopPreview();
        }
        setPlayingSoundId(null);
    };
    if (!config) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
            sx: {
                p: 2,
                textAlign: 'center'
            },
            children: "加载中..."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                variant: "h6",
                                children: "防误触"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch_Switch/* default */.A, {
                                    checked: config.enabled,
                                    onChange: handleToggleEnabled,
                                    color: "primary"
                                }),
                                label: config.enabled ? '已启用' : '已禁用'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton_IconButton/* default */.A, {
                        onClick: ()=>setExpanded(!expanded),
                        sx: {
                            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease-in-out'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ExpandMore/* default */.A, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse_Collapse/* default */.A, {
                in: expanded,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper_Paper/* default */.A, {
                    elevation: 0,
                    sx: {
                        p: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                            sx: {
                                mb: 3
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                    variant: "subtitle2",
                                    gutterBottom: true,
                                    color: "text.secondary",
                                    children: [
                                        "预警总时长: ",
                                        config.maxWaitDuration,
                                        "毫秒 (",
                                        (config.maxWaitDuration / 1000).toFixed(1),
                                        "秒)"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    sx: {
                                        fontSize: '0.875rem'
                                    },
                                    children: "根据所有动作时长自动计算"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider_Divider/* default */.A, {
                            sx: {
                                my: 2
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                            sx: {
                                mb: 2
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                    sx: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mb: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                            variant: "subtitle2",
                                            children: [
                                                "预警动作 (",
                                                config.actions.length,
                                                ")"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack/* default */.A, {
                                            direction: "row",
                                            spacing: 1,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                                    variant: "outlined",
                                                    size: "small",
                                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_VolumeUp/* default */.A, {}),
                                                    onClick: ()=>handleAddAction('sound'),
                                                    children: "添加声音"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                                    variant: "outlined",
                                                    size: "small",
                                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Vibration/* default */.A, {}),
                                                    onClick: ()=>handleAddAction('vibration'),
                                                    children: "添加震动"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                config.actions.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper_Paper/* default */.A, {
                                    variant: "outlined",
                                    sx: {
                                        p: 3,
                                        textAlign: 'center',
                                        color: 'text.secondary'
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                        children: "暂无报警动作，请点击上方按钮添加"
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(core_esm/* DndContext */.Mp, {
                                    sensors: sensors,
                                    collisionDetection: core_esm/* closestCenter */.fp,
                                    onDragEnd: handleDragEnd,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(sortable_esm/* SortableContext */.gB, {
                                        items: config.actions.map((a)=>a.id),
                                        strategy: sortable_esm/* verticalListSortingStrategy */._G,
                                        children: config.actions.map((action)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SortableActionItem, {
                                                action: action,
                                                isPlaying: playingSoundId === action.resourceId,
                                                onUpdate: handleUpdateAction,
                                                onRemove: handleRemoveAction,
                                                onPreview: handlePreviewSound,
                                                onStopPreview: handleStopSound
                                            }, action.id))
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_PreAlarmConfig = (PreAlarmConfig);

;// ./src/components/pages/home/components/EmergencyTTSSettings.tsx





// 简化版本的紧急呼救语音设置组件
// 复用原组件的功能，但去掉外层包装
const components_EmergencyTTSSettings_EmergencyTTSSettings = ()=>{
    const [showOriginal, setShowOriginal] = useState(false);
    return /*#__PURE__*/ _jsxs(Box, {
        children: [
            /*#__PURE__*/ _jsxs(Box, {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ _jsxs(Box, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        },
                        children: [
                            /*#__PURE__*/ _jsx(VolumeUp, {}),
                            /*#__PURE__*/ _jsx(Typography, {
                                variant: "subtitle2",
                                children: "紧急呼救语音"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(Button, {
                        variant: "outlined",
                        size: "small",
                        startIcon: showOriginal ? /*#__PURE__*/ _jsx(ExpandLess, {}) : /*#__PURE__*/ _jsx(Settings, {}),
                        onClick: ()=>setShowOriginal(!showOriginal),
                        children: showOriginal ? '收起设置' : '设置'
                    })
                ]
            }),
            !showOriginal && /*#__PURE__*/ _jsx(Alert, {
                severity: "info",
                sx: {
                    mb: 2
                },
                children: /*#__PURE__*/ _jsx(Typography, {
                    variant: "body2",
                    children: "配置紧急情况下播放的语音内容，支持文字转语音和自定义音频文件"
                })
            }),
            showOriginal && /*#__PURE__*/ _jsx(Paper, {
                elevation: 0,
                sx: {
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ _jsx(OriginalEmergencyTTSSettings, {})
            })
        ]
    });
};
/* harmony default export */ const components_EmergencyTTSSettings = ((/* unused pure expression or super */ null && (components_EmergencyTTSSettings_EmergencyTTSSettings)));

;// ./src/components/pages/home/components/index.ts



// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText_ListItemText = __webpack_require__(63337);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/LinearProgress/LinearProgress.js + 1 modules
var LinearProgress_LinearProgress = __webpack_require__(96214);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Slider/Slider.js + 6 modules
var Slider_Slider = __webpack_require__(20321);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Snackbar/Snackbar.js + 5 modules
var Snackbar_Snackbar = __webpack_require__(57580);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Refresh.js
var esm_Refresh = __webpack_require__(18531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/InsertDriveFile.js
var esm_InsertDriveFile = __webpack_require__(14161);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/MusicNote.js
var MusicNote = __webpack_require__(99195);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Star.js
var esm_Star = __webpack_require__(97708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/StarBorder.js
var esm_StarBorder = __webpack_require__(8882);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Share.js
var esm_Share = __webpack_require__(97187);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Mic.js
var esm_Mic = __webpack_require__(21607);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/CloudUpload.js
var esm_CloudUpload = __webpack_require__(23676);
;// ./src/components/pages/home/components/VoiceEmergencySettings.tsx





// 默认设置
const DEFAULT_TTS_SETTINGS = {
    enabled: false,
    message: '请帮我从上衣右边口袋拿出降压药，喂我服下两颗，谢谢。我叫某某某，请帮我拨打我大儿子电话，13911119999，他叫某某。如果您是医生，我的病例可以通过我的蓝牙看到。谢谢您的帮助！',
    repeatInterval: 3000,
    voiceSpeed: 1.0,
    voicePitch: 1.0,
    lastUpdated: Date.now(),
    useCustomAudio: false
};
const VoiceEmergencySettings_DEFAULT_VOICE_CONFIG = {
    lastUpdated: Date.now()
};
const VoiceEmergencySettings_TTS_SETTINGS_KEY = 'emergencyTTSSettings';
const VoiceEmergencySettings_VOICE_CONFIG_KEY = 'voiceEmergencyConfig';
const AUDIO_FILE_UPLOAD_SUCCESS_EVENT = 'audioFileUploadSuccess';
const VoiceEmergencySettings = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [settings, setSettings] = (0,react.useState)(DEFAULT_TTS_SETTINGS);
    const [voiceConfig, setVoiceConfig] = (0,react.useState)(VoiceEmergencySettings_DEFAULT_VOICE_CONFIG);
    const [fileList, setFileList] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    const [expanded, setExpanded] = (0,react.useState)(false);
    const [isRecording, setIsRecording] = (0,react.useState)(false);
    const [playingFile, setPlayingFile] = (0,react.useState)(null);
    const [showSuccess, setShowSuccess] = (0,react.useState)(false);
    const [showError, setShowError] = (0,react.useState)(false);
    const [errorMessage, setErrorMessage] = (0,react.useState)('');
    const [successMessage, setSuccessMessage] = (0,react.useState)('');
    const [ttsAvailable, setTtsAvailable] = (0,react.useState)(null);
    // 录制区域状态
    const [recordText, setRecordText] = (0,react.useState)(DEFAULT_TTS_SETTINGS.message);
    const [recordSpeed, setRecordSpeed] = (0,react.useState)(1.0);
    const [recordPitch, setRecordPitch] = (0,react.useState)(1.0);
    const [showRecordDialog, setShowRecordDialog] = (0,react.useState)(false);
    // 文件上传相关状态
    const [isUploading, setIsUploading] = (0,react.useState)(false);
    const [uploadProgress, setUploadProgress] = (0,react.useState)(0);
    const [supportedFormats, setSupportedFormats] = (0,react.useState)(null);
    // 加载设置和配置
    const loadData = (0,react.useCallback)(async ()=>{
        try {
            setLoading(true);
            // 加载TTS设置
            const savedSettings = await store/* autoJsStoreUtils */.b.read(VoiceEmergencySettings_TTS_SETTINGS_KEY, DEFAULT_TTS_SETTINGS);
            setSettings(savedSettings);
            // 加载语音配置
            const savedConfig = await store/* autoJsStoreUtils */.b.read(VoiceEmergencySettings_VOICE_CONFIG_KEY, VoiceEmergencySettings_DEFAULT_VOICE_CONFIG);
            setVoiceConfig(savedConfig);
            // 检查TTS可用性
            checkTTSAvailability();
            // 加载文件列表
            loadFileList();
            // 加载支持的音频格式
            loadSupportedFormats();
        } catch (err) {
            console.error('加载数据失败:', err);
            setErrorMessage('加载设置失败');
            setShowError(true);
        } finally{
            setLoading(false);
        }
    }, []);
    (0,react.useEffect)(()=>{
        const handleAudioUploadSuccess = (event)=>{
            console.log('收到音频上传成功事件:', event.detail);
            // 直接刷新文件列表（内联逻辑避免依赖循环）
            try {
                const script = "com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.getFileList()";
                const { javaResultString: listJson } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                const files = JSON.parse(listJson || "[]");
                const filesWithType = files.map((file)=>({
                        ...file,
                        type: file.type || 'general',
                        isDefault: file.isDefault || false,
                        source: file.source || 'recorded'
                    }));
                setFileList(filesWithType);
            } catch (error) {
                console.error('刷新文件列表失败:', error);
            }
            // 显示成功消息
            setSuccessMessage("音频文件上传成功: ".concat(event.detail.fileName));
            setShowSuccess(true);
        };
        window.addEventListener(AUDIO_FILE_UPLOAD_SUCCESS_EVENT, handleAudioUploadSuccess);
        loadData();
        // 清理函数
        return ()=>{
            window.removeEventListener(AUDIO_FILE_UPLOAD_SUCCESS_EVENT, handleAudioUploadSuccess);
        };
    }, [
        loadData
    ]);
    // 暴露重新加载方法给父组件
    (0,react.useImperativeHandle)(ref, ()=>({
            reloadConfig: loadData
        }), [
        loadData
    ]);
    (0,react.useEffect)(()=>{
        loadData();
    }, [
        loadData
    ]);
    // 加载支持的音频格式
    const loadSupportedFormats = (0,react.useCallback)(()=>{
        try {
            const script = "com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.getSupportedAudioFormats()";
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            const formats = JSON.parse(javaResultString || '{}');
            setSupportedFormats(formats);
        } catch (error) {
            console.error('加载支持格式失败:', error);
            setSupportedFormats({
                formats: [
                    'mp3',
                    'wav',
                    'm4a',
                    'aac'
                ],
                maxFileSizeMB: 10,
                maxDurationSeconds: 60,
                recommendedDurationSeconds: 30
            });
        }
    }, []);
    // 选择并上传音频文件
    const handleSelectAndUploadAudioFile = (0,react.useCallback)(async ()=>{
        if (isUploading) return;
        try {
            setIsUploading(true);
            setUploadProgress(0);
            const script = "com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.selectAndUploadAudioFile()";
            // 模拟上传进度
            const progressInterval = setInterval(()=>{
                setUploadProgress((prev)=>{
                    if (prev >= 90) {
                        clearInterval(progressInterval);
                        return 90;
                    }
                    return prev + 10;
                });
            }, 300);
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            const result = JSON.parse(javaResultString || '{}');
            clearInterval(progressInterval);
            setUploadProgress(100);
            if (result.success) {
                setSuccessMessage('音频文件上传成功！');
                setShowSuccess(true);
                // 刷新文件列表
                try {
                    const script = "com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.getFileList()";
                    const { javaResultString: listJson } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                    const files = JSON.parse(listJson || "[]");
                    const filesWithType = files.map((file)=>({
                            ...file,
                            type: file.type || 'general',
                            isDefault: file.isDefault || false,
                            source: file.source || 'recorded'
                        }));
                    setFileList(filesWithType);
                } catch (error) {
                    console.error('刷新文件列表失败:', error);
                }
            } else {
                setErrorMessage(result.message || '上传失败');
                setShowError(true);
            }
        } catch (error) {
            console.error('文件上传失败:', error);
            setErrorMessage('文件上传异常：' + error.message);
            setShowError(true);
        } finally{
            setIsUploading(false);
            setUploadProgress(0);
        }
    }, [
        isUploading
    ]);
    // 检查TTS可用性
    const checkTTSAvailability = (0,react.useCallback)(()=>{
        try {
            const script = "com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.isTTSAvailable()";
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            setTtsAvailable(javaResultString === 'true');
        } catch (error) {
            console.error('检查TTS可用性失败:', error);
            setTtsAvailable(false);
        }
    }, []);
    // 加载文件列表
    const loadFileList = (0,react.useCallback)(()=>{
        try {
            const script = "com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.getFileList()";
            const { javaResultString: listJson } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            console.log('加载文件列表:', listJson);
            const files = JSON.parse(listJson || "[]");
            // 为现有文件设置默认类型（兼容性处理）
            const filesWithType = files.map((file)=>({
                    ...file,
                    type: file.type || 'general',
                    isDefault: file.isDefault || false,
                    source: file.source || 'recorded'
                }));
            setFileList(filesWithType);
        } catch (error) {
            console.error('加载文件列表失败:', error);
            setFileList([]);
        }
    }, []);
    // 保存TTS设置
    const saveTTSSettings = async (newSettings)=>{
        try {
            const settingsToSave = {
                ...newSettings,
                lastUpdated: Date.now()
            };
            await store/* autoJsStoreUtils */.b.write(VoiceEmergencySettings_TTS_SETTINGS_KEY, settingsToSave);
            setSettings(settingsToSave);
            setSuccessMessage('设置保存成功');
            setShowSuccess(true);
        } catch (err) {
            console.error('保存TTS设置失败:', err);
            setErrorMessage('保存设置失败');
            setShowError(true);
        }
    };
    // 保存语音配置
    const saveVoiceConfig = async (newConfig)=>{
        try {
            const configToSave = {
                ...newConfig,
                lastUpdated: Date.now()
            };
            await store/* autoJsStoreUtils */.b.write(VoiceEmergencySettings_VOICE_CONFIG_KEY, configToSave);
            setVoiceConfig(configToSave);
        } catch (err) {
            console.error('保存语音配置失败:', err);
            setErrorMessage('保存配置失败');
            setShowError(true);
        }
    };
    // 设置为默认音频
    const setAsDefaultAudio = (0,react.useCallback)(async (filePath, type)=>{
        try {
            const newConfig = {
                ...voiceConfig
            };
            if (type === 'medical') {
                newConfig.medicalDefault = filePath;
            } else {
                newConfig.securityDefault = filePath;
            }
            await saveVoiceConfig(newConfig);
            // 更新文件列表中的默认标记
            const updatedFiles = fileList.map((file)=>({
                    ...file,
                    isDefault: file.filePath === filePath && file.type === type
                }));
            setFileList(updatedFiles);
            setSuccessMessage("已设置为".concat(type === 'medical' ? '医疗' : '安全', "呼救默认音频"));
            setShowSuccess(true);
        } catch (error) {
            setErrorMessage('设置默认音频失败');
            setShowError(true);
        }
    }, [
        voiceConfig,
        fileList
    ]);
    // 录制TTS
    const handleRecord = (0,react.useCallback)(()=>{
        if (!recordText.trim()) {
            setErrorMessage('请输入要录制的文字');
            setShowError(true);
            return;
        }
        if (!ttsAvailable) {
            setErrorMessage('当前设备不支持TTS功能');
            setShowError(true);
            return;
        }
        setIsRecording(true);
        try {
            const script = 'com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.recordTTS("'.concat(recordText.replace(/"/g, '\\"'), '", null, ').concat(recordSpeed, ", ").concat(recordPitch, ")");
            const { javaResultString: resultJson } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            const result = JSON.parse(resultJson);
            setIsRecording(false);
            if (result.success) {
                setSuccessMessage(result.message);
                setShowSuccess(true);
                setShowRecordDialog(false);
                loadFileList();
            } else {
                setErrorMessage(result.message);
                setShowError(true);
            }
        } catch (error) {
            setIsRecording(false);
            setErrorMessage('录制失败：' + error.message);
            setShowError(true);
        }
    }, [
        recordText,
        recordSpeed,
        recordPitch,
        ttsAvailable,
        loadFileList
    ]);
    // 播放文件
    const handlePlayFile = (0,react.useCallback)((filePath)=>{
        try {
            const stopScript = "com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.stopPlayback()";
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(stopScript);
            if (playingFile === filePath) {
                setPlayingFile(null);
                return;
            }
            const script = 'com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.playFile("'.concat(filePath.replace(/"/g, '\\"'), '")');
            const { javaResultString: success } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            if (success === 'true') {
                setPlayingFile(filePath);
                setTimeout(()=>setPlayingFile(null), 3000);
            } else {
                setErrorMessage('播放失败');
                setShowError(true);
            }
        } catch (error) {
            setErrorMessage('播放异常：' + error.message);
            setShowError(true);
        }
    }, [
        playingFile
    ]);
    // 分享文件
    const handleShareFile = (0,react.useCallback)((filePath)=>{
        try {
            const script = 'com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.shareFile("'.concat(filePath.replace(/"/g, '\\"'), '", "紧急呼救语音")');
            const { javaResultString: success } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            if (success !== 'true') {
                setErrorMessage('分享失败');
                setShowError(true);
            }
        } catch (error) {
            setErrorMessage('分享异常：' + error.message);
            setShowError(true);
        }
    }, []);
    // 删除文件
    const handleDeleteFile = (0,react.useCallback)((filePath)=>{
        if (window.confirm('确定要删除这个文件吗？')) {
            try {
                const script = 'com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.deleteFile("'.concat(filePath.replace(/"/g, '\\"'), '")');
                const { javaResultString: success } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                if (success === 'true') {
                    setSuccessMessage('文件删除成功');
                    setShowSuccess(true);
                    loadFileList();
                } else {
                    setErrorMessage('删除失败');
                    setShowError(true);
                }
            } catch (error) {
                setErrorMessage('删除异常：' + error.message);
                setShowError(true);
            }
        }
    }, [
        loadFileList
    ]);
    // 设置变更处理
    const handleSettingChange = (key, value)=>{
        const newSettings = {
            ...settings,
            [key]: value
        };
        if (newSettings.enabled && !newSettings.useCustomAudio && !newSettings.message.trim()) {
            setErrorMessage('启用TTS功能时，呼救文字不能为空');
            setShowError(true);
            return;
        }
        setSettings(newSettings);
        saveTTSSettings(newSettings);
    };
    // 保存设置
    const handleSaveSettings = ()=>{
        if (settings.enabled && !settings.useCustomAudio && !settings.message.trim()) {
            setErrorMessage('启用TTS功能时，呼救文字不能为空');
            setShowError(true);
            return;
        }
        saveTTSSettings(settings);
    };
    // 格式化文件大小
    const formatFileSize = (bytes)=>{
        if (bytes < 1024) return "".concat(bytes, " B");
        if (bytes < 1024 * 1024) return "".concat((bytes / 1024).toFixed(1), " KB");
        return "".concat((bytes / (1024 * 1024)).toFixed(1), " MB");
    };
    // 格式化时间
    const formatTime = (timestamp)=>{
        return new Date(timestamp).toLocaleString();
    };
    // 格式化时长
    const formatDuration = (milliseconds)=>{
        if (!milliseconds || milliseconds <= 0) return '';
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        if (minutes > 0) {
            return "".concat(minutes, ":").concat(remainingSeconds.toString().padStart(2, '0'));
        }
        return "".concat(seconds, "s");
    };
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
            sx: {
                p: 2,
                textAlign: 'center'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                children: "加载中..."
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            mb: 3
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                variant: "h6",
                                sx: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                },
                                children: "语音呼救"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch_Switch/* default */.A, {
                                    checked: settings.enabled,
                                    onChange: (e)=>handleSettingChange('enabled', e.target.checked),
                                    color: "primary"
                                }),
                                label: settings.enabled ? '已启用' : '已禁用'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton_IconButton/* default */.A, {
                        onClick: ()=>setExpanded(!expanded),
                        sx: {
                            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease-in-out'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ExpandMore/* default */.A, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse_Collapse/* default */.A, {
                in: expanded,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper_Paper/* default */.A, {
                    elevation: 0,
                    sx: {
                        p: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                            sx: {
                                mb: 3
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                    sx: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mb: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                            variant: "subtitle2",
                                            fontWeight: "bold",
                                            children: [
                                                "已有录音 (",
                                                fileList.length,
                                                ")"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                            sx: {
                                                display: 'flex',
                                                gap: 1
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                                variant: "outlined",
                                                size: "small",
                                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Refresh/* default */.A, {}),
                                                onClick: loadFileList
                                            })
                                        })
                                    ]
                                }),
                                fileList.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper_Paper/* default */.A, {
                                    variant: "outlined",
                                    sx: {
                                        p: 3,
                                        textAlign: 'center',
                                        color: 'text.secondary'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                            children: "暂无录音文件"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                            variant: "body2",
                                            sx: {
                                                mt: 1
                                            },
                                            children: '点击"录制新语音"创建个性化呼救语音'
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(List_List/* default */.A, {
                                    sx: {
                                        bgcolor: 'background.paper',
                                        borderRadius: 1,
                                        border: '1px solid',
                                        borderColor: 'divider'
                                    },
                                    children: fileList.map((file, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem_ListItem/* default */.Ay, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText_ListItemText/* default */.A, {
                                                        primary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                                            sx: {
                                                                width: '100%'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                                                    sx: {
                                                                        display: 'flex',
                                                                        alignItems: 'flex-start',
                                                                        gap: 1,
                                                                        mb: 1
                                                                    },
                                                                    children: [
                                                                        file.source === 'uploaded' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_InsertDriveFile/* default */.A, {
                                                                            fontSize: "small",
                                                                            sx: {
                                                                                mt: 0.2
                                                                            }
                                                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MusicNote/* default */.A, {
                                                                            fontSize: "small",
                                                                            sx: {
                                                                                mt: 0.2
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                                                            variant: "body1",
                                                                            sx: {
                                                                                flex: 1,
                                                                                minWidth: 0,
                                                                                wordBreak: 'break-word',
                                                                                lineHeight: 1.4
                                                                            },
                                                                            children: file.fileName
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                                                    sx: {
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: 1,
                                                                        flexWrap: 'wrap',
                                                                        mb: 1
                                                                    },
                                                                    children: [
                                                                        playingFile === file.filePath && /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip_Chip/* default */.A, {
                                                                            size: "small",
                                                                            label: "播放中",
                                                                            color: "primary"
                                                                        }),
                                                                        file.isDefault && /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip_Chip/* default */.A, {
                                                                            size: "small",
                                                                            label: "默认",
                                                                            color: "success",
                                                                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Star/* default */.A, {})
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                                                    sx: {
                                                                        display: 'flex',
                                                                        gap: 1,
                                                                        mt: 1
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton_IconButton/* default */.A, {
                                                                            size: "small",
                                                                            onClick: ()=>handlePlayFile(file.filePath),
                                                                            color: playingFile === file.filePath ? "primary" : "default",
                                                                            title: "播放/停止",
                                                                            sx: {
                                                                                border: '1px solid',
                                                                                borderColor: 'divider',
                                                                                '&:hover': {
                                                                                    backgroundColor: 'action.hover'
                                                                                }
                                                                            },
                                                                            children: playingFile === file.filePath ? /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Stop/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_PlayArrow/* default */.A, {})
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton_IconButton/* default */.A, {
                                                                            size: "small",
                                                                            onClick: ()=>setAsDefaultAudio(file.filePath, 'medical'),
                                                                            color: voiceConfig.medicalDefault === file.filePath ? "warning" : "default",
                                                                            title: "设为医疗呼救默认",
                                                                            sx: {
                                                                                border: '1px solid',
                                                                                borderColor: 'divider',
                                                                                '&:hover': {
                                                                                    backgroundColor: 'action.hover'
                                                                                }
                                                                            },
                                                                            children: voiceConfig.medicalDefault === file.filePath ? /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Star/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_StarBorder/* default */.A, {})
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton_IconButton/* default */.A, {
                                                                            size: "small",
                                                                            onClick: ()=>handleShareFile(file.filePath),
                                                                            title: "分享",
                                                                            sx: {
                                                                                border: '1px solid',
                                                                                borderColor: 'divider',
                                                                                '&:hover': {
                                                                                    backgroundColor: 'action.hover'
                                                                                }
                                                                            },
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Share/* default */.A, {})
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton_IconButton/* default */.A, {
                                                                            size: "small",
                                                                            onClick: ()=>handleDeleteFile(file.filePath),
                                                                            color: "error",
                                                                            title: "删除",
                                                                            sx: {
                                                                                border: '1px solid',
                                                                                borderColor: 'divider',
                                                                                '&:hover': {
                                                                                    backgroundColor: 'action.hover'
                                                                                }
                                                                            },
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Delete/* default */.A, {})
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        secondary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                                                    variant: "body2",
                                                                    color: "text.secondary",
                                                                    children: [
                                                                        "大小: ",
                                                                        formatFileSize(file.fileSize),
                                                                        " | 创建: ",
                                                                        formatTime(file.createTime),
                                                                        file.duration && file.duration > 0 && " | ".concat(formatDuration(file.duration))
                                                                    ]
                                                                }),
                                                                file.mimeType && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                                                    variant: "caption",
                                                                    color: "text.secondary",
                                                                    sx: {
                                                                        display: 'block'
                                                                    },
                                                                    children: file.mimeType
                                                                })
                                                            ]
                                                        }),
                                                        sx: {
                                                            pr: 2
                                                        }
                                                    })
                                                }),
                                                index < fileList.length - 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider_Divider/* default */.A, {})
                                            ]
                                        }, file.filePath))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider_Divider/* default */.A, {
                            sx: {
                                my: 3
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                variant: "outlined",
                                size: "small",
                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Mic/* default */.A, {}),
                                onClick: ()=>setShowRecordDialog(true),
                                disabled: !ttsAvailable,
                                children: "文字转语音"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider_Divider/* default */.A, {
                            sx: {
                                my: 3
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                            sx: {
                                mb: 3
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                    variant: "subtitle2",
                                    fontWeight: "bold",
                                    sx: {
                                        mb: 2
                                    },
                                    children: "上传音频文件"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                    variant: "outlined",
                                    startIcon: isUploading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress_CircularProgress/* default */.A, {
                                        size: 16
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CloudUpload/* default */.A, {}),
                                    onClick: handleSelectAndUploadAudioFile,
                                    disabled: isUploading,
                                    sx: {
                                        mb: 2
                                    },
                                    children: isUploading ? '上传中...' : '选择并上传音频文件'
                                }),
                                isUploading && uploadProgress > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                    sx: {
                                        mb: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(LinearProgress_LinearProgress/* default */.A, {
                                            variant: "determinate",
                                            value: uploadProgress,
                                            sx: {
                                                mb: 1
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                            variant: "body2",
                                            color: "text.secondary",
                                            sx: {
                                                textAlign: 'center'
                                            },
                                            children: [
                                                "上传中... ",
                                                uploadProgress,
                                                "%"
                                            ]
                                        })
                                    ]
                                }),
                                supportedFormats && supportedFormats.formats && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    sx: {
                                        mb: 2
                                    },
                                    children: [
                                        "支持格式: ",
                                        supportedFormats.formats.join(', ').toUpperCase(),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        "文件大小限制: ",
                                        supportedFormats.maxFileSizeMB,
                                        "MB"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: [
                                        "• 支持从设备中选择现有的音频文件",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        "• 上传成功后可在文件管理中设置为默认音频",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        '• 上传的文件会显示"上传"标签以区分录制文件'
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                            sx: {
                                p: 2,
                                backgroundColor: 'rgba(0,0,0,0.05)',
                                borderRadius: 1
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                variant: "body2",
                                color: "text.secondary",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: "使用说明:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    "• 可以录制个性化的呼救语音，或上传现有音频文件",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    "• 点击星标可以设置为医疗呼救的默认音频",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    '• 启用"优先使用录音文件"时，会优先播放设置的默认录音',
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    "• 录制或上传的文件可以分享给亲友，在他们的设备上播放"
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog_Dialog/* default */.A, {
                open: showRecordDialog,
                onClose: ()=>setShowRecordDialog(false),
                maxWidth: "md",
                fullWidth: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle_DialogTitle/* default */.A, {
                        children: "录制新语音"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent_DialogContent/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                                fullWidth: true,
                                multiline: true,
                                rows: 4,
                                value: recordText,
                                onChange: (e)=>setRecordText(e.target.value),
                                placeholder: "输入要转换为语音的文字...",
                                disabled: isRecording,
                                sx: {
                                    mb: 2,
                                    mt: 1
                                },
                                helperText: "当前字数: ".concat(recordText.length, " 字符")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                sx: {
                                    mb: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                        variant: "body2",
                                        sx: {
                                            mb: 1
                                        },
                                        children: [
                                            "语音速度: ",
                                            recordSpeed,
                                            "x"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider_Slider/* default */.Ay, {
                                        value: recordSpeed,
                                        onChange: (_, value)=>setRecordSpeed(value),
                                        min: 0.5,
                                        max: 2.0,
                                        step: 0.1,
                                        disabled: isRecording,
                                        marks: [
                                            {
                                                value: 0.5,
                                                label: '0.5x'
                                            },
                                            {
                                                value: 1.0,
                                                label: '1.0x'
                                            },
                                            {
                                                value: 2.0,
                                                label: '2.0x'
                                            }
                                        ],
                                        sx: {
                                            mb: 2
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                        variant: "body2",
                                        sx: {
                                            mb: 1
                                        },
                                        children: [
                                            "语音音调: ",
                                            recordPitch,
                                            "x"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider_Slider/* default */.Ay, {
                                        value: recordPitch,
                                        onChange: (_, value)=>setRecordPitch(value),
                                        min: 0.5,
                                        max: 2.0,
                                        step: 0.1,
                                        disabled: isRecording,
                                        marks: [
                                            {
                                                value: 0.5,
                                                label: '低'
                                            },
                                            {
                                                value: 1.0,
                                                label: '标准'
                                            },
                                            {
                                                value: 2.0,
                                                label: '高'
                                            }
                                        ]
                                    })
                                ]
                            }),
                            isRecording && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                sx: {
                                    mb: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LinearProgress_LinearProgress/* default */.A, {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        sx: {
                                            mt: 1,
                                            textAlign: 'center'
                                        },
                                        children: "正在录制中，请稍候..."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions_DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                onClick: ()=>setShowRecordDialog(false),
                                disabled: isRecording,
                                children: "取消"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                onClick: handleRecord,
                                variant: "contained",
                                disabled: !recordText.trim() || isRecording,
                                children: isRecording ? '录制中...' : '开始录制'
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Snackbar_Snackbar/* default */.A, {
                open: showSuccess,
                autoHideDuration: 3000,
                onClose: ()=>setShowSuccess(false),
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert_Alert/* default */.A, {
                    onClose: ()=>setShowSuccess(false),
                    severity: "success",
                    children: successMessage
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Snackbar_Snackbar/* default */.A, {
                open: showError,
                autoHideDuration: 6000,
                onClose: ()=>setShowError(false),
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert_Alert/* default */.A, {
                    onClose: ()=>setShowError(false),
                    severity: "error",
                    children: errorMessage
                })
            })
        ]
    });
});
/* harmony default export */ const components_VoiceEmergencySettings = (VoiceEmergencySettings);

;// ./src/components/pages/home/FallDetectionSettings.tsx









// import { VoiceEmergencySettings } from '@src/components/voice-emergency-settings';
const FallDetectionSettings = (param)=>{
    let { voiceSettingsRef } = param;
    const [threshold, setThreshold] = (0,react.useState)('5.0');
    const [lastValidThreshold, setLastValidThreshold] = (0,react.useState)('5.0');
    const debounceTimerRef = (0,react.useRef)(null);
    const localVoiceSettingsRef = (0,react.useRef)(null);
    const effectiveVoiceSettingsRef = voiceSettingsRef || localVoiceSettingsRef;
    // 权限面板展开状态和统计数据
    const [permissionExpanded, setPermissionExpanded] = (0,react.useState)(false);
    const [permissionStats, setPermissionStats] = (0,react.useState)({
        granted: 0,
        denied: 0,
        unknown: 0
    });
    // 从Android端获取阈值的函数
    const fetchThresholdFromAndroid = async ()=>{
        try {
            const script = "\n            var thresholdValue = com.fanfanlo.emergencycall.manager.SensorManager.getThreshold();\n            thresholdValue;";
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            const thresholdValue = parseFloat(javaResultString || '5.0');
            return thresholdValue.toString();
        } catch (error) {
            console.error('Error fetching threshold value:', error);
            return '5.0';
        }
    };
    (0,react.useEffect)(()=>{
        const initializeThreshold = async ()=>{
            const fetchedThreshold = await fetchThresholdFromAndroid();
            setThreshold(fetchedThreshold);
            setLastValidThreshold(fetchedThreshold);
        };
        initializeThreshold();
        // 清理函数
        return ()=>{
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
        };
    }, []);
    // 提交阈值到Android端
    const submitThreshold = async (thresholdValue)=>{
        try {
            const script = "com.fanfanlo.emergencycall.manager.SensorManager.updateThreshold(".concat(thresholdValue, ");");
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            console.log("阈值已设置为: ".concat(thresholdValue));
            dist/* default */.Ay.success('阈值设置成功');
            return true;
        } catch (error) {
            console.error('Error calling updateThreshold:', error);
            dist/* default */.Ay.error('阈值设置失败:' + error);
            return false;
        }
    };
    // 验证阈值是否合法
    const isValidThreshold = (value)=>{
        const numValue = parseFloat(value);
        return !isNaN(numValue) && numValue > 0;
    };
    // 显示toast提示
    const showToast = (message)=>{
        // 使用简单的alert作为toast提示，实际项目中可以使用更好的toast库
        alert(message);
    };
    // 防抖的onChange处理函数
    const handleThresholdChange = (newValue)=>{
        setThreshold(newValue);
        // 取消之前的定时器
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }
        // 设置新的定时器
        debounceTimerRef.current = setTimeout(async ()=>{
            if (isValidThreshold(newValue)) {
                // 数值合法，提交更改
                const numValue = parseFloat(newValue);
                const success = await submitThreshold(numValue);
                if (success) {
                    setLastValidThreshold(newValue);
                } else {
                    showToast('设置阈值失败，请确保您在安卓应用中');
                    // 恢复为上次合法值
                    setThreshold(lastValidThreshold);
                }
            } else {
                // 数值不合法，提示并恢复
                showToast('请输入一个有效的数字作为阈值');
                if (lastValidThreshold) {
                    setThreshold(lastValidThreshold);
                } else {
                    // 如果没有存储的合法值，从Android端获取
                    const fetchedThreshold = await fetchThresholdFromAndroid();
                    setThreshold(fetchedThreshold);
                    setLastValidThreshold(fetchedThreshold);
                }
            }
        }, 1500); // 1.5秒延迟
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            p: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper_Paper/* default */.A, {
                elevation: 1,
                sx: {
                    padding: 2,
                    marginBottom: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "h6",
                        gutterBottom: true,
                        children: "传感器"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            marginBottom: 2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                            label: "震动阈值",
                            variant: "outlined",
                            type: "number",
                            value: threshold,
                            onChange: (e)=>handleThresholdChange(e.target.value),
                            size: "small",
                            helperText: "摔倒、碰撞检测，数值越小越灵敏，一般在3-15之间，手机不同，需您自行测试。"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion_Accordion/* default */.A, {
                sx: {
                    marginBottom: 2
                },
                expanded: permissionExpanded,
                onChange: (event, isExpanded)=>setPermissionExpanded(isExpanded),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary_AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ExpandMore/* default */.A, {}),
                        "aria-controls": "permission-panel-content",
                        id: "permission-panel-header",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                    variant: "h6",
                                    sx: {
                                        fontWeight: 600
                                    },
                                    children: "权限"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                    sx: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        mt: 0.5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                            sx: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                                    sx: {
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: '50%',
                                                        backgroundColor: 'success.main'
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                                    variant: "caption",
                                                    color: "success.main",
                                                    children: [
                                                        "已授权/",
                                                        permissionStats.granted
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                            sx: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                                    sx: {
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: '50%',
                                                        backgroundColor: 'error.main'
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                                    variant: "caption",
                                                    color: "error.main",
                                                    children: [
                                                        "未授权/",
                                                        permissionStats.denied
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                            sx: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                                    sx: {
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: '50%',
                                                        backgroundColor: 'warning.main'
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                                    variant: "caption",
                                                    color: "warning.main",
                                                    children: [
                                                        "未知/",
                                                        permissionStats.unknown
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails_AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionStatusPanel_PermissionStatusPanel, {
                            isExpanded: permissionExpanded,
                            onStatsChange: setPermissionStats
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider_Divider/* default */.A, {
                sx: {
                    my: 3
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    mb: 3
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_PreAlarmConfig, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider_Divider/* default */.A, {
                sx: {
                    my: 3
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    mb: 3
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_VoiceEmergencySettings, {
                    ref: effectiveVoiceSettingsRef
                })
            })
        ]
    });
};
/* harmony default export */ const home_FallDetectionSettings = (FallDetectionSettings);

;// ./src/components/pages/home/constants.ts
// 事件常量定义
const SENSOR_MONITORING_STATE_CHANGED = "sensor_monitoring_state_changed";

// EXTERNAL MODULE: ./src/components/privacies/PrivacyDialogDisplay.tsx
var privacies_PrivacyDialogDisplay = __webpack_require__(91242);
;// ./src/components/pages/home/FallDetectionWrapper.tsx










// 配置选项
const REQUIRE_LOGIN_FOR_FALL_DETECTION = false; // 默认不启用登录检测
const FallDetectionWrapper = (param)=>{
    let { title, isExpanded, onToggleExpanded, animationType } = param;
    const theme = (0,styles_useTheme/* default */.A)();
    // 复制自 SensorMonitor.tsx - 状态管理
    const [fallThreshold, setFallThreshold] = (0,react.useState)('5.0');
    const voiceSettingsRef = (0,react.useRef)(null);
    // 监听展开状态变化，展开时重新加载VoiceEmergencySettings配置
    (0,react.useEffect)(()=>{
        if (isExpanded && voiceSettingsRef.current) {
            voiceSettingsRef.current.reloadConfig();
        }
    }, [
        isExpanded
    ]);
    const [fallIsMonitoring, setFallIsMonitoring] = (0,react.useState)(false);
    const [fallSensorInfoDialogOpen, setFallSensorInfoDialogOpen] = (0,react.useState)(false);
    const [fallForegroundServiceDialogOpen, setFallForegroundServiceDialogOpen] = (0,react.useState)(false);
    // 隐私协议相关状态
    const [privacyDialogOpen, setPrivacyDialogOpen] = (0,react.useState)(false);
    // 复制自 SensorMonitor.tsx - useRef
    const fallSensorCallbackRef = (0,react.useRef)();
    const fallForegroundServiceCallbackRef = (0,react.useRef)();
    const privacyCallbackRef = (0,react.useRef)();
    // 复制自 SensorMonitor.tsx - 初始化阈值
    (0,react.useEffect)(()=>{
        try {
            const script = "\n            var thresholdValue = com.fanfanlo.emergencycall.manager.SensorManager.getThreshold();\n            thresholdValue;";
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            const thresholdValue = parseFloat(javaResultString || '5.0');
            setFallThreshold(thresholdValue.toString());
        } catch (error) {
            console.error('Error fetching initial threshold value:', error);
        }
    }, []);
    // 复制自 SensorMonitor.tsx - 读取监控状态
    function readFallIsMonitoring() {
        try {
            const script = "\n            var isMonitoring = com.fanfanlo.emergencycall.manager.SensorManager.isMonitoring();\n            isMonitoring;";
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            const isMonitoring = javaResultString === "true";
            setFallIsMonitoring(isMonitoring);
        } catch (error) {
            console.error('Error fetching initial monitoring state:', error);
        }
    }
    // 复制自 SensorMonitor.tsx - 初始化监控状态
    (0,react.useEffect)(()=>{
        readFallIsMonitoring();
        // 监听Android端发送的监控状态变化事件
        const handleMonitoringStateChange = (event)=>{
            const { isMonitoring: newState } = event.detail || {};
            if (typeof newState === 'boolean') {
                setFallIsMonitoring(newState);
            }
        };
        window.addEventListener(SENSOR_MONITORING_STATE_CHANGED, handleMonitoringStateChange);
        return ()=>window.removeEventListener(SENSOR_MONITORING_STATE_CHANGED, handleMonitoringStateChange);
    }, []);
    // 复制自 SensorMonitor.tsx - 权限检查函数
    function checkShowFallSensorInfo(callback) {
        const info = store/* autoJsStoreUtils */.b.read('showSensorInfo', {
            passed: false
        });
        if (!info || !info.passed) {
            fallSensorCallbackRef.current = callback;
            setFallSensorInfoDialogOpen(true);
        } else {
            callback(true);
        }
    }
    function checkShowFallInfo(callback) {
        checkShowFallSensorInfo((passed)=>{
            if (!passed) {
                callback(false);
                return;
            }
            checkShowFallForegroundServiceInfo(callback);
        });
    }
    function checkShowFallForegroundServiceInfo(callback) {
        const info = store/* autoJsStoreUtils */.b.read('showForegroundServiceInfo', {
            passed: false
        });
        if (!info || !info.passed) {
            fallForegroundServiceCallbackRef.current = callback;
            setFallForegroundServiceDialogOpen(true);
        } else {
            callback(true);
        }
    }
    // 复制自 SensorMonitor.tsx - 对话框处理函数
    const handleFallSensorDialog = (passed)=>{
        store/* autoJsStoreUtils */.b.write('showSensorInfo', {
            passed
        });
        setFallSensorInfoDialogOpen(false);
        if (fallSensorCallbackRef.current) {
            fallSensorCallbackRef.current(passed);
        }
    };
    const handleFallForegroundServiceDialog = (passed)=>{
        store/* autoJsStoreUtils */.b.write('showForegroundServiceInfo', {
            passed
        });
        setFallForegroundServiceDialogOpen(false);
        if (fallForegroundServiceCallbackRef.current) {
            fallForegroundServiceCallbackRef.current(passed);
        }
    };
    // 检查隐私协议是否已同意
    function checkPrivacyAgreement(callback) {
        const def = {
            agree: false,
            disagreeTime: 0
        };
        const res = store/* autoJsStoreUtils */.b.read("privacy_main", def);
        const value = res && 'agree' in res ? res : def;
        // 已经同意了
        if (value.agree) {
            callback(true);
            return true;
        }
        // 需要弹出隐私协议（去掉冷却期逻辑）
        privacyCallbackRef.current = callback;
        setPrivacyDialogOpen(true);
        return false;
    }
    // 处理隐私协议弹窗关闭
    const handlePrivacyDialogClose = (agreed)=>{
        setPrivacyDialogOpen(false);
        if (privacyCallbackRef.current) {
            privacyCallbackRef.current(agreed === true);
        }
    };
    // 复制自 SensorMonitor.tsx - 主要的开关处理函数
    async function handleToggleFallMonitoring(enabled) {
        if (enabled) {
            // 1. 先检查隐私协议
            const privacyPassed = checkPrivacyAgreement((passed)=>{
                if (!passed) return;
                // 2. 条件性检查登录状态
                if (REQUIRE_LOGIN_FOR_FALL_DETECTION) {
                    services_authService/* authService */.y.showLoginDialog().then((appLoggedIn)=>{
                        if (!appLoggedIn) {
                            alert("未登录无法使用该功能");
                            return;
                        }
                        // 3. 检查权限，然后启动
                        checkShowFallInfo((permissionPassed)=>{
                            if (!permissionPassed) return;
                            try {
                                const script = "com.fanfanlo.emergencycall.manager.SensorManager.startMonitoring();";
                                AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                            } catch (error) {
                                console.error('Error starting monitoring:', error);
                                alert('开始监控失败。');
                            }
                        });
                    });
                } else {
                    // 跳过登录检测，直接进入权限检测
                    checkShowFallInfo((permissionPassed)=>{
                        if (!permissionPassed) return;
                        try {
                            const script = "com.fanfanlo.emergencycall.manager.SensorManager.startMonitoring();";
                            AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                        } catch (error) {
                            console.error('Error starting monitoring:', error);
                            alert('开始监控失败。');
                        }
                    });
                }
            });
            // 如果隐私协议已通过，直接继续执行
            if (privacyPassed) {
                // 2. 条件性检查登录状态
                if (REQUIRE_LOGIN_FOR_FALL_DETECTION) {
                    const appLoggedIn = await services_authService/* authService */.y.showLoginDialog();
                    if (!appLoggedIn) {
                        alert("未登录无法使用该功能");
                        return;
                    }
                }
                // 3. 检查权限，然后启动
                checkShowFallInfo((passed)=>{
                    if (!passed) return;
                    try {
                        const script = "com.fanfanlo.emergencycall.manager.SensorManager.startMonitoring();";
                        AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                    } catch (error) {
                        console.error('Error starting monitoring:', error);
                        alert('开始监控失败。');
                    }
                });
            }
        } else {
            // 直接停止，不进行检查
            try {
                const script = "com.fanfanlo.emergencycall.manager.SensorManager.stopMonitoring();";
                AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            } catch (error) {
                console.error('Error stopping monitoring:', error);
                alert('停止监控失败。');
            }
        }
    }
    // 复制自 SensorMonitor.tsx - 定时检查监控状态
    (0,react.useEffect)(()=>{
        const id = setInterval(()=>{
            readFallIsMonitoring();
        }, 3000); // 每3秒检查一次监控状态
        return ()=>clearInterval(id);
    }, []);
    // 动画占位组件
    const AnimationPlaceholder = (param)=>{
        let { type } = param;
        const getAnimationContent = ()=>{
            switch(type){
                case 'fall':
                    return {
                        icon: '🚶‍♂️',
                        title: '摔倒检测',
                        description: '检测到意外跌倒时自动触发紧急呼救',
                        color: theme.palette.error.main
                    };
                case 'shake':
                    return {
                        icon: '📱',
                        title: '摇一摇报警',
                        description: '快速摇动手机触发紧急呼救',
                        color: theme.palette.warning.main
                    };
                default:
                    return {
                        icon: '🚨',
                        title: '紧急呼救',
                        description: '紧急情况下的自动求助功能',
                        color: theme.palette.primary.main
                    };
            }
        };
        const content = getAnimationContent();
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
            sx: {
                textAlign: 'center',
                color: 'text.secondary',
                px: 4
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                    sx: {
                        fontSize: 72,
                        mb: 2,
                        animation: 'pulse 2s infinite',
                        '@keyframes pulse': {
                            '0%': {
                                transform: 'scale(1)'
                            },
                            '50%': {
                                transform: 'scale(1.1)'
                            },
                            '100%': {
                                transform: 'scale(1)'
                            }
                        }
                    },
                    children: content.icon
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                    variant: "h5",
                    sx: {
                        mb: 1,
                        fontWeight: 600,
                        color: content.color
                    },
                    children: content.title
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                    variant: "body1",
                    sx: {
                        color: 'text.secondary',
                        lineHeight: 1.6
                    },
                    children: content.description
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                    sx: {
                        mt: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 1,
                        color: 'text.disabled'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Animation/* default */.A, {
                            sx: {
                                fontSize: 20
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                            variant: "caption",
                            children: "点击展开设置"
                        })
                    ]
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper_Paper/* default */.A, {
        sx: {
            mb: 2,
            overflow: 'hidden',
            border: "1px solid ".concat((0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, 0.2)),
            '&:hover': {
                boxShadow: theme.shadows[4]
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, 0.05),
                    '&:hover': {
                        backgroundColor: (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, 0.1)
                    }
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                variant: "h6",
                                sx: {
                                    fontWeight: 600,
                                    color: theme.palette.primary.main
                                },
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch_Switch/* default */.A, {
                                    checked: fallIsMonitoring,
                                    onChange: (e)=>handleToggleFallMonitoring(e.target.checked),
                                    size: "small",
                                    color: "primary"
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: fallIsMonitoring ? '已启用' : '未启用'
                                }),
                                onClick: (e)=>e.stopPropagation(),
                                sx: {
                                    margin: 0
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton_IconButton/* default */.A, {
                        size: "small",
                        onClick: ()=>onToggleExpanded(!isExpanded),
                        sx: {
                            color: theme.palette.primary.main,
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease-in-out'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ExpandMore/* default */.A, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse_Collapse/* default */.A, {
                        in: !isExpanded,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                            sx: {
                                height: 300,
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: (0,colorManipulator/* alpha */.X4)(theme.palette.background.paper, 0.8),
                                borderTop: "1px solid ".concat(theme.palette.divider),
                                position: 'relative',
                                overflow: 'hidden'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_FallRescueAnimation, {
                                type: animationType
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse_Collapse/* default */.A, {
                        in: isExpanded,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                            sx: {
                                borderTop: "1px solid ".concat(theme.palette.divider),
                                backgroundColor: theme.palette.background.paper
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(home_FallDetectionSettings, {
                                voiceSettingsRef: voiceSettingsRef
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog_Dialog/* default */.A, {
                open: fallSensorInfoDialogOpen,
                onClose: ()=>handleFallSensorDialog(false),
                "aria-labelledby": "fall-sensor-dialog-title",
                "aria-describedby": "fall-sensor-dialog-description",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle_DialogTitle/* default */.A, {
                        id: "fall-sensor-dialog-title",
                        children: "传感器使用授权"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent_DialogContent/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText_DialogContentText/* default */.A, {
                            id: "fall-sensor-dialog-description",
                            children: "我们需要获取您的身体传感器（如加速度计）权限，以实现跌倒检测功能。这对于在紧急情况下自动触发呼叫至关重要。您是否同意？"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions_DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                onClick: ()=>handleFallSensorDialog(false),
                                children: "不同意"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                onClick: ()=>handleFallSensorDialog(true),
                                autoFocus: true,
                                children: "同意"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog_Dialog/* default */.A, {
                open: fallForegroundServiceDialogOpen,
                onClose: ()=>handleFallForegroundServiceDialog(false),
                "aria-labelledby": "fall-foreground-dialog-title",
                "aria-describedby": "fall-foreground-dialog-description",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle_DialogTitle/* default */.A, {
                        id: "fall-foreground-dialog-title",
                        children: "启用前台服务通知"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent_DialogContent/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText_DialogContentText/* default */.A, {
                            id: "fall-foreground-dialog-description",
                            children: "为了在应用退到后台后仍能持续监控传感器数据，我们需要启用一个前台服务。这会在您的设备通知栏显示一个持续的通知。您是否同意？"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions_DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                onClick: ()=>handleFallForegroundServiceDialog(false),
                                children: "不同意"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                onClick: ()=>handleFallForegroundServiceDialog(true),
                                autoFocus: true,
                                children: "同意"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(privacies_PrivacyDialogDisplay/* PrivacyDialogDisplay */.d, {
                open: privacyDialogOpen,
                onClose: handlePrivacyDialogClose,
                type: "main",
                area: "zh-cn"
            })
        ]
    });
};
/* harmony default export */ const home_FallDetectionWrapper = (FallDetectionWrapper);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid_Grid = __webpack_require__(87924);
;// ./src/components/pages/home/ShakeDetectionSettings.tsx












const SHAKE_CONFIG_KEY = "shake_emergency_config";
// 阈值范围常量
const THRESHOLD_MIN = 0.1;
const THRESHOLD_MAX = 2.0;
const THRESHOLD_DEFAULT = 0.5;
// 默认配置
const defaultConfig = {
    enabled: false,
    shakeCount: 3,
    timeWindowMs: 2000,
    emergencyType: "medical",
    threshold: THRESHOLD_DEFAULT,
    vibrationFeedback: true,
    soundFeedback: false,
    actions: [],
    maxWaitDuration: 10000,
    version: 1
};
// 配置选项定义
const emergencyTypeOptions = [
    {
        value: "medical",
        label: "医疗报警"
    },
    {
        value: "security",
        label: "安全报警"
    }
];
// 默认声音资源
const ShakeDetectionSettings_defaultSoundResources = [
    {
        id: 'siren_gentle',
        name: '缓和警报'
    },
    {
        id: 'beep_short',
        name: '短提示音'
    },
    {
        id: 'alarm_clock',
        name: '闹钟'
    }
];
function loadConfig() {
    const conf = store/* autoJsStoreUtils */.b.read(SHAKE_CONFIG_KEY, {});
    const config = lodash_default().merge(defaultConfig, conf);
    return config;
}
const ShakeDetectionSettings = (param)=>{
    let { voiceSettingsRef } = param;
    const [config, setConfig] = (0,react.useState)(defaultConfig);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const [lastSaveTime, setLastSaveTime] = (0,react.useState)('');
    const [playingSoundId, setPlayingSoundId] = (0,react.useState)(null);
    // 拖拽传感器配置
    const sensors = (0,core_esm/* useSensors */.FR)((0,core_esm/* useSensor */.MS)(core_esm/* PointerSensor */.AN, {
        activationConstraint: {
            distance: 8
        }
    }), (0,core_esm/* useSensor */.MS)(core_esm/* TouchSensor */.IG, {
        activationConstraint: {
            delay: 250,
            tolerance: 5
        }
    }), (0,core_esm/* useSensor */.MS)(core_esm/* KeyboardSensor */.uN, {
        coordinateGetter: sortable_esm/* sortableKeyboardCoordinates */.JR
    }));
    // 检测用户登录状态
    const [userToken] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    const isLoggedIn = !!userToken;
    // 临时输入值状态，用于处理输入验证
    const [tempValues, setTempValues] = (0,react.useState)({});
    const localVoiceSettingsRef = (0,react.useRef)(null);
    const effectiveVoiceSettingsRef = voiceSettingsRef || localVoiceSettingsRef;
    /**
     * 从Android端读取当前配置
     */ const loadConfigFromAndroid = (0,react.useCallback)(()=>{
        console.log('尝试从Android端读取摇一摇配置...');
        const conf = loadConfig();
        console.log(SHAKE_CONFIG_KEY, 'string', JSON.stringify(conf));
        setConfig(conf);
        setIsLoading(false);
    }, []);
    /**
     * 验证配置参数的有效性
     */ const validateConfig = (config)=>{
        return config.shakeCount >= 1 && config.shakeCount <= 10 && config.timeWindowMs > 0 && config.timeWindowMs <= 10000 && [
            'medical',
            'security'
        ].includes(config.emergencyType) && typeof config.threshold === 'number' && config.threshold >= 0 && config.version > 0;
    };
    /**
     * 保存配置到Android端
     */ const saveConfigToAndroid = (0,react.useCallback)((newConfig)=>{
        try {
            console.log('保存摇一摇配置到Android端:', newConfig);
            // 验证配置有效性
            if (!validateConfig(newConfig)) {
                console.error('配置参数无效，不进行保存');
                return;
            }
            // 构建配置JSON
            const configJson = JSON.stringify(newConfig);
            // 编码为Base64
            const base64Config = btoa(unescape(encodeURIComponent(configJson)));
            // 通过Rhino调用Android方法
            const script = '\n                var result = com.fanfanlo.emergencycall.controller.ShakeManager.updateShakeConfig("'.concat(base64Config, '");\n                result;\n            ');
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            setLastSaveTime(new Date().toLocaleTimeString());
        } catch (error) {
            console.error('保存摇一摇配置失败:', error);
        }
    }, []);
    /**
     * 处理配置更新
     */ const updateConfig = (0,react.useCallback)((updates)=>{
        const newConfig = {
            ...config,
            ...updates
        };
        setConfig(newConfig);
        // 如果配置有效，自动保存
        if (validateConfig(newConfig)) {
            saveConfigToAndroid(newConfig);
        }
    }, [
        config,
        saveConfigToAndroid
    ]);
    /**
     * 处理数字输入框变更，带延迟验证
     */ const handleNumberInput = (0,react.useCallback)((field, value)=>{
        // 更新临时值
        setTempValues((prev)=>({
                ...prev,
                [field]: value
            }));
        // 清除之前的定时器
        const timerId = setTimeout(()=>{
            if (field === 'threshold') {
                // 处理阈值输入
                const numValue = parseFloat(value);
                if (!isNaN(numValue) && numValue >= 0) {
                    updateConfig({
                        [field]: numValue
                    });
                    setTempValues((prev)=>({
                            ...prev,
                            [field]: undefined
                        }));
                } else if (value === '') {
                    // 空值，等待用户继续输入
                    setTimeout(()=>{
                        if (tempValues[field] === '') {
                            setTempValues((prev)=>({
                                    ...prev,
                                    [field]: undefined
                                }));
                        }
                    }, 2000);
                } else {
                    // 无效值，恢复原值
                    setTimeout(()=>{
                        setTempValues((prev)=>({
                                ...prev,
                                [field]: undefined
                            }));
                    }, 2000);
                }
            } else {
                // 原有的整数处理逻辑保持不变
                const numValue = parseInt(value);
                if (!isNaN(numValue) && numValue > 0) {
                    if (field === 'shakeCount' && numValue >= 1 && numValue <= 10) {
                        updateConfig({
                            [field]: numValue
                        });
                        setTempValues((prev)=>({
                                ...prev,
                                [field]: undefined
                            }));
                    } else if (field === 'timeWindowMs' && numValue >= 1000 && numValue <= 10000) {
                        updateConfig({
                            [field]: numValue
                        });
                        setTempValues((prev)=>({
                                ...prev,
                                [field]: undefined
                            }));
                    } else {
                        setTimeout(()=>{
                            setTempValues((prev)=>({
                                    ...prev,
                                    [field]: undefined
                                }));
                        }, 2000);
                    }
                } else if (value === '') {
                    setTimeout(()=>{
                        if (tempValues[field] === '') {
                            setTempValues((prev)=>({
                                    ...prev,
                                    [field]: undefined
                                }));
                        }
                    }, 2000);
                } else {
                    setTimeout(()=>{
                        setTempValues((prev)=>({
                                ...prev,
                                [field]: undefined
                            }));
                    }, 2000);
                }
            }
        }, 500); // 500ms延迟
        return ()=>clearTimeout(timerId);
    }, [
        updateConfig,
        tempValues
    ]);
    /**
     * 预报警动作管理函数
     */ const handleAddPreAlarmAction = (0,react.useCallback)((type)=>{
        const newAction = {
            id: "action-".concat(Date.now()),
            type,
            duration: type === 'vibration' ? 1000 : 2000,
            ...type === 'sound' && {
                resourceId: ShakeDetectionSettings_defaultSoundResources[0].id
            }
        };
        updateConfig({
            actions: [
                ...config.actions,
                newAction
            ]
        });
    }, [
        config.actions,
        updateConfig
    ]);
    const handleUpdatePreAlarmAction = (0,react.useCallback)((id, updates)=>{
        updateConfig({
            actions: config.actions.map((action)=>action.id === id ? {
                    ...action,
                    ...updates
                } : action)
        });
    }, [
        config.actions,
        updateConfig
    ]);
    const handleRemovePreAlarmAction = (0,react.useCallback)((id)=>{
        updateConfig({
            actions: config.actions.filter((action)=>action.id !== id)
        });
    }, [
        config.actions,
        updateConfig
    ]);
    const handlePreviewSound = (0,react.useCallback)((resourceId)=>{
        if (!resourceId) return;
        handleStopSound();
        console.log("[ShakeConfig] Previewing sound: ".concat(resourceId));
        if (window.SoundManager) {
            window.SoundManager.previewSound(resourceId);
            setPlayingSoundId(resourceId);
        } else {
            console.warn('SoundManager not available');
        }
    }, []);
    const handleStopSound = (0,react.useCallback)(()=>{
        if (window.SoundManager) {
            window.SoundManager.stopPreview();
        }
        setPlayingSoundId(null);
    }, []);
    /**
     * 拖拽结束处理
     */ const handleDragEnd = (0,react.useCallback)((event)=>{
        const { active, over } = event;
        if (!over || active.id === over.id) return;
        const oldIndex = config.actions.findIndex((a)=>a.id === active.id);
        const newIndex = config.actions.findIndex((a)=>a.id === over.id);
        if (oldIndex !== -1 && newIndex !== -1) {
            updateConfig({
                actions: (0,sortable_esm/* arrayMove */.be)(config.actions, oldIndex, newIndex)
            });
        }
    }, [
        config.actions,
        updateConfig
    ]);
    /**
     * 可拖拽的预报警动作项组件
     */ const SortablePreAlarmActionItem = (param)=>{
        let { action, isPlaying, onUpdate, onRemove, onPreview, onStopPreview, disabled } = param;
        const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0,sortable_esm/* useSortable */.gl)({
            id: action.id
        });
        const style = {
            transform: utilities_esm/* CSS */.Ks.Transform.toString(transform),
            transition,
            opacity: isDragging ? 0.8 : 1,
            zIndex: isDragging ? 1 : 'auto'
        };
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper_Paper/* default */.A, {
            ref: setNodeRef,
            style: style,
            elevation: isDragging ? 3 : 1,
            sx: {
                p: 2,
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                userSelect: 'none',
                opacity: disabled ? 0.6 : 1
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                    ...attributes,
                    ...listeners,
                    sx: {
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'grab',
                        touchAction: 'none'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DragIndicator/* default */.A, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                    sx: {
                        flexGrow: 1
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 1.5
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                variant: "subtitle2",
                                children: action.type === 'sound' ? '声音' : '震动'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                                size: "small",
                                type: "number",
                                label: "持续时间 (ms)",
                                value: action.duration,
                                onChange: (e)=>onUpdate(action.id, {
                                        duration: parseInt(e.target.value, 10) || 0
                                    }),
                                disabled: disabled,
                                sx: {
                                    width: '100%'
                                }
                            }),
                            action.type === 'sound' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl_FormControl/* default */.A, {
                                size: "small",
                                sx: {
                                    width: '100%'
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel_InputLabel/* default */.A, {
                                        children: "声音类型"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Select_Select/* default */.A, {
                                        value: action.resourceId || '',
                                        label: "声音类型",
                                        onChange: (e)=>onUpdate(action.id, {
                                                resourceId: e.target.value
                                            }),
                                        disabled: disabled,
                                        startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip_Tooltip/* default */.A, {
                                            title: isPlaying ? "停止" : "试听",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton_IconButton/* default */.A, {
                                                size: "small",
                                                onClick: ()=>isPlaying ? onStopPreview() : onPreview(action.resourceId),
                                                sx: {
                                                    mr: 1
                                                },
                                                disabled: disabled,
                                                children: isPlaying ? /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Stop/* default */.A, {
                                                    fontSize: "small"
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_PlayArrow/* default */.A, {
                                                    fontSize: "small"
                                                })
                                            })
                                        }),
                                        children: ShakeDetectionSettings_defaultSoundResources.map((sound)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem_MenuItem/* default */.A, {
                                                value: sound.id,
                                                children: sound.name
                                            }, sound.id))
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton_IconButton/* default */.A, {
                    onClick: ()=>onRemove(action.id),
                    size: "small",
                    color: "error",
                    disabled: disabled,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Delete/* default */.A, {})
                })
            ]
        });
    };
    // 组件挂载时加载配置
    (0,react.useEffect)(()=>{
        loadConfigFromAndroid();
    }, [
        loadConfigFromAndroid
    ]);
    // 渲染加载状态
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper_Paper/* default */.A, {
            sx: {
                p: 2
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                    variant: "body2",
                    color: "text.secondary",
                    children: "加载摇一摇配置..."
                })
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            p: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch_Switch/* default */.A, {
                            checked: config.enabled,
                            onChange: (e)=>updateConfig({
                                    enabled: e.target.checked
                                }),
                            size: "small",
                            disabled: !isLoggedIn
                        }),
                        label: config.enabled ? '已启用' : '已禁用'
                    }),
                    lastSaveTime && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                        variant: "caption",
                        color: "text.secondary",
                        children: [
                            "已保存 ",
                            lastSaveTime
                        ]
                    })
                ]
            }),
            !isLoggedIn && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert_Alert/* default */.A, {
                severity: "warning",
                sx: {
                    mb: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                    variant: "body2",
                    children: "请先登录后再使用摇一摇功能"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid_Grid/* default */.Ay, {
                container: true,
                spacing: 2,
                sx: {
                    mb: 3
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid_Grid/* default */.Ay, {
                    item: true,
                    xs: 12,
                    sm: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl_FormControl/* default */.A, {
                        fullWidth: true,
                        disabled: !config.enabled || !isLoggedIn,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel_InputLabel/* default */.A, {
                                children: "报警类型"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Select_Select/* default */.A, {
                                value: config.emergencyType,
                                label: "报警类型",
                                onChange: (e)=>updateConfig({
                                        emergencyType: e.target.value
                                    }),
                                children: emergencyTypeOptions.map((option)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem_MenuItem/* default */.A, {
                                        value: option.value,
                                        children: option.label
                                    }, option.value))
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                variant: "h6",
                gutterBottom: true,
                children: "检测参数"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid_Grid/* default */.Ay, {
                container: true,
                spacing: 2,
                sx: {
                    mb: 3
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid_Grid/* default */.Ay, {
                        item: true,
                        xs: 12,
                        sm: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                            fullWidth: true,
                            label: "摇动次数",
                            type: "number",
                            inputProps: {
                                min: 1,
                                max: 10
                            },
                            value: tempValues.shakeCount !== undefined ? tempValues.shakeCount : config.shakeCount,
                            onChange: (e)=>handleNumberInput('shakeCount', e.target.value),
                            disabled: !config.enabled || !isLoggedIn,
                            helperText: "1-10次",
                            error: tempValues.shakeCount !== undefined && (tempValues.shakeCount === '' || parseInt(tempValues.shakeCount) < 1 || parseInt(tempValues.shakeCount) > 10)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid_Grid/* default */.Ay, {
                        item: true,
                        xs: 12,
                        sm: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                            fullWidth: true,
                            label: "时间窗口(毫秒)",
                            type: "number",
                            inputProps: {
                                min: 1000,
                                max: 10000,
                                step: 500
                            },
                            value: tempValues.timeWindowMs !== undefined ? tempValues.timeWindowMs : config.timeWindowMs,
                            onChange: (e)=>handleNumberInput('timeWindowMs', e.target.value),
                            disabled: !config.enabled || !isLoggedIn,
                            helperText: "1000-10000ms",
                            error: tempValues.timeWindowMs !== undefined && (tempValues.timeWindowMs === '' || parseInt(tempValues.timeWindowMs) < 1000 || parseInt(tempValues.timeWindowMs) > 10000)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid_Grid/* default */.Ay, {
                        item: true,
                        xs: 12,
                        sm: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                            fullWidth: true,
                            label: "检测阈值",
                            type: "number",
                            inputProps: {
                                min: 0,
                                step: 0.1
                            },
                            value: tempValues.threshold !== undefined ? tempValues.threshold : config.threshold,
                            onChange: (e)=>handleNumberInput('threshold', e.target.value),
                            disabled: !config.enabled || !isLoggedIn,
                            helperText: "数值越小越敏感，一般范围为".concat(THRESHOLD_MIN, "-").concat(THRESHOLD_MAX, "，根据手机不同会有差异"),
                            error: tempValues.threshold !== undefined && (tempValues.threshold === '' || parseFloat(tempValues.threshold) < 0)
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider_Divider/* default */.A, {
                sx: {
                    my: 3
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                variant: "h6",
                gutterBottom: true,
                children: "预警设置"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    mb: 3
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse_Collapse/* default */.A, {
                        in: config.actions.length > 0 || true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                            sx: {
                                mt: 2,
                                pl: 4,
                                borderLeft: '2px solid',
                                borderColor: 'primary.main'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid_Grid/* default */.Ay, {
                                    container: true,
                                    spacing: 2,
                                    sx: {
                                        mb: 2
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid_Grid/* default */.Ay, {
                                        item: true,
                                        xs: 12,
                                        sm: 6,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField_TextField/* default */.A, {
                                            fullWidth: true,
                                            size: "small",
                                            type: "number",
                                            label: "预警最大等待时间(ms)",
                                            value: config.maxWaitDuration,
                                            onChange: (e)=>updateConfig({
                                                    maxWaitDuration: parseInt(e.target.value, 10) || 0
                                                }),
                                            disabled: !config.enabled || !isLoggedIn,
                                            helperText: "用户可在此时间内确认或取消"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                    sx: {
                                        mb: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                            sx: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                mb: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                                    variant: "body2",
                                                    fontWeight: "medium",
                                                    children: [
                                                        "预警动作序列 (",
                                                        config.actions.length,
                                                        ")"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                                    sx: {
                                                        display: 'flex',
                                                        gap: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                                            variant: "outlined",
                                                            size: "small",
                                                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_VolumeUp/* default */.A, {}),
                                                            onClick: ()=>handleAddPreAlarmAction('sound'),
                                                            disabled: !config.enabled || !isLoggedIn,
                                                            children: "添加声音"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                                            variant: "outlined",
                                                            size: "small",
                                                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Vibration/* default */.A, {}),
                                                            onClick: ()=>handleAddPreAlarmAction('vibration'),
                                                            disabled: !config.enabled || !isLoggedIn,
                                                            children: "添加震动"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        config.actions.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                            sx: {
                                                p: 2,
                                                border: '1px dashed',
                                                borderColor: 'divider',
                                                borderRadius: 1,
                                                textAlign: 'center',
                                                color: 'text.secondary'
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                                variant: "body2",
                                                children: "暂无预警动作，点击上方按钮添加"
                                            })
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(core_esm/* DndContext */.Mp, {
                                            sensors: sensors,
                                            collisionDetection: core_esm/* closestCenter */.fp,
                                            onDragEnd: handleDragEnd,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(sortable_esm/* SortableContext */.gB, {
                                                items: config.actions.map((a)=>a.id),
                                                strategy: sortable_esm/* verticalListSortingStrategy */._G,
                                                children: config.actions.map((action)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SortablePreAlarmActionItem, {
                                                        action: action,
                                                        isPlaying: playingSoundId === action.resourceId,
                                                        onUpdate: handleUpdatePreAlarmAction,
                                                        onRemove: handleRemovePreAlarmAction,
                                                        onPreview: handlePreviewSound,
                                                        onStopPreview: handleStopSound,
                                                        disabled: !config.enabled || !isLoggedIn
                                                    }, action.id))
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch_Switch/* default */.A, {
                            checked: config.vibrationFeedback,
                            onChange: (e)=>updateConfig({
                                    vibrationFeedback: e.target.checked
                                }),
                            disabled: !config.enabled || !isLoggedIn
                        }),
                        label: "震动反馈"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch_Switch/* default */.A, {
                            checked: config.soundFeedback,
                            onChange: (e)=>updateConfig({
                                    soundFeedback: e.target.checked
                                }),
                            disabled: !config.enabled || !isLoggedIn
                        }),
                        label: "声音反馈"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider_Divider/* default */.A, {
                sx: {
                    my: 3
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    mb: 3
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_VoiceEmergencySettings, {
                    ref: effectiveVoiceSettingsRef
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert_Alert/* default */.A, {
                severity: "info",
                sx: {
                    mt: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                    variant: "body2",
                    component: "div",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                            children: "配置说明"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            style: {
                                margin: '8px 0',
                                paddingLeft: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    children: [
                                        "在",
                                        config.timeWindowMs,
                                        "毫秒内连续摇动",
                                        config.shakeCount,
                                        "次将触发报警"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: config.emergencyType === 'medical' ? '医疗报警适合健康紧急情况' : '安全报警适合人身安全威胁'
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    children: [
                                        "阈值",
                                        config.threshold,
                                        "：数值越小检测越敏感，一般范围为",
                                        THRESHOLD_MIN,
                                        "-",
                                        THRESHOLD_MAX,
                                        "，根据手机不同会有差异"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: config.actions.length > 0 ? "启用预警将在".concat(config.maxWaitDuration, "毫秒内执行").concat(config.actions.length, "个预警动作，用户可确认或取消") : '无预警动作配置，将直接触发报警'
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const home_ShakeDetectionSettings = (ShakeDetectionSettings);

;// ./src/components/pages/home/ShakeDetectionWrapper.tsx










const ShakeDetectionWrapper_SHAKE_CONFIG_KEY = "shake_emergency_config";
// 默认配置
const defaultShakeConfig = {
    enabled: false,
    shakeCount: 3,
    timeWindowMs: 2000,
    emergencyType: "medical",
    threshold: 0.5,
    vibrationFeedback: true,
    soundFeedback: false,
    actions: [],
    maxWaitDuration: 10000,
    version: 1
};
const ShakeDetectionWrapper = (param)=>{
    let { title, isExpanded, onToggleExpanded, animationType } = param;
    const theme = (0,styles_useTheme/* default */.A)();
    // 摇一摇状态管理
    const [shakeConfig, setShakeConfig] = (0,react.useState)(defaultShakeConfig);
    const [shakeConfigLoaded, setShakeConfigLoaded] = (0,react.useState)(false);
    // 复制自 ShakeDetectionSettings - 检测用户登录状态
    const [userToken] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    const isLoggedIn = !!userToken;
    const voiceSettingsRef = (0,react.useRef)(null);
    // 监听展开状态变化，展开时重新加载VoiceEmergencySettings配置
    (0,react.useEffect)(()=>{
        if (isExpanded && voiceSettingsRef.current) {
            voiceSettingsRef.current.reloadConfig();
        }
    }, [
        isExpanded
    ]);
    // 从存储加载摇一摇配置
    function loadShakeConfig() {
        const conf = store/* autoJsStoreUtils */.b.read(ShakeDetectionWrapper_SHAKE_CONFIG_KEY, {});
        const config = lodash_default().merge(defaultShakeConfig, conf);
        return config;
    }
    // 保存摇一摇配置到Android端
    function saveShakeConfigToAndroid(newConfig) {
        try {
            console.log('保存摇一摇配置到Android端:', newConfig);
            // 验证配置有效性
            if (!validateShakeConfig(newConfig)) {
                console.error('配置参数无效，不进行保存');
                return;
            }
            // 构建配置JSON
            const configJson = JSON.stringify(newConfig);
            // 编码为Base64
            const base64Config = btoa(unescape(encodeURIComponent(configJson)));
            // 通过Rhino调用Android方法
            const script = '\n                var result = com.fanfanlo.emergencycall.controller.ShakeManager.updateShakeConfig("'.concat(base64Config, '");\n                result;\n            ');
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            console.log('摇一摇配置保存结果:', javaResultString);
        } catch (error) {
            console.error('保存摇一摇配置失败:', error);
        }
    }
    // 验证配置参数的有效性
    function validateShakeConfig(config) {
        return config.shakeCount >= 1 && config.shakeCount <= 10 && config.timeWindowMs > 0 && config.timeWindowMs <= 10000 && [
            'medical',
            'security'
        ].includes(config.emergencyType) && typeof config.threshold === 'number' && config.threshold >= 0 && config.version > 0;
    }
    // 初始化加载配置
    (0,react.useEffect)(()=>{
        const config = loadShakeConfig();
        setShakeConfig(config);
        setShakeConfigLoaded(true);
    }, []);
    // 处理摇一摇开关切换
    async function handleToggleShakeDetection(enabled) {
        if (enabled) {
            // 检查登录状态
            if (!isLoggedIn) {
                const appLoggedIn = await services_authService/* authService */.y.showLoginDialog();
                if (!appLoggedIn) {
                    alert("未登录无法使用该功能");
                    return;
                }
            }
        }
        // 更新配置
        const newConfig = {
            ...shakeConfig,
            enabled
        };
        setShakeConfig(newConfig);
        // 保存到Android端
        saveShakeConfigToAndroid(newConfig);
    }
    // 动画占位组件
    const AnimationPlaceholder = (param)=>{
        let { type } = param;
        const getAnimationContent = ()=>{
            switch(type){
                case 'fall':
                    return {
                        icon: '🚶‍♂️',
                        title: '摔倒检测',
                        description: '检测到意外跌倒时自动触发紧急呼救',
                        color: theme.palette.error.main
                    };
                case 'shake':
                    return {
                        icon: '📱',
                        title: '摇一摇报警',
                        description: '快速摇动手机触发紧急呼救',
                        color: theme.palette.warning.main
                    };
                default:
                    return {
                        icon: '🚨',
                        title: '紧急呼救',
                        description: '紧急情况下的自动求助功能',
                        color: theme.palette.primary.main
                    };
            }
        };
        const content = getAnimationContent();
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
            sx: {
                textAlign: 'center',
                color: 'text.secondary',
                px: 4
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                    sx: {
                        fontSize: 72,
                        mb: 2,
                        animation: 'pulse 2s infinite',
                        '@keyframes pulse': {
                            '0%': {
                                transform: 'scale(1)'
                            },
                            '50%': {
                                transform: 'scale(1.1)'
                            },
                            '100%': {
                                transform: 'scale(1)'
                            }
                        }
                    },
                    children: content.icon
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                    variant: "h5",
                    sx: {
                        mb: 1,
                        fontWeight: 600,
                        color: content.color
                    },
                    children: content.title
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                    variant: "body1",
                    sx: {
                        color: 'text.secondary',
                        lineHeight: 1.6
                    },
                    children: content.description
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                    sx: {
                        mt: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 1,
                        color: 'text.disabled'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Animation/* default */.A, {
                            sx: {
                                fontSize: 20
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                            variant: "caption",
                            children: "点击展开设置"
                        })
                    ]
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper_Paper/* default */.A, {
        sx: {
            mb: 2,
            overflow: 'hidden',
            border: "1px solid ".concat((0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, 0.2)),
            '&:hover': {
                boxShadow: theme.shadows[4]
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, 0.05),
                    '&:hover': {
                        backgroundColor: (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, 0.1)
                    }
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                variant: "h6",
                                sx: {
                                    fontWeight: 600,
                                    color: theme.palette.primary.main
                                },
                                children: title
                            }),
                            shakeConfigLoaded && /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel_FormControlLabel/* default */.A, {
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch_Switch/* default */.A, {
                                    checked: shakeConfig.enabled,
                                    onChange: (e)=>handleToggleShakeDetection(e.target.checked),
                                    size: "small",
                                    color: "primary"
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: shakeConfig.enabled ? '已启用' : '未启用'
                                }),
                                onClick: (e)=>e.stopPropagation(),
                                sx: {
                                    margin: 0
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton_IconButton/* default */.A, {
                        size: "small",
                        onClick: ()=>onToggleExpanded(!isExpanded),
                        sx: {
                            color: theme.palette.primary.main,
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease-in-out'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ExpandMore/* default */.A, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse_Collapse/* default */.A, {
                        in: !isExpanded,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                            sx: {
                                height: 300,
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: (0,colorManipulator/* alpha */.X4)(theme.palette.background.paper, 0.8),
                                borderTop: "1px solid ".concat(theme.palette.divider),
                                position: 'relative',
                                overflow: 'hidden'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimationPlaceholder, {
                                type: animationType
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse_Collapse/* default */.A, {
                        in: isExpanded,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                            sx: {
                                borderTop: "1px solid ".concat(theme.palette.divider),
                                backgroundColor: theme.palette.background.paper
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(home_ShakeDetectionSettings, {
                                voiceSettingsRef: voiceSettingsRef
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const home_ShakeDetectionWrapper = (ShakeDetectionWrapper);

;// ./src/components/pages/home/EmergencyCallSettings.tsx







const EmergencyCallSettings = ()=>{
    // UI展开状态管理
    const [fallExpanded, setFallExpanded] = (0,react.useState)(false);
    const [shakeExpanded, setShakeExpanded] = (0,react.useState)(false);
    // 状态管理现在由各自的Wrapper组件内部处理，这里只需要UI展开状态
    // 监听用户登录状态
    const [userToken] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    const isLoggedIn = !!userToken;
    // 确保同一时间只有一个功能展开
    const handleToggleExpanded = (type, expanded)=>{
        if (expanded) {
            // 如果要展开，先收起其他的
            setFallExpanded(type === 'fall');
            setShakeExpanded(type === 'shake');
        } else {
            // 如果要收起，只收起当前的
            switch(type){
                case 'fall':
                    setFallExpanded(false);
                    break;
                case 'shake':
                    setShakeExpanded(false);
                    break;
            }
        }
    };
    // 状态管理和事件监听现在由各自的Wrapper组件内部处理
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Container/* default */.A, {
        maxWidth: "md",
        sx: {
            py: 3
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper_Paper/* default */.A, {
                sx: {
                    p: 3,
                    mb: 3,
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "h4",
                        component: "h1",
                        sx: {
                            mb: 1,
                            fontWeight: 700,
                            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        },
                        children: "\uD83D\uDEA8 紧急呼救设置"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "body1",
                        color: "text.secondary",
                        sx: {
                            mb: 2
                        },
                        children: "配置您的紧急求助功能，确保关键时刻能及时获得帮助"
                    }),
                    !isLoggedIn && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert_Alert/* default */.A, {
                        severity: "info",
                        sx: {
                            mt: 2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                            variant: "body2",
                            children: "部分功能需要登录后才能使用，建议先完成登录"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(home_FallDetectionWrapper, {
                        title: "\uD83D\uDCF1 摔倒呼救",
                        isExpanded: fallExpanded,
                        onToggleExpanded: (expanded)=>handleToggleExpanded('fall', expanded),
                        animationType: "fall"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(home_ShakeDetectionWrapper, {
                        title: "\uD83E\uDD33 摇一摇呼救",
                        isExpanded: shakeExpanded,
                        onToggleExpanded: (expanded)=>handleToggleExpanded('shake', expanded),
                        animationType: "shake"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const home_EmergencyCallSettings = (EmergencyCallSettings);

;// ./src/components/pages/home/FunctionWrapper.tsx




const FunctionWrapper = (param)=>{
    let { title, isExpanded, onToggleExpanded, animationType, enabled, onToggleEnabled, children } = param;
    const theme = useTheme();
    return /*#__PURE__*/ _jsxs(Paper, {
        sx: {
            mb: 2,
            overflow: 'hidden',
            border: "1px solid ".concat(alpha(theme.palette.primary.main, 0.2)),
            '&:hover': {
                boxShadow: theme.shadows[4]
            }
        },
        children: [
            /*#__PURE__*/ _jsxs(Box, {
                sx: {
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                    '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.1)
                    }
                },
                children: [
                    /*#__PURE__*/ _jsxs(Box, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ _jsx(Typography, {
                                variant: "h6",
                                sx: {
                                    fontWeight: 600,
                                    color: theme.palette.primary.main
                                },
                                children: title
                            }),
                            onToggleEnabled !== undefined && /*#__PURE__*/ _jsx(FormControlLabel, {
                                control: /*#__PURE__*/ _jsx(Switch, {
                                    checked: enabled || false,
                                    onChange: (e)=>onToggleEnabled(e.target.checked),
                                    size: "small",
                                    color: "primary"
                                }),
                                label: /*#__PURE__*/ _jsx(Typography, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: enabled ? '已启用' : '未启用'
                                }),
                                onClick: (e)=>e.stopPropagation(),
                                sx: {
                                    margin: 0
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(IconButton, {
                        size: "small",
                        onClick: ()=>onToggleExpanded(!isExpanded),
                        sx: {
                            color: theme.palette.primary.main,
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease-in-out'
                        },
                        children: /*#__PURE__*/ _jsx(ExpandMore, {})
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Box, {
                children: [
                    /*#__PURE__*/ _jsx(Collapse, {
                        in: !isExpanded,
                        children: /*#__PURE__*/ _jsx(Box, {
                            sx: {
                                height: 300,
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: alpha(theme.palette.background.paper, 0.8),
                                borderTop: "1px solid ".concat(theme.palette.divider),
                                position: 'relative',
                                overflow: 'hidden'
                            },
                            children: /*#__PURE__*/ _jsx(AnimationPlaceholder, {
                                type: animationType
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx(Collapse, {
                        in: isExpanded,
                        children: /*#__PURE__*/ _jsx(Box, {
                            sx: {
                                borderTop: "1px solid ".concat(theme.palette.divider),
                                backgroundColor: theme.palette.background.paper
                            },
                            children: children
                        })
                    })
                ]
            })
        ]
    });
};
// 动画占位组件
const AnimationPlaceholder = (param)=>{
    let { type } = param;
    const theme = useTheme();
    const getAnimationContent = ()=>{
        switch(type){
            case 'fall':
                return {
                    icon: '🚶‍♂️',
                    title: '摔倒检测',
                    description: '检测到意外跌倒时自动触发紧急呼救',
                    color: theme.palette.error.main
                };
            case 'shake':
                return {
                    icon: '📱',
                    title: '摇一摇报警',
                    description: '快速摇动手机触发紧急呼救',
                    color: theme.palette.warning.main
                };
            default:
                return {
                    icon: '🚨',
                    title: '紧急呼救',
                    description: '紧急情况下的自动求助功能',
                    color: theme.palette.primary.main
                };
        }
    };
    const content = getAnimationContent();
    return /*#__PURE__*/ _jsxs(Box, {
        sx: {
            textAlign: 'center',
            color: 'text.secondary',
            px: 4
        },
        children: [
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    fontSize: 72,
                    mb: 2,
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                        '0%': {
                            transform: 'scale(1)'
                        },
                        '50%': {
                            transform: 'scale(1.1)'
                        },
                        '100%': {
                            transform: 'scale(1)'
                        }
                    }
                },
                children: content.icon
            }),
            /*#__PURE__*/ _jsx(Typography, {
                variant: "h5",
                sx: {
                    mb: 1,
                    fontWeight: 600,
                    color: content.color
                },
                children: content.title
            }),
            /*#__PURE__*/ _jsx(Typography, {
                variant: "body1",
                sx: {
                    color: 'text.secondary',
                    lineHeight: 1.6
                },
                children: content.description
            }),
            /*#__PURE__*/ _jsxs(Box, {
                sx: {
                    mt: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1,
                    color: 'text.disabled'
                },
                children: [
                    /*#__PURE__*/ _jsx(AnimationIcon, {
                        sx: {
                            fontSize: 20
                        }
                    }),
                    /*#__PURE__*/ _jsx(Typography, {
                        variant: "caption",
                        children: "点击展开设置"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const home_FunctionWrapper = ((/* unused pure expression or super */ null && (FunctionWrapper)));

;// ./src/components/pages/home/index.ts





;// ./src/components/PendingInvitationsList/PendingInvitationsList.tsx









// 邀请卡片组件
function PendingInvitationCard(param) {
    let { invitation, onRespond, isProcessing = false } = param;
    var _invitation_user_info_display_name_, _invitation_user_info_display_name;
    const [isProcessingAction, setIsProcessingAction] = useState(false);
    const handleRespond = async (action)=>{
        if (!onRespond) return;
        try {
            setIsProcessingAction(true);
            await onRespond(action);
        } finally{
            setIsProcessingAction(false);
        }
    };
    const isExpired = new Date(invitation.expires_at * 1000) < new Date();
    return /*#__PURE__*/ _jsxs(Card, {
        variant: "outlined",
        sx: {
            mb: 2,
            opacity: isProcessing ? 0.7 : 1
        },
        children: [
            /*#__PURE__*/ _jsxs(CardContent, {
                children: [
                    /*#__PURE__*/ _jsxs(Box, {
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        children: [
                            /*#__PURE__*/ _jsx(Avatar, {
                                src: invitation.user_info.avatar_url,
                                alt: invitation.user_info.display_name,
                                sx: {
                                    width: 50,
                                    height: 50,
                                    mr: 2
                                },
                                children: ((_invitation_user_info_display_name = invitation.user_info.display_name) === null || _invitation_user_info_display_name === void 0 ? void 0 : (_invitation_user_info_display_name_ = _invitation_user_info_display_name[0]) === null || _invitation_user_info_display_name_ === void 0 ? void 0 : _invitation_user_info_display_name_.toUpperCase()) || '?'
                            }),
                            /*#__PURE__*/ _jsxs(Box, {
                                flexGrow: 1,
                                children: [
                                    /*#__PURE__*/ _jsx(Typography, {
                                        variant: "h6",
                                        children: invitation.user_info.display_name || '未知用户'
                                    }),
                                    /*#__PURE__*/ _jsx(Typography, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        sx: {
                                            mt: 0.5
                                        },
                                        children: formatDistanceToNow(invitation.created_at * 1000, {
                                            addSuffix: true,
                                            locale: zhCN
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx(Box, {
                                textAlign: "right",
                                children: /*#__PURE__*/ _jsx(Chip, {
                                    size: "small",
                                    icon: /*#__PURE__*/ _jsx(AccessTimeIcon, {
                                        fontSize: "small"
                                    }),
                                    label: isExpired ? '已过期' : "".concat(formatDistanceToNow(invitation.expires_at * 1000, {
                                        addSuffix: true,
                                        locale: zhCN
                                    })),
                                    color: isExpired ? 'error' : 'primary',
                                    variant: "outlined"
                                })
                            })
                        ]
                    }),
                    invitation.message && /*#__PURE__*/ _jsxs(Typography, {
                        variant: "body2",
                        color: "text.secondary",
                        sx: {
                            mt: 1,
                            mb: 1
                        },
                        children: [
                            "邀请信息: ",
                            invitation.message
                        ]
                    }),
                    /*#__PURE__*/ _jsx(Typography, {
                        variant: "body2",
                        color: "primary",
                        sx: {
                            fontWeight: 'medium'
                        },
                        children: "邀请您成为紧急联系人"
                    })
                ]
            }),
            !isExpired && /*#__PURE__*/ _jsxs(CardActions, {
                sx: {
                    justifyContent: 'flex-end',
                    pt: 0
                },
                children: [
                    /*#__PURE__*/ _jsx(Button, {
                        size: "small",
                        color: "error",
                        startIcon: /*#__PURE__*/ _jsx(CloseIcon, {}),
                        onClick: ()=>handleRespond('decline'),
                        disabled: isProcessing || isProcessingAction,
                        children: "拒绝"
                    }),
                    /*#__PURE__*/ _jsx(Button, {
                        size: "small",
                        color: "primary",
                        variant: "contained",
                        startIcon: /*#__PURE__*/ _jsx(CheckIcon, {}),
                        onClick: ()=>handleRespond('accept'),
                        disabled: isProcessing || isProcessingAction,
                        children: "接受"
                    })
                ]
            })
        ]
    });
}
const PendingInvitationsList_PendingInvitationsList = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [invitations, setInvitations] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    // 监听用户登录状态
    const [userToken] = useProxyWatch(user, 'data.storeData.user_token', user.data.storeData.user_token);
    // 加载未处理的被邀请信息
    const loadPendingInvitations = useCallback(async ()=>{
        if (!userToken) {
            setInvitations([]);
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            var _res_data;
            const res = await emergencyCallPendingInvitationService.listPendingReceivedInvitations({
                params: {}
            });
            if (res.shellIsOk && res.dataIsOk && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.is_ok)) {
                setInvitations(res.data.invitations || []);
            } else {
                var _res_data1;
                setError(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.msg) || '加载邀请列表失败');
            }
        } catch (err) {
            console.error('加载未处理邀请列表异常:', err);
            setError('发生未知错误');
        } finally{
            setIsLoading(false);
        }
    }, [
        userToken
    ]); // 现在可以安全地依赖userToken了
    // 响应邀请
    const handleRespondToInvite = useCallback(async (invitationId, action)=>{
        try {
            var _res_data;
            setIsProcessing(true);
            const res = await emergencyCallInvitationService.respondToInvite({
                params: {
                    invitation_id: invitationId,
                    action
                }
            });
            if (!res.shellIsOk || !res.dataIsOk || !((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.is_ok)) {
                var _res_data1;
                throw new Error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.msg) || '操作失败');
            }
            // 从列表中移除已处理的邀请
            setInvitations((prev)=>prev.filter((invite)=>invite.invitation_id !== invitationId));
            // 发送邀请列表更新事件
            appModel.dispatcher.emit(AppModelEvent.InviteListUpdated);
        } catch (err) {
            console.error('处理邀请失败:', err);
            setError(err instanceof Error ? err.message : '操作失败，请重试');
        } finally{
            setIsProcessing(false);
        }
    }, []);
    // 监听用户登录状态变化
    useEffect(()=>{
        if (userToken) {
            // 有登录用户了，刷新邀请列表
            loadPendingInvitations();
        } else {
            // 清空邀请信息列表
            setInvitations([]);
        }
    }, [
        userToken
    ]); // 只依赖userToken
    // 监听邀请列表更新事件
    useEffect(()=>{
        const unsubscribe = appModel.dispatcher.addListener(AppModelEvent.InviteListUpdated, ()=>{
            console.log('AppModelEvent.InviteListUpdated - 刷新未处理邀请列表');
            loadPendingInvitations();
        });
        return unsubscribe;
    }, [
        loadPendingInvitations
    ]); // 依赖loadPendingInvitations函数
    useEffect(()=>{
        const unsub = matrixClient.imDispatcher.addListener(matrixClient.ImDispatcherEventTypes.INVITE, ()=>{
            if (!userToken) return;
            loadPendingInvitations();
        });
        return unsub;
    }, []);
    // 如果没有登录用户，不显示任何内容
    if (!userToken) {
        return null;
    }
    if (isLoading) {
        return /*#__PURE__*/ _jsx(Box, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2
        });
    }
    if (error) {
        return /*#__PURE__*/ _jsx(Box, {
            p: 2,
            children: /*#__PURE__*/ _jsx(Alert, {
                severity: "error",
                children: error
            })
        });
    }
    if (invitations.length === 0) {
        return /*#__PURE__*/ _jsx(Box, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            textAlign: "center"
        });
    }
    return /*#__PURE__*/ _jsxs(Box, {
        p: 2,
        children: [
            /*#__PURE__*/ _jsxs(Box, {
                display: "flex",
                alignItems: "center",
                mb: 2,
                children: [
                    /*#__PURE__*/ _jsx(NotificationsIcon, {
                        color: "primary",
                        sx: {
                            mr: 1
                        }
                    }),
                    /*#__PURE__*/ _jsxs(Typography, {
                        variant: "h6",
                        color: "primary",
                        children: [
                            "未处理的邀请 (",
                            invitations.length,
                            ")"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Stack, {
                spacing: 2,
                children: invitations.map((invitation)=>/*#__PURE__*/ _jsx(PendingInvitationCard, {
                        invitation: invitation,
                        onRespond: (action)=>handleRespondToInvite(invitation.invitation_id, action),
                        isProcessing: isProcessing
                    }, invitation.invitation_id))
            })
        ]
    });
};
/* harmony default export */ const components_PendingInvitationsList_PendingInvitationsList = ((/* unused pure expression or super */ null && (PendingInvitationsList_PendingInvitationsList)));

;// ./src/components/pre-alarm-config2/index.tsx









const pre_alarm_config2_PRE_ALARM_CONFIG_KEY = 'PRE_ALARM_ACTIONS_CONFIG';
const pre_alarm_config2_defaultSoundResources = [
    {
        id: 'siren_gentle',
        name: '缓和警报'
    },
    {
        id: 'beep_short',
        name: '短提示音'
    },
    {
        id: 'alarm_clock',
        name: '闹钟'
    }
];
const pre_alarm_config2_SortableActionItem = (param)=>{
    let { action, isPlaying, onUpdate, onRemove, onPreview, onStopPreview } = param;
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: action.id
    });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.8 : 1,
        zIndex: isDragging ? 1 : 'auto'
    };
    return /*#__PURE__*/ _jsxs(Paper, {
        ref: setNodeRef,
        style: style,
        elevation: isDragging ? 3 : 1,
        sx: {
            p: 2,
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            userSelect: 'none'
        },
        children: [
            /*#__PURE__*/ _jsx(Box, {
                ...attributes,
                ...listeners,
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'grab',
                    touchAction: 'none'
                },
                children: /*#__PURE__*/ _jsx(DragIndicatorIcon, {})
            }),
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    flexGrow: 1
                },
                children: /*#__PURE__*/ _jsxs(Box, {
                    sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 1.5
                    },
                    children: [
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "subtitle2",
                            children: action.type === 'sound' ? '声音' : '震动'
                        }),
                        /*#__PURE__*/ _jsx(TextField, {
                            size: "small",
                            type: "number",
                            label: "持续时间 (ms)",
                            value: action.duration,
                            onChange: (e)=>onUpdate(action.id, {
                                    duration: parseInt(e.target.value, 10) || 0
                                }),
                            sx: {
                                width: '100%'
                            }
                        }),
                        action.type === 'sound' && /*#__PURE__*/ _jsxs(FormControl, {
                            size: "small",
                            sx: {
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ _jsx(InputLabel, {
                                    children: "声音类型"
                                }),
                                /*#__PURE__*/ _jsx(Select, {
                                    value: action.resourceId || '',
                                    label: "声音类型",
                                    onChange: (e)=>onUpdate(action.id, {
                                            resourceId: e.target.value
                                        }),
                                    startAdornment: /*#__PURE__*/ _jsx(Tooltip, {
                                        title: isPlaying ? "停止" : "试听",
                                        children: /*#__PURE__*/ _jsx(IconButton, {
                                            size: "small",
                                            onClick: ()=>isPlaying ? onStopPreview() : onPreview(action.resourceId),
                                            sx: {
                                                mr: 1
                                            },
                                            children: isPlaying ? /*#__PURE__*/ _jsx(Stop, {
                                                fontSize: "small"
                                            }) : /*#__PURE__*/ _jsx(PlayArrow, {
                                                fontSize: "small"
                                            })
                                        })
                                    }),
                                    children: pre_alarm_config2_defaultSoundResources.map((sound)=>/*#__PURE__*/ _jsx(MenuItem, {
                                            value: sound.id,
                                            children: sound.name
                                        }, sound.id))
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(IconButton, {
                onClick: ()=>onRemove(action.id),
                size: "small",
                color: "error",
                children: /*#__PURE__*/ _jsx(Delete, {})
            })
        ]
    });
};
const pre_alarm_config2_PreAlarmConfig2 = ()=>{
    const [config, setConfig] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [playingSoundId, setPlayingSoundId] = useState(null);
    const debouncedWrite = useCallback(debounce((newConfig)=>{
        autoJsStoreUtils.write(pre_alarm_config2_PRE_ALARM_CONFIG_KEY, newConfig);
    }, 500), []);
    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: {
            distance: 8
        }
    }), useSensor(TouchSensor, {
        activationConstraint: {
            delay: 250,
            tolerance: 5
        }
    }), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
    }));
    React.useEffect(()=>{
        const loadConfig = async ()=>{
            const storedConfig = await autoJsStoreUtils.read(pre_alarm_config2_PRE_ALARM_CONFIG_KEY);
            if (storedConfig) {
                const actionsWithIds = storedConfig.actions.map((action)=>({
                        ...action,
                        id: action.id || "action-".concat(Math.random().toString(36).substr(2, 9))
                    }));
                setConfig({
                    ...storedConfig,
                    actions: actionsWithIds
                });
            } else {
                setConfig({
                    enabled: true,
                    actions: [],
                    maxWaitDuration: 30000
                });
            }
        };
        loadConfig();
    }, []);
    const updateConfig = useCallback((updates)=>{
        setConfig((prev)=>{
            if (!prev) return null;
            const newConfig = {
                ...prev,
                ...updates
            };
            debouncedWrite(newConfig);
            return newConfig;
        });
    }, [
        debouncedWrite
    ]);
    const handleToggleEnabled = (event)=>{
        updateConfig({
            enabled: event.target.checked
        });
    };
    const handleAddAction = (type)=>{
        const newAction = {
            id: "action-".concat(Date.now()),
            type,
            duration: 8000,
            ...type === 'sound' && {
                resourceId: pre_alarm_config2_defaultSoundResources[0].id
            }
        };
        updateConfig({
            actions: [
                ...(config === null || config === void 0 ? void 0 : config.actions) || [],
                newAction
            ]
        });
    };
    const handleUpdateAction = (id, updates)=>{
        if (!config) return;
        updateConfig({
            actions: config.actions.map((action)=>action.id === id ? {
                    ...action,
                    ...updates
                } : action)
        });
    };
    const handleRemoveAction = (id)=>{
        if (!config) return;
        updateConfig({
            actions: config.actions.filter((action)=>action.id !== id)
        });
    };
    const handleDragEnd = (event)=>{
        const { active, over } = event;
        if (!config || !over || active.id === over.id) return;
        const oldIndex = config.actions.findIndex((a)=>a.id === active.id);
        const newIndex = config.actions.findIndex((a)=>a.id === over.id);
        if (oldIndex !== -1 && newIndex !== -1) {
            updateConfig({
                actions: arrayMove(config.actions, oldIndex, newIndex)
            });
        }
    };
    const handlePreviewSound = (resourceId)=>{
        if (!resourceId) return;
        handleStopSound();
        console.log("[WebView] Attempting to preview sound. resourceId: ".concat(resourceId));
        if (window.SoundManager) {
            window.SoundManager.previewSound(resourceId);
            setPlayingSoundId(resourceId);
        } else {
            console.warn('SoundManager JavascriptInterface is not available.');
        }
    };
    const handleStopSound = ()=>{
        if (window.SoundManager) {
            window.SoundManager.stopPreview();
        }
        setPlayingSoundId(null);
    };
    if (!config) {
        return /*#__PURE__*/ _jsx(Box, {
            sx: {
                p: 2,
                textAlign: 'center'
            },
            children: "加载中..."
        });
    }
    return /*#__PURE__*/ _jsxs(Box, {
        sx: {
            mb: 3
        },
        children: [
            /*#__PURE__*/ _jsxs(Paper, {
                elevation: 1,
                sx: {
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 1
                },
                children: [
                    /*#__PURE__*/ _jsxs(Box, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ _jsx(Typography, {
                                variant: "subtitle1",
                                children: "防误触报警设置"
                            }),
                            /*#__PURE__*/ _jsx(FormControlLabel, {
                                control: /*#__PURE__*/ _jsx(Switch, {
                                    checked: config.enabled,
                                    onChange: handleToggleEnabled,
                                    color: "primary"
                                }),
                                label: config.enabled ? '已启用' : '已禁用'
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(Button, {
                        variant: "outlined",
                        size: "small",
                        startIcon: expanded ? /*#__PURE__*/ _jsx(ExpandLess, {}) : /*#__PURE__*/ _jsx(Settings, {}),
                        onClick: ()=>setExpanded(!expanded),
                        children: expanded ? '收起设置' : '设置'
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Collapse, {
                in: expanded,
                children: /*#__PURE__*/ _jsxs(Paper, {
                    elevation: 0,
                    sx: {
                        mt: 1,
                        p: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1
                    },
                    children: [
                        /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                mb: 3
                            },
                            children: [
                                /*#__PURE__*/ _jsx(Typography, {
                                    variant: "subtitle2",
                                    gutterBottom: true,
                                    children: "最大等待时间 (毫秒)"
                                }),
                                /*#__PURE__*/ _jsx(TextField, {
                                    fullWidth: true,
                                    type: "number",
                                    value: config.maxWaitDuration,
                                    onChange: (e)=>updateConfig({
                                            maxWaitDuration: parseInt(e.target.value, 10) || 0
                                        }),
                                    size: "small",
                                    InputProps: {
                                        endAdornment: /*#__PURE__*/ _jsx(Typography, {
                                            variant: "body2",
                                            sx: {
                                                ml: 1
                                            },
                                            children: "毫秒"
                                        })
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Divider, {
                            sx: {
                                my: 2
                            }
                        }),
                        /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                mb: 2
                            },
                            children: [
                                /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mb: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsxs(Typography, {
                                            variant: "subtitle2",
                                            children: [
                                                "预警动作 (",
                                                config.actions.length,
                                                ")"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs(Stack, {
                                            direction: "row",
                                            spacing: 1,
                                            children: [
                                                /*#__PURE__*/ _jsx(Button, {
                                                    variant: "outlined",
                                                    size: "small",
                                                    startIcon: /*#__PURE__*/ _jsx(VolumeUpIcon, {}),
                                                    onClick: ()=>handleAddAction('sound'),
                                                    children: "添加声音"
                                                }),
                                                /*#__PURE__*/ _jsx(Button, {
                                                    variant: "outlined",
                                                    size: "small",
                                                    startIcon: /*#__PURE__*/ _jsx(VibrationIcon, {}),
                                                    onClick: ()=>handleAddAction('vibration'),
                                                    children: "添加震动"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                config.actions.length === 0 ? /*#__PURE__*/ _jsx(Paper, {
                                    variant: "outlined",
                                    sx: {
                                        p: 3,
                                        textAlign: 'center',
                                        color: 'text.secondary'
                                    },
                                    children: /*#__PURE__*/ _jsx(Typography, {
                                        children: "暂无报警动作，请点击上方按钮添加"
                                    })
                                }) : /*#__PURE__*/ _jsx(DndContext, {
                                    sensors: sensors,
                                    collisionDetection: closestCenter,
                                    onDragEnd: handleDragEnd,
                                    children: /*#__PURE__*/ _jsx(SortableContext, {
                                        items: config.actions.map((a)=>a.id),
                                        strategy: verticalListSortingStrategy,
                                        children: config.actions.map((action)=>/*#__PURE__*/ _jsx(pre_alarm_config2_SortableActionItem, {
                                                action: action,
                                                isPlaying: playingSoundId === action.resourceId,
                                                onUpdate: handleUpdateAction,
                                                onRemove: handleRemoveAction,
                                                onPreview: handlePreviewSound,
                                                onStopPreview: handleStopSound
                                            }, action.id))
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const pre_alarm_config2 = ((/* unused pure expression or super */ null && (pre_alarm_config2_PreAlarmConfig2)));

;// ./src/components/privacies/PrivacyDialogAuto.tsx





let autoOpened = false; // 用于标记是否已经自动弹出过隐私协议
/**
 * 自动逻辑组件 - 负责处理隐私协议的自动弹出逻辑
 * 包含原有的35-49行逻辑：检查用户是否已同意、是否在冷却期等
 */ function PrivacyDialogAuto_PrivacyDialogAuto(param) {
    let { type, area } = param;
    const [open, setOpen] = useState(false);
    // const [autoOpened, setAutoOpened] = useState(false);
    const handleClose = ()=>{
        autoOpened = true; // 设置为已自动弹出
        setOpen(false);
    // setAutoOpened(true);
    };
    // 原有的自动弹出逻辑 (35-49行)
    useEffect(()=>{
        const def = {
            agree: false,
            disagreeTime: 0
        };
        const res = autoJsStoreUtils.read("privacy_".concat(type), def);
        const value = res && 'agree' in res ? res : def;
        if (autoOpened) {
            //自动检测已经弹出过了就不再弹了
            return;
        }
        // 不在Android环境中不弹出
        if (!isRealInAndroid) {
            return;
        }
        // 已经同意了，不弹出
        if (value.agree) {
            return;
        }
        // 在冷却期内（拒绝后3天内），不弹出
        if (value.disagreeTime && value.disagreeTime != 0 && value.disagreeTime + 3 * 24 * 60 * 60 * 1000 > Date.now()) {
            return;
        }
        // 满足条件，弹出隐私协议
        setOpen(true);
    }, [
        type
    ]);
    return /*#__PURE__*/ _jsx(PrivacyDialogDisplay, {
        open: open,
        onClose: handleClose,
        type: type,
        area: area
    });
}

;// ./src/components/privacies/ListenShowPrivacyContent.tsx




function ListenShowPrivacyContent_ListenShowPrivacyContent(param) {
    let { type } = param;
    const [open, setOpen] = useState(false);
    function onClose() {
        setOpen(false);
    }
    useEffect(()=>{
        const value = autoJsStoreUtils.read("privacy_".concat(type), false);
    }, []);
    return /*#__PURE__*/ _jsx(PrivacyDialogAuto, {
        type: type,
        area: "zh-cn"
    });
}

;// ./src/components/permission-status/PermissionStatusPanel.tsx






const permission_status_PermissionStatusPanel_PermissionStatusPanel = ()=>{
    const [permissionsData, setPermissionsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [infoDialogOpen, setInfoDialogOpen] = useState(false);
    const [selectedPermission, setSelectedPermission] = useState(null);
    const fetchPermissions = async ()=>{
        try {
            if (!isRealInAndroid) return;
            setLoading(true);
            setError(null);
            // 权限刷新埋点
            trackingPrint({
                params: {
                    type: "用户操作",
                    title: "权限检查",
                    subtitle: "权限刷新-开始",
                    extra: {
                        timestamp: Date.now(),
                        isAndroid: isRealInAndroid
                    }
                }
            });
            const script = "\n        var info = com.fanfanlo.emergencycall.manager.PermissionJSInterface.getAllPermissionsStatus();\n        info;\n      ";
            const { javaResultString } = autoWebViewJs.callScript(script);
            if (!javaResultString) {
                throw new Error('No response from permission interface');
            }
            const data = JSON.parse(javaResultString);
            if (data.error) {
                throw new Error(data.error);
            }
            setPermissionsData(data);
            console.log('Permissions data loaded:', data);
            // 权限加载成功埋点
            trackingPrint({
                params: {
                    type: "系统事件",
                    title: "权限检查",
                    subtitle: "权限加载-成功",
                    extra: {
                        timestamp: Date.now(),
                        permissionsCount: data.permissions.length,
                        grantedCount: data.permissions.filter((p)=>p.status === 'granted').length,
                        deniedCount: data.permissions.filter((p)=>p.status === 'denied').length,
                        unknownCount: data.permissions.filter((p)=>p.status === 'unknown').length,
                        deviceBrand: data.deviceBrand,
                        apiLevel: data.apiLevel
                    }
                }
            });
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            setError(errorMessage);
            console.error('Error fetching permissions:', err);
            // 权限加载失败埋点
            trackingPrint({
                params: {
                    type: "系统异常",
                    title: "权限检查",
                    subtitle: "权限加载-失败",
                    extra: {
                        timestamp: Date.now(),
                        error: errorMessage,
                        isAndroid: isRealInAndroid
                    }
                }
            });
        } finally{
            setLoading(false);
        }
    };
    useEffect(()=>{
        fetchPermissions();
    }, []);
    const handleOpenSettings = (permission)=>{
        try {
            // 权限设置按钮点击埋点
            trackingPrint({
                params: {
                    type: "用户操作",
                    title: "权限设置",
                    subtitle: "设置按钮-点击",
                    extra: {
                        timestamp: Date.now(),
                        permissionId: permission.id,
                        permissionName: permission.name,
                        permissionType: permission.type,
                        currentStatus: permission.status,
                        canDetect: permission.canDetect
                    }
                }
            });
            const script = '\n        com.fanfanlo.emergencycall.manager.PermissionJSInterface.openPermissionSettings("'.concat(permission.id, '");\n      ');
            autoWebViewJs.callScript(script);
            console.log("Opening settings for permission: ".concat(permission.id));
            // 如果是消息推送权限，用户从设置页面返回后自动检查JPush状态
            if (permission.id === 'notification') {
                // 延迟执行，给用户时间完成权限设置
                setTimeout(()=>{
                    try {
                        const jpushScript = "\n              com.fanfanlo.emergencycall.jpush.JpushManager.checkAndReinitializeIfNeeded();\n            ";
                        autoWebViewJs.callScript(jpushScript);
                        console.log('JPush reinitialization check triggered');
                        // 刷新权限状态
                        setTimeout(()=>fetchPermissions(), 1000);
                    } catch (jpushErr) {
                        console.error('Error checking JPush status:', jpushErr);
                        // JPush重新初始化失败埋点
                        trackingPrint({
                            params: {
                                type: "系统异常",
                                title: "JPush重初始化",
                                subtitle: "JPush-重初始化失败",
                                extra: {
                                    timestamp: Date.now(),
                                    error: jpushErr instanceof Error ? jpushErr.message : String(jpushErr)
                                }
                            }
                        });
                    }
                }, 3000); // 3秒后检查
            }
        } catch (err) {
            console.error('Error opening permission settings:', err);
            // 权限设置打开失败埋点
            trackingPrint({
                params: {
                    type: "系统异常",
                    title: "权限设置",
                    subtitle: "设置打开-失败",
                    extra: {
                        timestamp: Date.now(),
                        permissionId: permission.id,
                        error: err instanceof Error ? err.message : String(err)
                    }
                }
            });
        }
    };
    const handleConfirmLockScreenPermission = ()=>{
        try {
            // 锁屏权限确认埋点
            trackingPrint({
                params: {
                    type: "用户操作",
                    title: "锁屏权限",
                    subtitle: "权限确认-点击",
                    extra: {
                        timestamp: Date.now()
                    }
                }
            });
            const script = "\n        com.fanfanlo.emergencycall.manager.PermissionJSInterface.confirmLockScreenPermission();\n      ";
            autoWebViewJs.callScript(script);
            console.log('Confirmed lock screen permission');
            // 刷新权限状态
            setTimeout(()=>fetchPermissions(), 500);
        } catch (err) {
            console.error('Error confirming lock screen permission:', err);
            // 锁屏权限确认失败埋点
            trackingPrint({
                params: {
                    type: "系统异常",
                    title: "锁屏权限",
                    subtitle: "权限确认-失败",
                    extra: {
                        timestamp: Date.now(),
                        error: err instanceof Error ? err.message : String(err)
                    }
                }
            });
        }
    };
    const handleShowPermissionInfo = (permission)=>{
        // 权限信息查看埋点
        trackingPrint({
            params: {
                type: "用户操作",
                title: "权限信息",
                subtitle: "信息按钮-点击",
                extra: {
                    timestamp: Date.now(),
                    permissionId: permission.id,
                    permissionName: permission.name,
                    permissionStatus: permission.status
                }
            }
        });
        setSelectedPermission(permission);
        setInfoDialogOpen(true);
    };
    const handleCloseInfoDialog = ()=>{
        // 权限信息对话框关闭埋点
        trackingPrint({
            params: {
                type: "模态框操作",
                title: "权限信息",
                subtitle: "信息对话框-关闭",
                extra: {
                    timestamp: Date.now(),
                    permissionId: selectedPermission === null || selectedPermission === void 0 ? void 0 : selectedPermission.id
                }
            }
        });
        setInfoDialogOpen(false);
        setSelectedPermission(null);
    };
    const getPermissionReason = (permission)=>{
        const reasonMap = {
            'android.permission.ACCESS_FINE_LOCATION': '精确定位权限用于在紧急情况下获取您的准确位置信息，以便救援人员能够快速找到您。这对于户外活动、老人独居等场景下的紧急救助至关重要。',
            'android.permission.ACCESS_COARSE_LOCATION': '大概位置权限作为精确定位的备用选择，在精确定位不可用时仍能提供基本的位置信息，确保紧急情况下不会完全失去位置服务。',
            'android.permission.BODY_SENSORS': '身体传感器权限用于访问手机的加速度计、陀螺仪等传感器，实现跌倒检测功能。当检测到您可能发生跌倒时，系统会自动触发紧急呼叫，对老人和高危工作者尤为重要。',
            'android.permission.CAMERA': '相机权限用于在紧急情况下自动拍摄现场照片，为救援人员和家属提供重要的环境信息，帮助判断紧急情况的严重程度和选择合适的救援方案。',
            'android.permission.RECORD_AUDIO': '录音权限用于记录紧急情况发生时的环境声音，可以为救援人员提供重要线索，同时支持语音紧急呼叫功能，让您在无法操作手机时也能求救。',
            'android.permission.ACTIVITY_RECOGNITION': '身体活动识别权限用于识别您当前的活动状态(如走路、跑步、静止等)，结合传感器数据提高跌倒检测的准确性，减少误报的同时确保真正的紧急情况不会被遗漏。',
            'overlay': '悬浮窗权限允许应用在任何界面上显示紧急呼叫窗口，确保即使您在使用其他应用时，紧急呼叫功能也能立即激活，不会被其他应用界面阻挡。',
            'lock_screen_popup': '后台弹出界面权限确保应用在后台运行时仍能在检测到紧急情况时立即弹出呼叫界面，即使手机处于息屏或锁定状态也不会影响紧急功能的响应速度。',
            'lock_screen_display': '锁屏显示权限允许应用在手机锁屏状态下显示紧急信息和呼叫界面，确保紧急情况发生时不会因为屏幕锁定而延误救援时机。这对于意外昏迷等无法解锁手机的情况尤为重要。',
            'desktop_shortcut': '桌面快捷方式权限允许应用在桌面创建一键紧急呼叫的快捷图标，让您在紧急情况下能够更快速地启动求救功能，特别适合老年用户或紧急情况下的快速操作。',
            'notification': '消息推送权限用于接收紧急呼叫、跌倒检测警报、系统通知等重要消息。这是确保您能及时收到紧急信息和家人求救通知的关键权限，对于紧急救援场景至关重要。'
        };
        return reasonMap[permission.id] || '该权限对于应用的正常运行是必要的，请根据您的需要进行授权。';
    };
    const getPermissionImpact = (permission)=>{
        const impactMap = {
            'android.permission.ACCESS_FINE_LOCATION': '🚨 高影响：没有位置权限将无法在紧急情况下提供准确的位置信息给救援人员',
            'android.permission.ACCESS_COARSE_LOCATION': '⚠️ 中影响：作为位置服务的备用选择，建议配合精确位置一起授权',
            'android.permission.BODY_SENSORS': '🚨 高影响：没有此权限将无法实现自动跌倒检测功能',
            'android.permission.CAMERA': '⚠️ 中影响：无法自动拍摄现场照片，但不影响基本呼叫功能',
            'android.permission.RECORD_AUDIO': '⚠️ 中影响：无法录制环境音或使用语音功能，但不影响基本呼叫功能',
            'android.permission.ACTIVITY_RECOGNITION': '⚠️ 中影响：跌倒检测准确性可能降低，增加误报或漏报风险',
            'overlay': '🚨 高影响：无法在其他应用界面上显示紧急呼叫，可能错过紧急救援时机',
            'lock_screen_popup': '🚨 高影响：手机锁屏时无法自动弹出紧急呼叫界面',
            'lock_screen_display': '🚨 高影响：锁屏状态下无法显示紧急信息，可能延误救援',
            'desktop_shortcut': '💡 低影响：无法创建桌面快捷方式，但不影响应用内的紧急呼叫功能',
            'notification': '🚨 高影响：无法接收紧急推送消息，可能错过家人求救信号或重要安全警报'
        };
        return impactMap[permission.id] || '该权限的具体影响取决于您的使用场景。';
    };
    const getStatusIcon = (permission)=>{
        const iconProps = {
            fontSize: 18
        };
        switch(permission.status){
            case 'granted':
                return /*#__PURE__*/ _jsx(CheckCircleIcon, {
                    sx: {
                        color: 'success.main',
                        ...iconProps
                    }
                });
            case 'denied':
                return /*#__PURE__*/ _jsx(ErrorIcon, {
                    sx: {
                        color: 'error.main',
                        ...iconProps
                    }
                });
            case 'unknown':
                return /*#__PURE__*/ _jsx(HelpIcon, {
                    sx: {
                        color: 'warning.main',
                        ...iconProps
                    }
                });
            default:
                return /*#__PURE__*/ _jsx(HelpIcon, {
                    sx: {
                        color: 'grey.500',
                        ...iconProps
                    }
                });
        }
    };
    const getStatusChip = (permission)=>{
        const statusConfig = {
            granted: {
                label: '✓',
                color: 'success'
            },
            denied: {
                label: '✗',
                color: 'error'
            },
            unknown: {
                label: '?',
                color: 'warning'
            }
        };
        const config = statusConfig[permission.status];
        return /*#__PURE__*/ _jsx(Chip, {
            label: config.label,
            color: config.color,
            size: "small",
            sx: {
                minWidth: 24,
                height: 20,
                fontSize: '0.7rem',
                '& .MuiChip-label': {
                    px: 0.5
                }
            }
        });
    };
    const getTypeLabel = (type)=>{
        const typeLabels = {
            runtime: '运行时',
            special: '特殊',
            vendor: '厂商'
        };
        return typeLabels[type] || type;
    };
    if (loading) {
        return /*#__PURE__*/ _jsxs(Box, {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "120px",
            children: [
                /*#__PURE__*/ _jsx(CircularProgress, {
                    size: 20
                }),
                /*#__PURE__*/ _jsx(Typography, {
                    variant: "caption",
                    sx: {
                        ml: 1
                    },
                    children: "加载中..."
                })
            ]
        });
    }
    if (error) {
        return /*#__PURE__*/ _jsxs(Alert, {
            severity: "error",
            sx: {
                py: 1
            },
            children: [
                /*#__PURE__*/ _jsxs(Typography, {
                    variant: "body2",
                    children: [
                        "权限检查失败: ",
                        error
                    ]
                }),
                /*#__PURE__*/ _jsx(Button, {
                    onClick: ()=>{
                        // 重试按钮点击埋点
                        trackingPrint({
                            params: {
                                type: "用户操作",
                                title: "权限检查",
                                subtitle: "重试按钮-点击",
                                extra: {
                                    timestamp: Date.now(),
                                    previousError: error
                                }
                            }
                        });
                        fetchPermissions();
                    },
                    size: "small",
                    sx: {
                        mt: 0.5
                    },
                    children: "重试"
                })
            ]
        });
    }
    if (!permissionsData) {
        return /*#__PURE__*/ _jsx(Alert, {
            severity: "info",
            sx: {
                py: 1
            },
            children: /*#__PURE__*/ _jsx(Typography, {
                variant: "body2",
                children: "无权限数据，请重新加载"
            })
        });
    }
    const { permissions, deviceBrand, apiLevel } = permissionsData;
    return /*#__PURE__*/ _jsxs(Paper, {
        elevation: 1,
        sx: {
            p: 1
        },
        children: [
            /*#__PURE__*/ _jsxs(Box, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
                children: [
                    /*#__PURE__*/ _jsxs(Box, {
                        display: "flex",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ _jsx(SecurityIcon, {
                                sx: {
                                    mr: 0.5,
                                    color: 'primary.main',
                                    fontSize: 18
                                }
                            }),
                            /*#__PURE__*/ _jsx(Typography, {
                                variant: "body2",
                                fontWeight: "medium",
                                children: "权限状态"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(Tooltip, {
                        title: "刷新",
                        children: /*#__PURE__*/ _jsx(IconButton, {
                            onClick: ()=>{
                                // 刷新按钮点击埋点
                                trackingPrint({
                                    params: {
                                        type: "用户操作",
                                        title: "权限检查",
                                        subtitle: "刷新按钮-点击",
                                        extra: {
                                            timestamp: Date.now(),
                                            currentPermissionsCount: (permissionsData === null || permissionsData === void 0 ? void 0 : permissionsData.permissions.length) || 0
                                        }
                                    }
                                });
                                fetchPermissions();
                            },
                            size: "small",
                            sx: {
                                p: 0.5
                            },
                            children: /*#__PURE__*/ _jsx(RefreshIcon, {
                                fontSize: "small"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Alert, {
                severity: "info",
                sx: {
                    mb: 1,
                    py: 0.5
                },
                children: [
                    /*#__PURE__*/ _jsx(Typography, {
                        variant: "caption",
                        display: "block",
                        children: "\uD83D\uDFE2已授权 \uD83D\uDD34未授权 \uD83D\uDFE1无法检测"
                    }),
                    /*#__PURE__*/ _jsxs(Typography, {
                        variant: "caption",
                        color: "textSecondary",
                        children: [
                            deviceBrand,
                            " • API",
                            apiLevel
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(List, {
                sx: {
                    py: 0
                },
                children: permissions.map((permission)=>/*#__PURE__*/ _jsxs(ListItem, {
                        sx: {
                            borderLeft: 2,
                            borderLeftColor: permission.status === 'granted' ? 'success.main' : permission.status === 'denied' ? 'error.main' : 'warning.main',
                            mb: 0.5,
                            py: 0.5,
                            px: 0.5,
                            borderRadius: 0.5,
                            bgcolor: 'grey.50',
                            display: 'block' // 改为block布局
                        },
                        children: [
                            /*#__PURE__*/ _jsxs(Box, {
                                display: "flex",
                                alignItems: "center",
                                mb: 0.5,
                                children: [
                                    /*#__PURE__*/ _jsx(Box, {
                                        sx: {
                                            mr: 0.5
                                        },
                                        children: getStatusIcon(permission)
                                    }),
                                    /*#__PURE__*/ _jsx(Typography, {
                                        variant: "body2",
                                        fontWeight: "medium",
                                        sx: {
                                            flex: 1,
                                            minWidth: 0
                                        },
                                        children: permission.name
                                    }),
                                    /*#__PURE__*/ _jsx(Tooltip, {
                                        title: "查看权限说明",
                                        children: /*#__PURE__*/ _jsx(IconButton, {
                                            size: "small",
                                            onClick: ()=>handleShowPermissionInfo(permission),
                                            sx: {
                                                mr: 0.5,
                                                p: 0.25
                                            },
                                            children: /*#__PURE__*/ _jsx(InfoIcon, {
                                                sx: {
                                                    fontSize: 16,
                                                    color: 'primary.main'
                                                }
                                            })
                                        })
                                    }),
                                    getStatusChip(permission)
                                ]
                            }),
                            /*#__PURE__*/ _jsx(Box, {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mb: 0.5,
                                children: /*#__PURE__*/ _jsxs(Box, {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                    children: [
                                        /*#__PURE__*/ _jsx(Chip, {
                                            label: getTypeLabel(permission.type),
                                            variant: "outlined",
                                            size: "small",
                                            sx: {
                                                fontSize: '0.65rem',
                                                height: 18,
                                                '& .MuiChip-label': {
                                                    px: 0.5,
                                                    py: 0
                                                }
                                            }
                                        }),
                                        !permission.canDetect && /*#__PURE__*/ _jsx(Typography, {
                                            variant: "caption",
                                            color: "textSecondary",
                                            sx: {
                                                fontSize: '0.65rem'
                                            },
                                            children: "需确认"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx(Box, {
                                display: "flex",
                                gap: 0.5,
                                children: /*#__PURE__*/ _jsx(Button, {
                                    variant: "outlined",
                                    size: "small",
                                    startIcon: /*#__PURE__*/ _jsx(SettingsIcon, {
                                        sx: {
                                            fontSize: 12
                                        }
                                    }),
                                    onClick: ()=>handleOpenSettings(permission),
                                    sx: {
                                        fontSize: '0.65rem',
                                        minWidth: 'auto',
                                        px: 0.5,
                                        py: 0.25,
                                        height: 24
                                    },
                                    children: "设置"
                                })
                            })
                        ]
                    }, permission.id))
            }),
            /*#__PURE__*/ _jsx(Box, {
                mt: 0.5,
                py: 0.25,
                px: 0.5,
                bgcolor: "grey.100",
                borderRadius: 0.25,
                children: /*#__PURE__*/ _jsxs(Typography, {
                    variant: "caption",
                    color: "textSecondary",
                    sx: {
                        fontSize: '0.6rem'
                    },
                    children: [
                        "更新: ",
                        new Date(permissionsData.timestamp).toLocaleTimeString()
                    ]
                })
            }),
            /*#__PURE__*/ _jsxs(Dialog, {
                open: infoDialogOpen,
                onClose: handleCloseInfoDialog,
                maxWidth: "sm",
                fullWidth: true,
                PaperProps: {
                    sx: {
                        mx: 1
                    } // 移动端适配
                },
                children: [
                    /*#__PURE__*/ _jsx(DialogTitle, {
                        sx: {
                            pb: 1
                        },
                        children: /*#__PURE__*/ _jsxs(Box, {
                            display: "flex",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ _jsx(SecurityIcon, {
                                    sx: {
                                        mr: 1,
                                        color: 'primary.main'
                                    }
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    children: [
                                        /*#__PURE__*/ _jsx(Typography, {
                                            variant: "h6",
                                            component: "div",
                                            children: selectedPermission === null || selectedPermission === void 0 ? void 0 : selectedPermission.name
                                        }),
                                        /*#__PURE__*/ _jsxs(Typography, {
                                            variant: "caption",
                                            color: "textSecondary",
                                            children: [
                                                selectedPermission && getTypeLabel(selectedPermission.type),
                                                "权限"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(DialogContent, {
                        sx: {
                            pt: 0
                        },
                        children: selectedPermission && /*#__PURE__*/ _jsxs(Box, {
                            children: [
                                /*#__PURE__*/ _jsxs(Box, {
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 2,
                                    children: [
                                        /*#__PURE__*/ _jsx(Typography, {
                                            variant: "subtitle2",
                                            sx: {
                                                mr: 1
                                            },
                                            children: "当前状态:"
                                        }),
                                        /*#__PURE__*/ _jsxs(Box, {
                                            display: "flex",
                                            alignItems: "center",
                                            children: [
                                                getStatusIcon(selectedPermission),
                                                /*#__PURE__*/ _jsx(Typography, {
                                                    variant: "body2",
                                                    sx: {
                                                        ml: 0.5
                                                    },
                                                    children: selectedPermission.status === 'granted' ? '已授权' : selectedPermission.status === 'denied' ? '未授权' : '待确认'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(Divider, {
                                    sx: {
                                        mb: 2
                                    }
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    mb: 2,
                                    children: [
                                        /*#__PURE__*/ _jsx(Typography, {
                                            variant: "subtitle2",
                                            gutterBottom: true,
                                            color: "primary.main",
                                            children: "\uD83C\uDFAF 为什么需要这个权限？"
                                        }),
                                        /*#__PURE__*/ _jsx(Typography, {
                                            variant: "body2",
                                            color: "textSecondary",
                                            lineHeight: 1.6,
                                            children: getPermissionReason(selectedPermission)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(Divider, {
                                    sx: {
                                        mb: 2
                                    }
                                }),
                                /*#__PURE__*/ _jsxs(Box, {
                                    mb: 1,
                                    children: [
                                        /*#__PURE__*/ _jsx(Typography, {
                                            variant: "subtitle2",
                                            gutterBottom: true,
                                            color: "warning.main",
                                            children: "⚡ 不授权的影响"
                                        }),
                                        /*#__PURE__*/ _jsx(Typography, {
                                            variant: "body2",
                                            color: "textSecondary",
                                            lineHeight: 1.6,
                                            children: getPermissionImpact(selectedPermission)
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsxs(DialogActions, {
                        sx: {
                            px: 3,
                            pb: 2
                        },
                        children: [
                            /*#__PURE__*/ _jsx(Button, {
                                onClick: ()=>{
                                    // 权限信息"我知道了"按钮埋点
                                    trackingPrint({
                                        params: {
                                            type: "用户操作",
                                            title: "权限信息",
                                            subtitle: "我知道了-点击",
                                            extra: {
                                                timestamp: Date.now(),
                                                permissionId: selectedPermission === null || selectedPermission === void 0 ? void 0 : selectedPermission.id,
                                                permissionStatus: selectedPermission === null || selectedPermission === void 0 ? void 0 : selectedPermission.status
                                            }
                                        }
                                    });
                                    handleCloseInfoDialog();
                                },
                                color: "primary",
                                children: "我知道了"
                            }),
                            selectedPermission && /*#__PURE__*/ _jsx(Button, {
                                variant: "contained",
                                onClick: ()=>{
                                    // 权限信息"去设置"按钮埋点
                                    trackingPrint({
                                        params: {
                                            type: "用户操作",
                                            title: "权限设置",
                                            subtitle: "去设置-对话框点击",
                                            extra: {
                                                timestamp: Date.now(),
                                                permissionId: selectedPermission.id,
                                                permissionName: selectedPermission.name,
                                                currentStatus: selectedPermission.status,
                                                fromDialog: true
                                            }
                                        }
                                    });
                                    handleOpenSettings(selectedPermission);
                                    handleCloseInfoDialog();
                                },
                                color: "primary",
                                children: "去设置"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// ./src/components/permission-status/index.ts


;// ./src/components/sensor-monitor/SensorMonitor.tsx







const SensorMonitor_SensorMonitor = ()=>{
    const [threshold, setThreshold] = useState('5.0');
    const [isMonitoring, setIsMonitoring] = useState(false);
    // 为每个对话框创建独立的状态
    const [isSensorInfoDialogOpen, setSensorInfoDialogOpen] = useState(false);
    const [isForegroundServiceDialogOpen, setForegroundServiceDialogOpen] = useState(false);
    // 使用useRef来保存回调函数，避免在re-render中丢失
    const sensorCallbackRef = useRef();
    const foregroundServiceCallbackRef = useRef();
    useEffect(()=>{
        try {
            const script = "\n      var thresholdValue = com.fanfanlo.emergencycall.manager.SensorManager.getThreshold();\n      thresholdValue;";
            const { javaResultString } = autoWebViewJs.callScript(script);
            const thresholdValue = parseFloat(javaResultString || '5.0');
            // console.log("script get threshold=", thresholdValue, javaResultString);
            setThreshold(thresholdValue.toString());
        } catch (error) {
            console.error('Error fetching initial threshold value:', error);
        }
    }, []);
    function readIsMonitoring() {
        try {
            const script = "\n      var isMonitoring = com.fanfanlo.emergencycall.manager.SensorManager.isMonitoring();\n      isMonitoring;";
            const { javaResultString } = autoWebViewJs.callScript(script);
            const isMonitoring = javaResultString === "true";
            // console.log("script get isMonitoring=", isMonitoring, javaResultString);
            setIsMonitoring(isMonitoring);
        } catch (error) {
            console.error('Error fetching initial monitoring state:', error);
        }
    }
    useEffect(()=>{
        readIsMonitoring();
    }, []);
    const handleSetThreshold = ()=>{
        const thresholdValue = parseFloat(threshold);
        if (isNaN(thresholdValue)) {
            alert('请输入一个有效的数字作为阈值。');
            return;
        }
        try {
            const script = "com.fanfanlo.emergencycall.manager.SensorManager.updateThreshold(".concat(thresholdValue, ");");
            autoWebViewJs.callScript(script);
            alert("阈值已设置为: ".concat(thresholdValue));
        } catch (error) {
            console.error('Error calling updateThreshold:', error);
            alert('设置阈值失败。请确保您在安卓应用中。');
        }
    };
    async function handleToggleMonitoring() {
        if (isMonitoring) {
            // 如果当前正在监控，则直接停止，不进行检查
            try {
                const script = "com.fanfanlo.emergencycall.manager.SensorManager.stopMonitoring();";
                autoWebViewJs.callScript(script);
                readIsMonitoring();
            } catch (error) {
                console.error('Error stopping monitoring:', error);
                alert('停止监控失败。');
            }
        } else {
            const appLoggedIn = await authService.showLoginDialog();
            if (!appLoggedIn) {
                alert("未登录无法使用该功能");
                return;
            }
            // 如果当前未监控，则检查权限，然后启动
            checkShowInfo((passed)=>{
                if (!passed) return; // 用户不同意，则不执行任何操作
                try {
                    const script = "com.fanfanlo.emergencycall.manager.SensorManager.startMonitoring();";
                    // const script = `com.fanfanlo.emergencycall.manager.SensorManagerShell.startMonitoring();`;
                    // const script = `com.fanfanlo.emergencycall.manager.SensorManagerShell.xx();`;
                    autoWebViewJs.callScript(script);
                    readIsMonitoring();
                } catch (error) {
                    console.error('Error starting monitoring:', error);
                    alert('开始监控失败。');
                }
            });
        }
    }
    ;
    useEffect(()=>{
        const id = setInterval(()=>{
            readIsMonitoring();
        }, 3000); // 每5秒检查一次监控状态
        return ()=>clearInterval(id);
    }, []);
    function checkShowSensorInfo(callback) {
        const info = autoJsStoreUtils.read('showSensorInfo', {
            passed: false
        });
        if (!info || !info.passed) {
            // 保存回调，并在Dialog操作后调用
            sensorCallbackRef.current = callback;
            // 打开传感器权限对话框
            setSensorInfoDialogOpen(true);
        } else {
            callback(true);
        }
    }
    function checkShowInfo(callback) {
        checkShowSensorInfo((passed)=>{
            if (!passed) {
                callback(false);
                return;
            }
            ;
            checkShowForegroundServiceInfo(callback);
        });
    }
    function checkShowForegroundServiceInfo(callback) {
        const info = autoJsStoreUtils.read('showForegroundServiceInfo', {
            passed: false
        });
        if (!info || !info.passed) {
            // 保存回调，并在Dialog操作后调用
            foregroundServiceCallbackRef.current = callback;
            // 打开前台服务对话框
            setForegroundServiceDialogOpen(true);
        } else {
            callback(true);
        }
    }
    // 传感器对话框的处理器
    const handleSensorDialog = (passed)=>{
        autoJsStoreUtils.write('showSensorInfo', {
            passed
        });
        setSensorInfoDialogOpen(false);
        if (sensorCallbackRef.current) {
            sensorCallbackRef.current(passed);
        }
    };
    // 前台服务对话框的处理器
    const handleForegroundServiceDialog = (passed)=>{
        autoJsStoreUtils.write('showForegroundServiceInfo', {
            passed
        });
        setForegroundServiceDialogOpen(false);
        if (foregroundServiceCallbackRef.current) {
            foregroundServiceCallbackRef.current(passed);
        }
    };
    return /*#__PURE__*/ _jsxs(Box, {
        children: [
            /*#__PURE__*/ _jsxs(Paper, {
                elevation: 3,
                sx: {
                    padding: 2,
                    marginBottom: 2
                },
                children: [
                    /*#__PURE__*/ _jsx(Typography, {
                        variant: "h6",
                        gutterBottom: true,
                        children: "传感器监控控制"
                    }),
                    /*#__PURE__*/ _jsxs(Box, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            marginBottom: 2
                        },
                        children: [
                            /*#__PURE__*/ _jsx(TextField, {
                                label: "震动阈值",
                                variant: "outlined",
                                type: "number",
                                value: threshold,
                                onChange: (e)=>setThreshold(e.target.value),
                                size: "small"
                            }),
                            /*#__PURE__*/ _jsx(Button, {
                                variant: "contained",
                                onClick: handleSetThreshold,
                                children: "设置"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(Button, {
                        variant: "contained",
                        color: isMonitoring ? 'error' : 'primary',
                        onClick: handleToggleMonitoring,
                        fullWidth: true,
                        children: isMonitoring ? '停止监控' : '开始监控'
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Accordion, {
                children: [
                    /*#__PURE__*/ _jsx(AccordionSummary, {
                        expandIcon: /*#__PURE__*/ _jsx(ExpandMoreIcon, {}),
                        "aria-controls": "permission-panel-content",
                        id: "permission-panel-header",
                        children: /*#__PURE__*/ _jsx(Typography, {
                            variant: "h6",
                            children: "权限状态检查"
                        })
                    }),
                    /*#__PURE__*/ _jsx(AccordionDetails, {
                        children: /*#__PURE__*/ _jsx(PermissionStatusPanel, {})
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Dialog, {
                open: isSensorInfoDialogOpen,
                onClose: ()=>handleSensorDialog(false),
                "aria-labelledby": "sensor-dialog-title",
                "aria-describedby": "sensor-dialog-description",
                children: [
                    /*#__PURE__*/ _jsx(DialogTitle, {
                        id: "sensor-dialog-title",
                        children: "传感器使用授权"
                    }),
                    /*#__PURE__*/ _jsx(DialogContent, {
                        children: /*#__PURE__*/ _jsx(DialogContentText, {
                            id: "sensor-dialog-description",
                            children: "我们需要获取您的身体传感器（如加速度计）权限，以实现跌倒检测功能。这对于在紧急情况下自动触发呼叫至关重要。您是否同意？"
                        })
                    }),
                    /*#__PURE__*/ _jsxs(DialogActions, {
                        children: [
                            /*#__PURE__*/ _jsx(Button, {
                                onClick: ()=>handleSensorDialog(false),
                                children: "不同意"
                            }),
                            /*#__PURE__*/ _jsx(Button, {
                                onClick: ()=>handleSensorDialog(true),
                                autoFocus: true,
                                children: "同意"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Dialog, {
                open: isForegroundServiceDialogOpen,
                onClose: ()=>handleForegroundServiceDialog(false),
                "aria-labelledby": "foreground-dialog-title",
                "aria-describedby": "foreground-dialog-description",
                children: [
                    /*#__PURE__*/ _jsx(DialogTitle, {
                        id: "foreground-dialog-title",
                        children: "启用前台服务通知"
                    }),
                    /*#__PURE__*/ _jsx(DialogContent, {
                        children: /*#__PURE__*/ _jsx(DialogContentText, {
                            id: "foreground-dialog-description",
                            children: "为了在应用退到后台后仍能持续监控传感器数据，我们需要启用一个前台服务。这会在您的设备通知栏显示一个持续的通知。您是否同意？"
                        })
                    }),
                    /*#__PURE__*/ _jsxs(DialogActions, {
                        children: [
                            /*#__PURE__*/ _jsx(Button, {
                                onClick: ()=>handleForegroundServiceDialog(false),
                                children: "不同意"
                            }),
                            /*#__PURE__*/ _jsx(Button, {
                                onClick: ()=>handleForegroundServiceDialog(true),
                                autoFocus: true,
                                children: "同意"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const sensor_monitor_SensorMonitor = ((/* unused pure expression or super */ null && (SensorMonitor_SensorMonitor)));

;// ./src/components/shakeconfig/ShakeConfigUI.tsx











const ShakeConfigUI_SHAKE_CONFIG_KEY = "shake_emergency_config";
// 阈值范围常量
const ShakeConfigUI_THRESHOLD_MIN = 0.1;
const ShakeConfigUI_THRESHOLD_MAX = 2.0;
const ShakeConfigUI_THRESHOLD_DEFAULT = 0.5;
// 默认配置
const ShakeConfigUI_defaultConfig = {
    enabled: false,
    shakeCount: 3,
    timeWindowMs: 2000,
    emergencyType: "medical",
    threshold: ShakeConfigUI_THRESHOLD_DEFAULT,
    vibrationFeedback: true,
    soundFeedback: false,
    actions: [],
    maxWaitDuration: 10000,
    version: 1
};
// 配置选项定义
const ShakeConfigUI_emergencyTypeOptions = [
    {
        value: "medical",
        label: "医疗报警"
    },
    {
        value: "security",
        label: "安全报警"
    }
];
// 默认声音资源
const ShakeConfigUI_defaultSoundResources = [
    {
        id: 'siren_gentle',
        name: '缓和警报'
    },
    {
        id: 'beep_short',
        name: '短提示音'
    },
    {
        id: 'alarm_clock',
        name: '闹钟'
    }
];
function ShakeConfigUI_loadConfig() {
    const conf = autoJsStoreUtils.read(ShakeConfigUI_SHAKE_CONFIG_KEY, {});
    const config = _.merge(ShakeConfigUI_defaultConfig, conf);
    return config;
}
const ShakeConfigUI_ShakeConfigUI = ()=>{
    const [isExpanded, setIsExpanded] = useState(false);
    const [config, setConfig] = useState(ShakeConfigUI_defaultConfig);
    const [isLoading, setIsLoading] = useState(true);
    const [lastSaveTime, setLastSaveTime] = useState('');
    const [playingSoundId, setPlayingSoundId] = useState(null);
    // 拖拽传感器配置
    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: {
            distance: 8
        }
    }), useSensor(TouchSensor, {
        activationConstraint: {
            delay: 250,
            tolerance: 5
        }
    }), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
    }));
    // 检测用户登录状态
    const [userToken] = useProxyWatch(user, 'data.storeData.user_token', user.data.storeData.user_token);
    const isLoggedIn = !!userToken;
    // 临时输入值状态，用于处理输入验证
    const [tempValues, setTempValues] = useState({});
    /**
   * 从Android端读取当前配置
   */ const loadConfigFromAndroid = useCallback(()=>{
        console.log('尝试从Android端读取摇一摇配置...');
        const conf = ShakeConfigUI_loadConfig();
        console.log(ShakeConfigUI_SHAKE_CONFIG_KEY, 'string', JSON.stringify(conf));
        setConfig(conf);
        setIsLoading(false);
    }, []);
    /**
   * 验证配置参数的有效性
   */ const validateConfig = (config)=>{
        return config.shakeCount >= 1 && config.shakeCount <= 10 && config.timeWindowMs > 0 && config.timeWindowMs <= 10000 && [
            'medical',
            'security'
        ].includes(config.emergencyType) && typeof config.threshold === 'number' && config.threshold >= 0 && config.version > 0;
    };
    /**
   * 保存配置到Android端
   */ const saveConfigToAndroid = useCallback((newConfig)=>{
        try {
            console.log('保存摇一摇配置到Android端:', newConfig);
            // 验证配置有效性
            if (!validateConfig(newConfig)) {
                console.error('配置参数无效，不进行保存');
                return;
            }
            // 构建配置JSON
            const configJson = JSON.stringify(newConfig);
            // 编码为Base64
            const base64Config = btoa(unescape(encodeURIComponent(configJson)));
            // 通过Rhino调用Android方法
            const script = '\n        \n          var result = com.fanfanlo.emergencycall.controller.ShakeManager.updateShakeConfig("'.concat(base64Config, '");\n          result;\n      ');
            autoWebViewJs.callScript(script);
            setLastSaveTime(new Date().toLocaleTimeString());
        } catch (error) {
            console.error('保存摇一摇配置失败:', error);
        }
    }, []);
    /**
   * 处理配置更新
   */ const updateConfig = useCallback((updates)=>{
        const newConfig = {
            ...config,
            ...updates
        };
        setConfig(newConfig);
        // 如果配置有效，自动保存
        if (validateConfig(newConfig)) {
            saveConfigToAndroid(newConfig);
        }
    }, [
        config,
        saveConfigToAndroid
    ]);
    /**
   * 处理数字输入框变更，带延迟验证
   */ const handleNumberInput = useCallback((field, value)=>{
        // 更新临时值
        setTempValues((prev)=>({
                ...prev,
                [field]: value
            }));
        // 清除之前的定时器
        const timerId = setTimeout(()=>{
            if (field === 'threshold') {
                // 处理阈值输入
                const numValue = parseFloat(value);
                if (!isNaN(numValue) && numValue >= 0) {
                    updateConfig({
                        [field]: numValue
                    });
                    setTempValues((prev)=>({
                            ...prev,
                            [field]: undefined
                        }));
                } else if (value === '') {
                    // 空值，等待用户继续输入
                    setTimeout(()=>{
                        if (tempValues[field] === '') {
                            setTempValues((prev)=>({
                                    ...prev,
                                    [field]: undefined
                                }));
                        }
                    }, 2000);
                } else {
                    // 无效值，恢复原值
                    setTimeout(()=>{
                        setTempValues((prev)=>({
                                ...prev,
                                [field]: undefined
                            }));
                    }, 2000);
                }
            } else {
                // 原有的整数处理逻辑保持不变
                const numValue = parseInt(value);
                if (!isNaN(numValue) && numValue > 0) {
                    if (field === 'shakeCount' && numValue >= 1 && numValue <= 10) {
                        updateConfig({
                            [field]: numValue
                        });
                        setTempValues((prev)=>({
                                ...prev,
                                [field]: undefined
                            }));
                    } else if (field === 'timeWindowMs' && numValue >= 1000 && numValue <= 10000) {
                        updateConfig({
                            [field]: numValue
                        });
                        setTempValues((prev)=>({
                                ...prev,
                                [field]: undefined
                            }));
                    } else {
                        setTimeout(()=>{
                            setTempValues((prev)=>({
                                    ...prev,
                                    [field]: undefined
                                }));
                        }, 2000);
                    }
                } else if (value === '') {
                    setTimeout(()=>{
                        if (tempValues[field] === '') {
                            setTempValues((prev)=>({
                                    ...prev,
                                    [field]: undefined
                                }));
                        }
                    }, 2000);
                } else {
                    setTimeout(()=>{
                        setTempValues((prev)=>({
                                ...prev,
                                [field]: undefined
                            }));
                    }, 2000);
                }
            }
        }, 500); // 500ms延迟
        return ()=>clearTimeout(timerId);
    }, [
        updateConfig,
        tempValues
    ]);
    /**
   * 预报警动作管理函数
   */ const handleAddPreAlarmAction = useCallback((type)=>{
        const newAction = {
            id: "action-".concat(Date.now()),
            type,
            duration: type === 'vibration' ? 1000 : 2000,
            ...type === 'sound' && {
                resourceId: ShakeConfigUI_defaultSoundResources[0].id
            }
        };
        updateConfig({
            actions: [
                ...config.actions,
                newAction
            ]
        });
    }, [
        config.actions,
        updateConfig
    ]);
    const handleUpdatePreAlarmAction = useCallback((id, updates)=>{
        updateConfig({
            actions: config.actions.map((action)=>action.id === id ? {
                    ...action,
                    ...updates
                } : action)
        });
    }, [
        config.actions,
        updateConfig
    ]);
    const handleRemovePreAlarmAction = useCallback((id)=>{
        updateConfig({
            actions: config.actions.filter((action)=>action.id !== id)
        });
    }, [
        config.actions,
        updateConfig
    ]);
    const handlePreviewSound = useCallback((resourceId)=>{
        if (!resourceId) return;
        handleStopSound();
        console.log("[ShakeConfig] Previewing sound: ".concat(resourceId));
        if (window.SoundManager) {
            window.SoundManager.previewSound(resourceId);
            setPlayingSoundId(resourceId);
        } else {
            console.warn('SoundManager not available');
        }
    }, []);
    const handleStopSound = useCallback(()=>{
        if (window.SoundManager) {
            window.SoundManager.stopPreview();
        }
        setPlayingSoundId(null);
    }, []);
    /**
   * 拖拽结束处理
   */ const handleDragEnd = useCallback((event)=>{
        const { active, over } = event;
        if (!over || active.id === over.id) return;
        const oldIndex = config.actions.findIndex((a)=>a.id === active.id);
        const newIndex = config.actions.findIndex((a)=>a.id === over.id);
        if (oldIndex !== -1 && newIndex !== -1) {
            updateConfig({
                actions: arrayMove(config.actions, oldIndex, newIndex)
            });
        }
    }, [
        config.actions,
        updateConfig
    ]);
    /**
   * 可拖拽的预报警动作项组件
   */ const SortablePreAlarmActionItem = (param)=>{
        let { action, isPlaying, onUpdate, onRemove, onPreview, onStopPreview, disabled } = param;
        const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
            id: action.id
        });
        const style = {
            transform: CSS.Transform.toString(transform),
            transition,
            opacity: isDragging ? 0.8 : 1,
            zIndex: isDragging ? 1 : 'auto'
        };
        return /*#__PURE__*/ _jsxs(Paper, {
            ref: setNodeRef,
            style: style,
            elevation: isDragging ? 3 : 1,
            sx: {
                p: 2,
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                userSelect: 'none',
                opacity: disabled ? 0.6 : 1
            },
            children: [
                /*#__PURE__*/ _jsx(Box, {
                    ...attributes,
                    ...listeners,
                    sx: {
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'grab',
                        touchAction: 'none'
                    },
                    children: /*#__PURE__*/ _jsx(DragIndicatorIcon, {})
                }),
                /*#__PURE__*/ _jsx(Box, {
                    sx: {
                        flexGrow: 1
                    },
                    children: /*#__PURE__*/ _jsxs(Box, {
                        sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 1.5
                        },
                        children: [
                            /*#__PURE__*/ _jsx(Typography, {
                                variant: "subtitle2",
                                children: action.type === 'sound' ? '声音' : '震动'
                            }),
                            /*#__PURE__*/ _jsx(TextField, {
                                size: "small",
                                type: "number",
                                label: "持续时间 (ms)",
                                value: action.duration,
                                onChange: (e)=>onUpdate(action.id, {
                                        duration: parseInt(e.target.value, 10) || 0
                                    }),
                                disabled: disabled,
                                sx: {
                                    width: '100%'
                                }
                            }),
                            action.type === 'sound' && /*#__PURE__*/ _jsxs(FormControl, {
                                size: "small",
                                sx: {
                                    width: '100%'
                                },
                                children: [
                                    /*#__PURE__*/ _jsx(InputLabel, {
                                        children: "声音类型"
                                    }),
                                    /*#__PURE__*/ _jsx(Select, {
                                        value: action.resourceId || '',
                                        label: "声音类型",
                                        onChange: (e)=>onUpdate(action.id, {
                                                resourceId: e.target.value
                                            }),
                                        disabled: disabled,
                                        startAdornment: /*#__PURE__*/ _jsx(Tooltip, {
                                            title: isPlaying ? "停止" : "试听",
                                            children: /*#__PURE__*/ _jsx(IconButton, {
                                                size: "small",
                                                onClick: ()=>isPlaying ? onStopPreview() : onPreview(action.resourceId),
                                                sx: {
                                                    mr: 1
                                                },
                                                disabled: disabled,
                                                children: isPlaying ? /*#__PURE__*/ _jsx(Stop, {
                                                    fontSize: "small"
                                                }) : /*#__PURE__*/ _jsx(PlayArrow, {
                                                    fontSize: "small"
                                                })
                                            })
                                        }),
                                        children: ShakeConfigUI_defaultSoundResources.map((sound)=>/*#__PURE__*/ _jsx(MenuItem, {
                                                value: sound.id,
                                                children: sound.name
                                            }, sound.id))
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx(IconButton, {
                    onClick: ()=>onRemove(action.id),
                    size: "small",
                    color: "error",
                    disabled: disabled,
                    children: /*#__PURE__*/ _jsx(Delete, {})
                })
            ]
        });
    };
    /**
   * 监听console.log消息以接收Android端的响应
   */ useEffect(()=>{
        const originalConsoleLog = console.log;
        console.log = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            const message = args.join(' ');
            // 处理配置加载响应
            if (message.startsWith('SHAKE_CONFIG_LOADED:')) {
                const configData = message.replace('SHAKE_CONFIG_LOADED:', '');
                if (configData === 'null') {
                    console.log('未找到摇一摇配置，使用默认配置');
                    setConfig(ShakeConfigUI_defaultConfig);
                } else {
                    try {
                        const loadedConfig = JSON.parse(configData);
                        setConfig(loadedConfig);
                        console.log('摇一摇配置加载成功:', loadedConfig);
                    } catch (error) {
                        console.error('解析配置失败:', error);
                        setConfig(ShakeConfigUI_defaultConfig);
                    }
                }
                setIsLoading(false);
            } else if (message.startsWith('SHAKE_CONFIG_SAVE_RESULT:')) {
                const result = message.replace('SHAKE_CONFIG_SAVE_RESULT:', '');
                console.log('配置保存结果:', result === 'true' ? '成功' : '失败');
            } else if (message.startsWith('SHAKE_CONFIG_ERROR:') || message.startsWith('SHAKE_CONFIG_SAVE_ERROR:')) {
                console.error('摇一摇配置操作失败:', message);
                setIsLoading(false);
            }
            // 调用原始的console.log
            originalConsoleLog.apply(console, args);
        };
        // 组件挂载时加载配置
        loadConfigFromAndroid();
        // 清理函数
        return ()=>{
            console.log = originalConsoleLog;
        };
    }, [
        loadConfigFromAndroid
    ]);
    // 渲染加载状态
    if (isLoading) {
        return /*#__PURE__*/ _jsx(Paper, {
            sx: {
                p: 2
            },
            children: /*#__PURE__*/ _jsx(Box, {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                },
                children: /*#__PURE__*/ _jsx(Typography, {
                    variant: "body2",
                    color: "text.secondary",
                    children: "加载摇一摇配置..."
                })
            })
        });
    }
    return /*#__PURE__*/ _jsxs(Paper, {
        sx: {
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ _jsxs(Box, {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                    cursor: 'pointer',
                    opacity: !isLoggedIn ? 0.5 : 1,
                    '&:hover': {
                        bgcolor: 'action.hover'
                    }
                },
                onClick: ()=>setIsExpanded(!isExpanded),
                children: [
                    /*#__PURE__*/ _jsxs(Box, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ _jsx(Typography, {
                                variant: "subtitle1",
                                fontWeight: "medium",
                                children: "摇一摇"
                            }),
                            /*#__PURE__*/ _jsx(FormControlLabel, {
                                control: /*#__PURE__*/ _jsx(Switch, {
                                    checked: config.enabled,
                                    onChange: (e)=>updateConfig({
                                            enabled: e.target.checked
                                        }),
                                    size: "small",
                                    disabled: !isLoggedIn
                                }),
                                label: config.enabled ? '已启用' : '已禁用',
                                onClick: (e)=>e.stopPropagation()
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Box, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        },
                        children: [
                            lastSaveTime && /*#__PURE__*/ _jsxs(Typography, {
                                variant: "caption",
                                color: "text.secondary",
                                children: [
                                    "已保存 ",
                                    lastSaveTime
                                ]
                            }),
                            /*#__PURE__*/ _jsx(IconButton, {
                                size: "small",
                                children: isExpanded ? /*#__PURE__*/ _jsx(ExpandLess, {}) : /*#__PURE__*/ _jsx(ExpandMore, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Collapse, {
                in: isExpanded,
                children: [
                    /*#__PURE__*/ _jsx(Divider, {}),
                    /*#__PURE__*/ _jsxs(Box, {
                        sx: {
                            p: 2,
                            opacity: !isLoggedIn ? 0.6 : 1,
                            pointerEvents: !isLoggedIn ? 'none' : 'auto'
                        },
                        children: [
                            !isLoggedIn && /*#__PURE__*/ _jsx(Alert, {
                                severity: "warning",
                                sx: {
                                    mb: 2
                                },
                                children: /*#__PURE__*/ _jsx(Typography, {
                                    variant: "body2",
                                    children: "请先登录后再使用摇一摇功能"
                                })
                            }),
                            /*#__PURE__*/ _jsx(Grid, {
                                container: true,
                                spacing: 2,
                                sx: {
                                    mb: 3
                                },
                                children: /*#__PURE__*/ _jsx(Grid, {
                                    item: true,
                                    xs: 12,
                                    sm: 6,
                                    children: /*#__PURE__*/ _jsxs(FormControl, {
                                        fullWidth: true,
                                        disabled: !config.enabled || !isLoggedIn,
                                        children: [
                                            /*#__PURE__*/ _jsx(InputLabel, {
                                                children: "报警类型"
                                            }),
                                            /*#__PURE__*/ _jsx(Select, {
                                                value: config.emergencyType,
                                                label: "报警类型",
                                                onChange: (e)=>updateConfig({
                                                        emergencyType: e.target.value
                                                    }),
                                                children: ShakeConfigUI_emergencyTypeOptions.map((option)=>/*#__PURE__*/ _jsx(MenuItem, {
                                                        value: option.value,
                                                        children: option.label
                                                    }, option.value))
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx(Typography, {
                                variant: "h6",
                                gutterBottom: true,
                                children: "检测参数"
                            }),
                            /*#__PURE__*/ _jsxs(Grid, {
                                container: true,
                                spacing: 2,
                                sx: {
                                    mb: 3
                                },
                                children: [
                                    /*#__PURE__*/ _jsx(Grid, {
                                        item: true,
                                        xs: 12,
                                        sm: 4,
                                        children: /*#__PURE__*/ _jsx(TextField, {
                                            fullWidth: true,
                                            label: "摇动次数",
                                            type: "number",
                                            inputProps: {
                                                min: 1,
                                                max: 10
                                            },
                                            value: tempValues.shakeCount !== undefined ? tempValues.shakeCount : config.shakeCount,
                                            onChange: (e)=>handleNumberInput('shakeCount', e.target.value),
                                            disabled: !config.enabled || !isLoggedIn,
                                            helperText: "1-10次",
                                            error: tempValues.shakeCount !== undefined && (tempValues.shakeCount === '' || parseInt(tempValues.shakeCount) < 1 || parseInt(tempValues.shakeCount) > 10)
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(Grid, {
                                        item: true,
                                        xs: 12,
                                        sm: 4,
                                        children: /*#__PURE__*/ _jsx(TextField, {
                                            fullWidth: true,
                                            label: "时间窗口(毫秒)",
                                            type: "number",
                                            inputProps: {
                                                min: 1000,
                                                max: 10000,
                                                step: 500
                                            },
                                            value: tempValues.timeWindowMs !== undefined ? tempValues.timeWindowMs : config.timeWindowMs,
                                            onChange: (e)=>handleNumberInput('timeWindowMs', e.target.value),
                                            disabled: !config.enabled || !isLoggedIn,
                                            helperText: "1000-10000ms",
                                            error: tempValues.timeWindowMs !== undefined && (tempValues.timeWindowMs === '' || parseInt(tempValues.timeWindowMs) < 1000 || parseInt(tempValues.timeWindowMs) > 10000)
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(Grid, {
                                        item: true,
                                        xs: 12,
                                        sm: 4,
                                        children: /*#__PURE__*/ _jsx(TextField, {
                                            fullWidth: true,
                                            label: "检测阈值",
                                            type: "number",
                                            inputProps: {
                                                min: 0,
                                                step: 0.1
                                            },
                                            value: tempValues.threshold !== undefined ? tempValues.threshold : config.threshold,
                                            onChange: (e)=>handleNumberInput('threshold', e.target.value),
                                            disabled: !config.enabled || !isLoggedIn,
                                            helperText: "数值越小越敏感，一般范围为".concat(ShakeConfigUI_THRESHOLD_MIN, "-").concat(ShakeConfigUI_THRESHOLD_MAX, "，根据手机不同会有差异"),
                                            error: tempValues.threshold !== undefined && (tempValues.threshold === '' || parseFloat(tempValues.threshold) < 0)
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx(Typography, {
                                variant: "h6",
                                gutterBottom: true,
                                children: "预警设置"
                            }),
                            /*#__PURE__*/ _jsxs(Box, {
                                sx: {
                                    mb: 3
                                },
                                children: [
                                    /*#__PURE__*/ _jsx(Collapse, {
                                        in: config.actions.length > 0 || true,
                                        children: /*#__PURE__*/ _jsxs(Box, {
                                            sx: {
                                                mt: 2,
                                                pl: 4,
                                                borderLeft: '2px solid',
                                                borderColor: 'primary.main'
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsx(Grid, {
                                                    container: true,
                                                    spacing: 2,
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: /*#__PURE__*/ _jsx(Grid, {
                                                        item: true,
                                                        xs: 12,
                                                        sm: 6,
                                                        children: /*#__PURE__*/ _jsx(TextField, {
                                                            fullWidth: true,
                                                            size: "small",
                                                            type: "number",
                                                            label: "预警最大等待时间(ms)",
                                                            value: config.maxWaitDuration,
                                                            onChange: (e)=>updateConfig({
                                                                    maxWaitDuration: parseInt(e.target.value, 10) || 0
                                                                }),
                                                            disabled: !config.enabled || !isLoggedIn,
                                                            helperText: "用户可在此时间内确认或取消"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs(Box, {
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ _jsxs(Box, {
                                                            sx: {
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                                mb: 1
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ _jsxs(Typography, {
                                                                    variant: "body2",
                                                                    fontWeight: "medium",
                                                                    children: [
                                                                        "预警动作序列 (",
                                                                        config.actions.length,
                                                                        ")"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsxs(Box, {
                                                                    sx: {
                                                                        display: 'flex',
                                                                        gap: 1
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx(Button, {
                                                                            variant: "outlined",
                                                                            size: "small",
                                                                            startIcon: /*#__PURE__*/ _jsx(VolumeUpIcon, {}),
                                                                            onClick: ()=>handleAddPreAlarmAction('sound'),
                                                                            disabled: !config.enabled || !isLoggedIn,
                                                                            children: "添加声音"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx(Button, {
                                                                            variant: "outlined",
                                                                            size: "small",
                                                                            startIcon: /*#__PURE__*/ _jsx(VibrationIcon, {}),
                                                                            onClick: ()=>handleAddPreAlarmAction('vibration'),
                                                                            disabled: !config.enabled || !isLoggedIn,
                                                                            children: "添加震动"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        config.actions.length === 0 ? /*#__PURE__*/ _jsx(Box, {
                                                            sx: {
                                                                p: 2,
                                                                border: '1px dashed',
                                                                borderColor: 'divider',
                                                                borderRadius: 1,
                                                                textAlign: 'center',
                                                                color: 'text.secondary'
                                                            },
                                                            children: /*#__PURE__*/ _jsx(Typography, {
                                                                variant: "body2",
                                                                children: "暂无预警动作，点击上方按钮添加"
                                                            })
                                                        }) : /*#__PURE__*/ _jsx(DndContext, {
                                                            sensors: sensors,
                                                            collisionDetection: closestCenter,
                                                            onDragEnd: handleDragEnd,
                                                            children: /*#__PURE__*/ _jsx(SortableContext, {
                                                                items: config.actions.map((a)=>a.id),
                                                                strategy: verticalListSortingStrategy,
                                                                children: config.actions.map((action)=>/*#__PURE__*/ _jsx(SortablePreAlarmActionItem, {
                                                                        action: action,
                                                                        isPlaying: playingSoundId === action.resourceId,
                                                                        onUpdate: handleUpdatePreAlarmAction,
                                                                        onRemove: handleRemovePreAlarmAction,
                                                                        onPreview: handlePreviewSound,
                                                                        onStopPreview: handleStopSound,
                                                                        disabled: !config.enabled || !isLoggedIn
                                                                    }, action.id))
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(FormControlLabel, {
                                        control: /*#__PURE__*/ _jsx(Switch, {
                                            checked: config.vibrationFeedback,
                                            onChange: (e)=>updateConfig({
                                                    vibrationFeedback: e.target.checked
                                                }),
                                            disabled: !config.enabled || !isLoggedIn
                                        }),
                                        label: "震动反馈"
                                    }),
                                    /*#__PURE__*/ _jsx(FormControlLabel, {
                                        control: /*#__PURE__*/ _jsx(Switch, {
                                            checked: config.soundFeedback,
                                            onChange: (e)=>updateConfig({
                                                    soundFeedback: e.target.checked
                                                }),
                                            disabled: !config.enabled || !isLoggedIn
                                        }),
                                        label: "声音反馈"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx(Alert, {
                                severity: "info",
                                sx: {
                                    mt: 2
                                },
                                children: /*#__PURE__*/ _jsxs(Typography, {
                                    variant: "body2",
                                    component: "div",
                                    children: [
                                        /*#__PURE__*/ _jsx("strong", {
                                            children: "配置说明"
                                        }),
                                        /*#__PURE__*/ _jsxs("ul", {
                                            style: {
                                                margin: '8px 0',
                                                paddingLeft: '20px'
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsxs("li", {
                                                    children: [
                                                        "在",
                                                        config.timeWindowMs,
                                                        "毫秒内连续摇动",
                                                        config.shakeCount,
                                                        "次将触发报警"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: config.emergencyType === 'medical' ? '医疗报警适合健康紧急情况' : '安全报警适合人身安全威胁'
                                                }),
                                                /*#__PURE__*/ _jsxs("li", {
                                                    children: [
                                                        "阈值",
                                                        config.threshold,
                                                        "：数值越小检测越敏感，一般范围为",
                                                        ShakeConfigUI_THRESHOLD_MIN,
                                                        "-",
                                                        ShakeConfigUI_THRESHOLD_MAX,
                                                        "，根据手机不同会有差异"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: config.actions.length > 0 ? "启用预警将在".concat(config.maxWaitDuration, "毫秒内执行").concat(config.actions.length, "个预警动作，用户可确认或取消") : '无预警动作配置，将直接触发报警'
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const shakeconfig_ShakeConfigUI = ((/* unused pure expression or super */ null && (ShakeConfigUI_ShakeConfigUI)));

;// ./src/components/test/TestEmergencyCall.tsx




function TestEmergencyCall_TestEmergencyCall() {
    function onClick() {
        // 测试呼救按钮点击埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "用户操作",
                title: "测试功能",
                subtitle: "测试呼救-按钮点击",
                extra: {
                    timestamp: Date.now(),
                    isWebView: !!(AutoWebViewJs/* autoWebViewJs */.yx && typeof AutoWebViewJs/* autoWebViewJs */.yx.callScript === 'function')
                }
            }
        });
        try {
            // const script = `
            //         var instance = com.fanfanlo.emergencycall.service
            // .SensorMonitoringService.callFallDetection();
            //         `
            const script = "\n            com.fanfanlo.emergencycall.manager.EmergencyCallJSInterface.startFallDetectionCall()";
            const res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            console.log("TestEmergencyCall res=", res);
            // 测试呼救执行成功埋点
            (0,print/* trackingPrint */.f)({
                params: {
                    type: "系统事件",
                    title: "测试功能",
                    subtitle: "测试呼救-执行成功",
                    extra: {
                        timestamp: Date.now(),
                        scriptResult: res
                    }
                }
            });
        } catch (error) {
            // 测试呼救执行异常埋点
            (0,print/* trackingPrint */.f)({
                params: {
                    type: "系统异常",
                    title: "测试功能",
                    subtitle: "测试呼救-执行异常",
                    extra: {
                        timestamp: Date.now(),
                        error: error instanceof Error ? error.message : String(error),
                        stack: error instanceof Error ? error.stack : undefined
                    }
                }
            });
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
        sx: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 3
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            variant: "contained",
            onClick: onClick,
            sx: {
                backgroundColor: '#FF5722',
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                minHeight: '64px',
                minWidth: '200px',
                borderRadius: '32px',
                boxShadow: '0 8px 24px rgba(255, 87, 34, 0.3)',
                textTransform: 'none',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                    backgroundColor: '#E64A19',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 32px rgba(255, 87, 34, 0.4)'
                },
                '&:active': {
                    transform: 'translateY(0px)',
                    boxShadow: '0 4px 16px rgba(255, 87, 34, 0.3)'
                },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '0',
                    height: '0',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    transform: 'translate(-50%, -50%)',
                    transition: 'width 0.3s, height 0.3s'
                },
                '&:hover::before': {
                    width: '100%',
                    height: '100%'
                }
            },
            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    fontSize: '24px',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                        '0%': {
                            transform: 'scale(1)'
                        },
                        '50%': {
                            transform: 'scale(1.1)'
                        },
                        '100%': {
                            transform: 'scale(1)'
                        }
                    }
                },
                children: "\uD83D\uDEA8"
            }),
            children: "测试呼救"
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
;// ./src/pages/home/index.tsx



















function Content() {
    const [openInviteDialog, setOpenInviteDialog] = useState(false);
    const router = useRouter();
    React.useEffect(()=>{
        nextPreload(router, '/intro');
        nextPreload(router, '/how-to-use');
    }, []);
    return /*#__PURE__*/ _jsxs(Box, {
        sx: {
            my: 2,
            p: 2
        },
        children: [
            /*#__PURE__*/ _jsx(ErrorDisplay, {}),
            /*#__PURE__*/ _jsx(EmergencyStopButton, {
                fullWidth: true,
                size: "large"
            }),
            /*#__PURE__*/ _jsx(Box, {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/how-to-use",
                    style: {
                        textDecoration: 'none'
                    },
                    children: "如何使用"
                })
            }),
            /*#__PURE__*/ _jsx(ListenShowPrivacyContent, {
                type: "main"
            }),
            /*#__PURE__*/ _jsx(PendingInvitationsList, {}),
            /*#__PURE__*/ _jsxs(Grid2, {
                container: true,
                spacing: 2,
                sx: {
                    m: 2
                },
                children: [
                    /*#__PURE__*/ _jsx(Grid2, {
                        size: 6,
                        children: /*#__PURE__*/ _jsx(Button, {
                            variant: "contained",
                            onClick: ()=>router.push('/intro'),
                            children: "产品介绍"
                        })
                    }),
                    /*#__PURE__*/ _jsx(Grid2, {
                        size: 6,
                        children: /*#__PURE__*/ _jsx(Box, {
                            sx: {
                                display: 'flex',
                                justifyContent: 'flex-end'
                            },
                            children: /*#__PURE__*/ _jsx(Button, {
                                // fullWidth
                                variant: "contained",
                                onClick: ()=>{
                                    router.push('/how-to-use');
                                },
                                children: "使用说明"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(PreAlarmConfig2, {}),
            /*#__PURE__*/ _jsx(EmergencyTTSSettings, {}),
            /*#__PURE__*/ _jsxs(Grid2, {
                container: true,
                sx: {
                    mt: 2,
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ _jsx(Grid2, {
                        size: 6,
                        children: /*#__PURE__*/ _jsx(TestEmergencyCall, {})
                    }),
                    /*#__PURE__*/ _jsx(Grid2, {
                        size: 6,
                        children: /*#__PURE__*/ _jsx(Box, {
                            sx: {
                                display: 'flex',
                                justifyContent: 'flex-end'
                            },
                            children: /*#__PURE__*/ _jsx(EmergencyStopButton, {
                                variant: "button"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(ShakeConfigUI, {}),
            /*#__PURE__*/ _jsx(SensorMonitor, {}),
            /*#__PURE__*/ _jsxs(Grid2, {
                container: true,
                spacing: 2,
                sx: {
                    m: 2
                },
                children: [
                    /*#__PURE__*/ _jsx(Grid2, {
                        size: 6,
                        children: /*#__PURE__*/ _jsx(Button, {
                            variant: "contained",
                            onClick: ()=>{
                                // 邀请紧急联系人按钮点击埋点
                                trackingPrint({
                                    params: {
                                        type: "用户操作",
                                        title: "联系人管理",
                                        subtitle: "邀请联系人-按钮点击",
                                        extra: {
                                            timestamp: Date.now(),
                                            page: "home"
                                        }
                                    }
                                });
                                setOpenInviteDialog(true);
                            },
                            children: "邀请紧急联系人"
                        })
                    }),
                    /*#__PURE__*/ _jsx(Grid2, {
                        size: 6,
                        children: /*#__PURE__*/ _jsx(Box, {
                            sx: {
                                display: 'flex',
                                justifyContent: 'flex-end'
                            },
                            children: /*#__PURE__*/ _jsx(Button, {
                                fullWidth: true,
                                variant: "contained",
                                onClick: ()=>{
                                    router.push('/contacts');
                                },
                                children: "联系人管理"
                            })
                        })
                    })
                ]
            }),
            openInviteDialog && /*#__PURE__*/ _jsx(InviteContactDialog, {
                open: openInviteDialog,
                onClose: ()=>{
                    // 邀请联系人对话框关闭埋点
                    trackingPrint({
                        params: {
                            type: "模态框操作",
                            title: "联系人管理",
                            subtitle: "邀请对话框-关闭",
                            extra: {
                                timestamp: Date.now(),
                                page: "home"
                            }
                        }
                    });
                    setOpenInviteDialog(false);
                }
            }),
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    mt: 2,
                    mb: 2
                },
                children: /*#__PURE__*/ _jsx(Button, {
                    fullWidth: true,
                    variant: "contained",
                    onClick: ()=>{
                        router.push('/shortcut');
                    },
                    children: "桌面快捷方式"
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    mt: '2rem'
                }
            })
        ]
    });
}
function Content2() {
    const router = (0,next_router.useRouter)();
    const [openInviteDialog, setOpenInviteDialog] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(home_EmergencyCallSettings, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2_Grid2/* default */.A, {
                container: true,
                sx: {
                    mt: 2,
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2_Grid2/* default */.A, {
                        size: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TestEmergencyCall_TestEmergencyCall, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2_Grid2/* default */.A, {
                        size: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2_Grid2/* default */.A, {
                container: true,
                spacing: 2,
                sx: {
                    m: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2_Grid2/* default */.A, {
                        size: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                            variant: "contained",
                            onClick: ()=>{
                                // 邀请紧急联系人按钮点击埋点
                                (0,print/* trackingPrint */.f)({
                                    params: {
                                        type: "用户操作",
                                        title: "联系人管理",
                                        subtitle: "邀请联系人-按钮点击",
                                        extra: {
                                            timestamp: Date.now(),
                                            page: "home"
                                        }
                                    }
                                });
                                setOpenInviteDialog(true);
                            },
                            children: "邀请紧急联系人"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2_Grid2/* default */.A, {
                        size: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                justifyContent: 'flex-end'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                fullWidth: true,
                                variant: "contained",
                                onClick: ()=>{
                                    router.push('/contacts');
                                },
                                children: "联系人管理"
                            })
                        })
                    })
                ]
            }),
            openInviteDialog && /*#__PURE__*/ (0,jsx_runtime.jsx)(InviteContactDialog_InviteContactDialog, {
                open: openInviteDialog,
                onClose: ()=>{
                    // 邀请联系人对话框关闭埋点
                    (0,print/* trackingPrint */.f)({
                        params: {
                            type: "模态框操作",
                            title: "联系人管理",
                            subtitle: "邀请对话框-关闭",
                            extra: {
                                timestamp: Date.now(),
                                page: "home"
                            }
                        }
                    });
                    setOpenInviteDialog(false);
                }
            })
        ]
    });
}
function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: 'emergency-call/pages/home/content',
                key: 'home.title'
            },
            navBar: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavBar/* NavBar */.j, {}),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content2, {})
        })
    });
}


/***/ })

}]);
//# sourceMappingURL=2871-ca0652b5468cf3cb.js.map