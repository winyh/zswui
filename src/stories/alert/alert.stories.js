import React from 'react';
import { Alert } from '../../components';

export default { title: 'Alert' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);