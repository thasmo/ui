<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{
		tag?: string;
		small?: boolean;
	}>(),
	{
		tag: 'div',
		small: false,
	},
);

const classes = computed(() => ({
	'fluid-text-regular': !props.small,
	'fluid-text-small': props.small,
}));
</script>

<template>
	<component :is="tag" :class="classes" class="flex flex-col gap-1em leading-snug">
		<slot />
	</component>
</template>
