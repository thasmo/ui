import type { Meta, StoryObj } from '@storybook/vue3-vite';
import icons from '../../../.storybook/icons.ts';
import Pill from './pill.vue';

const meta = {
	title: 'Common/Pill',
	component: Pill,
	argTypes: {
		icon: {
			control: 'select',
			options: icons,
		},
	},
	args: {
		text: 'pill',
	},
} satisfies Meta<typeof Pill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultPill: Story = {};

export const TextIconPill: Story = {
	args: {
		text: 'translate',
		icon: 'i-ri-translate',
	},
};

export const IconPill: Story = {
	args: {
		text: undefined,
		icon: 'i-ri-star-line',
	},
};

export const ThemePill: Story = {
	args: {
		text: undefined,
		icon: 'i-ri-lightbulb-line',
		class: 'text-gray-950 bg-yellow-300 dark:text-gray-100 dark:bg-yellow-900',
	},
};
