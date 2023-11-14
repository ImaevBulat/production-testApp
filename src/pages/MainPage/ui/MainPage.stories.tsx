import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {},
};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {},
};
