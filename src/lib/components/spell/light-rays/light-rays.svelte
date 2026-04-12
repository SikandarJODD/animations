<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import * as THREE from "three";

	interface AnimationConfig {
		animate: boolean;
		speed: number;
	}

	interface SingleColorConfig {
		mode: "single";
		color: string;
	}

	interface MultiColorConfig {
		mode: "multi";
		color1: string;
		color2: string;
	}

	interface RandomColorConfig {
		mode: "random";
	}

	type RaysColorConfig = SingleColorConfig | MultiColorConfig | RandomColorConfig;

	interface Props {
		intensity?: number;
		rays?: number;
		reach?: number;
		position?: number;
		radius?: string;
		backgroundColor?: string;
		animation?: AnimationConfig;
		raysColor?: RaysColorConfig;
		class?: string;
	}

	const RAY_Y_POSITION_1 = -0.4;
	const RAY_Y_POSITION_2 = -0.5;

	const VERTEX_SHADER = `
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

	const FRAGMENT_SHADER = `
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform vec4 u_colors[2];
uniform float u_intensity;
uniform float u_rays;
uniform float u_reach;
uniform vec2 u_rayPos1;
uniform vec2 u_rayPos2;

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed) {
    vec2 sourceToCoord = coord - raySource;
    float cosAngle = dot(normalize(sourceToCoord), rayRefDirection);
    float diagonal = length(u_resolution);

    return clamp(
        (.45 + 0.15 * sin(cosAngle * seedA + u_time * speed)) +
        (0.3 + 0.2 * cos(-cosAngle * seedB + u_time * speed)),
        u_reach, 1.0) *
        clamp((diagonal - length(sourceToCoord)) / diagonal, u_reach, 1.0);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.y = 1.0 - uv.y;
    vec2 coord = vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y);
    float speed = u_rays * 10.0;

    vec2 rayPos1 = u_rayPos1;
    vec2 rayRefDir1 = normalize(vec2(1.0, -0.116));
    float raySeedA1 = 36.2214 * speed;
    float raySeedB1 = 21.11349 * speed;
    float raySpeed1 = 1.5 * speed;

    vec2 rayPos2 = u_rayPos2;
    vec2 rayRefDir2 = normalize(vec2(1.0, 0.241));
    float raySeedA2 = 22.39910 * speed;
    float raySeedB2 = 18.0234 * speed;
    float raySpeed2 = 1.1 * speed;

    float strength1 = rayStrength(rayPos1, rayRefDir1, coord, raySeedA1, raySeedB1, raySpeed1);
    float strength2 = rayStrength(rayPos2, rayRefDir2, coord, raySeedA2, raySeedB2, raySpeed2);

    float brightness = 1.0 * u_reach - (coord.y / u_resolution.y);
    float attenuation = clamp(brightness + (0.5 + u_intensity), 0.0, 1.0);

    float alpha1 = strength1 * attenuation * u_colors[0].a;
    float alpha2 = strength2 * attenuation * u_colors[1].a;

    vec3 premultColor1 = u_colors[0].rgb * alpha1;
    vec3 premultColor2 = u_colors[1].rgb * alpha2;

    vec3 blendedColor = premultColor1 + premultColor2;
    float blendedAlpha = alpha1 + alpha2 * (1.0 - alpha1);

    vec3 finalRGB = blendedColor / max(blendedAlpha, 0.0001);

    gl_FragColor = vec4(finalRGB * blendedAlpha, blendedAlpha);
}
`;

	function colorToRGB(hex: string): [number, number, number] {
		let r = 1,
			g = 1,
			b = 1;
		if (hex.startsWith("rgba(")) {
			const parts = hex.slice(5, -1).split(",");
			r = parseInt(parts[0]) / 255;
			g = parseInt(parts[1]) / 255;
			b = parseInt(parts[2]) / 255;
		} else if (hex.startsWith("rgb(")) {
			const parts = hex.slice(4, -1).split(",");
			r = parseInt(parts[0]) / 255;
			g = parseInt(parts[1]) / 255;
			b = parseInt(parts[2]) / 255;
		} else if (hex.startsWith("#")) {
			const c = hex.slice(1);
			if (c.length === 3) {
				r = parseInt(c[0] + c[0], 16) / 255;
				g = parseInt(c[1] + c[1], 16) / 255;
				b = parseInt(c[2] + c[2], 16) / 255;
			} else if (c.length >= 6) {
				r = parseInt(c.slice(0, 2), 16) / 255;
				g = parseInt(c.slice(2, 4), 16) / 255;
				b = parseInt(c.slice(4, 6), 16) / 255;
			}
		}
		return [r, g, b];
	}

	function hslToRgb(h: number, s: number, l: number): [number, number, number] {
		s /= 100;
		l /= 100;
		const c = (1 - Math.abs(2 * l - 1)) * s;
		const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
		const m = l - c / 2;
		let r = 0,
			g = 0,
			b = 0;
		if (h >= 0 && h < 60) { r = c; g = x; b = 0; }
		else if (h >= 60 && h < 120) { r = x; g = c; b = 0; }
		else if (h >= 120 && h < 180) { r = 0; g = c; b = x; }
		else if (h >= 180 && h < 240) { r = 0; g = x; b = c; }
		else if (h >= 240 && h < 300) { r = x; g = 0; b = c; }
		else if (h >= 300 && h < 360) { r = c; g = 0; b = x; }
		return [r + m, g + m, b + m];
	}

	function mapRange(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
		const percentage = (value - fromLow) / (fromHigh - fromLow);
		return toLow + percentage * (toHigh - toLow);
	}

	let {
		intensity = 13,
		rays = 32,
		reach = 16,
		position = 50,
		radius = "0px",
		backgroundColor = "#000",
		animation = { animate: true, speed: 10 },
		raysColor = { mode: "single", color: "#639AFF" },
		class: className = "",
	}: Props = $props();

	let containerEl: HTMLDivElement;
	let mesh: THREE.Mesh | null = null;
	let frameId: number | undefined;
	let renderer: THREE.WebGLRenderer | null = null;
	let geometry: THREE.PlaneGeometry | null = null;
	let material: THREE.ShaderMaterial | null = null;

	function getColors(): [[number, number, number], [number, number, number]] {
		if (raysColor.mode === "random") {
			const h = Math.random() * 360;
			const s = 60 + Math.random() * 40;
			return [hslToRgb(h, s, 50), hslToRgb(h, s, 65)];
		}
		let color1 = "#fff";
		let color2 = "#fff";
		if (raysColor.mode === "single") {
			color1 = raysColor.color;
			color2 = raysColor.color;
		} else if (raysColor.mode === "multi") {
			color1 = raysColor.color1;
			color2 = raysColor.color2;
		}
		return [colorToRGB(color1), colorToRGB(color2)];
	}

	onMount(() => {
		const container = containerEl;
		const [color1RGB, color2RGB] = getColors();

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		camera.position.z = 5;

		renderer = new THREE.WebGLRenderer({
			preserveDrawingBuffer: true,
			premultipliedAlpha: true,
			alpha: true,
			antialias: true,
			precision: "highp",
			powerPreference: "high-performance",
		});

		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setPixelRatio(1);
		container.appendChild(renderer.domElement);

		geometry = new THREE.PlaneGeometry(1024, 1024);
		material = new THREE.ShaderMaterial({
			fragmentShader: FRAGMENT_SHADER,
			vertexShader: VERTEX_SHADER,
			uniforms: {
				u_colors: {
					value: [
						new THREE.Vector4(color1RGB[0], color1RGB[1], color1RGB[2], 1),
						new THREE.Vector4(color2RGB[0], color2RGB[1], color2RGB[2], 1),
					],
				},
				u_intensity: { value: mapRange(intensity, 0, 100, 0, 0.5) },
				u_rays: { value: mapRange(rays, 0, 100, 0, 0.3) },
				u_reach: { value: mapRange(reach, 0, 100, 0, 0.5) },
				u_time: { value: Math.random() * 10000 },
				u_mouse: { value: [0, 0] },
				u_resolution: { value: [container.clientWidth, container.clientHeight] },
				u_rayPos1: {
					value: [
						(position / 100) * container.clientWidth,
						RAY_Y_POSITION_1 * container.clientHeight,
					],
				},
				u_rayPos2: {
					value: [
						(position / 100 + 0.02) * container.clientWidth,
						RAY_Y_POSITION_2 * container.clientHeight,
					],
				},
			},
			wireframe: false,
			dithering: false,
			side: THREE.DoubleSide,
		});

		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		let lastTime = 0;
		const animate = (time: number) => {
			if (!animation.animate) {
				lastTime = time;
			}
			const delta = time - lastTime;
			lastTime = time;

			if (mesh?.material instanceof THREE.ShaderMaterial) {
				if (animation.animate) {
					mesh.material.uniforms.u_time.value += (delta * animation.speed) / 1000 / 10;
				}
			}

			renderer!.render(scene, camera);
			frameId = requestAnimationFrame(animate);
		};

		frameId = requestAnimationFrame(animate);
	});

	onDestroy(() => {
		if (frameId !== undefined) cancelAnimationFrame(frameId);
		renderer?.dispose();
		geometry?.dispose();
		material?.dispose();
		if (renderer && containerEl?.contains(renderer.domElement)) {
			containerEl.removeChild(renderer.domElement);
		}
	});

	$effect(() => {
		if (mesh?.material instanceof THREE.ShaderMaterial && containerEl) {
			const mat = mesh.material;
			const [color1RGB, color2RGB] = getColors();
			mat.uniforms.u_colors.value = [
				new THREE.Vector4(color1RGB[0], color1RGB[1], color1RGB[2], 1),
				new THREE.Vector4(color2RGB[0], color2RGB[1], color2RGB[2], 1),
			];
			mat.uniforms.u_intensity.value = mapRange(intensity, 0, 100, 0, 0.5);
			mat.uniforms.u_rays.value = mapRange(rays, 0, 100, 0, 0.3);
			mat.uniforms.u_reach.value = mapRange(reach, 0, 100, 0, 0.5);
			mat.uniforms.u_rayPos1.value = [
				(position / 100) * containerEl.clientWidth,
				RAY_Y_POSITION_1 * containerEl.clientHeight,
			];
			mat.uniforms.u_rayPos2.value = [
				(position / 100 + 0.02) * containerEl.clientWidth,
				RAY_Y_POSITION_2 * containerEl.clientHeight,
			];
		}
	});
</script>

<div
	bind:this={containerEl}
	class={className}
	style="position: absolute; inset: 0; z-index: -1; border-radius: {radius}; overflow: hidden; background-color: {backgroundColor};"
></div>
