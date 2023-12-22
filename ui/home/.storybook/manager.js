import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Alief Prihantoro',
    brandUrl: 'https://alifprihantoro.netlify.com',
    brandImage: '/favicon-32x32.png',
    brandTarget: '_self',
  }),
});