"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6007],{

/***/ 56007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ MeetingRoom)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var livekit_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89596);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6445);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65494);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67079);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(28669);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(95746);
/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(85629);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87924);
/* harmony import */ var _barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22738);
/* harmony import */ var _barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76972);
/* harmony import */ var _barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31049);
/* harmony import */ var _barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4382);
/* harmony import */ var _barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40677);
/* harmony import */ var _barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(70792);
/* harmony import */ var _barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(84095);
/* harmony import */ var _barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(83172);
/* harmony import */ var _barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(13634);
/* harmony import */ var _barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(15264);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41031);







// 日志记录器
const logger = new _fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .Log */ .tG(false, 'livekit-meeting.MeetingRoom');
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
    const [globalMediaState, setGlobalMediaState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        isAudioEnabled: initialAudioEnabled,
        isVideoEnabled: initialVideoEnabled
    });
    // Refs
    const roomRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const localTracksRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const videoElements = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
    const audioElements = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
    const [participantStates, setParticipantStates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const isUnmountedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    // State
    const [isConnecting, setIsConnecting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [hasConnected, setHasConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isMuted, setIsMuted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!initialAudioEnabled);
    const [isVideoEnabled, setIsVideoEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialVideoEnabled);
    const [participants, setParticipants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // 获取 token
    const fetchToken = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (roomName, identity)=>{
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
    const connectToRoom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
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
            ];
            uiLogger.log('audioTrack:', audioTrack);
            uiLogger.log('videoTrack:', videoTrack);
            // 3. 创建房间连接
            const room = new livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Room */ .Wv({
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
            // 6. 发布本地轨道
            try {
                await Promise.all([
                    room.localParticipant.publishTrack(audioTrack),
                    room.localParticipant.publishTrack(videoTrack)
                ]);
                // 7. 根据初始参数设置轨道状态
                if (!initialAudioEnabled) {
                    await audioTrack.mute();
                }
                if (!initialVideoEnabled) {
                    await videoTrack.mute();
                }
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
                    if (publication.track && publication.track instanceof livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RemoteTrack */ .O9) {
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
    // 创建本地音视频轨道
    const createLocalTracks = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        try {
            const [audioTrack, videoTrack] = await Promise.all([
                (0,livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .createLocalAudioTrack */ .rV)({
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true
                }),
                (0,livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .createLocalVideoTrack */ .yn)({
                    resolution: {
                        width: 1280,
                        height: 720,
                        frameRate: 24
                    }
                })
            ]);
            return {
                audioTrack,
                videoTrack
            };
        } catch (error) {
            uiLogger.error('创建本地轨道失败:', error);
            throw error;
        }
    }, []);
    // 清理轨道
    const cleanupTracks = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((tracks)=>{
        tracks.forEach((track)=>{
            track.stop();
            track.detach();
        });
    }, []);
    // 跟踪已处理的轨道元素
    const trackElementsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
    const videoElementsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
    const audioElementsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
    // 更新参与者状态
    const updateParticipantState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((identity, state)=>{
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
    const handleTrackSubscribed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((track, publication, participant)=>{
        if (!track) return ()=>{};
        const { identity } = participant;
        const isVideoTrack = track.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Video;
        uiLogger.log("处理 ".concat(track.kind, " 轨道订阅:"), identity, track);
        // 更新轨道状态的函数
        const updateTrackState = ()=>{
            const isMuted = track.isMuted;
            const stateUpdate = {};
            if (track.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Audio) {
                stateUpdate.isAudioEnabled = !isMuted;
            } else if (track.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Video) {
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
    const setupRoomListeners = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((room)=>{
        const eventHandlers = {
            // 处理远程参与者连接
            participantConnected: (participant)=>{
                if (!(participant instanceof livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RemoteParticipant */ .qI)) return;
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
        room.on(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.Disconnected, eventHandlers.disconnected).on(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.Reconnecting, eventHandlers.reconnecting).on(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.Reconnected, eventHandlers.reconnected).on(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.ParticipantConnected, eventHandlers.participantConnected).on(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.ParticipantDisconnected, eventHandlers.participantDisconnected).on(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.TrackSubscribed, eventHandlers.trackSubscribed);
        // 返回清理函数
        return ()=>{
            if (!room) return;
            room.off(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.Disconnected, eventHandlers.disconnected).off(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.Reconnecting, eventHandlers.reconnecting).off(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.Reconnected, eventHandlers.reconnected).off(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.ParticipantConnected, eventHandlers.participantConnected).off(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.ParticipantDisconnected, eventHandlers.participantDisconnected).off(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.TrackSubscribed, eventHandlers.trackSubscribed);
            // 确保返回 void
            return undefined;
        };
    }, [
        handleTrackSubscribed
    ]);
    // 离开会议
    const leaveMeeting = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
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
    const cleanup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async function() {
        let isUnmounting = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        // 如果是组件卸载，设置卸载标志
        if (isUnmounting) {
            isUnmountedRef.current = true;
        }
        uiLogger.log('执行清理...');
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const audioTrack = localTracksRef.current.find((t)=>t.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Audio);
        const videoTrack = localTracksRef.current.find((t)=>t.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Video);
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
    const updateGlobalMediaState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((audioEnabled, videoEnabled)=>{
        setGlobalMediaState((prev)=>({
                ...prev,
                isAudioEnabled: audioEnabled,
                isVideoEnabled: videoEnabled
            }));
    }, []);
    // 切换静音状态（全局控制）
    const toggleMute = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const audioTrack = localTracksRef.current.find((t)=>t.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Audio);
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
    const toggleVideo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const videoTrack = localTracksRef.current.find((t)=>t.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Video);
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
    const handleLocalMuteToggle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const audioTrack = localTracksRef.current.find((t)=>t.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Audio);
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
    const handleLocalVideoToggle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!roomRef.current) return;
        const localParticipant = roomRef.current.localParticipant;
        const videoTrack = localTracksRef.current.find((t)=>t.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Video);
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            // 清理资源
            cleanup(true);
        };
    }, []);
    // 获取参与者状态
    const getParticipantState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((identity)=>{
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
    const initParticipantState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((participant)=>{
        var _participant_getTrackPublications_find, _participant_getTrackPublications_find1;
        const state = getParticipantState(participant.identity);
        // 更新音频状态
        const audioTrack = (_participant_getTrackPublications_find = participant.getTrackPublications().find((pub)=>pub.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Audio)) === null || _participant_getTrackPublications_find === void 0 ? void 0 : _participant_getTrackPublications_find.track;
        // 更新视频状态
        const videoTrack = (_participant_getTrackPublications_find1 = participant.getTrackPublications().find((pub)=>pub.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Video)) === null || _participant_getTrackPublications_find1 === void 0 ? void 0 : _participant_getTrackPublications_find1.track;
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
    const handleToggleAudio = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((participant)=>{
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
    const handleToggleVideo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((participant)=>{
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
    const getEffectiveMediaState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((participantId)=>{
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
    const ParticipantVideo = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.memo((param)=>{
        let { participant, isLocal, isVideoEnabled } = param;
        const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
        const [videoTrack, setVideoTrack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
        // 处理视频轨道变化
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            if (!participant) return;
            // 查找现有的视频轨道发布
            const videoPublication = Array.from(participant.trackPublications.values()).find((pub)=>pub.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Video);
            // 如果轨道已存在，则直接设置
            if (videoPublication && videoPublication.track) {
                setVideoTrack(videoPublication.track);
            }
            // 当订阅轨道时处理
            const handleTrackSubscribed = (track)=>{
                if (track.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Video) {
                    setVideoTrack(track);
                }
            };
            // 当取消订阅轨道时处理
            const handleTrackUnsubscribed = (track)=>{
                if (track.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Video) {
                    setVideoTrack(null);
                }
            };
            // 添加事件监听
            participant.on(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.TrackSubscribed, handleTrackSubscribed);
            participant.on(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.TrackUnsubscribed, handleTrackUnsubscribed);
            // 清理函数
            return ()=>{
                participant.off(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.TrackSubscribed, handleTrackSubscribed);
                participant.off(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.TrackUnsubscribed, handleTrackUnsubscribed);
            };
        }, [
            participant
        ]);
        // 处理视频元素附加/分离
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
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
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("video", {
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
                !isVideoEnabled && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
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
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
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
    const ParticipantAudio = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.memo((param)=>{
        let { participant, isMuted } = param;
        const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
        const [audioTrack, setAudioTrack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            if (!participant) return;
            const handleTrackSubscribed = (track)=>{
                if (track.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Audio) {
                    setAudioTrack(track);
                }
            };
            const handleTrackUnsubscribed = (track)=>{
                if (track.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Audio) {
                    setAudioTrack(null);
                }
            };
            // 查找现有的音频轨道
            const audioPublication = Array.from(participant.trackPublications.values()).find((pub)=>pub.kind === livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC.Kind.Audio);
            if (audioPublication && audioPublication.track) {
                setAudioTrack(audioPublication.track);
            }
            participant.on(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.TrackSubscribed, handleTrackSubscribed);
            participant.on(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.TrackUnsubscribed, handleTrackUnsubscribed);
            return ()=>{
                participant.off(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.TrackSubscribed, handleTrackSubscribed);
                participant.off(livekit_client__WEBPACK_IMPORTED_MODULE_2__/* .RoomEvent */ .u9.TrackUnsubscribed, handleTrackUnsubscribed);
            };
        }, [
            participant
        ]);
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("audio", {
            ref: audioRef,
            autoPlay: true,
            playsInline: true
        });
    });
    // 渲染参与者
    const renderParticipant = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((participant, isLocal)=>{
        const effectiveState = getEffectiveMediaState(participant.identity);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
            sx: {
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'background.paper',
                boxShadow: 1
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ParticipantVideo, {
                    participant: participant,
                    isLocal: isLocal,
                    isVideoEnabled: effectiveState.isVideoEnabled
                }),
                !isLocal && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ParticipantAudio, {
                    participant: participant,
                    isMuted: !effectiveState.isAudioEnabled
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                                size: "small",
                                color: effectiveState.isAudioEnabled ? 'primary' : 'error',
                                onClick: ()=>handleToggleAudio(participant),
                                children: effectiveState.isAudioEnabled ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {})
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                                size: "small",
                                color: effectiveState.isVideoEnabled ? 'primary' : 'error',
                                onClick: ()=>handleToggleVideo(participant),
                                children: effectiveState.isVideoEnabled ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {})
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                                variant: "caption",
                                color: "white",
                                children: [
                                    participant.identity,
                                    " ",
                                    isLocal && '(你)'
                                ]
                            })
                        }),
                        isLocal && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                                size: "small",
                                onClick: handleLocalMuteToggle,
                                color: isMuted ? 'error' : 'primary',
                                sx: {
                                    color: 'white'
                                },
                                title: isMuted ? '取消静音' : '静音',
                                children: isMuted ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {})
                            })
                        }),
                        isLocal && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
                            item: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                                size: "small",
                                onClick: handleLocalVideoToggle,
                                color: isVideoEnabled ? 'primary' : 'error',
                                sx: {
                                    color: 'white'
                                },
                                title: isVideoEnabled ? '关闭摄像头' : '开启摄像头',
                                children: isVideoEnabled ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {})
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
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                className: className,
                sx: {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                        sx: {
                            flex: 1,
                            overflow: 'auto',
                            p: 2
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
                            container: true,
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
                                    item: true,
                                    xs: 12,
                                    md: participants.length === 0 ? 12 : 6,
                                    children: renderParticipant(roomRef.current.localParticipant, true)
                                }),
                                participants.map(function(participant) {
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        children: renderParticipant(participant, false)
                                    }, participant.identity);
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                        sx: {
                            p: 2,
                            borderTop: '1px solid',
                            borderColor: 'divider',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
                                variant: "contained",
                                color: !globalMediaState.isAudioEnabled ? 'error' : 'primary',
                                onClick: toggleMute,
                                startIcon: !globalMediaState.isAudioEnabled ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {}),
                                children: !globalMediaState.isAudioEnabled ? '取消静音' : '静音'
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
                                variant: "contained",
                                color: !globalMediaState.isVideoEnabled ? 'error' : 'primary',
                                onClick: toggleVideo,
                                startIcon: globalMediaState.isVideoEnabled ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {}),
                                children: globalMediaState.isVideoEnabled ? '关闭摄像头' : '开启摄像头'
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
                                variant: "contained",
                                color: "error",
                                onClick: leaveMeeting,
                                startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {}),
                                children: "离开会议"
                            })
                        ]
                    })
                ]
            });
        }
        // 未连接时显示连接界面
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
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
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                    variant: "h6",
                    gutterBottom: true,
                    children: "准备加入会议"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
                    variant: "contained",
                    color: "primary",
                    onClick: connectToRoom,
                    disabled: isConnecting,
                    startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {}),
                    sx: {
                        mt: 2
                    },
                    children: [
                        "加入会议",
                        isConnecting && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
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
        content = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
            sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                p: 3
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                    variant: "body1",
                    sx: {
                        mt: 2
                    },
                    children: "正在连接会议..."
                })
            ]
        });
    } else if (error) {
        content = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
            severity: "error",
            sx: {
                m: 2
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                    variant: "body1",
                    children: error
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
                    variant: "contained",
                    color: "primary",
                    onClick: connectToRoom,
                    startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CallEnd_Mic_MicOff_Refresh_Videocam_VideocamOff_Visibility_VisibilityOff_VolumeOff_VolumeUp_mui_icons_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {}),
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (directly) {
            connectToRoom();
        }
    }, [
        directly
    ]);
    // 渲染组件
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        ref: ref,
        sx: sx,
        style: style,
        children: content
    });
}
// 使用 forwardRef 导出组件
const MeetingRoom = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(MeetingRoomComponent);
MeetingRoom.displayName = 'MeetingRoom';



/***/ })

}]);
//# sourceMappingURL=6007-28c57c11e045efbe.js.map