import type { Preset } from 'unocss';
// @ts-expect-error missing types
import base from '@somehow-digital/unocss-preset';
import { getFluidSize } from './utils/typography';

export default function preset(): Preset {
	return {
		name: 'thasmo-ui',
		presets: [
			base(),
		],
		layers: {
			theme: 1,
		},
		outputToCssLayers: true,
		theme: {
			fontFamily: {
				sans: 'Fira Sans',
				serif: 'Sentient',
			},
			breakpoint: {
				lg: '1400px',
				md: '1000px',
				sm: '600px',
			},
			colors: {
				primary: {
					DEFAULT: '#27374D',
				},
			},
			text: {
				sizes: {
					heading: {
						1: getFluidSize(5),
						2: getFluidSize(4),
						3: getFluidSize(3),
						4: getFluidSize(2),
						5: getFluidSize(1),
						6: getFluidSize(0),
					},
					text: {
						regular: getFluidSize(0),
						small: getFluidSize(-1),
					},
				},
			},
		},
		rules: [
			[/^fluid-([^-]+)-([^-]+)$/, (match, { theme }: { theme: any }) => {
				const [, type, size] = match as string[];
				const sizes = theme.text?.sizes;
				if (type && size && sizes && sizes[type] && sizes[type][size]) {
					return { 'font-size': sizes[type][size] };
				}
			}],
		],
	};
}
