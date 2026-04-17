import type { Meta, StoryObj } from '@storybook/vue3-vite';
import icons from '../../../.storybook/icons.ts';
import ActionButton from './action-button.vue';

const meta = {
	title: 'Common/Button/Action Button',
	component: ActionButton,
	argTypes: {
		icon: {
			control: 'select',
			options: icons,
		},
		type: {
			control: 'select',
			options: ['button', 'submit', 'reset'],
		},
		default: {
			control: 'text',
		},
	},
	args: {
		default: 'Button',
		type: 'button',
	},
	render: args => ({
		components: { ActionButton },
		setup() {
			return { args };
		},
		template: `
			<ActionButton v-bind="args">
				{{ args.default }}
			</ActionButton>
		`,
	}),
} satisfies Meta<typeof ActionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultActionButton: Story = {};

export const IconActionButton: Story = {
	args: {
		icon: 'i-ri-external-link-line',
	},
};
