import { Story } from '@storybook/react';
import 'app/styles/index.scss';

// export const StyleDecorator = (story: ()=> Story) => (
//     story()
// );

export const decorators = [
    (Story: Story) => (
    // Добавьте ваш декоратор здесь
    // Например, добавим стили к каждой истории (компоненту)
        <div style={{ margin: '3em' }}>
            <Story />
        </div>
    ),
];
