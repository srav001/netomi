module.exports = {
	trailingComma: 'none',
	printWidth: 120,
	useTabs: true,
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	arrowParens: 'avoid',
	bracketSpacing: true,
	bracketSameLine: true,
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
};
