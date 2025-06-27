import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/sections/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)', // Добавляем stories
    '../src/stories/**/*.mdx' // Добавляем MDX файлы
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  framework: {
    'name': '@storybook/nextjs-vite',
    'options': {}
  },
  staticDirs: [
    '../public'
  ]
};
export default config;