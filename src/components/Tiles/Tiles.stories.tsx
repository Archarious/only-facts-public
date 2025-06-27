import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { 
  ROI1, 
  ROI2, 
  ROI3, 
  Ethn1, 
  Ethn2, 
  Ethn3, 
  Ethn4, 
  Ethn5, 
  Regulators 
} from './index';

const meta: Meta = {
  title: 'Components/Tiles/All Tiles',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4 max-w-4xl">
      <ROI1 />
      <ROI2 />
      <ROI3 />
      <Ethn1 />
      <Ethn2 />
      <Ethn3 />
      <Ethn4 />
      <Ethn5 />
      <Regulators />
    </div>
  ),
};
