import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Gravatar from '../../components/gravatar/gravatar.vue';
import Mask from './mask.vue';

const meta = {
	title: 'Common/Mask',
	component: Mask,
	argTypes: {
		shape: {
			control: 'select',
			options: ['circle', 'squircle'],
		},
		default: {
			control: 'text',
		},
	},
	decorators: [
		() => ({
			template: '<div class="w-25"><story class="w-50" /></div>',
		}),
	],
	render: args => ({
		components: { Mask },
		setup() {
			return { args };
		},
		template: `
			<Mask v-bind="args">
				${args.default || ''}
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

export const GravatarMask: Story = {
	args: {
		shape: 'squircle',
		default: '<Gravatar email="code@thasmo.dev" />',
	},
	render: args => ({
		components: { Mask, Gravatar },
		setup() {
			return { args };
		},
		template: `
			<Mask v-bind="args">
				<Gravatar email="code@thasmo.dev" :size="256" />
			</Mask>
		`,
	}),
};
