<script setup lang="ts">
import { AvatarFallback, AvatarImage, AvatarRoot } from 'reka-ui';
import { computed } from 'vue';

const { name, source, shape } = defineProps<{
	name?: string;
	source?: string;
	shape?: 'circle' | 'squircle' | string;
}>();

const initials = computed(() => {
	if (!name)
		return '';

	return name
		.split(' ')
		.map(part => part[0])
		.join('')
		.toUpperCase()
		.slice(0, 2);
});

const mask = computed(() => {
	if (!shape)
		return;

	const shapes: Record<string, string> = {
		circle: '<circle cx=".5" cy=".5" r=".5" />',
		squircle: '<path d="M .5,0 C .1,0 0,.1 0,.5 0,.9 .1,1 .5,1 .9,1 1,.9 1,.5 1,.1 .9,0 .5,0 Z" />',
	};

	const path = shapes[shape] || `<path d="${shape}" />`;
	const image = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">${path}</svg>`;

	return `url("data:image/svg+xml,${encodeURIComponent(image)}")`;
});
</script>

<template>
	<AvatarRoot
		class="h-full w-full aspect-square inline-flex select-none items-center justify-center align-middle mask-contain mask-center mask-no-repeat bg-gray-300 dark:bg-gray-700"
		:style="{ 'mask-image': mask }"
	>
		<AvatarImage
			v-if="source"
			class="h-full w-full object-cover"
			:src="source"
			:alt="name"
		/>

		<AvatarFallback
			class="flex h-full w-full items-center justify-center align-middle"
			:delay-ms="600"
		>
			{{ initials }}
		</AvatarFallback>
	</AvatarRoot>
</template>
