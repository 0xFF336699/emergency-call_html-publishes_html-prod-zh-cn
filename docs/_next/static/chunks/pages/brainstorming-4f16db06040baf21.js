(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3473],{

/***/ 9220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Stack_Stack)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/deepmerge/deepmerge.js
var deepmerge = __webpack_require__(33186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/styled/styled.js
var styled = __webpack_require__(17933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(45375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(82603);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/createTheme/createTheme.js + 3 modules
var createTheme = __webpack_require__(43270);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/breakpoints/breakpoints.js
var breakpoints = __webpack_require__(64489);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/spacing/spacing.js + 1 modules
var spacing = __webpack_require__(35623);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/Stack/createStack.js













const defaultTheme = (0,createTheme/* default */.A)();
// widening Theme to any so that the consumer can own the theme structure.
const defaultCreateStyledComponent = (0,styled/* default */.A)('div', {
  name: 'MuiStack',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
});
function useThemePropsDefault(props) {
  return (0,useThemeProps/* default */.A)({
    props,
    name: 'MuiStack',
    defaultTheme
  });
}

/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */
function joinChildren(children, separator) {
  const childrenArray = react.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(/*#__PURE__*/react.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
const getSideFromDirection = direction => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom'
  }[direction];
};
const style = ({
  ownerState,
  theme
}) => {
  let styles = {
    display: 'flex',
    flexDirection: 'column',
    ...(0,breakpoints/* handleBreakpoints */.NI)({
      theme
    }, (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: ownerState.direction,
      breakpoints: theme.breakpoints.values
    }), propValue => ({
      flexDirection: propValue
    }))
  };
  if (ownerState.spacing) {
    const transformer = (0,spacing/* createUnarySpacing */.LX)(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === 'object' && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === 'object' && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: ownerState.direction,
      base
    });
    const spacingValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: ownerState.spacing,
      base
    });
    if (typeof directionValues === 'object') {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : 'column';
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      if (ownerState.useFlexGap) {
        return {
          gap: (0,spacing/* getValue */._W)(transformer, propValue)
        };
      }
      return {
        // The useFlexGap={false} implement relies on each child to give up control of the margin.
        // We need to reset the margin to avoid double spacing.
        '& > :not(style):not(style)': {
          margin: 0
        },
        '& > :not(style) ~ :not(style)': {
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: (0,spacing/* getValue */._W)(transformer, propValue)
        }
      };
    };
    styles = (0,deepmerge/* default */.A)(styles, (0,breakpoints/* handleBreakpoints */.NI)({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles = (0,breakpoints/* mergeBreakpointsInOrder */.iZ)(theme.breakpoints, styles);
  return styles;
};
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = 'MuiStack'
  } = options;
  const useUtilityClasses = () => {
    const slots = {
      root: ['root']
    };
    return (0,composeClasses/* default */.A)(slots, slot => (0,generateUtilityClass/* default */.Ay)(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style);
  const Stack = /*#__PURE__*/react.forwardRef(function Grid(inProps, ref) {
    const themeProps = useThemeProps(inProps);
    const props = (0,extendSxProp/* default */.A)(themeProps); // `color` type conflicts with html color attribute.
    const {
      component = 'div',
      direction = 'column',
      spacing = 0,
      divider,
      children,
      className,
      useFlexGap = false,
      ...other
    } = props;
    const ownerState = {
      direction,
      spacing,
      useFlexGap
    };
    const classes = useUtilityClasses();
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StackRoot, {
      as: component,
      ownerState: ownerState,
      ref: ref,
      className: (0,clsx/* default */.A)(classes.root, className),
      ...other,
      children: divider ? joinChildren(children, divider) : children
    });
  });
   false ? 0 : void 0;
  return Stack;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styles_styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Stack/Stack.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Stack = createStack({
    createStyledComponent: (0,styles_styled/* default */.Ay)('div', {
        name: 'MuiStack',
        slot: 'Root',
        overridesResolver: (props, styles)=>styles.root
    }),
    useThemeProps: (inProps)=>(0,DefaultPropsProvider/* useDefaultProps */.b)({
            props: inProps,
            name: 'MuiStack'
        })
});
 false ? 0 : void 0;
/* harmony default export */ const Stack_Stack = (Stack);


/***/ }),

/***/ 17933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createStyled_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75637);

