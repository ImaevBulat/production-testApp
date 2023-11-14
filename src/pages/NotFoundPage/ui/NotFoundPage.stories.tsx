import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {},
};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {},
};
