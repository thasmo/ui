import type { StorybookConfig } from '@storybook/vue3-vite';
import type { InlineConfig } from 'vite';
import { transformerDirectives } from 'unocss';
import { mergeConfig } from 'vite';
import tools from 'vite-plugin-vue-devtools';
import icons from './icons.ts';

const config: StorybookConfig = {
	framework: '@storybook/vue3-vite',
	stories: ['../src/**/*.stories.ts'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-themes',
		'@storybook/addon-vitest',
	],
	async viteFinal(config: InlineConfig) {
		return mergeConfig(config, {
			publicDir: 'public',
			plugins: [
				tools(),
			],
			transformers: [
				transformerDirectives(),
			],
			safelist: [
				...icons,
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
	},
};

export default config;
