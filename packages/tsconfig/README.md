# `@styx-ui/tsconfig`

This project maintains the TSConfig files for Styx UI. This package provides the convenience of not having to copy and paste the same configuration for every new project.

## Installation

```bash
yarn add @styx-ui/tsconfig --dev
# or
npm install @styx-ui/tsconfig --save-dev
# or
pnpm add -D @styx-ui/tsconfig
```

## Usage

In your `tsconfig.json` extend the configuration. The configuration options are `base`, `react` or `react-library`.

```json
{
  "extends": "@styx-ui/tsconfig/base.json"
}
```

All configuration options that use relative paths, such as `includes`, `excludes`, `outDir`, etc. are relative to the location of the `tsconfig` file itself. Therefore, these configs do not use those configuration options. They must be configured by the consuming project itself.

## License

This project is licensed under the [MIT License](https://github.com/harshcut/styx-ui/blob/main/packages/tsconfig/LICENSE).
