import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Definition from './definition.vue';

const meta = {
	title: 'Common/Definition',
	component: Definition,
	parameters: {
		layout: 'padded',
	},
	args: {
		label: 'Label',
		value: 'Value',
	},
} satisfies Meta<typeof Definition>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultDefinition: Story = {};
