(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1590],{

/***/ 8536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3638);
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95116);
/* harmony import */ var _mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67245);
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96543);
/* harmony import */ var _utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18558);
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85042);
/* harmony import */ var _dividerClasses_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85192);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 









const useUtilityClasses = (ownerState)=>{
    const { absolute, children, classes, flexItem, light, orientation, textAlign, variant } = ownerState;
    const slots = {
        root: [
            'root',
            absolute && 'absolute',
            variant,
            light && 'light',
            orientation === 'vertical' && 'vertical',
            flexItem && 'flexItem',
            children && 'withChildren',
            children && orientation === 'vertical' && 'withChildrenVertical',
            textAlign === 'right' && orientation !== 'vertical' && 'textAlignRight',
            textAlign === 'left' && orientation !== 'vertical' && 'textAlignLeft'
        ],
        wrapper: [
            'wrapper',
            orientation === 'vertical' && 'wrapperVertical'
        ]
    };
    return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(slots, _dividerClasses_js__WEBPACK_IMPORTED_MODULE_3__/* .getDividerUtilityClass */ .K, classes);
};
const DividerRoot = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay)('div', {
    name: 'MuiDivider',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.absolute && styles.absolute,
            styles[ownerState.variant],
            ownerState.light && styles.light,
            ownerState.orientation === 'vertical' && styles.vertical,
            ownerState.flexItem && styles.flexItem,
            ownerState.children && styles.withChildren,
            ownerState.children && ownerState.orientation === 'vertical' && styles.withChildrenVertical,
            ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical' && styles.textAlignRight,
            ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical' && styles.textAlignLeft
        ];
    }
})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)((param)=>{
    let { theme } = param;
    return {
        margin: 0,
        // Reset browser default style.
        flexShrink: 0,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: (theme.vars || theme).palette.divider,
        borderBottomWidth: 'thin',
        variants: [
            {
                props: {
                    absolute: true
                },
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%'
                }
            },
            {
                props: {
                    light: true
                },
                style: {
                    borderColor: theme.vars ? "rgba(".concat(theme.vars.palette.dividerChannel, " / 0.08)") : (0,_mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_6__/* .alpha */ .X4)(theme.palette.divider, 0.08)
                }
            },
            {
                props: {
                    variant: 'inset'
                },
                style: {
                    marginLeft: 72
                }
            },
            {
                props: {
                    variant: 'middle',
                    orientation: 'horizontal'
                },
                style: {
                    marginLeft: theme.spacing(2),
                    marginRight: theme.spacing(2)
                }
            },
            {
                props: {
                    variant: 'middle',
                    orientation: 'vertical'
                },
                style: {
                    marginTop: theme.spacing(1),
                    marginBottom: theme.spacing(1)
                }
            },
            {
                props: {
                    orientation: 'vertical'
                },
                style: {
                    height: '100%',
                    borderBottomWidth: 0,
                    borderRightWidth: 'thin'
                }
            },
            {
                props: {
                    flexItem: true
                },
                style: {
                    alignSelf: 'stretch',
                    height: 'auto'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !!ownerState.children;
                },
                style: {
                    display: 'flex',
                    textAlign: 'center',
                    border: 0,
                    borderTopStyle: 'solid',
                    borderLeftStyle: 'solid',
                    '&::before, &::after': {
                        content: '""',
                        alignSelf: 'center'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.children && ownerState.orientation !== 'vertical';
                },
                style: {
                    '&::before, &::after': {
                        width: '100%',
                        borderTop: "thin solid ".concat((theme.vars || theme).palette.divider),
                        borderTopStyle: 'inherit'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.orientation === 'vertical' && ownerState.children;
                },
                style: {
                    flexDirection: 'column',
                    '&::before, &::after': {
                        height: '100%',
                        borderLeft: "thin solid ".concat((theme.vars || theme).palette.divider),
                        borderLeftStyle: 'inherit'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical';
                },
                style: {
                    '&::before': {
                        width: '90%'
                    },
                    '&::after': {
                        width: '10%'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical';
                },
                style: {
                    '&::before': {
                        width: '10%'
                    },
                    '&::after': {
                        width: '90%'
                    }
                }
            }
        ]
    };
}));
const DividerWrapper = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay)('span', {
    name: 'MuiDivider',
    slot: 'Wrapper',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.wrapper,
            ownerState.orientation === 'vertical' && styles.wrapperVertical
        ];
    }
})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)((param)=>{
    let { theme } = param;
    return {
        display: 'inline-block',
        paddingLeft: "calc(".concat(theme.spacing(1), " * 1.2)"),
        paddingRight: "calc(".concat(theme.spacing(1), " * 1.2)"),
        whiteSpace: 'nowrap',
        variants: [
            {
                props: {
                    orientation: 'vertical'
                },
                style: {
                    paddingTop: "calc(".concat(theme.spacing(1), " * 1.2)"),
                    paddingBottom: "calc(".concat(theme.spacing(1), " * 1.2)")
                }
            }
        ]
    };
}));
const Divider = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Divider(inProps, ref) {
    const props = (0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_7__/* .useDefaultProps */ .b)({
        props: inProps,
        name: 'MuiDivider'
    });
    const { absolute = false, children, className, orientation = 'horizontal', component = children || orientation === 'vertical' ? 'div' : 'hr', flexItem = false, light = false, role = component !== 'hr' ? 'separator' : undefined, textAlign = 'center', variant = 'fullWidth', ...other } = props;
    const ownerState = {
        ...props,
        absolute,
        component,
        flexItem,
        light,
        orientation,
        role,
        textAlign,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DividerRoot, {
        as: component,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(classes.root, className),
        role: role,
        ref: ref,
        ownerState: ownerState,
        "aria-orientation": role === 'separator' && (component !== 'hr' || orientation === 'vertical') ? orientation : undefined,
        ...other,
        children: children ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DividerWrapper, {
            className: classes.wrapper,
            ownerState: ownerState,
            children: children
        }) : null
    });
});
/**
 * The following flag is used to ensure that this component isn't tabbable i.e.
 * does not get highlight/focus inside of MUI List.
 */ if (Divider) {
    Divider.muiSkipListHighlight = true;
}
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);


