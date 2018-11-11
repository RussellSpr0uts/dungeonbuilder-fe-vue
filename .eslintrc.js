module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/typescript'
  ],
  rules: {
    'no-console': 0, // KEEP
    'vue/html-self-closing': 0, // KEEP
    'vue/max-attributes-per-line': 0, // KEEP
    'prettier/prettier': 0, // KEEP
    'vue/require-default-prop': 0, // KEEP
    'no-undef': 0, // KEEP disabled for third party scripts
    'vue/attributes-order': 0, // KEEP
    'vue/require-prop-types': 2, // KEEP for now, unsure about two props, sort buttons
    'no-useless-escape': 1, // KEEP
    'no-redeclare': 2, // KEEP off for now
    'vue/attribute-hyphenation': 0,
    'no-var': 2,
    'prefer-const': 2,
    'vue/html-quotes': 2,
    'vue/html-indent': 2,
    'vue/this-in-template': 2,
    'no-unused-vars': 1,
    'no-dupe-keys': 2,
    'no-global-assign': 2,
    'vue/mustache-interpolation-spacing': 2,
    'vue/v-bind-style': 2,
    'vue/v-on-style': 2,
    'vue/no-multi-spaces': 2,
    'vue/name-property-casing': 2,
    'no-unused-vars': false,
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'methods',
          // "LIFECYCLE_HOOKS",
          'beforeCreate',
          'created',
          'beforeMount',
          'mounted',
          'beforeUpdate',
          'updated',
          'activated',
          'deactivated',
          'beforeDestroy',
          'destroyed',
          // end lifecycle
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
