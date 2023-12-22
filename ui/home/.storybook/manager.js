import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Alief Prihantoro',
    brandUrl: 'https://alifprihantoro.netlify.com',
    brandImage: '/logo.svg',
    brandTarget: '_self',
  }),
});