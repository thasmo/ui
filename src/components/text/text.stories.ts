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
		default: `
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
		`,
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

export const DefaultText: Story = {};

export const SmallText: Story = {
	args: {
		small: true,
	},
};
