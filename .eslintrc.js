module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard", "@vue/typescript"],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "off" : "off",
    semi: ["error", "always"],
    "no-extra-semi": 0,
    "comma-dangle": ["error", "always-multiline"],
    "no-multi-spaces": ["error", { ignoreEOLComments: false }],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "no-unused-vars": "error",
    quotes: ["error", "single"],
    "no-unused-vars": "off",
    "no-useless-constructor": "off"
  },

  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        mocha: true
      }
    }
  ]
};
