<script setup lang="ts">
import Icon from '../../components/icon/icon.vue';

defineProps<{
	text?: string;
	icon?: string;
}>();
</script>

<template>
	<div class="text-1rem text-gray-600 flex flex-row gap-0.5rem items-center dark:text-gray-300">
		<Icon v-if="icon" :name="icon" />

		<div v-if="$slots.default">
			<slot />
		</div>

		<p v-else-if="text">
			{{ text }}
		</p>
	</div>
</template>
