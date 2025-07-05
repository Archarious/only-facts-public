'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Logo } from '@/lib/icons';

import { DropdownMenu } from '@/components/DropdownMenu';
import type { DropdownMenuItem } from '@/components/DropdownMenu';

export interface Country {
  id: string;
  name: string;
  flagUrl: string;
  isActive?: boolean;
}

export interface MenuProps {
  countries?: Country[];
  userRole?: string;
  sectionName?: string;
  userName?: string;
  className?: string;
  onCountryToggle?: (countryId: string) => void;
  onSectionClick?: () => void;
  onUserClick?: () => void;
  onLogoClick?: () => void;
}

const SectionSummaryItems: DropdownMenuItem[] = [
  { id: '1', label: 'Доходность рынка', href: '#revenue' },
  { id: '2', label: 'Регуляторы', href: '#regulators' },
  { id: '3', label: 'Поисковые запросы', href: '#search' },
  { id: '4', label: 'Лицензии', href: '#licenses' },
  { id: '5', label: 'Партнеры и конкуренты', href: '#partners' },
  { id: '6', label: 'Инсайты', href: '#insights' },
];

const TriggerButton = ({ children }: { children: React.ReactNode }) => (
  <span
    className={cn(
      "text-sm font-black leading-[22px]",
      "text-(--color-palette-charcoal-100)",
      "hover:text-(--color-palette-red-100) transition-colors",
      "hover:cursor-pointer"
    )}
    style={{
      outline: 'none'
    }}
  >
    {children}
  </span>
);

const Menu = ({
  countries = [],
  userRole = "Гемблинг-оператор",
  userName = "Имя Пользователя",
  className,
  onCountryToggle,
  onUserClick,
}: MenuProps) => {
  // Добавляем состояние для управления DropdownMenu
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  // Упрощенный обработчик для закрытия dropdown при любом взаимодействии
  React.useEffect(() => {
    if (!isDropdownOpen) return;

    const closeDropdown = () => {
      console.log('Closing dropdown due to scroll/interaction');
      setIsDropdownOpen(false);
    };

    // Добавляем обработчики на все возможные события
    const events = ['scroll', 'wheel', 'touchmove', 'resize'];
    
    events.forEach(eventName => {
      document.addEventListener(eventName, closeDropdown, { passive: true, capture: true });
      window.addEventListener(eventName, closeDropdown, { passive: true, capture: true });
    });

    // Также закрываем при любом клике по документу (кроме самого dropdown)
    const handleClick = () => {
      console.log('Click detected, closing dropdown');
      closeDropdown();
    };

    // Небольшая задержка перед добавлением обработчика клика
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClick, { capture: true });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      events.forEach(eventName => {
        document.removeEventListener(eventName, closeDropdown, true);
        window.removeEventListener(eventName, closeDropdown, true);
      });
      document.removeEventListener('click', handleClick, true);
    };
  }, [isDropdownOpen]);

  // Обработчик изменения состояния dropdown
  const handleDropdownChange = React.useCallback((open: boolean) => {
    console.log('Dropdown state changing to:', open);
    setIsDropdownOpen(open);
  }, []);

  return (
    <div 
      className={cn(
        'w-full flex items-center justify-between px-8 py-4 bg-transparent',
        'select-none',
        className
      )}
    >
      <Logo scale={1} />

      {/* Центральный блок - Флаги стран */}
      <div className="flex items-center gap-5">
        {countries.slice(0, 10).map((country) => (
          <button
            key={country.id}
            onClick={() => onCountryToggle?.(country.id)}
            className={cn(
              'relative w-10 h-10 rounded-full overflow-hidden transition-all duration-200',
              'before:absolute before:inset-0 before:bg-white/0 before:transition-all before:duration-200',
              'hover:before:bg-white/70',
              'cursor-pointer',
              country.isActive 
                ? 'outline-4 outline-white' 
                : 'outline-0'
            )}
            title={country.name}
          >
            <Image
              src={country.flagUrl}
              alt={`Флаг ${country.name}`}
              className="w-full h-full object-cover"
              width={40}
              height={40}
            />
          </button>
        ))}
      </div>

      {/* Правый блок - Кнопки пользователя */}
      <nav className="flex items-center gap-8 flex-shrink-0">
        {/* Роль и тип оператора */}
        <div className="flex items-center gap-2">
          Роль:
          <span 
            className={cn(
              "text-sm font-black leading-[22px]",
              "text-(--color-palette-charcoal-100)",
              "hover:text-(--color-palette-red-100) transition-colors",
              "hover:cursor-pointer"
            )}
          >
            {userRole}
          </span>
        </div>

        {/* Содержание раздела с внешним управлением */}
        <DropdownMenu
          trigger={(<TriggerButton>Содержание раздела</TriggerButton>)}
          title="Содержание раздела"
          items={SectionSummaryItems}
          width={260}
          isOpen={isDropdownOpen}
          onOpenChange={handleDropdownChange}
        />

        {/* Имя пользователя */}
        <button
          onClick={onUserClick}
          className={cn(
            "text-sm font-black leading-[22px]",
            "text-(--color-palette-charcoal-100)",
            "hover:text-(--color-palette-red-100) transition-colors",
            "hover:cursor-pointer"
          )}
        >
          {userName}
        </button>
      </nav>
    </div>
  );
};

Menu.displayName = 'Menu';

export { Menu };
