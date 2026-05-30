// 本地番剧数据配置
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "黑色四叶草",
		status: "completed",
		rating: 9.5,
		cover:
			"https://i0.hdslb.com/bfs/bangumi/image/aecbaaf4e3e36a2796684c2eff8ceb9b0f247c6d.jpg",
		description:
			"曾经险些遭到魔神毁灭的世界，拯救它的是一位被后世称为魔法帝的魔导士。没有魔力的少年亚斯塔，仍以成为魔法帝为目标不断前进。",
		episodes: "171 episodes",
		year: "2017",
		genre: ["漫画改", "热血", "奇幻", "战斗", "魔法", "冒险"],
		studio: "日本",
		link: "https://www.bilibili.com/bangumi/play/ss6422",
		progress: 155,
		totalEpisodes: 171,
		startDate: "2017-10",
		endDate: "",
	},
	{
		title: "我的青春恋爱物语果然有问题。完",
		status: "completed",
		rating: 8.9,
		cover:
			"https://i0.hdslb.com/bfs/bangumi/image/82d628408f5472f1440982e880b0b4f0146862ad.png",
		description:
			"比企谷八幡、雪之下雪乃与由比滨结衣的侍奉部故事迎来终章。别扭的青春与真实的愿望，在一次次选择中走向答案。",
		episodes: "12 episodes",
		year: "2020",
		genre: ["校园", "恋爱", "小说改"],
		studio: "日本",
		link: "https://www.bilibili.com/bangumi/play/ss32998",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2020-07",
		endDate: "2020-09",
	},
	{
		title: "我的青春恋爱物语果然有问题。续",
		status: "completed",
		rating: 9.8,
		cover:
			"https://i0.hdslb.com/bfs/bangumi/image/8844c9bea1c5ff2371b47181785084c9650a1402.png",
		description:
			"个性别扭的比企谷八幡继续在侍奉部中处理委托，与雪之下雪乃、由比滨结衣一起面对更加复杂的人际关系。",
		episodes: "13 episodes",
		year: "2015",
		genre: ["日常", "校园", "恋爱", "小说改"],
		studio: "日本",
		link: "https://www.bilibili.com/bangumi/play/ss1540",
		progress: 13,
		totalEpisodes: 13,
		startDate: "2015-04",
		endDate: "2015-06",
	},
	{
		title: "四月是你的谎言",
		status: "watching",
		rating: 9.8,
		cover:
			"https://i0.hdslb.com/bfs/bangumi/image/ec912249f5bf1fe1521c9a2df5ae655567bd85ef.png",
		description:
			"曾经的钢琴神童有马公生在母亲离世后听不见钢琴声，直到小提琴少女宫园薰闯入他的生活，音乐与青春重新开始流动。",
		episodes: "22 episodes",
		year: "2014",
		genre: ["少女", "音乐", "催泪", "恋爱", "漫画改"],
		studio: "日本",
		link: "https://www.bilibili.com/bangumi/play/ss1699",
		progress: 5,
		totalEpisodes: 22,
		startDate: "2014-10",
		endDate: "2015-03",
	},
	{
		title: "灵笼 第二季",
		status: "watching",
		rating: 9.8,
		cover:
			"https://i0.hdslb.com/bfs/bangumi/image/08bf0c1e24e454de51b58d1e26c0a9aecbe9b0c1.png",
		description:
			"数百年前，玛娜生态几乎毁灭人类文明。末日中的幸存者在猜忌、恐惧与希望之间，继续寻找人类延续的答案。",
		episodes: "12 episodes",
		year: "2025",
		genre: ["原创", "热血", "奇幻", "战斗", "科幻"],
		studio: "中国大陆",
		link: "https://www.bilibili.com/bangumi/play/ss46585",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2025-05",
		endDate: "",
	},
];

export default localAnimeList;
