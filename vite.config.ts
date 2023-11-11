import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            assets: '/src/assets',
            common: '/src/common',
            components: '/src/components',
            pages: '/src/pages',
            ui: 'src/ui',
            store: 'src/store',
        }
    },
})
