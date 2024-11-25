import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import dts from 'vite-plugin-dts'

export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'pluralizer',
            formats: ['es'],
        },
    },
    plugins: [
        dts({
            copyDtsFiles: true,
            include: [
                'src/',
            ],
            exclude: [
                '**/*.test.ts',
            ],
        }),
    ],
})
