'use client';

import * as React from 'react';
import {
  Disclosure as HeadlessDisclosure,
} from '@headlessui/react';
import { motion, useMotionValue, animate } from 'motion/react';
import { cn } from '@/lib/utils';
import { ChevronDown } from '@/lib/icons';
import { getColorScheme, type ColorSchemeName } from '@/lib/color-schemes'
import { TwoColorIcon } from '@/lib/icons/two-color-icon';

// TODO: Плохо ипортировать компонент в компонент. 
// Убрать потом
import { TypographyH3, DisclosureTitle } from '@/components/Typography';

export interface DisclosureProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
  defaultOpen?: boolean;
  clampLines?: number;
  icon?: React.ReactNode;
  colorScheme?: ColorSchemeName | string
  outline?: boolean;
}

const Disclosure = ({
  title,
  subtitle,
  children,
  className,
  buttonClassName,
  contentClassName,
  defaultOpen = false,
  clampLines = 1,
  icon,
  colorScheme = 'red-white',
  outline = false,
  ...props
}: DisclosureProps) => {
  const [isClamped, setIsClamped] = React.useState(!defaultOpen);
  const [contentHeight, setContentHeight] = React.useState<number | 'auto'>('auto');
  const [initialHeight, setInitialHeight] = React.useState<string>('24px');
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const [iconAnimationComplete, setIconAnimationComplete] = React.useState(defaultOpen);
  const contentRef = React.useRef<HTMLDivElement>(null);

  // Анимация для TwoColorIcon размера
  const iconSize = useMotionValue(defaultOpen ? 68 : 24);
  const [currentIconSize, setCurrentIconSize] = React.useState(defaultOpen ? 68 : 24);

  React.useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  React.useEffect(() => {
    if (clampLines > 1) {
      setInitialHeight(`${clampLines * 1.5}rem`);
    } else {
      setInitialHeight('24px');
    }
  }, [clampLines]);

  // Обновляем размер иконки при изменении состояния
  React.useEffect(() => {
    const targetSize = isOpen ? 68 : 24;
    
    const controls = animate(iconSize, targetSize, {
      duration: 0.2,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setCurrentIconSize(Math.round(latest));
      },
      onComplete: () => {
        setIconAnimationComplete(isOpen);
      }
    });

    return () => controls.stop();
  }, [isOpen, iconSize]);

  // Функция для проверки, является ли элемент TwoColorIcon
  const isTwoColorIcon = (element: React.ReactNode): boolean => {
    return React.isValidElement(element) && element.type === TwoColorIcon;
  };

  // Рендер иконки с правильной анимацией
  const renderIcon = () => {
    if (!icon) return null;

    if (isTwoColorIcon(icon)) {
      return React.cloneElement(icon as React.ReactElement, {
        size: currentIconSize,
      });
    }

    // Для обычных иконок используем scale
    return (
      <motion.div
        animate={{ scale: isOpen ? 1.8 : 1 }}
        transition={{ ease: "linear" }}
      >
        {icon}
      </motion.div>
    );
  };

  const scheme = getColorScheme(colorScheme);

  const disclosureStyle: React.CSSProperties = {
    // Border внутренний (не влияет на размеры)
    boxSizing: 'border-box',
    border: outline ? `1px solid ${scheme['main-bg']}` : 'none',

    // Фон зависит от outline
    backgroundColor: outline ? 'white' : scheme['main-bg'],
    color: scheme['main-text'],
  }

  // Функция для корректного расчета высоты контента
  const measureContentHeight = React.useCallback(() => {
    if (!contentRef.current) return 'auto';

    return new Promise<number>((resolve) => {
      const element = contentRef.current!;
      
      // Создаем клон элемента для измерения
      const clone = element.cloneNode(true) as HTMLElement;
      const parent = element.parentElement!;
      
      // Настраиваем стили клона для точного измерения
      clone.style.cssText = `
        position: absolute;
        top: -9999px;
        left: -9999px;
        width: ${element.offsetWidth}px;
        height: auto !important;
        max-height: none !important;
        overflow: visible !important;
        visibility: hidden;
        pointer-events: none;
        display: block;
      `;
      
      // Добавляем клон в DOM
      parent.appendChild(clone);
      
      // Даем браузеру время пересчитать layout
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const height = clone.getBoundingClientRect().height;
          parent.removeChild(clone);
          resolve(Math.ceil(height));
        });
      });
    });
  }, []);

  React.useEffect(() => {
    measureContentHeight().then((height) => {
      if (typeof height === 'number') {
        setContentHeight(height);
      }
    });
  }, [children, measureContentHeight]);

  return (
    <HeadlessDisclosure
      className={cn(
        'w-full text-left max-w-(--sizes-max-container-width)',
        className)}
      defaultOpen={defaultOpen}
      {...props}
    >
      {({ open }) => {
        // Обновляем локальное состояние при изменении open
        React.useEffect(() => {
          setIsOpen(open);
        }, [open]);

        return (
          <HeadlessDisclosure.Button
            className={cn(
              'rounded-xl p-10 overflow-hidden relative',
              'flex flex-row items-end-safe gap-4',
              'w-full cursor-pointer',
              buttonClassName
            )}
            style={disclosureStyle}
          >
            { icon &&
              <span
                className={cn(
                  (isOpen || iconAnimationComplete) 
                    ? 'absolute top-10 left-10 w-34 h-34' 
                    : 'w-12 h-12',
                )}
              >
                { renderIcon() }
              </span>
            }
            <div
              className={cn(
                'flex flex-col gap-4 w-full',
                isClamped && 'h-12',
              )}
            >
              <DisclosureTitle
                className={cn(
                  'overflow-hidden',
                  isClamped && `line-clamp-${clampLines}`,
                )}
                style={{
                  color: scheme['title-text'],
                }}
              >
                {title}
              </DisclosureTitle>

            </div>
            <HeadlessDisclosure.Panel
              static
              style={{
                color: scheme['main-text'],
              }}
            >
              <motion.div
                initial={{ height: initialHeight }}
                animate={{
                  height: open
                    ? contentHeight
                    : initialHeight
                }}
                transition={{ duration: 0.3 }}
                onAnimationStart={() => open && setIsClamped(false)}
                onAnimationComplete={() => !open && setIsClamped(true)}
                className={cn(
                  'w-311 transition-all overflow-hidden',
                  isClamped && `line-clamp-${clampLines}`,
                  contentClassName
                )}
              >
                <div
                  ref={contentRef}
                  className={cn(
                    "text-[16px] leading-[22px] p-0 m-0",
                    isClamped ? 'block' : 'flex flex-col gap-10',
                  )}
                  style={{
                    color: scheme['main-text'],
                  }}
                >
                  {children}
                </div>
              </motion.div>
            </HeadlessDisclosure.Panel>
            {/* Третья колонка - иконка разворачивания */}
            <div className="flex items-end h-full">
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown 
                  size={22}
                  circleColor={scheme['icon-bg']}
                  chevronColor={scheme['icon-fill']}
                />
              </motion.div>
            </div>
          </HeadlessDisclosure.Button>
        );
      }}
    </HeadlessDisclosure>
  );
}

Disclosure.displayName = 'Disclosure';

export { Disclosure };
