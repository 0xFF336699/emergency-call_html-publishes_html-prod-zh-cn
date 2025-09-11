"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3259],{

/***/ 93259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ MeetingRoom)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/livekit-client@2.15.2_@types+dom-mediacapture-record@1.0.22/node_modules/livekit-client/dist/livekit-client.esm.mjs
var livekit_client_esm = __webpack_require__(89596);
;// ../../libs/im/livekit/src/livekit-meeting/trackUtils.ts

const createLocalTracksSafely = async (options)=>{
    const { initialAudioEnabled, initialVideoEnabled, audioConfig = {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true
    }, videoConfig = {
        width: 1280,
        height: 720,
        frameRate: 24
    } } = options;
    console.log('开始安全创建本地轨道 - audio:', initialAudioEnabled, 'video:', initialVideoEnabled);
    try {
        const results = await Promise.allSettled([
            // 音频轨道创建
            initialAudioEnabled ? (0,livekit_client_esm/* createLocalAudioTrack */.rV)(audioConfig) : Promise.resolve(null),
            // 视频轨道创建  
            initialVideoEnabled ? (0,livekit_client_esm/* createLocalVideoTrack */.yn)({
                resolution: videoConfig
            }) : Promise.resolve(null)
        ]);
        const audioTrack = results[0].status === 'fulfilled' ? results[0].value : null;
        const videoTrack = results[1].status === 'fulfilled' ? results[1].value : null;
        // 记录轨道创建结果
        if (initialAudioEnabled) {
            if (results[0].status === 'rejected') {
                console.error('音频轨道创建失败:', results[0].reason);
                console.warn('音频设备不可用，会议将以静音模式继续');
            } else {
                console.log('音频轨道创建成功');
            }
        }
        if (initialVideoEnabled) {
            if (results[1].status === 'rejected') {
                console.error('视频轨道创建失败:', results[1].reason);
                console.warn('视频设备不可用，会议将以音频模式继续');
            } else {
                console.log('视频轨道创建成功');
            }
        }
        // 至少要有一个轨道成功，否则抛出错误
        if (!audioTrack && !videoTrack && (initialAudioEnabled || initialVideoEnabled)) {
            throw new Error('无法创建任何媒体轨道，请检查设备权限和可用性');
        }
        return {
            audioTrack,
            videoTrack
        };
    } catch (error) {
        console.error('创建本地轨道完全失败:', error);
        throw error;
    }
};
/**
 * 安全发布轨道到房间
 */ const publishTracksSafely = async (room, audioTrack, videoTrack)=>{
    const publishPromises = [];
    if (audioTrack) {
        publishPromises.push(room.localParticipant.publishTrack(audioTrack));
        console.log('发布音频轨道');
    }
    if (videoTrack) {
        publishPromises.push(room.localParticipant.publishTrack(videoTrack));
        console.log('发布视频轨道');
    }
    if (publishPromises.length > 0) {
        await Promise.all(publishPromises);
        console.log('轨道发布完成');
    } else {
        console.warn('没有轨道需要发布');
    }
};
/**
 * 安全设置轨道初始状态
 */ const setInitialTrackStates = async (audioTrack, videoTrack, initialAudioEnabled, initialVideoEnabled)=>{
    if (audioTrack && !initialAudioEnabled) {
        await audioTrack.mute();
        console.log('音频轨道已静音');
    }
    if (videoTrack && !initialVideoEnabled) {
        await videoTrack.mute();
        console.log('视频轨道已关闭');
    }
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 5 modules
var Alert = __webpack_require__(85629);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(87924);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(61541);
;// ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/VolumeUp.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const VolumeUp = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M3 9v6h4l5 5V4L7 9zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77"
}), 'VolumeUp'));

;// ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/VolumeOff.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const VolumeOff = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63m2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71M4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9zM12 4 9.91 6.09 12 8.18z"
}), 'VolumeOff'));

;// ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/Visibility.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Visibility = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
}), 'Visibility'));

;// ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/VisibilityOff.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const VisibilityOff = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
}), 'VisibilityOff'));

;// ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/MicOff.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const MicOff = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28m-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18zM4.27 3 3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73z"
}), 'MicOff'));

;// ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/Mic.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Mic = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72z"
}), 'Mic'));

;// ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/Videocam.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Videocam = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11z"
}), 'Videocam'));

;// ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/VideocamOff.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const VideocamOff = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "m21 6.5-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18zM3.27 2 2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73z"
}), 'VideocamOff'));

;// ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/CallEnd.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const CallEnd = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7s.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71s-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9"
}), 'CallEnd'));

;// ../../node_modules/.pnpm/@mui+icons-material@7.2.0_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_rea_ajjais66od7kee7mo6ans43why/node_modules/@mui/icons-material/esm/Refresh.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Refresh = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
}), 'Refresh'));

