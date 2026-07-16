import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, r as performance_default, t as motion } from "../_libs/framer-motion.mjs";
import { i as require_react, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { D as isRedirect, _ as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Cqy7j6m4.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as useInView } from "../_libs/react-intersection-observer.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { n as object, r as string, t as email } from "../_libs/zod.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D0lC1oEk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var project_1_default = "/assets/project-1-BkOS6m4k.jpg";
var project_2_default = "/assets/project-2-BOVy_Q0O.jpg";
var project_3_default = "/assets/project-3-eDZLT6sL.jpg";
var project_4_default = "/assets/project-4-DM81XsX3.jpg";
var NAV_LINKS = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#experience",
		label: "Experience"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var TECH_STACK = [
	"react",
	"vite",
	"nodejs",
	"mongodb",
	"supabase",
	"php",
	"html5",
	"css3",
	"javascript",
	"typescript",
	"tailwind",
	"vercel",
	"cloudflare"
];
var SKILLS = [
	{
		category: "Frontend",
		items: [
			{
				name: "React",
				level: 90
			},
			{
				name: "TypeScript",
				level: 85
			},
			{
				name: "Tailwind CSS",
				level: 92
			},
			{
				name: "Vite",
				level: 88
			},
			{
				name: "HTML / CSS / JS",
				level: 95
			}
		]
	},
	{
		category: "Backend",
		items: [
			{
				name: "Node.js",
				level: 82
			},
			{
				name: "Express.js",
				level: 80
			},
			{
				name: "PHP",
				level: 78
			}
		]
	},
	{
		category: "Database",
		items: [
			{
				name: "MongoDB",
				level: 80
			},
			{
				name: "MySQL",
				level: 85
			},
			{
				name: "Supabase",
				level: 82
			}
		]
	},
	{
		category: "Tools",
		items: [{
			name: "Git & GitHub",
			level: 90
		}, {
			name: "VS Code",
			level: 95
		}]
	},
	{
		category: "Deployment",
		items: [
			{
				name: "Vercel",
				level: 88
			},
			{
				name: "Cloudflare",
				level: 80
			},
			{
				name: "Hostinger",
				level: 75
			}
		]
	}
];
var SERVICES = [
	{
		icon: "code",
		title: "Web Development",
		description: "Modern, responsive websites built with React, TypeScript and Tailwind CSS — optimized for speed, SEO and conversions."
	},
	{
		icon: "layers",
		title: "Full Stack Development",
		description: "End-to-end web applications covering frontend, backend APIs, authentication and database from idea to deployment."
	},
	{
		icon: "database",
		title: "Database Design",
		description: "Scalable schemas for MySQL, MongoDB and Supabase with clean relations, indexing and migration-friendly structures."
	},
	{
		icon: "wrench",
		title: "Website Maintenance",
		description: "Bug fixes, dependency upgrades, performance audits and continuous improvements to keep your site fast and secure."
	},
	{
		icon: "plug",
		title: "API Development",
		description: "RESTful APIs with proper validation, error handling and documentation ready for mobile, web and third-party clients."
	}
];
var PROJECTS = [
	{
		slug: "analytics-dashboard",
		title: "Analytics Dashboard",
		image: project_1_default,
		tagline: "Real-time SaaS analytics with charts, filters and exports.",
		tech: [
			"React",
			"TypeScript",
			"Tailwind",
			"Node.js",
			"MongoDB"
		],
		liveUrl: "#",
		repoUrl: "https://github.com/JonYang0108",
		overview: "A comprehensive analytics dashboard that surfaces product KPIs in real time with rich charting and export options.",
		problem: "Small teams struggle to consolidate data across services into a single, readable view.",
		solution: "A modular dashboard with reusable chart components, scheduled aggregations, and CSV/PDF export pipelines.",
		features: [
			"Real-time data streaming",
			"Interactive charts (line, bar, donut)",
			"Filterable date ranges",
			"Role-based access control",
			"CSV and PDF exports"
		],
		stack: {
			frontend: "React + TypeScript + Tailwind",
			backend: "Node.js + Express",
			database: "MongoDB"
		},
		future: "Add anomaly detection, custom alert rules and a public API for embedded widgets."
	},
	{
		slug: "ecommerce-platform",
		title: "E-Commerce Platform",
		image: project_2_default,
		tagline: "Headless storefront with cart, checkout and admin tools.",
		tech: [
			"React",
			"Vite",
			"Tailwind",
			"Supabase",
			"Stripe"
		],
		liveUrl: "#",
		repoUrl: "https://github.com/JonYang0108",
		overview: "A modern storefront with full cart, checkout, order tracking and an admin panel for inventory.",
		problem: "Local merchants needed a fast, affordable way to launch online with secure payments.",
		solution: "A Supabase-backed storefront with Stripe checkout, RLS-secured admin and image CDN.",
		features: [
			"Product catalog with search",
			"Cart and secure checkout",
			"Order history and tracking",
			"Admin product management",
			"Responsive mobile-first UI"
		],
		stack: {
			frontend: "React + Vite + Tailwind",
			backend: "Supabase Edge Functions",
			database: "Postgres (Supabase)"
		},
		future: "Wishlist, recommendations engine, multi-currency and shipping integrations."
	},
	{
		slug: "task-manager",
		title: "Task Management App",
		image: project_3_default,
		tagline: "Kanban-style task board with drag, filters and team sync.",
		tech: [
			"React",
			"TypeScript",
			"Tailwind",
			"Node.js",
			"MySQL"
		],
		liveUrl: "#",
		repoUrl: "https://github.com/JonYang0108",
		overview: "A collaborative kanban board where teams can plan sprints, drag tasks across columns and chat in-line.",
		problem: "Students and small teams lacked a lightweight, free alternative to bloated PM tools.",
		solution: "A focused board app with real-time updates, keyboard shortcuts and email notifications.",
		features: [
			"Drag and drop columns",
			"Tags, due dates and priorities",
			"Activity log per card",
			"Email reminders",
			"Dark mode by default"
		],
		stack: {
			frontend: "React + TypeScript",
			backend: "Node.js + Express",
			database: "MySQL"
		},
		future: "Calendar view, Gantt charts and mobile app via React Native."
	},
	{
		slug: "real-estate-portal",
		title: "Real Estate Portal",
		image: project_4_default,
		tagline: "Property listings with map search and saved favorites.",
		tech: [
			"React",
			"Tailwind",
			"PHP",
			"MySQL"
		],
		liveUrl: "#",
		repoUrl: "https://github.com/JonYang0108",
		overview: "A property search portal with map view, advanced filters and an inquiry workflow for agents.",
		problem: "Buyers wasted time scrolling through outdated listings without a clear map view.",
		solution: "A PHP/MySQL backend serving a React frontend with Leaflet maps and inquiry routing to agents.",
		features: [
			"Map-based property search",
			"Advanced filters (price, beds, area)",
			"Save favorites",
			"Agent inquiry form",
			"Image gallery and virtual tour stub"
		],
		stack: {
			frontend: "React + Tailwind",
			backend: "PHP (Laravel-style)",
			database: "MySQL"
		},
		future: "Mortgage calculator, agent dashboard and 3D tour integrations."
	}
];
var EXPERIENCE = [
	{
		company: "Freelance",
		role: "Full Stack Web Developer",
		duration: "2024 — Present",
		responsibilities: [
			"Build responsive websites for small businesses and creators",
			"Translate client requirements into clean, maintainable code",
			"Deliver and deploy projects on Vercel, Hostinger and Cloudflare"
		],
		achievements: ["Shipped 10+ client websites with positive feedback"]
	},
	{
		company: "Academic Projects",
		role: "Student Developer",
		duration: "2023 — Present",
		responsibilities: [
			"Lead frontend development across multiple capstone projects",
			"Design and normalize MySQL databases for school systems",
			"Mentor classmates on Git workflows and modern JS"
		],
		achievements: ["Recognized for Best Capstone Demo (school internal)"]
	},
	{
		company: "Open Source",
		role: "Contributor",
		duration: "2024 — Present",
		responsibilities: ["Submit bug fixes and small features to React and Tailwind ecosystems", "Maintain personal libraries on GitHub"],
		achievements: ["Several merged PRs across community repositories"]
	}
];
var EDUCATION = [{
	school: "University / College",
	degree: "Bachelor of Science in Information Technology",
	year: "2022 — Present",
	achievements: ["Consistent Dean's Lister", "Capstone team lead"]
}];
var CERTIFICATIONS = [
	{
		name: "Responsive Web Design",
		issuer: "freeCodeCamp",
		date: "2024",
		link: "#"
	},
	{
		name: "JavaScript Algorithms & Data Structures",
		issuer: "freeCodeCamp",
		date: "2024",
		link: "#"
	},
	{
		name: "React — The Complete Guide",
		issuer: "Udemy",
		date: "2025",
		link: "#"
	}
];
var TESTIMONIALS = [
	{
		name: "Project Client",
		feedback: "Jonie delivered our website ahead of schedule and the design exceeded our expectations.",
		rating: 5
	},
	{
		name: "Capstone Mentor",
		feedback: "Strong technical foundation and great communication throughout the project.",
		rating: 5
	},
	{
		name: "Freelance Client",
		feedback: "Reliable, communicative and writes clean code. Will hire again for our next phase.",
		rating: 5
	}
];
var PROCESS = [
	{
		step: 1,
		title: "Requirement Analysis",
		desc: "Understand goals, audience and constraints."
	},
	{
		step: 2,
		title: "Planning",
		desc: "Scope, timeline, milestones and risk mapping."
	},
	{
		step: 3,
		title: "UI/UX Design",
		desc: "Wireframes, design system and prototypes."
	},
	{
		step: 4,
		title: "Frontend Development",
		desc: "Componentized, responsive, accessible UI."
	},
	{
		step: 5,
		title: "Backend Development",
		desc: "APIs, business logic and integrations."
	},
	{
		step: 6,
		title: "Database Design",
		desc: "Schema, relations, indexing and migrations."
	},
	{
		step: 7,
		title: "Testing",
		desc: "Manual QA, edge cases and performance audits."
	},
	{
		step: 8,
		title: "Deployment",
		desc: "CI/CD, environment configuration and monitoring."
	},
	{
		step: 9,
		title: "Maintenance",
		desc: "Bug fixes, upgrades and continuous improvement."
	}
];
var SOCIALS = {
	github: "https://github.com/JonYang0108",
	facebook: "https://www.facebook.com/jonie.quirino.73",
	linkedin: "",
	instagram: ""
};
var CONTACT = {
	email: "joniequirino@gmail.com",
	phone: "09814766600",
	location: "Antipolo City, Rizal, Philippines"
};
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		const initial = localStorage.getItem("theme") ?? "dark";
		setTheme(initial);
		document.documentElement.classList.toggle("light", initial === "light");
	}, []);
	const toggle = () => {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		document.documentElement.classList.toggle("light", next === "light");
		localStorage.setItem("theme", next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: toggle,
		"aria-label": "Toggle theme",
		className: "glass rounded-full p-2.5 text-foreground transition-transform hover:scale-110",
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "4"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
		})
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: { duration: .6 },
		className: `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all ${scrolled ? "glass mx-4" : "mx-4"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#hero",
					className: "font-display text-lg font-bold tracking-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-text",
						children: "Jonie"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: ".dev"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-7 md:flex",
					children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: l.label
					}) }, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "md:hidden glass rounded-full p-2.5",
						onClick: () => setOpen((v) => !v),
						"aria-label": "Menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							strokeLinecap: "round",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6L6 18" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l12 12" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12h18" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 6h18" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 18h18" })
							] })
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -10
			},
			className: "glass mx-4 mt-2 rounded-2xl p-4 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-2",
				children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground",
					children: l.label
				}) }, l.href))
			})
		}) })]
	});
}
function PageLoader() {
	const [show, setShow] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setShow(false), 1100);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .5 },
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: .8,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				transition: { duration: .6 },
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 blur-2xl bg-[image:var(--gradient-primary)] opacity-60 rounded-full animate-glow-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative font-display text-3xl font-bold gradient-text",
					children: "JVQ"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-0.5 w-40 overflow-hidden rounded-full bg-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { x: "-100%" },
					animate: { x: "100%" },
					transition: {
						duration: 1,
						ease: "easeInOut"
					},
					className: "h-full w-full bg-[image:var(--gradient-primary)]"
				})
			})]
		})
	}) });
}
function CursorGlow() {
	const [pos, setPos] = (0, import_react.useState)({
		x: -1e3,
		y: -1e3
	});
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(pointer: coarse)").matches) return;
		const move = (e) => {
			setPos({
				x: e.clientX,
				y: e.clientY
			});
			setVisible(true);
		};
		window.addEventListener("mousemove", move);
		return () => window.removeEventListener("mousemove", move);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 z-0 transition-opacity duration-300",
		style: { opacity: visible ? 1 : 0 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl",
			style: {
				left: pos.x,
				top: pos.y,
				background: "radial-gradient(circle, oklch(0.65 0.22 270 / 0.35), transparent 60%)"
			}
		})
	});
}
var profile_default = "/assets/profile-CZ2VcpKZ.jpg";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var variants = {
	primary: "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110",
	secondary: "glass text-foreground hover:bg-white/10",
	ghost: "border border-border text-foreground hover:bg-white/5"
};
function MagneticButton({ children, variant = "primary", className, href, onClick, type, download, target, ariaLabel }) {
	const ref = (0, import_react.useRef)(null);
	const [pos, setPos] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const handleMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		setPos({
			x: x * .25,
			y: y * .25
		});
	};
	const reset = () => setPos({
		x: 0,
		y: 0
	});
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		onMouseMove: handleMove,
		onMouseLeave: reset,
		animate: {
			x: pos.x,
			y: pos.y
		},
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 15,
			mass: .3
		},
		className: cn("inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[filter,background] cursor-pointer select-none", variants[variant], className),
		children
	});
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		download,
		target,
		"aria-label": ariaLabel,
		rel: target === "_blank" ? "noopener noreferrer" : void 0,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: type ?? "button",
		onClick,
		"aria-label": ariaLabel,
		className: "bg-transparent border-0 p-0",
		children: inner
	});
}
var TAGLINES = [
	"Full Stack Web Developer",
	"Frontend Engineer",
	"Backend Builder",
	"Student & Lifelong Learner"
];
function Typer() {
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const word = TAGLINES[idx];
		const t = setTimeout(() => {
			if (!deleting) {
				const next = word.slice(0, text.length + 1);
				setText(next);
				if (next === word) setTimeout(() => setDeleting(true), 1400);
			} else {
				const next = word.slice(0, text.length - 1);
				setText(next);
				if (next === "") {
					setDeleting(false);
					setIdx((i) => (i + 1) % TAGLINES.length);
				}
			}
		}, deleting ? 40 : 80);
		return () => clearTimeout(t);
	}, [
		text,
		deleting,
		idx
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "gradient-text",
		children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-0.5 inline-block w-0.5 animate-blink bg-primary align-middle",
			style: { height: "1em" }
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hero",
		className: "relative flex min-h-screen items-center overflow-hidden pt-28 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[10%] top-1/4 h-72 w-72 rounded-full bg-primary/30 blur-[120px] animate-float" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute right-[15%] top-1/3 h-96 w-96 rounded-full bg-primary-glow/20 blur-[140px] animate-float",
						style: { animationDelay: "2s" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "var(--gradient-hero)" }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px] shadow-green-400" }), "Available for opportunities"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .1
						},
						className: "font-display text-5xl font-bold leading-[1.05] md:text-7xl",
						children: [
							"Hello, I'm",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: "Jonie Quirino"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .2
						},
						className: "mt-4 font-display text-2xl font-semibold md:text-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typer, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .3
						},
						className: "mt-6 max-w-xl text-base text-muted-foreground md:text-lg",
						children: "I'm a student Full Stack Web Developer passionate about creating modern, responsive, and interactive web applications — turning ideas into functional digital experiences while continuously learning and growing."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .4
						},
						className: "mt-8 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								href: "#projects",
								variant: "primary",
								children: "View Projects"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								href: "/cv.pdf",
								download: true,
								variant: "secondary",
								children: "Download CV"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								href: "#contact",
								variant: "ghost",
								children: "Contact Me"
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .8,
						delay: .2
					},
					className: "relative mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -m-6 rounded-full bg-[image:var(--gradient-primary)] opacity-30 blur-3xl animate-glow-pulse" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-72 w-72 overflow-hidden rounded-full border border-border md:h-80 md:w-80",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: profile_default,
								alt: "Jonie Quirino — Full Stack Web Developer",
								width: 1024,
								height: 1024,
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { rotate: 360 },
							transition: {
								duration: 24,
								repeat: Infinity,
								ease: "linear"
							},
							className: "absolute inset-0 -m-3 rounded-full border border-dashed border-primary/40"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
				href: "#tech",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1,
					duration: .8
				},
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground",
				"aria-label": "Scroll",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: { y: [
						0,
						8,
						0
					] },
					transition: {
						duration: 1.8,
						repeat: Infinity
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "22",
						height: "22",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5v14M19 12l-7 7-7-7" })
					})
				})
			})
		]
	});
}
var ICONS$1 = {
	react: {
		name: "React",
		path: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-.64-1.167 25.7 25.7 0 0 0-.705-1.153zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 .67-1.156c.225-.39.435-.788.67-1.182zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.155-.298 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
	},
	vite: {
		name: "Vite",
		path: "M8.286 10.578.512 2.804a.5.5 0 0 1 .447-.848l1.05.166c.41.063.802.183 1.158.348L9.36 5.404c.146.066.146.27 0 .336l-1.077.486c-.149.067-.155.272-.012.347zM12.69 8.66 9.366 6.5l.012-.348 1.077-.486c.146-.066.146-.27 0-.336L4.288 2.464a4.502 4.502 0 0 0-1.158-.348l-1.05-.166a.5.5 0 0 0-.447.848l7.774 7.774-1.117 1.46 5.84 5.84.044.044a.5.5 0 0 0 .695.018L23.66 4.45a.5.5 0 0 0-.018-.696L17.802 0a.5.5 0 0 0-.695.018L8.286 8.66z M12.91 8.948a.5.5 0 0 1-.34-.146l-.012-.012a.5.5 0 0 1 .035-.722l5.96-5.04a.5.5 0 0 1 .722.035l.012.012a.5.5 0 0 1-.035.722l-5.96 5.04a.498.498 0 0 1-.382.111z"
	},
	nodejs: {
		name: "Node.js",
		path: "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
	},
	mongodb: {
		name: "MongoDB",
		path: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
	},
	supabase: {
		name: "Supabase",
		path: "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"
	},
	php: {
		name: "PHP",
		path: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"
	},
	html5: {
		name: "HTML5",
		path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
	},
	css3: {
		name: "CSS3",
		path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
	},
	javascript: {
		name: "JavaScript",
		path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
	},
	typescript: {
		name: "TypeScript",
		path: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
	},
	tailwind: {
		name: "Tailwind CSS",
		path: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
	},
	vercel: {
		name: "Vercel",
		path: "M24 22.525H0l12-21.05 12 21.05z"
	},
	cloudflare: {
		name: "Cloudflare",
		path: "M16.5088 16.8447l.1475-.5068c.1748-.6055.1085-1.166-.1881-1.5781-.2724-.3804-.7273-.6025-1.2786-.6284l-10.4795-.1353c-.0703-.0033-.1313-.0376-.1664-.0938-.0361-.0581-.0454-.1299-.0244-.1953.0376-.105.1396-.1812.252-.1865l10.5742-.1357c1.2543-.0571 2.6123-1.0732 3.0874-2.3115l.6035-1.5712c.0264-.0689.0332-.1431.0195-.2139-.6797-3.0747-3.4233-5.3711-6.7036-5.3711-3.0244 0-5.5913 1.9531-6.5054 4.668a3.1505 3.1505 0 00-2.1577-.5947c-1.5181.1509-2.7407 1.3711-2.8945 2.8896-.04.4082-.0117.8027.083 1.1729C2.0034 12.7129 0 14.7969 0 17.3623c0 .2305.0166.4561.0498.6797a.2114.2114 0 00.2095.1846l15.9136.002a.2604.2604 0 00.2509-.1895l.083-.2944zm2.5908-5.0991c-.0962 0-.1968.0024-.2871.0078-.062.0064-.1162.05-.1377.1133l-.4111 1.4214c-.1748.605-.1089 1.166.1875 1.5781.272.3804.7271.6021 1.2786.6284l2.2349.1353a.20313.20313 0 01.1612.0942c.0366.0586.0454.1304.0244.1953-.0376.105-.1396.1816-.252.1865l-2.3232.1357c-1.2603.0576-2.6123 1.0732-3.0874 2.3115l-.1675.4341c-.0327.0838.0254.1714.1147.1714h7.999a.2202.2202 0 00.2114-.1611c.1372-.4961.2114-1.0181.2114-1.5576 0-3.1426-2.5703-5.6963-5.7314-5.6963"
	}
};
function TechIcon({ name, ...props }) {
	const icon = ICONS$1[name];
	if (!icon) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		role: "img",
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		fill: "currentColor",
		"aria-label": icon.name,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: icon.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: icon.path })]
	});
}
function getTechLabel(name) {
	return ICONS$1[name]?.name ?? String(name);
}
var items = [...TECH_STACK, ...TECH_STACK];
function TechCarousel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tech",
		"aria-label": "Tech stack",
		className: "relative border-y border-border py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "marquee-wrap relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee-track gap-12 pr-12",
					children: items.map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 items-center gap-3 text-muted-foreground transition-colors hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechIcon, {
							name,
							className: "h-8 w-8"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-medium uppercase tracking-wider",
							children: getTechLabel(name)
						})]
					}, `${name}-${i}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" })
			]
		})
	});
}
function Counter({ to, suffix = "", duration = 1800 }) {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: .3
	});
	const [val, setVal] = (0, import_react.useState)(0);
	const startedRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!inView || startedRef.current) return;
		startedRef.current = true;
		const start = performance_default.now();
		let raf = 0;
		const tick = (now) => {
			const p = Math.min(1, (now - start) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setVal(Math.round(to * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		to,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "font-display text-4xl font-bold gradient-text tabular-nums",
		children: [val, suffix]
	});
}
var SKILL_CHIPS = [
	"HTML5",
	"CSS3",
	"JavaScript (ES6+)",
	"TypeScript",
	"React.js",
	"Vite",
	"Tailwind CSS",
	"Node.js",
	"PHP",
	"MongoDB",
	"Supabase",
	"MySQL",
	"Git & GitHub",
	"Responsive Web Design",
	"REST APIs",
	"Database Design"
];
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: .6 }
	}
};
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						amount: .2
					},
					variants: fadeUp,
					className: "mb-12 max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary",
						children: "About me"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-bold md:text-5xl",
						children: "Building scalable, polished web experiences"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-[1.4fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						whileInView: "show",
						viewport: {
							once: true,
							amount: .15
						},
						variants: fadeUp,
						className: "space-y-5 text-muted-foreground leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Hello! I'm ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: "Jonie Quirino"
								}),
								", a passionate Student Full Stack Web Developer dedicated to building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into functional digital solutions by combining creative design with efficient backend development."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I work across both frontend and backend technologies, handling the complete development process — from designing intuitive user interfaces to building powerful server-side systems and databases. I enjoy solving complex problems, learning new technologies, and turning challenges into opportunities for growth." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"I'm currently seeking opportunities to collaborate, learn, and contribute to innovative projects where I can apply my technical skills and grow as a professional Full Stack Developer.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: "Let's build something amazing together."
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2 pt-4",
								children: SKILL_CHIPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-border bg-surface-glass px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground",
									children: s
								}, s))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						whileInView: "show",
						viewport: {
							once: true,
							amount: .15
						},
						variants: fadeUp,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass rounded-2xl p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: "Current Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-lg font-semibold",
									children: "College Student · Freelancer · Developer"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass rounded-2xl p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: "Specialization"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-1.5 text-sm text-muted-foreground",
									children: [
										"Frontend",
										"Backend",
										"Database",
										"Cloud Services"
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary",
												children: "›"
											}),
											" ",
											s
										]
									}, s))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass rounded-2xl p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: "Goals"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: "Build efficient, scalable, and user-friendly web applications that solve real-world problems while continuously learning modern technologies."
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						amount: .3
					},
					variants: fadeUp,
					className: "mt-16 grid grid-cols-3 gap-4 rounded-3xl glass p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
							to: 5,
							suffix: "+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
							children: "Projects"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-x border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: 15,
								suffix: "+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
								children: "Technologies"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
							to: 1e3,
							suffix: "+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
							children: "Hours Coding"
						})] })
					]
				})
			]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "relative py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary",
					children: "Skills"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-bold md:text-5xl",
					children: "My technical toolkit"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: SKILLS.map((cat, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						amount: .2
					},
					transition: {
						duration: .5,
						delay: ci * .05
					},
					className: "glass rounded-2xl p-6 transition-transform hover:-translate-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold",
						children: cat.category
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 space-y-4",
						children: cat.items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1.5 flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: it.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-foreground",
								children: [it.level, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 overflow-hidden rounded-full bg-white/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { width: 0 },
								whileInView: { width: `${it.level}%` },
								viewport: {
									once: true,
									amount: .4
								},
								transition: {
									duration: 1,
									delay: .2 + i * .08,
									ease: "easeOut"
								},
								className: "h-full rounded-full bg-[image:var(--gradient-primary)]"
							})
						})] }, it.name))
					})]
				}, cat.category))
			})]
		})
	});
}
var ICONS = {
	code: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 18l6-6-6-6M8 6l-6 6 6 6" }),
	layers: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 17l10 5 10-5M2 12l10 5 10-5" })] }),
	database: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "12",
			cy: "5",
			rx: "9",
			ry: "3"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12a9 3 0 0 0 18 0" })
	] }),
	wrench: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.7 6.3a4 4 0 0 0-5.4 5.4l-7 7 2 2 7-7a4 4 0 0 0 5.4-5.4l-3 3-2-2 3-3z" }),
	plug: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 2v6M15 2v6M5 10h14v4a7 7 0 0 1-14 0v-4zM12 21v-3" }) })
};
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "relative py-28 bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-bold md:text-5xl",
					children: "What I can build for you"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						amount: .2
					},
					transition: {
						duration: .5,
						delay: i * .05
					},
					whileHover: { y: -6 },
					className: "group glass rounded-2xl p-7 transition-shadow hover:shadow-[var(--shadow-glow)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "22",
								height: "22",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: ICONS[s.icon]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: s.description
						})
					]
				}, s.title))
			})]
		})
	});
}
var ProjectModal = (0, import_react.lazy)(() => import("./ProjectModal-BG4xSY-k.mjs").then((m) => ({ default: m.ProjectModal })));
function Projects() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		className: "relative py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-12 flex items-end justify-between gap-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary",
						children: "Featured Projects"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-bold md:text-5xl",
						children: "Selected work"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						amount: .15
					},
					transition: {
						duration: .6,
						delay: i % 2 * .1
					},
					className: "group glass overflow-hidden rounded-3xl transition-transform hover:-translate-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[16/10] overflow-hidden bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: p.title,
							loading: "lazy",
							width: 1280,
							height: 800,
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm text-muted-foreground",
								children: p.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] text-muted-foreground",
									children: t
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setActive(p),
										className: "rounded-full bg-[image:var(--gradient-primary)] px-4 py-1.5 text-xs font-medium text-primary-foreground transition-[filter] hover:brightness-110",
										children: "View Details"
									}),
									p.liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: p.liveUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "rounded-full glass px-4 py-1.5 text-xs hover:bg-white/10",
										children: "Live Demo"
									}),
									p.repoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: p.repoUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "rounded-full border border-border px-4 py-1.5 text-xs hover:bg-white/5",
										children: "GitHub"
									})
								]
							})
						]
					})]
				}, p.slug))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: null,
			children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectModal, {
				project: active,
				onClose: () => setActive(null)
			})
		})]
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "relative py-28 bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary",
					children: "Experience"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-bold md:text-5xl",
					children: "Where I've worked"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative pl-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" }), EXPERIENCE.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -30
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						amount: .2
					},
					transition: {
						duration: .5,
						delay: i * .1
					},
					className: "relative mb-8 last:mb-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-[26px] top-2 h-3 w-3 rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-semibold",
									children: e.role
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: e.duration
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-primary",
								children: e.company
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-1 text-sm text-muted-foreground",
								children: e.responsibilities.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "›"
									}), r]
								}, r))
							}),
							e.achievements.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 border-t border-border pt-3",
								children: e.achievements.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "★"
										}),
										" ",
										a
									]
								}, a))
							})
						]
					})]
				}, e.company))]
			})]
		})
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "education",
		className: "relative py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary",
						children: "Education"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-8 font-display text-3xl font-bold md:text-4xl",
						children: "Academic background"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: EDUCATION.map((ed, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .5,
								delay: i * .08
							},
							className: "glass rounded-2xl p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-semibold",
										children: ed.degree
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: ed.year
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-primary",
									children: ed.school
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-1 text-sm text-muted-foreground",
									children: ed.achievements.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "★"
										}), a]
									}, a))
								})
							]
						}, ed.school + i))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary",
						children: "Certifications"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-8 font-display text-3xl font-bold md:text-4xl",
						children: "Credentials"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: CERTIFICATIONS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							href: c.link,
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .5,
								delay: i * .08
							},
							className: "block glass rounded-2xl p-5 transition-transform hover:-translate-y-0.5 hover:border-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base font-semibold",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: c.date
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-primary",
								children: c.issuer
							})]
						}, c.name))
					})
				] })]
			})
		})
	});
}
function Testimonials() {
	const [emblaRef, embla] = useEmblaCarousel({
		loop: true,
		align: "center"
	});
	const [idx, setIdx] = (0, import_react.useState)(0);
	const onSelect = (0, import_react.useCallback)(() => {
		if (!embla) return;
		setIdx(embla.selectedScrollSnap());
	}, [embla]);
	(0, import_react.useEffect)(() => {
		if (!embla) return;
		embla.on("select", onSelect);
		onSelect();
	}, [embla, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "testimonials",
		className: "relative py-28 bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12 max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary",
						children: "Testimonials"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-bold md:text-5xl",
						children: "What people say"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden",
					ref: emblaRef,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex",
						children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "min-w-0 shrink-0 grow-0 basis-full px-4",
							initial: { opacity: .4 },
							animate: { opacity: idx === i ? 1 : .4 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass mx-auto max-w-2xl rounded-3xl p-10 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-4 flex justify-center gap-1 text-primary",
										children: Array.from({ length: t.rating }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" })
										}, j))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-lg leading-relaxed text-foreground md:text-xl",
										children: [
											"\"",
											t.feedback,
											"\""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-5 text-sm text-muted-foreground",
										children: ["— ", t.name]
									})
								]
							})
						}, i))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: TESTIMONIALS.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => embla?.scrollTo(i),
						"aria-label": `Go to slide ${i + 1}`,
						className: `h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-1.5 bg-white/20"}`
					}, i))
				})
			]
		})
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getGithubStats = createServerFn({ method: "GET" }).handler(createSsrRpc("f5ddb5f2df9ced8daed0f40b243f2db2e93dab13b2afcba43ad3b69cb0005943"));
function GithubStats() {
	const fn = useServerFn(getGithubStats);
	const { data, isLoading } = useQuery({
		queryKey: ["github-stats"],
		queryFn: () => fn(),
		staleTime: 600 * 1e3
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "github",
		className: "relative py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary",
							children: "GitHub"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl font-bold md:text-5xl",
							children: "Open source activity"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SOCIALS.github,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-sm text-primary hover:underline",
						children: "@JonYang0108 ↗"
					})]
				}),
				isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "glass h-28 animate-pulse rounded-2xl" }, i))
				}),
				data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Public Repos",
							value: data.user?.public_repos ?? 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Followers",
							value: data.user?.followers ?? 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Following",
							value: data.user?.following ?? 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							className: "glass rounded-2xl p-6 md:col-span-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-4 text-sm uppercase tracking-widest text-muted-foreground",
								children: "Top Languages"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: data.topLanguages.length > 0 ? data.topLanguages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full border border-border bg-surface-glass px-3 py-1 text-xs",
									children: [
										l.name,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted-foreground",
											children: ["·", l.count]
										})
									]
								}, l.name)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "Data unavailable"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							className: "glass rounded-2xl p-6 md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-4 text-sm uppercase tracking-widest text-muted-foreground",
								children: "Recent Activity"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2.5",
								children: data.recentRepos.length > 0 ? data.recentRepos.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: r.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex flex-wrap items-baseline justify-between gap-2 rounded-lg p-2 -mx-2 hover:bg-white/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-sm text-foreground",
										children: r.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-muted-foreground",
										children: [
											r.language ?? "—",
											" · ",
											new Date(r.pushed).toLocaleDateString()
										]
									})]
								}) }, r.name)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-xs text-muted-foreground",
									children: "Recent activity unavailable."
								})
							})]
						})
					]
				})
			]
		})
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: { once: true },
		className: "glass rounded-2xl p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-display text-4xl font-bold gradient-text tabular-nums",
			children: value
		})]
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "relative py-28 bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary",
					children: "Process"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-bold md:text-5xl",
					children: "How I work"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-3",
				children: PROCESS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						amount: .2
					},
					transition: {
						duration: .4,
						delay: i * .05
					},
					whileHover: { y: -4 },
					className: "group glass rounded-2xl p-6 transition-colors hover:border-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl font-bold gradient-text",
								children: String(p.step).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-primary transition-all group-hover:w-10" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: p.desc
						})
					]
				}, p.step))
			})]
		})
	});
}
var schema = object({
	name: string().min(2, "Name is too short").max(80),
	email: email("Invalid email"),
	subject: string().min(2, "Subject is too short").max(120),
	message: string().min(10, "Message is too short").max(2e3)
});
var SocialLink = ({ href, label, children }) => {
	if (!href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		title: "Coming soon",
		"aria-label": `${label} (coming soon)`,
		className: "glass flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full text-muted-foreground opacity-50",
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": label,
		className: "glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:text-foreground",
		children
	});
};
function Contact() {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const onSubmit = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const data = Object.fromEntries(fd.entries());
		const parsed = schema.safeParse(data);
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
			return;
		}
		setSubmitting(true);
		await new Promise((r) => setTimeout(r, 700));
		setSubmitting(false);
		toast.success("Message received — I'll get back to you soon.");
		e.target.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-bold md:text-5xl",
					children: "Let's build something together"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
					onSubmit,
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "glass space-y-4 rounded-3xl p-7 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "name",
								label: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "email",
								type: "email",
								label: "Email"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "subject",
							label: "Subject"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "message",
							label: "Message",
							textarea: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: submitting,
							className: "inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-[filter] hover:brightness-110 disabled:opacity-60",
							children: [submitting ? "Sending…" : "Send Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								width: "14",
								height: "14",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.5",
								strokeLinecap: "round",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M13 6l6 6-6 6" })
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							label: "Email",
							value: CONTACT.email,
							href: `mailto:${CONTACT.email}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							label: "Phone",
							value: CONTACT.phone,
							href: `tel:${CONTACT.phone}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							label: "Location",
							value: CONTACT.location
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-2xl p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-xs uppercase tracking-widest text-muted-foreground",
								children: "Social"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
										href: SOCIALS.github,
										label: "GitHub",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.2 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
										href: SOCIALS.linkedin,
										label: "LinkedIn",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
										href: SOCIALS.facebook,
										label: "Facebook",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
										href: SOCIALS.instagram,
										label: "Instagram",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.4.3 1.1.4 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.4.2-1.1.3-2.3.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.3-1.1-.4-2.3-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 1.1-.3 2.3-.4 1.2-.1 1.6-.1 4.8-.1zm0 5.8a4 4 0 100 8 4 4 0 000-8zm5.2-.3a.9.9 0 11-1.8 0 .9.9 0 011.8 0zM12 14.6a2.6 2.6 0 110-5.2 2.6 2.6 0 010 5.2z" })
										})
									})
								]
							})]
						})
					]
				})]
			})]
		})
	});
}
function Field({ name, label, type = "text", textarea = false }) {
	const cls = "w-full rounded-xl border border-border bg-surface-glass px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		}), textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			name,
			rows: 5,
			className: cls,
			placeholder: `Your ${label.toLowerCase()}…`,
			required: true
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			className: cls,
			placeholder: `Your ${label.toLowerCase()}…`,
			required: true
		})]
	});
}
function InfoCard({ label, value, href }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-2xl p-5 transition-colors hover:border-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-base text-foreground",
			children: value
		})]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		children: inner
	}) : inner;
}
function Footer() {
	const [showTop, setShowTop] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShowTop(window.scrollY > 600);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-border bg-surface/40 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#hero",
						className: "font-display text-xl font-bold tracking-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-text",
							children: "Jonie"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ".dev" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-sm text-sm text-muted-foreground",
						children: "Student Full Stack Web Developer building modern, responsive web experiences."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs uppercase tracking-widest text-muted-foreground",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid grid-cols-2 gap-y-1.5 text-sm",
						children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-muted-foreground hover:text-foreground",
							children: l.label
						}) }, l.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs uppercase tracking-widest text-muted-foreground",
							children: "Get in touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: CONTACT.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: CONTACT.location
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SOCIALS.github,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-muted-foreground hover:text-foreground",
								children: "GitHub"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SOCIALS.facebook,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-muted-foreground hover:text-foreground",
								children: "Facebook"
							})]
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-10 flex max-w-6xl items-center justify-between border-t border-border px-6 pt-6 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 ITJVQ — All Rights Reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Built with React, TypeScript & Tailwind" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showTop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
				href: "#hero",
				initial: {
					opacity: 0,
					scale: .5
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .5
				},
				"aria-label": "Back to top",
				className: "fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					width: "18",
					height: "18",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2.5",
					strokeLinecap: "round",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 15l-6-6-6 6" })
				})
			}) })
		]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageLoader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorGlow, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechCarousel, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubStats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
	] });
}
//#endregion
export { Index as component };
