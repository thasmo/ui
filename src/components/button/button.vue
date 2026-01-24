<script setup lang="ts">
import Icon from '@/components/icon/icon.vue';

defineProps<{
	icon?: string;
	href?: string;
	target?: string;
	rel?: string;
}>();

const classes = [
	'inline-flex',
	'flex-row',
	'items-center',
	'gap-1rem',
	'cursor-pointer',
	'text-align-center',
	'leading-snug',
	'px-2rem',
	'py-0.75rem',
	'text-1.25rem',
	'text-white',
	'font-500',
	'bg-gray-900',
	'rounded-0.25rem',
	'hover:(bg-gray-700)',
	'dark:(bg-gray-100 text-gray-900 hover:(bg-gray-300))',
];
</script>

<template>
	<a :href="href" :target="target" :rel="rel" :class="classes">
		<span class="min-w-fit">
			<slot />
		</span>

		<Icon v-if="icon" :name="icon" />
	</a>
</template>
