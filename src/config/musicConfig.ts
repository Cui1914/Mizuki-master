import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	enable: false, // 暂时关闭音乐播放器
	showFloatingPlayer: true, // 显示悬浮播放器 UI
	floatingEntryMode: "fab", // 悬浮入口模式："default" 为独立悬浮播放器，"fab" 为集成到通用 FAB 组
	mode: "local", // 音乐播放器模式，可选 "local" 或 "meting"
	meting_api: "", // Meting API 地址（需要自己搭建）
	id: "", // 歌单ID
	server: "netease", // 音乐源服务器
	type: "playlist", // 播单类型
};
