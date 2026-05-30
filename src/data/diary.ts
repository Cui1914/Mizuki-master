// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

const diaryData: DiaryItem[] = [
	{
		id: 1,
		content:
			"今天把博客又整理了一遍，换了头像、设备、追番和第一篇文章。慢慢把这里改成自己的样子，这种一点点搭起来的感觉还挺不错。",
		date: "2026-05-25T15:58:00+08:00",
		images: ["/images/diary/cc.jpg"],
		mood: "开心",
		tags: ["记录", "Vibecoding", "博客"],
	},
];

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	for (const item of diaryData) {
		if (item.tags) {
			for (const tag of item.tags) {
				tags.add(tag);
			}
		}
	}
	return Array.from(tags).sort();
};
