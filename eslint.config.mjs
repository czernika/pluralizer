// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylisticTs from '@stylistic/eslint-plugin-ts'

export default tseslint.config(
    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
        ],
    },
    eslint.configs.recommended,
    tseslint.configs.stylistic,
    {
        plugins: {
            '@stylistic/ts': stylisticTs,
        },

        // @see https://typescript-eslint.io/rules/
        rules: {
            '@stylistic/ts/semi': ['warn', 'never'],
            '@stylistic/ts/quotes': ['warn', 'single'],
            '@stylistic/ts/comma-dangle': ['warn', 'always-multiline'],
            'no-console': ['error', {
                allow: ['warn', 'error'],
            }],
        },
    },
)
