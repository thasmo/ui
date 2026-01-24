<script setup lang="ts">
import { computed } from 'vue';
import Icon from '../../components/icon/icon.vue';

const props = withDefaults(defineProps<{
	label: string;
	icon?: string;
	large?: boolean;
}>(), {
	large: false,
});

const classes = computed(() => ({
	'px-0.5em py-0.125em': !props.large,
	'text-1.25rem px-1.25em py-0.5em': props.large,
}));
</script>

<template>
	<span :class="classes" class="flex flex-row gap-0.25em items-center justify-center rounded-0.25rem layer-theme:(text-gray-600 bg-gray-200 dark:(text-gray-300 bg-gray-800))">
		<span>
			{{ label }}
		</span>

		<Icon v-if="icon" :name="icon" />
	</span>
</template>
