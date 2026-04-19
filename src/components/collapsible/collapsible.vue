<script setup lang="ts">
import { shallowRef } from 'vue';
import ActionButton from '../button/action-button.vue';

defineProps<{
	label: string;
}>();

defineSlots<{
	default: (props: Record<string, never>) => unknown;
	content: (props: Record<string, never>) => unknown;
}>();

const open = shallowRef(false);
</script>

<template>
	<div class="flex flex-col gap-2.5rem">
		<div v-if="$slots.default">
			<slot />
		</div>

		<div v-if="$slots.content" :class="{ 'block!': open }" class="hidden print:(block)">
			<slot name="content" />
		</div>

		<ActionButton v-if="!open" class="m-auto print:(hidden)" @click="open = !open">
			{{ label }}
		</ActionButton>
	</div>
</template>
