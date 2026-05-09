import type { RGBColor, Uniforms } from "./utils";

const VERT_SRC = "attribute vec2 a;void main(){gl_Position=vec4(a,0,1);}";

const FRAG_SRC = `precision mediump float;
uniform vec2 R;
uniform float S,H;
uniform vec4 P,Q;
uniform vec3 C1,C2;
uniform float T;
#define UV (gl_FragCoord.xy/R)

void main(){
  vec2 uv=UV;
  vec2 b1=vec2(P.x,P.y);
  vec2 b2=vec2(P.z,P.w);
  vec2 b3=vec2(Q.x,Q.y);
  vec2 c1=b1+vec2(sin(T*.7+b1.x*6.)*.08, cos(T*.9+b1.y*6.)*.08);
  vec2 c2=b2+vec2(sin(T*.6+2.1)*.1, cos(T*.8+1.3)*.07);
  vec2 c3=b3+vec2(sin(T*.5+4.2)*.07, cos(T*1.1+3.7)*.09);
  float breath=1.+sin(T*1.3)*.06;
  float d1=(1.-length(uv-c1)*1.5)*breath;
  float d2=(1.-length(uv-c2)*1.5)*(1.+sin(T*1.7+1.)*.05);
  float d3=(1.-length(uv-c3)*1.5)*(1.+sin(T*1.1+2.)*.05);
  vec3 col=vec3(0);
  col=1.-(1.-col)*(1.-C1*max(d1,0.));
  col=1.-(1.-col)*(1.-C2*max(d2,0.));
  vec3 c3col=mix(C1,C2,.5+sin(T*.4)*.15);
  col=1.-(1.-col)*(1.-c3col*max(d3,0.));
  col=clamp(col,0.,1.);
  gl_FragColor=vec4(col,1);
}`;

interface WebGLRenderer {
	gl: WebGLRenderingContext;
	canvas: HTMLCanvasElement;
	program: WebGLProgram;
	vertexBuffer: WebGLBuffer;
	positionAttribute: number;
	resolutionUniform: WebGLUniformLocation | null;
	seedUniform: WebGLUniformLocation | null;
	hueUniform: WebGLUniformLocation | null;
	pointsPUniform: WebGLUniformLocation | null;
	pointsQUniform: WebGLUniformLocation | null;
	colorOneUniform: WebGLUniformLocation | null;
	colorTwoUniform: WebGLUniformLocation | null;
	timeUniform: WebGLUniformLocation | null;
}

let cachedRenderer: WebGLRenderer | null = null;
let rendererInitAttempted = false;

function compileShader(
	gl: WebGLRenderingContext,
	type: number,
	source: string
): WebGLShader | null {
	const shader = gl.createShader(type);
	if (!shader) return null;

	gl.shaderSource(shader, source);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		gl.deleteShader(shader);
		return null;
	}

	return shader;
}

function createProgram(
	gl: WebGLRenderingContext,
	vertexShader: WebGLShader,
	fragmentShader: WebGLShader
): WebGLProgram | null {
	const program = gl.createProgram();
	if (!program) return null;

	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);

	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		gl.deleteProgram(program);
		return null;
	}

	return program;
}

// The GL program is cached at module scope so multiple avatars reuse one tiny renderer.
export function ensureWebGLRenderer(): WebGLRenderer | null {
	if (rendererInitAttempted) {
		return cachedRenderer;
	}

	rendererInitAttempted = true;

	if (typeof document === "undefined") {
		return null;
	}

	const canvas = document.createElement("canvas");
	canvas.width = 64;
	canvas.height = 64;

	const gl = canvas.getContext("webgl", {
		antialias: false,
		depth: false,
		preserveDrawingBuffer: true,
	});

	if (!gl) {
		return null;
	}

	const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERT_SRC);
	const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SRC);

	if (!vertexShader || !fragmentShader) {
		if (vertexShader) gl.deleteShader(vertexShader);
		if (fragmentShader) gl.deleteShader(fragmentShader);
		return null;
	}

	const program = createProgram(gl, vertexShader, fragmentShader);
	gl.deleteShader(vertexShader);
	gl.deleteShader(fragmentShader);

	if (!program) {
		return null;
	}

	const vertexBuffer = gl.createBuffer();
	if (!vertexBuffer) {
		gl.deleteProgram(program);
		return null;
	}

	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(
		gl.ARRAY_BUFFER,
		new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
		gl.STATIC_DRAW
	);

	const positionAttribute = gl.getAttribLocation(program, "a");

	if (positionAttribute < 0) {
		gl.deleteBuffer(vertexBuffer);
		gl.deleteProgram(program);
		return null;
	}

	cachedRenderer = {
		gl,
		canvas,
		program,
		vertexBuffer,
		positionAttribute,
		resolutionUniform: gl.getUniformLocation(program, "R"),
		seedUniform: gl.getUniformLocation(program, "S"),
		hueUniform: gl.getUniformLocation(program, "H"),
		pointsPUniform: gl.getUniformLocation(program, "P"),
		pointsQUniform: gl.getUniformLocation(program, "Q"),
		colorOneUniform: gl.getUniformLocation(program, "C1"),
		colorTwoUniform: gl.getUniformLocation(program, "C2"),
		timeUniform: gl.getUniformLocation(program, "T"),
	};

	return cachedRenderer;
}

