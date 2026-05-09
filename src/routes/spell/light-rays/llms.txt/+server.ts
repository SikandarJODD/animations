import type { RequestHandler } from "./$types";
import docs from "../docs.md?raw";

export const GET: RequestHandler = async () => {
	return new Response(docs, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};
