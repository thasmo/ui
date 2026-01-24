<script setup lang="ts">
import Heading from '@/components/heading/heading.vue';

withDefaults(defineProps<{
	heading: string;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	separator?: boolean;
	anchor?: string;
	tag?: string;
}>(), {
	level: 2,
	separator: true,
	tag: 'section',
});
</script>

<template>
	<component :is="tag" :id="anchor" class="group/section flex flex-col gap-2.25rem print:gap-1.25rem">
		<Heading v-if="heading" :level="level" :separator="separator">
			<a v-if="anchor" :href="`#${anchor}`" class="text-inherit no-underline">
				{{ heading }}
			</a>

			<template v-else>
				{{ heading }}
			</template>
		</Heading>

		<div>
			<slot />
		</div>
	</component>
</template>
