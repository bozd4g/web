"use client";

import {useEffect, useRef} from "react";

import clx from "classnames";

interface Props {
	className?: string;
}

const Noise = ({className}: Props) => {
	let canvasRef = useRef<HTMLCanvasElement>(null);
	let ctxRef = useRef<CanvasRenderingContext2D | null>(null);

	let wWidth = 0;
	let wHeight = 0;

	let noiseData: ImageData[] = [];
	let frame = 0;

	let loopTimeout: number | undefined;

	// Create Noise
	const createNoise = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = ctxRef.current;
		if (!ctx) return;

		const idata = ctx.createImageData(wWidth, wHeight);
		const buffer32 = new Uint32Array(idata.data.buffer);
		const len = buffer32.length;

		for (let i = 0; i < len; i++) {
			if (Math.random() < 0.5) {
				buffer32[i] = 0xff000000;
			}
		}

		noiseData.push(idata);
	};

	// Play Noise
	const paintNoise = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = ctxRef.current;
		if (!ctx) return;

		if (frame === 9) {
			frame = 0;
		} else {
			frame++;
		}

		ctx.putImageData(noiseData[frame], 0, 0);
	};

	// Loop
	const loop = () => {
		paintNoise();

		loopTimeout = window.setTimeout(() => {
			window.requestAnimationFrame(loop);
		}, 1000 / 25);
	};

	// Setup
	const setup = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		wWidth = window.innerWidth;
		wHeight = window.innerHeight;

		canvas.width = wWidth;
		canvas.height = wHeight;

		for (let i = 0; i < 10; i++) {
			createNoise();
		}

		loop();
	};

	// Reset
	let resizeThrottle: number | undefined;
	const reset = () => {
		window.addEventListener(
			"resize",
			() => {
				window.clearTimeout(resizeThrottle);

				resizeThrottle = window.setTimeout(() => {
					window.clearTimeout(loopTimeout);
					setup();
				}, 200);
			},
			false
		);
	};

	// Init
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctxRef.current = ctx;

		setup();
		reset();
	}, []);

	return <canvas id="noise" ref={canvasRef} className={clx("pointer-events-none opacity-50", className)} />;
};

export default Noise;
