import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Text from '../../components/text/text.vue';
import Collapsible from './collapsible.vue';

const meta = {
	title: 'Content/Collapsible',
	component: Collapsible,
	argTypes: {
		label: {
			control: 'text',
		},
		content: {
			control: 'text',
		},
		default: {
			control: 'text',
		},
	},
	args: {
		label: 'show more',
		default: `
			<Text>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</Text>
		`,
		content: `
			<Text>
				<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation
				ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</Text>
		`,
	},
	render: args => ({
		components: { Collapsible, Text },
		setup() {
			return { args };
		},
		template: `
			<Collapsible v-bind="args">
				<template #default>
					${args.default}
				</template>

				<template #content>
					${args.content}
				</template>
			</Collapsible>
		`,
	}),
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCollapsible: Story = {};
