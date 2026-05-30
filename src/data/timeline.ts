import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "computer-science-study-2025",
		title: "学习计算机科学与技术",
		description:
			"从 2025 年开始系统学习计算机科学与技术，重点打好编程基础、计算机基础、前端开发和 AI 工具使用能力。现在正在通过课程学习、项目实践和博客搭建，把学到的内容慢慢变成可以运行、可以展示、可以复盘的成果。",
		type: "education",
		startDate: "2025-01-01",
		location: "中国",
		organization: "自学与课程实践",
		position: "计算机科学与技术学习者",
		skills: [
			"计算机基础",
			"前端开发",
			"TypeScript",
			"Astro",
			"Vibecoding",
			"AI 工具",
		],
		achievements: [
			"开始系统学习计算机科学与技术，建立长期学习路线",
			"完成个人博客搭建，并持续调整首页、文章、设备、追番、日记和时间线等页面",
			"学习使用 Astro、TypeScript、Markdown 和 Vercel 完成静态站点开发与部署",
			"尝试用 AI 辅助写代码、改页面和整理内容，形成自己的 Vibecoding 工作流",
			"通过实际项目练习，把零散知识整理成可展示、可迭代的个人站点",
		],
		links: [
			{
				name: "个人博客",
				url: "/",
				type: "website",
			},
		],
		icon: "material-symbols:school",
		color: "#0EA5E9",
		featured: true,
	},
];
