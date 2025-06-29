export interface ColorScheme {
  // general colors
  'main-bg': string
  'main-text': string
  'title-text': string

  // highlight colors
  'primary': string
  'primary-2': string
  'accent': string
  'accent-2': string
  
  // icon as uttons like chevron
  'icon-bg': string
  'icon-fill': string
  
  // tag for cards
  'tag-bg': string
  'tag-text': string

  // filters background
  'active-bg': string
  'inactive-bg': string
}

export const colorSchemes: Record<string, ColorScheme> = {
  // Красная схема (основная)
  'red-white': {
    'primary':      'var(--color-palette-aqua-100)',
    'primary-2':    'var(--color-palette-aqua-060)',
    'accent':       'var(--color-palette-white-100)',
    'accent-2':     'var(--color-palette-white-060)',
    'main-text':    'var(--color-palette-white-100)',
    'main-bg':      'var(--color-palette-red-100)',
    'title-text':   'var(--color-palette-white-100)',
    'icon-bg':      'var(--color-palette-white-100)',
    'icon-fill':    'var(--color-palette-black)',
    'tag-bg':       'var(--color-palette-white-040)',
    'tag-text':     'var(--color-palette-black-100)',
    'active-bg':    'var(--color-red-accent)',
    'inactive-bg':  'var(--color-gray)'
  },

  'gray-aqua': {
    'primary':      'var(--color-palette-red-100)',
    'primary-2':    'var(--color-palette-red-060)',
    'accent':       'var(--color-palette-aqua-120)',
    'accent-2':     'var(--color-palette-aqua-060)',
    'main-text':    '#202020',
    'main-bg':      'var(--color-palette-banana-100)',
    'title-text':   '#202020',
    'icon-bg':      '#FFFFFF',
    'icon-fill':    '#202020',
    'tag-bg':       'var(--color-palette-white-040)',
    'tag-text':     'var(--color-palette-black-060)',
    'active-bg':    '#8CD3E1', // aqua-100
    'inactive-bg':  'var(--color-palette-aqua-050)'
  },

  'aqua-yellow': {
    'primary':        'var(--color-palette-red-100)',
    'primary-2':         'var(--color-palette-red-060)',
    'accent':         'var(--color-palette-yellow-100)',
    'accent-2':          'var(--color-palette-yellow-060)',
    'main-text':          '#202020',
    'main-bg':    'var(--color-palette-aqua-100)',
    'title-text':         '#202020',
    'icon-bg':            'var(--color-palette-yellow-100)',
    'icon-fill':          '#202020',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           '#202020',
    'active-bg':   '#8CD3E1', // aqua-100
    'inactive-bg': 'var(--color-palette-aqua-050)'
  },

  'aqua-white': {
    'primary':        'var(--color-palette-red-100)',
    'primary-2':         'var(--color-palette-red-060)',
    'accent':         'var(--color-palette-white-100)',
    'accent-2':          'var(--color-palette-white-060)',
    'main-text':          '#202020',
    'main-bg':    'var(--color-palette-aqua-100)',
    'title-text':         '#202020',
    'icon-bg':            '#FFFFFF',
    'icon-fill':          '#202020',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           '#202020',
    'active-bg':   'var(--color-palette-grey-100)',
    'inactive-bg': 'var(--color-palette-grey-050)',
  },

  'red-aqua': {
    'primary':        'var(--color-palette-white-100)',
    'primary-2':         'var(--color-palette-white-060)',
    'accent':         'var(--color-palette-aqua-100)',
    'accent-2':          'var(--color-palette-aqua-060)',
    'main-text':          'var(--color-palette-white-100)',
    'main-bg':    'var(--color-palette-red-100)',
    'title-text':         'var(--color-palette-white-100)',
    'icon-bg':            'var(--color-palette-white-100)',
    'icon-fill':          'var(--color-palette-black)',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           'var(--color-palette-black-100)',
    'active-bg':   'var(--color-palette-white-100)',
    'inactive-bg': 'var(--color-palette-white-060)',
  },

  'grey-red': {
    'primary':        'var(--color-palette-aqua-120)',
    'primary-2':         'var(--color-palette-aqua-060)',
    'accent':         'var(--color-palette-red-100)',
    'accent-2':          'var(--color-palette-red-060)',
    'main-text':          '#202020',
    'main-bg':    '#F1EEEE',
    'title-text':         'var(--color-palette-red-100)',
    'icon-bg':            '#FFFFFF',
    'icon-fill':          '#202020',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           '#202020',
    'active-bg':   'var(--color-palette-aqua-060)',
    'inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'yellow-red': {
    'primary':        'var(--color-palette-white-100)',
    'primary-2':         'var(--color-palette-banana-100)',
    'accent':         'var(--color-palette-red-100)',
    'accent-2':          'var(--color-palette-red-060)',
    'main-text':          'var(--color-palette-black)',
    'main-bg':    'var(--color-palette-yellow-100)',
    'title-text':         'var(--color-palette-black)',
    'icon-bg':            'var(--color-palette-white)',
    'icon-fill':          'var(--color-palette-black)',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           'var(--color-palette-black)',
    'active-bg':   'var(--color-palette-white)',
    'inactive-bg': 'var(--color-palette-white-050)',
  },

  'blue-aqua': {
    'primary':        'var(--color-palette-yellow-100)',
    'primary-2':         'var(--color-palette-yellow-060)',
    'accent':         'var(--color-palette-aqua-100)',
    'accent-2':          'var(--color-palette-aqua-060)',
    'main-text':          '#FFFFFF',
    'main-bg':    'var(--color-palette-blue-100)',
    'title-text':         '#FFFFFF',
    'icon-bg':            '#FFFFFF',
    'icon-fill':          '#202020',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           '#202020',
    'active-bg':   'var(--color-palette-aqua-060)',
    'inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'aqua-blue-outline': {
    'primary':        'var(--color-palette-yellow-100)',
    'primary-2':         'var(--color-palette-yellow-060)',
    'accent':         'var(--color-palette-blue-100)',
    'accent-2':          'var(--color-palette-blue-060)',
    'main-text':          '#202020',
    'main-bg':    'var(--color-palette-aqua-120)',
    'title-text':         '#202020',
    'icon-bg':            '#FFFFFF',
    'icon-fill':          '#202020',
    'tag-bg':             '#D9E7F1',
    'tag-text':           '#202020',
    'active-bg':   'var(--color-palette-aqua-060)',
    'inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'aqua-red-outline': {
    'primary':        'var(--color-palette-aqua-100)',
    'primary-2':         'var(--color-palette-aqua-060)',
    'accent':         'var(--color-palette-red-100)',
    'accent-2':          'var(--color-palette-red-060)',
    'main-text':          '#202020',
    'main-bg':    'var(--color-palette-aqua-100)',
    'title-text':         'var(--color-palette-aqua-100)',
    'icon-bg':            'var(--color-palette-aqua-100)',
    'icon-fill':          '#202020',
    'tag-bg':             '#D9E7F1',
    'tag-text':           '#202020',
    'active-bg':   'var(--color-palette-aqua-060)',
    'inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'red-red-outline': {
    'primary':        'var(--color-palette-aqua-100)',
    'primary-2':         'var(--color-palette-aqua-060)',
    'accent':         'var(--color-palette-red-100)',
    'accent-2':          'var(--color-palette-red-060)',
    'main-text':          '#202020',
    'main-bg':    'var(--color-palette-red-100)',
    'title-text':         '#202020',
    'icon-bg':            'var(--color-palette-red-100)',
    'icon-fill':          '#FFFFFF',
    'tag-bg':             '#D9E7F1',
    'tag-text':           '#202020',
    'active-bg':   'var(--color-palette-aqua-060)',
    'inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'yellow-yellow-outline': {
    'primary':        'var(--color-palette-red-100)',
    'primary-2':         'var(--color-palette-red-060)',
    'accent':         'var(--color-palette-yellow-100)',
    'accent-2':          'var(--color-palette-yellow-060)',
    'main-text':          '#202020',
    'main-bg':    'var(--color-palette-yellow-100)',
    'title-text':         'var(--color-palette-red-100)',
    'icon-bg':            '#202020',
    'icon-fill':          '#FFFFFF',
    'tag-bg':             'var(--color-palette-banana-050)',
    'tag-text':           '#202020',
    'active-bg':   'var(--color-palette-aqua-060)',
    'inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'grey-yellow': {
    'primary':        'var(--color-palette-yellow-120)',
    'primary-2':         'var(--color-palette-yellow-060)',
    'accent':         'var(--color-palette-blue-100)',
    'accent-2':          'var(--color-palette-blue-060)',
    'main-text':          '#202020',
    'main-bg':    '#F1EEEE',
    'title-text':         '#202020',
    'icon-bg':            '#FFFFFF',
    'icon-fill':          '#202020',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           'var(--color-palette-charcoal-060)',
    'active-bg':   'var(--color-palette-aqua-060)',
    'inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'gray-blue': {
    'primary':        'var(--color-palette-aqua-100)',
    'primary-2':         'var(--color-palette-aqua-120)',
    'accent':         'var(--color-palette-blue-100)',
    'accent-2':          'var(--color-palette-blue-060)',
    'main-text':          '#202020',
    'main-bg':    '#F1EEEE',
    'title-text':         '#202020',
    'icon-bg':            '#FFFFFF',
    'icon-fill':          '#202020',
    'tag-bg':             'var(--color-palette-white-040)',
    'tag-text':           'var(--color-palette-charcoal-060)',
    'active-bg':   'var(--color-palette-aqua-060)',
    'inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'red-aqua-outline': {
    'primary':        'var(--color-palette-red-100)',
    'primary-2':         'var(--color-palette-red-060)',
    'accent':         'var(--color-palette-aqua-100)',
    'accent-2':          'var(--color-palette-aqua-060)',
    'main-text':          '#202020',
    'main-bg':    'var(--color-palette-red-100)',
    'title-text':         '#202020',
    'icon-bg':            'var(--color-palette-red-100)',
    'icon-fill':          '#FFFFFF',
    'tag-bg':             '#F1D9D9',
    'tag-text':           '#202020',
    'active-bg':   'var(--color-palette-aqua-060)',
    'inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'yellow-aqua-outline': {
    'primary':        'var(--color-palette-red-100)',
    'primary-2':         'var(--color-palette-red-060)',
    'accent':         'var(--color-palette-aqua-100)',
    'accent-2':          'var(--color-palette-aqua-060)',
    'main-text':          '#202020',
    'main-bg':    'var(--color-palette-yellow-100)',
    'title-text':         'var(--color-palette-red-100)',
    'icon-bg':            '#202020',
    'icon-fill':          '#FFFFFF',
    'tag-bg':             'var(--color-palette-banana-050)',
    'tag-text':           '#202020',
    'active-bg':   'var(--color-palette-aqua-060)',
    'inactive-bg': 'var(--color-palette-aqua-050)',
  },

  'blue-red-outline': {
    'primary':        'var(--color-palette-blue-100)',
    'primary-2':         'var(--color-palette-blue-060)',
    'accent':         'var(--color-palette-red-100)',
    'accent-2':          'var(--color-palette-red-060)',
    'main-text':          '#202020',
    'main-bg':    'var(--color-palette-blue-100)',
    'title-text':         'var(--color-palette-red-100)',
    'icon-bg':            'var(--color-palette-blue-100)',
    'icon-fill':          '#FFFFFF',
    'tag-bg':             '#D9E7F1',
    'tag-text':           '#202020',
    'active-bg':   'var(--color-palette-aqua-060)',
    'inactive-bg': 'var(--color-palette-aqua-050)',
  },

  // Банановая схема
  banana: {
    'primary': 'var(--color-palette-red-100)',
    'primary-2': 'var(--color-palette-red-060)',
    'accent': 'var(--color-palette-aqua-120)',
    'accent-2': 'var(--color-palette-aqua-060)',
    'main-text': 'var(--color-palette-black)',
    'main-bg': 'var(--color-palette-banana-100)',
    'title-text': 'var(--color-palette-black)',
    'icon-bg': 'var(--color-palette-whit)',
    'icon-fill': 'var(--color-palette-black)',
    'tag-bg': 'var(--color-palette-white-040)',
    'tag-text': 'var(--color-palette-grey-050)',
    'active-bg': 'var(--color-charcoal)',
    'inactive-bg': 'var(--color-palette-aqua-100)'
  },
}

/**
 * Получить цветовую схему по названию
 * @param schemeName - название схемы
 * @returns объект цветовой схемы или схема по умолчанию
 */
export function getColorScheme(schemeName: string): ColorScheme {
  return colorSchemes[schemeName] || Object.values(colorSchemes)[0]
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
