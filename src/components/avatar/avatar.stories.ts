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
		default: '<img src="https://avatar.thasmo.com/" alt="" />',
	},
	decorators: [
		() => ({
			template: '<div class="w-25"><story /></div>',
		}),
	],
	render: args => ({
		components: { Avatar },
		setup() {
			return { args };
		},
		template: `
			<Avatar v-bind="args">
				${args.default}
			</Avatar>
		`,
	}),
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultAvatar: Story = {};

export const CircleAvatar: Story = {
	args: {
		shape: 'circle',
	},
};

export const SquircleAvatar: Story = {
	args: {
		shape: 'squircle',
	},
};

export const CustomAvatar: Story = {
	args: {
		shape: 'M 0.5,0 L 1,1 L 0,1 Z',
	},
};
