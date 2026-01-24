import preset from '@somehow-digital/unocss-preset';
import fonts from '@unocss/preset-web-fonts';
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local';
import { defineConfig, transformerDirectives } from 'unocss';
import icons from './.storybook/icons';
import { getFluidSize } from './src/utils/typography';

export default defineConfig({
	presets: [
		preset(),
		fonts({
			fonts: {
				sans: {
					name: 'Fira Sans',
					weights: [400, 500],
				},
				serif: {
					name: 'Sentient',
					weights: [400, 500],
				},
			},
			processors: createLocalFontProcessor({
				cacheDir: 'node_modules/.cache/unocss/fonts/',
				fontAssetsDir: 'public/assets/fonts/',
				fontServeBaseUrl: '/assets/fonts/',
			}),
			provider: 'fontshare',
		}),
	],
	theme: {
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
	content: {
		pipeline: {
			include: [
				/\.(vue|[jt]s|html)($|\?)/,
			],
		},
	},
	safelist: [
		...icons,
	],
	rules: [
		[/^fluid-([^-]+)-([^-]+)$/, ([, type, size], { theme }) => {
			return { 'font-size': theme.text.sizes[type][size] };
		}],
	],
	transformers: [
		transformerDirectives(),
	],
	preflights: [
		{
			getCSS: () => `
				body, .docs-story {
					@apply p-1rem;
					@apply text-gray-900 bg-gray-100 cursor-default selection:bg-gray-900 selection:text-white sm:p-2.5vw print:bg-white;
					@apply dark:text-gray-100 dark:bg-gray-900 dark:selection:text-gray-900 dark:selection:bg-white dark:print:bg-white;
				}
			`,
		},
	],
});