const styled = (0,_createStyled_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);

/***/ }),

/***/ 38443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81499);
/* harmony import */ var _defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38609);
/* harmony import */ var _identifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51992);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function useTheme() {
    const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
    if (false) {}
    return theme[_identifier_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A] || theme;
}


/***/ }),

/***/ 45375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useThemeProps)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/resolveProps/resolveProps.js
var resolveProps = __webpack_require__(20892);
;// ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js

function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return (0,resolveProps/* default */.A)(theme.components[name].defaultProps, props);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/useTheme/useTheme.js
var useTheme = __webpack_require__(81499);
;// ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
'use client';



function useThemeProps({
  props,
  name,
  defaultTheme,
  themeId
}) {
  let theme = (0,useTheme/* default */.A)(defaultTheme);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  return getThemeProps({
    theme,
    name,
    props
  });
}

/***/ }),

/***/ 59864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Paper_Paper)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js
var colorManipulator = __webpack_require__(67245);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(38443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = __webpack_require__(36869);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/paperClasses.js


function getPaperUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiPaper', slot);
}
const paperClasses = (0,generateUtilityClasses/* default */.A)('MuiPaper', [
    'root',
    'rounded',
    'outlined',
    'elevation',
    'elevation0',
    'elevation1',
    'elevation2',
    'elevation3',
    'elevation4',
    'elevation5',
    'elevation6',
    'elevation7',
    'elevation8',
    'elevation9',
    'elevation10',
    'elevation11',
    'elevation12',
    'elevation13',
    'elevation14',
    'elevation15',
    'elevation16',
    'elevation17',
    'elevation18',
    'elevation19',
    'elevation20',
    'elevation21',
    'elevation22',
    'elevation23',
    'elevation24'
]);
/* harmony default export */ const Paper_paperClasses = ((/* unused pure expression or super */ null && (paperClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js
/* __next_internal_client_entry_do_not_use__ default auto */ 












const useUtilityClasses = (ownerState)=>{
    const { square, elevation, variant, classes } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            !square && 'rounded',
            variant === 'elevation' && "elevation".concat(elevation)
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getPaperUtilityClass, classes);
};
const PaperRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            !ownerState.square && styles.rounded,
            ownerState.variant === 'elevation' && styles["elevation".concat(ownerState.elevation)]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        backgroundColor: (theme.vars || theme).palette.background.paper,
        color: (theme.vars || theme).palette.text.primary,
        transition: theme.transitions.create('box-shadow'),
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.square;
                },
                style: {
                    borderRadius: theme.shape.borderRadius
                }
            },
            {
                props: {
                    variant: 'outlined'
                },
                style: {
                    border: "1px solid ".concat((theme.vars || theme).palette.divider)
                }
            },
            {
                props: {
                    variant: 'elevation'
                },
                style: {
                    boxShadow: 'var(--Paper-shadow)',
                    backgroundImage: 'var(--Paper-overlay)'
                }
            }
        ]
    };
}));
const Paper = /*#__PURE__*/ react.forwardRef(function Paper(inProps, ref) {
    var _theme_vars_overlays;
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiPaper'
    });
    const theme = (0,useTheme/* default */.A)();
    const { className, component = 'div', elevation = 1, square = false, variant = 'elevation', ...other } = props;
    const ownerState = {
        ...props,
        component,
        elevation,
        square,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PaperRoot, {
        as: component,
        ownerState: ownerState,
        className: (0,clsx/* default */.A)(classes.root, className),
        ref: ref,
        ...other,
        style: {
            ...variant === 'elevation' && {
                '--Paper-shadow': (theme.vars || theme).shadows[elevation],
                ...theme.vars && {
                    '--Paper-overlay': (_theme_vars_overlays = theme.vars.overlays) === null || _theme_vars_overlays === void 0 ? void 0 : _theme_vars_overlays[elevation]
                },
                ...!theme.vars && theme.palette.mode === 'dark' && {
                    '--Paper-overlay': "linear-gradient(".concat((0,colorManipulator/* alpha */.X4)('#fff', (0,getOverlayAlpha/* default */.A)(elevation)), ", ").concat((0,colorManipulator/* alpha */.X4)('#fff', (0,getOverlayAlpha/* default */.A)(elevation)), ")")
                }
            },
            ...other.style
        }
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Paper_Paper = (Paper);


/***/ }),

