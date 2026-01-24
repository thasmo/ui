import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Avatar from './avatar.vue';

const meta = {
	title: 'Common/Avatar',
	component: Avatar,
	argTypes: {
		shape: {
			control: 'select',
			options: ['circle', 'squircle'],
		},
	},
	args: {
		name: 'Thomas Deinhamer',
		source: 'https://avatar.thasmo.com/',
	},
	decorators: [
		() => ({
			template: '<div class="w-25"><story /></div>',
		}),
	],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Circle: Story = {
	args: {
		shape: 'circle',
	},
};

export const Squircle: Story = {
	args: {
		shape: 'squircle',
	},
};

export const Custom: Story = {
	args: {
		shape: 'M 0.5,0 L 1,1 L 0,1 Z',
	},
};

export const Fallback: Story = {
	args: {
		shape: 'squircle',
		source: undefined,
	},
};
