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
      },
      env: {
        browser: true,
        node: true,
        es2021: true,
      },
      extends: ['eslint:recommended', 'alloy', 'alloy/react', 'alloy/typescript'],
      plugins: [
        'import',
        'jest',
        'react',
        'react-hooks',
        'jsx-a11y',
        'storybook',
        'prettier',
        'sonarjs',
        '@typescript-eslint',
        '@limegrass/import-alias',
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
        '@limegrass/import-alias/import-alias': 'error',
        'no-restricted-imports': [
          'error',
          {
            patterns: ['src/*'],
          },
        ],

        // Enforcing readable formatting rules
        'prefer-destructuring': ['error'],
        'padding-line-between-statements': [
          'error',

          // After directives (like 'use-strict'), except between directives
          { blankLine: 'always', prev: 'directive', next: '*' },
          { blankLine: 'any', prev: 'directive', next: 'directive' },

          // After imports, except between imports
          { blankLine: 'always', prev: 'import', next: '*' },
          { blankLine: 'any', prev: 'import', next: 'import' },

          // Before and after every sequence of variable declarations
          { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
          { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
          { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },

          // Before and after class declaration, if, while, switch, try
          { blankLine: 'always', prev: '*', next: ['class', 'if', 'while', 'switch', 'try'] },
          { blankLine: 'always', prev: ['class', 'if', 'while', 'switch', 'try'], next: '*' },

          // Before return statements
          { blankLine: 'always', prev: '*', next: 'return' },
        ],

        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      },
    },
  ],
};
