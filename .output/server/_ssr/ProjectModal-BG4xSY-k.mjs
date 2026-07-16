import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProjectModal-BG4xSY-k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectModal({ project, onClose }) {
	(0, import_react.useEffect)(() => {
		const onKey = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: onClose,
		className: "fixed inset-0 z-[80] bg-background/80 backdrop-blur-md"
	}, "backdrop"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 30,
			scale: .96
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 30,
			scale: .96
		},
		transition: { duration: .3 },
		className: "fixed inset-x-4 top-[5vh] z-[90] mx-auto max-h-[90vh] max-w-3xl overflow-y-auto rounded-3xl glass shadow-[var(--shadow-elegant)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/8] overflow-hidden bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.image,
				alt: project.title,
				className: "h-full w-full object-cover",
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				"aria-label": "Close",
				className: "absolute right-4 top-4 rounded-full glass p-2 hover:bg-white/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					width: "18",
					height: "18",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					strokeLinecap: "round",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6L6 18" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l12 12" })]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6 p-7 md:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-3xl font-bold",
					children: project.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: project.tagline
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Project Overview",
					children: project.overview
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Problem",
					children: project.problem
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Solution",
					children: project.solution
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-2 text-xs uppercase tracking-widest text-primary",
					children: "Key Features"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1.5 text-sm text-muted-foreground",
					children: project.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "›"
						}), f]
					}, f))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-2 text-xs uppercase tracking-widest text-primary",
					children: "Tech Stack"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-2 text-sm text-muted-foreground sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-foreground",
							children: "Frontend"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: project.stack.frontend })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-foreground",
							children: "Backend"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: project.stack.backend })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-foreground",
							children: "Database"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: project.stack.database })] })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Future Improvements",
					children: project.future
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2 pt-2",
					children: [project.liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: project.liveUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "rounded-full bg-[image:var(--gradient-primary)] px-5 py-2 text-sm font-medium text-primary-foreground",
						children: "Live Demo"
					}), project.repoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: project.repoUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "rounded-full glass px-5 py-2 text-sm",
						children: "GitHub"
					})]
				})
			]
		})]
	}, "modal")] });
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
		className: "mb-2 text-xs uppercase tracking-widest text-primary",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground leading-relaxed",
		children
	})] });
}
//#endregion
export { ProjectModal };
