"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[688],{

/***/ 688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Chip_Chip)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js
var colorManipulator = __webpack_require__(67245);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(61541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/Cancel.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const Cancel = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(71878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ButtonBase/ButtonBase.js + 5 modules
var ButtonBase = __webpack_require__(42932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(36118);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/chipClasses.js


function getChipUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiChip', slot);
}
const chipClasses = (0,generateUtilityClasses/* default */.A)('MuiChip', [
    'root',
    'sizeSmall',
    'sizeMedium',
    'colorDefault',
    'colorError',
    'colorInfo',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorWarning',
    'disabled',
    'clickable',
    'clickableColorPrimary',
    'clickableColorSecondary',
    'deletable',
    'deletableColorPrimary',
    'deletableColorSecondary',
    'outlined',
    'filled',
    'outlinedPrimary',
    'outlinedSecondary',
    'filledPrimary',
    'filledSecondary',
    'avatar',
    'avatarSmall',
    'avatarMedium',
    'avatarColorPrimary',
    'avatarColorSecondary',
    'icon',
    'iconSmall',
    'iconMedium',
    'iconColorPrimary',
    'iconColorSecondary',
    'label',
    'labelSmall',
    'labelMedium',
    'deleteIcon',
    'deleteIconSmall',
    'deleteIconMedium',
    'deleteIconColorPrimary',
    'deleteIconColorSecondary',
    'deleteIconOutlinedColorPrimary',
    'deleteIconOutlinedColorSecondary',
    'deleteIconFilledColorPrimary',
    'deleteIconFilledColorSecondary',
    'focusVisible'
]);
/* harmony default export */ const Chip_chipClasses = (chipClasses);

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js
/* __next_internal_client_entry_do_not_use__ default auto */ 















const useUtilityClasses = (ownerState)=>{
    const { classes, disabled, size, color, iconColor, onDelete, clickable, variant } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            disabled && 'disabled',
            "size".concat((0,capitalize/* default */.A)(size)),
            "color".concat((0,capitalize/* default */.A)(color)),
            clickable && 'clickable',
            clickable && "clickableColor".concat((0,capitalize/* default */.A)(color)),
            onDelete && 'deletable',
            onDelete && "deletableColor".concat((0,capitalize/* default */.A)(color)),
            "".concat(variant).concat((0,capitalize/* default */.A)(color))
        ],
        label: [
            'label',
            "label".concat((0,capitalize/* default */.A)(size))
        ],
        avatar: [
            'avatar',
            "avatar".concat((0,capitalize/* default */.A)(size)),
            "avatarColor".concat((0,capitalize/* default */.A)(color))
        ],
        icon: [
            'icon',
            "icon".concat((0,capitalize/* default */.A)(size)),
            "iconColor".concat((0,capitalize/* default */.A)(iconColor))
        ],
        deleteIcon: [
            'deleteIcon',
            "deleteIcon".concat((0,capitalize/* default */.A)(size)),
            "deleteIconColor".concat((0,capitalize/* default */.A)(color)),
            "deleteIcon".concat((0,capitalize/* default */.A)(variant), "Color").concat((0,capitalize/* default */.A)(color))
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getChipUtilityClass, classes);
};
const ChipRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiChip',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        const { color, iconColor, clickable, onDelete, size, variant } = ownerState;
        return [
            {
                ["& .".concat(Chip_chipClasses.avatar)]: styles.avatar
            },
            {
                ["& .".concat(Chip_chipClasses.avatar)]: styles["avatar".concat((0,capitalize/* default */.A)(size))]
            },
            {
                ["& .".concat(Chip_chipClasses.avatar)]: styles["avatarColor".concat((0,capitalize/* default */.A)(color))]
            },
            {
                ["& .".concat(Chip_chipClasses.icon)]: styles.icon
            },
            {
                ["& .".concat(Chip_chipClasses.icon)]: styles["icon".concat((0,capitalize/* default */.A)(size))]
            },
            {
                ["& .".concat(Chip_chipClasses.icon)]: styles["iconColor".concat((0,capitalize/* default */.A)(iconColor))]
            },
            {
                ["& .".concat(Chip_chipClasses.deleteIcon)]: styles.deleteIcon
            },
            {
                ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIcon".concat((0,capitalize/* default */.A)(size))]
            },
            {
                ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIconColor".concat((0,capitalize/* default */.A)(color))]
            },
            {
                ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIcon".concat((0,capitalize/* default */.A)(variant), "Color").concat((0,capitalize/* default */.A)(color))]
            },
            styles.root,
            styles["size".concat((0,capitalize/* default */.A)(size))],
            styles["color".concat((0,capitalize/* default */.A)(color))],
            clickable && styles.clickable,
            clickable && color !== 'default' && styles["clickableColor".concat((0,capitalize/* default */.A)(color), ")")],
            onDelete && styles.deletable,
            onDelete && color !== 'default' && styles["deletableColor".concat((0,capitalize/* default */.A)(color))],
            styles[variant],
            styles["".concat(variant).concat((0,capitalize/* default */.A)(color))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    const textColor = theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300];
    return {
        maxWidth: '100%',
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(13),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        color: (theme.vars || theme).palette.text.primary,
        backgroundColor: (theme.vars || theme).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: 'nowrap',
        transition: theme.transitions.create([
            'background-color',
            'box-shadow'
        ]),
        // reset cursor explicitly in case ButtonBase is used
        cursor: 'unset',
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0,
        textDecoration: 'none',
        border: 0,
        // Remove `button` border
        padding: 0,
        // Remove `button` padding
        verticalAlign: 'middle',
        boxSizing: 'border-box',
        ["&.".concat(Chip_chipClasses.disabled)]: {
            opacity: (theme.vars || theme).palette.action.disabledOpacity,
            pointerEvents: 'none'
        },
        ["& .".concat(Chip_chipClasses.avatar)]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
            fontSize: theme.typography.pxToRem(12)
        },
        ["& .".concat(Chip_chipClasses.avatarColorPrimary)]: {
            color: (theme.vars || theme).palette.primary.contrastText,
            backgroundColor: (theme.vars || theme).palette.primary.dark
        },
        ["& .".concat(Chip_chipClasses.avatarColorSecondary)]: {
            color: (theme.vars || theme).palette.secondary.contrastText,
            backgroundColor: (theme.vars || theme).palette.secondary.dark
        },
        ["& .".concat(Chip_chipClasses.avatarSmall)]: {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: theme.typography.pxToRem(10)
        },
        ["& .".concat(Chip_chipClasses.icon)]: {
            marginLeft: 5,
            marginRight: -6
        },
        ["& .".concat(Chip_chipClasses.deleteIcon)]: {
            WebkitTapHighlightColor: 'transparent',
            color: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / 0.26)") : (0,colorManipulator/* alpha */.X4)(theme.palette.text.primary, 0.26),
            fontSize: 22,
            cursor: 'pointer',
            margin: '0 5px 0 -6px',
            '&:hover': {
                color: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / 0.4)") : (0,colorManipulator/* alpha */.X4)(theme.palette.text.primary, 0.4)
            }
        },
        variants: [
            {
                props: {
                    size: 'small'
                },
                style: {
                    height: 24,
                    ["& .".concat(Chip_chipClasses.icon)]: {
                        fontSize: 18,
                        marginLeft: 4,
                        marginRight: -4
                    },
                    ["& .".concat(Chip_chipClasses.deleteIcon)]: {
                        fontSize: 16,
                        marginRight: 4,
                        marginLeft: -4
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'contrastText'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        backgroundColor: (theme.vars || theme).palette[color].main,
                        color: (theme.vars || theme).palette[color].contrastText,
                        ["& .".concat(Chip_chipClasses.deleteIcon)]: {
                            color: theme.vars ? "rgba(".concat(theme.vars.palette[color].contrastTextChannel, " / 0.7)") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].contrastText, 0.7),
                            '&:hover, &:active': {
                                color: (theme.vars || theme).palette[color].contrastText
                            }
                        }
                    }
                };
            }),
            {
                props: (props)=>props.iconColor === props.color,
                style: {
                    ["& .".concat(Chip_chipClasses.icon)]: {
                        color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
                    }
                }
            },
            {
                props: (props)=>props.iconColor === props.color && props.color !== 'default',
                style: {
                    ["& .".concat(Chip_chipClasses.icon)]: {
                        color: 'inherit'
                    }
                }
            },
            {
                props: {
                    onDelete: true
                },
                style: {
                    ["&.".concat(Chip_chipClasses.focusVisible)]: {
                        backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.focusOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'dark'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color,
                        onDelete: true
                    },
                    style: {
                        ["&.".concat(Chip_chipClasses.focusVisible)]: {
                            background: (theme.vars || theme).palette[color].dark
                        }
                    }
                };
            }),
            {
                props: {
                    clickable: true
                },
                style: {
                    userSelect: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.hoverOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
                    },
                    ["&.".concat(Chip_chipClasses.focusVisible)]: {
                        backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.focusOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
                    },
                    '&:active': {
                        boxShadow: (theme.vars || theme).shadows[1]
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'dark'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color,
                        clickable: true
                    },
                    style: {
                        ["&:hover, &.".concat(Chip_chipClasses.focusVisible)]: {
                            backgroundColor: (theme.vars || theme).palette[color].dark
                        }
                    }
                };
            }),
            {
                props: {
                    variant: 'outlined'
                },
                style: {
                    backgroundColor: 'transparent',
                    border: theme.vars ? "1px solid ".concat(theme.vars.palette.Chip.defaultBorder) : "1px solid ".concat(theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[700]),
                    ["&.".concat(Chip_chipClasses.clickable, ":hover")]: {
                        backgroundColor: (theme.vars || theme).palette.action.hover
                    },
                    ["&.".concat(Chip_chipClasses.focusVisible)]: {
                        backgroundColor: (theme.vars || theme).palette.action.focus
                    },
                    ["& .".concat(Chip_chipClasses.avatar)]: {
                        marginLeft: 4
                    },
                    ["& .".concat(Chip_chipClasses.avatarSmall)]: {
                        marginLeft: 2
                    },
                    ["& .".concat(Chip_chipClasses.icon)]: {
                        marginLeft: 4
                    },
                    ["& .".concat(Chip_chipClasses.iconSmall)]: {
                        marginLeft: 2
                    },
                    ["& .".concat(Chip_chipClasses.deleteIcon)]: {
                        marginRight: 5
                    },
                    ["& .".concat(Chip_chipClasses.deleteIconSmall)]: {
                        marginRight: 3
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // no need to check for mainChannel as it's calculated from main
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        variant: 'outlined',
                        color
                    },
                    style: {
                        color: (theme.vars || theme).palette[color].main,
                        border: "1px solid ".concat(theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / 0.7)") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, 0.7)),
                        ["&.".concat(Chip_chipClasses.clickable, ":hover")]: {
                            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, theme.palette.action.hoverOpacity)
                        },
                        ["&.".concat(Chip_chipClasses.focusVisible)]: {
                            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / ").concat(theme.vars.palette.action.focusOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, theme.palette.action.focusOpacity)
                        },
                        ["& .".concat(Chip_chipClasses.deleteIcon)]: {
                            color: theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / 0.7)") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, 0.7),
                            '&:hover, &:active': {
                                color: (theme.vars || theme).palette[color].main
                            }
                        }
                    }
                };
            })
        ]
    };
}));
const ChipLabel = (0,styled/* default */.Ay)('span', {
    name: 'MuiChip',
    slot: 'Label',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        const { size } = ownerState;
        return [
            styles.label,
            styles["label".concat((0,capitalize/* default */.A)(size))]
        ];
    }
})({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: 'nowrap',
    variants: [
        {
            props: {
                variant: 'outlined'
            },
            style: {
                paddingLeft: 11,
                paddingRight: 11
            }
        },
        {
            props: {
                size: 'small'
            },
            style: {
                paddingLeft: 8,
                paddingRight: 8
            }
        },
        {
            props: {
                size: 'small',
                variant: 'outlined'
            },
            style: {
                paddingLeft: 7,
                paddingRight: 7
            }
        }
    ]
});
function isDeleteKeyboardEvent(keyboardEvent) {
    return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */ const Chip = /*#__PURE__*/ react.forwardRef(function Chip(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiChip'
    });
    const { avatar: avatarProp, className, clickable: clickableProp, color = 'default', component: ComponentProp, deleteIcon: deleteIconProp, disabled = false, icon: iconProp, label, onClick, onDelete, onKeyDown, onKeyUp, size = 'medium', variant = 'filled', tabIndex, skipFocusWhenDisabled = false, // TODO v6: Rename to `focusableWhenDisabled`.
    ...other } = props;
    const chipRef = react.useRef(null);
    const handleRef = (0,useForkRef/* default */.A)(chipRef, ref);
    const handleDeleteIconClick = (event)=>{
        // Stop the event from bubbling up to the `Chip`
        event.stopPropagation();
        if (onDelete) {
            onDelete(event);
        }
    };
    const handleKeyDown = (event)=>{
        // Ignore events from children of `Chip`.
        if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
            // Will be handled in keyUp, otherwise some browsers
            // might init navigation
            event.preventDefault();
        }
        if (onKeyDown) {
            onKeyDown(event);
        }
    };
    const handleKeyUp = (event)=>{
        // Ignore events from children of `Chip`.
        if (event.currentTarget === event.target) {
            if (onDelete && isDeleteKeyboardEvent(event)) {
                onDelete(event);
            }
        }
        if (onKeyUp) {
            onKeyUp(event);
        }
    };
    const clickable = clickableProp !== false && onClick ? true : clickableProp;
    const component = clickable || onDelete ? ButtonBase/* default */.A : ComponentProp || 'div';
    const ownerState = {
        ...props,
        component,
        disabled,
        size,
        color,
        iconColor: /*#__PURE__*/ react.isValidElement(iconProp) ? iconProp.props.color || color : color,
        onDelete: !!onDelete,
        clickable,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    const moreProps = component === ButtonBase/* default */.A ? {
        component: ComponentProp || 'div',
        focusVisibleClassName: classes.focusVisible,
        ...onDelete && {
            disableRipple: true
        }
    } : {};
    let deleteIcon = null;
    if (onDelete) {
        deleteIcon = deleteIconProp && /*#__PURE__*/ react.isValidElement(deleteIconProp) ? /*#__PURE__*/ react.cloneElement(deleteIconProp, {
            className: (0,clsx/* default */.A)(deleteIconProp.props.className, classes.deleteIcon),
            onClick: handleDeleteIconClick
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Cancel, {
            className: (0,clsx/* default */.A)(classes.deleteIcon),
            onClick: handleDeleteIconClick
        });
    }
    let avatar = null;
    if (avatarProp && /*#__PURE__*/ react.isValidElement(avatarProp)) {
        avatar = /*#__PURE__*/ react.cloneElement(avatarProp, {
            className: (0,clsx/* default */.A)(classes.avatar, avatarProp.props.className)
        });
    }
    let icon = null;
    if (iconProp && /*#__PURE__*/ react.isValidElement(iconProp)) {
        icon = /*#__PURE__*/ react.cloneElement(iconProp, {
            className: (0,clsx/* default */.A)(classes.icon, iconProp.props.className)
        });
    }
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ChipRoot, {
        as: component,
        className: (0,clsx/* default */.A)(classes.root, className),
        disabled: clickable && disabled ? true : undefined,
        onClick: onClick,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        ref: handleRef,
        tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
        ownerState: ownerState,
        ...moreProps,
        ...other,
        children: [
            avatar || icon,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ChipLabel, {
                className: (0,clsx/* default */.A)(classes.label),
                ownerState: ownerState,
                children: label
            }),
            deleteIcon
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Chip_Chip = (Chip);


/***/ })

}]);
//# sourceMappingURL=688-e317d4a6767e021e.js.map