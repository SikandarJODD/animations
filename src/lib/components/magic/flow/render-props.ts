import { createAttachmentKey } from "svelte/attachments";

export function withElementAttachment<T extends HTMLElement, P extends Record<string, unknown>>(
	props: P,
	setter: (element: T | null) => void
) {
	const key = createAttachmentKey();

	return {
		...props,
		[key]: (element: T) => {
			setter(element);
			return () => setter(null);
		},
	} as P;
}
