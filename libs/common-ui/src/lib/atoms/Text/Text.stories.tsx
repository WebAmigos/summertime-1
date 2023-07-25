import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta = {
  title: 'UI/Atoms/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Text: Story = {
  args: {
    children: 'Today is payday'
  }
};

