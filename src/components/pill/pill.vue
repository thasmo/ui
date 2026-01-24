<script setup lang="ts">
import { computed } from 'vue';
import Icon from '@/components/icon/icon.vue';

const props = withDefaults(defineProps<{
	text?: string;
	icon?: string;
	theme?: string;
}>(), {
	theme: 'text-gray-900 bg-gray-200 dark:text-gray-100 dark:bg-gray-700',
});

const classes = computed(() => ({
	[props.theme]: true,
	'p-r-1rem': props.text,
	'p-l-1rem': props.text && !props.icon,
}));
</script>

<template>
	<span :class="classes" class="rounded-full flex flex-row gap-0.125em items-center">
		<Icon v-if="icon" :name="icon" :scale="1.5" class="p-0.5rem shrink-0 grow-0" />

		<span v-if="text" class="text-1.25rem font-500 font-serif leading-none shrink-0 grow-0 p-y-0.5em">
			{{ text }}
		</span>
	</span>
</template>
