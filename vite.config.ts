import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig((): UserConfig => {
	return {
		publicDir: false,
		plugins: [
			vue(),
			unocss(),
			dts({ rollupTypes: true, tsconfigPath: './tsconfig.app.json' }),
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		build: {
			emptyOutDir: true,
			lib: {
				entry: {
					ui: resolve(__dirname, './src/index.ts'),
					preset: resolve(__dirname, './src/unocss.ts'),
				},
				formats: ['es'],
			},
			rollupOptions: {
				external: [
					'vue',
					'unocss',
				],
			},
		},
	};
});
