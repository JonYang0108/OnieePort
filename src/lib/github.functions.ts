import { createServerFn } from "@tanstack/react-start";

export type GithubStats = {
  user: {
    login: string;
    name: string | null;
    bio: string | null;
    followers: number;
    following: number;
    public_repos: number;
    avatar_url: string;
    html_url: string;
  } | null;
  topLanguages: { name: string; count: number }[];
  recentRepos: {
    name: string;
    url: string;
    description: string | null;
    stars: number;
    language: string | null;
    pushed: string;
  }[];
  error: string | null;
};

export const getGithubStats = createServerFn({ method: "GET" }).handler(
  async (): Promise<GithubStats> => {
    const username = "JonYang0108";
    try {
      const headers: Record<string, string> = {
        "User-Agent": "portfolio",
        Accept: "application/vnd.github+json",
      };
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, { headers }),
        fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`, {
          headers,
        }),
      ]);
      if (!userRes.ok || !reposRes.ok) {
        return {
          user: null,
          topLanguages: [],
          recentRepos: [],
          error: `GitHub API ${userRes.status}/${reposRes.status}`,
        };
      }
      const user = await userRes.json();
      const repos: Array<{
        name: string;
        html_url: string;
        description: string | null;
        stargazers_count: number;
        language: string | null;
        pushed_at: string;
        fork: boolean;
      }> = await reposRes.json();
      const own = repos.filter((r) => !r.fork);
      const langCount = new Map<string, number>();
      for (const r of own)
        if (r.language) langCount.set(r.language, (langCount.get(r.language) ?? 0) + 1);
      const topLanguages = [...langCount.entries()]
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 6);
      const recentRepos = own
        .sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at))
        .slice(0, 6)
        .map((r) => ({
          name: r.name,
          url: r.html_url,
          description: r.description,
          stars: r.stargazers_count,
          language: r.language,
          pushed: r.pushed_at,
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
          html_url: user.html_url,
        },
        topLanguages,
        recentRepos,
        error: null,
      };
    } catch (err) {
      return {
        user: null,
        topLanguages: [],
        recentRepos: [],
        error: err instanceof Error ? err.message : "Unknown error",
      };
    }
  },
);