/***/ }),

/***/ 19965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92061);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20872);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99450);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26512);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46822);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16880);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88149);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89701);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31480);
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41186);





const AddWidgetButton = (param)=>{
    let { onSuccess, onError } = param;
    const [isAdding, setIsAdding] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [messageType, setMessageType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('info');
    const [deviceManufacturer, setDeviceManufacturer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [showPermissionGuide, setShowPermissionGuide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // 获取设备厂商信息
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        try {
            const manufacturerScript = "\nvar manufacturer = com.fanfanlo.emergencycall.utils.WidgetUtils.getDeviceManufacturerName();\nmanufacturer;";
            const { javaResultString } = _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoWebViewJs */ .yx.callScript(manufacturerScript);
            setDeviceManufacturer(javaResultString || '通用设备');
        } catch (error) {
            console.warn('获取设备厂商信息失败:', error);
            setDeviceManufacturer('通用设备');
        }
    }, []);
    const handleOpenSettings = async ()=>{
        try {
            console.log('VERSION_AWARE_WIDGET尝试打开权限设置');
            const settingsScript = "\nvar success = com.fanfanlo.emergencycall.utils.WidgetUtils.openPermissionSettings();\nsuccess;";
            const { javaResultString } = _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoWebViewJs */ .yx.callScript(settingsScript);
            const success = javaResultString === "true";
            if (success) {
                console.log('VERSION_AWARE_WIDGET权限设置页面已打开');
            } else {
                console.warn('VERSION_AWARE_WIDGET无法打开权限设置页面');
            }
        } catch (error) {
            console.error('VERSION_AWARE_WIDGET打开权限设置失败:', error);
        }
    };
    const executeAddWidget = async ()=>{
        try {
            setMessage('正在添加桌面快捷方式...');
            setMessageType('info');
            const addScript = "\nvar success = com.fanfanlo.emergencycall.utils.WidgetUtils.requestAddMedicalWidget();\nsuccess;";
            const { javaResultString: addResult } = _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoWebViewJs */ .yx.callScript(addScript);
            const addSuccess = addResult === "true";
            if (addSuccess) {
                setMessage('选择界面已打开，请选择默认样式或自定义设置');
                setMessageType('success');
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
            } else {
                throw new Error('启动选择界面失败');
            }
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : '添加桌面快捷方式失败';
            setMessage(errorMsg);
            setMessageType('error');
            onError === null || onError === void 0 ? void 0 : onError(errorMsg);
        }
    };
    const handleAddWidget = async ()=>{
        try {
            setIsAdding(true);
            setMessage('正在检查设备权限需求...');
            setMessageType('info');
            // 使用新接口检查设备权限信息
            const permissionScript = "\nvar permissionInfo = com.fanfanlo.emergencycall.utils.WidgetUtils.getDevicePermissionInfo();\npermissionInfo;";
            const { javaResultString: permissionResult } = _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoWebViewJs */ .yx.callScript(permissionScript);
            const permissionInfo = JSON.parse(permissionResult || '{}');
            if (permissionInfo.needsPermission) {
                // 需要权限的设备，显示弹窗
                //         const stepsScript = `
                // var steps = com.fanfanlo.emergencycall.utils.WidgetUtils.getManualAddSteps();
                // steps;`;
                //         const { javaResultString: stepsResult } = autoWebViewJs.callScript(stepsScript);
                setMessage('您的手机需要打开设置页面，找到 "桌面快捷方式" 的权限，并进行授权');
                setMessageType('info');
                setShowPermissionGuide(true);
            } else {
                // 不需要权限的设备，直接添加
                await executeAddWidget();
            }
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : '检查设备权限失败';
            setMessage(errorMsg);
            setMessageType('error');
            onError === null || onError === void 0 ? void 0 : onError(errorMsg);
        } finally{
            setIsAdding(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        sx: {
            my: 2
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                variant: "outlined",
                color: "primary",
                size: "large",
                fullWidth: true,
                // startIcon={<AddToHomeScreenIcon />}
                onClick: handleAddWidget,
                disabled: isAdding,
                sx: {
                    py: 1.5,
                    borderColor: '#DC2626',
                    color: '#DC2626',
                    '&:hover': {
                        borderColor: '#B91C1C',
                        backgroundColor: 'rgba(220, 38, 38, 0.04)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.6
                    }
                },
                children: isAdding ? '正在添加...' : '🚑 添加医疗呼救小部件（大图标）'
            }),
            message && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                severity: messageType,
                sx: {
                    mt: 1
                },
                onClose: ()=>setMessage(''),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                    variant: "body2",
                    style: {
                        whiteSpace: 'pre-line'
                    },
                    children: message
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                open: showPermissionGuide,
                onClose: ()=>setShowPermissionGuide(false),
                fullWidth: true,
                maxWidth: "sm",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                        children: "需要权限设置"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                            variant: "body1",
                            sx: {
                                mb: 2
                            },
                            children: [
                                "检测到 ",
                                deviceManufacturer,
                                "，需要手动开启桌面快捷方式权限才能添加小部件。"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                        sx: {
                            px: 3,
                            pb: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                                onClick: async ()=>{
                                    setShowPermissionGuide(false);
                                    // 关闭弹窗后执行添加功能
                                    await executeAddWidget();
                                },
                                color: "inherit",
                                children: "已设置"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                                variant: "contained",
                                startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {}),
                                onClick: handleOpenSettings,
                                sx: {
                                    backgroundColor: '#DC2626',
                                    '&:hover': {
                                        backgroundColor: '#B91C1C'
                                    }
                                },
                                children: "去设置"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddWidgetButton);


/***/ }),

/***/ 31480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38803);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
}), 'Settings'));


