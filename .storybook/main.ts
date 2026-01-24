import type { StorybookConfig } from '@storybook/vue3-vite';
import tools from 'vite-plugin-vue-devtools';

const config: StorybookConfig = {
	framework: '@storybook/vue3-vite',
	stories: ['../src/**/*.stories.ts'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-themes',
	],
	async viteFinal(config: StorybookConfig) {
		config.plugins = config.plugins || [];
		config.plugins.push(tools());
		return config;
	},
};

export default config;
