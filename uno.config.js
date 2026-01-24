import fonts from '@unocss/preset-web-fonts';
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local';
import { defineConfig } from 'unocss';
import preset from './src/unocss';

const isDevelopment = import.meta.env.NODE_ENV === 'development';

const configuration = {
	presets: [
		preset(),
	],
};

if (isDevelopment) {
	configuration.content = {
		pipeline: {
			include: [
				/\.(vue|[jt]s)($|\?)/,
			],
		},
	};

	configuration.presets.push(
		fonts({
			fonts: {
				sans: {
					name: 'Fira Sans',
					weights: [400, 500],
				},
				serif: {
					name: 'Sentient',
					weights: [400, 500],
				},
			},
			processors: createLocalFontProcessor({
				cacheDir: 'node_modules/.cache/unocss/fonts/',
				fontAssetsDir: 'public/assets/fonts/',
				fontServeBaseUrl: '/assets/fonts/',
			}),
			provider: 'fontshare',
		}),
	);
}

export default defineConfig(configuration);
