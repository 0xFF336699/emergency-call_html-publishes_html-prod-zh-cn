(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1090],{

/***/ 9767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Avatar_Avatar)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(61541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/Person.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const Person = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person'));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Avatar/avatarClasses.js


function getAvatarUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiAvatar', slot);
}
const avatarClasses = (0,generateUtilityClasses/* default */.A)('MuiAvatar', [
    'root',
    'colorDefault',
    'circular',
    'rounded',
    'square',
    'img',
    'fallback'
]);
/* harmony default export */ const Avatar_avatarClasses = ((/* unused pure expression or super */ null && (avatarClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Avatar/Avatar.js
/* __next_internal_client_entry_do_not_use__ default auto */ 










const useUtilityClasses = (ownerState)=>{
    const { classes, variant, colorDefault } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            colorDefault && 'colorDefault'
        ],
        img: [
            'img'
        ],
        fallback: [
            'fallback'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getAvatarUtilityClass, classes);
};
const AvatarRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiAvatar',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            ownerState.colorDefault && styles.colorDefault
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: 40,
        height: 40,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(20),
        lineHeight: 1,
        borderRadius: '50%',
        overflow: 'hidden',
        userSelect: 'none',
        variants: [
            {
                props: {
                    variant: 'rounded'
                },
                style: {
                    borderRadius: (theme.vars || theme).shape.borderRadius
                }
            },
            {
                props: {
                    variant: 'square'
                },
                style: {
                    borderRadius: 0
                }
            },
            {
                props: {
                    colorDefault: true
                },
                style: {
                    color: (theme.vars || theme).palette.background.default,
                    ...theme.vars ? {
                        backgroundColor: theme.vars.palette.Avatar.defaultBg
                    } : {
                        backgroundColor: theme.palette.grey[400],
                        ...theme.applyStyles('dark', {
                            backgroundColor: theme.palette.grey[600]
                        })
                    }
                }
            }
        ]
    };
}));
const AvatarImg = (0,styled/* default */.Ay)('img', {
    name: 'MuiAvatar',
    slot: 'Img',
    overridesResolver: (props, styles)=>styles.img
})({
    width: '100%',
    height: '100%',
    textAlign: 'center',
    // Handle non-square image.
    objectFit: 'cover',
    // Hide alt text.
    color: 'transparent',
    // Hide the image broken icon, only works on Chrome.
    textIndent: 10000
});
const AvatarFallback = (0,styled/* default */.Ay)(Person, {
    name: 'MuiAvatar',
    slot: 'Fallback',
    overridesResolver: (props, styles)=>styles.fallback
})({
    width: '75%',
    height: '75%'
});
function useLoaded(param) {
    let { crossOrigin, referrerPolicy, src, srcSet } = param;
    const [loaded, setLoaded] = react.useState(false);
    react.useEffect(()=>{
        if (!src && !srcSet) {
            return undefined;
        }
        setLoaded(false);
        let active = true;
        const image = new Image();
        image.onload = ()=>{
            if (!active) {
                return;
            }
            setLoaded('loaded');
        };
        image.onerror = ()=>{
            if (!active) {
                return;
            }
            setLoaded('error');
        };
        image.crossOrigin = crossOrigin;
        image.referrerPolicy = referrerPolicy;
        image.src = src;
        if (srcSet) {
            image.srcset = srcSet;
        }
        return ()=>{
            active = false;
        };
    }, [
        crossOrigin,
        referrerPolicy,
        src,
        srcSet
    ]);
    return loaded;
}
const Avatar = /*#__PURE__*/ react.forwardRef(function Avatar(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiAvatar'
    });
    const { alt, children: childrenProp, className, component = 'div', slots = {}, slotProps = {}, imgProps, sizes, src, srcSet, variant = 'circular', ...other } = props;
    let children = null;
    const ownerState = {
        ...props,
        component,
        variant
    };
    // Use a hook instead of onError on the img element to support server-side rendering.
    const loaded = useLoaded({
        ...imgProps,
        ...typeof slotProps.img === 'function' ? slotProps.img(ownerState) : slotProps.img,
        src,
        srcSet
    });
    const hasImg = src || srcSet;
    const hasImgNotFailing = hasImg && loaded !== 'error';
    ownerState.colorDefault = !hasImgNotFailing;
    // This issue explains why this is required: https://github.com/mui/material-ui/issues/42184
    delete ownerState.ownerState;
    const classes = useUtilityClasses(ownerState);
    const [ImgSlot, imgSlotProps] = (0,useSlot/* default */.A)('img', {
        className: classes.img,
        elementType: AvatarImg,
        externalForwardedProps: {
            slots,
            slotProps: {
                img: {
                    ...imgProps,
                    ...slotProps.img
                }
            }
        },
        additionalProps: {
            alt,
            src,
            srcSet,
            sizes
        },
        ownerState
    });
    if (hasImgNotFailing) {
        children = /*#__PURE__*/ (0,jsx_runtime.jsx)(ImgSlot, {
            ...imgSlotProps
        });
    // We only render valid children, non valid children are rendered with a fallback
    // We consider that invalid children are all falsy values, except 0, which is valid.
    } else if (!!childrenProp || childrenProp === 0) {
        children = childrenProp;
    } else if (hasImg && alt) {
        children = alt[0];
    } else {
        children = /*#__PURE__*/ (0,jsx_runtime.jsx)(AvatarFallback, {
            ownerState: ownerState,
            className: classes.fallback
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AvatarRoot, {
        as: component,
        className: (0,clsx/* default */.A)(classes.root, className),
        ref: ref,
        ...other,
        ownerState: ownerState,
        children: children
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Avatar_Avatar = (Avatar);


/***/ }),

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

/***/ 18531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
}), 'Refresh'));


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
/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6445);
/* harmony import */ var _components_meeting_list_MeetingList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63384);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43173);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97972);





