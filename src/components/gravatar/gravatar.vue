<script setup lang="ts">
import { computed } from 'vue';
import useGravatar from '../../composables/gravatar.ts';

const { email, size = 128 } = defineProps<{
	email: string;
	size?: number;
}>();

const { hash } = useGravatar(email);

const source = computed(() => {
	return `https://avatar.thasmo.com/${hash.value}/${size}`;
});
</script>

<template>
	<img
		v-if="source"
		class="w-full h-full aspect-square object-cover"
		:src="source"
		:height="size"
		:width="size"
		decoding="async"
		fetchpriority="high"
		alt=""
	>
</template>
