import svelte from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
    optimizeDeps: {
        exclude: ['@roxi/routify'],
    },
    plugins: [svelte(require('./svelte.config.js'))],
});
