import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = async () => [
    ...compat.extends(
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
    ),

    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: (await import('@typescript-eslint/parser')).default,
            parserOptions: {
                ecmaVersion: 'latest',
                sourcecType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@typescript-eslint': (await import('@typescript-eslint/eslint-plugin')).default,
            prettier: (await import('eslint-plugin-prettier')).default,
            'simple-import-sort': (await import('eslint-plugin-simple-import-sort')).default,
            'unused-imports': (await import('eslint-plugin-unused-imports')).default,
            import: (await import('eslint-plugin-import')).default,
            promise: (await import('eslint-plugin-promise')).default,
            security: (await import('eslint-plugin-security')).default,
            json: (await import('eslint-plugin-json')).default,
            unicorn: (await import('eslint-plugin-unicorn')).default,
            sonarjs: (await import('eslint-plugin-sonarjs')).default,
            perfectionist: (await import('eslint-plugin-perfectionist')).default,
        },
        rules: {
            'prettier/prettier': ['error'],
            'react/react-in-jsx-scope': 'off',
            'simple-import-sort/imports': 'warn',
            'simple-import-sort/exports': 'warn',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            'import/no-unresolved': 'error',
            'import/no-duplicates': 'error',
            'promise/always-return': 'off',
            'promise/catch-or-return': 'warn',
            'security/detect-object-injection': 'off',
            'unicorn/filename-case': [
                'warn',
                {
                    cases: {
                        kebabCase: true,
                        camelCase: true,
                    },
                },
            ],
            'unicorn/prefer-ternary': 'warn',
            'unicorn/no-array-push-push': 'warn',
            'unicorn/prefer-array-find': 'warn',
            'unicorn/no-null': 'warn',
            'unicorn/no-useless-undefined': 'warn',
            'sonarjs/no-duplicate-string': ['warn', { threshold: 5 }],
            'sonarjs/no-identical-functions': 'warn',
            'sonarjs/no-nested-template-literals': 'warn',
            'sonarjs/no-nested-switch': 'warn',
            'sonarjs/no-collapsible-if': 'warn',
            'sonarjs/cognitive-complexity': ['warn', 15],
            'perfectionist/sort-union-types': ['warn', { order: 'asc' }],
            'perfectionist/sort-objects': ['warn', { type: 'natural', order: 'asc' }],
            'perfectionist/sort-enums': ['warn', { type: 'natural', order: 'asc' }],
            'perfectionist/sort-interfaces': ['warn', { type: 'natural', order: 'asc' }],
        },
    },

    {
        files: ['**/*.json'],
        plugins: {
            json: (await import('eslint-plugin-json')).default,
        },
        rules: {
            'json/*': 'error',
        },
    },
]

export default eslintConfig()
