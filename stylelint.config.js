/** @type {import('stylelint').Config} */
module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
    plugins: ['stylelint-order'],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'theme',
                    'variants',
                    'responsive',
                    'screen',
                    'layer',
                ],
            },
        ],
        'at-rule-no-deprecated': null,
        'order/properties-order': [],
        'no-descending-specificity': null,
        'selector-class-pattern': '^[a-z0-9_-]+$',
    },
}
