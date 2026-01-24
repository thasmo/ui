<script setup lang="ts">
defineProps<{
	value: string;
	label: string;
}>();
</script>

<template>
	<div class="flex flex-col gap-0">
		<p class="text-1.5rem text-gray-800 font-500 dark:text-gray-200">
			{{ value }}
		</p>

		<p class="text-1.25rem text-gray-600 dark:text-gray-300">
			{{ label }}
		</p>
	</div>
</template>