/***/ }),

/***/ 32519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92061);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20872);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99450);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26512);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46822);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16880);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88149);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89701);
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41186);




const AddSecurityWidgetButton = (param)=>{
    let { onSuccess, onError } = param;
    const [isAdding, setIsAdding] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [messageType, setMessageType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('info');
    const [deviceManufacturer, setDeviceManufacturer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [showPermissionGuide, setShowPermissionGuide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // 获取设备厂商信息
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        try {
            const manufacturerScript = "\nvar manufacturer = com.fanfanlo.emergencycall.utils.WidgetUtils.getDeviceManufacturerName();\nmanufacturer;";
            const { javaResultString } = _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoWebViewJs */ .yx.callScript(manufacturerScript);
            setDeviceManufacturer(javaResultString || '通用设备');
        } catch (error) {
            console.warn('获取设备厂商信息失败:', error);
            setDeviceManufacturer('通用设备');
        }
    }, []);
    const executeAddWidget = async ()=>{
        const addScript = "\nvar success = com.fanfanlo.emergencycall.utils.WidgetUtils.requestAddSecurityWidget();\nsuccess;";
        const { javaResultString: addResult } = _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoWebViewJs */ .yx.callScript(addScript);
        const addSuccess = addResult === "true";
        if (addSuccess) {
            setMessage('选择界面已打开，请选择默认样式或自定义设置');
            setMessageType('success');
            onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
        } else {
            throw new Error('启动选择界面失败');
        }
    };
    const handleAddWidget = async ()=>{
        try {
            setIsAdding(true);
            setMessage('正在检查设备支持...');
            setMessageType('info');
            // 先检查设备权限需求
            const permissionScript = "\nvar permissionInfo = com.fanfanlo.emergencycall.utils.WidgetUtils.getDevicePermissionInfo();\npermissionInfo;";
            const { javaResultString: permissionResult } = _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoWebViewJs */ .yx.callScript(permissionScript);
            const permissionInfo = JSON.parse(permissionResult || '{}');
            if (permissionInfo.needsPermission) {
                // 需要权限的设备，显示弹窗
                setMessage('您的手机需要打开设置页面，找到 "桌面快捷方式" 的权限，并进行授权');
                setMessageType('info');
                setShowPermissionGuide(true);
            } else {
                // 不需要权限的设备，直接添加
                await executeAddWidget();
            }
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : '添加桌面安全呼救失败';
            setMessage(errorMsg);
            setMessageType('error');
            onError === null || onError === void 0 ? void 0 : onError(errorMsg);
        } finally{
            setIsAdding(false);
        }
    };
    const handleOpenSettings = async ()=>{
        try {
            const openSettingsScript = "\nvar success = com.fanfanlo.emergencycall.utils.WidgetUtils.openPermissionSettings();\nsuccess;";
            _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoWebViewJs */ .yx.callScript(openSettingsScript);
        } catch (error) {
            console.error('打开权限设置失败:', error);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        sx: {
            my: 2
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                variant: "outlined",
                color: "secondary",
                size: "large",
                fullWidth: true,
                // startIcon={<SecurityIcon />}
                onClick: handleAddWidget,
                disabled: isAdding,
                sx: {
                    py: 1.5,
                    borderColor: '#9333EA',
                    color: '#9333EA',
                    '&:hover': {
                        borderColor: '#7C2D92',
                        backgroundColor: 'rgba(147, 51, 234, 0.04)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.6
                    }
                },
                children: isAdding ? '正在添加...' : '👮‍♂️ 添加安全呼救小部件（大图标）'
            }),
            message && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                severity: messageType,
                sx: {
                    mt: 1
                },
                onClose: ()=>setMessage(''),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                    variant: "body2",
                    style: {
                        whiteSpace: 'pre-line'
                    },
                    children: message
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                open: showPermissionGuide,
                onClose: ()=>setShowPermissionGuide(false),
                maxWidth: "sm",
                fullWidth: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                        children: "需要权限设置"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                            variant: "body1",
                            sx: {
                                mb: 2
                            },
                            children: [
                                "检测到 ",
                                deviceManufacturer,
                                "，需要手动开启桌面快捷方式权限才能添加安全呼救小部件。"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                        sx: {
                            px: 3,
                            pb: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                                onClick: async ()=>{
                                    setShowPermissionGuide(false);
                                    // 关闭弹窗后执行添加功能
                                    await executeAddWidget();
                                },
                                variant: "outlined",
                                children: "已设置"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                                onClick: ()=>{
                                    handleOpenSettings();
                                },
                                variant: "contained",
                                children: "去设置"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddSecurityWidgetButton);


/***/ }),

/***/ 40659:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/shortcut",
      function () {
        return __webpack_require__(76686);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 69967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38803);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z"
}), 'Security'));


