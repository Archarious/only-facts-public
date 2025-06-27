import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TwoColorIcon } from '@/lib/icons/two-color-icon';
import { iconRegistry, type IconName } from '@/lib/icons/icon-registry';
import { getAvailableSchemes } from '@/lib/color-schemes';

const meta: Meta<typeof TwoColorIcon> = {
  title: 'Icons/TwoColorIcon',
  component: TwoColorIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Универсальный компонент для двухцветных иконок с поддержкой цветовых схем'
      }
    }
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(iconRegistry) as IconName[],
      description: 'Имя иконки из реестра'
    },
    size: {
      control: { type: 'range', min: 16, max: 128, step: 8 },
      description: 'Размер иконки в пикселях'
    },
    colorScheme: {
      control: 'select',
      options: getAvailableSchemes(),
      description: 'Цветовая схема'
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовая история
export const Default: Story = {
  args: {
    name: 'refresh',
    size: 32,
    colorScheme: 'red-white'
  }
};

// Все доступные иконки
export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8">
      {(Object.keys(iconRegistry) as IconName[]).map((iconName) => (
        <div key={iconName} className="flex flex-col items-center gap-2">
          <TwoColorIcon 
            name={iconName} 
            size={48} 
            colorScheme="red-white" 
          />
          <span className="text-sm font-medium">{iconName}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Все доступные иконки в реестре'
      }
    }
  }
};

// Разные размеры
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {[16, 24, 32, 48, 64].map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <TwoColorIcon 
            name="refresh" 
            size={size} 
            colorScheme="red-white" 
          />
          <span className="text-xs">{size}px</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Иконка в разных размерах'
      }
    }
  }
};

// Разные цветовые схемы
export const ColorSchemes: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-8">
      {getAvailableSchemes().slice(0, 9).map((scheme) => (
        <div key={scheme} className="flex flex-col items-center gap-2">
          <div 
            className="p-4 rounded-lg"
            style={{ 
              backgroundColor: scheme.includes('red') ? '#DC4444' : 
                              scheme.includes('blue') ? '#0173BC' :
                              scheme.includes('yellow') ? '#F4D03F' :
                              scheme.includes('aqua') ? '#8CD3E1' : '#F1EEEE'
            }}
          >
            <TwoColorIcon 
              name="refresh" 
              size={32} 
              colorScheme={scheme} 
            />
          </div>
          <span className="text-xs text-center">{scheme}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Иконка с разными цветовыми схемами'
      }
    }
  }
};

// Интерактивная история
export const Interactive: Story = {
  args: {
    name: 'chevron-down',
    size: 48,
    colorScheme: 'red-white'
  },
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная иконка с настраиваемыми параметрами'
      }
    }
  }
};

// Использование с className
export const WithClassName: Story = {
  render: () => (
    <div className="flex gap-4">
      <TwoColorIcon 
        name="refresh" 
        size={32} 
        colorScheme="red-white"
        className="hover:scale-110 transition-transform cursor-pointer"
      />
      <TwoColorIcon 
        name="chevron-down" 
        size={32} 
        colorScheme="red-white"
        className="hover:rotate-180 transition-transform duration-300"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Иконки с дополнительными CSS классами для анимации'
      }
    }
  }
};
