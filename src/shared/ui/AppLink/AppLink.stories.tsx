import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    args: {
        children: 'Text',
        to: '/',
    },
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {

        theme: AppLinkTheme.PRIMARY,
    },
};
export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
};
export const Red: Story = {
    args: {
        theme: AppLinkTheme.RED,
    },
};
export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};
export const SecondaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
};
export const RedDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        theme: AppLinkTheme.RED,
    },
};
