(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8054],{

/***/ 4132:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/intro",
      function () {
        return __webpack_require__(79616);
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

/***/ 79616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ IntroPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/app/AppShell.tsx + 4 modules
var AppShell = __webpack_require__(43173);
// EXTERNAL MODULE: ../../libs/app/ui/src/components/appbar/AppBar.tsx + 3 modules
var AppBar = __webpack_require__(1563);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(88049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/typographyClasses.js
var typographyClasses = __webpack_require__(42017);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardHeader/cardHeaderClasses.js


function getCardHeaderUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiCardHeader', slot);
}
const cardHeaderClasses = (0,generateUtilityClasses/* default */.A)('MuiCardHeader', [
    'root',
    'avatar',
    'action',
    'content',
    'title',
    'subheader'
]);
/* harmony default export */ const CardHeader_cardHeaderClasses = (cardHeaderClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardHeader/CardHeader.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ],
        avatar: [
            'avatar'
        ],
        action: [
            'action'
        ],
        content: [
            'content'
        ],
        title: [
            'title'
        ],
        subheader: [
            'subheader'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getCardHeaderUtilityClass, classes);
};
const CardHeaderRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiCardHeader',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        return [
            {
                ["& .".concat(CardHeader_cardHeaderClasses.title)]: styles.title
            },
            {
                ["& .".concat(CardHeader_cardHeaderClasses.subheader)]: styles.subheader
            },
            styles.root
        ];
    }
})({
    display: 'flex',
    alignItems: 'center',
    padding: 16
});
const CardHeaderAvatar = (0,styled/* default */.Ay)('div', {
    name: 'MuiCardHeader',
    slot: 'Avatar',
    overridesResolver: (props, styles)=>styles.avatar
})({
    display: 'flex',
    flex: '0 0 auto',
    marginRight: 16
});
const CardHeaderAction = (0,styled/* default */.Ay)('div', {
    name: 'MuiCardHeader',
    slot: 'Action',
    overridesResolver: (props, styles)=>styles.action
})({
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    marginTop: -4,
    marginRight: -8,
    marginBottom: -4
});
const CardHeaderContent = (0,styled/* default */.Ay)('div', {
    name: 'MuiCardHeader',
    slot: 'Content',
    overridesResolver: (props, styles)=>styles.content
})({
    flex: '1 1 auto',
    [".".concat(typographyClasses/* default */.A.root, ":where(& .").concat(CardHeader_cardHeaderClasses.title, ")")]: {
        display: 'block'
    },
    [".".concat(typographyClasses/* default */.A.root, ":where(& .").concat(CardHeader_cardHeaderClasses.subheader, ")")]: {
        display: 'block'
    }
});
const CardHeader = /*#__PURE__*/ react.forwardRef(function CardHeader(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiCardHeader'
    });
    const { action, avatar, component = 'div', disableTypography = false, subheader: subheaderProp, subheaderTypographyProps, title: titleProp, titleTypographyProps, slots = {}, slotProps = {}, ...other } = props;
    const ownerState = {
        ...props,
        component,
        disableTypography
    };
    const classes = useUtilityClasses(ownerState);
    const externalForwardedProps = {
        slots,
        slotProps: {
            title: titleTypographyProps,
            subheader: subheaderTypographyProps,
            ...slotProps
        }
    };
    let title = titleProp;
    const [TitleSlot, titleSlotProps] = (0,useSlot/* default */.A)('title', {
        className: classes.title,
        elementType: Typography/* default */.A,
        externalForwardedProps,
        ownerState,
        additionalProps: {
            variant: avatar ? 'body2' : 'h5',
            component: 'span'
        }
    });
    if (title != null && title.type !== Typography/* default */.A && !disableTypography) {
        title = /*#__PURE__*/ (0,jsx_runtime.jsx)(TitleSlot, {
            ...titleSlotProps,
            children: title
        });
    }
    let subheader = subheaderProp;
    const [SubheaderSlot, subheaderSlotProps] = (0,useSlot/* default */.A)('subheader', {
        className: classes.subheader,
        elementType: Typography/* default */.A,
        externalForwardedProps,
        ownerState,
        additionalProps: {
            variant: avatar ? 'body2' : 'body1',
            color: 'textSecondary',
            component: 'span'
        }
    });
    if (subheader != null && subheader.type !== Typography/* default */.A && !disableTypography) {
        subheader = /*#__PURE__*/ (0,jsx_runtime.jsx)(SubheaderSlot, {
            ...subheaderSlotProps,
            children: subheader
        });
    }
    const [RootSlot, rootSlotProps] = (0,useSlot/* default */.A)('root', {
        ref,
        className: classes.root,
        elementType: CardHeaderRoot,
        externalForwardedProps: {
            ...externalForwardedProps,
            ...other,
            component
        },
        ownerState
    });
    const [AvatarSlot, avatarSlotProps] = (0,useSlot/* default */.A)('avatar', {
        className: classes.avatar,
        elementType: CardHeaderAvatar,
        externalForwardedProps,
        ownerState
    });
    const [ContentSlot, contentSlotProps] = (0,useSlot/* default */.A)('content', {
        className: classes.content,
        elementType: CardHeaderContent,
        externalForwardedProps,
        ownerState
    });
    const [ActionSlot, actionSlotProps] = (0,useSlot/* default */.A)('action', {
        className: classes.action,
        elementType: CardHeaderAction,
        externalForwardedProps,
        ownerState
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(RootSlot, {
        ...rootSlotProps,
        children: [
            avatar && /*#__PURE__*/ (0,jsx_runtime.jsx)(AvatarSlot, {
                ...avatarSlotProps,
                children: avatar
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentSlot, {
                ...contentSlotProps,
                children: [
                    title,
                    subheader
                ]
            }),
            action && /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionSlot, {
                ...actionSlotProps,
                children: action
            })
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const CardHeader_CardHeader = (CardHeader);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(65371);
;// ./src/pages/intro/index.tsx



function Content() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            p: 2,
            color: "#333"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h5",
                component: "h2",
                gutterBottom: true,
                sx: {
                    fontWeight: "bold"
                },
                children: "功能"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "body1",
                paragraph: true,
                children: "功能是呼救，能够向所有的紧急联系人发送短信、拨打电话、共享实时位置、拨打音视频电话。同时能够联动120和100，直接请他们进入音视频会议，参与救援。录制现场音视频，保存第一手资料。"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "body2",
                paragraph: true,
                sx: {
                    background: "#FAFAFA",
                    p: 2
                },
                children: "实际使用中接收方在进入音视频会议时默认是不发送自己音视频的，一方面需要节约呼救方的带宽，一方面如果是安全报警也会惊动歹徒，所以需要接收方手动才能发送自己的音视频。现在进入音视频会议会显示多方的音视频是因为还没处理完这块功能的逻辑。"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.A, {
                sx: {
                    mt: 3
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader_CardHeader, {
                        title: "摔倒呼救",
                        sx: {
                            backgroundColor: "#f5f5f5"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                sx: {
                                    mb: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: "使用场景："
                                    }),
                                    "当发生意外时，例如突然摔倒或者遇到碰撞。"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: "适用人群："
                                    }),
                                    "老年人、摩托车手等。"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.A, {
                sx: {
                    mt: 3
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader_CardHeader, {
                        title: "医疗呼救",
                        sx: {
                            backgroundColor: "#f5f5f5"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                sx: {
                                    mb: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: "使用场景："
                                    }),
                                    "在人还清醒，但是气力不多"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: "适用人群："
                                    }),
                                    "生病，在恢复期等。"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.A, {
                sx: {
                    mt: 3
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader_CardHeader, {
                        title: "安全呼救",
                        sx: {
                            backgroundColor: "#f5f5f5"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                sx: {
                                    mb: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: "使用场景："
                                    }),
                                    "被人尾随、挟持、潜在威胁"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "body2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: "适用人群："
                                    }),
                                    "单身出差、陪客户等。"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function IntroPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: "产品介绍",
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {})
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [5299,9893,7383,636,6593,8792], () => (__webpack_exec__(4132)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=intro-71b117b6ffacc60f.js.map