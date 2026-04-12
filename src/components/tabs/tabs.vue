<script setup lang="ts">
import Icon from '../../components/icon/icon.vue';

defineProps<{
	modelValue?: string | number;
	tabs: Array<{
		value: string | number;
		label?: string;
		icon?: string;
	}>;
}>();

const emit = defineEmits<{
	'update:modelValue': [value: string | number];
}>();
</script>

<template>
	<div class="flex flex-row gap-0.5rem items-center bg-gray-100 dark:bg-gray-900 rounded-full p-0.25rem">
		<button
			v-for="tab in tabs"
			:key="tab.value"
			:data-active="modelValue === tab.value"
			:data-has-label="!!tab.label"
			:data-has-icon="!!tab.icon"
			class="flex flex-row gap-0.125em items-center rounded-full text-1.25rem cursor-pointer data-[active=true]:(layer-theme:(text-gray-900 bg-white) dark:layer-theme:(text-gray-100 bg-gray-800)) data-[active=false]:(text-gray-600 hover:text-gray-900 dark:(text-gray-400 hover:text-gray-100)) data-[has-label=true]:p-r-1rem data-[has-label=true]:data-[has-icon=false]:p-l-1rem"
			@click="emit('update:modelValue', tab.value)"
		>
			<Icon v-if="tab.icon" :name="tab.icon" :scale="1.25" :class="{ 'opacity-50': tab.label }" class="p-0.5rem shrink-0 grow-0" />

			<span v-if="tab.label" class="font-500 font-serif leading-none shrink-0 grow-0 p-y-0.5em">
				{{ tab.label }}
			</span>
		</button>
	</div>
</template>
