import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 5173,
		host: true,
		strictPort: true,
		hmr: {
		  port: 5173,
		},
		watch: {
		  usePolling: true,
		  // useFsEvents: true,
		  // interval: 100,
		},
	},

});
