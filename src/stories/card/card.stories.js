import React from 'react';
import { Button } from '@storybook/react/demo';
import { Card } from '../../components';

export default { title: 'Card' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);