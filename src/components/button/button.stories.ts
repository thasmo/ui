import type { Meta, StoryObj } from '@storybook/vue3-vite';
import icons from '../../../.storybook/icons.ts';
import Button from './button.vue';

const meta = {
	title: 'Common/Button',
	component: Button,
	argTypes: {
		icon: {
			control: 'select',
			options: icons,
		},
		default: {
			control: 'text',
		},
	},
	args: {
		default: 'Button',
	},
	render: args => ({
		components: { Button },
		setup() {
			return { args };
		},
		template: `
			<Button v-bind="args">
				{{ args.default }}
			</Button>
		`,
	}),
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Icon: Story = {
	args: {
		icon: 'i-ri-external-link-line',
	},
};
