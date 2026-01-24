import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Tag from '@/components/tag/tag.vue';
import icons from '../../../.storybook/icons.ts';
import Label from './label.vue';

const meta = {
	title: 'Common/Label',
	component: Label,
	argTypes: {
		icon: {
			control: 'select',
			options: icons,
		},
	},
	args: {
		text: 'Label',
	},
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Icon: Story = {
	args: {
		icon: 'i-ri-information-line',
	},
};

export const Slot: Story = {
	args: {
		icon: 'i-ri-information-line',
	},
	render: args => ({
		components: { Label, Tag },
		setup() {
			return { args };
		},
		template: `
			<Label v-bind="args">
				<Tag label="tag" />
			</Label>
		`,
	}),
};
