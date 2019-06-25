module.exports = {
  extends: ["airbnb", "prettier"],
  parser: "babel-eslint",
  env: {
    jest: true,
    browser: true
  },
  plugins: ["prettier", "react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-use-before-define": "off",
    "react/prop-types": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: false
      }
    ],
    semi: ["error", "never"]
  }
};
