import '../dev.css'
import { withThemeByDataAttribute } from "@storybook/addon-themes";
/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light-theme",
      dark: "dark-theme",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
];

export default preview