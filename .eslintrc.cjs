module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
    node: true, // module 오류 해결. Node 환경 설정
  },
  // 플러그인이 제공하는 추천 규칙들이 실제로 적용됨. 미리 정의한 preset들로 rules 자동 적용.
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  // "규칙을 사용할 수 있게” 플러그인만 로드함. 근데 룰은 아직 적용되지 않음.
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'prettier'],
  // extends에서 설정된 룰을 덮어쓰거나, 개별적으로 추가/비활성화.
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'import/no-unresolved': 'error', // ✅ alias 인식 안 되면 잡아냄
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
