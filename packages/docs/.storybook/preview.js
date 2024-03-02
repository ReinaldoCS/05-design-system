/** @type { import('@storybook/react').Preview } */
import {themes} from '@storybook/theming'
const preview = {
  parameters: {
    docs: {
      theme: themes.dark, // The replacement theme to use
    },
    backgrounds: {
      default: themes.dark
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
