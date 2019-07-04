module.exports = {
  extends: [
    // 'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ['prettier', 'react-hooks', 'react'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-uses-vars': [2],
    'no-console': 0,
    'no-extra-semi': 'error',
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // default to latest and warns if missing
                           // It will default to "detect" in the future
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        "forbidExtraProps",
        {"property": "freeze", "object": "Object"},
        {"property": "myFavoriteWrapper"}
    ],
    "linkComponents": [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {"name": "Link", "linkAttribute": "to"}
    ]
  }
}
