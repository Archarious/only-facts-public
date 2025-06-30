'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface FloatingMenuProps {
  menu: React.ReactNode;
  heroRef?: React.RefObject<HTMLElement>;
  threshold?: number;
  className?: string;
}

const FloatingMenu = ({
  menu,
  heroRef,
  threshold = 100,
  className,
}: FloatingMenuProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Получаем высоту Hero секции
    if (heroRef?.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Показываем floating menu если проскроллили больше threshold
      const shouldShow = scrollTop > threshold;
      
      // Скрываем если доскроллили до Hero (учитываем его высоту)
      const isNearHero = heroRef?.current ? 
        scrollTop <= (heroHeight - 60) : // 60px запас для плавности
        false;

      setIsVisible(shouldShow && !isNearHero);
    };

    // Обновляем высоту Hero при ресайзе
    const handleResize = () => {
      if (heroRef?.current) {
        setHeroHeight(heroRef.current.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Инициальная проверка
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [threshold, heroRef, heroHeight]);

  return (
    <div
      ref={floatingRef}
      className={cn(
        'fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        className
      )}
      style={{
        // Убираем все transform'ы и используем только position и opacity
        top: isVisible ? '0px' : '-100px',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        // Обеспечиваем правильный стековый контекст без transforms
        isolation: 'isolate'
      }}
    >
      {/* Основной контейнер с отступами */}
      <div className="relative h-[90px] max-w-[1490px] mx-auto mt-[10px]">
        {/* Основной желтый блок */}
        <div 
          className={cn(
            'absolute inset-0 h-[90px]',
            'bg-[#FDE85B] rounded-[32px]',
            'shadow-[0px_2px_4px_rgba(156,154,0,0.35),0px_4px_20px_rgba(121,85,8,0.14)]',
            'p-11',
          )}
          style={{
            // Никаких transform'ов - только статичное позиционирование
            position: 'relative',
            zIndex: 51,
            // Позволяем порталам выходить за границы
            overflow: 'visible'
          }}
        >
          {/* Контейнер для menu без каких-либо transform'ов */}
          <div
            style={{
              position: 'relative',
              zIndex: 52,
              overflow: 'visible'
            }}
          >
            {menu}
          </div>
        </div>
      </div>
    </div>
  );
};

FloatingMenu.displayName = 'FloatingMenu';

export { FloatingMenu };
