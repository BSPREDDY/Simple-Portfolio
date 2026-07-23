import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        configure: (proxy) => {
          proxy.on('error', (err, req, res) => {
            if (err.code === 'ECONNREFUSED' || err.message?.includes('ECONNREFUSED')) {
              if (res && !res.headersSent) {
                res.writeHead(503, { 'Content-Type': 'application/json' });
                res.end(
                  JSON.stringify({
                    success: false,
                    message: 'Backend server not running (using local fallback data)',
                  })
                );
              }
            }
          });
        },
      },
      '/assets': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        bypass: (req) => {
          const localAssetPath = path.join(__dirname, 'public', req.url);
          if (fs.existsSync(localAssetPath)) {
            return req.url;
          }
        },
        configure: (proxy) => {
          proxy.on('error', (err, req, res) => {
            if (err.code === 'ECONNREFUSED' || err.message?.includes('ECONNREFUSED')) {
              if (res && !res.headersSent) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Asset not found');
              }
            }
          });
        },
      },
    },
  },
});

