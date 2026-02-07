import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Gravatar from './gravatar.vue';

const meta = {
	title: 'Common/Gravatar',
	component: Gravatar,
	argTypes: {
		email: {
			control: 'text',
		},
		size: {
			control: 'number',
		},
	},
	args: {
		email: 'code@thasmo.dev',
		size: 256,
	},
} satisfies Meta<typeof Gravatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultGravatar: Story = {};
