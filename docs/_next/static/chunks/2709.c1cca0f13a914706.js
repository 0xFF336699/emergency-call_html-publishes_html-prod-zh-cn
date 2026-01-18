"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2709],{

/***/ 32709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initProjectSystem: () => (/* binding */ initProjectSystem)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75308);

// 项目管理相关的导入
let appPackagesStoreV2;
let projectStoreV2;
let projectEventUtilsV2;
let initProjectSystemV2;
const fileLog = new _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .Log */ .tG(false, 'AppControllerProjectExt_f');
fileLog.pause = true;
fileLog.childrenPaused = true;
/**
 * 项目管理功能初始化（只有需要项目管理功能的应用调用）
 * 包括：项目包管理、项目存储、项目事件等
 */ async function initProjectSystem() {
    fileLog.log('[initProjectSystem] 开始初始化项目管理功能');
    // 动态导入项目管理相关的模块
    if (!appPackagesStoreV2) {
        const appStaticModule = await __webpack_require__.e(/* import() */ 95).then(__webpack_require__.bind(__webpack_require__, 95));
        appPackagesStoreV2 = appStaticModule.appPackagesStoreV2;
    }
    if (!projectStoreV2 || !projectEventUtilsV2) {
        const projectV2InterfaceModule = await Promise.all(/* import() */[__webpack_require__.e(9050), __webpack_require__.e(8143), __webpack_require__.e(9236)]).then(__webpack_require__.bind(__webpack_require__, 59236));
        projectStoreV2 = projectV2InterfaceModule.projectStore;
        projectEventUtilsV2 = projectV2InterfaceModule.projectEventUtils;
    }
    if (!initProjectSystemV2) {
        const projectV2ExtModule = await Promise.all(/* import() */[__webpack_require__.e(5409), __webpack_require__.e(9050), __webpack_require__.e(4031), __webpack_require__.e(8143), __webpack_require__.e(9236), __webpack_require__.e(9533)]).then(__webpack_require__.bind(__webpack_require__, 89533));
        initProjectSystemV2 = projectV2ExtModule.initProjectSystem;
    }
    await appPackagesStoreV2.init();
    fileLog.log('[initProjectSystem] appPackagesStoreV2.init() 调用完成');
    projectEventUtilsV2.init();
    projectStoreV2.init();
    initProjectSystemV2();
    // 不阻塞的项目管理器初始化
    initDependOnRemoteProject();
    fileLog.log('[initProjectSystem] 项目管理功能初始化完成');
}
/**
 * 项目管理功能的远程依赖初始化
 */ async function initDependOnRemoteProject() {
    // 使用动态导入避免循环依赖
    try {
        const { projectManager } = await Promise.all(/* import() */[__webpack_require__.e(5409), __webpack_require__.e(9050), __webpack_require__.e(4031), __webpack_require__.e(8143), __webpack_require__.e(9236), __webpack_require__.e(9533), __webpack_require__.e(6639)]).then(__webpack_require__.bind(__webpack_require__, 56639));
        await projectManager.init();
    } catch (error) {
        fileLog.log('[initDependOnRemoteProject] 动态导入 projectManager 失败:', error);
    }
}


/***/ })

}]);
//# sourceMappingURL=2709.c1cca0f13a914706.js.map