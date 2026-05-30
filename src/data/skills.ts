// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	{
		id: "c-language",
		name: "C 语言",
		description:
			"计算机专业基础语言，用于理解指针、内存、结构体、函数调用和底层程序运行方式。",
		icon: "logos:c",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#A8B9CC",
	},
	{
		id: "cpp",
		name: "C++",
		description:
			"用于学习面向对象、STL、数据结构和算法实现，适合打牢程序设计基础。",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 8 },
		color: "#00599C",
	},
	{
		id: "python",
		name: "Python",
		description:
			"用于脚本编写、数据处理、自动化任务和算法练习，是学习 AI 工具链的重要入口。",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#3776AB",
	},
	{
		id: "java",
		name: "Java",
		description:
			"用于学习面向对象、集合框架、异常处理和后端开发基础，适合作为工程化语言训练。",
		icon: "logos:java",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#ED8B00",
	},
	{
		id: "data-structures",
		name: "数据结构与算法",
		description:
			"掌握数组、链表、栈、队列、树、图、排序和查找等基础内容，持续进行算法题训练。",
		icon: "material-symbols:account-tree",
		category: "other",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#7C3AED",
	},
	{
		id: "computer-foundation",
		name: "计算机基础",
		description:
			"学习计算机组成、操作系统、计算机网络和数据库原理，建立软件开发的底层认知。",
		icon: "material-symbols:memory",
		category: "other",
		level: "beginner",
		experience: { years: 1, months: 0 },
		color: "#0F766E",
	},
	{
		id: "html-css",
		name: "HTML / CSS",
		description: "能够完成页面结构、响应式布局、样式调整和基础交互界面的实现。",
		icon: "logos:html-5",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#E34F26",
	},
	{
		id: "javascript",
		name: "JavaScript",
		description:
			"掌握基础语法、DOM 操作、异步请求和模块化开发，是前端开发的核心能力。",
		icon: "logos:javascript",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#F7DF1E",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description:
			"正在学习类型系统、接口、泛型和工程化写法，用来提升前端项目的可维护性。",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#3178C6",
	},
	{
		id: "astro",
		name: "Astro",
		description:
			"用于搭建个人博客和静态站点，了解组件化、内容集合、构建和部署流程。",
		icon: "logos:astro-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 4 },
		projects: ["personal-blog"],
		color: "#FF5D01",
	},
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		description:
			"用于快速调整页面样式、间距、颜色和响应式布局，适合个人站点迭代。",
		icon: "logos:tailwindcss-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 4 },
		color: "#06B6D4",
	},
	{
		id: "nodejs",
		name: "Node.js",
		description:
			"了解包管理、脚本运行、开发服务器和前端工程工具链，是现代 Web 开发的基础。",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#339933",
	},
	{
		id: "mysql",
		name: "MySQL",
		description: "学习关系型数据库、表设计、SQL 查询、增删改查和基础索引概念。",
		icon: "logos:mysql-icon",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#4479A1",
	},
	{
		id: "git",
		name: "Git / GitHub",
		description:
			"用于代码版本管理、提交记录、分支协作和项目托管，是开发者必备工具。",
		icon: "logos:git-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"日常代码编辑器，配合插件、终端和格式化工具完成学习与项目开发。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#007ACC",
	},
	{
		id: "linux-cli",
		name: "Linux / 命令行",
		description:
			"学习基础命令、文件操作、环境配置和简单脚本，为后续服务器与开发环境打基础。",
		icon: "logos:linux-tux",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#FCC624",
	},
	{
		id: "vercel",
		name: "Vercel 部署",
		description:
			"能够将 Astro 静态站点部署到 Vercel，理解构建命令、环境变量和生产发布流程。",
		icon: "simple-icons:vercel",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 3 },
		color: "#616161",
	},
	{
		id: "ai-assisted-coding",
		name: "AI 辅助编程",
		description:
			"使用 AI 辅助理解代码、修改页面、生成内容和排查问题，正在形成自己的 Vibecoding 流程。",
		icon: "material-symbols:smart-toy",
		category: "other",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#0EA5E9",
	},
];