/***/ }),

/***/ 76686:
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
var AppShell = __webpack_require__(59089);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 2 modules
var AppBar = __webpack_require__(40018);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(92061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(68732);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(26512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(99450);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(25553);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(20872);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(46822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(16880);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(10184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(88149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 3 modules
var TextField = __webpack_require__(62492);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(89701);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(8536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(38803);
;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Shortcut.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Shortcut = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "m21 11-6-6v5H8c-2.76 0-5 2.24-5 5v4h2v-4c0-1.65 1.35-3 3-3h7v5z"
}), 'Shortcut'));

;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/MedicalServices.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const MedicalServices = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M10 4h4v2h-4zm6 11h-3v3h-2v-3H8v-2h3v-3h2v3h3z"
}), 'MedicalServices'));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Security.js
var Security = __webpack_require__(69967);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(24299);
// EXTERNAL MODULE: ../../libs/droid/android/src/android/AutoWebViewJs.ts + 6 modules
var AutoWebViewJs = __webpack_require__(41186);
// EXTERNAL MODULE: ../../libs/app/model/src/remote/tracking/print.ts
var print = __webpack_require__(12193);
// EXTERNAL MODULE: ./src/components/pages/home/components/AddWidgetButton.tsx
var AddWidgetButton = __webpack_require__(19965);
// EXTERNAL MODULE: ./src/components/pages/home/components/AddSecurityWidgetButton.tsx
var AddSecurityWidgetButton = __webpack_require__(32519);
;// ./src/components/shortcut-config/ShortcutConfig.tsx








