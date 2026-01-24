export const minWidth = 320;
export const minFontSize = 1;
export const minScale = 1.125;
export const maxWidth = 1920;
export const maxFontSize = 1.25;
export const maxScale = 1.25;

export function getFluidSize(step: number, minW = minWidth, minF = minFontSize, minS = minScale, maxW = maxWidth, maxF = maxFontSize, maxS = maxScale) {
	const minSize = minF * minS ** step;
	const maxSize = maxF * maxS ** step;

	const slope = (maxSize - minSize) / ((maxW - minW) / 16);
	const yIntersection = -minW / 16 * slope + minSize;

	return `clamp(${minSize.toFixed(3)}rem, ${yIntersection.toFixed(3)}rem + ${(slope * 100).toFixed(3)}vw, ${maxSize.toFixed(3)}rem)`;
}
