import type { StorybookViteConfig } from '@storybook/builder-vite'

const config: StorybookViteConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-controls'],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
  },
  framework: '@storybook/react',
  core: { builder: '@storybook/builder-vite', disableTelemetry: true },
  features: { storyStoreV7: true },
  async viteFinal(config) {
    return config
  },
}

module.exports = config
