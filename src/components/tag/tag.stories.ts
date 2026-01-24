import type { Meta, StoryObj } from '@storybook/vue3-vite';
import icons from '../../../.storybook/icons.ts';
import Tag from './tag.vue';

const meta = {
	title: 'Common/Tag',
	component: Tag,
	argTypes: {
		icon: {
			control: 'select',
			options: icons,
		},
	},
	args: {
		label: 'Tag Label',
	},
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
	args: {
		label: 'Tag with Icon',
		icon: 'i-ri-star-line',
	},
};
