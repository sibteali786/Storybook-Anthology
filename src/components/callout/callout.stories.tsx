import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';

const meta = {
  title: 'Components/Callout',
  args: {
    title: 'An Important Message',
    children: 'This is a message that you should read.',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'information', 'default', 'success', 'warning', 'danger'],
    },
  },
  component: Callout,
} satisfies Meta;

export default meta;
export type Story = StoryObj<typeof Callout>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Information: Story = {
  args: {
    variant: 'information',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};
