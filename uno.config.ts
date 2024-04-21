import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss';

export default defineConfig({
  theme: {
    fontFamily: {
      nunito: 'Nunito Sans',
      inter: 'Inter',
    },
    boxShadow: {
      button: '0px 1px 2px 0px rgba(0, 0, 0, 0.12)',
      modal: '0px 4px 8px 0px rgba(0, 0, 0, 0.1)',
      dropdown: '0px 4px 4px 0px rgba(0, 0, 0, 0.08)',
    },
    colors: {
      dark: {
        500: '#404040',
        600: '#333333',
        700: '#1D1F20',
        800: '#1E1F21',
      },
      grey: {
        300: '#FAFAFA',
        400: '#EDEDED',
        500: '#E0E0E0',
        700: '#9E9E9E',
        800: '#757575',
      },
      blue: {
        100: '#F7FEFF',
        300: '#4DB5BC',
        700: '#01959F',
      },
      green: {
        100: '#F8FBF9',
        300: '#B8DBCA',
        700: '#43936C',
      },
      orange: {
        100: '#FFFCF5',
        300: '#FEEABC',
        700: '#FA9810',
      },
      red: {
        100: '#FFFAFA',
        300: '#F5B1B7',
        700: '#E11428',
      },
    },
  },
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
