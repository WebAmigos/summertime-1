import type { Meta, StoryObj } from '@storybook/react';

import { Emitter } from './Emitter';

const meta = {
  title: 'Components/Emitter',
  component: Emitter,
  // tags: ['autodocs'],
} satisfies Meta<typeof Emitter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
