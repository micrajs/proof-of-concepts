import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
import {cwd} from '@micra/vite-config/utilities/cwd';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': cwd('.'),
    },
  },

  test: {
    globals: true,
    coverage: {
      excludeNodeModules: true,
      reporter: ['json-summary'],
      reportsDirectory: 'coverage',
      exclude: ['.*.*'],
    },
  },
});
