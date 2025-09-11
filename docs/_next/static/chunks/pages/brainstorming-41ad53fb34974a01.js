(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3473],{

/***/ 2950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z"
}), 'Security'));


/***/ }),

/***/ 28181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z"
}), 'Sms'));


/***/ }),

/***/ 44437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Container_Container)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/capitalize/capitalize.js
var capitalize = __webpack_require__(40144);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(45375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/styled/styled.js
var styled = __webpack_require__(17933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/createTheme/createTheme.js + 3 modules
var createTheme = __webpack_require__(43270);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/Container/createContainer.js










const defaultTheme = (0,createTheme/* default */.A)();
const defaultCreateStyledComponent = (0,styled/* default */.A)('div', {
  name: 'MuiContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`maxWidth${(0,capitalize/* default */.A)(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
  }
});
const useThemePropsDefault = inProps => (0,useThemeProps/* default */.A)({
  props: inProps,
  name: 'MuiContainer',
  defaultTheme
});
const useUtilityClasses = (ownerState, componentName) => {
  const getContainerUtilityClass = slot => {
    return (0,generateUtilityClass/* default */.Ay)(componentName, slot);
  };
  const {
    classes,
    fixed,
    disableGutters,
    maxWidth
  } = ownerState;
  const slots = {
    root: ['root', maxWidth && `maxWidth${(0,capitalize/* default */.A)(String(maxWidth))}`, fixed && 'fixed', disableGutters && 'disableGutters']
  };
  return (0,composeClasses/* default */.A)(slots, getContainerUtilityClass, classes);
};
function createContainer(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = 'MuiContainer'
  } = options;
  const ContainerRoot = createStyledComponent(({
    theme,
    ownerState
  }) => ({
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    ...(!ownerState.disableGutters && {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      }
    })
  }), ({
    theme,
    ownerState
  }) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpointValueKey) => {
    const breakpoint = breakpointValueKey;
    const value = theme.breakpoints.values[breakpoint];
    if (value !== 0) {
      // @ts-ignore
      acc[theme.breakpoints.up(breakpoint)] = {
        maxWidth: `${value}${theme.breakpoints.unit}`
      };
    }
    return acc;
  }, {}), ({
    theme,
    ownerState
  }) => ({
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ...(ownerState.maxWidth === 'xs' && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up('xs')]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: Math.max(theme.breakpoints.values.xs, 444)
      }
    }),
    ...(ownerState.maxWidth &&
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ownerState.maxWidth !== 'xs' && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up(ownerState.maxWidth)]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
      }
    })
  }));
  const Container = /*#__PURE__*/react.forwardRef(function Container(inProps, ref) {
    const props = useThemeProps(inProps);
    const {
      className,
      component = 'div',
      disableGutters = false,
      fixed = false,
      maxWidth = 'lg',
      classes: classesProp,
      ...other
    } = props;
    const ownerState = {
      ...props,
      component,
      disableGutters,
      fixed,
      maxWidth
    };

    // @ts-ignore module augmentation fails if custom breakpoints are used
    const classes = useUtilityClasses(ownerState, componentName);
    return (
      /*#__PURE__*/
      // @ts-ignore theme is injected by the styled util
      (0,jsx_runtime.jsx)(ContainerRoot, {
        as: component
        // @ts-ignore module augmentation fails if custom breakpoints are used
        ,
        ownerState: ownerState,
        className: (0,clsx/* default */.A)(classes.root, className),
        ref: ref,
        ...other
      })
    );
  });
   false ? 0 : void 0;
  return Container;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var utils_capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styles_styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Container = createContainer({
    createStyledComponent: (0,styles_styled/* default */.Ay)('div', {
        name: 'MuiContainer',
        slot: 'Root',
        overridesResolver: (props, styles)=>{
            const { ownerState } = props;
            return [
                styles.root,
                styles["maxWidth".concat((0,utils_capitalize/* default */.A)(String(ownerState.maxWidth)))],
                ownerState.fixed && styles.fixed,
                ownerState.disableGutters && styles.disableGutters
            ];
        }
    }),
    useThemeProps: (inProps)=>(0,DefaultPropsProvider/* useDefaultProps */.b)({
            props: inProps,
            name: 'MuiContainer'
        })
});
 false ? 0 : void 0;
/* harmony default export */ const Container_Container = (Container);


/***/ }),

/***/ 63244:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/brainstorming",
      function () {
        return __webpack_require__(67728);
      }
    ]);
    if(false) {}
  

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

