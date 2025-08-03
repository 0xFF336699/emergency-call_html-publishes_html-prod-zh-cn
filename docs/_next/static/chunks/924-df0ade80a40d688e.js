"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[924],{

/***/ 87924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ Grid_Grid)
});

// UNUSED EXPORTS: generateColumnGap, generateDirection, generateGrid, generateRowGap, resolveSpacingClasses, resolveSpacingStyles

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/breakpoints/breakpoints.js
var breakpoints = __webpack_require__(64489);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(82603);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(38443);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid/GridContext.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
/**
 * @ignore - internal component.
 */ const GridContext = /*#__PURE__*/ react.createContext();
if (false) {}
/* harmony default export */ const Grid_GridContext = (GridContext);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid/gridClasses.js


function getGridUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiGrid', slot);
}
const SPACINGS = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];
const DIRECTIONS = [
    'column-reverse',
    'column',
    'row-reverse',
    'row'
];
const WRAPS = [
    'nowrap',
    'wrap-reverse',
    'wrap'
];
const GRID_SIZES = [
    'auto',
    true,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
];
const gridClasses = (0,generateUtilityClasses/* default */.A)('MuiGrid', [
    'root',
    'container',
    'item',
    'zeroMinWidth',
    // spacings
    ...SPACINGS.map((spacing)=>"spacing-xs-".concat(spacing)),
    // direction values
    ...DIRECTIONS.map((direction)=>"direction-xs-".concat(direction)),
    // wrap values
    ...WRAPS.map((wrap)=>"wrap-xs-".concat(wrap)),
    // grid sizes for all breakpoints
    ...GRID_SIZES.map((size)=>"grid-xs-".concat(size)),
    ...GRID_SIZES.map((size)=>"grid-sm-".concat(size)),
    ...GRID_SIZES.map((size)=>"grid-md-".concat(size)),
    ...GRID_SIZES.map((size)=>"grid-lg-".concat(size)),
    ...GRID_SIZES.map((size)=>"grid-xl-".concat(size))
]);
/* harmony default export */ const Grid_gridClasses = (gridClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid/Grid.js
/* __next_internal_client_entry_do_not_use__ generateGrid,generateDirection,generateRowGap,generateColumnGap,resolveSpacingStyles,resolveSpacingClasses,default auto */ // A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/













function generateGrid(param) {
    let { theme, ownerState } = param;
    let size;
    return theme.breakpoints.keys.reduce((globalStyles, breakpoint)=>{
        // Use side effect over immutability for better performance.
        let styles = {};
        if (ownerState[breakpoint]) {
            size = ownerState[breakpoint];
        }
        if (!size) {
            return globalStyles;
        }
        if (size === true) {
            // For the auto layouting
            styles = {
                flexBasis: 0,
                flexGrow: 1,
                maxWidth: '100%'
            };
        } else if (size === 'auto') {
            styles = {
                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 0,
                maxWidth: 'none',
                width: 'auto'
            };
        } else {
            const columnsBreakpointValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
                values: ownerState.columns,
                breakpoints: theme.breakpoints.values
            });
            const columnValue = typeof columnsBreakpointValues === 'object' ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;
            if (columnValue === undefined || columnValue === null) {
                return globalStyles;
            }
            // Keep 7 significant numbers.
            const width = "".concat(Math.round(size / columnValue * 10e7) / 10e5, "%");
            let more = {};
            if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
                const themeSpacing = theme.spacing(ownerState.columnSpacing);
                if (themeSpacing !== '0px') {
                    const fullWidth = "calc(".concat(width, " + ").concat(themeSpacing, ")");
                    more = {
                        flexBasis: fullWidth,
                        maxWidth: fullWidth
                    };
                }
            }
            // Close to the bootstrap implementation:
            // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
            styles = {
                flexBasis: width,
                flexGrow: 0,
                maxWidth: width,
                ...more
            };
        }
        // No need for a media query for the first size.
        if (theme.breakpoints.values[breakpoint] === 0) {
            Object.assign(globalStyles, styles);
        } else {
            globalStyles[theme.breakpoints.up(breakpoint)] = styles;
        }
        return globalStyles;
    }, {});
}
function generateDirection(param) {
    let { theme, ownerState } = param;
    const directionValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
        values: ownerState.direction,
        breakpoints: theme.breakpoints.values
    });
    return (0,breakpoints/* handleBreakpoints */.NI)({
        theme
    }, directionValues, (propValue)=>{
        const output = {
            flexDirection: propValue
        };
        if (propValue.startsWith('column')) {
            output["& > .".concat(Grid_gridClasses.item)] = {
                maxWidth: 'none'
            };
        }
        return output;
    });
}
/**
 * Extracts zero value breakpoint keys before a non-zero value breakpoint key.
 * @example { xs: 0, sm: 0, md: 2, lg: 0, xl: 0 } or [0, 0, 2, 0, 0]
 * @returns [xs, sm]
 */ function extractZeroValueBreakpointKeys(param) {
    let { breakpoints, values } = param;
    let nonZeroKey = '';
    Object.keys(values).forEach((key)=>{
        if (nonZeroKey !== '') {
            return;
        }
        if (values[key] !== 0) {
            nonZeroKey = key;
        }
    });
    const sortedBreakpointKeysByValue = Object.keys(breakpoints).sort((a, b)=>{
        return breakpoints[a] - breakpoints[b];
    });
    return sortedBreakpointKeysByValue.slice(0, sortedBreakpointKeysByValue.indexOf(nonZeroKey));
}
function generateRowGap(param) {
    let { theme, ownerState } = param;
    const { container, rowSpacing } = ownerState;
    let styles = {};
    if (container && rowSpacing !== 0) {
        const rowSpacingValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
            values: rowSpacing,
            breakpoints: theme.breakpoints.values
        });
        let zeroValueBreakpointKeys;
        if (typeof rowSpacingValues === 'object') {
            zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
                breakpoints: theme.breakpoints.values,
                values: rowSpacingValues
            });
        }
        styles = (0,breakpoints/* handleBreakpoints */.NI)({
            theme
        }, rowSpacingValues, (propValue, breakpoint)=>{
            const themeSpacing = theme.spacing(propValue);
            if (themeSpacing !== '0px') {
                return {
                    marginTop: "calc(-1 * ".concat(themeSpacing, ")"),
                    ["& > .".concat(Grid_gridClasses.item)]: {
                        paddingTop: themeSpacing
                    }
                };
            }
            if (zeroValueBreakpointKeys === null || zeroValueBreakpointKeys === void 0 ? void 0 : zeroValueBreakpointKeys.includes(breakpoint)) {
                return {};
            }
            return {
                marginTop: 0,
                ["& > .".concat(Grid_gridClasses.item)]: {
                    paddingTop: 0
                }
            };
        });
    }
    return styles;
}
function generateColumnGap(param) {
    let { theme, ownerState } = param;
    const { container, columnSpacing } = ownerState;
    let styles = {};
    if (container && columnSpacing !== 0) {
        const columnSpacingValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
            values: columnSpacing,
            breakpoints: theme.breakpoints.values
        });
        let zeroValueBreakpointKeys;
        if (typeof columnSpacingValues === 'object') {
            zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
                breakpoints: theme.breakpoints.values,
                values: columnSpacingValues
            });
        }
        styles = (0,breakpoints/* handleBreakpoints */.NI)({
            theme
        }, columnSpacingValues, (propValue, breakpoint)=>{
            const themeSpacing = theme.spacing(propValue);
            if (themeSpacing !== '0px') {
                const negativeValue = "calc(-1 * ".concat(themeSpacing, ")");
                return {
                    width: "calc(100% + ".concat(themeSpacing, ")"),
                    marginLeft: negativeValue,
                    ["& > .".concat(Grid_gridClasses.item)]: {
                        paddingLeft: themeSpacing
                    }
                };
            }
            if (zeroValueBreakpointKeys === null || zeroValueBreakpointKeys === void 0 ? void 0 : zeroValueBreakpointKeys.includes(breakpoint)) {
                return {};
            }
            return {
                width: '100%',
                marginLeft: 0,
                ["& > .".concat(Grid_gridClasses.item)]: {
                    paddingLeft: 0
                }
            };
        });
    }
    return styles;
}
function resolveSpacingStyles(spacing, breakpoints) {
    let styles = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    // undefined/null or `spacing` <= 0
    if (!spacing || spacing <= 0) {
        return [];
    }
    // in case of string/number `spacing`
    if (typeof spacing === 'string' && !Number.isNaN(Number(spacing)) || typeof spacing === 'number') {
        return [
            styles["spacing-xs-".concat(String(spacing))]
        ];
    }
    // in case of object `spacing`
    const spacingStyles = [];
    breakpoints.forEach((breakpoint)=>{
        const value = spacing[breakpoint];
        if (Number(value) > 0) {
            spacingStyles.push(styles["spacing-".concat(breakpoint, "-").concat(String(value))]);
        }
    });
    return spacingStyles;
}
// Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',
const GridRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiGrid',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        const { container, direction, item, spacing, wrap, zeroMinWidth, breakpoints } = ownerState;
        let spacingStyles = [];
        // in case of grid item
        if (container) {
            spacingStyles = resolveSpacingStyles(spacing, breakpoints, styles);
        }
        const breakpointsStyles = [];
        breakpoints.forEach((breakpoint)=>{
            const value = ownerState[breakpoint];
            if (value) {
                breakpointsStyles.push(styles["grid-".concat(breakpoint, "-").concat(String(value))]);
            }
        });
        return [
            styles.root,
            container && styles.container,
            item && styles.item,
            zeroMinWidth && styles.zeroMinWidth,
            ...spacingStyles,
            direction !== 'row' && styles["direction-xs-".concat(String(direction))],
            wrap !== 'wrap' && styles["wrap-xs-".concat(String(wrap))],
            ...breakpointsStyles
        ];
    }
})(// FIXME(romgrk): Can't use memoTheme here
(param)=>{
    let { ownerState } = param;
    return {
        boxSizing: 'border-box',
        ...ownerState.container && {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%'
        },
        ...ownerState.item && {
            margin: 0 // For instance, it's useful when used with a `figure` element.
        },
        ...ownerState.zeroMinWidth && {
            minWidth: 0
        },
        ...ownerState.wrap !== 'wrap' && {
            flexWrap: ownerState.wrap
        }
    };
}, generateDirection, generateRowGap, generateColumnGap, generateGrid);
function resolveSpacingClasses(spacing, breakpoints) {
    // undefined/null or `spacing` <= 0
    if (!spacing || spacing <= 0) {
        return [];
    }
    // in case of string/number `spacing`
    if (typeof spacing === 'string' && !Number.isNaN(Number(spacing)) || typeof spacing === 'number') {
        return [
            "spacing-xs-".concat(String(spacing))
        ];
    }
    // in case of object `spacing`
    const classes = [];
    breakpoints.forEach((breakpoint)=>{
        const value = spacing[breakpoint];
        if (Number(value) > 0) {
            const className = "spacing-".concat(breakpoint, "-").concat(String(value));
            classes.push(className);
        }
    });
    return classes;
}
const useUtilityClasses = (ownerState)=>{
    const { classes, container, direction, item, spacing, wrap, zeroMinWidth, breakpoints } = ownerState;
    let spacingClasses = [];
    // in case of grid item
    if (container) {
        spacingClasses = resolveSpacingClasses(spacing, breakpoints);
    }
    const breakpointsClasses = [];
    breakpoints.forEach((breakpoint)=>{
        const value = ownerState[breakpoint];
        if (value) {
            breakpointsClasses.push("grid-".concat(breakpoint, "-").concat(String(value)));
        }
    });
    const slots = {
        root: [
            'root',
            container && 'container',
            item && 'item',
            zeroMinWidth && 'zeroMinWidth',
            ...spacingClasses,
            direction !== 'row' && "direction-xs-".concat(String(direction)),
            wrap !== 'wrap' && "wrap-xs-".concat(String(wrap)),
            ...breakpointsClasses
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getGridUtilityClass, classes);
};
/**
 * @deprecated Use the [`Grid2`](https://mui.com/material-ui/react-grid2/) component instead.
 */ const Grid = /*#__PURE__*/ react.forwardRef(function Grid(inProps, ref) {
    const themeProps = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiGrid'
    });
    const { breakpoints } = (0,useTheme/* default */.A)();
    const props = (0,extendSxProp/* default */.A)(themeProps);
    const { className, columns: columnsProp, columnSpacing: columnSpacingProp, component = 'div', container = false, direction = 'row', item = false, rowSpacing: rowSpacingProp, spacing = 0, wrap = 'wrap', zeroMinWidth = false, ...other } = props;
    const rowSpacing = rowSpacingProp || spacing;
    const columnSpacing = columnSpacingProp || spacing;
    const columnsContext = react.useContext(Grid_GridContext);
    // columns set with default breakpoint unit of 12
    const columns = container ? columnsProp || 12 : columnsContext;
    const breakpointsValues = {};
    const otherFiltered = {
        ...other
    };
    breakpoints.keys.forEach((breakpoint)=>{
        if (other[breakpoint] != null) {
            breakpointsValues[breakpoint] = other[breakpoint];
            delete otherFiltered[breakpoint];
        }
    });
    const ownerState = {
        ...props,
        columns,
        container,
        direction,
        item,
        rowSpacing,
        columnSpacing,
        wrap,
        zeroMinWidth,
        spacing,
        ...breakpointsValues,
        breakpoints: breakpoints.keys
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid_GridContext.Provider, {
        value: columns,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GridRoot, {
            ownerState: ownerState,
            className: (0,clsx/* default */.A)(classes.root, className),
            as: component,
            ref: ref,
            ...otherFiltered
        })
    });
});
 false ? 0 : void 0;
if (false) {}
/* harmony default export */ const Grid_Grid = (Grid);


/***/ })

}]);
//# sourceMappingURL=924-df0ade80a40d688e.js.map