/**
 * 桌面快捷方式配置组件
 * 用于创建医疗呼救和安全呼救的桌面快捷方式
 */ const ShortcutConfig = ()=>{
    const [medicalName, setMedicalName] = (0,react.useState)('医疗呼救');
    const [securityName, setSecurityName] = (0,react.useState)('安全呼救');
    const [isCreating, setIsCreating] = (0,react.useState)(false);
    const [message, setMessage] = (0,react.useState)(null);
    const [isMedicalDialogOpen, setIsMedicalDialogOpen] = (0,react.useState)(false);
    const [isSecurityDialogOpen, setIsSecurityDialogOpen] = (0,react.useState)(false);
    const handleOpenMedicalDialog = ()=>{
        // 医疗快捷方式对话框打开埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "模态框操作",
                title: "桌面快捷方式",
                subtitle: "医疗快捷方式-对话框打开",
                extra: {
                    timestamp: Date.now(),
                    shortcutType: "medical"
                }
            }
        });
        setIsMedicalDialogOpen(true);
    };
    const handleCloseMedicalDialog = ()=>{
        // 医疗快捷方式对话框关闭埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "模态框操作",
                title: "桌面快捷方式",
                subtitle: "医疗快捷方式-对话框关闭",
                extra: {
                    timestamp: Date.now(),
                    shortcutType: "medical"
                }
            }
        });
        setIsMedicalDialogOpen(false);
    };
    const handleOpenSecurityDialog = ()=>{
        // 安全快捷方式对话框打开埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "模态框操作",
                title: "桌面快捷方式",
                subtitle: "安全快捷方式-对话框打开",
                extra: {
                    timestamp: Date.now(),
                    shortcutType: "security"
                }
            }
        });
        setIsSecurityDialogOpen(true);
    };
    const handleCloseSecurityDialog = ()=>{
        // 安全快捷方式对话框关闭埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "模态框操作",
                title: "桌面快捷方式",
                subtitle: "安全快捷方式-对话框关闭",
                extra: {
                    timestamp: Date.now(),
                    shortcutType: "security"
                }
            }
        });
        setIsSecurityDialogOpen(false);
    };
    // 创建医疗呼救快捷方式
    const handleCreateMedicalShortcut = async ()=>{
        if (!medicalName.trim()) {
            setMessage({
                type: 'error',
                text: '请输入快捷方式名称'
            });
            return;
        }
        // 医疗快捷方式创建开始埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "用户操作",
                title: "桌面快捷方式",
                subtitle: "医疗快捷方式-创建开始",
                extra: {
                    timestamp: Date.now(),
                    shortcutType: "medical",
                    shortcutName: medicalName
                }
            }
        });
        setIsCreating(true);
        setMessage(null);
        try {
            const supportScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.isShortcutSupported();";
            const { javaResultString: supportResult } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(supportScript);
            if (supportResult !== 'true') {
                // 设备不支持埋点
                (0,print/* trackingPrint */.f)({
                    params: {
                        type: "系统异常",
                        title: "桌面快捷方式",
                        subtitle: "医疗快捷方式-设备不支持",
                        extra: {
                            timestamp: Date.now(),
                            shortcutType: "medical",
                            shortcutName: medicalName
                        }
                    }
                });
                setMessage({
                    type: 'error',
                    text: '当前设备不支持创建桌面快捷方式'
                });
                return;
            }
            const script = 'com.fanfanlo.emergencycall.manager.ShortcutManager.createMedicalShortcut("'.concat(medicalName, '");');
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            if (javaResultString === 'true') {
                // 创建成功埋点
                (0,print/* trackingPrint */.f)({
                    params: {
                        type: "系统事件",
                        title: "桌面快捷方式",
                        subtitle: "医疗快捷方式-创建成功",
                        extra: {
                            timestamp: Date.now(),
                            shortcutType: "medical",
                            shortcutName: medicalName
                        }
                    }
                });
                setMessage({
                    type: 'success',
                    text: '医疗呼救快捷方式创建成功！请检查您的桌面。'
                });
                handleCloseMedicalDialog();
            } else {
                // 创建失败埋点
                (0,print/* trackingPrint */.f)({
                    params: {
                        type: "系统异常",
                        title: "桌面快捷方式",
                        subtitle: "医疗快捷方式-创建失败",
                        extra: {
                            timestamp: Date.now(),
                            shortcutType: "medical",
                            shortcutName: medicalName,
                            result: javaResultString
                        }
                    }
                });
                setMessage({
                    type: 'error',
                    text: '快捷方式创建失败，请检查权限设置'
                });
            }
        } catch (error) {
            console.error('Error creating medical shortcut:', error);
            // 创建异常埋点
            (0,print/* trackingPrint */.f)({
                params: {
                    type: "系统异常",
                    title: "桌面快捷方式",
                    subtitle: "医疗快捷方式-创建异常",
                    extra: {
                        timestamp: Date.now(),
                        shortcutType: "medical",
                        shortcutName: medicalName,
                        error: error instanceof Error ? error.message : String(error),
                        stack: error instanceof Error ? error.stack : undefined
                    }
                }
            });
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
        // 安全快捷方式创建开始埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "用户操作",
                title: "桌面快捷方式",
                subtitle: "安全快捷方式-创建开始",
                extra: {
                    timestamp: Date.now(),
                    shortcutType: "security",
                    shortcutName: securityName
                }
            }
        });
        setIsCreating(true);
        setMessage(null);
        try {
            const supportScript = "com.fanfanlo.emergencycall.manager.ShortcutManager.isShortcutSupported();";
            const { javaResultString: supportResult } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(supportScript);
            if (supportResult !== 'true') {
                // 设备不支持埋点
                (0,print/* trackingPrint */.f)({
                    params: {
                        type: "系统异常",
                        title: "桌面快捷方式",
                        subtitle: "安全快捷方式-设备不支持",
                        extra: {
                            timestamp: Date.now(),
                            shortcutType: "security",
                            shortcutName: securityName
                        }
                    }
                });
                setMessage({
                    type: 'error',
                    text: '当前设备不支持创建桌面快捷方式'
                });
                return;
            }
            const script = 'com.fanfanlo.emergencycall.manager.ShortcutManager.createSecurityShortcut("'.concat(securityName, '");');
            const { javaResultString } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            if (javaResultString === 'true') {
                // 创建成功埋点
                (0,print/* trackingPrint */.f)({
                    params: {
                        type: "系统事件",
                        title: "桌面快捷方式",
                        subtitle: "安全快捷方式-创建成功",
                        extra: {
                            timestamp: Date.now(),
                            shortcutType: "security",
                            shortcutName: securityName
                        }
                    }
                });
                setMessage({
                    type: 'success',
                    text: '安全呼救快捷方式创建成功！请检查您的桌面。'
                });
                handleCloseSecurityDialog();
            } else {
                // 创建失败埋点
                (0,print/* trackingPrint */.f)({
                    params: {
                        type: "系统异常",
                        title: "桌面快捷方式",
                        subtitle: "安全快捷方式-创建失败",
                        extra: {
                            timestamp: Date.now(),
                            shortcutType: "security",
                            shortcutName: securityName,
                            result: javaResultString
                        }
                    }
                });
                setMessage({
                    type: 'error',
                    text: '快捷方式创建失败，请检查权限设置'
                });
            }
        } catch (error) {
            console.error('Error creating security shortcut:', error);
            // 创建异常埋点
            (0,print/* trackingPrint */.f)({
                params: {
                    type: "系统异常",
                    title: "桌面快捷方式",
                    subtitle: "安全快捷方式-创建异常",
                    extra: {
                        timestamp: Date.now(),
                        shortcutType: "security",
                        shortcutName: securityName,
                        error: error instanceof Error ? error.message : String(error),
                        stack: error instanceof Error ? error.stack : undefined
                    }
                }
            });
            setMessage({
                type: 'error',
                text: '创建快捷方式时发生错误'
            });
        } finally{
            setIsCreating(false);
        }
    };
    // 检查并请求权限
    const handleRequestPermission = async ()=>{
        // 权限设置按钮点击埋点
        (0,print/* trackingPrint */.f)({
            params: {
                type: "用户操作",
                title: "桌面快捷方式",
                subtitle: "打开权限设置-点击",
                extra: {
                    timestamp: Date.now()
                }
            }
        });
        try {
            const script = "com.fanfanlo.emergencycall.manager.ShortcutManager.checkAndRequestPermissionWithResult();";
            const { javaResultString: result } = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
            if (result && result !== 'undefined') {
                // 权限检查结果埋点
                (0,print/* trackingPrint */.f)({
                    params: {
                        type: "系统事件",
                        title: "桌面快捷方式",
                        subtitle: "权限检查-结果",
                        extra: {
                            timestamp: Date.now(),
                            result: result,
                            isSuccess: result.startsWith('✅')
                        }
                    }
                });
                setMessage({
                    type: result.startsWith('✅') ? 'success' : result.startsWith('❌') ? 'error' : 'info',
                    text: result
                });
            } else {
                throw new Error('方法返回undefined，可能需要重新编译');
            }
        } catch (error) {
            console.error('权限引导调用出错:', error);
            // 权限引导失败埋点
            (0,print/* trackingPrint */.f)({
                params: {
                    type: "系统异常",
                    title: "桌面快捷方式",
                    subtitle: "权限引导-失败",
                    extra: {
                        timestamp: Date.now(),
                        error: error instanceof Error ? error.message : String(error)
                    }
                }
            });
            setMessage({
                type: 'warning',
                text: '⚠️ 权限引导失败，请尝试手动开启。\n\n请前往：设置 > 应用管理 > 紧急呼救 > 权限管理，然后开启"创建桌面快捷方式"权限。'
            });
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
                p: 2,
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
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Shortcut, {
                            sx: {
                                mr: 1.5,
                                color: 'primary.main'
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "h5",
                            component: "h1",
                            children: "桌面快捷方式"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body2",
                    color: "text.secondary",
                    sx: {
                        mb: 2
                    },
                    children: "将呼救功能添加到桌面，危急时刻一键启动。"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AddWidgetButton/* default */.A, {
                    onSuccess: ()=>{
                        console.log('小部件添加成功');
                    },
                    onError: (error)=>{
                        console.error('小部件添加失败:', error);
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AddSecurityWidgetButton/* default */.A, {
                    onSuccess: ()=>{
                        console.log('安全小部件添加成功');
                    },
                    onError: (error)=>{
                        console.error('安全小部件添加失败:', error);
                    }
                }),
                message && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                    severity: message.type,
                    sx: {
                        mb: 2,
                        whiteSpace: 'pre-wrap'
                    },
                    onClose: ()=>setMessage(null),
                    children: message.text
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.Ay, {
                    container: true,
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                fullWidth: true,
                                variant: "contained",
                                color: "error",
                                onClick: handleOpenMedicalDialog,
                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MedicalServices, {}),
                                sx: {
                                    py: 1.5
                                },
                                children: "创建医疗快捷方式"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                fullWidth: true,
                                variant: "contained",
                                color: "warning",
                                onClick: handleOpenSecurityDialog,
                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Security/* default */.A, {}),
                                sx: {
                                    py: 1.5
                                },
                                children: "创建安全快捷方式"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                    open: isMedicalDialogOpen,
                    onClose: handleCloseMedicalDialog,
                    fullWidth: true,
                    maxWidth: "xs",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.A, {
                            children: [
                                "创建医疗呼救快捷方式",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                    "aria-label": "close",
                                    onClick: handleCloseMedicalDialog,
                                    sx: {
                                        position: 'absolute',
                                        right: 8,
                                        top: 8,
                                        color: (theme)=>theme.palette.grey[500]
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    sx: {
                                        mb: 2
                                    },
                                    children: "用于突发疾病、意外受伤等需要医疗救助的场景。"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                    autoFocus: true,
                                    margin: "dense",
                                    label: "快捷方式名称",
                                    type: "text",
                                    fullWidth: true,
                                    variant: "outlined",
                                    value: medicalName,
                                    onChange: (e)=>setMedicalName(e.target.value),
                                    onFocus: ()=>{
                                        // 文本框焦点进入埋点
                                        (0,print/* trackingPrint */.f)({
                                            params: {
                                                type: "用户操作",
                                                title: "文本输入",
                                                subtitle: "输入框焦点-进入",
                                                extra: {
                                                    timestamp: Date.now(),
                                                    fieldType: "医疗快捷方式名称",
                                                    currentValue: medicalName
                                                }
                                            }
                                        });
                                    },
                                    onBlur: ()=>{
                                        // 文本框焦点离开埋点
                                        (0,print/* trackingPrint */.f)({
                                            params: {
                                                type: "用户操作",
                                                title: "文本输入",
                                                subtitle: "输入框焦点-离开",
                                                extra: {
                                                    timestamp: Date.now(),
                                                    fieldType: "医疗快捷方式名称",
                                                    finalValue: medicalName,
                                                    hasValue: !!medicalName.trim()
                                                }
                                            }
                                        });
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                    onClick: handleCloseMedicalDialog,
                                    children: "取消"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                    onClick: handleCreateMedicalShortcut,
                                    variant: "contained",
                                    color: "error",
                                    disabled: isCreating,
                                    children: isCreating ? '创建中...' : '确认创建'
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                    open: isSecurityDialogOpen,
                    onClose: handleCloseSecurityDialog,
                    fullWidth: true,
                    maxWidth: "xs",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.A, {
                            children: [
                                "创建安全呼救快捷方式",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                    "aria-label": "close",
                                    onClick: handleCloseSecurityDialog,
                                    sx: {
                                        position: 'absolute',
                                        right: 8,
                                        top: 8,
                                        color: (theme)=>theme.palette.grey[500]
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    sx: {
                                        mb: 2
                                    },
                                    children: "用于遇到危险、需要紧急援助的场景（开发中）。"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                    autoFocus: true,
                                    margin: "dense",
                                    label: "快捷方式名称",
                                    type: "text",
                                    fullWidth: true,
                                    variant: "outlined",
                                    value: securityName,
                                    onChange: (e)=>setSecurityName(e.target.value),
                                    onFocus: ()=>{
                                        // 文本框焦点进入埋点
                                        (0,print/* trackingPrint */.f)({
                                            params: {
                                                type: "用户操作",
                                                title: "文本输入",
                                                subtitle: "输入框焦点-进入",
                                                extra: {
                                                    timestamp: Date.now(),
                                                    fieldType: "安全快捷方式名称",
                                                    currentValue: securityName
                                                }
                                            }
                                        });
                                    },
                                    onBlur: ()=>{
                                        // 文本框焦点离开埋点
                                        (0,print/* trackingPrint */.f)({
                                            params: {
                                                type: "用户操作",
                                                title: "文本输入",
                                                subtitle: "输入框焦点-离开",
                                                extra: {
                                                    timestamp: Date.now(),
                                                    fieldType: "安全快捷方式名称",
                                                    finalValue: securityName,
                                                    hasValue: !!securityName.trim()
                                                }
                                            }
                                        });
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                    onClick: handleCloseSecurityDialog,
                                    children: "取消"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                    onClick: handleCreateSecurityShortcut,
                                    variant: "contained",
                                    color: "warning",
                                    disabled: isCreating,
                                    children: isCreating ? '创建中...' : '确认创建'
                                })
                            ]
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
                        mt: 2,
                        p: 2,
                        bgcolor: 'grey.100',
                        borderRadius: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "subtitle1",
                            gutterBottom: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                children: "使用说明"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            style: {
                                margin: 0,
                                paddingLeft: '20px',
                                fontSize: '0.9rem'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: "点击上方按钮，选择您需要的呼救类型来创建快捷方式。"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                            children: "重要："
                                        }),
                                        "国产手机需要手动开启“创建桌面快捷方式”权限。"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: "如果创建失败，请点击下方按钮尝试自动跳转到权限设置页面。"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                            sx: {
                                mt: 2,
                                p: 1.5,
                                bgcolor: 'rgba(255, 167, 38, 0.1)',
                                borderRadius: 1,
                                border: '1px solid',
                                borderColor: 'rgba(255, 167, 38, 0.3)'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                sx: {
                                    color: '#4D3B18',
                                    fontWeight: '500'
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: "ℹ️ 温馨提示："
                                    }),
                                    "若创建失败，请点击下方“打开权限设置”按钮，系统将尝试引导您至相关设置页面。"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                    fullWidth: true,
                    variant: "outlined",
                    color: "primary",
                    onClick: handleRequestPermission,
                    disabled: isCreating,
                    sx: {
                        mt: 2
                    },
                    children: "打开权限设置"
                })
            ]
        })
    });
};
/* harmony default export */ const shortcut_config_ShortcutConfig = (ShortcutConfig);

;// ./src/pages/shortcut/index.tsx



function ContactsPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: "桌面快捷方式",
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shortcut_config_ShortcutConfig, {})
        })
    });
}


/***/ }),

/***/ 85192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   K: () => (/* binding */ getDividerUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92186);
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69014);


function getDividerUtilityClass(slot) {
    return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)('MuiDivider', slot);
}
const dividerClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('MuiDivider', [
    'root',
    'absolute',
    'fullWidth',
    'inset',
    'middle',
    'flexItem',
    'light',
    'vertical',
    'withChildren',
    'withChildrenVertical',
    'textAlignRight',
    'textAlignLeft',
    'wrapper',
    'wrapperVertical'
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dividerClasses);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [472,1172,810,8386,636,6593,8792], () => (__webpack_exec__(40659)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=shortcut-21a7267ea2bf2a28.js.map