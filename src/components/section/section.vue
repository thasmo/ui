<script setup lang="ts">
import { ref } from 'vue';
import Heading from '../../components/heading/heading.vue';
import Pill from '../../components/pill/pill.vue';

withDefaults(defineProps<{
	heading: string;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	size?: 1 | 2 | 3 | 4 | 5 | 6;
	separator?: boolean;
	anchor?: string;
	tag?: string;
}>(), {
	level: 2,
	separator: true,
	tag: 'section',
});

const showAnchor = ref(false);
</script>

<template>
	<component :is="tag" :id="anchor" class="group/section flex flex-col gap-2.25rem print:gap-1.25rem">
		<Heading v-if="heading" :level="level" :separator="separator" :size="size">
			<a v-if="anchor" :href="`#${anchor}`" class="flex items-center" @mouseenter="showAnchor = true" @mouseleave="showAnchor = false">
				{{ heading }}
			</a>

			<template v-else>
				{{ heading }}
			</template>

			<template #suffix>
				<Pill v-if="showAnchor" icon="i-ri-hashtag" />
				<slot v-else name="suffix" />
			</template>
		</Heading>

		<div>
			<slot />
		</div>
	</component>
</template>
