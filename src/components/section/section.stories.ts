import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Section from './section.vue';

const meta = {
	title: 'Content/Section',
	component: Section,
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		heading: {
			control: 'text',
		},
		default: {
			control: 'text',
		},
		level: {
			control: 'select',
			options: [1, 2, 3, 4, 5, 6],
		},
		separator: {
			control: 'boolean',
		},
		anchor: {
			control: 'text',
		},
		tag: {
			control: 'select',
			options: ['section', 'div'],
		},
	},
	args: {
		heading: 'Heading',
		default: '<p>This is the content of the section.</p>',
		separator: false,
		anchor: '',
	},
	render: args => ({
		components: { Section },
		setup() {
			return { args };
		},
		template: `
			<Section v-bind="args">
				${args.default}
			</Section>
		`,
	}),
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Anchor: Story = {
	args: {
		heading: 'Anchor Heading',
		anchor: 'heading',
	},
};

export const Separator: Story = {
	args: {
		heading: 'Separator Heading',
		separator: true,
	},
};
