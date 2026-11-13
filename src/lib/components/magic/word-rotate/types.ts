import type { MotionHTMLAttributes, MotionProps } from "motion-sv";
import type { HTMLAttributes } from "svelte/elements";
import type { WithElementRef } from "#lib/utils.js";

export type RotatingTextContextType = {
	currentText: string;
	y: number;
	isInView: boolean;
};

export type UseIsInViewOptions = {
	inView?: boolean;
	inViewMargin?: string;
	inViewOnce?: boolean;
};

export type RotatingTextProps = Omit<MotionProps, "children"> & MotionHTMLAttributes<"div">;

export type RotatingTextContainerProps = WithElementRef<HTMLAttributes<HTMLDivElement>> &
	UseIsInViewOptions & {
		content: string | string[];
		duration?: number;
		y?: number;
		delay?: number;
		textProps?: RotatingTextProps;
	};
