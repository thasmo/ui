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
		href: {
			control: 'text',
		},
		target: {
			control: 'select',
			options: ['_self', '_blank', '_parent', '_top'],
		},
		rel: {
			control: 'text',
		},
		default: {
			control: 'text',
		},
	},
	args: {
		default: 'Button',
		href: '',
		rel: '',
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

export const DefaultButton: Story = {};

export const IconButton: Story = {
	args: {
		icon: 'i-ri-external-link-line',
	},
};
