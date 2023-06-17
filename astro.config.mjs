import { defineConfig } from 'astro/config';

import unocss from 'unocss/astro';
import transformerDirectives from '@unocss/transformer-directives';

import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import solidJs from '@astrojs/solid-js';
import react from '@astrojs/react';

export default defineConfig({
	integrations: [
		unocss({
			transformers: [transformerDirectives()]
		}),
		vue(),
		svelte(),
		solidJs(),
		react()
	]
});
