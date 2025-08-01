import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: '../coverage',
    },
    deps: {
      optimizer: {
        web: {
          include: [
            '@mui/icons-material',
          ],
        },
      },
    },
  },
});