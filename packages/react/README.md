# `@styx-ui/react`

Styx UI provides a set of accessible, reusable, and minimalist components. This project is currently a work-in-progress until a major release in published.

## Installation

```bash
yarn add @styx-ui/react
# or
npm install @styx-ui/react
# or
pnpm add @styx-ui/react
```

## Usage

To use, import components from `@styx-ui/react`. Wrap the app with `StyxProvider` to use baseline styles. The project also exports prop types of components.

```jsx
import { StyxProvider, Button } from '@styx-ui/react'

const MyApp = () => {
  return (
    <StyxProvider>
      <Button>Hello Styx UI</Button>
    </StyxProvider>
  )
}
```

## License

This project is licensed under the [MIT License](https://github.com/harshcut/styx-ui/blob/main/packages/react/LICENSE).
