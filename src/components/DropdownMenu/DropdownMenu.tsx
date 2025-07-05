'use client';

import * as React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { cn } from '@/lib/utils';

export interface DropdownMenuItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface DropdownMenuProps {
  trigger?: React.ReactNode;
  title?: string;
  items: DropdownMenuItem[];
  className?: string;
  menuClassName?: string;
  width?: number;
  as?: React.ElementType;
  // Пропсы для внешнего управления
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  positionRef?: React.RefObject<HTMLElement | null>;
}

const DropdownMenu = ({
  trigger,
  title,
  items,
  className,
  menuClassName,
  width = 240,
  as = 'button',
  isOpen,
  onOpenChange,
  positionRef,
}: DropdownMenuProps) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [menuPosition, setMenuPosition] = React.useState({ top: 0, left: 0 });

  // Функция для проверки, находится ли элемент внутри fixed контейнера
  const isInsideFixedContainer = React.useCallback((element: HTMLElement): boolean => {
    let current = element.parentElement;
    while (current && current !== document.body) {
      const style = window.getComputedStyle(current);
      if (style.position === 'fixed') {
        return true;
      }
      current = current.parentElement;
    }
    return false;
  }, []);

  const updateMenuPosition = React.useCallback(() => {
    const targetElement = positionRef?.current || buttonRef.current;
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const isInFixed = isInsideFixedContainer(targetElement);
      
      // Если находимся внутри fixed контейнера, не добавляем window.scrollY
      const scrollOffset = isInFixed ? 0 : window.scrollY;
      
      setMenuPosition({
        top: rect.bottom + scrollOffset - 40,
        left: rect.left + window.scrollX - 20,
      });
    }
  }, [positionRef, isInsideFixedContainer]);

  // Универсальный обработчик закрытия меню
  const closeMenu = React.useCallback(() => {
    onOpenChange?.(false);
  }, [onOpenChange]);

  // Принудительно разрешаем скролл страницы при открытии меню
  React.useEffect(() => {
    if (isOpen !== undefined && isOpen) {
      // Принудительно разрешаем скролл
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = originalPaddingRight;
      
      return () => {
        // Восстанавливаем только если не было принудительно изменено
        if (document.body.style.overflow === 'auto') {
          document.body.style.overflow = originalOverflow;
        }
      };
    }
  }, [isOpen]);

  // Обработка только кликов вне меню и клавиатуры
  React.useEffect(() => {
    if (isOpen !== undefined && isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        const menuElement = menuRef.current;
        const positionElement = positionRef?.current;
        const buttonElement = buttonRef.current;
        
        // Проверяем, что клик не был по меню, кнопке или элементу позиционирования
        if (
          menuElement && 
          !menuElement.contains(target) && 
          buttonElement &&
          !buttonElement.contains(target) &&
          (!positionElement || !positionElement.contains(target))
        ) {
          closeMenu();
        }
      };

      const handleKeyDown = (event: KeyboardEvent) => {
        // Закрываем при Escape или Tab
        if (event.key === 'Escape' || event.key === 'Tab') {
          closeMenu();
        }
      };

      // Добавляем только обработчики кликов и клавиатуры
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, closeMenu, positionRef]);

  // Обновляем позицию при изменении isOpen
  React.useEffect(() => {
    if (isOpen) {
      updateMenuPosition();
    }
  }, [isOpen, updateMenuPosition]);

  React.useEffect(() => {
    const targetElement = positionRef?.current || buttonRef.current;
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const isInFixed = isInsideFixedContainer(targetElement);
      
      if (!isInFixed) {
        // Если находимся внутри fixed контейнера, не добавляем window.scrollY
        const scrollOffset = isInFixed ? 0 : window.scrollY;
        
        setMenuPosition({
          top: rect.bottom + scrollOffset - 40,
          left: rect.left + window.scrollX - 20,
        });
      }
    }
  }, [isInsideFixedContainer, positionRef]);

  // Если используется внешнее управление без trigger
  if (isOpen !== undefined && !trigger) {
    return (
      <Menu 
        as="div" 
        className={cn("relative inline-block text-left", className)}
      >
        <MenuItems
          ref={menuRef}
          static
          modal={false}
          className={cn(
            "fixed z-[9999] rounded-xl",
            "bg-white/45 backdrop-blur-[10px]",
            "shadow-[0px_4px_20px_rgba(0,0,0,0.15)]",
            "flex flex-col gap-0 p-10",
            // Добавляем анимацию появления
            "transition-opacity duration-500 ease-out",
            "data-[open]:opacity-100 data-[open]:scale-100",
            "data-[closed]:opacity-0 data-[closed]:scale-0",
            menuClassName
          )}
          style={{ 
            width: `${width}px`,
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
            display: isOpen ? 'flex' : 'none',
            outline: 'none',
            // Устанавливаем transform-origin для корректного масштабирования
            transformOrigin: 'top left',
          }}
        >
          {/* Заголовок - всегда резервируем место */}
          <div className="mb-8">
            <h3 
              className="font-black text-sm leading-8"
              style={{ color: 'var(--color-palette-charcoal-100)' }}
            >
              {title || ''}
            </h3>
          </div>

          <div className="flex flex-col gap-8">
            {items.map((item) => (
              <MenuItem key={item.id} disabled={item.disabled}>
                {({ close }) => (
                  item.href ? (
                    <a
                      href={item.href}
                      className={cn(
                        "block p-0 text-sm font-light leading-[22px]",
                        "text-sm font-normal",
                        "text-(--color-palette-charcoal-100)",
                        "hover:text-(--color-palette-red-100) transition-colors",
                        "hover:cursor-pointer",
                        "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
                      )}
                      onClick={() => {
                        closeMenu();
                        close();
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      className={cn(
                        "block w-full text-left px-0 py-0 text-sm font-light leading-[22px]",
                        "text-sm font-normal",
                        "text-(--color-palette-charcoal-100)",
                        "hover:text-(--color-palette-red-100) transition-colors",
                        "hover:cursor-pointer",
                        "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
                      )}
                      onClick={() => {
                        if (!item.disabled) {
                          item.onClick?.();
                          closeMenu();
                          close();
                        }
                      }}
                    >
                      {item.label}
                    </button>
                  )
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    );
  }

  // Обычный режим с MenuButton
  return (
    <Menu 
      as="div" 
      className={cn("relative inline-block text-left", className)}
    >
      {trigger && (
        <MenuButton 
          as={as}
          ref={buttonRef} 
          className="flex items-center"
          onClick={updateMenuPosition}
        >
          {trigger}
        </MenuButton>
      )}

      <MenuItems
        ref={menuRef}
        modal={false}
        className={cn(
          "fixed z-[9999] rounded-xl",
          "bg-white/45 backdrop-blur-[10px]",
          "shadow-[0px_4px_20px_rgba(0,0,0,0.15)]",
          "flex flex-col gap-0 p-10",
          // Добавляем анимацию появления
          "transition-opacity duration-500 ease-out",
          "data-[open]:opacity-100 data-[open]:scale-100 data-[open]:translate-y-0",
          "data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:-translate-y-2",
          menuClassName
        )}
        style={{ 
          width: `${width}px`,
          top: `${menuPosition.top}px`,
          left: `${menuPosition.left}px`,
          outline: 'none',
          // Устанавливаем transform-origin для корректного масштабирования
          transformOrigin: 'top left',
        }}
      >
        {/* Заголовок - всегда резервируем место */}
        <div className="mb-8">
          <h3 
            className="font-black text-sm leading-8"
            style={{ color: 'var(--color-palette-charcoal-100)' }}
          >
            {title || ''}
          </h3>
        </div>

        <div className="flex flex-col gap-8">
          {items.map((item) => (
            <MenuItem key={item.id} disabled={item.disabled}>
              {({ close }) => (
                item.href ? (
                  <a
                    href={item.href}
                    className={cn(
                      "block p-0 text-sm font-light leading-[22px]",
                      "text-sm font-normal",
                      "text-(--color-palette-charcoal-100)",
                      "hover:text-(--color-palette-red-100) transition-colors",
                      "hover:cursor-pointer",
                      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
                    )}
                    onClick={() => {
                      close();
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    className={cn(
                      "block w-full text-left px-0 py-0 text-sm font-light leading-[22px]",
                      "text-sm font-normal",
                      "text-(--color-palette-charcoal-100)",
                      "hover:text-(--color-palette-red-100) transition-colors",
                      "hover:cursor-pointer",
                      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
                    )}
                    onClick={() => {
                      item.onClick?.();
                      close();
                    }}
                  >
                    {item.label}
                  </button>
                )
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

DropdownMenu.displayName = 'DropdownMenu';

export { DropdownMenu };
