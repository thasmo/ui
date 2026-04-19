import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Button from '../../components/button/button.vue';
import Text from '../../components/text/text.vue';
import Tooltip from './tooltip.vue';

const meta = {
	title: 'Common/Tooltip',
	component: Tooltip,
	argTypes: {
		label: {
			control: 'text',
		},
		default: {
			control: 'text',
		},
	},
	args: {
		label: 'tooltip text',
		default: `
			<Text>
				text with tooltip
			</Text>
		`,
	},
	render: args => ({
		components: { Tooltip, Text, Button },
		setup() {
			return { args };
		},
		template: `
			<Tooltip v-bind="args">
				${args.default}
			</Tooltip>
		`,
	}),
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultTooltip: Story = {};

export const ButtonTooltip: Story = {
	args: {
		label: 'click to continue',
		default: `
			<Button>
				button with tooltip
			</Button>
		`,
	},
};
