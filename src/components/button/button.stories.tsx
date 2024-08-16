import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'select',
      description: 'Text to display on Button',
      options: ['button', 'click me', 'ehw'],
    },
    size: {
      control: 'select',
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};
export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewPort: {
      defaultViewPort: 'mobile1',
    },
  },
};
