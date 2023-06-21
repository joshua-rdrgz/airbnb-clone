import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
} as Meta<typeof Button>;

type Story = StoryObj<Meta<typeof Button>>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    intent: 'primary',
    size: 'large',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    intent: 'secondary',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    intent: 'primary',
    size: 'large',
    disabled: true,
  },
};
