import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Pill from '../../components/pill/pill.vue';
import Text from '../text/text.vue';
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
		suffix: {
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
		separator: false,
		anchor: '',
		suffix: '',
		default: `
			<Text>
				<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation
				ullamco laboris nisi ut aliquip ex ea commodo consequat.
				Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia
				deserunt mollit anim id est laborum.
				</p>
			</Text>
		`,
	},
	render: args => ({
		components: { Section, Text, Pill },
		setup() {
			return { args };
		},
		template: `
			<Section v-bind="args">
				${args.default}

				<template #suffix>
					${args.suffix}
				</template>
			</Section>
		`,
	}),
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSection: Story = {};

export const HeadingAnchorSection: Story = {
	args: {
		heading: 'Heading',
		anchor: 'heading',
	},
};

export const HeadingSeparatorSection: Story = {
	args: {
		heading: 'Heading',
		separator: true,
	},
};

export const HeadingSuffixSection: Story = {
	args: {
		heading: 'Heading',
		separator: true,
		suffix: `<Pill icon="i-ri-asterisk" />`,
	},
};
