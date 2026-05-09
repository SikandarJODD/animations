export type RGBColor = [number, number, number];

export interface Uniforms {
	S: number;
	H: number;
	P: [number, number, number, number];
	Q: [number, number, number, number];
	C1: [number, number, number];
	C2: [number, number, number];
}

export function hashString(value: string): [number, number] {
	let h1 = 0xdeadbeef;
	let h2 = 0x41c6ce57;

	for (let index = 0; index < value.length; index += 1) {
		const charCode = value.charCodeAt(index);
		h1 = Math.imul(h1 ^ charCode, 2654435761);
		h2 = Math.imul(h2 ^ charCode, 1597334677);
	}

	h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
	h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
	h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
	h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

	return [h1 >>> 0, h2 >>> 0];
}

export function mulberry32(seed: number) {
	return () => {
		seed |= 0;
		seed = (seed + 0x6d2b79f5) | 0;
		let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

export function deriveHue(hash: [number, number]): number {
	const bytes: number[] = [];

	for (let index = 0; index < 4; index += 1) {
		bytes.push((hash[0] >> (index * 8)) & 0xff);
		bytes.push((hash[1] >> (index * 8)) & 0xff);
	}

	return bytes.reduce((sum, byte) => sum + byte, 0) % 360;
}

export function oklchToRgb(lightness: number, chroma: number, hue: number): RGBColor {
	const radians = (hue * Math.PI) / 180;
	const a = chroma * Math.cos(radians);
	const b = chroma * Math.sin(radians);
	const lPrime = lightness + 0.3963377774 * a + 0.2158037573 * b;
	const mPrime = lightness - 0.1055613458 * a - 0.0638541728 * b;
	const sPrime = lightness - 0.0894841775 * a - 1.291485548 * b;
	const l = lPrime * lPrime * lPrime;
	const m = mPrime * mPrime * mPrime;
	const s = sPrime * sPrime * sPrime;

	const red = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
	const green = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
	const blue = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;

	const gammaCorrect = (channel: number) =>
		channel <= 0.0031308 ? 12.92 * channel : 1.055 * Math.pow(channel, 1 / 2.4) - 0.055;

	return [
		Math.round(Math.max(0, Math.min(1, gammaCorrect(red))) * 255),
		Math.round(Math.max(0, Math.min(1, gammaCorrect(green))) * 255),
		Math.round(Math.max(0, Math.min(1, gammaCorrect(blue))) * 255),
	];
}

export function getColors(hash: [number, number]): [RGBColor, RGBColor] {
	const hue = deriveHue(hash);
	return [oklchToRgb(0.8, 0.18, hue), oklchToRgb(0.45, 0.18, hue)];
}

// We derive every visual input from the same name seed so the avatar is stable across reloads.
export function computeUniforms(name: string): Uniforms {
	const hash = hashString(name);
	const random = mulberry32(hash[0]);
	const [colorOne, colorTwo] = getColors(hash);
	const points: number[] = [];

	for (let index = 0; index < 8; index += 1) {
		points.push(random());
	}

	return {
		S: hash[0] / 4294967296,
		H: deriveHue(hash) / 360,
		P: [points[0], points[1], points[2], points[3]],
		Q: [points[4], points[5], points[6], points[7]],
		C1: [colorOne[0] / 255, colorOne[1] / 255, colorOne[2] / 255],
		C2: [colorTwo[0] / 255, colorTwo[1] / 255, colorTwo[2] / 255],
	};
}
