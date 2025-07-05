import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DropdownMenu } from './DropdownMenu';
import type { DropdownMenuItem } from './DropdownMenu';

const mockMenuItems: DropdownMenuItem[] = [
  { id: '1', label: 'Доходность рынка', href: '#revenue' },
  { id: '2', label: 'Регуляторы', href: '#regulators' },
  { id: '3', label: 'Поисковые запросы', href: '#search' },
  { id: '4', label: 'Лицензии', href: '#licenses' },
  { id: '5', label: 'Партнеры и конкуренты', href: '#partners' },
  { id: '6', label: 'Инсайты', href: '#insights' },
];

const TriggerButton = ({ children }: { children: React.ReactNode }) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
    {children}
  </button>
);

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Полупрозрачное выпадающее меню с backdrop blur эффектом на основе HeadlessUI'
      }
    }
  },
  argTypes: {
    trigger: {
      control: false,
      description: 'React элемент-триггер для открытия меню'
    },
    title: {
      control: 'text',
      description: 'Заголовок меню'
    },
    items: {
      control: false,
      description: 'Массив элементов меню'
    },
    width: {
      control: { type: 'range', min: 180, max: 400, step: 20 },
      description: 'Ширина меню в пикселях'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Основная история
export const Default: Story = {
  args: {
    trigger: <TriggerButton>Содержание раздела</TriggerButton>,
    title: 'Содержание раздела',
    items: mockMenuItems,
    width: 240
  }
};

// Без заголовка
export const WithoutTitle: Story = {
  args: {
    trigger: <TriggerButton>Меню</TriggerButton>,
    items: mockMenuItems.slice(0, 4),
    width: 220
  }
};

// С обработчиками onClick
export const WithClickHandlers: Story = {
  args: {
    trigger: <TriggerButton>Действия</TriggerButton>,
    title: 'Доступные действия',
    items: [
      { id: '1', label: 'Редактировать', onClick: () => alert('Редактирование') },
      { id: '2', label: 'Удалить', onClick: () => alert('Удаление') },
      { id: '3', label: 'Копировать', onClick: () => alert('Копирование') },
      { id: '4', label: 'Отключенный элемент', disabled: true },
    ],
    width: 200
  }
};

// Показать меню в открытом состоянии
export const OpenedState: Story = {
  render: () => (
    <div className="relative">
      <TriggerButton>Кликните для открытия</TriggerButton>
      <div className="mt-2 w-60 rounded-xl bg-white/45 backdrop-blur-[10px] shadow-[0px_4px_20px_rgba(0,0,0,0.15)] border border-white/20 p-5">
        <div className="mb-4">
          <h3 className="font-bold text-sm text-[#202020] leading-8">
            Содержание раздела
          </h3>
        </div>
        <div className="flex flex-col gap-0">
          {mockMenuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="block px-0 py-2 text-sm font-light text-[#202020] leading-8 hover:bg-white/20 hover:backdrop-blur-sm rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация внешнего вида открытого меню'
      }
    }
  }
};

// Программное управление меню
export const ExternalControl: Story = {
  render: () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const positionRef = React.useRef<HTMLElement>(null);

    return (
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Внешняя кнопка {isMenuOpen ? '(открыто)' : '(закрыто)'}
        </button>
        
        {/* DropdownMenu управляется внешне */}
        <DropdownMenu
          title="Управляется внешне"
          items={mockMenuItems}
          width={260}
          isOpen={isMenuOpen}
          onOpenChange={setIsMenuOpen}
          positionRef={positionRef}
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация программного управления меню через внешнюю кнопку без использования MenuButton. Меню закрывается при клике вне его области или по элементам меню.'
      }
    }
  }
};

// Несколько внешних меню
export const MultipleExternalMenus: Story = {
  render: () => {
    const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
    const button1Ref = React.useRef<HTMLButtonElement>(null);
    const button2Ref = React.useRef<HTMLButtonElement>(null);
    const button3Ref = React.useRef<HTMLButtonElement>(null);

    const handleMenuToggle = (menuId: string) => {
      setActiveMenu(activeMenu === menuId ? null : menuId);
    };

    return (
      <div className="flex gap-4">
        <button
          ref={button1Ref}
          onClick={() => handleMenuToggle('menu1')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Меню 1
        </button>
        
        <button
          ref={button2Ref}
          onClick={() => handleMenuToggle('menu2')}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          Меню 2
        </button>

        <button
          ref={button3Ref}
          onClick={() => handleMenuToggle('menu3')}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          Меню действий
        </button>

        <DropdownMenu
          title="Навигация 1"
          items={mockMenuItems.slice(0, 3)}
          width={200}
          isOpen={activeMenu === 'menu1'}
          onOpenChange={(open) => setActiveMenu(open ? 'menu1' : null)}
          positionRef={button1Ref}
        />
        
        <DropdownMenu
          title="Навигация 2"
          items={mockMenuItems.slice(3, 6)}
          width={220}
          isOpen={activeMenu === 'menu2'}
          onOpenChange={(open) => setActiveMenu(open ? 'menu2' : null)}
          positionRef={button2Ref}
        />

        <DropdownMenu
          title="Действия"
          items={[
            { id: '1', label: 'Редактировать', onClick: () => alert('Редактирование') },
            { id: '2', label: 'Удалить', onClick: () => alert('Удаление') },
            { id: '3', label: 'Копировать', onClick: () => alert('Копирование') },
          ]}
          width={180}
          isOpen={activeMenu === 'menu3'}
          onOpenChange={(open) => setActiveMenu(open ? 'menu3' : null)}
          positionRef={button3Ref}
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Несколько меню с внешним управлением, где только одно может быть открыто одновременно'
      }
    }
  }
};