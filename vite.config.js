import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath, URL} from 'node:url'

export default defineConfig({
    base: '/',
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: fileURLToPath(new URL('./index.html', import.meta.url)),
                desert: fileURLToPath(new URL('./desert.html', import.meta.url)),
                mountains: fileURLToPath(new URL('./mountains.html', import.meta.url)),
                gorge: fileURLToPath(new URL('./gorge.html', import.meta.url)),
                riding: fileURLToPath(new URL('./riding.html', import.meta.url)),
                info: fileURLToPath(new URL('./info.html', import.meta.url)),
                guesthouse: fileURLToPath(new URL('./guesthouse.html', import.meta.url)),
                contact: fileURLToPath(new URL('./contact.html', import.meta.url)),
                booking: fileURLToPath(new URL('./booking.html', import.meta.url)),
            }
        }
    }
})