/***/ 63244:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/brainstorming",
      function () {
        return __webpack_require__(86641);
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

/***/ 86641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrainstormingPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6445);
/* harmony import */ var _barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67079);
/* harmony import */ var _barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9220);
/* harmony import */ var _barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88049);
/* harmony import */ var _barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65371);


/* ------------------ 核心模块组件 ------------------ */ /* AI产品陪伴思路组件 */ function AiCompanion() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                variant: "h6",
                children: "AI产品陪伴思路"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• AI产品的陪伴属性在老人群体中有很好的前景"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• AI可以设定性格，为缺少亲人照顾的人提供心理慰藉"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: [
                            "• 可以做多合一组合套装，床上的，地上的，口袋的。",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                            "低级版可以是一个音响加上一些ai功能，以后逐渐升级为会动的，当然也可以现在就做，技术上应该不是问题。",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                            "可以做那种讲故事能够绘声绘色手舞足蹈的。",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                            "因为是套装，做出多声道的音响效果应该也行。"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• AI宠物可以添加例如爱抚增加亲密值的功能，并且比较重要的是可以添加他人爱抚，增加收养者的社交亲密值功能，以此可以用来打开一条老年人扩列社交的道路。"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 视障人士容易摔倒，也是潜在目标群体之一。ai眼镜辅助视障人士的工具现在有没有？"
                    })
                ]
            })
        ]
    });
}
/* 目标群体组件 */ function TargetGroups() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                variant: "h6",
                mt: 2,
                children: "当前能想到的目标群体"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 孩童：容易跑跳冲撞，家人会比较担心"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 老人：到了容易摔倒的年纪，家人也是担心"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 单身女性：经常差旅的，或者需要陪客户的，也会有这种需求"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 老人和单身女性会有被关心的需求，这个服务不知道能不能添加"
                    })
                ]
            })
        ]
    });
}
/* AI功能上线与市场测试组件 */ function AiLaunchTesting() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                variant: "h6",
                mt: 2,
                children: "AI功能上线与市场测试"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                variant: "body1",
                children: "当前面临推广的问题，需要权衡是否是必须要做了ai再上线，还是现在的产品就可以上线进行市场测试"
            })
        ]
    });
}
/* 养老院调研组件 */ function NursingHomeResearch() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                variant: "h6",
                mt: 2,
                children: "养老院调研"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 深入养老院，调研老人的日常需求"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 针对真实需求开发应用，提高落地性"
                    })
                ]
            })
        ]
    });
}
/* 小巧设备报警组件 */ function CompactDeviceAlert() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        mt: 4,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                variant: "h6",
                children: "小巧设备报警"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                variant: "subtitle2",
                mt: 1,
                children: "供电方式"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 小电池供电：可做成手机支架、手环、钥匙链"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 手机壳代理充电口：依然能充电，同时给 RFID 供电，但需考虑体积增加"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                variant: "subtitle2",
                mt: 1,
                children: "特性"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 小开关触发，容易误触，因此需加预报警"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 电池、开关、传输距离需要权衡设计"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 若体积允许，可加蜂鸣器，与手机双向查找"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                variant: "subtitle2",
                mt: 1,
                children: "思考"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 是否有必要设计成可快速拆卸或长期便携的形态？"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 如果便携化，带蜂鸣器可帮助手机与设备双向互找，减少遗忘手机位置的困扰"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 手机支架，耳机，手环，戒指，眼镜，这些都可以考虑。"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: [
                            "• 例如这样的设备，一扒拉就能报警 ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
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
/* 案例组件 */ function CaseSam() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        id: "anchor-case-sam",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
                    mb: 1,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                        src: "https://cdn.qiniu.fanfanlo.com/temp/640.webp",
                        alt: "Sam养老机器人",
                        style: {
                            width: "200px",
                            height: "auto"
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                    variant: "subtitle1",
                    fontWeight: "bold",
                    children: "18岁女孩做养老机器人，上线2天卖爆了"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                    variant: "body1",
                    children: "18岁，创业做机器人，还卖爆单了！产品名为 Sam，由 Audrey Lo 和两个同龄朋友共同研发。"
                })
            ]
        })
    });
}
function CaseHyodol() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        id: "anchor-case-hyodol",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
                    mb: 1,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                        src: "https://pic1.zhimg.com/70/v2-2933db2e185863a57f7545e80ccf9b8b_1440w.avis?source=172ae18b&biz_tag=Post",
                        alt: "Hyodol智能娃娃",
                        style: {
                            width: "200px",
                            height: "auto"
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                    variant: "subtitle1",
                    fontWeight: "bold",
                    children: "韩国给独居老人发AI玩偶，24h陪伴+健康监测"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                    variant: "body1",
                    children: "由韩国初创公司 Hyodol 开发的智能娃娃，能陪聊天、提醒吃饭和服药，并在紧急情况通知护工和家人。"
                })
            ]
        })
    });
}
function CasePoketomo() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        id: "anchor-case-poketomo",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
                    mb: 1,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                        src: "https://gbres.dfcfw.com/Files/picture/20250903/2F05A5C304C60FBDE05DAB4B6552BCCA_w1080h721.png",
                        alt: "PokeTomo口袋智能伙伴机器人",
                        style: {
                            width: "200px",
                            height: "auto"
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                    variant: "subtitle1",
                    fontWeight: "bold",
                    children: "PokeTomo – 夏普推出的口袋智能伙伴机器人"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                    variant: "body1",
                    children: "PokeTomo 能与用户自然对话，通过声音和灯光表达情感，并记录与用户的回忆。"
                })
            ]
        })
    });
}
/* 引用数据组件 */ function ReferenceData() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        id: "anchor-ref-data",
        mt: 2,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                    variant: "h6",
                    children: "引用数据"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                    variant: "body1",
                    children: "2024年数据: 日本警察厅2024年的数据显示，有7.6万名独居者在家中去世，其中超过2.1万人死亡后8天以上才被发现，被认定为“孤独死”。 定义: “孤独死”通常是指一个人在无人陪伴的情况下死亡，且尸体经过一段较长时间（如8天以上）才被发现。"
                })
            ]
        })
    });
}
/* 现有推广思路组件 */ function PromotionIdeas() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        mt: 2,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                variant: "h6",
                children: "现有情况下怎么推广"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 现在产品体验依然不好，所以想了解下诸位对现有产品的感受？无论有什么样的改进方式都请提出。"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 如果能接受进行推广，那么我们应该怎么推广？"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 去广场舞的地方进行推广，有哪些套路可用？"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 到抖音找人推广，怎么找？找什么人？我是个彻底的抖音盲，这个方向一定得你们出主意。"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 到写字楼找等电梯的人进行推广，我去咕咚躺地上表演，旁白你们帮我录像，最终找几个合适的视频可以用作宣传，但是可能得给人家打码。其实刷楼扫楼也可以，但是用什么方法给他们洗脑呢？"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        variant: "body1",
                        children: "• 还有哪些比较精准小范围的推广？就是用户反馈能比较多，比较直接的那种"
                    })
                ]
            })
        ]
    });
}
/* ------------------ 主页面 ------------------ */ function BrainstormingPage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                children: "头脑风暴"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_Card_CardContent_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TargetGroups, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AiCompanion, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AiLaunchTesting, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NursingHomeResearch, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CompactDeviceAlert, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PromotionIdeas, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CaseSam, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CaseHyodol, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CasePoketomo, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ReferenceData, {})
                ]
            })
        ]
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [636,6593,8792], () => (__webpack_exec__(63244)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=brainstorming-4f16db06040baf21.js.map