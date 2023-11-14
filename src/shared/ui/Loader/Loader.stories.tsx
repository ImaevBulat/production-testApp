import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {},
};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {},
};
