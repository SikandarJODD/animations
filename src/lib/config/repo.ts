type GitHubRepo = {
	owner: string;
	url: string;
	name: string;
	fallback_stars: number;
};
type JsRepo = {
	name: string;
	url: string;
};

export let github_repo: GitHubRepo = {
	owner: "SikandarJODD",
	url: "https://github.com/SikandarJODD/animations",
	name: "animations",
	fallback_stars: 300,
};

export let jsrepo: JsRepo = {
	name: "@sv/project",
	url: "https://www.jsrepo.com/@sv/loaders",
};
