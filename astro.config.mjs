import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [unocss(), vue(), svelte(), solidJs()]
});