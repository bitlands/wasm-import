import wasm from 'vite-plugin-wasm'

/** @type {import('vite').UserConfig} */
export default {
	build: {
    target: 'esnext'
  },
  plugins: [
		wasm(),
	],
  server: {
    watch: {
      usePolling: true
    }
  }
}