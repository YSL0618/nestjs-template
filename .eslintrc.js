module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js", "/dist/**/*"],
  rules: {
    quotes: ["error", "double",{avoidEscape: true}],
    semi: [2, "never"],
    "no-console": "off",
    "prettier/prettier": ["error", { semi: false }],

    camelcase: ["error", { properties: "never" }],
    // 'capitalized-comments': 'off',
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
  },
}