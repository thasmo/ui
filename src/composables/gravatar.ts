import type { MaybeRefOrGetter } from 'vue';
import { shallowRef, toValue, watchEffect } from 'vue';
import { getHash } from '../utils/gravatar.ts';

export default function useGravatar(email: MaybeRefOrGetter<string>) {
	const hash = shallowRef('');

	watchEffect((onCleanup) => {
		const value = toValue(email);
		let cancelled = false;

		(async () => {
			const result = await getHash(value);

			if (!cancelled)
				hash.value = result;
		})();

		onCleanup(() => {
			cancelled = true;
		});
	});

	return { hash };
}
