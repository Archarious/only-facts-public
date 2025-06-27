'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/lib/icons';

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

const Menu = ({
  countries = [],
  userRole = "Гемблинг-оператор",
  sectionName = "Содержание раздела",
  userName = "Имя Пользователя",
  className,
  onCountryToggle,
  onSectionClick,
  onUserClick,
}: MenuProps) => {

  return (
    <div 
      className={cn(
        'w-full flex items-center justify-between px-8 py-4 bg-transparent',
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
              'w-10 h-10 rounded-full overflow-hidden',
              country.isActive 
                ? 'outline-4 outline-white' 
                : 'outline-0'
            )}
            title={country.name}
          >
            <img
              src={country.flagUrl}
              alt={`Флаг ${country.name}`}
              className="w-full h-full object-cover"
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
            // style={{ color: 'var(--color-palette-charcoal-100)' }}
          >
            {userRole}
          </span>
        </div>

        {/* Содержание раздела */}
        <button
          onClick={onSectionClick}
          className={cn(
            "text-sm font-black leading-[22px]",
            "text-(--color-palette-charcoal-100)",
            "hover:text-(--color-palette-red-100) transition-colors",
            "hover:cursor-pointer"
          )}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-palette-red-100)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-palette-charcoal-100)';
          }}
        >
          {sectionName}
        </button>

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
