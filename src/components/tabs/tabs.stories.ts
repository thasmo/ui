import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Text from '../text/text.vue';
import Tabs from './tabs.vue';

const meta = {
	title: 'Common/Tabs',
	component: Tabs,
	argTypes: {
		modelValue: {
			control: 'text',
		},
		tabs: {
			control: 'object',
		},
	},
	args: {
		modelValue: 'home',
		tabs: [
			{ value: 'home', label: 'Home' },
			{ value: 'profile', label: 'Profile' },
			{ value: 'settings', label: 'Settings' },
		],
	},
	render: args => ({
		components: { Tabs },
		setup() {
			const activeTab = ref(args.modelValue);
			return { args, activeTab };
		},
		template: `<Tabs v-model="activeTab" :tabs="args.tabs" />`,
	}),
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultTabs: Story = {};

export const TabsWithIcons: Story = {
	args: {
		tabs: [
			{ value: 'home', label: 'Home', icon: 'i-ri-home-line' },
			{ value: 'profile', label: 'Profile', icon: 'i-ri-user-line' },
			{ value: 'settings', label: 'Settings', icon: 'i-ri-settings-line' },
		],
	},
};

export const IconOnlyTabs: Story = {
	args: {
		tabs: [
			{ value: 'home', icon: 'i-ri-home-line' },
			{ value: 'profile', icon: 'i-ri-user-line' },
			{ value: 'settings', icon: 'i-ri-settings-line' },
		],
	},
};

export const TabsWithContent: Story = {
	render: () => ({
		components: { Tabs, Text },
		setup() {
			const tabs = [
				{ value: 'home', label: 'Home' },
				{ value: 'profile', label: 'Profile' },
				{ value: 'settings', label: 'Settings' },
			];

			const selection = ref(tabs[0].value);

			return { selection, tabs };
		},
		template: `
			<Tabs v-model="selection" :tabs="tabs" />

			<Text v-if="selection === 'home'">
				<p>This is the home content. Welcome to the home tab!</p>
			</Text>

			<Text v-if="selection === 'profile'">
				<p>This is the profile content. Here you can manage your profile settings.</p>
			</Text>

			<Text v-if="selection === 'settings'">
				<p>This is the settings content. Configure your preferences here.</p>
			</Text>
		`,
	}),
};
