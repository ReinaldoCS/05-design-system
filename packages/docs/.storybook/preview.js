/** @type { import('@storybook/react').Preview } */
import { themes } from '@storybook/theming'
const preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark, // The replacement theme to use
    },
  },
};

export default preview;
