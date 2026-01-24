import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Heading from '../heading/heading.vue';
import Link from './link.vue';

const meta = {
	title: 'Typography/Link',
	component: Link,
	argTypes: {
		label: {
			control: 'text',
		},
		url: {
			control: 'text',
		},
		external: {
			control: 'boolean',
		},
	},
	args: {
		label: 'Link Label',
		url: 'https://thasmo.com/',
		external: false,
	},
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultLink: Story = {};

export const ExternalLink: Story = {
	args: {
		external: true,
	},
};

export const HeadingLink: Story = {
	args: {
		external: true,
	},
	render: args => ({
		setup() {
			return { args };
		},
		components: { Heading, Link },
		template: `
			<Heading :level="2">
				<Link v-bind="args" />
			</Heading>
		`,
	}),
};
