import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Dash } from './India'

const meta: Meta = {
  title: 'Pages/Dashboard',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Демонстрация полной страницы дашборда с Hero, Carousel, контентом и компонентами'
      }
    }
  }
}

export default meta
type Story = StoryObj

export const FullDashboardPage: Story = {
  render: () => (
    <>
      <Dash />
    </>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
