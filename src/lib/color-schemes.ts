export interface ColorScheme {
  'primary-100': string
  'primary-60': string
  'accent-100': string
  'accent-60': string
  'body-text': string
  'body-background': string
  'title-text': string
  'icon-bg': string
  'icon-fill': string
  'tag-bg': string
  'tag-text': string
  'filter-active-bg': string
  'filter-inactive-bg': string
}

export const colorSchemes: Record<string, ColorScheme> = {
  // Красная схема (основная)
  'red-white': {
    'primary-100':        'var(--color-palette-aqua-100)',
    'primary-60':         'var(--color-palette-aqua-060)',
    'accent-100':         'var(--color-palette-white-100)',
    'accent-60':          'var(--color-palette-white-060)',
    'body-text':          'var(--color-palette-white-100)',
    'body-background':    'var(--color-palette-red-100)',
    'title-text':         'var(--color-palette-white-100)',
    'icon-bg':            'var(--color-palette-white-100)',
    'icon-fill':          'var(--color-palette-black)',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           'var(--color-palette-black-100)',
    'filter-active-bg':   'var(--color-red-accent)',
    'filter-inactive-bg': 'var(--color-gray)'
  },

  'gray-aqua': {
    'primary-100':        'var(--color-palette-red-100)',
    'primary-60':         'var(--color-palette-red-060)',
    'accent-100':         'var(--color-palette-aqua-120)',
    'accent-60':          'var(--color-palette-aqua-060)',
    'body-text':          '#202020',
    'body-background':    'var(--color-palette-banana-100)',
    'title-text':         '#202020',
    'icon-bg':            '#FFFFFF',
    'icon-fill':          '#202020',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           'var(--color-palette-black-060)',
    'filter-active-bg':   '#8CD3E1', // aqua-100
    'filter-inactive-bg': 'var(--color-palette-aqua-050)'
  },

  'aqua-yellow': {
    'primary-100':        'var(--color-palette-red-100)',
    'primary-60':         'var(--color-palette-red-060)',
    'accent-100':         'var(--color-palette-yellow-100)',
    'accent-60':          'var(--color-palette-yellow-060)',
    'body-text':          '#202020',
    'body-background':    'var(--color-palette-aqua-100)',
    'title-text':         '#202020',
    'icon-bg':            'var(--color-palette-yellow-100)',
    'icon-fill':          '#202020',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           '#202020',
    'filter-active-bg':   '#8CD3E1', // aqua-100
    'filter-inactive-bg': 'var(--color-palette-aqua-050)'
  },

  'aqua-white': {
    'primary-100':        'var(--color-palette-red-100)',
    'primary-60':         'var(--color-palette-red-060)',
    'accent-100':         'var(--color-palette-white-100)',
    'accent-60':          'var(--color-palette-white-060)',
    'body-text':          '#202020',
    'body-background':    'var(--color-palette-aqua-100)',
    'title-text':         '#202020',
    'icon-bg':            '#FFFFFF',
    'icon-fill':          '#202020',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           '#202020',
    'filter-active-bg':   'var(--color-palette-grey-100)',
    'filter-inactive-bg': 'var(--color-palette-grey-050)',
  },

  'red-aqua': {
    'primary-100':        'var(--color-palette-white-100)',
    'primary-60':         'var(--color-palette-white-060)',
    'accent-100':         'var(--color-palette-aqua-100)',
    'accent-60':          'var(--color-palette-aqua-060)',
    'body-text':          'var(--color-palette-white-100)',
    'body-background':    'var(--color-palette-red-100)',
    'title-text':         'var(--color-palette-white-100)',
    'icon-bg':            'var(--color-palette-white-100)',
    'icon-fill':          'var(--color-palette-black)',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           'var(--color-palette-black-100)',
    'filter-active-bg':   'var(--color-palette-white-100)',
    'filter-inactive-bg': 'var(--color-palette-white-060)',
  },

  'grey-red': {
    'primary-100':        'var(--color-palette-aqua-120)',
    'primary-60':         'var(--color-palette-aqua-060)',
    'accent-100':         'var(--color-palette-red-100)',
    'accent-60':          'var(--color-palette-red-060)',
    'body-text':          '#202020',
    'body-background':    '#F1EEEE',
    'title-text':         'var(--color-palette-red-100)',
    'icon-bg':            '#FFFFFF',
    'icon-fill':          '#202020',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           '#202020',
    'filter-active-bg':   'var(--color-palette-aqua-060)',
    'filter-inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'yellow-red': {
    'primary-100':        'var(--color-palette-white-100)',
    'primary-60':         'var(--color-palette-banana-100)',
    'accent-100':         'var(--color-palette-red-100)',
    'accent-60':          'var(--color-palette-red-060)',
    'body-text':          'var(--color-palette-black)',
    'body-background':    'var(--color-palette-yellow-100)',
    'title-text':         'var(--color-palette-black)',
    'icon-bg':            'var(--color-palette-white)',
    'icon-fill':          'var(--color-palette-black)',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           'var(--color-palette-black)',
    'filter-active-bg':   'var(--color-palette-white)',
    'filter-inactive-bg': 'var(--color-palette-white-050)',
  },

  'blue-aqua': {
    'primary-100':        'var(--color-palette-yellow-100)',
    'primary-60':         'var(--color-palette-yellow-060)',
    'accent-100':         'var(--color-palette-aqua-100)',
    'accent-60':          'var(--color-palette-aqua-060)',
    'body-text':          '#FFFFFF',
    'body-background':    'var(--color-palette-blue-100)',
    'title-text':         '#FFFFFF',
    'icon-bg':            '#FFFFFF',
    'icon-fill':          '#202020',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           '#202020',
    'filter-active-bg':   'var(--color-palette-aqua-060)',
    'filter-inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'aqua-blue-outline': {
    'primary-100':        'var(--color-palette-yellow-100)',
    'primary-60':         'var(--color-palette-yellow-060)',
    'accent-100':         'var(--color-palette-blue-100)',
    'accent-60':          'var(--color-palette-blue-060)',
    'body-text':          '#202020',
    'body-background':    'var(--color-palette-aqua-120)',
    'title-text':         '#202020',
    'icon-bg':            '#FFFFFF',
    'icon-fill':          '#202020',
    'tag-bg':             '#D9E7F1',
    'tag-text':           '#202020',
    'filter-active-bg':   'var(--color-palette-aqua-060)',
    'filter-inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'aqua-red-outline': {
    'primary-100':        'var(--color-palette-aqua-100)',
    'primary-60':         'var(--color-palette-aqua-060)',
    'accent-100':         'var(--color-palette-red-100)',
    'accent-60':          'var(--color-palette-red-060)',
    'body-text':          '#202020',
    'body-background':    'var(--color-palette-aqua-100)',
    'title-text':         'var(--color-palette-aqua-100)',
    'icon-bg':            'var(--color-palette-aqua-100)',
    'icon-fill':          '#202020',
    'tag-bg':             '#D9E7F1',
    'tag-text':           '#202020',
    'filter-active-bg':   'var(--color-palette-aqua-060)',
    'filter-inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'red-red-outline': {
    'primary-100':        'var(--color-palette-aqua-100)',
    'primary-60':         'var(--color-palette-aqua-060)',
    'accent-100':         'var(--color-palette-red-100)',
    'accent-60':          'var(--color-palette-red-060)',
    'body-text':          '#202020',
    'body-background':    'var(--color-palette-red-100)',
    'title-text':         '#202020',
    'icon-bg':            'var(--color-palette-red-100)',
    'icon-fill':          '#FFFFFF',
    'tag-bg':             '#D9E7F1',
    'tag-text':           '#202020',
    'filter-active-bg':   'var(--color-palette-aqua-060)',
    'filter-inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'yellow-yellow-outline': {
    'primary-100':        'var(--color-palette-red-100)',
    'primary-60':         'var(--color-palette-red-060)',
    'accent-100':         'var(--color-palette-yellow-100)',
    'accent-60':          'var(--color-palette-yellow-060)',
    'body-text':          '#202020',
    'body-background':    'var(--color-palette-yellow-100)',
    'title-text':         'var(--color-palette-red-100)',
    'icon-bg':            '#202020',
    'icon-fill':          '#FFFFFF',
    'tag-bg':             'var(--color-palette-banana-050)',
    'tag-text':           '#202020',
    'filter-active-bg':   'var(--color-palette-aqua-060)',
    'filter-inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'grey-yellow': {
    'primary-100':        'var(--color-palette-yellow-120)',
    'primary-60':         'var(--color-palette-yellow-060)',
    'accent-100':         'var(--color-palette-blue-100)',
    'accent-60':          'var(--color-palette-blue-060)',
    'body-text':          '#202020',
    'body-background':    '#F1EEEE',
    'title-text':         '#202020',
    'icon-bg':            '#FFFFFF',
    'icon-fill':          '#202020',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           'var(--color-palette-charcoal-060)',
    'filter-active-bg':   'var(--color-palette-aqua-060)',
    'filter-inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'gray-blue': {
    'primary-100':        'var(--color-palette-aqua-100)',
    'primary-60':         'var(--color-palette-aqua-120)',
    'accent-100':         'var(--color-palette-blue-100)',
    'accent-60':          'var(--color-palette-blue-060)',
    'body-text':          '#202020',
    'body-background':    '#F1EEEE',
    'title-text':         '#202020',
    'icon-bg':            '#FFFFFF',
    'icon-fill':          '#202020',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           'var(--color-palette-charcoal-060)',
    'filter-active-bg':   'var(--color-palette-aqua-060)',
    'filter-inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'red-aqua-outline': {
    'primary-100':        'var(--color-palette-red-100)',
    'primary-60':         'var(--color-palette-red-060)',
    'accent-100':         'var(--color-palette-aqua-100)',
    'accent-60':          'var(--color-palette-aqua-060)',
    'body-text':          '#202020',
    'body-background':    'var(--color-palette-red-100)',
    'title-text':         '#202020',
    'icon-bg':            'var(--color-palette-red-100)',
    'icon-fill':          '#FFFFFF',
    'tag-bg':             '#F1D9D9',
    'tag-text':           '#202020',
    'filter-active-bg':   'var(--color-palette-aqua-060)',
    'filter-inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'yellow-aqua-outline': {
    'primary-100':        'var(--color-palette-red-100)',
    'primary-60':         'var(--color-palette-red-060)',
    'accent-100':         'var(--color-palette-aqua-100)',
    'accent-60':          'var(--color-palette-aqua-060)',
    'body-text':          '#202020',
    'body-background':    'var(--color-palette-yellow-100)',
    'title-text':         'var(--color-palette-red-100)',
    'icon-bg':            '#202020',
    'icon-fill':          '#FFFFFF',
    'tag-bg':             'var(--color-palette-banana-050)',
    'tag-text':           '#202020',
    'filter-active-bg':   'var(--color-palette-aqua-060)',
    'filter-inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'blue-red-outline': {
    'primary-100':        'var(--color-palette-blue-100)',
    'primary-60':         'var(--color-palette-blue-060)',
    'accent-100':         'var(--color-palette-red-100)',
    'accent-60':          'var(--color-palette-red-060)',
    'body-text':          '#202020',
    'body-background':    'var(--color-palette-blue-100)',
    'title-text':         'var(--color-palette-red-100)',
    'icon-bg':            'var(--color-palette-blue-100)',
    'icon-fill':          '#FFFFFF',
    'tag-bg':             '#D9E7F1',
    'tag-text':           '#202020',
    'filter-active-bg':   'var(--color-palette-aqua-060)',
    'filter-inactive-bg': 'var(--color-palette-aqua-050)',
  },

  // Банановая схема
  banana: {
    'primary-100': 'var(--color-palette-red-100)',
    'primary-60': 'var(--color-palette-red-060)',
    'accent-100': 'var(--color-palette-aqua-120)',
    'accent-60': 'var(--color-palette-aqua-060)',
    'body-text': 'var(--color-palette-black)',
    'body-background': 'var(--color-palette-banana-100)',
    'title-text': 'var(--color-palette-black)',
    'icon-bg': 'var(--color-palette-whit)',
    'icon-fill': 'var(--color-palette-black)',
    'tag-bg': 'var(--color-palette-white-040)',
    'tag-text': 'var(--color-palette-grey-050)',
    'filter-active-bg': 'var(--color-charcoal)',
    'filter-inactive-bg': 'var(--color-palette-aqua-100)'
  },
}

/**
 * Получить цветовую схему по названию
 * @param schemeName - название схемы
 * @returns объект цветовой схемы или схема по умолчанию
 */
export function getColorScheme(schemeName: string): ColorScheme {
  return colorSchemes[schemeName] || colorSchemes.red
}

/**
 * Получить список всех доступных схем
 * @returns массив названий схем
 */
export function getAvailableSchemes(): string[] {
  return Object.keys(colorSchemes)
}

/**
 * Проверить существование схемы
 * @param schemeName - название схемы
 * @returns true если схема существует
 */
export function isValidScheme(schemeName: string): boolean {
  return schemeName in colorSchemes
}

/**
 * Применить цветовую схему к CSS переменным элемента
 * @param element - DOM элемент
 * @param schemeName - название схемы
 */
export function applyColorScheme(element: HTMLElement, schemeName: string): void {
  const scheme = getColorScheme(schemeName)
  
  Object.entries(scheme).forEach(([key, value]) => {
    element.style.setProperty(`--scheme-${key}`, value)
  })
}

export type ColorSchemeName = keyof typeof colorSchemes