export function renderWebGLToCanvas(
	targetCanvas: HTMLCanvasElement,
	uniforms: Uniforms,
	time: number
): boolean {
	const renderer = ensureWebGLRenderer();
	if (!renderer) {
		return false;
	}

	const { gl, canvas, program, vertexBuffer } = renderer;
	const width = Math.max(1, targetCanvas.width);
	const height = Math.max(1, targetCanvas.height);

	if (canvas.width !== width || canvas.height !== height) {
		canvas.width = width;
		canvas.height = height;
	}

	gl.viewport(0, 0, width, height);
	gl.useProgram(program);
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.enableVertexAttribArray(renderer.positionAttribute);
	gl.vertexAttribPointer(renderer.positionAttribute, 2, gl.FLOAT, false, 0, 0);
	gl.uniform2f(renderer.resolutionUniform, width, height);
	gl.uniform1f(renderer.seedUniform, uniforms.S);
	gl.uniform1f(renderer.hueUniform, uniforms.H);
	gl.uniform4fv(renderer.pointsPUniform, uniforms.P);
	gl.uniform4fv(renderer.pointsQUniform, uniforms.Q);
	gl.uniform3fv(renderer.colorOneUniform, uniforms.C1);
	gl.uniform3fv(renderer.colorTwoUniform, uniforms.C2);
	gl.uniform1f(renderer.timeUniform, time);
	gl.drawArrays(gl.TRIANGLES, 0, 6);

	const context = targetCanvas.getContext("2d");
	if (!context) {
		return false;
	}

	context.clearRect(0, 0, width, height);
	context.drawImage(canvas, 0, 0);

	return true;
}

function toRgbString(color: RGBColor, alpha: number) {
	return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
}

function colorFromUniform(uniformColor: Uniforms["C1"] | Uniforms["C2"]): RGBColor {
	return [
		Math.round(uniformColor[0] * 255),
		Math.round(uniformColor[1] * 255),
		Math.round(uniformColor[2] * 255),
	];
}

function mixColor(first: RGBColor, second: RGBColor, ratio: number): RGBColor {
	return [
		Math.round(first[0] + (second[0] - first[0]) * ratio),
		Math.round(first[1] + (second[1] - first[1]) * ratio),
		Math.round(first[2] + (second[2] - first[2]) * ratio),
	];
}

function blobCenters(uniforms: Uniforms, time: number) {
	const baseOne = { x: uniforms.P[0], y: uniforms.P[1] };
	const baseTwo = { x: uniforms.P[2], y: uniforms.P[3] };
	const baseThree = { x: uniforms.Q[0], y: uniforms.Q[1] };

	return [
		{
			x: baseOne.x + Math.sin(time * 0.7 + baseOne.x * 6) * 0.08,
			y: baseOne.y + Math.cos(time * 0.9 + baseOne.y * 6) * 0.08,
		},
		{
			x: baseTwo.x + Math.sin(time * 0.6 + 2.1) * 0.1,
			y: baseTwo.y + Math.cos(time * 0.8 + 1.3) * 0.07,
		},
		{
			x: baseThree.x + Math.sin(time * 0.5 + 4.2) * 0.07,
			y: baseThree.y + Math.cos(time * 1.1 + 3.7) * 0.09,
		},
	] as const;
}

function drawBlob(
	context: CanvasRenderingContext2D,
	centerX: number,
	centerY: number,
	radius: number,
	color: RGBColor,
	alpha: number
) {
	const gradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
	gradient.addColorStop(0, toRgbString(color, alpha));
	gradient.addColorStop(0.45, toRgbString(color, alpha * 0.55));
	gradient.addColorStop(1, toRgbString(color, 0));

	context.fillStyle = gradient;
	context.beginPath();
	context.arc(centerX, centerY, radius, 0, Math.PI * 2);
	context.fill();
}

// The fallback keeps the same seeded colors and point layout so the avatar stays recognizable.
export function renderFallback2D(
	targetCanvas: HTMLCanvasElement,
	uniforms: Uniforms,
	time = 0
): boolean {
	const context = targetCanvas.getContext("2d");
	if (!context) {
		return false;
	}

	const width = Math.max(1, targetCanvas.width);
	const height = Math.max(1, targetCanvas.height);
	const radius = Math.max(width, height) * 0.55;
	const primary = colorFromUniform(uniforms.C1);
	const secondary = colorFromUniform(uniforms.C2);
	const tertiary = mixColor(primary, secondary, 0.5 + Math.sin(time * 0.4) * 0.15);
	const [centerOne, centerTwo, centerThree] = blobCenters(uniforms, time);

	context.clearRect(0, 0, width, height);
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect(0, 0, width, height);
	context.globalCompositeOperation = "screen";

	drawBlob(context, centerOne.x * width, centerOne.y * height, radius, primary, 0.92);
	drawBlob(context, centerTwo.x * width, centerTwo.y * height, radius, secondary, 0.88);
	drawBlob(context, centerThree.x * width, centerThree.y * height, radius, tertiary, 0.84);

	context.globalCompositeOperation = "source-over";

	return true;
}
