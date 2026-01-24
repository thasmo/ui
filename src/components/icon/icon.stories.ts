import type { Meta, StoryObj } from '@storybook/vue3-vite';
import icons from '../../../.storybook/icons.ts';
import Icon from './icon.vue';

const meta = {
	title: 'Common/Icon',
	component: Icon,
	argTypes: {
		name: {
			control: 'select',
			options: icons,
		},
		scale: {
			control: {
				type: 'range',
				min: 1,
				max: 10,
				step: 0.5,
			},
		},
	},
	args: {
		name: 'i-ri-home-line',
		scale: 1,
	},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultIcon: Story = {};

export const ScaleIcon: Story = {
	args: {
		scale: 2,
	},
};
