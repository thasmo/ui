const minWidth = 320;
const minFontSize = 1;
const minScale = 1.125;
const maxWidth = 1920;
const maxFontSize = 1.25;
const maxScale = 1.25;

export function getFluidSize(step: number, minW = minWidth, minF = minFontSize, minS = minScale, maxW = maxWidth, maxF = maxFontSize, maxS = maxScale) {
	const minSize = minF * minS ** step;
	const maxSize = maxF * maxS ** step;

	const slope = (maxSize - minSize) / ((maxW - minW) / 16);
	const yIntersection = -minW / 16 * slope + minSize;

	return `clamp(${minSize.toFixed(3)}rem, ${yIntersection.toFixed(3)}rem + ${(slope * 100).toFixed(3)}vw, ${maxSize.toFixed(3)}rem)`;
}
