import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Mask from './mask.vue';

const meta = {
	title: 'Common/Mask',
	component: Mask,
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
		components: { Mask },
		setup() {
			return { args };
		},
		template: `
			<Mask v-bind="args">
				${args.default}
			</Mask>
		`,
	}),
} satisfies Meta<typeof Mask>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultMask: Story = {};

export const CircleMask: Story = {
	args: {
		shape: 'circle',
	},
};

export const SquircleMask: Story = {
	args: {
		shape: 'squircle',
	},
};

export const CustomMask: Story = {
	args: {
		shape: 'M 0.5,0 L 1,1 L 0,1 Z',
	},
};
