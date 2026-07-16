import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/github.functions-DcFaKyBz.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getGithubStats_createServerFn_handler = createServerRpc({
	id: "f5ddb5f2df9ced8daed0f40b243f2db2e93dab13b2afcba43ad3b69cb0005943",
	name: "getGithubStats",
	filename: "src/lib/github.functions.ts"
}, (opts) => getGithubStats.__executeServer(opts));
var getGithubStats = createServerFn({ method: "GET" }).handler(getGithubStats_createServerFn_handler, async () => {
	const username = "JonYang0108";
	try {
		const headers = {
			"User-Agent": "portfolio",
			Accept: "application/vnd.github+json"
		};
		const [userRes, reposRes] = await Promise.all([fetch(`https://api.github.com/users/${username}`, { headers }), fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`, { headers })]);
		if (!userRes.ok || !reposRes.ok) return {
			user: null,
			topLanguages: [],
			recentRepos: [],
			error: `GitHub API ${userRes.status}/${reposRes.status}`
		};
		const user = await userRes.json();
		const own = (await reposRes.json()).filter((r) => !r.fork);
		const langCount = /* @__PURE__ */ new Map();
		for (const r of own) if (r.language) langCount.set(r.language, (langCount.get(r.language) ?? 0) + 1);
		const topLanguages = [...langCount.entries()].map(([name, count]) => ({
			name,
			count
		})).sort((a, b) => b.count - a.count).slice(0, 6);
		const recentRepos = own.sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at)).slice(0, 6).map((r) => ({
			name: r.name,
			url: r.html_url,
			description: r.description,
			stars: r.stargazers_count,
			language: r.language,
			pushed: r.pushed_at
		}));
		return {
			user: {
				login: user.login,
				name: user.name,
				bio: user.bio,
				followers: user.followers,
				following: user.following,
				public_repos: user.public_repos,
				avatar_url: user.avatar_url,
				html_url: user.html_url
			},
			topLanguages,
			recentRepos,
			error: null
		};
	} catch (err) {
		return {
			user: null,
			topLanguages: [],
			recentRepos: [],
			error: err instanceof Error ? err.message : "Unknown error"
		};
	}
});
//#endregion
export { getGithubStats_createServerFn_handler };
