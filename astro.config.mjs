import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';

export default defineConfig({
	integrations: [unocss(), vue(), svelte()]
});
