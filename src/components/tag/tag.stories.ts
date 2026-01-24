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
		large: {
			control: 'boolean',
		},
	},
	args: {
		label: 'Tag Label',
		large: false,
	},
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultTag: Story = {};

export const IconTag: Story = {
	args: {
		icon: 'i-ri-star-line',
	},
};

export const LargeTag: Story = {
	args: {
		large: true,
	},
};
