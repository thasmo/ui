<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{
		level?: 1 | 2 | 3 | 4 | 5 | 6;
		size?: 1 | 2 | 3 | 4 | 5 | 6;
		separator?: boolean;
		tag?: string;
	}>(),
	{
		level: 1,
		separator: false,
	},
);

const tag = computed(() => props.tag || `h${props.level}`);
const size = computed(() => props.size || props.level);

const classes = computed(() => ({
	'fluid-heading-1': size.value === 1,
	'fluid-heading-2': size.value === 2,
	'fluid-heading-3': size.value === 3,
	'fluid-heading-4': size.value === 4,
	'fluid-heading-5': size.value === 5,
	'fluid-heading-6': size.value === 6,
	'font-serif': size.value < 4,
	'font-sans': size.value >= 4,
}));
</script>

<template>
	<component :is="tag" :class="classes" class="flex flex-row gap-0.5em items-center leading-tight font-500">
		<span class="min-w-fit">
			<slot />
		</span>

		<span v-if="separator" class="rounded-full bg-current grow-1 h-3px w-full print:hidden" aria-hidden="true" />

		<slot name="suffix" />
	</component>
</template>
