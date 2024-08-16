import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './text-area';

import { userEvent, within, expect } from '@storybook/test';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  args: {
    label: 'Text Area Label',
    placeholder: 'Enter some text here…',
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label of the text area',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text of the text area',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the text area',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks the text area as required',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} as Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithCount: Story = {
  args: {
    maxLength: 100,
  },
  play: async ({ canvasElement }) => {
    // canvasElement the playground that we are in
    const canvas = within(canvasElement); // within ( only looking in storybook canvas)
    const textArea = canvas.getByRole('textbox'); // text-area has aria role textbox
    //  get text span by test id ( data-testid)
    const count = canvas.getByTestId('length');
    // the above line will type Hello, World! in the text area and also show the count at bottom
    // next thing is to verify the count if hello world really means 13 characters
    const inputValue = 'Hello , World';
    await userEvent.type(textArea, inputValue); // await because you might be waiting for some test to get fulfilled
    expect(count).toHaveTextContent(inputValue.length.toString()); // check if the count is same as the length of the input value
  },
};

export const LengthTooLong: Story = {
  args: {
    maxLength: 100,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    const count = canvas.getByTestId('length');

    const inputValue = 'H' + 'e'.repeat(100) + 'y!'; // 100 e's
    await userEvent.type(textArea, inputValue);
    expect(count).toHaveTextContent(inputValue.length.toString());
    expect(textArea).toHaveAttribute('aria-invalid', 'true');
    expect(textArea).toHaveClass('dark:ring-danger-500');
  },
};

export const TextWitinDisabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toBeDisabled();
    await userEvent.type(textArea, 'Hello, World!');
    expect(textArea).toHaveValue('');
  },
};
