<script setup lang="ts">
import { computed } from 'vue';

const { shape } = defineProps<{
	shape?: 'circle' | 'squircle' | string;
}>();

const shapes: Record<string, string> = {
	circle: '<circle cx=".5" cy=".5" r=".5" />',
	squircle: '<path d="M .5,0 C .1,0 0,.1 0,.5 0,.9 .1,1 .5,1 .9,1 1,.9 1,.5 1,.1 .9,0 .5,0 Z" />',
};

const mask = computed(() => {
	if (!shape)
		return;

	const path = shapes[shape] || `<path d="${shape}" />`;
	const image = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">${path}</svg>`;

	return `url("data:image/svg+xml,${encodeURIComponent(image)}")`;
});
</script>

<template>
	<div
		class="aspect-square inline-flex select-none items-center justify-center align-middle mask-contain mask-center mask-no-repeat bg-gray-300 dark:bg-gray-700"
		:style="{ 'mask-image': mask }"
	>
		<slot />
	</div>
</template>
