import type { Meta, StoryObj } from '@storybook/react';

import { EmployeeCard } from './EmployeeCard';

const meta = {
  title: 'Components/EmployeeCard',
  component: EmployeeCard,
  tags: ['autodocs'],
} satisfies Meta<typeof EmployeeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Primary: Story = {
  args: {
    firstName: 'Joe',
    lastName: 'Doe',
    role: 'Programmer',
    picture: 'https://tailwindcss.com/img/erin-lindford.jpg',
  },
};
