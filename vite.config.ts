import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig(() => {
	return {
		plugins: [
			vue(),
			unocss(),
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
	};
});
