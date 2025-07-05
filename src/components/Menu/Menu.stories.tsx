import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Menu } from '@/components/Menu/Menu';
import type { Country } from '@/components/Menu/Menu';

// Мок данные стран с флагами
const mockCountries: Country[] = [
  { id: 'in', name: 'Индия', flagUrl: 'https://flagcdn.com/w40/in.png', isActive: true },
  { id: 'uy', name: 'Уругвай', flagUrl: 'https://flagcdn.com/w40/uy.png', isActive: false },
  { id: 'mx', name: 'Мексика', flagUrl: 'https://flagcdn.com/w40/mx.png', isActive: false },
  { id: 'mt', name: 'Мальта', flagUrl: 'https://flagcdn.com/w40/mt.png', isActive: false },
  { id: 'ua', name: 'Украина', flagUrl: 'https://flagcdn.com/w40/ua.png', isActive: false },
  { id: 'ru', name: 'Россия', flagUrl: 'https://flagcdn.com/w40/ru.png', isActive: false },
  { id: 'ge', name: 'Грузия', flagUrl: 'https://flagcdn.com/w40/ge.png', isActive: false },
  { id: 'il', name: 'Израиль', flagUrl: 'https://flagcdn.com/w40/il.png', isActive: false },
  { id: 'it', name: 'Италия', flagUrl: 'https://flagcdn.com/w40/it.png', isActive: false },
  { id: 'cn', name: 'Китай', flagUrl: 'https://flagcdn.com/w40/cn.png', isActive: false }
];

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Универсальный компонент меню с логотипом, переключателями стран и кнопками пользователя'
      }
    }
  },
  argTypes: {
    countries: {
      control: false,
      description: 'Массив стран с флагами'
    },
    userRole: {
      control: 'text',
      description: 'Роль пользователя'
    },
    sectionName: {
      control: 'text',
      description: 'Название раздела'
    },
    userName: {
      control: 'text',
      description: 'Имя пользователя'
    },
    onCountryToggle: {
      action: 'country-toggled',
      description: 'Обработчик переключения страны'
    },
    onSectionClick: {
      action: 'section-clicked',
      description: 'Обработчик клика по разделу'
    },
    onUserClick: {
      action: 'user-clicked',
      description: 'Обработчик клика по пользователю'
    },
    onLogoClick: {
      action: 'logo-clicked',
      description: 'Обработчик клика по логотипу'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Основная история
export const Default: Story = {
  args: {
    countries: mockCountries,
    userRole: 'Гемблинг-оператор',
    sectionName: 'Содержание раздела',
    userName: 'Георгий Георгадзе',
  }
};

// Основная история
export const Colored: Story = {
  args: {
    countries: mockCountries,
    userRole: 'Гемблинг-оператор',
    sectionName: 'Содержание раздела',
    userName: 'Георгий Георгадзе',
    className: 'bg-yellow-200',
  }
};

