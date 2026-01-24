import { defineConfig, transformerDirectives } from 'unocss';
import icons from './.storybook/icons';
import preset from './src/unocss';

export default defineConfig({
	presets: [
		preset(),
	],
	transformers: [
		transformerDirectives(),
	],
	content: {
		pipeline: {
			include: [
				/\.(vue|[jt]s|html)($|\?)/,
			],
		},
	},
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
	safelist: [
		...icons,
	],
});
