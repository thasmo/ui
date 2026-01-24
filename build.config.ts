import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: [{
		input: './src/',
		globOptions: {
			ignore: ['**/*.stories.ts'],
		},
	}],
	declaration: true,
});
