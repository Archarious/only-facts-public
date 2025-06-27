import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ColorSchemeDemo } from './ColorSchemeDemo'

const meta: Meta<typeof ColorSchemeDemo> = {
  title: 'System/Color Schemes',
  component: ColorSchemeDemo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Система цветовых схем для компонентов с возможностью переключения через пропсы'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllSchemes: Story = {
  render: () => (
    <div className="w-full max-w-6xl">
      <ColorSchemeDemo />
    </div>
  )
}
