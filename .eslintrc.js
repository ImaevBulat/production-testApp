module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension':
        [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 0,
        'react/function-component-definition': 0,
        'import/prefer-default-export': 0,
        'react/react-in-jsx-scope': 0,
        'no-unused-vars': 1,
        indent: [2, 4],
        'react/require-default-props': 0,
        'react/jsx-props-no-spreading': 1,
        'no-shadow': 0,
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 1,
        'no-underscore-dangle': 0,
        'i18next/no-literal-string': [
            'error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
        ],
        'max-len': ['error', { code: 100, ignoreComments: true }],
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 0,
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 0,
                'max-len': 0,
            },
        },
    ],
};
