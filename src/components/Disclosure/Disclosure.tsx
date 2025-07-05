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
import { TypographyH3NEW } from '@/components/Typography';

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
      return React.cloneElement(icon as React.ReactElement<{ size?: number }>, {
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

  // Улучшенная функция для измерения высоты
  const measureContentHeight = React.useCallback(() => {
    if (!contentRef.current) return;

    const element = contentRef.current;
    const motionContainer = element.parentElement;
    if (!motionContainer) return;

    // Получаем реальную ширину контейнера
    const containerWidth = motionContainer.offsetWidth;

    // Создаем временный контейнер с точной шириной
    const measureContainer = document.createElement('div');
    measureContainer.style.cssText = `
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: ${containerWidth}px;
      visibility: hidden;
      pointer-events: none;
    `;
    
    // Создаем клон контента с точными стилями
    const contentClone = element.cloneNode(true) as HTMLElement;
    contentClone.style.cssText = `
      text-align: left;
      font-size: 16px;
      line-height: 22px;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 40px;
      height: auto !important;
      max-height: none !important;
      overflow: visible !important;
      width: 100%;
    `;

    // Добавляем в DOM для измерения
    measureContainer.appendChild(contentClone);
    document.body.appendChild(measureContainer);

    // Ждем следующий кадр для точного измерения
    requestAnimationFrame(() => {
      const rect = contentClone.getBoundingClientRect();
      const measuredHeight = Math.ceil(rect.height);
      
      setContentHeight(measuredHeight);
      
      // Убираем временные элементы
      document.body.removeChild(measureContainer);
    });
  }, []);

  React.useEffect(() => {
    // Задержка для корректного измерения после рендера
    const timer = setTimeout(() => {
      measureContentHeight();
    }, 100);

    return () => clearTimeout(timer);
  }, [children, measureContentHeight]);

  // Обновляем локальное состояние при изменении open
  const [currentOpen, setCurrentOpen] = React.useState(defaultOpen);

  return (
    <div className={cn(
      'w-full text-left max-w-(--sizes-max-container-width)',
      className)}>
      <HeadlessDisclosure
        defaultOpen={defaultOpen}
        {...props}
      >
      {({ open }) => {
        // Обновляем локальное состояние при изменении open
        if (open !== currentOpen) {
          setCurrentOpen(open);
          setIsOpen(open);
        }

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
                'flex flex-col gap-4 w-full justify-center',
                isClamped && 'h-12',
              )}
            >
              <div 
                className={cn(
                  'overflow-hidden',
                  isClamped && `line-clamp-${clampLines}`,
                )}
                style={{
                  color: scheme['title-text'],
                }}
              >
                <TypographyH3NEW>
                  {title}
                </TypographyH3NEW>
              </div>

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
                    ? typeof contentHeight === 'number' ? `${contentHeight}px` : 'auto'
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
    </div>
  );
}

Disclosure.displayName = 'Disclosure';

export { Disclosure };
