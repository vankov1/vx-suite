import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/index.js'),
      formats: ['es', 'cjs'],
      // the proper extensions will be added
      fileName: (format) => `vx-suite.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        // inlineDynamicImports: false,
        // preserveModules: true,
        exports: 'named',
        sourcemap: true,
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
