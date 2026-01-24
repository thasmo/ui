import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Text from './text.vue';

const meta = {
	title: 'Typography/Text',
	component: Text,
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		tag: {
			control: 'select',
			options: ['div', 'section'],
		},
		small: {
			control: 'boolean',
		},
		default: {
			control: 'text',
		},
	},
	args: {
		small: false,
		default: '<p>The quick brown fox jumps over the lazy dog.</p><p>The lazy dog jumps over the quick brown fox.</p>',
	},
	render: args => ({
		components: { Text },
		setup() {
			return { args };
		},
		template: `
			<Text v-bind="args">
				${args.default}
			</Text>
		`,
	}),
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
	args: {
		small: true,
	},
};
