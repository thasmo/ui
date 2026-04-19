<script setup lang="ts">
defineProps<{
	label: string;
}>();

defineSlots<{
	default: (props: Record<string, never>) => unknown;
}>();
</script>

<template>
	<div class="group relative inline-flex">
		<slot />

		<span
			role="tooltip"
			class="absolute bottom-full left-1/2 mb-0.5rem hidden -translate-x-1/2 whitespace-nowrap text-1rem px-0.5em py-0.125em rounded-0.25rem group-hover:block group-focus-within:block pointer-events-none touch-none layer-theme:(text-gray-100 bg-gray-900) dark:layer-theme:(text-gray-900 bg-gray-100)"
		>
			{{ label }}
		</span>
	</div>
</template>
