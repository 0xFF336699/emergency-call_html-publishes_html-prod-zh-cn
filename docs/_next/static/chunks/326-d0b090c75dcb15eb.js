"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[326],{

/***/ 11326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 4 modules
var AppShell = __webpack_require__(43173);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/tabbar/Tabbar.tsx
var Tabbar = __webpack_require__(93589);
// EXTERNAL MODULE: ../../libs/im/matrix/src/index.ts + 369 modules
var src = __webpack_require__(92176);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(95771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(49280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(3711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(18244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 3 modules
var TextField = __webpack_require__(67571);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Autocomplete/Autocomplete.js + 5 modules
var Autocomplete = __webpack_require__(65555);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(69468);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/app/model/src/user/User.ts + 6 modules
var User = __webpack_require__(82080);
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
// EXTERNAL MODULE: ./src/services/authService.ts
var authService = __webpack_require__(92064);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 20 modules
var Log = __webpack_require__(41031);
// EXTERNAL MODULE: ../../libs/fanfanlo/src/watcher/useProxyWatch.ts
var useProxyWatch = __webpack_require__(45007);
;// ./src/components/dialogs/InviteContactDialog.tsx








const fileLogger = new Log/* Log */.tG(false, 'InviteContactDialog.tsx');
const isValidIdentity = (text)=>/(^\d{11}$)|(^[a-zA-Z0-9]{32}$)/.test(text);
const is11DigitNumber = (text)=>/^\d{11}$/.test(text);
function InviteContactDialog(param) {
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
    const [accessToken] = (0,useProxyWatch/* useProxyWatch */.x)(src/* matrixUser */.xb.userData.userInfo, 'loginResponse.access_token', (_matrixUser_userData_userInfo_loginResponse = src/* matrixUser */.xb.userData.userInfo.loginResponse) === null || _matrixUser_userData_userInfo_loginResponse === void 0 ? void 0 : _matrixUser_userData_userInfo_loginResponse.access_token);
    const [isUserLoggedIn] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k.data.sessionData, 'global_user_info', !!User/* user */.k.data.sessionData.global_user_info);
    const [userToken] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
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
            const appLoggedIn = await authService/* authService */.y.showLoginDialog();
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: ()=>onClose(),
        maxWidth: "sm",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                children: "邀请紧急联系人"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    component: "form",
                    sx: {
                        mt: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            autoFocus: true,
                            margin: "dense",
                            id: "contacts",
                            label: "联系人 (11位手机号或32位ID)",
                            type: "text",
                            fullWidth: true,
                            multiline: true,
                            rows: 4,
                            variant: "outlined",
                            placeholder: "13800138000 550e8400e29b41d4a716446655440000",
                            value: contacts,
                            onChange: (e)=>setContacts(e.target.value),
                            disabled: isLoading
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
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
                            renderInput: (params)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                    ...params,
                                    label: "呼叫类型",
                                    variant: "outlined",
                                    fullWidth: true,
                                    InputProps: {
                                        ...params.InputProps,
                                        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                isTypesLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
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
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
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
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: ()=>onClose(),
                        disabled: isLoading,
                        children: "关闭"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: handleSendInvitation,
                        variant: "contained",
                        disabled: isLoading,
                        children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                            size: 24
                        }) : '发送邀请'
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/navbar/NavBar.tsx
var NavBar = __webpack_require__(32534);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(88049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(65371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(9767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(90928);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 5 modules
var Alert = __webpack_require__(85629);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/AccessTime.js
var AccessTime = __webpack_require__(63839);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(29864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Check.js
var Check = __webpack_require__(63324);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Notifications.js
var Notifications = __webpack_require__(41264);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/formatDistanceToNow.js + 11 modules
var formatDistanceToNow = __webpack_require__(60952);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-CN.js + 6 modules
var zh_CN = __webpack_require__(65507);
;// ../../libs/app/model/src/remote/emergency-call/list_pending_received_invitations.ts


/**
 * 获取未处理的被邀请信息
 */ async function tmsEmergencyCallListPendingReceivedInvitations(opts) {
    return (0,request/* request */.Em)(tms/* tms */.X.TEmc, tms/* tms */.X.MEmcListPendingReceivedInvitations, opts.params, opts.gateway, opts.handler);
}
// 导出服务
const emergencyCallPendingInvitationService = {
    listPendingReceivedInvitations: tmsEmergencyCallListPendingReceivedInvitations
};
/* harmony default export */ const list_pending_received_invitations = ((/* unused pure expression or super */ null && (emergencyCallPendingInvitationService)));

// EXTERNAL MODULE: ../../libs/app/model/src/remote/emergency-call/list_all_invitations.ts
var list_all_invitations = __webpack_require__(77391);
// EXTERNAL MODULE: ../../libs/app/model/src/mc/app/AppModel.ts
var AppModel = __webpack_require__(10877);
;// ./src/components/PendingInvitationsList/PendingInvitationsList.tsx








// 邀请卡片组件
function PendingInvitationCard(param) {
    let { invitation, onRespond, isProcessing = false } = param;
    var _invitation_user_info_display_name_, _invitation_user_info_display_name;
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
    const isExpired = new Date(invitation.expires_at * 1000) < new Date();
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
                        mb: 2,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.A, {
                                src: invitation.user_info.avatar_url,
                                alt: invitation.user_info.display_name,
                                sx: {
                                    width: 50,
                                    height: 50,
                                    mr: 2
                                },
                                children: ((_invitation_user_info_display_name = invitation.user_info.display_name) === null || _invitation_user_info_display_name === void 0 ? void 0 : (_invitation_user_info_display_name_ = _invitation_user_info_display_name[0]) === null || _invitation_user_info_display_name_ === void 0 ? void 0 : _invitation_user_info_display_name_.toUpperCase()) || '?'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                flexGrow: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "h6",
                                        children: invitation.user_info.display_name || '未知用户'
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        sx: {
                                            mt: 0.5
                                        },
                                        children: (0,formatDistanceToNow/* formatDistanceToNow */.m)(invitation.created_at * 1000, {
                                            addSuffix: true,
                                            locale: zh_CN/* zhCN */.g
                                        })
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
                                    label: isExpired ? '已过期' : "".concat((0,formatDistanceToNow/* formatDistanceToNow */.m)(invitation.expires_at * 1000, {
                                        addSuffix: true,
                                        locale: zh_CN/* zhCN */.g
                                    })),
                                    color: isExpired ? 'error' : 'primary',
                                    variant: "outlined"
                                })
                            })
                        ]
                    }),
                    invitation.message && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        color: "primary",
                        sx: {
                            fontWeight: 'medium'
                        },
                        children: "邀请您成为紧急联系人"
                    })
                ]
            }),
            !isExpired && /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions/* default */.A, {
                sx: {
                    justifyContent: 'flex-end',
                    pt: 0
                },
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
            })
        ]
    });
}
const PendingInvitationsList = ()=>{
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    const [invitations, setInvitations] = (0,react.useState)([]);
    const [isProcessing, setIsProcessing] = (0,react.useState)(false);
    // 监听用户登录状态
    const [userToken] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    // 加载未处理的被邀请信息
    const loadPendingInvitations = (0,react.useCallback)(async ()=>{
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
    const handleRespondToInvite = (0,react.useCallback)(async (invitationId, action)=>{
        try {
            var _res_data;
            setIsProcessing(true);
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
            // 从列表中移除已处理的邀请
            setInvitations((prev)=>prev.filter((invite)=>invite.invitation_id !== invitationId));
            // 发送邀请列表更新事件
            AppModel/* appModel */.fj.dispatcher.emit(AppModel/* AppModelEvent */.Ts.InviteListUpdated);
        } catch (err) {
            console.error('处理邀请失败:', err);
            setError(err instanceof Error ? err.message : '操作失败，请重试');
        } finally{
            setIsProcessing(false);
        }
    }, []);
    // 监听用户登录状态变化
    (0,react.useEffect)(()=>{
        console.log('PendingInvitationsList - userToken changed:', userToken);
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
    (0,react.useEffect)(()=>{
        const unsubscribe = AppModel/* appModel */.fj.dispatcher.addListener(AppModel/* AppModelEvent */.Ts.InviteListUpdated, ()=>{
            console.log('AppModelEvent.InviteListUpdated - 刷新未处理邀请列表');
            loadPendingInvitations();
        });
        return unsubscribe;
    }, [
        loadPendingInvitations
    ]); // 依赖loadPendingInvitations函数
    // 如果没有登录用户，不显示任何内容
    if (!userToken) {
        return null;
    }
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            p: 2,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "error",
                children: error
            })
        });
    }
    if (invitations.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            textAlign: "center"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        p: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                display: "flex",
                alignItems: "center",
                mb: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Notifications/* default */.A, {
                        color: "primary",
                        sx: {
                            mr: 1
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.A, {
                spacing: 2,
                children: invitations.map((invitation)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PendingInvitationCard, {
                        invitation: invitation,
                        onRespond: (action)=>handleRespondToInvite(invitation.invitation_id, action),
                        isProcessing: isProcessing
                    }, invitation.invitation_id))
            })
        ]
    });
};
/* harmony default export */ const PendingInvitationsList_PendingInvitationsList = (PendingInvitationsList);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(59864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(37780);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/InputLabel/InputLabel.js + 3 modules
var InputLabel = __webpack_require__(75090);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Select/Select.js + 11 modules
var Select = __webpack_require__(95102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(36994);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/MenuItem.js + 2 modules
var MenuItem = __webpack_require__(82797);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Switch/Switch.js + 3 modules
var Switch = __webpack_require__(44817);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(32499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(56575);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/DragIndicator.js
var DragIndicator = __webpack_require__(9431);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Stop.js
var Stop = __webpack_require__(13972);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/PlayArrow.js
var PlayArrow = __webpack_require__(22503);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Delete.js
var Delete = __webpack_require__(50807);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ExpandLess.js
var ExpandLess = __webpack_require__(39089);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Settings.js
var Settings = __webpack_require__(52089);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/VolumeUp.js
var VolumeUp = __webpack_require__(93803);
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
;// __barrel_optimize__?names=debounce!=!../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js


// EXTERNAL MODULE: ../../libs/droid/android/src/android/scripts/store/store.ts
var store = __webpack_require__(5123);
;// ./src/components/pre-alarm-config2/index.tsx









const PRE_ALARM_CONFIG_KEY = 'PRE_ALARM_ACTIONS_CONFIG';
const defaultSoundResources = [
    {
        id: 'beep_short',
        name: '短提示音'
    },
    {
        id: 'siren_gentle',
        name: '缓和警报'
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    flexGrow: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 1.5
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "subtitle2",
                            children: action.type === 'sound' ? '声音' : '震动'
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
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
                        action.type === 'sound' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.A, {
                            size: "small",
                            sx: {
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.A, {
                                    children: "声音类型"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* default */.A, {
                                    value: action.resourceId || '',
                                    label: "声音类型",
                                    onChange: (e)=>onUpdate(action.id, {
                                            resourceId: e.target.value
                                        }),
                                    startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                                        title: isPlaying ? "停止" : "试听",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                            size: "small",
                                            onClick: ()=>isPlaying ? onStopPreview() : onPreview(action.resourceId),
                                            sx: {
                                                mr: 1
                                            },
                                            children: isPlaying ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stop/* default */.A, {
                                                fontSize: "small"
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(PlayArrow/* default */.A, {
                                                fontSize: "small"
                                            })
                                        })
                                    }),
                                    children: defaultSoundResources.map((sound)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                            value: sound.id,
                                            children: sound.name
                                        }, sound.id))
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                onClick: ()=>onRemove(action.id),
                size: "small",
                color: "error",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Delete/* default */.A, {})
            })
        ]
    });
};
const PreAlarmConfig2 = ()=>{
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
    const handleToggleEnabled = (event)=>{
        updateConfig({
            enabled: event.target.checked
        });
    };
    const handleAddAction = (type)=>{
        const newAction = {
            id: "action-".concat(Date.now()),
            type,
            duration: 3000,
            ...type === 'sound' && {
                resourceId: defaultSoundResources[0].id
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
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 2,
                textAlign: 'center'
            },
            children: "加载中..."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            mb: 3
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                elevation: 1,
                sx: {
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "subtitle1",
                                children: "防误触报警设置"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                                    checked: config.enabled,
                                    onChange: handleToggleEnabled,
                                    color: "primary"
                                }),
                                label: config.enabled ? '已启用' : '已禁用'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "outlined",
                        size: "small",
                        startIcon: expanded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandLess/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Settings/* default */.A, {}),
                        onClick: ()=>setExpanded(!expanded),
                        children: expanded ? '收起设置' : '设置'
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.A, {
                in: expanded,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                    elevation: 0,
                    sx: {
                        mt: 1,
                        p: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                mb: 3
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "subtitle2",
                                    gutterBottom: true,
                                    children: "最大等待时间 (毫秒)"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                    fullWidth: true,
                                    type: "number",
                                    value: config.maxWaitDuration,
                                    onChange: (e)=>updateConfig({
                                            maxWaitDuration: parseInt(e.target.value, 10) || 0
                                        }),
                                    size: "small",
                                    InputProps: {
                                        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
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
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                            sx: {
                                my: 2
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                mb: 2
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    sx: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mb: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                            variant: "subtitle2",
                                            children: [
                                                "预警动作 (",
                                                config.actions.length,
                                                ")"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                            direction: "row",
                                            spacing: 1,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                                    variant: "outlined",
                                                    size: "small",
                                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(VolumeUp/* default */.A, {}),
                                                    onClick: ()=>handleAddAction('sound'),
                                                    children: "添加声音"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
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
                                config.actions.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.A, {
                                    variant: "outlined",
                                    sx: {
                                        p: 3,
                                        textAlign: 'center',
                                        color: 'text.secondary'
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
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
/* harmony default export */ const pre_alarm_config2 = (PreAlarmConfig2);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(87924);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Shortcut.js
var Shortcut = __webpack_require__(11550);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/MedicalServices.js
var MedicalServices = __webpack_require__(74963);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Security.js
var Security = __webpack_require__(2950);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 6 modules
var AutoWebViewJs = __webpack_require__(13774);
;// ./src/components/shortcut-config/ShortcutConfig.tsx





/**
 * 桌面快捷方式配置组件
 * 用于创建医疗呼救和安全呼救的桌面快捷方式
 */ const ShortcutConfig = ()=>{
    const [medicalName, setMedicalName] = (0,react.useState)('意外呼救');
    const [securityName, setSecurityName] = (0,react.useState)('安全呼救');
    const [isCreating, setIsCreating] = (0,react.useState)(false);
    const [message, setMessage] = (0,react.useState)(null);
    // 创建医疗呼救快捷方式
    const handleCreateMedicalShortcut = async ()=>{
        if (!medicalName.trim()) {
            setMessage({
                type: 'error',
                text: '请输入快捷方式名称'
            });
            return;
        }
        setIsCreating(true);
        setMessage(null);
        try {
            // 检查是否支持快捷方式
            const supportScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.isShortcutSupported();";
            const { javaResultString: supportResult } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(supportScript);
            if (supportResult !== 'true') {
                setMessage({
                    type: 'error',
                    text: '当前设备不支持创建桌面快捷方式'
                });
                return;
            }
            // 创建医疗呼救快捷方式
            const script = 'com.fanfanlo.emergencycall.manager.ShortcutManager.createMedicalShortcut("'.concat(medicalName, '");');
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            if (javaResultString === 'true') {
                setMessage({
                    type: 'success',
                    text: '医疗呼救快捷方式创建成功！请检查您的桌面。'
                });
            } else {
                setMessage({
                    type: 'error',
                    text: '快捷方式创建失败，请检查权限设置'
                });
            }
        } catch (error) {
            console.error('Error creating medical shortcut:', error);
            setMessage({
                type: 'error',
                text: '创建快捷方式时发生错误'
            });
        } finally{
            setIsCreating(false);
        }
    };
    // 创建安全呼救快捷方式
    const handleCreateSecurityShortcut = async ()=>{
        if (!securityName.trim()) {
            setMessage({
                type: 'error',
                text: '请输入快捷方式名称'
            });
            return;
        }
        setIsCreating(true);
        setMessage(null);
        try {
            // 检查是否支持快捷方式
            const supportScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.isShortcutSupported();";
            const { javaResultString: supportResult } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(supportScript);
            if (supportResult !== 'true') {
                setMessage({
                    type: 'error',
                    text: '当前设备不支持创建桌面快捷方式'
                });
                return;
            }
            // 创建安全呼救快捷方式
            const script = 'com.fanfanlo.emergencycall.manager.ShortcutManager.createSecurityShortcut("'.concat(securityName, '");');
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            if (javaResultString === 'true') {
                setMessage({
                    type: 'success',
                    text: '安全呼救快捷方式创建成功！请检查您的桌面。'
                });
            } else {
                setMessage({
                    type: 'error',
                    text: '快捷方式创建失败，请检查权限设置'
                });
            }
        } catch (error) {
            console.error('Error creating security shortcut:', error);
            setMessage({
                type: 'error',
                text: '创建快捷方式时发生错误'
            });
        } finally{
            setIsCreating(false);
        }
    };
    // 检查设备支持情况和权限引导
    const handleCheckSupport = async ()=>{
        try {
            const supportScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.isShortcutSupported();";
            const brandScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.getDeviceBrand();";
            const guideScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.getPermissionGuideText();";
            const { javaResultString: supportResult } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(supportScript);
            const { javaResultString: brandResult } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(brandScript);
            const { javaResultString: guideResult } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(guideScript);
            const supportInfo = "设备支持情况：\n设备品牌: ".concat(brandResult, "\n快捷方式支持: ").concat(supportResult === 'true' ? '支持' : '不支持', "\n\n").concat(guideResult);
            setMessage({
                type: 'info',
                text: supportInfo
            });
        } catch (error) {
            console.error('Error checking support:', error);
            setMessage({
                type: 'error',
                text: '检查设备支持情况时发生错误'
            });
        }
    };
    // 检查并请求权限
    const handleRequestPermission = async ()=>{
        try {
            console.log('开始调用权限引导方法...');
            // 先测试基础方法是否工作
            const brandScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.getDeviceBrand();";
            const brandResult = AutoWebViewJs/* autoWebViewJs */.yx.callScript(brandScript);
            console.log('设备品牌测试:', brandResult);
            if (!brandResult || brandResult.javaResultString === undefined) {
                throw new Error('基础方法调用失败，可能需要重新编译应用');
            }
            // 尝试新的权限引导方法
            const script = "com.fanfanlo.emergencycall.manager.ShortcutManager.checkAndRequestPermissionWithResult();";
            const { javaResultString: result } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            console.log('权限引导结果:', result);
            if (result && result !== 'undefined') {
                setMessage({
                    type: result.startsWith('✅') ? 'success' : result.startsWith('❌') ? 'error' : 'info',
                    text: result
                });
            } else {
                throw new Error('新方法返回undefined，使用兜底方案');
            }
        } catch (error) {
            console.error('权限引导调用出错:', error);
            console.log('尝试使用兜底方案...');
            // 兜底方案：使用旧方法 + 手动指引
            try {
                const fallbackScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.checkAndRequestShortcutPermission();";
                const fallbackResult = AutoWebViewJs/* autoWebViewJs */.yx.callScript(fallbackScript);
                const brand = AutoWebViewJs/* autoWebViewJs */.yx.callScript("com.fanfanlo.emergencycall.manager.ShortcutManager.getDeviceBrand();");
                const brandName = (brand === null || brand === void 0 ? void 0 : brand.javaResultString) || 'UNKNOWN';
                let guideText = '';
                if (brandName === 'XIAOMI' || brandName === 'REDMI') {
                    guideText = '\n\n小米/Redmi设备权限设置：\n1. 打开"设置" > "应用设置" > "应用管理"\n2. 找到"紧急呼救"应用\n3. 点击"权限管理" > "其他权限"\n4. 开启"创建桌面快捷方式"权限';
                } else {
                    guideText = '\n\n请手动前往：\n设置 > 应用管理 > 紧急呼救 > 权限管理\n开启"创建桌面快捷方式"权限';
                }
                setMessage({
                    type: 'warning',
                    text: "⚠️ 权限引导方法可能需要重新编译应用\n\n临时解决方案：".concat(guideText, "\n\n\uD83D\uDCA1 设置完成后，请返回重新创建快捷方式")
                });
            } catch (fallbackError) {
                console.error('兜底方案也失败:', fallbackError);
                setMessage({
                    type: 'error',
                    text: '❌ 权限方法调用失败\n\n可能原因：应用需要重新编译\n\n临时解决方案：\n1. 手动前往：设置 > 应用管理 > 紧急呼救\n2. 开启"创建桌面快捷方式"权限\n3. 返回重新创建快捷方式'
                });
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            p: 0,
            mt: 2
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
            elevation: 2,
            sx: {
                p: 1,
                mb: 0
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Shortcut/* default */.A, {
                            sx: {
                                mr: 2,
                                color: 'primary.main'
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "h5",
                            component: "h1",
                            children: "桌面快捷方式设置"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body2",
                    color: "text.secondary",
                    sx: {
                        mb: 3
                    },
                    children: "创建桌面快捷方式，可以快速触发紧急呼救功能"
                }),
                message && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                    severity: message.type,
                    sx: {
                        mb: 3
                    },
                    onClose: ()=>setMessage(null),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                        style: {
                            whiteSpace: 'pre-wrap',
                            margin: 0
                        },
                        children: message.text
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.Ay, {
                    container: true,
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                                variant: "outlined",
                                sx: {
                                    p: 3
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        sx: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MedicalServices/* default */.A, {
                                                sx: {
                                                    mr: 2,
                                                    color: 'error.main'
                                                }
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                variant: "h6",
                                                children: "医疗呼救"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        sx: {
                                            mb: 2
                                        },
                                        children: "创建医疗紧急呼救快捷方式，点击后直接触发医疗呼救功能"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                        fullWidth: true,
                                        label: "快捷方式名称",
                                        value: medicalName,
                                        onChange: (e)=>setMedicalName(e.target.value),
                                        sx: {
                                            mb: 2
                                        },
                                        placeholder: "意外呼救"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                        fullWidth: true,
                                        variant: "contained",
                                        color: "error",
                                        onClick: handleCreateMedicalShortcut,
                                        disabled: isCreating,
                                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MedicalServices/* default */.A, {}),
                                        children: isCreating ? '创建中...' : '创建医疗呼救快捷方式'
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                                variant: "outlined",
                                sx: {
                                    p: 3
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        sx: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Security/* default */.A, {
                                                sx: {
                                                    mr: 2,
                                                    color: 'warning.main'
                                                }
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                variant: "h6",
                                                children: "安全呼救"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        sx: {
                                            mb: 2
                                        },
                                        children: "创建安全呼救快捷方式（功能开发中，点击显示占位界面）"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                        fullWidth: true,
                                        label: "快捷方式名称",
                                        value: securityName,
                                        onChange: (e)=>setSecurityName(e.target.value),
                                        sx: {
                                            mb: 2
                                        },
                                        placeholder: "安全呼救"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                        fullWidth: true,
                                        variant: "contained",
                                        color: "warning",
                                        onClick: handleCreateSecurityShortcut,
                                        disabled: isCreating,
                                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Security/* default */.A, {}),
                                        children: isCreating ? '创建中...' : '创建安全呼救快捷方式'
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                    sx: {
                        my: 3
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        display: 'flex',
                        gap: 2,
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            variant: "outlined",
                            onClick: handleCheckSupport,
                            disabled: isCreating,
                            children: "检查设备支持情况"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            variant: "outlined",
                            color: "primary",
                            onClick: handleRequestPermission,
                            disabled: isCreating,
                            children: "打开权限设置"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        mt: 3,
                        p: 2,
                        bgcolor: 'grey.50',
                        borderRadius: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "subtitle2",
                            gutterBottom: true,
                            children: "使用说明："
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "body2",
                            component: "div",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                style: {
                                    margin: 0,
                                    paddingLeft: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: "创建快捷方式后，请在桌面查看"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: "医疗呼救快捷方式会直接触发紧急呼救"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: "安全呼救功能正在开发中，明天会完善"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: "支持自定义快捷方式名称"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                children: "重要："
                                            }),
                                            "小米、华为、OPPO、VIVO等设备需要手动开启权限"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: "如果创建失败，请点击“打开权限设置”按钮"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                            sx: {
                                mt: 2,
                                p: 1.5,
                                bgcolor: 'warning.light',
                                borderRadius: 1,
                                border: '1px solid',
                                borderColor: 'warning.main'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                color: "warning.dark",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: "ℹ️ 温馨提示："
                                    }),
                                    "如果创建快捷方式时显示“没有权限”错误，请点击上方“打开权限设置”按钮， 系统会自动跳转到对应的权限设置页面。"
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const shortcut_config_ShortcutConfig = (ShortcutConfig);

// EXTERNAL MODULE: ./src/components/privacies/PrivacyDialogAuto.tsx
var PrivacyDialogAuto = __webpack_require__(24557);
;// ./src/components/privacies/ListenShowPrivacyContent.tsx




function ListenShowPrivacyContent(param) {
    let { type } = param;
    const [open, setOpen] = (0,react.useState)(false);
    function onClose() {
        setOpen(false);
    }
    (0,react.useEffect)(()=>{
        const value = store/* autoJsStoreUtils */.b.read("privacy_".concat(type), false);
        console.log('privacy value is', value, typeof value);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PrivacyDialogAuto/* PrivacyDialogAuto */.S, {
        type: type,
        area: "zh-cn"
    });
}

;// ./src/components/test/TestEmergencyCall.tsx



function TestEmergencyCall() {
    function onClick() {
        // const script = `
        //         var instance = com.fanfanlo.emergencycall.service
        // .SensorMonitoringService.callFallDetection();
        //         `
        const script = "\n        com.fanfanlo.emergencycall.manager.EmergencyCallJSInterface.startFallDetectionCall()";
        const res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        console.log("TestEmergencyCall res=", res);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            mt: "10px",
            mb: "10px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
            onClick: onClick,
            children: "测试呼救"
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Fab/Fab.js + 1 modules
var Fab = __webpack_require__(12726);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Snackbar/Snackbar.js + 5 modules
var Snackbar = __webpack_require__(57580);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/VolumeOff.js
var VolumeOff = __webpack_require__(88179);
;// ./src/components/emergency-audio-control/stopAllHandler.ts


const fileLog = new Log/* Log */.tG(false, 'stopAllHandler_f');
function stopAllHandler() {
    try {
        fileLog.log('开始停止所有紧急音频和震动...');
        // 使用正确的停止方法（与EmergencyAudioControl.tsx保持一致）
        const stopEmergencyMethods = [
            "\n        try {\n          com.fanfanlo.emergencycall.manager.SoundManager.stop();\n          com.fanfanlo.emergencycall.manager.AlarmSoundManager.stop();\n          com.fanfanlo.emergencycall.v2.core.EmergencySystemV2.forceStopHelpSound();\n        } catch(e) {\n          console.log('停止呼救者声音失败:', e);\n        }\n        ",
            "\n        try {\n          com.fanfanlo.emergencycall.manager.SoundManager.stopEmergencyAlarm();\n          \n          // 备用方案：如果WebViewActivity的Android接口可用，也调用它\n          if(typeof Android !== 'undefined' && typeof Android.stopAlarm === 'function') {\n            Android.stopAlarm();\n          }\n        } catch(e) {\n          console.log('停止联系人报警声音失败:', e);\n        }\n        "
        ];
        for (const script of stopEmergencyMethods){
            try {
                fileLog.log("调用停止脚本: ".concat(script.trim()));
                AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
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
 */ const EmergencyStopButton = (param)=>{
    let { variant = 'button', size = 'medium', fullWidth = false } = param;
    const [loading, setLoading] = (0,react.useState)(false);
    const [message, setMessage] = (0,react.useState)(null);
    /**
   * 检查是否在Android WebView环境中
   */ const isAndroidWebView = ()=>{
        try {
            return !!(AutoWebViewJs/* autoWebViewJs */.yx && typeof AutoWebViewJs/* autoWebViewJs */.yx.callScript === 'function');
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
        const bl = stopAllHandler();
        if (bl) {
            setMessage({
                type: 'success',
                text: '已停止所有紧急音频和震动'
            });
        } else {
            setMessage({
                type: 'error',
                text: "停止失败"
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
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                    title: "停止所有紧急音频和震动",
                    placement: "left",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Fab/* default */.A, {
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
                        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(VolumeOff/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Stop/* default */.A, {})
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Snackbar/* default */.A, {
                    open: !!message,
                    autoHideDuration: 4000,
                    onClose: handleCloseMessage,
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                variant: "contained",
                color: "error",
                size: size,
                fullWidth: fullWidth,
                startIcon: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(VolumeOff/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Stop/* default */.A, {}),
                onClick: handleStopAllEmergencyAudio,
                disabled: loading,
                sx: {
                    mb: 1
                },
                children: "\uD83D\uDD15 停止紧急音频"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Snackbar/* default */.A, {
                open: !!message,
                autoHideDuration: 4000,
                onClose: handleCloseMessage,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
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
/* harmony default export */ const emergency_audio_control_EmergencyStopButton = (EmergencyStopButton);

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/link.js
var next_link = __webpack_require__(97097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/meeting-list/MeetingList.tsx + 2 modules
var MeetingList = __webpack_require__(63384);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(53861);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(81281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Slider/Slider.js + 6 modules
var Slider = __webpack_require__(20321);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/LinearProgress/LinearProgress.js + 1 modules
var LinearProgress = __webpack_require__(96214);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(90535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(4777);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(63337);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js + 1 modules
var ListItemSecondaryAction = __webpack_require__(41);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Mic.js
var Mic = __webpack_require__(21607);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/CloudUpload.js
var CloudUpload = __webpack_require__(23676);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Refresh.js
var Refresh = __webpack_require__(18531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/InsertDriveFile.js
var InsertDriveFile = __webpack_require__(14161);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Star.js
var Star = __webpack_require__(97708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/StarBorder.js
var StarBorder = __webpack_require__(8882);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Share.js
var Share = __webpack_require__(97187);
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
const EmergencyTTSSettings = ()=>{
    const [settings, setSettings] = (0,react.useState)(DEFAULT_SETTINGS);
    const [voiceConfig, setVoiceConfig] = (0,react.useState)(DEFAULT_VOICE_CONFIG);
    const [fileList, setFileList] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    const [testing, setTesting] = (0,react.useState)(false);
    const [showSuccess, setShowSuccess] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    const [successMessage, setSuccessMessage] = (0,react.useState)('');
    const [expanded, setExpanded] = (0,react.useState)(false);
    const [activeTab, setActiveTab] = (0,react.useState)(0);
    // 录制相关状态
    const [isRecording, setIsRecording] = (0,react.useState)(false);
    const [playingFile, setPlayingFile] = (0,react.useState)(null);
    const [recordText, setRecordText] = (0,react.useState)(DEFAULT_SETTINGS.message);
    const [recordSpeed, setRecordSpeed] = (0,react.useState)(1.0);
    const [recordPitch, setRecordPitch] = (0,react.useState)(1.0);
    const [showRecordDialog, setShowRecordDialog] = (0,react.useState)(false);
    const [ttsAvailable, setTtsAvailable] = (0,react.useState)(null);
    // 文件上传相关状态
    const [isUploading, setIsUploading] = (0,react.useState)(false);
    const [selectedFile, setSelectedFile] = (0,react.useState)(null);
    const [uploadProgress, setUploadProgress] = (0,react.useState)(0);
    const [supportedFormats, setSupportedFormats] = (0,react.useState)(null);
    // 加载所有设置和数据
    (0,react.useEffect)(()=>{
        const loadData = async ()=>{
            try {
                setLoading(true);
                // 加载TTS设置
                const savedSettings = await store/* autoJsStoreUtils */.b.read(TTS_SETTINGS_KEY, DEFAULT_SETTINGS);
                setSettings(savedSettings);
                // 加载语音配置
                const savedConfig = await store/* autoJsStoreUtils */.b.read(VOICE_CONFIG_KEY, DEFAULT_VOICE_CONFIG);
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
    (0,react.useEffect)(()=>{
        loadSupportedFormats();
    }, []);
    // 加载支持的音频格式
    const loadSupportedFormats = (0,react.useCallback)(()=>{
        try {
            const script = "var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.getSupportedAudioFormats();\ndata;";
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
    // 加载文件列表
    const loadFileList = (0,react.useCallback)(()=>{
        try {
            const script = "var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.getFileList();\ndata;";
            const { javaResultString: listJson } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            console.log('加载文件列表:', listJson);
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
    const handleSelectAndUploadAudioFile = (0,react.useCallback)(async ()=>{
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
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
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
    const checkTTSAvailability = (0,react.useCallback)(()=>{
        try {
            const script = "var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.isTTSAvailable();\ndata;";
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
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
            await store/* autoJsStoreUtils */.b.write(TTS_SETTINGS_KEY, settingsToSave);
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
            await store/* autoJsStoreUtils */.b.write(VOICE_CONFIG_KEY, configToSave);
            setVoiceConfig(configToSave);
        } catch (err) {
            console.error('保存语音配置失败:', err);
            setError('保存配置失败');
        }
    };
    // 录制TTS
    const handleRecord = (0,react.useCallback)(()=>{
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
                    const { javaResultString: resultJson } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
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
    const handlePlayFile = (0,react.useCallback)((filePath)=>{
        try {
            if (playingFile === filePath) {
                setPlayingFile(null);
                return;
            }
            const script = 'var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.playFile("'.concat(filePath.replace(/"/g, '\\"'), '");\ndata;');
            const { javaResultString: success } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
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
    const handleShareFile = (0,react.useCallback)((filePath)=>{
        try {
            const script = 'var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.shareFile("'.concat(filePath.replace(/"/g, '\\"'), '", "紧急呼救语音");\ndata;');
            const { javaResultString: success } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            if (success !== 'true') {
                setError('分享失败');
            }
        } catch (error) {
            setError('分享异常：' + error.message);
        }
    }, []);
    // 删除文件
    const handleDeleteFile = (0,react.useCallback)((filePath)=>{
        if (window.confirm('确定要删除这个文件吗？')) {
            try {
                const script = 'var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.deleteFile("'.concat(filePath.replace(/"/g, '\\"'), '");\ndata;');
                const { javaResultString: success } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
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
    const setAsDefaultAudio = (0,react.useCallback)(async (filePath, type)=>{
        try {
            // 调用Android端设置默认音频
            const script = 'var data = com.fanfanlo.emergencycall.manager.TTSRecorderJSInterface.setFileAsDefault("'.concat(filePath.replace(/"/g, '\\"'), '", "').concat(type, '");\ndata;');
            const { javaResultString: success } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
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
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
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
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
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
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 2,
                textAlign: 'center'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                children: "加载中..."
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            mb: 3
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                elevation: 1,
                sx: {
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
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
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
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
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(VolumeUp/* default */.A, {
                                        fontSize: "small"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                        component: "span",
                                        sx: {
                                            display: {
                                                xs: 'none',
                                                sm: 'inline'
                                            }
                                        },
                                        children: "紧急呼救语音设置"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                        component: "span",
                                        sx: {
                                            display: {
                                                xs: 'inline',
                                                sm: 'none'
                                            }
                                        },
                                        children: "呼救设置"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
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
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                    control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.A, {
                        variant: "outlined",
                        size: "small",
                        startIcon: expanded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandLess/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Settings/* default */.A, {}),
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
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                component: "span",
                                sx: {
                                    display: {
                                        xs: 'none',
                                        sm: 'inline'
                                    }
                                },
                                children: expanded ? '收起设置' : '设置'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.A, {
                in: expanded,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                    elevation: 0,
                    sx: {
                        mt: 1,
                        p: 0,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
                            value: activeTab,
                            onChange: (_, newValue)=>setActiveTab(newValue),
                            variant: "fullWidth",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.A, {
                                    label: "录制音频"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.A, {
                                    label: "文件管理"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                p: 2
                            },
                            children: [
                                activeTab === -1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                            sx: {
                                                mb: 3
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                    variant: "subtitle2",
                                                    fontWeight: "bold",
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: "呼救文字内容"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
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
                                        settings.enabled && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                                                    sx: {
                                                        my: 3
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                    variant: "subtitle2",
                                                    fontWeight: "bold",
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: "语音参数设置"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                                    sx: {
                                                        mb: 3
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
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
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.Ay, {
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
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                                    sx: {
                                                        mb: 3
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
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
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.Ay, {
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
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                                    sx: {
                                                        mb: 3
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
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
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.Ay, {
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
                                activeTab === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                            sx: {
                                                mb: 4
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                    variant: "subtitle2",
                                                    fontWeight: "bold",
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: "录制新的呼救语音"
                                                }),
                                                !ttsAvailable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                                                    severity: "warning",
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: "TTS服务不可用，无法录制语音。请检查设备设置或联系技术支持。"
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                                    variant: "contained",
                                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Mic/* default */.A, {}),
                                                    onClick: ()=>setShowRecordDialog(true),
                                                    disabled: isUploading,
                                                    sx: {
                                                        mb: 3
                                                    },
                                                    children: "录制新语音"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                                    variant: "body2",
                                                    color: "text.secondary",
                                                    children: [
                                                        '• 点击"录制新语音"开始录制',
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                        "• 可以调节语速和音调参数",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                        "• 录制完成后会自动保存到文件列表",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                        "• 在文件管理中可以设置为默认呼救音频"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                                            sx: {
                                                my: 3
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                    variant: "subtitle2",
                                                    fontWeight: "bold",
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: "上传音频文件"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                                    variant: "outlined",
                                                    startIcon: isUploading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                                                        size: 16
                                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CloudUpload/* default */.A, {}),
                                                    onClick: handleSelectAndUploadAudioFile,
                                                    disabled: isUploading,
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: isUploading ? '上传中...' : '选择并上传音频文件'
                                                }),
                                                isUploading && uploadProgress > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(LinearProgress/* default */.A, {
                                                            variant: "determinate",
                                                            value: uploadProgress,
                                                            sx: {
                                                                mb: 1
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
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
                                                supportedFormats && supportedFormats.formats && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
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
                                                        "MB",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                        "推荐时长: ",
                                                        supportedFormats.recommendedDurationSeconds,
                                                        "秒内"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                                    variant: "body2",
                                                    color: "text.secondary",
                                                    children: [
                                                        "• 支持从设备中选择现有的音频文件",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                        "• 文件会被自动复制到应用私有目录",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                        "• 上传前会自动验证文件格式和大小",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                        "• 上传成功后可在文件管理中设置为默认音频"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                activeTab === 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
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
                                                    variant: "subtitle2",
                                                    fontWeight: "bold",
                                                    children: "录制文件列表"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                                    size: "small",
                                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.A, {}),
                                                    onClick: loadFileList,
                                                    children: "刷新"
                                                })
                                            ]
                                        }),
                                        fileList.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            color: "text.secondary",
                                            sx: {
                                                textAlign: 'center',
                                                py: 3
                                            },
                                            children: "暂无录制文件"
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
                                            dense: true,
                                            children: fileList.map((file, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.Ay, {
                                                            sx: {
                                                                pl: 0
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                                                                    primary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                                                        sx: {
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: 1,
                                                                            flexWrap: 'wrap'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                                                                sx: {
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    gap: 1
                                                                                },
                                                                                children: [
                                                                                    file.source === 'uploaded' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(InsertDriveFile/* default */.A, {
                                                                                        fontSize: "small"
                                                                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Mic/* default */.A, {
                                                                                        fontSize: "small"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                                                        variant: "body2",
                                                                                        fontWeight: "medium",
                                                                                        children: file.fileName
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                                                                sx: {
                                                                                    display: 'flex',
                                                                                    gap: 0.5
                                                                                },
                                                                                children: [
                                                                                    file.isDefault && /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                                                                        size: "small",
                                                                                        label: "默认",
                                                                                        color: "primary"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                                                                        size: "small",
                                                                                        label: file.source === 'uploaded' ? '上传' : '录制',
                                                                                        color: file.source === 'uploaded' ? 'secondary' : 'default',
                                                                                        variant: "outlined"
                                                                                    }),
                                                                                    file.format && /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                                                                        size: "small",
                                                                                        label: file.format.toUpperCase(),
                                                                                        color: "default",
                                                                                        variant: "outlined"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    secondary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                                                                variant: "caption",
                                                                                color: "text.secondary",
                                                                                children: [
                                                                                    formatFileSize(file.fileSize),
                                                                                    " • ",
                                                                                    formatTime(file.createTime),
                                                                                    file.duration && file.duration > 0 && " • ".concat(formatDuration(file.duration))
                                                                                ]
                                                                            }),
                                                                            file.mimeType && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
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
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemSecondaryAction/* default */.A, {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                                                        sx: {
                                                                            display: 'flex',
                                                                            gap: 0.5
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                                                                size: "small",
                                                                                onClick: ()=>handlePlayFile(file.filePath),
                                                                                color: playingFile === file.filePath ? "primary" : "default",
                                                                                children: playingFile === file.filePath ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stop/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(PlayArrow/* default */.A, {})
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                                                                size: "small",
                                                                                onClick: ()=>setAsDefaultAudio(file.filePath, 'medical'),
                                                                                color: file.isDefault ? "primary" : "default",
                                                                                children: file.isDefault ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Star/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(StarBorder/* default */.A, {})
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                                                                size: "small",
                                                                                onClick: ()=>handleShareFile(file.filePath),
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Share/* default */.A, {})
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                                                                size: "small",
                                                                                onClick: ()=>handleDeleteFile(file.filePath),
                                                                                color: "error",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Delete/* default */.A, {})
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        index < fileList.length - 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {})
                                                    ]
                                                }, file.filePath))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                                    sx: {
                                        my: 3
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    sx: {
                                        display: 'flex',
                                        gap: 2,
                                        flexWrap: 'wrap',
                                        mb: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                            variant: "contained",
                                            onClick: handleSave,
                                            sx: {
                                                minWidth: 100
                                            },
                                            children: "保存设置"
                                        }),
                                        settings.enabled && settings.message.trim() && /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                            children: !testing ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                                variant: "outlined",
                                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(PlayArrow/* default */.A, {}),
                                                onClick: testTTS,
                                                sx: {
                                                    minWidth: 100
                                                },
                                                children: "测试呼救"
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                                variant: "outlined",
                                                color: "error",
                                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stop/* default */.A, {}),
                                                onClick: stopTest,
                                                sx: {
                                                    minWidth: 100
                                                },
                                                children: "停止测试"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    sx: {
                                        p: 2,
                                        backgroundColor: 'rgba(0,0,0,0.05)',
                                        borderRadius: 1
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                children: "智能音频回退说明:"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                            "• 第1级: 检查是否启用呼救功能",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                            "• 第2级: 优先播放设置为默认的自定义音频文件",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                            "• 第3级: 降级到文字转语音播报",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                            "• 第4级: 最终降级到系统默认提示音",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                children: "使用建议:"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                            "• 建议录制或上传个人化的呼救信息，包含您的姓名、病情和紧急联系人",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                            "• 在文件管理中点击五角星设置为默认音频",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                            "• 先测试语音效果，确保在紧急情况下能清楚传达",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                            "• 定期检查和更新呼救音频内容"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: showRecordDialog,
                onClose: ()=>setShowRecordDialog(false),
                maxWidth: "md",
                fullWidth: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: "录制新语音"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
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
                            isRecording && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                sx: {
                                    mt: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LinearProgress/* default */.A, {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        sx: {
                                            mt: 1,
                                            textAlign: 'center'
                                        },
                                        children: "正在录制中，请稍候..."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                sx: {
                                    mt: 3
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "subtitle2",
                                        gutterBottom: true,
                                        children: "录制参数"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        sx: {
                                            mt: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                                variant: "body2",
                                                gutterBottom: true,
                                                children: [
                                                    "语音速度: ",
                                                    recordSpeed,
                                                    "x"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.Ay, {
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
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                        sx: {
                                            mt: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                                variant: "body2",
                                                gutterBottom: true,
                                                children: [
                                                    "语音音调: ",
                                                    recordPitch,
                                                    "x"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.Ay, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: ()=>setShowRecordDialog(false),
                                disabled: isRecording,
                                children: "取消"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleRecord,
                                variant: "contained",
                                disabled: !recordText.trim() || isRecording,
                                startIcon: isRecording ? undefined : /*#__PURE__*/ (0,jsx_runtime.jsx)(Mic/* default */.A, {}),
                                children: isRecording ? '录制中...' : '开始录制'
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Snackbar/* default */.A, {
                open: showSuccess,
                autoHideDuration: 3000,
                onClose: ()=>setShowSuccess(false),
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                    onClose: ()=>setShowSuccess(false),
                    severity: "success",
                    children: successMessage || 'TTS设置保存成功！'
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Snackbar/* default */.A, {
                open: !!error,
                autoHideDuration: 6000,
                onClose: ()=>setError(null),
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                    onClose: ()=>setError(null),
                    severity: "error",
                    children: error
                })
            })
        ]
    });
};

;// ./src/components/emergency-tts-settings/index.ts


// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(20350);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(56420);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(29708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContentText/DialogContentText.js + 1 modules
var DialogContentText = __webpack_require__(33899);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(21985);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/CheckCircle.js
var CheckCircle = __webpack_require__(34036);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Error.js
var esm_Error = __webpack_require__(59566);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Help.js
var Help = __webpack_require__(34319);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Info.js
var Info = __webpack_require__(22380);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/is-in-android.ts
var is_in_android = __webpack_require__(63149);
;// ./src/components/permission-status/PermissionStatusPanel.tsx





const PermissionStatusPanel = ()=>{
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
            const script = "\n        com.fanfanlo.emergencycall.manager.PermissionJSInterface.getAllPermissionsStatus();\n      ";
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
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            setError(errorMessage);
            console.error('Error fetching permissions:', err);
        } finally{
            setLoading(false);
        }
    };
    (0,react.useEffect)(()=>{
        fetchPermissions();
    }, []);
    const handleOpenSettings = (permission)=>{
        try {
            const script = '\n        com.fanfanlo.emergencycall.manager.PermissionJSInterface.openPermissionSettings("'.concat(permission.id, '");\n      ');
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            console.log("Opening settings for permission: ".concat(permission.id));
        } catch (err) {
            console.error('Error opening permission settings:', err);
        }
    };
    const handleConfirmLockScreenPermission = ()=>{
        try {
            const script = "\n        com.fanfanlo.emergencycall.manager.PermissionJSInterface.confirmLockScreenPermission();\n      ";
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            console.log('Confirmed lock screen permission');
            // 刷新权限状态
            setTimeout(()=>fetchPermissions(), 500);
        } catch (err) {
            console.error('Error confirming lock screen permission:', err);
        }
    };
    const handleShowPermissionInfo = (permission)=>{
        setSelectedPermission(permission);
        setInfoDialogOpen(true);
    };
    const handleCloseInfoDialog = ()=>{
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
            'desktop_shortcut': '桌面快捷方式权限允许应用在桌面创建一键紧急呼叫的快捷图标，让您在紧急情况下能够更快速地启动求救功能，特别适合老年用户或紧急情况下的快速操作。'
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
            'desktop_shortcut': '💡 低影响：无法创建桌面快捷方式，但不影响应用内的紧急呼叫功能'
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
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
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
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "120px",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                    size: 20
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
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
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
            severity: "error",
            sx: {
                py: 1
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                    variant: "body2",
                    children: [
                        "权限检查失败: ",
                        error
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                    onClick: fetchPermissions,
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
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
            severity: "info",
            sx: {
                py: 1
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "body2",
                children: "无权限数据，请重新加载"
            })
        });
    }
    const { permissions, deviceBrand, apiLevel } = permissionsData;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
        elevation: 1,
        sx: {
            p: 1
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        display: "flex",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Security/* default */.A, {
                                sx: {
                                    mr: 0.5,
                                    color: 'primary.main',
                                    fontSize: 18
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "body2",
                                fontWeight: "medium",
                                children: "权限状态"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                        title: "刷新",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                            onClick: fetchPermissions,
                            size: "small",
                            sx: {
                                p: 0.5
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.A, {
                                fontSize: "small"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                severity: "info",
                sx: {
                    mb: 1,
                    py: 0.5
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "caption",
                        display: "block",
                        children: "\uD83D\uDFE2已授权 \uD83D\uDD34未授权 \uD83D\uDFE1无法检测"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
                sx: {
                    py: 0
                },
                children: permissions.map((permission)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.Ay, {
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
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                display: "flex",
                                alignItems: "center",
                                mb: 0.5,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                        sx: {
                                            mr: 0.5
                                        },
                                        children: getStatusIcon(permission)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        fontWeight: "medium",
                                        sx: {
                                            flex: 1,
                                            minWidth: 0
                                        },
                                        children: permission.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                                        title: "查看权限说明",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                            size: "small",
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
                                    }),
                                    getStatusChip(permission)
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mb: 0.5,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
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
                                        !permission.canDetect && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
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
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                display: "flex",
                                gap: 0.5,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                    variant: "outlined",
                                    size: "small",
                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Settings/* default */.A, {
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                mt: 0.5,
                py: 0.25,
                px: 0.5,
                bgcolor: "grey.100",
                borderRadius: 0.25,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
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
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        sx: {
                            pb: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            display: "flex",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Security/* default */.A, {
                                    sx: {
                                        mr: 1,
                                        color: 'primary.main'
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "h6",
                                            component: "div",
                                            children: selectedPermission === null || selectedPermission === void 0 ? void 0 : selectedPermission.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        sx: {
                            pt: 0
                        },
                        children: selectedPermission && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 2,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "subtitle2",
                                            sx: {
                                                mr: 1
                                            },
                                            children: "当前状态:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                            display: "flex",
                                            alignItems: "center",
                                            children: [
                                                getStatusIcon(selectedPermission),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
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
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                                    sx: {
                                        mb: 2
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    mb: 2,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "subtitle2",
                                            gutterBottom: true,
                                            color: "primary.main",
                                            children: "\uD83C\uDFAF 为什么需要这个权限？"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "body2",
                                            color: "textSecondary",
                                            lineHeight: 1.6,
                                            children: getPermissionReason(selectedPermission)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                                    sx: {
                                        mb: 2
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    mb: 1,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "subtitle2",
                                            gutterBottom: true,
                                            color: "warning.main",
                                            children: "⚡ 不授权的影响"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        sx: {
                            px: 3,
                            pb: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleCloseInfoDialog,
                                color: "primary",
                                children: "我知道了"
                            }),
                            selectedPermission && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                variant: "contained",
                                onClick: ()=>{
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






const SensorMonitor = ()=>{
    const [threshold, setThreshold] = (0,react.useState)('5.0');
    const [isMonitoring, setIsMonitoring] = (0,react.useState)(false);
    // 为每个对话框创建独立的状态
    const [isSensorInfoDialogOpen, setSensorInfoDialogOpen] = (0,react.useState)(false);
    const [isForegroundServiceDialogOpen, setForegroundServiceDialogOpen] = (0,react.useState)(false);
    // 使用useRef来保存回调函数，避免在re-render中丢失
    const sensorCallbackRef = (0,react.useRef)();
    const foregroundServiceCallbackRef = (0,react.useRef)();
    (0,react.useEffect)(()=>{
        try {
            const script = "\n      var thresholdValue = com.fanfanlo.emergencycall.manager.SensorManager.getThreshold();\n      thresholdValue;";
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            const thresholdValue = parseFloat(javaResultString || '5.0');
            console.log("script get threshold=", thresholdValue, javaResultString);
            setThreshold(thresholdValue.toString());
        } catch (error) {
            console.error('Error fetching initial threshold value:', error);
        }
    }, []);
    function readIsMonitoring() {
        try {
            const script = "\n      var isMonitoring = com.fanfanlo.emergencycall.manager.SensorManager.isMonitoring();\n      isMonitoring;";
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            const isMonitoring = javaResultString === "true";
            console.log("script get isMonitoring=", isMonitoring, javaResultString);
            setIsMonitoring(isMonitoring);
        } catch (error) {
            console.error('Error fetching initial monitoring state:', error);
        }
    }
    (0,react.useEffect)(()=>{
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
            AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            alert("阈值已设置为: ".concat(thresholdValue));
        } catch (error) {
            console.error('Error calling updateThreshold:', error);
            alert('设置阈值失败。请确保您在安卓应用中。');
        }
    };
    const handleToggleMonitoring = ()=>{
        if (isMonitoring) {
            // 如果当前正在监控，则直接停止，不进行检查
            try {
                const script = "com.fanfanlo.emergencycall.manager.SensorManager.stopMonitoring();";
                AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                readIsMonitoring();
            } catch (error) {
                console.error('Error stopping monitoring:', error);
                alert('停止监控失败。');
            }
        } else {
            // 如果当前未监控，则检查权限，然后启动
            checkShowInfo((passed)=>{
                if (!passed) return; // 用户不同意，则不执行任何操作
                try {
                    const script = "com.fanfanlo.emergencycall.manager.SensorManager.startMonitoring();";
                    // const script = `com.fanfanlo.emergencycall.manager.SensorManagerShell.startMonitoring();`;
                    // const script = `com.fanfanlo.emergencycall.manager.SensorManagerShell.xx();`;
                    AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
                    readIsMonitoring();
                } catch (error) {
                    console.error('Error starting monitoring:', error);
                    alert('开始监控失败。');
                }
            });
        }
    };
    (0,react.useEffect)(()=>{
        const id = setInterval(()=>{
            readIsMonitoring();
        }, 3000); // 每5秒检查一次监控状态
        return ()=>clearInterval(id);
    }, []);
    function checkShowSensorInfo(callback) {
        const info = store/* autoJsStoreUtils */.b.read('showSensorInfo', {
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
        const info = store/* autoJsStoreUtils */.b.read('showForegroundServiceInfo', {
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
        store/* autoJsStoreUtils */.b.write('showSensorInfo', {
            passed
        });
        setSensorInfoDialogOpen(false);
        if (sensorCallbackRef.current) {
            sensorCallbackRef.current(passed);
        }
    };
    // 前台服务对话框的处理器
    const handleForegroundServiceDialog = (passed)=>{
        store/* autoJsStoreUtils */.b.write('showForegroundServiceInfo', {
            passed
        });
        setForegroundServiceDialogOpen(false);
        if (foregroundServiceCallbackRef.current) {
            foregroundServiceCallbackRef.current(passed);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                elevation: 3,
                sx: {
                    padding: 2,
                    marginBottom: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "h6",
                        gutterBottom: true,
                        children: "传感器监控控制"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            marginBottom: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                label: "震动阈值",
                                variant: "outlined",
                                type: "number",
                                value: threshold,
                                onChange: (e)=>setThreshold(e.target.value),
                                size: "small"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                variant: "contained",
                                onClick: handleSetThreshold,
                                children: "设置"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "contained",
                        color: isMonitoring ? 'error' : 'primary',
                        onClick: handleToggleMonitoring,
                        fullWidth: true,
                        children: isMonitoring ? '停止监控' : '开始监控'
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.A, {
                defaultExpanded: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.A, {
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}),
                        "aria-controls": "permission-panel-content",
                        id: "permission-panel-header",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "h6",
                            children: "权限状态检查"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionStatusPanel, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: isSensorInfoDialogOpen,
                onClose: ()=>handleSensorDialog(false),
                "aria-labelledby": "sensor-dialog-title",
                "aria-describedby": "sensor-dialog-description",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        id: "sensor-dialog-title",
                        children: "传感器使用授权"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.A, {
                            id: "sensor-dialog-description",
                            children: "我们需要获取您的身体传感器（如加速度计）权限，以实现跌倒检测功能。这对于在紧急情况下自动触发呼叫至关重要。您是否同意？"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: ()=>handleSensorDialog(false),
                                children: "不同意"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: ()=>handleSensorDialog(true),
                                autoFocus: true,
                                children: "同意"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: isForegroundServiceDialogOpen,
                onClose: ()=>handleForegroundServiceDialog(false),
                "aria-labelledby": "foreground-dialog-title",
                "aria-describedby": "foreground-dialog-description",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        id: "foreground-dialog-title",
                        children: "启用前台服务通知"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.A, {
                            id: "foreground-dialog-description",
                            children: "为了在应用退到后台后仍能持续监控传感器数据，我们需要启用一个前台服务。这会在您的设备通知栏显示一个持续的通知。您是否同意？"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: ()=>handleForegroundServiceDialog(false),
                                children: "不同意"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
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
/* harmony default export */ const sensor_monitor_SensorMonitor = (SensorMonitor);

;// ./src/pages/home/index.tsx

















function Content() {
    const [openInviteDialog, setOpenInviteDialog] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            my: 2,
            p: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListenShowPrivacyContent, {
                type: "main"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MeetingList/* default */.A, {
                maxItemLength: 3
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PendingInvitationsList_PendingInvitationsList, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(pre_alarm_config2, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EmergencyTTSSettings, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TestEmergencyCall, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(sensor_monitor_SensorMonitor, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                container: true,
                spacing: 2,
                sx: {
                    m: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                        size: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            variant: "contained",
                            onClick: ()=>setOpenInviteDialog(true),
                            children: "邀请紧急联系人"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: "/contacts",
                        style: {
                            textDecoration: 'none'
                        },
                        children: "联系人管理"
                    })
                ]
            }),
            openInviteDialog && /*#__PURE__*/ (0,jsx_runtime.jsx)(InviteContactDialog, {
                open: openInviteDialog,
                onClose: ()=>setOpenInviteDialog(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    mt: 2,
                    mb: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(emergency_audio_control_EmergencyStopButton, {
                    variant: "button"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shortcut_config_ShortcutConfig, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: "/logs",
                        children: "日志"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* IMOpenPageLink */.QF, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    mt: "2rem"
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
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {})
        })
    });
}


/***/ }),

/***/ 24557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ PrivacyDialogAuto)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5123);
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63149);
/* harmony import */ var _PrivacyDialogDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91242);





let autoOpened = false; // 用于标记是否已经自动弹出过隐私协议
/**
 * 自动逻辑组件 - 负责处理隐私协议的自动弹出逻辑
 * 包含原有的35-49行逻辑：检查用户是否已同意、是否在冷却期等
 */ function PrivacyDialogAuto(param) {
    let { type, area } = param;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // const [autoOpened, setAutoOpened] = useState(false);
    const handleClose = ()=>{
        autoOpened = true; // 设置为已自动弹出
        setOpen(false);
    // setAutoOpened(true);
    };
    // 原有的自动弹出逻辑 (35-49行)
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const def = {
            agree: false,
            disagreeTime: 0
        };
        const res = _droid_android__WEBPACK_IMPORTED_MODULE_3__/* .autoJsStoreUtils */ .b.read("privacy_".concat(type), def);
        const value = res && 'agree' in res ? res : def;
        if (autoOpened) {
            //自动检测已经弹出过了就不再弹了
            return;
        }
        // 不在Android环境中不弹出
        if (!_droid_android__WEBPACK_IMPORTED_MODULE_4__/* .isRealInAndroid */ .nd) {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PrivacyDialogDisplay__WEBPACK_IMPORTED_MODULE_2__/* .PrivacyDialogDisplay */ .d, {
        open: open,
        onClose: handleClose,
        type: type,
        area: area
    });
}


/***/ }),

/***/ 32534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 77391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 91242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ PrivacyDialogDisplay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Dialog_DialogContent_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49280);
/* harmony import */ var _barrel_optimize_names_Dialog_DialogContent_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65494);
/* harmony import */ var _barrel_optimize_names_Dialog_DialogContent_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18244);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29864);
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5123);
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13774);






/**
 * 纯显示组件 - 负责隐私协议弹窗的显示和交互
 * 可以被手动控制打开/关闭
 */ function PrivacyDialogDisplay(param) {
    let { open, onClose, type, area } = param;
    let suffix =  false ? 0 : window.location.href.indexOf("qiniu") > -1 ? ".html" : "/";
    const [iframeSrc, setIframeSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("/privacies/".concat(type, "/").concat(area).concat(suffix));
    const iframeRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
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
                _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoJsStoreUtils */ .b.write("privacy_".concat(type), value);
                // 同步到Android端
                const script = "\n          var data = new com.fanfanlo.emergencycall.data.PrivacyData(".concat(value.agree, ", ").concat(value.disagreeTime, ");\n          com.fanfanlo.emergencycall.data.PrivacyStateHolder.updateMainPrivacyByJs(data);\n        ");
                _droid_android__WEBPACK_IMPORTED_MODULE_3__/* .autoWebViewJs */ .yx.callScript(script);
                // 关闭弹窗
                onClose();
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Dialog_DialogContent_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        open: open,
        onClose: onClose,
        PaperProps: {
            sx: {
                width: '80%',
                height: '80%',
                maxWidth: 'none'
            }
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Dialog_DialogContent_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                "aria-label": "close",
                onClick: onClose,
                sx: {
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme)=>theme.palette.grey[500]
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Dialog_DialogContent_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
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

/***/ 93589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=326-d0b090c75dcb15eb.js.map