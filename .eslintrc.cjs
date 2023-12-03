module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  parserOptions: { ecmaVersion: 2021, sourceType: 'module' },
  ignorePatterns: ['node_modules/*'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          typescript: {},
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
      env: {
        browser: true,
        node: true,
        es2021: true,
      },
      extends: ['eslint:recommended', '@strv/react', '@strv/react/optional'],
      plugins: [
        'import',
        'react',
        'react-hooks',
        'jsx-a11y',
        'storybook',
        'prettier',
        'sonarjs',
        '@typescript-eslint',
        '@dword-design/import-alias',
        '@stylistic',
      ],
      rules: {
        // Organizing imports
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
            'newlines-between': 'always',
            pathGroups: [
              {
                pattern: '@/**',
                group: 'internal',
                position: 'after',
              },
            ],
            alphabetize: { order: 'asc', caseInsensitive: true },
          },
        ],
        // Enforcing import aliases
        '@dword-design/import-alias/prefer-alias': [
          'error',
          {
            alias: {
              '@/': 'src/',
            },
          },
        ],
        'no-restricted-imports': [
          'error',
          {
            patterns: ['.*', 'src/*'],
          },
        ],

        // Turning off these rules as TypeScript supports the new JSX transform in v4.1 and up
        // https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',

        // Enforcing explicit types for function return values and arguments
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',

        // Enforcing readable formatting rules
        'prefer-destructuring': ['error'],
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: '*', next: 'export' },
          { blankLine: 'never', prev: 'export', next: 'export' },

          { blankLine: 'always', prev: '*', next: 'return' },
          { blankLine: 'always', prev: '*', next: 'function' },
          { blankLine: 'always', prev: '*', next: 'switch' },
          { blankLine: 'always', prev: '*', next: 'if' },
          { blankLine: 'always', prev: '*', next: 'for' },
          { blankLine: 'always', prev: '*', next: 'while' },
          { blankLine: 'always', prev: '*', next: 'do' },
          { blankLine: 'always', prev: '*', next: 'try' },
          { blankLine: 'always', prev: '*', next: 'class' },
          { blankLine: 'always', prev: '*', next: 'block-like' },
          { blankLine: 'always', prev: '*', next: 'block' },
          { blankLine: 'always', prev: '*', next: 'multiline-expression' },
          { blankLine: 'always', prev: '*', next: 'multiline-const' },
          { blankLine: 'always', prev: '*', next: 'multiline-let' },
          { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
        ],

        // Misc.
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "warn",

        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      },
    },
  ],
};