/***/ 67728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BrainstormingPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(38443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(88049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js
var colorManipulator = __webpack_require__(67245);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(65371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(9220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(44437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Sms.js
var Sms = __webpack_require__(28181);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(61541);
;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Phone.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Phone = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"
}), 'Phone'));

;// ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/LocationOn.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const LocationOn = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"
}), 'LocationOn'));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/VideoCall.js
var VideoCall = __webpack_require__(90495);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Security.js
var Security = __webpack_require__(2950);
;// ./src/pages/brainstorming/index.tsx



/* ------------------ 核心模块组件 ------------------ */ /* AI产品陪伴思路组件 */ function AiCompanion() {
    const theme = (0,useTheme/* default */.A)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
        elevation: 2,
        sx: {
            mb: 3,
            bgcolor: (0,colorManipulator/* alpha */.X4)(theme.palette.primary.light, 0.05),
            '&:hover': {
                boxShadow: theme.shadows[4]
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h5",
                    gutterBottom: true,
                    sx: {
                        color: theme.palette.primary.dark,
                        borderBottom: "2px solid ".concat(theme.palette.primary.main),
                        pb: 1,
                        mb: 2,
                        display: 'inline-block'
                    },
                    children: "AI产品陪伴思路"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                    spacing: 1.5,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                alignItems: 'flex-start'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    component: "span",
                                    sx: {
                                        color: theme.palette.primary.main,
                                        mr: 1
                                    },
                                    children: "•"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "body1",
                                    children: "AI产品的陪伴属性在老人群体中有很好的前景"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                alignItems: 'flex-start'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    component: "span",
                                    sx: {
                                        color: theme.palette.primary.main,
                                        mr: 1
                                    },
                                    children: "•"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "body1",
                                    children: "AI可以设定性格，为缺少亲人照顾的人提供心理慰藉"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.A, {
                            variant: "outlined",
                            sx: {
                                p: 2,
                                bgcolor: (0,colorManipulator/* alpha */.X4)(theme.palette.primary.light, 0.03)
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "body1",
                                    sx: {
                                        mb: 1
                                    },
                                    children: "• 可以做多合一组合套装，床上的，地上的，口袋的。"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    sx: {
                                        pl: 2,
                                        mb: 1
                                    },
                                    children: "低级版可以是一个音响加上一些ai功能，以后逐渐升级为会动的，当然也可以现在就做，技术上应该不是问题。"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    sx: {
                                        pl: 2,
                                        mb: 1
                                    },
                                    children: "可以做那种讲故事能够绘声绘色手舞足蹈的。"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    sx: {
                                        pl: 2
                                    },
                                    children: "因为是套装，做出多声道的音响效果应该也行。"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                alignItems: 'flex-start'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    component: "span",
                                    sx: {
                                        color: theme.palette.primary.main,
                                        mr: 1
                                    },
                                    children: "•"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "body1",
                                    children: "AI宠物可以添加例如爱抚增加亲密值的功能，并且比较重要的是可以添加他人爱抚，增加收养者的社交亲密值功能，以此可以用来打开一条老年人扩列社交的道路。"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                alignItems: 'flex-start'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    component: "span",
                                    sx: {
                                        color: theme.palette.primary.main,
                                        mr: 1
                                    },
                                    children: "•"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "body1",
                                    children: "视障人士容易摔倒，也是潜在目标群体之一。ai眼镜辅助视障人士的工具现在有没有？"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* 目标群体组件 */ function TargetGroups() {
    const theme = (0,useTheme/* default */.A)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
        elevation: 2,
        sx: {
            mb: 3,
            bgcolor: (0,colorManipulator/* alpha */.X4)(theme.palette.secondary.light, 0.05),
            '&:hover': {
                boxShadow: theme.shadows[4]
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h5",
                    gutterBottom: true,
                    sx: {
                        color: theme.palette.secondary.dark,
                        borderBottom: "2px solid ".concat(theme.palette.secondary.main),
                        pb: 1,
                        mb: 2,
                        display: 'inline-block'
                    },
                    children: "目标群体分析"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                    spacing: 1.5,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                alignItems: 'flex-start'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    component: "span",
                                    sx: {
                                        color: theme.palette.secondary.main,
                                        mr: 1,
                                        fontWeight: 'bold'
                                    },
                                    children: "•"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "subtitle2",
                                            sx: {
                                                fontWeight: 'bold',
                                                color: theme.palette.text.primary
                                            },
                                            children: "孩童"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "容易跑跳冲撞，家人会比较担心"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                alignItems: 'flex-start'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    component: "span",
                                    sx: {
                                        color: theme.palette.secondary.main,
                                        mr: 1,
                                        fontWeight: 'bold'
                                    },
                                    children: "•"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "subtitle2",
                                            sx: {
                                                fontWeight: 'bold',
                                                color: theme.palette.text.primary
                                            },
                                            children: "老人"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "到了容易摔倒的年纪，家人也是担心"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                alignItems: 'flex-start'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    component: "span",
                                    sx: {
                                        color: theme.palette.secondary.main,
                                        mr: 1,
                                        fontWeight: 'bold'
                                    },
                                    children: "•"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "subtitle2",
                                            sx: {
                                                fontWeight: 'bold',
                                                color: theme.palette.text.primary
                                            },
                                            children: "单身女性"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "经常差旅的，或者需要陪客户的，也会有这种需求"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                alignItems: 'flex-start'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    component: "span",
                                    sx: {
                                        color: theme.palette.secondary.main,
                                        mr: 1,
                                        fontWeight: 'bold'
                                    },
                                    children: "•"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "subtitle2",
                                            sx: {
                                                fontWeight: 'bold',
                                                color: theme.palette.text.primary
                                            },
                                            children: "情感需求"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "老人和单身女性会有被关心的需求，这个服务不知道能不能添加"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* AI功能上线与市场测试组件 */ function AiLaunchTesting() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                mt: 2,
                children: "AI功能上线与市场测试"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "body1",
                children: "当前面临推广的问题，需要权衡是否是必须要做了ai再上线，还是现在的产品就可以上线进行市场测试"
            })
        ]
    });
}
/* 养老院调研组件 */ function NursingHomeResearch() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                mt: 2,
                children: "养老院调研"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 深入养老院，调研老人的日常需求"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 针对真实需求开发应用，提高落地性"
                    })
                ]
            })
        ]
    });
}
/* 小巧设备报警组件 */ function CompactDeviceAlert() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        mt: 4,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                children: "小巧设备报警"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "subtitle2",
                mt: 1,
                children: "供电方式"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 小电池供电：可做成手机支架、手环、钥匙链"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 手机壳代理充电口：依然能充电，同时给 RFID 供电，但需考虑体积增加"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "subtitle2",
                mt: 1,
                children: "特性"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 小开关触发，容易误触，因此需加预报警"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 电池、开关、传输距离需要权衡设计"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 若体积允许，可加蜂鸣器，与手机双向查找"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "subtitle2",
                mt: 1,
                children: "思考"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 是否有必要设计成可快速拆卸或长期便携的形态？"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 如果便携化，带蜂鸣器可帮助手机与设备双向互找，减少遗忘手机位置的困扰"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 手机支架，耳机，手环，戒指，眼镜，这些都可以考虑。"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                        variant: "body1",
                        children: [
                            "• 例如这样的设备，一扒拉就能报警",
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                target: "blank",
                                href: "https://chinese.alibaba.com/product-detail/T3-ble-4-0-keychain-beacon-1600880865383.html",
                                children: "地址"
                            }),
                            "。"
                        ]
                    })
                ]
            })
        ]
    });
}
function IntellectualProperty() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        mt: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                children: "知识产权与专利"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        children: "• 当前产品存在被模仿的风险，因此需要考虑申请专利保护。"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        children: "• 专利方向可包括：设备外观设计、功能实现方式、软硬件结合方案。"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        children: "• 申请专利不仅能增加产品壁垒，还能在市场推广和融资中增强说服力。"
                    })
                ]
            })
        ]
    });
}
/* 案例组件 */ function CaseSam() {
    const theme = (0,useTheme/* default */.A)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.A, {
        id: "anchor-case-sam",
        sx: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: theme.shadows[6]
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    height: 160,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: theme.palette.grey[100]
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: "https://cdn.qiniu.fanfanlo.com/temp/640.webp",
                    alt: "Sam养老机器人",
                    style: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s',
                        '&:hover': {
                            transform: 'scale(1.05)'
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
                sx: {
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "subtitle1",
                        fontWeight: "bold",
                        sx: {
                            mb: 1,
                            color: theme.palette.primary.dark,
                            minHeight: '3em',
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: "18岁女孩做养老机器人，上线2天卖爆了"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        color: "text.secondary",
                        sx: {
                            flexGrow: 1,
                            mb: 2,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        },
                        children: "18岁，创业做机器人，还卖爆单了！产品名为 Sam，由 Audrey Lo 和两个同龄朋友共同研发。"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            mt: 'auto',
                            pt: 1,
                            borderTop: "1px solid ".concat(theme.palette.divider),
                            display: 'flex',
                            justifyContent: 'flex-end'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "caption",
                            color: "primary",
                            sx: {
                                fontWeight: 'medium',
                                display: 'inline-flex',
                                alignItems: 'center',
                                '&:hover': {
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                }
                            },
                            children: "查看详情 →"
                        })
                    })
                ]
            })
        ]
    });
}
function CaseHyodol() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
        id: "anchor-case-hyodol",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    mb: 1,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: "https://pic1.zhimg.com/70/v2-2933db2e185863a57f7545e80ccf9b8b_1440w.avis?source=172ae18b&biz_tag=Post",
                        alt: "Hyodol智能娃娃",
                        style: {
                            width: '200px',
                            height: 'auto'
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "subtitle1",
                    fontWeight: "bold",
                    children: "韩国给独居老人发AI玩偶，24h陪伴+健康监测"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body1",
                    children: "由韩国初创公司 Hyodol 开发的智能娃娃，能陪聊天、提醒吃饭和服药，并在紧急情况通知护工和家人。"
                })
            ]
        })
    });
}
function CasePoketomo() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
        id: "anchor-case-poketomo",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    mb: 1,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: "https://gbres.dfcfw.com/Files/picture/20250903/2F05A5C304C60FBDE05DAB4B6552BCCA_w1080h721.png",
                        alt: "PokeTomo口袋智能伙伴机器人",
                        style: {
                            width: '200px',
                            height: 'auto'
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "subtitle1",
                    fontWeight: "bold",
                    children: "PokeTomo – 夏普推出的口袋智能伙伴机器人"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body1",
                    children: "PokeTomo 能与用户自然对话，通过声音和灯光表达情感，并记录与用户的回忆。"
                })
            ]
        })
    });
}
/* 引用数据组件 */ function ReferenceData() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
        id: "anchor-ref-data",
        mt: 2,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    children: "引用数据"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body1",
                    children: "2024年数据: 日本警察厅2024年的数据显示，有7.6万名独居者在家中去世，其中超过2.1万人死亡后8天以上才被发现，被认定为“孤独死”。 定义: “孤独死”通常是指一个人在无人陪伴的情况下死亡，且尸体经过一段较长时间（如8天以上）才被发现。"
                })
            ]
        })
    });
}
/* 现有推广思路组件 */ function PromotionIdeas() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        mt: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                children: "现有情况下怎么推广"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 现在产品体验依然不好，所以想了解下诸位对现有产品的感受？无论有什么样的改进方式都请提出。"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 如果能接受进行推广，那么我们应该怎么推广？"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 去广场舞的地方进行推广，有哪些套路可用？"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 一些加班、出差、、应酬客人工作，由其是女性，是否可以作为公司的关怀谈下来？"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 外卖、快递群体能否跟大厂作为员工福利谈下来？"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 到抖音找人推广，怎么找？找什么人？我是个彻底的抖音盲，这个方向一定得你们出主意。"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 到写字楼找等电梯的人进行推广，我去咕咚躺地上表演，旁白你们帮我录像，最终找几个合适的视频可以用作宣传，但是可能得给人家打码。其实刷楼扫楼也可以，但是用什么方法给他们洗脑呢？"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 还有哪些比较精准小范围的推广？就是用户反馈能比较多，比较直接的那种"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "• 营销有什么创造神秘感，或者饥饿营销的想法不？这种方向能找到方式或许会成为非常好的低成本扩张方案。"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                        variant: "body1",
                        children: [
                            "• 我们产品有个巨大的亮点，我一直不会描述。功能是",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                            "普通遇到危急，假设发病了，但是还能有点神智，不过已经开始逐渐进入昏迷。 这时他给一个亲人，例如儿子打电话，但是儿子的电话没接，原因可能是多样的，例如手机没在手头、睡觉、开会静音等，而作为求助者是不知道的，所以他不知道自己究竟是挂断给其他亲人打电话还是继续等待儿子接电话。",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                            "而我们的应用是，只要向我们的后台发出消息了，我们会同时给他的亲人都发送短信，拨打电话，发送位置信息，拉起音视频会议。 这点在ios和安卓都是没有的。"
                        ]
                    })
                ]
            })
        ]
    });
}
/* 解决的痛点组件 */ function PainPointHighlight() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        mt: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                children: "实操中解决的痛点，但是刚接触容易忽略"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                spacing: 1,
                mt: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "在危急情况下，求助者往往第一反应是打电话给最亲近的人。"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "但是现实中，这个电话可能因为无人接听（手机不在身边、睡觉、开会静音等）而失效。"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                        variant: "body1",
                        children: [
                            "此时，求助者本人并不知道该继续等待，还是挂断再打给其他人。",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                                children: "这种不确定性在危急时刻是致命的。"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "我们的产品从根本上解决了这一问题：一旦用户在应用中发出求助消息，后台会自动执行一系列动作："
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                        spacing: 0.5,
                        mt: 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                direction: "row",
                                spacing: 1,
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Sms/* default */.A, {
                                        fontSize: "small"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        children: "群发通知：同时发送短信提醒"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                direction: "row",
                                spacing: 1,
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Phone, {
                                        fontSize: "small"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        children: "电话提醒：多位亲人被自动呼叫"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                direction: "row",
                                spacing: 1,
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LocationOn, {
                                        fontSize: "small"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        children: "位置信息：第一时间同步位置"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                direction: "row",
                                spacing: 1,
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(VideoCall/* default */.A, {
                                        fontSize: "small"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        children: "即时音视频会议：家人第一时间进入沟通，远程指导施救"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                direction: "row",
                                spacing: 1,
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Security/* default */.A, {
                                        fontSize: "small"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "body2",
                                        children: "避免单点失败：不再依赖单个电话接通"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                        variant: "body1",
                        mt: 1,
                        children: [
                            "这让家人不只是被动接到电话，而是",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                                children: "即时、全面地参与救援"
                            }),
                            "，比传统电话机制更可靠。"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body1",
                        children: "目前在 iOS 和安卓的原生功能和已有 App 中，都没有这样的机制。"
                    })
                ]
            })
        ]
    });
}
function BrainstormingPage() {
    const theme = (0,useTheme/* default */.A)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Container/* default */.A, {
        maxWidth: "lg",
        sx: {
            py: 4
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.A, {
            elevation: 0,
            sx: {
                mb: 4,
                p: 4,
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: theme.shadows[2]
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h3",
                    component: "h1",
                    sx: {
                        mb: 4,
                        color: theme.palette.primary.main,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        position: 'relative',
                        '&:after': {
                            content: '""',
                            display: 'block',
                            width: 60,
                            height: 4,
                            bgcolor: theme.palette.primary.main,
                            mx: 'auto',
                            mt: 2,
                            borderRadius: 2
                        }
                    },
                    children: "产品头脑风暴"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "subtitle1",
                    color: "text.secondary",
                    sx: {
                        textAlign: 'center',
                        maxWidth: 800,
                        mx: 'auto',
                        mb: 6
                    },
                    children: "探索创新产品理念，发现潜在市场机会，为不同用户群体设计有意义的解决方案"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                    spacing: 4,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PainPointHighlight, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PromotionIdeas, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AiCompanion, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TargetGroups, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AiLaunchTesting, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(NursingHomeResearch, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CompactDeviceAlert, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IntellectualProperty, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                mt: 4
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "h4",
                                    sx: {
                                        mb: 3,
                                        color: theme.palette.text.primary,
                                        position: 'relative',
                                        display: 'inline-block',
                                        '&:after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -8,
                                            width: '100%',
                                            height: 3,
                                            background: "linear-gradient(90deg, ".concat(theme.palette.primary.main, ", ").concat(theme.palette.secondary.main, ")"),
                                            borderRadius: 3
                                        }
                                    },
                                    children: "成功案例参考"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                    sx: {
                                        display: 'grid',
                                        gridTemplateColumns: {
                                            xs: '1fr',
                                            md: 'repeat(3, 1fr)'
                                        },
                                        gap: 3,
                                        mt: 3
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CaseSam, {}),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CaseHyodol, {}),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CasePoketomo, {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ReferenceData, {})
                    ]
                })
            ]
        })
    });
}


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

/***/ 90495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3z"
}), 'VideoCall'));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [636,6593,8792], () => (__webpack_exec__(63244)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=brainstorming-41ad53fb34974a01.js.map