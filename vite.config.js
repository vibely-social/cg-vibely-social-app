import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel';

export default defineConfig({
    plugins: [
        react(),
        babel()
    ],
    server: {
        watch: {
            usePolling: true,
        },
        host: true,
        strictPort: true,
        port: 5173,
    }
})
