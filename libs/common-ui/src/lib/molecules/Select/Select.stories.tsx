import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
  title: 'UI/Molecules/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {
    value: 1,
    label: 'Option 1',
  },
  {
    value: 2,
    label: 'Option 2',
  },
  {
    value: 3,
    label: 'Option 3',
  },
];

export const _Primary: Story = {
  args: {
    label: 'Choose option',
    options,
    name: 'Select 1',
  },
};

export const _WithSelectedOption: Story = {
  args: {
    label: 'Choose option',
    options,
    value: 2,
    name: 'Select 2',
  },
};
