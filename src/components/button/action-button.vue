<script setup lang="ts">
import Icon from '../../components/icon/icon.vue';

withDefaults(
	defineProps<{
		icon?: string;
		type?: HTMLButtonElement['type'];
	}>(),
	{
		type: 'button',
	},
);

defineSlots<{
	default: (props: Record<string, never>) => unknown;
}>();

const classes = [
	'inline-flex',
	'flex-row',
	'items-center',
	'gap-0.5rem',
	'cursor-pointer',
	'text-align-center',
	'leading-snug',
	'px-1.25rem',
	'py-0.5rem',
	'text-1.25rem',
	'text-white',
	'font-400',
	'bg-gray-700',
	'rounded-0.25rem',
	'hover:(bg-gray-900)',
	'dark:(bg-gray-100 text-gray-900 hover:(bg-gray-300))',
];
</script>

<template>
	<button :class="classes" :type="type">
		<span class="min-w-fit">
			<slot />
		</span>

		<Icon v-if="icon" :name="icon" />
	</button>
</template>
