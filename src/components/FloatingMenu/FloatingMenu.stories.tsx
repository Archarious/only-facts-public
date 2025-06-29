import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FloatingMenu } from './FloatingMenu';
import { useRef } from 'react';

const meta: Meta<typeof FloatingMenu> = {
  title: 'Components/FloatingMenu',
  component: FloatingMenu,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Плавающее меню, которое появляется при скролле и исчезает при приближении к Hero секции'
      }
    }
  },
  argTypes: {
    threshold: {
      control: { type: 'number', min: 50, max: 500, step: 50 },
      description: 'Порог скролла для появления меню (в пикселях)'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Мок меню для демонстрации
const SampleMenu = () => (
  <div className="flex items-center justify-between w-full">
    <div className="text-xl font-bold text-gray-900">OnlyFacts</div>
    <nav className="flex space-x-8">
      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
        Дашборд
      </a>
      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
        Аналитика
      </a>
      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
        Новости
      </a>
      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
        Настройки
      </a>
    </nav>
  </div>
);

// Мок Hero секции
const HeroSection = ({ heroRef }: { heroRef: React.RefObject<HTMLElement> }) => (
  <section 
    ref={heroRef}
    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white h-96 flex items-center justify-center"
  >
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Hero Section</h1>
      <p className="text-xl">Скроллите вниз, чтобы увидеть плавающее меню</p>
    </div>
  </section>
);

// Контент для демонстрации скролла
const ScrollContent = () => (
  <div className="space-y-8 p-8">
    {Array.from({ length: 20 }, (_, i) => (
      <div key={i} className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Секция {i + 1}</h3>
        <p className="text-gray-600">
          Это содержимое для демонстрации скролла. При скролле вниз появится плавающее меню, 
          а при возвращении к Hero секции оно исчезнет.
        </p>
      </div>
    ))}
  </div>
);

export const Default: Story = {
  render: (args) => {
    const heroRef = useRef<HTMLElement>(null);
    
    return (
      <div className="relative">
        <FloatingMenu 
          {...args}
          menu={<SampleMenu />}
          heroRef={heroRef}
        />
        <HeroSection heroRef={heroRef} />
        <ScrollContent />
      </div>
    );
  },
  args: {
    threshold: 100
  }
};

export const EarlyActivation: Story = {
  render: (args) => {
    const heroRef = useRef<HTMLElement>(null);
    
    return (
      <div className="relative">
        <FloatingMenu 
          {...args}
          menu={<SampleMenu />}
          heroRef={heroRef}
        />
        <HeroSection heroRef={heroRef} />
        <ScrollContent />
      </div>
    );
  },
  args: {
    threshold: 50
  }
};

export const LateActivation: Story = {
  render: (args) => {
    const heroRef = useRef<HTMLElement>(null);
    
    return (
      <div className="relative">
        <FloatingMenu 
          {...args}
          menu={<SampleMenu />}
          heroRef={heroRef}
        />
        <HeroSection heroRef={heroRef} />
        <ScrollContent />
      </div>
    );
  },
  args: {
    threshold: 300
  }
};

export const CustomStyling: Story = {
  render: (args) => {
    const heroRef = useRef<HTMLElement>(null);
    
    const CustomMenu = () => (
      <div className="flex items-center justify-between w-full">
        <div className="text-xl font-bold text-red-600">Custom Menu</div>
        <nav className="flex space-x-6">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
            Кнопка 1
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Кнопка 2
          </button>
        </nav>
      </div>
    );
    
    return (
      <div className="relative">
        <FloatingMenu 
          {...args}
          menu={<CustomMenu />}
          heroRef={heroRef}
          className="bg-gray-900/90 border-gray-700"
        />
        <HeroSection heroRef={heroRef} />
        <ScrollContent />
      </div>
    );
  },
  args: {
    threshold: 100
  }
};