function Meetings() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_3__/* .AppShell */ .G, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_4__/* .AppbarContainer */ .W, {
            appbarProps: {
                title: "会议列表",
                back: true
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_meeting_list_MeetingList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {})
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        sx: {
            minHeight: '100vh',
            backgroundColor: 'background.default',
            py: 2
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_meeting_list_MeetingList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {})
    });
}


/***/ }),

/***/ 63839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)([
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
    }, "0"),
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
    }, "1")
], 'AccessTime'));


/***/ }),

/***/ 65371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ CardContent_CardContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/cardContentClasses.js


function getCardContentUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiCardContent', slot);
}
const cardContentClasses = (0,generateUtilityClasses/* default */.A)('MuiCardContent', [
    'root'
]);
/* harmony default export */ const CardContent_cardContentClasses = ((/* unused pure expression or super */ null && (cardContentClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js
/* __next_internal_client_entry_do_not_use__ default auto */ 







const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getCardContentUtilityClass, classes);
};
const CardContentRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiCardContent',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({
    padding: 16,
    '&:last-child': {
        paddingBottom: 24
    }
});
const CardContent = /*#__PURE__*/ react.forwardRef(function CardContent(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiCardContent'
    });
    const { className, component = 'div', ...other } = props;
    const ownerState = {
        ...props,
        component
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContentRoot, {
        as: component,
        className: (0,clsx/* default */.A)(classes.root, className),
        ownerState: ownerState,
        ref: ref,
        ...other
    });
});
 false ? 0 : void 0;
/* harmony default export */ const CardContent_CardContent = (CardContent);


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
  

/***/ }),

/***/ 88049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Card_Card)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(59864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/cardClasses.js


function getCardUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiCard', slot);
}
const cardClasses = (0,generateUtilityClasses/* default */.A)('MuiCard', [
    'root'
]);
/* harmony default export */ const Card_cardClasses = ((/* unused pure expression or super */ null && (cardClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js
/* __next_internal_client_entry_do_not_use__ default auto */ 









const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getCardUtilityClass, classes);
};
const CardRoot = (0,styled/* default */.Ay)(Paper/* default */.A, {
    name: 'MuiCard',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({
    overflow: 'hidden'
});
const Card = /*#__PURE__*/ react.forwardRef(function Card(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiCard'
    });
    const { className, raised = false, ...other } = props;
    const ownerState = {
        ...props,
        raised
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardRoot, {
        className: (0,clsx/* default */.A)(classes.root, className),
        elevation: raised ? 8 : undefined,
        ref: ref,
        ownerState: ownerState,
        ...other
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Card_Card = (Card);


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
/******/ __webpack_require__.O(0, [5299,9893,7668,7097,3047,636,6593,8792], () => (__webpack_exec__(77770)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=meetings-20dd82c70f09a6b4.js.map