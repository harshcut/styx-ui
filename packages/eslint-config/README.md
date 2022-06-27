# `@styx-ui/eslint-config`

This project maintains the base ESLint configuration for Styx UI. This package provides the convenience of not having to copy and paste the same configuration for every new project.

## Installation

```bash
yarn add @styx-ui/eslint-config --dev
# or
npm install @styx-ui/eslint-config --save-dev
# or
pnpm add -D @styx-ui/eslint-config
```

## Usage

In your `.eslintrc.json` (or [alternative config](https://eslint.org/docs/user-guide/configuring/configuration-files) entry) extend the configuration.

```json
{
  "root": true,
  "extends": ["@styx-ui/eslint-config"]
}
```

> While it is possible to pass options to Prettier via your ESLint configuration file, it is not recommended because editor extensions such as `prettier-atom` and `prettier-vscode` will read `.prettierrc`, but won't read settings from ESLint, which can lead to an inconsistent experience.

To fix prettier errors by editor extensions, create a new `.prettierrc.json` (or [alternative config](https://prettier.io/docs/en/configuration) entry) file at the root of your project and paste the prettier options used in config.

```json
{
  "printWidth": 100,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "endOfLine": "auto"
}
```

## License

This project is licensed under the [MIT License](https://github.com/harshcut/styx-ui/blob/main/packages/eslint-config/LICENSE).
