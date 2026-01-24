<script setup lang="ts">
import { computed } from 'vue';
import Icon from '../../components/icon/icon.vue';

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
	<span :class="[classes]" class="flex flex-row gap-0.125em items-center rounded-full text-1.25rem layer-theme:(text-gray-900 bg-gray-200 hover:bg-gray-300) dark:layer-theme:(text-gray-100 bg-gray-800 hover:bg-gray-700)">
		<Icon v-if="icon" :name="icon" :scale="1.25" :class="{ 'opacity-50': text }" class="p-0.5rem shrink-0 grow-0" />

		<span v-if="text" class="font-500 font-serif leading-none shrink-0 grow-0 p-y-0.5em">
			{{ text }}
		</span>
	</span>
</template>
