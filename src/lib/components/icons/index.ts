import type { HTMLAttributes } from "svelte/elements";
import GitHub from "./github.svelte";
import CSS from "./css.svelte";
import TypeScript from "./typescript.svelte";
import Twitter from "./twitter.svelte";
import Svelte from "./svelte.svelte";
import Terminal from "./terminal.svelte";
import Code from "./code.svelte";
import MCP from "./mcp.svelte";
import Markdown from "./markdown.svelte";
import Facebook from "./facebook.svelte";
import Instagram from "./instagram.svelte";
import LinkedIn from "./linkedin.svelte";
import Twitch from "./twitch.svelte";
import YouTube from "./youtube.svelte";
import DollarIcon from "./dollar-icon.svelte";

export interface Props extends HTMLAttributes<SVGElement> {
	class?: string;
	width?: number;
	height?: number;
}

export {
	GitHub,
	CSS,
	TypeScript,
	Twitter,
	Svelte,
	Terminal,
	Code as CodeIcon,
	MCP,
	Markdown,
	Facebook,
	Instagram,
	LinkedIn,
	Twitch,
	YouTube,
	DollarIcon,
};
