import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/shared/ui/button';

const meta = {
  title: 'ui/button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'ghost', 'link', 'outline']
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'icon', 'sm', 'lg']
    }
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// Button Variants

// <Button variant="default">Default</Button>
export const Default: Story = {
  args: {
    theme: 'default',
    children: 'Default'
  }
};

// <Button variant="secondary">Secondary</Button>
export const Secondary: Story = {
  args: {
    theme: 'secondary',
    children: 'Secondary'
  }
};

/*
    exports for all other variants
*/
