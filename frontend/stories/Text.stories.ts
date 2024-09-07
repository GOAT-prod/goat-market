import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@/components/ui/text/text';

const meta = {
  title: 'ui/Text',
  component: Text,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'small']
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'p']
    }
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1'
  }
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2'
  }
};
