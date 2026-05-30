// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: "一加 13",
			image: "/images/device/oneplus13.png",
			specs: "骁龙 8 至尊版 / 6000mAh",
			description:
				"2K 120Hz ProXDR 屏，哈苏三主摄，100W 有线 + 50W 无线闪充，IP68/IP69。",
			link: "https://www.oneplus.com/cn/13",
		},
	],
	Pad: [
		{
			name: "OPPO Pad 3 Pro",
			image: "/images/device/oppopad3pro.png",
			specs: "骁龙 8 Gen 3 / 12.1 英寸 3K",
			description:
				"3K 144Hz 原彩屏，9510mAh 电池，67W 闪充，八扬声器，适合学习、观影和轻办公。",
			link: "https://www.oppo.com/cn/accessories/oppo-pad-3-pro/",
		},
	],
	Laptop: [
		{
			name: "Samsung Galaxy Book3 Pro",
			image: "/images/device/samsung-book3-pro.jpg",
			specs: "13th Gen Intel Core / AMOLED 2X",
			description:
				"轻薄机身，Dynamic AMOLED 2X 120Hz 屏幕，适合日常办公、写代码和内容创作。",
			link: "https://www.samsung.com/us/computing/galaxy-books/galaxy-book3-pro/",
		},
	],
	Earbuds: [
		{
			name: "一加 Buds Ace 2",
			image: "/images/device/oneplus-buds-ace-2.png",
			specs: "12.4mm 动圈 / 43 小时续航",
			description:
				"真无线蓝牙耳机，支持主动降噪、低延迟游戏模式和长续航，适合通勤与游戏。",
			link: "https://www.oneplus.com/cn/product/oneplus-buds-ace-2",
		},
	],
};
