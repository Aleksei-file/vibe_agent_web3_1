import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const PROJECT_CATALOGS = {
  nodeModules: 'node_modules',
  src: 'src',
};

const VENDOR_CHUNKS: Record<string, string[]> = {
  vendor: [
    'react',
    'react-dom',
    '@tanstack/react-query',
    'wagmi',
    'i18next',
    'react-i18next',
    'i18next',
    'i18next-browser-languagedetector',
  ],
  icons: ['react-country-flag'],
};

const PROJECT_CHUNKS: Record<string, string[]> = {
  shared: ['components/ui'],
};

const getChunkName = (
  chunkSet: Record<string, string[]>,
  libName: string,
  prefix: string = ''
): string | undefined => {
  for (const [chunkName, libs] of Object.entries(chunkSet)) {
    const match = libs.find((lib: string): boolean =>
      libName.includes(`${prefix}/${lib}/`)
    );
    if (match) return chunkName;
  }
};

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string): string | undefined {
          if (id.includes(PROJECT_CATALOGS.nodeModules)) {
            return (
              getChunkName(VENDOR_CHUNKS, id, PROJECT_CATALOGS.nodeModules) ||
              'vendor-others'
            );
          }
          if (id.includes(PROJECT_CATALOGS.src)) {
            const srcChunkName = getChunkName(
              PROJECT_CHUNKS,
              id,
              PROJECT_CATALOGS.src
            );
            if (srcChunkName) return srcChunkName;
          }
        },
      },
    },
  },
});