// EXTERNAL MODULE: ../../libs/fanfanlo/src/log/Log.ts + 20 modules
var Log = __webpack_require__(41031);
;// ../../libs/im/livekit/src/livekit-meeting/MeetingRoom.tsx








// 日志记录器
const logger = new Log/* Log */.tG(false, 'livekit-meeting.MeetingRoom');
const uiLogger = logger.sub(false, 'MeetingRoom_ui');
// 视频预设
const VIDEO_PRESET = {
    width: 1280,
    height: 720,
    // @ts-ignore - frameRate is used by LiveKit internally
    frameRate: 24,
    maxBitrate: 3000 * 1000
};
// 类型定义已移至 meetint-room.intf.ts
// function getTokenEndpoint(): string {
//     if (!mainModel.appConfig?.livekit?.jwt) {
//         throw new Error('LiveKit JWT endpoint is not configured');
//     }
//     return `${mainModel.appConfig.livekit.jwt}/token`;
// }
// 主组件实现
function MeetingRoomComponent(param, ref) {
    let { livekitConfig, roomName, userName, role = 'initiator', onDisconnect, onError, className = '', style, sx, directly = false, initialVideoEnabled = true, initialAudioEnabled = true } = param;
    // 全局音视频控制状态
    const [globalMediaState, setGlobalMediaState] = (0,react.useState)({
        isAudioEnabled: initialAudioEnabled,
        isVideoEnabled: initialVideoEnabled
    });
    // Refs
    const roomRef = (0,react.useRef)(null);
    const localTracksRef = (0,react.useRef)([]);
    const videoElements = (0,react.useRef)({});
    const audioElements = (0,react.useRef)({});
    const [participantStates, setParticipantStates] = (0,react.useState)({});
    const isUnmountedRef = (0,react.useRef)(false);
    // State
    const [isConnecting, setIsConnecting] = (0,react.useState)(false);
    const [hasConnected, setHasConnected] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    const [isMuted, setIsMuted] = (0,react.useState)(!initialAudioEnabled);
    const [isVideoEnabled, setIsVideoEnabled] = (0,react.useState)(initialVideoEnabled);
    const [participants, setParticipants] = (0,react.useState)([]);
    // 获取 token
    const fetchToken = (0,react.useCallback)(async (roomName, identity)=>{
        try {
            const response = await fetch("".concat(livekitConfig.jwt, "/token"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    room_name: roomName,
                    identity
                })
            });
            if (!response.ok) {
                throw new Error('获取 token 失败');
            }
            const data = await response.json();
            return data.token;
        } catch (error) {
            uiLogger.error('获取 token 失败:', error);
            throw error;
        }
    }, []);
    // 连接到房间
    const connectToRoom = (0,react.useCallback)(async ()=>{
        if (isConnecting || hasConnected) return;
        setIsConnecting(true);
        setError(null);
        try {
            // 1. 获取 token
            const token = await fetchToken(roomName, userName);
            uiLogger.log('token:', token);
            // 2. 创建本地轨道
            const { audioTrack, videoTrack } = await createLocalTracks();
            localTracksRef.current = [
                audioTrack,
                videoTrack
            ].filter((track)=>track !== null);
            uiLogger.log('audioTrack:', audioTrack);
            uiLogger.log('videoTrack:', videoTrack);
            // 3. 创建房间连接
            const room = new livekit_client_esm/* Room */.Wv({
                adaptiveStream: true,
                dynacast: true,
                videoCaptureDefaults: {
                    resolution: VIDEO_PRESET
                },
                // @ts-ignore - publishDefaults is a valid option
                publishDefaults: {
                    dtx: true,
                    red: true,
                    forceStereo: false,
                    simulcast: true
                }
            });
            uiLogger.log('room:', room);
            // 4. 设置事件监听
            setupRoomListeners(room);
            // 5. 连接到房间
            await room.connect(livekitConfig.wsUrl, token, {
                autoSubscribe: true
            });
            uiLogger.log('room connected');
            // 6. 安全发布轨道
            try {
                await publishTracksSafely(room, audioTrack, videoTrack);
                // 7. 安全设置轨道初始状态
                await setInitialTrackStates(audioTrack, videoTrack, initialAudioEnabled, initialVideoEnabled);
            } catch (publishError) {
                uiLogger.error('发布轨道失败:', publishError);
            // 即使发布失败也继续，因为可能已经有其他参与者发布了相同的轨道
            }
            // 8. 更新引用和状态
            roomRef.current = room;
            setHasConnected(true);
            // 9. 添加现有远程参与者到状态
            const remoteParticipants = Array.from(room.remoteParticipants.values());
            setParticipants(remoteParticipants);
            // 10. 更新本地参与者状态
            updateParticipantState(room.localParticipant.identity, {
                isAudioEnabled: initialAudioEnabled,
                isVideoEnabled: initialVideoEnabled,
                audioTrack,
                videoTrack
            });
            // 10. 为现有远程参与者设置轨道
            remoteParticipants.forEach((participant)=>{
                // 初始化远程参与者状态
                initParticipantState(participant);
                uiLogger.log('已初始化远程参与者状态:', participant.identity);
                // 使用 getTrackPublications 获取所有轨道发布
                participant.getTrackPublications().forEach((publication)=>{
                    if (publication.track && publication.track instanceof livekit_client_esm/* RemoteTrack */.O9) {
                        handleTrackSubscribed(publication.track, publication, participant);
                    }
                });
            });
            // 初始化本地参与者状态
            if (room.localParticipant) {
                initParticipantState(room.localParticipant);
                uiLogger.log('已初始化本地参与者状态:', room.localParticipant.identity);
            }
            uiLogger.log('成功加入会议');
        } catch (error) {
            uiLogger.error('连接房间失败啦:', error);
            setError('加入会议失败，请检查网络和权限设置');
            // 发生错误时清理资源
            cleanupTracks(localTracksRef.current);
            localTracksRef.current = [];
            if (roomRef.current) {
                try {
                    await roomRef.current.disconnect();
                } catch (e) {
                    uiLogger.error('断开连接时出错:', e);
                }
                roomRef.current = null;
            }
        } finally{
            setIsConnecting(false);
        }
    }, [
        roomName,
        userName,
        isConnecting,
        hasConnected,
        fetchToken,
        initialAudioEnabled,
        initialVideoEnabled
    ]);
    // 创建本地音视频轨道 - 使用安全创建工具
    const createLocalTracks = (0,react.useCallback)(async ()=>{
        return await createLocalTracksSafely({
            initialAudioEnabled,
            initialVideoEnabled
        });
    }, [
        initialAudioEnabled,
        initialVideoEnabled
    ]);
    // 清理轨道
    const cleanupTracks = (0,react.useCallback)((tracks)=>{
        tracks.forEach((track)=>{
            track.stop();
            track.detach();
        });
    }, []);
    // 跟踪已处理的轨道元素
    const trackElementsRef = (0,react.useRef)({});
    const videoElementsRef = (0,react.useRef)({});
    const audioElementsRef = (0,react.useRef)({});
    // 更新参与者状态
    const updateParticipantState = (0,react.useCallback)((identity, state)=>{
        setParticipantStates((prev)=>({
                ...prev,
                [identity]: {
                    ...prev[identity] || {
                        isAudioEnabled: true,
                        isVideoEnabled: true,
                        isAudioEnabledGlobal: true,
                        isVideoEnabledGlobal: true
                    },
                    ...state
                }
            }));
    }, []);
    // 处理轨道订阅
    const handleTrackSubscribed = (0,react.useCallback)((track, publication, participant)=>{
        if (!track) return ()=>{};
        const { identity } = participant;
        const isVideoTrack = track.kind === livekit_client_esm/* Track */.CC.Kind.Video;
        uiLogger.log("处理 ".concat(track.kind, " 轨道订阅:"), identity, track);
        // 更新轨道状态的函数
        const updateTrackState = ()=>{
            const isMuted = track.isMuted;
            const stateUpdate = {};
            if (track.kind === livekit_client_esm/* Track */.CC.Kind.Audio) {
                stateUpdate.isAudioEnabled = !isMuted;
            } else if (track.kind === livekit_client_esm/* Track */.CC.Kind.Video) {
                stateUpdate.isVideoEnabled = !isMuted;
            }
            updateParticipantState(identity, stateUpdate);
            // 强制触发重新渲染以确保 ParticipantVideo 组件更新
            if (isVideoTrack) {
                setParticipants((prev)=>[
                        ...prev
                    ]);
            }
        };
        // 监听轨道静音/取消静音事件
        track.on('muted', updateTrackState);
        track.on('unmuted', updateTrackState);
        // 初始状态更新
        updateTrackState();
        // 强制更新参与者列表以触发重新渲染
        // 这确保了即使没有状态变化，组件也会检查新的轨道
        setParticipants((prev)=>{
            const participantExists = prev.some((p)=>p.identity === identity);
            if (!participantExists) {
                return [
                    ...prev,
                    participant
                ];
            }
            return [
                ...prev
            ];
        });
        // 清理函数
        return ()=>{
            track.off('muted', updateTrackState);
            track.off('unmuted', updateTrackState);
        };
    }, [
        updateParticipantState
    ]);
    // 设置房间事件监听
    const setupRoomListeners = (0,react.useCallback)((room)=>{
        const eventHandlers = {
            // 处理远程参与者连接
            participantConnected: (participant)=>{
                if (!(participant instanceof livekit_client_esm/* RemoteParticipant */.qI)) return;
                uiLogger.log('远程参与者已连接:', participant.identity);
                // 添加新参与者到状态（使用函数式更新确保不重复添加）
                setParticipants((prev)=>{
                    // 如果已经存在该参与者，则返回原数组
                    if (prev.some((p)=>p.identity === participant.identity)) {
                        return prev;
                    }
                    return [
                        ...prev,
                        participant
                    ];
                });
                // 监听参与者的轨道发布
                const handleTrackPublished = (publication)=>{
                    uiLogger.log('远程参与者发布轨道:', publication.kind, participant.identity);
                    if (publication.track) {
                        handleTrackSubscribed(publication.track, publication, participant);
                    } else {
                        publication.once('subscribed', (track)=>{
                            handleTrackSubscribed(track, publication, participant);
                        });
                    }
                };
                // 添加轨道发布监听
                participant.on('trackPublished', handleTrackPublished);
                // 处理已经发布的轨道
                participant.trackPublications.forEach((publication)=>{
                    if (publication.track) {
                        handleTrackSubscribed(publication.track, publication, participant);
                    }
                });
                // 返回清理函数
                return ()=>{
                    participant.off('trackPublished', handleTrackPublished);
                };
            },
            // 处理参与者断开连接
            participantDisconnected: (participant)=>{
                uiLogger.log('远程参与者已断开连接:', participant.identity);
                setParticipants((prev)=>{
                    const newParticipants = prev.filter((p)=>p.identity !== participant.identity);
                    uiLogger.log('更新后的参与者列表:', newParticipants.map((p)=>p.identity));
                    return newParticipants;
                });
            },
            // 处理轨道订阅
            trackSubscribed: (track, publication, participant)=>{
                if (!track) return;
                uiLogger.log('轨道订阅成功:', track.kind, participant.identity);
                // 处理远程轨道订阅
                handleTrackSubscribed(track, publication, participant);
            },
            disconnected: (reason)=>{
                var _reason_toString;
                const reasonStr = (reason === null || reason === void 0 ? void 0 : (_reason_toString = reason.toString) === null || _reason_toString === void 0 ? void 0 : _reason_toString.call(reason)) || '未知原因';
                uiLogger.log('已从房间断开连接，原因:', reasonStr);
                // 更新状态但不调用 handleDisconnect，因为可能是我们主动断开的
                setHasConnected(false);
                setParticipants([]);
                setError(null);
            },
            reconnecting: ()=>{
                uiLogger.log('正在重新连接到房间...');
                setError('正在重新连接...');
            },
            reconnected: ()=>{
                uiLogger.log('已重新连接到房间');
                setError(null);
            }
        };
        // 添加事件监听
        room.on(livekit_client_esm/* RoomEvent */.u9.Disconnected, eventHandlers.disconnected).on(livekit_client_esm/* RoomEvent */.u9.Reconnecting, eventHandlers.reconnecting).on(livekit_client_esm/* RoomEvent */.u9.Reconnected, eventHandlers.reconnected).on(livekit_client_esm/* RoomEvent */.u9.ParticipantConnected, eventHandlers.participantConnected).on(livekit_client_esm/* RoomEvent */.u9.ParticipantDisconnected, eventHandlers.participantDisconnected).on(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, eventHandlers.trackSubscribed);
        // 返回清理函数
        return ()=>{
            if (!room) return;
            room.off(livekit_client_esm/* RoomEvent */.u9.Disconnected, eventHandlers.disconnected).off(livekit_client_esm/* RoomEvent */.u9.Reconnecting, eventHandlers.reconnecting).off(livekit_client_esm/* RoomEvent */.u9.Reconnected, eventHandlers.reconnected).off(livekit_client_esm/* RoomEvent */.u9.ParticipantConnected, eventHandlers.participantConnected).off(livekit_client_esm/* RoomEvent */.u9.ParticipantDisconnected, eventHandlers.participantDisconnected).off(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, eventHandlers.trackSubscribed);
            // 确保返回 void
            return undefined;
        };
    }, [
        handleTrackSubscribed
    ]);
    // 离开会议
    const leaveMeeting = (0,react.useCallback)(async ()=>{
        uiLogger.log('正在离开会议...');
        try {
            // 停止所有本地轨道
            cleanupTracks(localTracksRef.current);
            // 断开房间连接
            if (roomRef.current) {
                await roomRef.current.disconnect();
                roomRef.current = null;
            }
            // 更新状态
            setHasConnected(false);
            setParticipants([]);
            setError(null);
            // 清除所有媒体元素
            Object.values(videoElements.current).forEach((el)=>el && el.remove());
            Object.values(audioElements.current).forEach((el)=>el && el.remove());
            videoElements.current = {};
            audioElements.current = {};
            // 调用断开连接回调
            if (onDisconnect) {
                onDisconnect();
            }
            uiLogger.log('已成功离开会议');
        } catch (error) {
            uiLogger.error('离开会议时出错:', error);
            setError('离开会议时出错，请重试');
        }
    }, [
        onDisconnect
    ]);
    // 清理函数
    const cleanup = (0,react.useCallback)(async function() {
        let isUnmounting = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        // 如果是组件卸载，设置卸载标志
        if (isUnmounting) {
            isUnmountedRef.current = true;
        }
        uiLogger.log('执行清理...');
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const audioTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Audio);
        const videoTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Video);
        try {
            if (audioTrack) {
                await audioTrack.stop();
            }
            if (videoTrack) {
                await videoTrack.stop();
            }
        } catch (error) {
            uiLogger.error('停止轨道失败:', error);
        }
        // 清理轨道
        cleanupTracks(localTracksRef.current);
        localTracksRef.current = [];
        // 清理房间
        if (roomRef.current) {
            roomRef.current.disconnect();
            roomRef.current = null;
        }
        // 清理状态
        setHasConnected(false);
        setParticipants([]);
        setParticipantStates({});
    }, []);
    // 更新全局媒体状态
    const updateGlobalMediaState = (0,react.useCallback)((audioEnabled, videoEnabled)=>{
        setGlobalMediaState((prev)=>({
                ...prev,
                isAudioEnabled: audioEnabled,
                isVideoEnabled: videoEnabled
            }));
    }, []);
    // 切换静音状态（全局控制）
    const toggleMute = (0,react.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const audioTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Audio);
        if (!audioTrack) return;
        try {
            // 全局按钮基于全局状态进行切换
            const newGlobalAudioState = !globalMediaState.isAudioEnabled;
            // 同步更新本地麦克风的物理状态
            if (newGlobalAudioState) {
                await audioTrack.unmute();
            } else {
                await audioTrack.mute();
            }
            // 更新本地UI状态
            setIsMuted(!newGlobalAudioState);
            updateParticipantState(localParticipant.identity, {
                isAudioEnabled: newGlobalAudioState
            });
            // 更新全局音频状态，这将影响所有参与者的有效状态
            updateGlobalMediaState(newGlobalAudioState, globalMediaState.isVideoEnabled);
        } catch (error) {
            uiLogger.error('切换静音状态失败:', error);
            setError('切换麦克风状态失败');
        }
    }, [
        globalMediaState,
        updateParticipantState,
        updateGlobalMediaState
    ]);
    // 切换视频状态（全局控制）
    const toggleVideo = (0,react.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const videoTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Video);
        if (!videoTrack) return;
        try {
            // 全局按钮基于全局状态进行切换
            const newGlobalVideoState = !globalMediaState.isVideoEnabled;
            // 同步更新本地摄像头的物理状态
            if (newGlobalVideoState) {
                await videoTrack.unmute();
            } else {
                await videoTrack.mute();
            }
            // 更新本地UI状态
            setIsVideoEnabled(newGlobalVideoState);
            updateParticipantState(localParticipant.identity, {
                isVideoEnabled: newGlobalVideoState
            });
            // 更新全局视频状态，这将影响所有参与者的有效状态
            updateGlobalMediaState(globalMediaState.isAudioEnabled, newGlobalVideoState);
        } catch (error) {
            uiLogger.error('切换视频状态失败:', error);
            setError('切换摄像头状态失败');
        }
    }, [
        globalMediaState,
        updateParticipantState,
        updateGlobalMediaState
    ]);
    // 切换本地静音状态（仅本地tile）
    const handleLocalMuteToggle = (0,react.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const audioTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Audio);
        if (!audioTrack) return;
        try {
            const newMutedState = !isMuted;
            if (newMutedState) {
                await audioTrack.mute();
            } else {
                await audioTrack.unmute();
            }
            setIsMuted(newMutedState);
            updateParticipantState(localParticipant.identity, {
                isAudioEnabled: !newMutedState
            });
        } catch (error) {
            uiLogger.error('切换本地静音状态失败:', error);
            setError('切换麦克风状态失败');
        }
    }, [
        isMuted,
        updateParticipantState
    ]);
    // 切换本地视频状态（仅本地tile）
    const handleLocalVideoToggle = (0,react.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const videoTrack = localTracksRef.current.find((t)=>t.kind === livekit_client_esm/* Track */.CC.Kind.Video);
        if (!videoTrack) return;
        try {
            const newVideoState = !isVideoEnabled;
            if (newVideoState) {
                await videoTrack.unmute();
            } else {
                await videoTrack.mute();
            }
            setIsVideoEnabled(newVideoState);
            updateParticipantState(localParticipant.identity, {
                isVideoEnabled: newVideoState
            });
        } catch (error) {
            uiLogger.error('切换本地视频状态失败:', error);
            setError('切换摄像头状态失败');
        }
    }, [
        isVideoEnabled,
        updateParticipantState
    ]);
    // 组件卸载时清理资源
    (0,react.useEffect)(()=>{
        return ()=>{
            // 清理资源
            cleanup(true);
        };
    }, []);
    // 获取参与者状态
    const getParticipantState = (0,react.useCallback)((identity)=>{
        return participantStates[identity] || {
            isAudioEnabled: true,
            isVideoEnabled: true,
            isAudioEnabledGlobal: true,
            isVideoEnabledGlobal: true
        };
    }, [
        participantStates
    ]);
    // 初始化参与者状态
    const initParticipantState = (0,react.useCallback)((participant)=>{
        var _participant_getTrackPublications_find, _participant_getTrackPublications_find1;
        const state = getParticipantState(participant.identity);
        // 更新音频状态
        const audioTrack = (_participant_getTrackPublications_find = participant.getTrackPublications().find((pub)=>pub.kind === livekit_client_esm/* Track */.CC.Kind.Audio)) === null || _participant_getTrackPublications_find === void 0 ? void 0 : _participant_getTrackPublications_find.track;
        // 更新视频状态
        const videoTrack = (_participant_getTrackPublications_find1 = participant.getTrackPublications().find((pub)=>pub.kind === livekit_client_esm/* Track */.CC.Kind.Video)) === null || _participant_getTrackPublications_find1 === void 0 ? void 0 : _participant_getTrackPublications_find1.track;
        updateParticipantState(participant.identity, {
            ...state,
            isAudioEnabled: audioTrack ? !audioTrack.isMuted : false,
            isVideoEnabled: videoTrack ? !videoTrack.isMuted : false
        });
    }, [
        getParticipantState,
        updateParticipantState
    ]);
    // 切换参与者的音频状态
    const handleToggleAudio = (0,react.useCallback)((participant)=>{
        const currentState = participantStates[participant.identity] || {
            isAudioEnabled: true,
            isVideoEnabled: true,
            isAudioEnabledGlobal: true,
            isVideoEnabledGlobal: true
        };
        updateParticipantState(participant.identity, {
            ...currentState,
            isAudioEnabled: !currentState.isAudioEnabled
        });
    }, [
        participantStates,
        updateParticipantState
    ]);
    // 切换参与者的视频状态
    const handleToggleVideo = (0,react.useCallback)((participant)=>{
        const currentState = participantStates[participant.identity] || {
            isAudioEnabled: true,
            isVideoEnabled: true,
            isAudioEnabledGlobal: true,
            isVideoEnabledGlobal: true
        };
        updateParticipantState(participant.identity, {
            ...currentState,
            isVideoEnabled: !currentState.isVideoEnabled
        });
    }, [
        participantStates,
        updateParticipantState
    ]);
    // 获取参与者的实际媒体状态（考虑全局覆盖）
    const getEffectiveMediaState = (0,react.useCallback)((participantId)=>{
        const state = participantStates[participantId];
        if (!state) return {
            isAudioEnabled: true,
            isVideoEnabled: true
        };
        return {
            isAudioEnabled: globalMediaState.isAudioEnabled ? state.isAudioEnabled : false,
            isVideoEnabled: globalMediaState.isVideoEnabled ? state.isVideoEnabled : false
        };
    }, [
        globalMediaState,
        participantStates
    ]);
    // 参与者视频组件
    const ParticipantVideo = /*#__PURE__*/ react.memo((param)=>{
        let { participant, isLocal, isVideoEnabled } = param;
        const videoRef = (0,react.useRef)(null);
        const [videoTrack, setVideoTrack] = (0,react.useState)(null);
        // 处理视频轨道变化
        (0,react.useEffect)(()=>{
            if (!participant) return;
            // 查找现有的视频轨道发布
            const videoPublication = Array.from(participant.trackPublications.values()).find((pub)=>pub.kind === livekit_client_esm/* Track */.CC.Kind.Video);
            // 如果轨道已存在，则直接设置
            if (videoPublication && videoPublication.track) {
                setVideoTrack(videoPublication.track);
            }
            // 当订阅轨道时处理
            const handleTrackSubscribed = (track)=>{
                if (track.kind === livekit_client_esm/* Track */.CC.Kind.Video) {
                    setVideoTrack(track);
                }
            };
            // 当取消订阅轨道时处理
            const handleTrackUnsubscribed = (track)=>{
                if (track.kind === livekit_client_esm/* Track */.CC.Kind.Video) {
                    setVideoTrack(null);
                }
            };
            // 添加事件监听
            participant.on(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, handleTrackSubscribed);
            participant.on(livekit_client_esm/* RoomEvent */.u9.TrackUnsubscribed, handleTrackUnsubscribed);
            // 清理函数
            return ()=>{
                participant.off(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, handleTrackSubscribed);
                participant.off(livekit_client_esm/* RoomEvent */.u9.TrackUnsubscribed, handleTrackUnsubscribed);
            };
        }, [
            participant
        ]);
        // 处理视频元素附加/分离
        (0,react.useEffect)(()=>{
            const videoElement = videoRef.current;
            if (!videoElement || !videoTrack) return;
            // 清理现有视频源
            while(videoElement.firstChild){
                videoElement.removeChild(videoElement.firstChild);
            }
            // 附加视频轨道
            if (isVideoEnabled) {
                videoTrack.attach(videoElement);
            }
            return ()=>{
                if (videoTrack) {
                    videoTrack.detach(videoElement);
                }
            };
        }, [
            videoTrack,
            isVideoEnabled
        ]);
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                width: '100%',
                aspectRatio: '16/9',
                bgcolor: 'grey.800',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("video", {
                    ref: videoRef,
                    autoPlay: true,
                    playsInline: true,
                    muted: isLocal,
                    style: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: isVideoEnabled ? 'block' : 'none'
                    }
                }),
                !isVideoEnabled && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'grey.900'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontSize: 32,
                            fontWeight: 'bold'
                        },
                        children: participant.identity.charAt(0).toUpperCase()
                    })
                })
            ]
        });
    });
    // 参与者音频组件
    const ParticipantAudio = /*#__PURE__*/ react.memo((param)=>{
        let { participant, isMuted } = param;
        const audioRef = (0,react.useRef)(null);
        const [audioTrack, setAudioTrack] = (0,react.useState)(null);
        (0,react.useEffect)(()=>{
            if (!participant) return;
            const handleTrackSubscribed = (track)=>{
                if (track.kind === livekit_client_esm/* Track */.CC.Kind.Audio) {
                    setAudioTrack(track);
                }
            };
            const handleTrackUnsubscribed = (track)=>{
                if (track.kind === livekit_client_esm/* Track */.CC.Kind.Audio) {
                    setAudioTrack(null);
                }
            };
            // 查找现有的音频轨道
            const audioPublication = Array.from(participant.trackPublications.values()).find((pub)=>pub.kind === livekit_client_esm/* Track */.CC.Kind.Audio);
            if (audioPublication && audioPublication.track) {
                setAudioTrack(audioPublication.track);
            }
            participant.on(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, handleTrackSubscribed);
            participant.on(livekit_client_esm/* RoomEvent */.u9.TrackUnsubscribed, handleTrackUnsubscribed);
            return ()=>{
                participant.off(livekit_client_esm/* RoomEvent */.u9.TrackSubscribed, handleTrackSubscribed);
                participant.off(livekit_client_esm/* RoomEvent */.u9.TrackUnsubscribed, handleTrackUnsubscribed);
            };
        }, [
            participant
        ]);
        (0,react.useEffect)(()=>{
            const audioElement = audioRef.current;
            if (audioElement && audioTrack) {
                audioTrack.attach(audioElement);
                // 远程音频默认静音，除非用户手动取消
                audioElement.muted = isMuted;
                return ()=>{
                    audioTrack.detach(audioElement);
                };
            }
        }, [
            audioTrack,
            isMuted
        ]);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("audio", {
            ref: audioRef,
            autoPlay: true,
            playsInline: true
        });
    });
    // 渲染参与者
    const renderParticipant = (0,react.useCallback)((participant, isLocal)=>{
        const effectiveState = getEffectiveMediaState(participant.identity);
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'background.paper',
                boxShadow: 1
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ParticipantVideo, {
                    participant: participant,
                    isLocal: isLocal,
                    isVideoEnabled: effectiveState.isVideoEnabled
                }),
                !isLocal && /*#__PURE__*/ (0,jsx_runtime.jsx)(ParticipantAudio, {
                    participant: participant,
                    isMuted: !effectiveState.isAudioEnabled
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.Ay, {
                    container: true,
                    sx: {
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 1,
                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                        justifyContent: 'center',
                        gap: 1
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                size: "small",
                                color: effectiveState.isAudioEnabled ? 'primary' : 'error',
                                onClick: ()=>handleToggleAudio(participant),
                                children: effectiveState.isAudioEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(VolumeUp, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(VolumeOff, {})
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                size: "small",
                                color: effectiveState.isVideoEnabled ? 'primary' : 'error',
                                onClick: ()=>handleToggleVideo(participant),
                                children: effectiveState.isVideoEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Visibility, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(VisibilityOff, {})
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "caption",
                                color: "white",
                                children: [
                                    participant.identity,
                                    " ",
                                    isLocal && '(你)'
                                ]
                            })
                        }),
                        isLocal && /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                size: "small",
                                onClick: handleLocalMuteToggle,
                                color: isMuted ? 'error' : 'primary',
                                sx: {
                                    color: 'white'
                                },
                                title: isMuted ? '取消静音' : '静音',
                                children: isMuted ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MicOff, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Mic, {})
                            })
                        }),
                        isLocal && /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                size: "small",
                                onClick: handleLocalVideoToggle,
                                color: isVideoEnabled ? 'primary' : 'error',
                                sx: {
                                    color: 'white'
                                },
                                title: isVideoEnabled ? '关闭摄像头' : '开启摄像头',
                                children: isVideoEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Videocam, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(VideocamOff, {})
                            })
                        })
                    ]
                })
            ]
        }, participant.identity);
    }, [
        isMuted,
        isVideoEnabled,
        getEffectiveMediaState,
        handleToggleAudio,
        handleToggleVideo,
        handleLocalMuteToggle,
        handleLocalVideoToggle
    ]);
    // 渲染主界面
    function renderMainContent() {
        // 如果已经连接，显示会议界面
        if (hasConnected && roomRef.current) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                className: className,
                sx: {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            flex: 1,
                            overflow: 'auto',
                            p: 2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.Ay, {
                            container: true,
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                                    item: true,
                                    xs: 12,
                                    md: participants.length === 0 ? 12 : 6,
                                    children: renderParticipant(roomRef.current.localParticipant, true)
                                }),
                                participants.map(function(participant) {
                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        children: renderParticipant(participant, false)
                                    }, participant.identity);
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        sx: {
                            p: 2,
                            borderTop: '1px solid',
                            borderColor: 'divider',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                variant: "contained",
                                color: !globalMediaState.isAudioEnabled ? 'error' : 'primary',
                                onClick: toggleMute,
                                startIcon: !globalMediaState.isAudioEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MicOff, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Mic, {}),
                                children: !globalMediaState.isAudioEnabled ? '取消静音' : '静音'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                variant: "contained",
                                color: !globalMediaState.isVideoEnabled ? 'error' : 'primary',
                                onClick: toggleVideo,
                                startIcon: globalMediaState.isVideoEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Videocam, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(VideocamOff, {}),
                                children: globalMediaState.isVideoEnabled ? '关闭摄像头' : '开启摄像头'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                variant: "contained",
                                color: "error",
                                onClick: leaveMeeting,
                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CallEnd, {}),
                                children: "离开会议"
                            })
                        ]
                    })
                ]
            });
        }
        // 未连接时显示连接界面
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            className: className,
            sx: {
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    gutterBottom: true,
                    children: "准备加入会议"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.A, {
                    variant: "contained",
                    color: "primary",
                    onClick: connectToRoom,
                    disabled: isConnecting,
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Videocam, {}),
                    sx: {
                        mt: 2
                    },
                    children: [
                        "加入会议",
                        isConnecting && /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                            size: 16,
                            sx: {
                                color: 'inherit',
                                ml: 1
                            }
                        })
                    ]
                })
            ]
        });
    }
    // 统一渲染内容，避免提前 return 导致 hooks 数量不一致
    let content;
    if (isConnecting) {
        content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                p: 3
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body1",
                    sx: {
                        mt: 2
                    },
                    children: "正在连接会议..."
                })
            ]
        });
    } else if (error) {
        content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
            severity: "error",
            sx: {
                m: 2
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body1",
                    children: error
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                    variant: "contained",
                    color: "primary",
                    onClick: connectToRoom,
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh, {}),
                    sx: {
                        mt: 1
                    },
                    children: "重试连接"
                })
            ]
        });
    } else {
        content = renderMainContent();
    }
    (0,react.useEffect)(()=>{
        if (directly) {
            connectToRoom();
        }
    }, [
        directly
    ]);
    // 渲染组件
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        ref: ref,
        sx: sx,
        style: style,
        children: content
    });
}
// 使用 forwardRef 导出组件
const MeetingRoom = /*#__PURE__*/ (0,react.forwardRef)(MeetingRoomComponent);
MeetingRoom.displayName = 'MeetingRoom';



/***/ })

}]);
//# sourceMappingURL=3259-f4b276133109547d.js.map