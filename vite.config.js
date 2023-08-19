import {defineConfig, transformWithEsbuild} from 'vite'
import babel from 'vite-plugin-babel';
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react(),
        babel()
    ],

});
