<script setup lang="ts">
import { computed } from 'vue';
import Icon from '@/components/icon/icon.vue';

const props = defineProps<{
	text?: string;
	icon?: string;
}>();

const classes = computed(() => ({
	'p-r-1rem': props.text,
	'p-l-1rem': props.text && !props.icon,
}));
</script>

<template>
	<span class="rounded-full bg-gray-200 flex flex-row gap-0.125em items-center dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-300" :class="classes">
		<Icon v-if="icon" :name="icon" :scale="1.25" class="p-0.5rem opacity-50 shrink-0 grow-0" />

		<span v-if="text" class="text-1.25rem font-500 font-serif leading-none shrink-0 grow-0 p-y-0.5rem">
			{{ text }}
		</span>
	</span>
</template>
