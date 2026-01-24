import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Heading from './heading.vue';

const meta = {
	title: 'Typography/Heading',
	component: Heading,
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		level: {
			control: 'select',
			options: [1, 2, 3, 4, 5, 6],
		},
		size: {
			control: 'select',
			options: [1, 2, 3, 4, 5, 6],
		},
		tag: {
			control: 'select',
			options: ['div', 'p', 'span'],
		},
		separator: {
			control: 'boolean',
		},
		default: {
			control: 'text',
		},
	},
	args: {
		default: 'Heading',
		separator: false,
	},
	render: args => ({
		components: { Heading },
		setup() {
			return { args };
		},
		template: `
			<Heading v-bind="args">
				{{ args.default }}
			</Heading>
		`,
	}),
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Level1: Story = {
	args: {
		level: 1,
	},
};

export const Level2: Story = {
	args: {
		level: 2,
	},
};

export const Level3: Story = {
	args: {
		level: 3,
	},
};

export const Separator: Story = {
	args: {
		separator: true,
	},
};
