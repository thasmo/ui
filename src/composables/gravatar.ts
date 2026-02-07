import type { MaybeRefOrGetter } from 'vue';
import { onServerPrefetch, shallowRef, toValue, watchEffect } from 'vue';
import { getHash } from '../utils/gravatar.ts';

export default function useGravatar(email: MaybeRefOrGetter<string>) {
	const hash = shallowRef('');

	onServerPrefetch(async () => {
		const value = toValue(email);
		hash.value = value ? await getHash(value) : '';
	});

	watchEffect((onCleanup) => {
		let cancelled = false;

		(async () => {
			const value = toValue(email);
			const result = value ? await getHash(value) : '';

			if (!cancelled)
				hash.value = result;
		})();

		onCleanup(() => {
			cancelled = true;
		});
	});

	return { hash };
}
