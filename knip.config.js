export default {
	project: ['src/**'],
	entry: ['src/index.ts', 'src/components/**/*.stories.ts'],
	ignoreDependencies: ['@somehow-digital/semantic-release-config', '@vitest/coverage-v8', 'vitest-browser-vue'],
};
