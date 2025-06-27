import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero } from './Hero';
import { Menu } from '@/components/Menu'; 
import { DropdownMenu } from '@/components/DropdownMenu';
import type { DropdownMenuItem } from '@/components/DropdownMenu';

const mockMenuItems: DropdownMenuItem[] = [
  { id: 'overview', label: 'Обзор', href: '#overview' },
  { id: 'regulations', label: 'Регулирование', href: '#regulations' },
  { id: 'news', label: 'Новости', href: '#news' },
  { id: 'analytics', label: 'Аналитика', href: '#analytics' },
];

const MenuTrigger = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center space-x-2 cursor-pointer">
    <span className="text-base font-medium text-black/70 hover:text-black transition-colors">
      {children}
    </span>
    <svg 
      width="12" 
      height="8" 
      viewBox="0 0 12 8" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-70"
    >
      <path 
        d="M1 1.5L6 6.5L11 1.5" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Hero секция с заголовком, описанием и навигационными карточками'
      }
    }
  },
  argTypes: {
    countryTitle: {
      control: 'text',
      description: 'Название страны для заголовка'
    },
    menu: {
      control: false,
      description: 'React компонент для меню'
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;


const dropdownMenu = (
  <DropdownMenu
    trigger={<MenuTrigger>Содержание раздела</MenuTrigger>}
    title="Содержание раздела"
    items={mockMenuItems}
    width={240}
  />
)

const mainMenu = (
  <Menu
    countries={[
      { id: 'in', name: 'Индия', flagUrl: '/flags/in-circle-20.png', isActive: true },
      { id: 'uy', name: 'Уругвай', flagUrl: '/flags/uy-circle-20.png', isActive: false },
      { id: 'mx', name: 'Мексика', flagUrl: '/flags/mx-circle-20.png', isActive: false },
      { id: 'mt', name: 'Мальта', flagUrl: '/flags/mt-circle-20.png', isActive: false },
      { id: 'ua', name: 'Украина', flagUrl: '/flags/ua-circle-20.png', isActive: false },
      { id: 'ru', name: 'Россия', flagUrl: '/flags/ru-circle-20.png', isActive: false },
      { id: 'ge', name: 'Грузия', flagUrl: '/flags/ge-circle-20.png', isActive: false },
      { id: 'il', name: 'Израиль', flagUrl: '/flags/il-circle-20.png', isActive: false },
      { id: 'it', name: 'Италия', flagUrl: '/flags/it-circle-20.png', isActive: false },
      { id: 'cn', name: 'Китай', flagUrl: '/flags/cn-circle-20.png', isActive: false }
    ]}
    userRole="Гемблинг-оператор"
    sectionName="Содержание раздела"
    userName="Имя Пользователя"
    onCountryToggle={(countryId) => console.log(`Переключена страна: ${countryId}`)}
    onSectionClick={() => console.log('Клик по разделу')}
    onUserClick={() => console.log('Клик по пользователю')}
    onLogoClick={() => console.log('Клик по логотипу')}
  />
);

// Основная история с DropdownMenu
export const Default: Story = {
  args: {
    countryTitle: "Индия",
    menu: mainMenu,
  }
};

// С другим названием страны
export const DifferentCountry: Story = {
  args: {
    countryTitle: "Бразилия",
    menu: (
      <DropdownMenu
        trigger={<MenuTrigger>Навигация</MenuTrigger>}
        title="Разделы"
        items={[
          { id: 'market', label: 'Рынок', href: '#market' },
          { id: 'laws', label: 'Законодательство', href: '#laws' },
          { id: 'operators', label: 'Операторы', href: '#operators' },
          { id: 'trends', label: 'Тренды', href: '#trends' },
        ]}
        width={220}
      />
    )
  }
};

// Без меню
export const WithoutMenu: Story = {
  args: {
    countryTitle: "Индия"
  }
};

// С программным управлением меню
export const WithExternalMenuControl: Story = {
  render: (args) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const ExternalMenuTrigger = () => (
      <button
        ref={buttonRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <span className="text-base font-medium text-black/70 hover:text-black transition-colors">
          Меню разделов {isMenuOpen ? '(открыто)' : ''}
        </span>
        <svg 
          width="12" 
          height="8" 
          viewBox="0 0 12 8" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`opacity-70 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
        >
          <path 
            d="M1 1.5L6 6.5L11 1.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );

    return (
      <Hero
        {...args}
        menu={
          <div className="relative">
            <ExternalMenuTrigger />
            <DropdownMenu
              title="Содержание раздела"
              items={mockMenuItems}
              width={260}
              isOpen={isMenuOpen}
              onOpenChange={setIsMenuOpen}
              positionRef={buttonRef}
            />
          </div>
        }
      />
    );
  },
  args: {
    countryTitle: "Индия"
  },
  parameters: {
    docs: {
      description: {
        story: 'Hero с внешним управлением состоянием DropdownMenu'
      }
    }
  }
};

// Демонстрация адаптивности (скрытие меню на мобильных)
export const ResponsiveDemo: Story = {
  args: {
    countryTitle: "Индия",
    menu: (
      <DropdownMenu
        trigger={<MenuTrigger>Содержание</MenuTrigger>}
        title="Навигация"
        items={mockMenuItems}
        width={200}
      />
    )
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'На мобильных устройствах (< 768px) меню скрывается'
      }
    }
  }
};
