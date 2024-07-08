module.exports = {
  extends: ["expo", "plugin:prettier/recommended", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: ["dist", "node_modules", "scripts", ".eslintrc.js", "babel.config.js"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        bracketSpacing: true,
        endOfLine: "lf",
        parser: "typescript",
        semi: true,
        singleQuote: false,
        useTabs: false,
        trailingComma: "es5",
      },
    ],
    "no-console": "warn",
    "@typescript-eslint/method-signature-style": ["error", "method"],
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],
    "@typescript-eslint/prefer-nullish-coalescing": [
      "error",
      { ignoreConditionalTests: true },
    ],
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowNullableString: true,
        allowNullableNumber: true,
        allowNullableBoolean: true,
      },
    ],
  },
  parserOptions: {
    project: "./tsconfig.json"
  }
};
