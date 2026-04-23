import tseslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import docusaurus from '@docusaurus/eslint-plugin';
import prettier from 'eslint-config-prettier';

export default [
  // Ignore patterns (build output, deps, config files)
  {
    ignores: [
      'node_modules/**',
      'build/**',
      '.docusaurus/**',
      'babel.config.js',
    ],
  },

  // TypeScript + ESLint recommended (flat config)
  ...tseslint.configs['flat/recommended'],

  // React recommended (flat config)
  react.configs.flat.recommended,

  // React JSX runtime — disables react-in-jsx-scope for React 17+
  react.configs.flat['jsx-runtime'],

  // Docusaurus recommended (manually wired — plugin only exports legacy format)
  {
    plugins: {
      '@docusaurus': docusaurus,
    },
    rules: {
      '@docusaurus/string-literal-i18n-messages': 'error',
      '@docusaurus/no-html-links': 'warn',
      '@docusaurus/prefer-docusaurus-heading': 'warn',
    },
  },

  // React Hooks — only the two classic rules to match old config
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // Global settings
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Project-specific rule overrides (mirrors old .eslintrc.json)
  {
    rules: {
      'react/prop-types': 'off',
      'react/jsx-key': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  // Prettier — must be last to disable conflicting formatting rules
  prettier,
];
