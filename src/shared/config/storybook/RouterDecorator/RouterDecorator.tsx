import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: Story = (story: ()=> Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
