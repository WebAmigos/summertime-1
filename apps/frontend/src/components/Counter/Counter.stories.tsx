import type { Meta, StoryObj } from '@storybook/react';

import { Counter } from './Counter';

const meta = {
  title: 'Components/Counter',
  component: Counter,
  // tags: ['autodocs'],
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
