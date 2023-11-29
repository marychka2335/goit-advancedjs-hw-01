import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,

      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  };
});


// import { defineConfig } from 'vite';
// import glob from 'glob';
// import injectHTML from 'vite-plugin-html-inject';
// import FullReload from 'vite-plugin-full-reload';

// export default defineConfig(({ command }) => {
//   if (command === 'serve') {
//     return {
//       define: {
//         global: {},
//       },
//       root: 'src',
//       build: {
//         rollupOptions: {
//           input: glob.sync('./src/*.html'),
//         },
//         outDir: '../dist',
//       },
//       plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
//     };
//   } else {
//     return {
//       define: {
//         _global: {},
//       },
//       root: 'src',
//       build: {
//         rollupOptions: {
//           input: glob.sync('./src/*.html'),
//         },
//         outDir: '../dist',
//       },
//       plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
//     };
//   }
// });
