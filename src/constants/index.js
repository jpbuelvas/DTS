import {
	backend,
	hoobank,
	cienciaDatos,
	DesarrolloSoftware,
	MachineLearning,
	ProcesamientoNLP,
	SistemaInformacion,
	creator,
	css,
	docker,
	figma,
	git,
	html,
	javascript,
	mobile,
	mongodb,
	nodejs,
	reactjs,
	redux,
	teleperformance,
	endava,
	tailwind,
	blancLabs,
	threejs,
	typescript,
	web,
} from "../assets"

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "experience",
		title: "Experience",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
]

const services = [
	{
		title: "Software Developer",
		icon: web,
	},
	{
		title: "Frontend Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Mobile Developer",
		icon: creator,
	},
]

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
]

const experiences = [
	{
		title: "Developer Intern",
		company_name: "Endava",
		icon: endava,
		iconBg: "#383E56",
		date: "July 2023 - January 2024",
		points: [
			"Contributed to the design and development of responsive web applications, ensuring a seamless user experience across various devices and screen sizes.",
			"Collaborated closely with other developers to implement both front-end (UI) and back-end (API) functionalities, ensuring seamless integration.",
			"Engaged in concurrent coding challenges in study groups and delivered presentations, fostering collaborative problem-solving skills in a team environment.",
			"Maintained an iterative approach to development, regularly incorporating feedback and updates into ongoing projects.",
			"Took ownership of assigned tasks and delivered solutions independently, showcasing problem-solving abilities.",
		],
	},
	{
		title: "Associate",
		company_name: "Blanc Labs",
		icon: blancLabs,
		iconBg: "#E6DEDD",
		date: "May 2023 - Present",
		points: [
			"Collaborated with cross-functional teams in the financial and healthcare sectors to accelerate digital transformation initiatives for companies in the United States and Canada.",
			"Participated in multidisciplinary knowledge-sharing sessions and learning groups to address the challenges of digital transformation.",
			"Explored practical technology solutions to resolve digital transformation challenges.",
			"Gained insights into the intersection of technology and practical problem-solving in the business context.",
		],
	},
	{
		title: "Customer Service Associate",
		company_name: "Teleperformance",
		icon: teleperformance,
		iconBg: "#383E56",
		date: "September 2022 - December 2023",
		points: [
			"Developed multitasking skills by efficiently managing multiple tasks concurrently to address customer inquiries and concerns.",
			"Utilized effective interrogation strategies to identify and understand customer situations, ensuring personalized support.",
			"Leveraged tools and systems to identify and implement appropriate solutions to customer issues.",
			"Demonstrated independence and problem-solving skills by autonomously resolving customer problems.",
			"Prioritized quick and effective actions to deliver high-quality solutions and maintain excellent customer service.",
		],
	},
]

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Juan proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Juan does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Juan optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
]

const projects = [
	// Nuevos servicios de DTS
	{
		name: "Ciencia de Datos",
		description:
			"Soluciones completas de ingeniería de datos, análisis y estadísticas clave para tu industria.",
		tags: [
			{
				name: "data-engineering",
				color: "blue-text-gradient",
			},
			{
				name: "business-intelligence",
				color: "green-text-gradient",
			},
		],
		image: cienciaDatos, // Reemplaza con la imagen correspondiente
		source_code_link: "https://github.com/tu-repositorio/dts-ciencia-datos",
		deploy_link: "https://dts-ciencia-datos.com",
	},
	{
		name: "Machine Learning y Deep Learning",
		description:
			"Aplicación de modelos de Machine Learning y Deep Learning para optimizar procesos y análisis.",
		tags: [
			{
				name: "machine-learning",
				color: "blue-text-gradient",
			},
			{
				name: "deep-learning",
				color: "purple-text-gradient",
			},
		],
		image: MachineLearning, // Reemplaza con la imagen correspondiente
		source_code_link: "https://github.com/tu-repositorio/dts-machine-learning",
		deploy_link: "https://dts-machine-learning.com",
	},
	{
		name: "Desarrollo de Software",
		description:
			"Desarrollo de aplicaciones móviles, aplicaciones web y sitios web personalizados.",
		tags: [
			{
				name: "mobile-development",
				color: "orange-text-gradient",
			},
			{
				name: "web-development",
				color: "blue-text-gradient",
			},
		],
		image: DesarrolloSoftware, // Reemplaza con la imagen correspondiente
		source_code_link: "https://github.com/tu-repositorio/dts-software",
		deploy_link: "https://dts-software.com",
	},
	{
		name: "Procesamiento de Lenguaje Natural (NLP)",
		description:
			"Implementación de chatbots y soluciones basadas en NLP para automatización de comunicaciones.",
		tags: [
			{
				name: "NLP",
				color: "purple-text-gradient",
			},
			{
				name: "chatbots",
				color: "blue-text-gradient",
			},
		],
		image: ProcesamientoNLP, // Reemplaza con la imagen correspondiente
		source_code_link: "https://github.com/tu-repositorio/dts-nlp",
		deploy_link: "https://dts-nlp.com",
	},
	{
		name: "Sistemas de Información",
		description:
			"Creación y gestión de bases de datos y sistemas de información seguros y eficientes.",
		tags: [
			{
				name: "database",
				color: "green-text-gradient",
			},
			{
				name: "systems",
				color: "orange-text-gradient",
			},
		],
		image: SistemaInformacion, // Reemplaza con la imagen correspondiente
		source_code_link: "https://github.com/tu-repositorio/dts-sistemas",
		deploy_link: "https://dts-sistemas.com",
	},
];
export { services, technologies, experiences, testimonials, projects }
