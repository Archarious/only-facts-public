import type { Preview } from '@storybook/nextjs-vite'
import { Geologica, Dela_Gothic_One } from 'next/font/google';

import '../src/app/globals.css'; // Tailwind

export const geologica = Geologica({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

// Добавляем Dela Gothic One через next/font/google
export const delaGothicOne = Dela_Gothic_One({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  display: 'swap',
  variable: '--font-dela-gothic',
})

export const decorators = [
  (Story) => (
    <div className={`${geologica.className}`}>
      <Story />
    </div>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    viewport: {
      viewports: {
        custom1361: {
          name: 'Custom 1361px',
          styles: {
            width: '1361px',
            height: '100%',
          },
          type: 'desktop',
        },
      },
    },
    defaultViewport: 'custom1361',

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;