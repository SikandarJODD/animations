import { createContext } from "svelte";
import type { LayoutMotionNamespace, Options } from "motion-sv";

export type AnimatedBackgroundContext = {
	readonly activeId: string | null;
	readonly backgroundClass: string | undefined;
	readonly transition: Options["transition"];
	readonly enableHover: boolean;
	readonly layoutId: string;
	readonly layout: LayoutMotionNamespace;
	setActiveId: (id: string | null) => void;
};

export const [getAnimatedBackgroundContext, setAnimatedBackgroundContext] =
	createContext<AnimatedBackgroundContext>();
