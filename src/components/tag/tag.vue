<script setup lang="ts">
import Icon from '@/components/icon/icon.vue';

defineProps<{
	label: string;
	icon?: string;
}>();
</script>

<template>
	<span class="px-0.5em py-0.125em rounded-0.25em bg-gray-200 flex flex-row gap-0.25rem items-center dark:text-gray-300 dark:bg-gray-800 hover:text-gray-900 hover:bg-gray-300 hover:dark:text-gray-100 hover:dark:bg-gray-700">
		<span>
			{{ label }}
		</span>

		<Icon v-if="icon" :name="icon" />
	</span>
</template>
