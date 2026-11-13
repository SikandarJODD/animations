class ScrollState {
	#scrolled = $state(false);

	readonly #downThreshold: number;
	readonly #upThreshold: number;

	constructor(downThreshold: number, upThreshold?: number) {
		this.#downThreshold = downThreshold;
		this.#upThreshold = upThreshold ?? downThreshold / 2;

		$effect(() => {
			const handleScroll = () => {
				const y = window.scrollY;
				// Hysteresis Logic: Only update scrolled state when crossing thresholds in the appropriate direction
				this.#scrolled = this.#scrolled
					? y > this.#upThreshold // currently scrolled → only reset below upThreshold
					: y > this.#downThreshold; // currently not scrolled → only set above downThreshold
			};

			window.addEventListener("scroll", handleScroll, { passive: true });
			handleScroll();

			return () => window.removeEventListener("scroll", handleScroll);
		});
	}

	get scrolled(): boolean {
		return this.#scrolled;
	}
}

export function createScroll(downThreshold: number, upThreshold?: number): ScrollState {
	return new ScrollState(downThreshold, upThreshold);
}
