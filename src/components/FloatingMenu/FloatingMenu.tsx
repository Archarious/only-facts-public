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
        'fixed top-[-10px] left-0 right-0 z-50 transition-transform duration-300 ease-in-out',
        isVisible ? 'translate-y-10' : '-translate-y-full',
        className
      )}
    >
      {/* Основной контейнер с отступами */}
      <div className="relative h-[100px] max-w-[1490px] mx-auto">
        {/* Основной желтый блок */}
        <div 
          className={cn(
            'absolute inset-0 h-[100px]',
            'bg-[#FDE85B] rounded-[32px]',
            'shadow-[0px_2px_4px_rgba(156,154,0,0.35),0px_4px_20px_rgba(121,85,8,0.14)]',
            'p-16',
          )}
        >
          {menu}
        </div>
      </div>
    </div>
  );
};

FloatingMenu.displayName = 'FloatingMenu';

export { FloatingMenu };
