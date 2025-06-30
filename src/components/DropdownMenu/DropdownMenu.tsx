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
  as?: React.ElementType | string;
  // Пропсы для внешнего управления
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  positionRef?: React.RefObject<HTMLElement>;
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

  const updateMenuPosition = React.useCallback(() => {
    const targetElement = positionRef?.current || buttonRef.current;
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY - 40,
        left: rect.left + window.scrollX - 20,
      });
    }
  }, [positionRef]);

  // Обработка кликов вне меню для статического режима
  React.useEffect(() => {
    if (isOpen !== undefined && !trigger && isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        const menuElement = menuRef.current;
        const positionElement = positionRef?.current;
        
        // Проверяем, что клик не был по меню или по элементу позиционирования
        if (
          menuElement && 
          !menuElement.contains(target) && 
          positionElement && 
          !positionElement.contains(target)
        ) {
          onOpenChange?.(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, trigger, onOpenChange, positionRef]);

  // Обновляем позицию при изменении isOpen
  React.useEffect(() => {
    if (isOpen) {
      updateMenuPosition();
    }
  }, [isOpen, updateMenuPosition]);

  // Если используется внешнее управление без trigger
  if (isOpen !== undefined && !trigger) {
    return (
      <Menu 
        as="div" 
        className={cn("relative inline-block text-left", className)}
        open={isOpen}
        onOpenChange={onOpenChange}
      >
        <MenuItems
          ref={menuRef}
          static
          className={cn(
            "fixed z-[9999] rounded-xl",
            "bg-white/45 backdrop-blur-[10px]",
            "shadow-[0px_4px_20px_rgba(0,0,0,0.15)]",
            "flex flex-col gap-0 p-10",
            menuClassName
          )}
          style={{ 
            width: `${width}px`,
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
            display: isOpen ? 'flex' : 'none',
            outline: 'none',
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
                        onOpenChange?.(false);
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
                          onOpenChange?.(false);
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
      open={isOpen}
      onOpenChange={onOpenChange}
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
        className={cn(
          "fixed z-[9999] rounded-xl",
          "bg-white/45 backdrop-blur-[10px]",
          "shadow-[0px_4px_20px_rgba(0,0,0,0.15)]",
          "flex flex-col gap-0 p-10",
          menuClassName
        )}
        style={{ 
          width: `${width}px`,
          top: `${menuPosition.top}px`,
          left: `${menuPosition.left}px`,
          outline: 'none',
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
                    onClick={close}
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
