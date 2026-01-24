<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{
		name: string;
		scale?: number;
	}>(),
	{
		scale: 1,
	},
);

const styles = computed(() => ({
	'font-size': `${props.scale}rem`,
}));
</script>

<template>
	<span class="inline-block leading-0 print:(hidden)" aria-hidden="true">
		<span :class="name" class="inline-block" :style="styles" />
	</span>
</template>
