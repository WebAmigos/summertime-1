import type { Meta, StoryObj } from '@storybook/react';

import { UserForm } from './UserForm';

const meta = {
  title: 'Components/UserForm',
  component: UserForm,
  // tags: ['autodocs'],
} satisfies Meta<typeof UserForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
