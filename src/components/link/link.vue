<script setup lang="ts">
import Icon from '../../components/icon/icon.vue';

withDefaults(defineProps<{
	text?: string;
	url: string;
	external?: boolean;
}>(), {
	external: false,
});
</script>

<template>
	<a class="group/link" :href="url" :target="external ? '_blank' : '_self'" rel="noopener noreferrer">
		<slot v-if="$slots.default" />

		<template v-else-if="text">
			<span class="decoration-2px underline-offset-0.25em group-hover/link:underline">
				{{ text }}
			</span>

			<Icon v-if="external" name="i-ri-arrow-right-up-long-line" class="pos-relative bottom-0.1em align-middle opacity-25 group-hover/link:opacity-100 group-focus/link:opacity-100" />
		</template>
	</a>
</template>
