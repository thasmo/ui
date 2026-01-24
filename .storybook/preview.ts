import type { Preview, Renderer } from '@storybook/vue3-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import 'virtual:uno.css';

const preview: Preview = {
	tags: ['autodocs'],
	parameters: {
		docs: {
			codePanel: true,
		},
		backgrounds: {
			disable: true,
		},
		layout: 'centered',
	},
	decorators: [
		withThemeByClassName<Renderer>({
			themes: {
				light: '',
				dark: 'dark',
			},
			defaultTheme: 'light',
		}),
	],
};

export default preview;
