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

export const Default: Story = {};

export const Icon: Story = {
	args: {
		text: 'translate',
		icon: 'i-ri-translate',
	},
};

export const IconOnly: Story = {
	args: {
		icon: 'i-ri-star-line',
	},
};
