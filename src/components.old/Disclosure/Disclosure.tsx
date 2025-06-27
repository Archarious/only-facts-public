'use client';

import * as React from 'react';
import {
  Disclosure as HeadlessDisclosure,
} from '@headlessui/react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronDown } from '@/lib/icons';

export interface DisclosureProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
  defaultOpen?: boolean;
  clampLines?: number;
  icon?: React.ReactNode;
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
  ...props
}: DisclosureProps) => {
  const [isClamped, setIsClamped] = React.useState(!defaultOpen);
  const [contentHeight, setContentHeight] = React.useState<number | 'auto'>('auto');
  const [initialHeight, setInitialHeight] = React.useState<string>('24px');
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  React.useEffect(() => {
    if (clampLines > 1) {
      // const lineHeight = parseFloat(getComputedStyle(document.documentElement).lineHeight);
      // setInitialHeight(`${lineHeight * clampLines}px`);
      setInitialHeight(`${clampLines * 1.5}rem`); // Assuming 1.5rem is the line height
    } else {
      setInitialHeight('24px');
    }
  }, [clampLines]);

  return (
    <HeadlessDisclosure
      className={cn('w-full', className)}
      defaultOpen={defaultOpen}
      {...props}
    >
      {({ open }) => (
          <HeadlessDisclosure.Button
            className={cn(
              'rounded-xl p-10 bg-gray-200 overflow-hidden',
              buttonClassName
            )}
          >
            {/* Основная колонка - заголовок и контент */}
            <div className="flex flex-col gap-1">
              <span
                className={cn(
                  'w-126 min-w-126 max-w-126',
                  isClamped && `line-clamp-${clampLines}`,
                )}
              >
                {title}
              </span>
              <HeadlessDisclosure.Panel static>
                <motion.div
                  initial={{ height: initialHeight }}
                  animate={{
                    height: open
                      ? contentHeight
                      : initialHeight
                  }}
                  transition={{ duration: 0.1 }}
                  onAnimationStart={() => open && setIsClamped(false)}
                  onAnimationComplete={() => !open && setIsClamped(true)}
                  className={cn(
                    'overflow-hidden transition-all',
                    isClamped && `line-clamp-${clampLines}`,
                    contentClassName
                  )}
                >
                  <div ref={contentRef} className="text-gray-700">
                    {children}
                  </div>
                </motion.div>
              </HeadlessDisclosure.Panel>
            </div>

            {/* Правая колонка - иконка разворачивания */}
            <div className="flex items-end justify-center h-full pb-1">
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown 
                  size={22}
                  circleColor="#666666"
                  chevronColor="white"
                />
              </motion.div>
            </div>
          </HeadlessDisclosure.Button>
      )}
    </HeadlessDisclosure>
  );
}

Disclosure.displayName = 'Disclosure';

export { Disclosure };
