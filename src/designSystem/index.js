import DesignSystem from 'design-system-utils';

const designTokens = {
  type: {
    baseFontSize: '16px',

    sizes: {
      s: '14px',
      base: '16px',
      m: '18px',
      l: '20px',
    },

    lineHeight: {
      small: 0.875,
      base: 1.0625,
      headings: 1.1,
      normal: 1.15,
    },

    fontWeight: {
      lighter: 300,
      normal: 400,
      500: 500,
      bold: 'bold',
      headings: 'bold',
    },
  },
  colors: {
    colorPalette: {
      bright: {
        base: '#f2f2f2',
        dark: '#cccccc',
        darker: '#bdbdbd',
      },
      dark: {
        base: '#000000',
        light: '#454F5B',
        lighter: '#5e5e5e',
      },
      white: {
        base: '#ffffff',
      },

      pink: {
        base: '#e5007e;',
      },

      green: {
        light: '#00ACAB',
      },

      backgroundTheme: {
        default: '#00ACAB',
        bright: '#F6F6F6',
      },

      menuItemColor: {
        default: '#cccccc',
        bright: '#5e5e5e',
      },

      menuItemColorSelected: {
        default: '#ffffff',
        bright: '#00ACAB',
      },

      menuItemBorder: {
        default: '#dcd165',
        bright: '#00ACAB',
      },
    },
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000,
  },

  opacity: {
    0: '0',
    10: '0.1',
    20: '0.2',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    80: '0.8',
    90: '0.9',
    100: '1',
  },

  spacing: {
    scale: {
      0: '0',
      1: '4',
      2: '8',
      3: '16',
      4: '24',
      5: '32',
      6: '64',
      7: '84',
      8: '128',
      9: '256',
      10: '500',
    },
  },

  borderRadius: {
    sm: '4',
    md: '8',
    lg: '12',
  },

  breakpoints: {
    sm: '359px',
    s: '767px',
    m: '768px',
    l: '1280px',
  },
};

designTokens.device = {
  sm: `(max-width: ${designTokens.breakpoints.sm})`,
  s: `(max-width: ${designTokens.breakpoints.s})`,
  m: `(min-width: ${designTokens.breakpoints.m})`,
  l: `(min-width: ${designTokens.breakpoints.l})`,
};

export default new DesignSystem(designTokens, { fontSizeUnit: 'rem' });
